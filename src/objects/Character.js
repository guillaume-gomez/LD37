import { SpritePlayer, SpriteBullet } from "../SpriteConstants";
import { CharacterWitdh, CharacterHeight } from "../Constants";

const Damage = 10;
const Velocity = 200;
const MaxBullet = 10;

class Character extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, SpritePlayer, frame);
    game.physics.arcade.enable(this);
    //this.body.gravity.y = 500;
    this.body.bounce.x = this.body.bounce.y = 0;
    this.body.mass = 1;
    this.direction = 1;
    this.anchor.setTo(0.5, 0.5);
    this.life = 10000;

    this.weapon = game.add.weapon(MaxBullet, SpriteBullet);
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletAngleOffset = 90;
    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 200;

    this.weapon.trackSprite(this, 0, 0, true);
    this.cursor = game.input.keyboard.createCursorKeys();
    this.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  }

  update() {
    this.rotation = this.game.physics.arcade.angleToPointer(this);
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    if (this.cursor.left.isDown) {
        this.body.velocity.x = -Velocity;
        this.direction = -1;
    }
    else if (this.cursor.right.isDown) {
        this.body.velocity.x = Velocity;
        this.direction = 1;
    }

    if (this.cursor.up.isDown) {
      this.body.velocity.y = -Velocity;
    } else if (this.cursor.down.isDown) {
      this.body.velocity.y = Velocity;
    }

    if(this.fireButton.isDown) {
      console.log('X:' + this.game.input.activePointer.x);
      debugger
      this.weapon.fire();
    }

  }

  damage() {
    this.life = this.life - Damage;
  }

  isDeath() {
    if (this.life > 0) {
      return false;
    }
  }

  bullets() {
    return this.weapon.bullets;
  }

}

export default Character;