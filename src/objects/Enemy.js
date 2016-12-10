import { SpriteEnemy } from "../SpriteConstants";

class Enemy extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, SpriteEnemy, frame);
    //Enable physics on the player
    game.physics.arcade.enable(this);
    this.body.bounce.x = this.body.bounce.y = 0;
    this.cursor = game.input.keyboard.createCursorKeys();
    //this.body.gravity.y = 500;
    this.body.mass = 10;
    this.direction = 1;
    this.body.velocity.x = 100
  }

  update(player) {
  }

  isDeath() {
    if (!this.body) {
      return false;
    }
  }
}

export default Enemy;