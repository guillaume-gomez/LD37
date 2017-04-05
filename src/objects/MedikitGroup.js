import { SpriteWidth, SpriteHeight, Border } from "../Constants.js";
import { getRandomArbitrary } from "../utils";
import { Medikit } from "../SpriteConstants";

const MaxMedikit = 2;

class medikitGroup extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    let nbMedikit = getRandomArbitrary(0, MaxMedikit);
    for(let i = 0; i < nbMedikit; i++) {
      const x = getRandomArbitrary(2 * Border, game.world.bounds.width - SpriteWidth - 2 * Border);
      const y = getRandomArbitrary(2 * Border, game.world.bounds.height - SpriteHeight - 2 * Border);
      this.addMedikit(x,y);
    }
  }

  addMedikit(x, y) {
    let medikit = this.create(x, y, Medikit);
    medikit.scale.setTo(0.4, 0.4);
  }


}

export default medikitGroup;