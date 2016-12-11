import { SpriteEnemy } from "../SpriteConstants";
import { CharacterWitdh, CharacterHeight, EnemyWidth, EnemyHeight } from "../Constants";

const VisionEnemy = 399;

class Enemy extends Phaser.Sprite {

  constructor(game, x, y, vel) {
    super(game, x, y, SpriteEnemy, 0);
    //Enable physics on the player
    game.physics.arcade.enable(this);
    this.body.bounce.x = this.body.bounce.y = 0;
    this.body.collideWorldBounds = true;
    this.body.mass = 10;
    this.direction = 1;
    this.vel = vel;
  }

  follow(playerPosition) {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    const centerPlayerX = CharacterWitdh / 2;
    const centerPLayerY = CharacterHeight / 2;
    const centerEnemyX  = EnemyWidth / 2;
    const centerEnemyY  = EnemyHeight / 2;

    if(playerPosition.x + centerPlayerX > this.body.position.x + centerEnemyX) {
      this.body.velocity.x = this.vel;
    } else if (playerPosition.x + centerPlayerX < this.body.position.x + centerEnemyX){
      this.body.velocity.x = -this.vel;
    }

    if(playerPosition.y + centerPLayerY > this.body.position.y + centerEnemyY) {
      this.body.velocity.y = this.vel;
    } else if (playerPosition.y + centerPLayerY < this.body.position.y + centerEnemyY) {
      this.body.velocity.y = -this.vel;
    }
  }
}

export default Enemy;