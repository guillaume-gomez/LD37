import { hasGamepad, initAndInstallGamepad1 } from "../utils";

class Commands extends Phaser.State {

  hasGamepad() {
    return this.game.input.gamepad.supported && this.game.input.gamepad.active && this.game.input.gamepad.pad1.connected;
  }

  create() {
    this.pad = initAndInstallGamepad1(this.game);
    const moveText = this.hasGamepad(this.game) ? "Arrows keys" : "Arrows keys/ Left Pad";
    const shootText = this.hasGamepad(this.game) ? "Left mouse button / Space / A" : "Left mouse button / Space";
    const boomerangText = this.hasGamepad(this.game) ? "Space / A + Arrows keys / Left Pad" : "Space + Arrows keys";
    const aimText = this.hasGamepad(this.game) ? "Mouse / Right Pad " : "Mouse";

    this.game.add.text(300, 75, "Instructions", { font: "bold 33px Arial", fill: '#43d637', stroke: '#4D4D4D',strokeThickness: 6 });
    this.game.add.text(150, 150, "Kill all the zombies or leave the room", { font: "bold 28px Arial", fill: "#fff", stroke: '#4D4D4D',strokeThickness: 3 });
    
    this.game.add.text(300, 250, "Commands", { font: "bold 28px Arial", fill: "#FF3333", stroke: '#4D4D4D',strokeThickness: 3 });

    this.game.add.text(30, 300, "Move", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(330, 300, moveText, { font: "bold 28px Arial", fill: "#fff" });
    
    this.game.add.text(30, 350, "Shoot", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(330, 350, shootText, { font: "bold 28px Arial", fill: "#fff" });
    
    this.game.add.text(30, 400, "Aim", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(330, 400, aimText, { font: "bold 28px Arial", fill: "#fff" });

    this.game.add.text(30, 450, "Throw boomerang", { font: "bold 28px Arial", fill: "#fff" });
    this.game.add.text(330, 450, boomerangText, { font: "bold 28px Arial", fill: "#fff" });

    if(this.hasGamepad(this.game)) {
      this.game.add.text(30 ,540, "If you use gamepad, play on chrome(firefox has a different key binding)", { font: "bold 22px Arial", fill: "#fff" });
    }
    this.enterButton = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.game.input.gamepad.start();
  }

  update() {
    if(this.enterButton.isDown || this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
      this.game.goToGame();
    }
    this.hasGamepad(this.game);
  }

}

export default Commands;
