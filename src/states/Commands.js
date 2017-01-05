class Commands extends Phaser.State {

  create() {
    this.game.add.text(300, 100, "Instructions", { font: "bold 33px Arial", fill: '#43d637', stroke: '#4D4D4D',strokeThickness: 6 });
    this.game.add.text(150, 180, "Kill all the zombies or leave the room", { font: "bold 28px Arial", fill: "#fff", stroke: '#4D4D4D',strokeThickness: 3 });
    
    this.game.add.text(300, 300, "Commands", { font: "bold 28px Arial", fill: "#FF3333", stroke: '#4D4D4D',strokeThickness: 3 });

    this.game.add.text(30, 350, "Move", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(350, 350, "Arrows keys", { font: "bold 28px Arial", fill: "#fff" });
    
    this.game.add.text(30, 400, "Shoot", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(350, 400, "Left mouse button / Space", { font: "bold 28px Arial", fill: "#fff" });
    
    this.game.add.text(30, 450, "Throw boomerang", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(350, 450, "Space + Arrows keys", { font: "bold 28px Arial", fill: "#fff" });
   

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  }

  update() {
    if(this.enterButton.isDown) {
      this.game.goToGame();
    }
  }

}

export default Commands;
