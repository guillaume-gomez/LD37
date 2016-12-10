import { SpriteConstants } from "../SpriteConstants";

class Character extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, SpriteConstants, frame);
    //Enable physics on the player
    game.physics.arcade.enable(this);
    this.body.bounce.x = this.body.bounce.y = 0;
    this.cursor = game.input.keyboard.createCursorKeys();
    //this.body.gravity.y = 500;
    this.body.mass = 1;
    this.direction = 1;
  }

  update() {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    if (this.cursor.left.isDown) {
        this.body.velocity.x = -200;
        this.direction = -1;
    }
    else if (this.cursor.right.isDown) {
        this.body.velocity.x = 200;
        this.direction = 1;
    }

    if (this.cursor.up.isDown) {
      this.body.velocity.y = -200;
    } else if (this.cursor.down.isDown) {
      this.body.velocity.y = 200;
    }
  }

  isDeath() {
    if (!this.body) {
      return false;
    }
  }
}

export default Character;