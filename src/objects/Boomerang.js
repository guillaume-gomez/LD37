import { BoomerangSprite, SpriteBullet } from "../SpriteConstants";
import { BoomerangWidth, BoomerangHeight, DirectionBoomerang, RatioSize } from "../Constants";

const Duration = 1500;
const DurationRotation = 250;
const Strengh = 600


class Boomerang extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, BoomerangSprite, 0);
    game.physics.arcade.enable(this);
    this.body.immovable = true;
    this.anchor.setTo(0.5, 0.5);
    this.scale.setTo(RatioSize, RatioSize);
  }

  startMove() {
    this.body.immovable = false;
  }

  isMoving() {
    return !this.body.immovable;
  }

  launch(direction, onCompleteFunction) {
    this.startMove();
    let movement = {};
    switch(direction) {
      case DirectionBoomerang.left:
        movement = {x: this.position.x - Strengh};
      break;
      case DirectionBoomerang.right:
        movement = {x: this.position.x + Strengh};
      break;
      case DirectionBoomerang.down:
        movement = {y: this.position.y + Strengh};
      break;
      case DirectionBoomerang.up:
        movement = {y: this.position.y - Strengh};
      break;
    }
    let launchTween = this.game.add.tween(this).to(movement, Duration, Phaser.Easing.Linear.None, true,0,0,true);
    let tweenRotation = this.game.add.tween(this).to( { angle: 360 }, DurationRotation, Phaser.Easing.Linear.None, true);
    tweenRotation.repeat(100, 1);
    launchTween.onComplete.add(onCompleteFunction);
  }

}

export default Boomerang;