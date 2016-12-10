import { LD, Wall, SpritePlayer, SpriteEnemy } from "SpriteConstants";
import { CameraVelocity, Bounds, FlashColor, FlashDuration } from "Constants";

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

    this.hero = new Player(this.game,150,100);
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
    this.game.physics.arcade.collide(this.hero, this.room);
    this.game.physics.arcade.overlap(this.hero, this.enemy, this.damage, null, this);
    if(!this.game.physics.arcade.collide(this.enemy, this.room, this.pushBlock)) {
    } // else if pushblocks function
    if(this.hero.body.position) this.enemy.follow(this.hero.body.position);
  }

  damage() {
    //this.hero.damage(5);
    this.camera.flash(FlashColor, FlashDuration);
  }

  //temp
  pushBlock(sprite1, sprite2) {
    sprite2.body.velocity.x += 1;
    sprite1.body.velocity.x = 100;
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

  preload() {
    this.game.load.image(LD, "res/LD.png");
    this.game.load.image(Wall, "res/1.png");
    this.game.load.image(SpritePlayer, "res/player.png");
    this.game.load.image(SpriteEnemy, "res/enemy.png");
  }

  render() {
     //this.game.debug.spriteInfo(this.hero, 32, 32);
  }

}

export default MainMenu;
