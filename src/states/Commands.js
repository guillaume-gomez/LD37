class Commands extends Phaser.State {

  create() {
    this.game.add.text(10, 100, "Solve puzzles to find a way out", { font: "bold 33px Arial", fill: "#fff" });
    //this.game.add.text(100, 230, "Commands", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(30, 250, "Move", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(250, 250, "Arrows keys", { font: "bold 28px Arial", fill: "#fff" });
    
    this.game.add.text(30, 350, "Interact", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(250, 350, "Left mouse button", { font: "bold 28px Arial", fill: "#fff" });
    
    
    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  }

  update() {
    if(this.enterButton.isDown) {
      this.game.goToGame();
    }
  }

}

export default Commands;
