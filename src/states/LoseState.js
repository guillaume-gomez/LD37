class LoseState extends Phaser.State {

  create() {
    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.game.add.text(325, 150, "You lose ", { font: "bold 40px Arial", fill: "#fff" });
    this.game.add.text(160, 350, "Press enter to play again ", { font: "bold 40px Arial", fill: "#fff" });
    this.game.stage.backgroundColor = "#e54424";
  }


  update() {
    if(this.enterButton.isDown) {
      this.game.goToGame();
    }
  }

}

export default LoseState;
