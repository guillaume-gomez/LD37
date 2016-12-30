import { CharacterWitdh, CharacterHeight, EnemyWidth, EnemyHeight } from "../Constants";

const VisionEnemy = 399;
const TimeLapse = 10;

class Enemy extends Phaser.Sprite {

  constructor(game, x, y, vel, sprite) {
    super(game, x, y, sprite, 0);
    //Enable physics on the player
    game.physics.arcade.enable(this);
    this.body.bounce.x = this.body.bounce.y = 0;
    this.body.collideWorldBounds = true;
    this.body.mass = 10;
    this.direction = 1;
    this.vel = vel;
    this.anchor.setTo(0.5, 0.5);
    const walk = [0, 1, 2, 3, 4, 5, 6, 7];
    this.animations.add('walk', walk, TimeLapse, true);
  }

  follow(playerPosition) {
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;

    const centerPlayerX = CharacterWitdh / 2;
    const centerPLayerY = CharacterHeight / 2;
    const centerEnemyX  = EnemyWidth / 2;
    const centerEnemyY  = EnemyHeight / 2;

    const targetAngle = this.game.math.angleBetween( this.x, this.y, playerPosition.x, playerPosition.y);
    this.rotation = targetAngle - Math.PI / 2;
    
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
    this.animations.play("walk", TimeLapse);
  }

}

export default Enemy;