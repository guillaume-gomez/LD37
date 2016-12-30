import { getRandomArbitrary } from "utils";
import {
  Wall,
  SpritePlayer,
  SpriteEnemy,
  SpriteEnemy2,
  SpriteBullet,
  BoomerangSprite,
  DeathSound,
  Background,
  LightSprite
} from "SpriteConstants";
import {
  CameraVelocity,
  FlashColor,
  FlashDuration,
  ShakeIntensity,
  ShakeDuration,
  SpriteWidth,
  SpriteHeight,
  EnemyWidth,
  EnemyHeight,
  Border,
  CharacterWitdh,
  CharacterHeight,
  BoomerangWidth,
  BoomerangHeight
  } from "Constants";

import Player from "objects/Character";
import Boomerang from "objects/Boomerang";
import Room from "objects/Room";
import BackgroundLayer from "objects/BackgroundLayer";
import EnemyGroup from "objects/EnemyGroup";
import ChandelierLayer from "objects/ChandelierLayer";


const needCamera = false;

const MinDivision = 1;
const MaxDivision = 5;

const Division = getRandomArbitrary(MinDivision, MaxDivision);

const MaxBorder = 60;
const MinBorder = 30;

const SizeMaze = getRandomArbitrary(MinBorder, MaxBorder);
// assuming SpriteWidth = SpriteHeight
const Bounds = 2 * Border + SizeMaze * SpriteWidth;


class Game extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = 0x000000;
    this.game.world.setBounds(0, 0, Bounds, Bounds);
    this.room = new Room(this.game);
    this.room.createRandomSquare(Border,Border,SizeMaze, Division);

    this.hero = new Player(this.game, 100, 100);
    this.game.add.existing(this.hero);
    this.getInitialPosition(this.hero, CharacterWitdh, CharacterHeight);

    //this.bgLayer = new BackgroundLayer(this.game, this.hero.x, this.hero.y, this.room.getRoomBordered());
    
    this.boomerang = new Boomerang(this.game, 0, 0);
    this.getInitialPosition(this.boomerang, BoomerangWidth, BoomerangHeight);
    this.game.add.existing(this.boomerang);

    this.enemies = new EnemyGroup(this.game);
    this.chandelierLayer = new ChandelierLayer(this.game);

    if(needCamera) {
      this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    this.camera.follow(this.hero);
    this.launchBoomerangKey = this.game.input.keyboard.addKey(Phaser.Keyboard.B);

    //sounds
    this.deathFx = this.game.add.audio(DeathSound);

  }

  getInitialPosition(sprite, spriteWidth, spriteHeight) {
    let maxAttempt = 0;
    let hasBlock = false;
    do {
      const x = getRandomArbitrary(2 * Border, this.game.world.bounds.width - spriteWidth - 2 * Border);
      const y = getRandomArbitrary(2 * Border, this.game.world.bounds.height - spriteHeight - 2 * Border);
      sprite.position.setTo(x,y);
      maxAttempt = maxAttempt + 1;
      hasBlock = this.game.physics.arcade.collide(sprite, this.room);
    } while(maxAttempt < 10 && hasBlock);
  }

  update() {
    this.game.physics.arcade.overlap(this.hero, this.enemies, this.damage, null, this);
    this.game.physics.arcade.overlap(this.hero.bullets(), this.enemies, this.kill, null, this);
    this.game.physics.arcade.overlap(this.enemies, this.room, this.pushBlock, null, this);

    this.game.physics.arcade.collide(this.enemies);
    this.game.physics.arcade.collide(this.hero.bullets(), this.room, this.killBullet);
    this.game.physics.arcade.collide(this.enemies, this.boomerang, this.killByBoomerang, null, this);
    this.game.physics.arcade.collide(this.hero, this.room);
    this.game.physics.arcade.collide(this.boomerang, this.room, this.killBoomerang, null, this);
    this.game.physics.arcade.overlap(this.hero, this.boomerang, this.launchBoomerang, null, this);
    this.enemies.follow(this.hero.body.position);

    if(this.hero.isDeath()) {
      this.lost();
    }

     if(this.hero.isOutSideTheLevel(this.game) || !this.enemies.hasEnemies()) {
        this.won();
     }
  }

  kill(bullet, enemy) {
    this.enemies.remove(enemy);
    bullet.kill();
  }

  killBullet(bullet) {
    bullet.kill();
  }

  killByBoomerang(boomerang, enemy) {
    if(boomerang.isMoving()) {
      this.enemies.remove(enemy);
    }
  }

  killBoomerang(boomerang) {
    boomerang.kill();
    this.camera.follow(this.hero, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
  }

  damage() {
    this.hero.damage();
    this.camera.flash(FlashColor, FlashDuration);
  }

  pushBlock(enemy, block) {
    this.game.camera.shake(ShakeIntensity, ShakeDuration);
    const enemyLeft = enemy.body.position.x;
    const enemyRight = enemy.body.position.x + EnemyWidth;
    const enemyTop = enemy.body.position.y - EnemyHeight;
    const enemyBottom = enemy.body.position.y;

    const blockLeft = block.body.position.x;
    const blockRight = block.body.position.x + SpriteWidth;
    const blockTop = block.body.position.y - SpriteHeight;
    const blockBottom = block.body.position.y;

    const bigValue = 1000;
    let left = bigValue
    let right = bigValue;
    let up = bigValue;
    let down = bigValue;

    if( enemyLeft < blockLeft &&
        blockLeft < enemyRight &&
        enemyRight < blockRight
      ) {
      left = enemyRight - blockLeft;
    }

    if( blockLeft < enemyLeft &&
        enemyLeft < blockRight &&
        blockRight < enemyRight
     ) {
      right = blockRight - enemyLeft;
    }

    if( enemyTop < blockTop &&
        blockTop < enemyBottom &&
        enemyBottom < blockBottom
      ) {
      up = enemyBottom - blockTop;
    }

    if( blockTop < enemyTop &&
        enemyTop < blockBottom &&
        blockBottom < enemyBottom
    ) {
      down = blockBottom - enemyTop;
    }

    if(left < right && left < up  &&  left < down ) {
       block.body.position.x += 1;
    } else if( right < left && right < up  &&  right < down ) {
      block.body.position.x -= 1;
    } else if( up < down && up < left && up < right) {
      block.body.position.y += 1;
    } else if (down < up && down < left && down < right) {
      block.body.position.y -= 1;
    }

  }

  launchBoomerang() {
    if(this.launchBoomerangKey.isDown) {
      this.camera.follow(this.boomerang);
      // after the tween get back to the player
      const onCompleteCallback = (boomerang, tween) => {
         boomerang.kill();
         tween.stop()
         this.camera.follow(this.hero, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
      };
      // the first param is the direction
      this.boomerang.launch(this.hero.directionChoosed(), onCompleteCallback);
    }
  }

  lost() {
    this.hero.kill();
    this.deathFx.play();
     setTimeout(() => {
       this.room.clear();
       this.game.goToLose();
     }, 500);
  }

  won() {
    this.game.goToWin();
  }

  preload() {
    this.game.load.image(Wall, "res/block.png");
    this.game.load.spritesheet(SpritePlayer, "res/player.png", CharacterWitdh, CharacterHeight);
    this.game.load.spritesheet(SpriteEnemy, "res/zombie.png", EnemyWidth, EnemyHeight);
    this.game.load.spritesheet(SpriteEnemy2, "res/zombie2.png", EnemyWidth, EnemyHeight);
    this.game.load.image(SpriteBullet, "res/bullet.png");
    this.game.load.image(BoomerangSprite, "res/ufoRed.png");
    this.game.load.image(Background, "res/boomerang.png");
    this.game.load.image(LightSprite, "res/light.png");
    this.game.load.audio(DeathSound, 'res/painSoundBible.com.mp3');
  }

  render() {
    //this.enemies.render(this.game);
    //this.game.debug.spriteInfo(this.hero, 32, 32);
    //this.game.debug.text(Bounds, 2, 14, "#ff0000");
    //this.game.debug.spriteInfo(this.hero, 32, 32);
  }

  moveCamera() {
    if(needCamera) {
      if (this.cursors.up.isDown)
      {
        this.game.camera.y -= CameraVelocity;
      }
      else if (this.cursors.down.isDown)
      {
        this.game.camera.y += CameraVelocity;
      }

      if (this.cursors.left.isDown)
      {
        this.game.camera.x -= CameraVelocity;
      }
      else if (this.cursors.right.isDown)
      {
        this.game.camera.x += CameraVelocity;
      }
    }
  }


}

export default Game;
