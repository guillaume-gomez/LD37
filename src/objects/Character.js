class Character extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);
    //Enable physics on the player
    game.physics.arcade.enable(this);
    this.body.bounce.x = this.body.bounce.y = 0;
    this.cursor = game.input.keyboard.createCursorKeys();
    this.body.gravity.y = 500;
    this.direction = 1;
  }

  update() {
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