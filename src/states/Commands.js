class Commands extends Phaser.State {

  hasGamepad() {
    return this.game.input.gamepad.supported && this.game.input.gamepad.active && this.game.input.gamepad.pad1.connected;
  }

  create() {
    const moveText = this.hasGamepad() ? "Arrows keys" : "Arrows keys/ Left Pad";
    const shootText = this.hasGamepad() ? "Left mouse button / Space / A" : "Left mouse button / Space";
    const boomerangText = this.hasGamepad() ? "Space / A + Arrows keys / Left Pad" : "Space + Arrows keys";

    this.game.add.text(300, 100, "Instructions", { font: "bold 33px Arial", fill: '#43d637', stroke: '#4D4D4D',strokeThickness: 6 });
    this.game.add.text(150, 180, "Kill all the zombies or leave the room", { font: "bold 28px Arial", fill: "#fff", stroke: '#4D4D4D',strokeThickness: 3 });
    
    this.game.add.text(300, 300, "Commands", { font: "bold 28px Arial", fill: "#FF3333", stroke: '#4D4D4D',strokeThickness: 3 });

    this.game.add.text(30, 350, "Move", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(330, 350, moveText, { font: "bold 28px Arial", fill: "#fff" });
    
    this.game.add.text(30, 400, "Shoot", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(330, 400, shootText, { font: "bold 28px Arial", fill: "#fff" });
    
    this.game.add.text(30, 450, "Throw boomerang", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(330, 450, boomerangText, { font: "bold 28px Arial", fill: "#fff" });

    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.game.input.gamepad.start();
  }

  update() {
    if(this.enterButton.isDown) {
      this.game.goToGame();
    }
    this.hasGamepad();
  }

}

export default Commands;
