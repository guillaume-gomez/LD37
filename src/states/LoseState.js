class LoseState extends Phaser.State {

  create() {
    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.game.stage.backgroundColor = 0xFF0000;
  }


  update() {
    if(this.enterButton.isDown) {
      this.game.goToGame();
    }
  }

}

export default LoseState;
