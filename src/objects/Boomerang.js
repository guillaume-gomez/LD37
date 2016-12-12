import { BoomerangSprite, SpriteBullet } from "../SpriteConstants";
import { BoomerangWidth, BoomerangHeight } from "../Constants";

class Boomerang extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, BoomerangSprite, 0);
    game.physics.arcade.enable(this);
  }

  launch(direction, onCompleteFunction) {
    const y = this.position.y;
    let launchTween = this.game.add.tween(this).to( { y: 200 }, 2000, Phaser.Easing.Linear.None, true,0,0,true);
    launchTween.onComplete.add(onCompleteFunction);
  }
}

export default Boomerang;