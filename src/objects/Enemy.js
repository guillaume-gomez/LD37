import { SpriteEnemy } from "../SpriteConstants";

const VisionEnemy = 399;
const Velocity = 50;

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
    //this.body.velocity.x = 100;
  }

  follow(playerPosition) {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    if(playerPosition.x > this.body.position.x) {
      this.body.velocity.x = Velocity;
    } else if (playerPosition.x < this.body.position.x){
      this.body.velocity.x = -Velocity;
    }

    if(playerPosition.y > this.body.position.y) {
      this.body.velocity.y = Velocity;
    } else if (playerPosition.y < this.body.position.y) {
      this.body.velocity.y = -Velocity;
    }
  }

  isDeath() {
    if (!this.body) {
      return false;
    }
  }
}

export default Enemy;