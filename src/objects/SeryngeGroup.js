import { SpriteWidth, SpriteHeight, Border } from "../Constants.js";
import { getRandomArbitrary } from "../utils";
import { Serynge } from "../SpriteConstants";

const MaxSerynge = 2;

class SeryngeGroup extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    let nbSerynge = 10;//getRandomArbitrary(0, MaxSerynge);
    for(let i = 0; i < nbSerynge; i++) {
      const x = getRandomArbitrary(2 * Border, game.world.bounds.width - SpriteWidth - 2 * Border);
      const y = getRandomArbitrary(2 * Border, game.world.bounds.height - SpriteHeight - 2 * Border);
      this.addSerynge(x,y);
    }
  }

  addSerynge(x, y) {
    this.create(x, y, Serynge);
  }


}

export default SeryngeGroup;