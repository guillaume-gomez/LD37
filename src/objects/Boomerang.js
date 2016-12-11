import { BoomerangSprite, SpriteBullet } from "../SpriteConstants";
import { BoomerangWidth, BoomerangHeight } from "../Constants";

class Boomerang extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, BoomerangSprite, 0);
    game.physics.arcade.enable(this);
  }

  launch(direction) {

  }
}

export default Boomerang;