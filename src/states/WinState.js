import { GoodByeSound } from "SpriteConstants";


class WinState extends Phaser.State {

  create() {
    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.game.add.text(315, 150, "You win ", { font: "bold 40px Arial", fill: "#fff" });
    this.game.add.text(160, 350, "Press enter to play again ", { font: "bold 40px Arial", fill: "#fff" });
    this.game.stage.backgroundColor = "#2aaa11";

    this.goodByeFx = this.game.add.audio(GoodByeSound);
    this.goodByeFx.play();

  }

  preload() {
    this.game.load.audio(GoodByeSound, 'res/goodBye.mp3');
  }


  update() {
    if(this.enterButton.isDown) {
      this.game.goToGame();
    }
  }

}

export default WinState;
