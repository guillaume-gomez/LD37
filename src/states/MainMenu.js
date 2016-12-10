import { LD, Wall } from "SpriteConstants";
import { CameraVelocity, Bounds } from "Constants";

import Player from "objects/Character";
import Room from "objects/Room";

class MainMenu extends Phaser.State {

  create() {
    this.game.world.setBounds(0, 0, Bounds, Bounds);
    this.game.add.sprite(50,100, LD);
    this.room = new Room(this.game);
    this.game.add.existing(this.room);

    this.player = new Player(this.game,45,78);
    this.game.add.existing(this.player);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    //this.room.createRandomLine(32, 128, 32 + 9 * 32, 128, 3);
    //this.room.createLine(20, 400, 400, 400);
    this.room.createRandomSquare(32,0,18,1, +2, 1 );
  }

  update() {
  }

  moveCamera() {
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

  preload() {
    this.game.load.image(LD, "res/LD.png");
    this.game.load.image(Wall, "res/1.png");
    this.game.load.image(Player, "res/player.png");
  }

}

export default MainMenu;
