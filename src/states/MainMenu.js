import { LD, Wall, SpritePlayer, SpriteEnemy, SpriteBullet } from "SpriteConstants";
import { CameraVelocity, Bounds, FlashColor, FlashDuration, SpriteWidth, SpriteHeight, EnemyWidth, EnemyHeight } from "Constants";

import Player from "objects/Character";
import Room from "objects/Room";
import Enemy from "objects/Enemy";

const needCamera = false;

class MainMenu extends Phaser.State {

  create() {
    this.game.world.setBounds(0, 0, Bounds, Bounds);
    this.game.add.sprite(50,100, LD);
    this.room = new Room(this.game);
    this.game.add.existing(this.room);

    this.hero = new Player(this.game,1000,100);
    this.game.add.existing(this.hero);

    this.enemy = new Enemy(this.game,300,100);
    this.game.add.existing(this.enemy);

    if(needCamera) {
      this.cursors = this.game.input.keyboard.createCursorKeys();
    }
    //this.room.createRandomLine(32, 128, 32 + 9 * 32, 128, 3);
    //this.room.createLine(20, 400, 400, 400);
    this.camera.follow(this.hero);
    this.room.createRandomSquare(32,0,18,1, +2, 1 );
  }

  update() {
    this.game.physics.arcade.overlap(this.hero, this.enemy, /*this.damage*/null, null, this);
    this.game.physics.arcade.overlap(this.hero.bullets(), this.enemy, this.kill);
    this.game.physics.arcade.overlap(this.enemy, this.room, this.pushBlock);

    this.game.physics.arcade.collide(this.hero.bullets(), this.room, this.killBullet);
   // this.game.physics.arcade.collide(this.hero, this.room);
    this.enemy.follow(this.hero.body.position);
  }

  kill(enemy, bullet) {
    bullet.kill();
    enemy.kill();
  }

  killBullet(bullet) {
    bullet.kill();
  }

  damage() {
    this.hero.damage();
    this.camera.flash(FlashColor, FlashDuration);
  }

  pushBlock(enemy, block) {
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

  preload() {
    this.game.load.image(LD, "res/LD.png");
    this.game.load.image(Wall, "res/1.png");
    this.game.load.image(SpritePlayer, "res/player.png");
    this.game.load.image(SpriteEnemy, "res/enemy.png");
    this.game.load.image(SpriteBullet, "res/bullet.png");
  }

  render() {
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

export default MainMenu;
