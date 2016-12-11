import { SpriteEnemy } from "../SpriteConstants";
import { CharacterWitdh, CharacterHeight, EnemyWidth, EnemeyHeight } from "../Constants";

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

    const centerPlayerX = CharacterWitdh / 2;
    const centerPLayerY = CharacterHeight / 2;
    const centerEnemyX  = EnemyWidth / 2;
    const centerEnemyY  = EnemeyHeight / 2;

    if(playerPosition.x + centerPlayerX > this.body.position.x + centerEnemyX) {
      this.body.velocity.x = Velocity;
    } else if (playerPosition.x + centerPlayerX < this.body.position.x + centerEnemyX){
      this.body.velocity.x = -Velocity;
    }

    if(playerPosition.y + centerPLayerY > this.body.position.y + centerEnemyY) {
      this.body.velocity.y = Velocity;
    } else if (playerPosition.y + centerPLayerY < this.body.position.y + centerEnemyY) {
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