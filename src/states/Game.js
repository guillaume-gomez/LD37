import { getRandomArbitrary } from "utils";
import {
  Wall,
  SpritePlayer,
  SpriteEnemy,
  SpriteEnemy2,
  SpriteEnemy3,
  SpriteBullet,
  BoomerangSprite,
  ButtonSoundSprite,
  DeathSound,
  Background,
  LightSprite,
  Medikit,
  ShootSound,
  HurtSound,
  BackgroundSound
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
  BoomerangHeight,
  KillText,
  KillTextX,
  KillTextY,
  SoundButtonX,
  SoundButtonY,
  WidthSoundButton,
  HeightSoundButton,
  } from "Constants";

import { HeathBarConfig, HeathBarX, HeathBarY } from "HealthBarConstants";

import Player from "objects/Character";
import Boomerang from "objects/Boomerang";
import Room from "objects/Room";
import BackgroundLayer from "objects/BackgroundLayer";
import EnemyGroup from "objects/EnemyGroup";
import ChandelierLayer from "objects/ChandelierLayer";
import HealthBar from "objects/HealthBar";
import MedikitGroup from "objects/MedikitGroup";
import BackgroundShader from "objects/BackgroundShader";
import CrtFilter from "objects/CrtFilter";
import DistortionFilter from "objects/DistortionFilter";


const needCamera = false;

const MinDivision = 1;
const MaxDivision = 5;

const Division = getRandomArbitrary(MinDivision, MaxDivision);

const MaxBorder = 120;
const MinBorder = 30;

const SizeMaze = getRandomArbitrary(MinBorder, MaxBorder);
// assuming SpriteWidth = SpriteHeight
const Bounds = 2 * Border + SizeMaze * SpriteWidth;


class Game extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = 0x000000;
    this.bg = new BackgroundShader(this.game);
    this.game.world.setBounds(0, 0, Bounds, Bounds);
    this.game.add.existing(this.bg);
    this.room = new Room(this.game);
    this.room.createRandomSquare(Border,Border,SizeMaze, Division);

    this.medikitGroup = new MedikitGroup(this.game);

    this.boomerang = new Boomerang(this.game, 0, 0);
    this.getInitialPosition(this.boomerang, BoomerangWidth, BoomerangHeight);
    this.game.add.existing(this.boomerang);

    this.hero = new Player(this.game, this.game.world.centerX, this.game.world.centerX);
    this.game.add.existing(this.hero);
    this.getInitialPosition(this.hero, CharacterWitdh, CharacterHeight);

    this.enemies = new EnemyGroup(this.game);
    this.chandelierLayer = new ChandelierLayer(this.game);
    //shaders
    this.game.stage.filters = [new DistortionFilter(this.game), new CrtFilter(this.game)];

    if(needCamera) {
      this.cursors = this.game.input.keyboard.createCursorKeys();
    } else {
      this.camera.follow(this.hero);
    }
    this.launchBoomerangKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    this.soundButton = this.game.add.button(SoundButtonX, SoundButtonY, ButtonSoundSprite, this.toggleSound, this, 0, 0, 0);
    //sounds
    this.deathFx = this.game.add.audio(DeathSound);
    this.deathFx.volume = 0.5;

    this.hurtFx = this.game.add.audio(HurtSound);
    this.hurtFx.allowMultiple = true;
    this.hurtFx.addMarker('hurtMarker', 0, 0.5);

    this.music = this.game.add.audio(BackgroundSound);
    this.music.play();


    this.frag = 0;
    this.killText = this.game.add.text(400, 400, KillText, { font: "bold 33px Arial", fill: '#43d637', stroke: '#4D4D4D',strokeThickness: 6 });
    this.healthBar = new HealthBar(this.game, HeathBarConfig);
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
    this.game.physics.arcade.overlap(this.hero, this.medikitGroup , this.cureHero, null, this);
    this.enemies.follow(this.hero.body.position);

    if(this.hero.isDeath()) {
      this.lost();
    }

     if(this.hero.isOutSideTheLevel(this.game) || !this.enemies.hasEnemies()) {
        this.won();
     }

     this.updateGui();

     if(needCamera) {
      this.moveCamera();
    }
  }

  updateGui() {
    this.killText.setText(KillText + this.frag);
    this.killText.x = this.game.camera.x + KillTextX;
    this.killText.y = this.game.camera.y + KillTextY;

    this.healthBar.setPosition(this.game.camera.x + HeathBarX, this.game.camera.y + HeathBarY);

    this.soundButton.x = this.game.camera.x + SoundButtonX;
    this.soundButton.y = this.game.camera.y + SoundButtonY;
  }

  kill(bullet, enemy) {
    this.enemies.remove(enemy);
    this.frag = this.frag + 1;
    bullet.kill();
  }

  killBullet(bullet) {
    bullet.kill();
  }

  killByBoomerang(boomerang, enemy) {
    if(boomerang.isMoving()) {
      this.frag = this.frag + 1;
      this.enemies.remove(enemy);
    }
  }

  killBoomerang(boomerang) {
    boomerang.kill();
  }

  damage() {
    this.hero.damage();
    if(!this.hurtFx.isPlaying) {
      this.hurtFx.play('hurtMarker', 0, 0.5);
    }
    this.healthBar.setPercent(this.hero.lifeInPercent() * 100);
    this.camera.flash(FlashColor, FlashDuration);
  }

  cureHero(hero, medikit) {
    if(this.hero.lifeInPercent() !== 1) {
      medikit.kill();
      this.hero.cure();
      this.healthBar.setPercent(this.hero.lifeInPercent() * 100);
    }
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
    if(this.launchBoomerangKey.isDown || this.hero.hasPressedA()) {
      // after the tween get back to the player
      const onCompleteCallback = (boomerang, tween) => {
         boomerang.kill();
         tween.stop()
      };
      // the first param is the direction
      this.boomerang.launch(this.hero.directionChoosed(), onCompleteCallback);
    }
  }

  lost() {
    this.hero.kill();
    if(!this.deathFx.isPlaying) {
      //this.deathFx.play();
    }
     setTimeout(() => {
       this.bg.kill();
       this.room.clear();
       this.chandelierLayer.clear();
       this.boomerang.kill();
       this.game.goToLose();
     }, 500);
  }

  won() {
    this.bg.kill();
    this.game.goToWin();
  }

  preload() {
    this.game.load.image(Wall, "res/block.png");
    this.game.load.spritesheet(SpritePlayer, "res/hero-sprite.png", CharacterWitdh, CharacterHeight);
    this.game.load.spritesheet(SpriteEnemy, "res/zombie.png", EnemyWidth, EnemyHeight);
    this.game.load.spritesheet(SpriteEnemy2, "res/zombie2.png", EnemyWidth, EnemyHeight);
    this.game.load.spritesheet(SpriteEnemy3, "res/zombie1.png", EnemyWidth, EnemyHeight);
    this.game.load.spritesheet(ButtonSoundSprite, 'res/sound_button.png', WidthSoundButton, HeightSoundButton);
    this.game.load.image(SpriteBullet, "res/bullet.png");
    this.game.load.image(BoomerangSprite, "res/ufoRed.png");
    this.game.load.image(Background, "res/boomerang.png");
    this.game.load.image(LightSprite, "res/light.png");
    this.game.load.image(Medikit, "res/medikit.png");
    this.game.load.audio(DeathSound, 'res/death.mp3');
    this.game.load.audio(ShootSound, 'res/shoot.mp3');
    this.game.load.audio(HurtSound, 'res/pain.mp3');
    this.game.load.audio(BackgroundSound, 'res/music.mp3');
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

  toggleSound() {
    this.game.sound.mute = !this.game.sound.mute;
    const frame = this.game.sound.mute === true ? 1 : 0;
    this.soundButton.setFrames(frame);
  }


}

export default Game;
