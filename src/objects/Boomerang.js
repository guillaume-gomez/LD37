import { BoomerangSprite, SpriteBullet } from "../SpriteConstants";
import { BoomerangWidth, BoomerangHeight } from "../Constants";

const Duration = 2000;
const DurationRotation = 250;

class Boomerang extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, BoomerangSprite, 0);
    game.physics.arcade.enable(this);
    this.anchor.setTo(0.5, 0.5);
  }

  launch(direction, onCompleteFunction) {
    const y = this.position.y;
    let launchTween = this.game.add.tween(this).to( { y: 200 }, Duration, Phaser.Easing.Linear.None, true,0,0,true);
    let tweenRotation = this.game.add.tween(this).to( { angle: 360 }, DurationRotation, Phaser.Easing.Linear.None, true);
    tweenRotation.repeat(100, 1);
    launchTween.onComplete.add(onCompleteFunction);
  }
}

export default Boomerang;