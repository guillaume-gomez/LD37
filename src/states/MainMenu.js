import { LD, Wall } from "SpriteConstants";
import Room from "objects/Room";

class MainMenu extends Phaser.State {

  create() {
    this.game.add.sprite(50,100, LD);
    this.room = new Room(this.game)
    this.game.add.existing(this.room);
    this.room.createLine(20, 400, 300, 300);
  }

  preload() {
    this.game.load.image(LD, "res/LD.png");
    this.game.load.image(Wall, "res/1.png");
  }

  update() {
  }

}

export default MainMenu;
