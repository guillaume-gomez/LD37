class WinState extends Phaser.State {

  create() {
    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.game.stage.backgroundColor = 0x00FF00;
  }


  update() {
    if(this.enterButton.isDown) {
      this.game.goToGame();
    }
  }

}

export default WinState;
