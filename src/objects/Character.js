import { SpritePlayer, SpriteBullet } from "../SpriteConstants";
import { CharacterWitdh, CharacterHeight, DirectionBoomerang } from "../Constants";

const Damage = 10;
const Velocity = 200;
const MaxBullet = 5;
const TimeLapse = 10;

class Character extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, SpritePlayer, frame);
    game.physics.arcade.enable(this);
    //this.body.gravity.y = 500;
    this.body.bounce.x = this.body.bounce.y = 0;
    this.body.mass = 1;
    this.direction = 1;
    this.anchor.setTo(0.5, 0.5);
    this.life = 1000;

    const walk = [1,2];
    const fire = [0];

    this.animations.add('walk', walk, TimeLapse, true);
    this.animations.add('fire', fire, TimeLapse, true);


    this.weapon = game.add.weapon(MaxBullet, SpriteBullet);
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletAngleOffset = 90;
    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 1000;

    this.weapon.trackSprite(this, 0, 15, true);
    this.cursor = game.input.keyboard.createCursorKeys();
    this.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    this.fireClick = game.input.activePointer.leftButton;
    this.lastDirection = null;
  }

  update() {
    this.rotation = this.game.physics.arcade.angleToPointer(this);
    this.body.velocity.x = 0;
    this.body.velocity.y = 0;
    if (this.cursor.left.isDown) {
        this.body.velocity.x = -Velocity;
        this.direction = -1;
        this.lastDirection = DirectionBoomerang.left;
        this.animations.play("walk", TimeLapse);
    }
    else if (this.cursor.right.isDown) {
        this.body.velocity.x = Velocity;
        this.direction = 1;
        this.lastDirection = DirectionBoomerang.right;
        this.animations.play("walk", TimeLapse);
    }

    if (this.cursor.up.isDown) {
      this.body.velocity.y = -Velocity;
      this.lastDirection = DirectionBoomerang.up;
      this.animations.play("walk", TimeLapse);
    } else if (this.cursor.down.isDown) {
      this.body.velocity.y = Velocity;
      this.lastDirection = DirectionBoomerang.down;
      this.animations.play("walk", TimeLapse);
    }

    if(this.fireButton.isDown || this.fireClick.isDown) {
      this.weapon.fire();
      this.animations.play("fire", TimeLapse);
    }

  }

  directionChoosed() {
    return this.lastDirection;
  }

  damage() {
    this.life = this.life - Damage;
  }

  isDeath() {
    return this.life < 0;
  }

  isOutSideTheLevel(game) {
    return this.body.position.x + CharacterWitdh < 0 ||
           this.body.position.x > game.world.bounds.width ||
           this.body.position.y < 0 ||
           this.body.position.y + CharacterHeight > game.world.bounds.height;
  }

  bullets() {
    return this.weapon.bullets;
  }

}

export default Character;