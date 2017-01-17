import { SpritePlayer, SpriteBullet, ShootSound } from "../SpriteConstants";
import { CharacterWitdh, CharacterHeight, DirectionBoomerang } from "../Constants";
import { hasGamepad } from "../utils";

const Damage = 10;
const Velocity = 200;
const MaxBullet = 10;
const TimeLapse = 10;
const MaxLife = 1000;

class Character extends Phaser.Sprite {

  constructor(game, x, y, key, frame) {
    super(game, x, y, SpritePlayer, frame);
    game.physics.arcade.enable(this);
    //this.body.gravity.y = 500;
    this.body.bounce.x = this.body.bounce.y = 0;
    this.body.mass = 1;
    this.direction = 1;
    this.anchor.setTo(0.5, 0.5);
    this.life = MaxLife;

    const fire = [8, 9, 10, 11];
    const walk = [0, 1, 2, 3, 4, 5, 6, 7];
    const slide = [12, 13, 14, 15, 14, 13, 12];

    this.animations.add('walk', walk, TimeLapse, false);
    this.animations.add('slide', slide, TimeLapse, false);
    this.animations.add('fire', fire, TimeLapse * 6, false);

    this.weapon = game.add.weapon(MaxBullet, SpriteBullet);
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    this.weapon.bulletAngleOffset = 90;
    //this.weapon.addBulletAnimation("fire", fire, TimeLapse, true);
    this.weapon.bulletAngleVariance = 5;
    this.weapon.bulletSpeed = 500;
    this.weapon.fireRate = 300;

    this.weapon.trackSprite(this, 30, 20, true);
    this.shootFx = game.add.audio(ShootSound);
    this.shootFx.allowMultiple = true;
    this.shootFx.addMarker('shootMarker', 0, 0.3);

    game.input.gamepad.start();
    this.pad = game.input.gamepad.pad1;
    this.cursor = game.input.keyboard.createCursorKeys();

    this.fireButton = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    this.fireClick = game.input.activePointer.leftButton;

    this.up = game.input.keyboard.addKey(Phaser.Keyboard.Z);
    this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.Q);
    this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.down = game.input.keyboard.addKey(Phaser.Keyboard.S);

    this.lastDirection = null;
    this.useGamePad = false;
  }

  downActions() {
    this.body.velocity.y = Velocity;
    this.lastDirection = DirectionBoomerang.down;
  }

  leftActions() {
    this.body.velocity.x = -Velocity;
    this.direction = -1;
    this.lastDirection = DirectionBoomerang.left;
  }

  rightActions() {
    this.body.velocity.x = Velocity;
    this.direction = 1;
    this.lastDirection = DirectionBoomerang.right;
  }

  upActions() {
    this.body.velocity.y = -Velocity;
    this.lastDirection = DirectionBoomerang.up;
  }


  update() {
    if(!this.isDeath()) {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
      if (hasGamepad(this.game) && this.useGamePad) {
        const Y = this.pad.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_Y);
        const X = this.pad.axis(Phaser.Gamepad.XBOX360_STICK_RIGHT_X);
        if(X || Y) {
          this.rotation = Math.atan2(Y, X);
        }
      } else { // mouse
        this.rotation = this.game.physics.arcade.angleToPointer(this);
      }
      let move = null;

      if (this.cursor.left.isDown || this.leftKey.isDown || this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1 ) {
          this.leftActions();
          move = "left";
      }
      else if (this.cursor.right.isDown || this.rightKey.isDown || this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1) {
          this.rightActions();
          move = "right";
      }

      if (this.cursor.up.isDown || this.up.isDown || this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1) {
        this.upActions();
        move = "up";
      } else if (this.cursor.down.isDown || this.down.isDown || this.pad.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1) {
        this.downActions();
        move = "down";
      }

      if(this.fireButton.isDown || this.fireClick.isDown || this.pad.justPressed(Phaser.Gamepad.XBOX360_A)) {
        this.weapon.fire();
        if(!this.shootFx.isPlaying) {
          this.shootFx.play("shootMarker");
        }
        this.animations.play("fire");
      }
      this.anim(move);
    }
  }

  anim(move) {
    const angle = this.angle;
    if(move === "left") {
      if((angle < - 90 + 10 && angle > -90 - 10) || (angle > 90 - 10 && angle < 90 + 10)) {
        this.animations.play("slide");
      } else {
        this.animations.play("walk");
      }
    }

    if(move === "right") {
      if((angle < - 90 + 10 && angle > - 90 - 10) || (angle > 90 - 10 && angle < 90 + 10)) {
        this.animations.play("slide");
      } else {
        this.animations.play("walk");
      }
    }

    if(move === "up") {
      if((angle > - 10 && angle < 10) || (angle > - 180 + 10 && angle > 180 - 10)) {
        this.animations.play("slide");
      } else {
        this.animations.play("walk");
      }
    }

    if(move === "down") {
      if((angle > - 10 && angle < 10) || (angle > - 180 + 10 && angle > 180 - 10)) {
        this.animations.play("slide");
      } else {
        this.animations.play("walk");
      }
    }

    if(!move) {
      this.animations.stop("walk");
      this.animations.stop("slide");
    }
  }

  directionChoosed() {
    return this.lastDirection;
  }

  damage() {
    this.life = this.life - Damage;
  }

  cure() {
    this.life = this.life + Damage;
  }

  lifeInPercent() {
    return this.life / MaxLife;
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