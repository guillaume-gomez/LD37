import { getRandomArbitrary } from "utils";
import { SpriteWidth, SpriteHeight, Border } from "Constants";

import Chandelier from "objects/Chandelier";

const MaxChandelier = 5;


class ChandelierLayer extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name);
    const nbChandelier = getRandomArbitrary(0, MaxChandelier);
    for(let i = 0; i < nbChandelier; i++) {
      const x = getRandomArbitrary(2 * Border, game.world.bounds.width - SpriteWidth - 2 * Border);
      const y = getRandomArbitrary(2 * Border, game.world.bounds.height - SpriteHeight - 2 * Border);
      this.addChandelier(x,y);
    }
  }

  addChandelier(x, y) {
    const chandelier = new Chandelier(this.game, x, y);
    this.add(chandelier);
  }

}

export default ChandelierLayer;