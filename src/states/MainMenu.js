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

    this.game.physics.arcade.collide(this.hero.bullets(), this.room, this.killBullet);
    this.game.physics.arcade.collide(this.hero, this.room);
    this.game.physics.arcade.collide(this.enemy, this.room, this.pushBlock);
    if(this.hero.body.position) {
      this.enemy.follow(this.hero.body.position);
    }
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

  //temp
  pushBlock(enemy, block) {
    const overlapX = block.body.position.x - enemy.body.position.x;
    const overlapY = block.body.position.y - enemy.body.position.y;
    // debugger
    // console.log(enemy.body.position.y)
    // console.log(block.body.position.y)
    // if(enemy.body.position.y <= block.body.position.y - SpriteHeight) {
    //   block.body.position.y += 1;
    // } else if (enemy.body.position.y - EnemyHeight >= block.body.position.y) {
    //   block.body.position.y -= 1;
    // } else if(enemy.body.position.x + EnemyWidth >= block.body.position.x) {
    //   block.body.position.x += 1;
    // } else if(enemy.body.position.x <= block.body.position.x + SpriteWidth) {
    //   block.body.position.x -= 1;
    // }


    block.body.position.x += overlapX / Math.abs(overlapX);
    //block.body.position.y += overlapY / Math.abs(overlapY);
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
