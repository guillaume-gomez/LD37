import { SpriteWidth, SpriteHeight, Border } from "../Constants.js";
import { getRandomArbitrary } from "../utils";
import { Serynge } from "../SpriteConstants";

const MaxSerynge = 2;

class medikitGroup extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    let nbSerynge = getRandomArbitrary(0, MaxSerynge);
    for(let i = 0; i < nbSerynge; i++) {
      const x = getRandomArbitrary(2 * Border, game.world.bounds.width - SpriteWidth - 2 * Border);
      const y = getRandomArbitrary(2 * Border, game.world.bounds.height - SpriteHeight - 2 * Border);
      this.addMedikit(x,y);
    }
  }

  addMedikit(x, y) {
    let medikit = this.create(x, y, Serynge);
    medikit.scale.setTo(0.4, 0.4);
  }


}

export default medikitGroup;