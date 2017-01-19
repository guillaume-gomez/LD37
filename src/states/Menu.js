import { initAndInstallGamepad1 } from "../utils";

class Menu extends Phaser.State {

  create() {
    this.pad = initAndInstallGamepad1(this.game);
    this.game.add.sprite(175,100, "LD");
    this.game.add.text(230, 230, "Press enter to start", { font: "bold 34px Arial", fill: "#fff" });
    this.game.add.text(280, 350, "Thanks for playing ! :)", { font: "bold 19px Arial", fill: "#fff" })
    this.game.add.text(200, 400, "Compo during LD37 in December 2016", { font: "bold 19px Arial", fill: "#fff" });
    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  }

  preload() {
    this.game.load.image("LD", "res/LD.png");
  }

  update() {
    if(this.enterButton.isDown || this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
      this.game.goToCommands();
    }
  }

}

export default Menu;
