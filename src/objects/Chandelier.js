import { LightSprite } from "../SpriteConstants";

class Chandelier extends Phaser.Group {

  constructor(game, x, y, parent, name) {
    super(game, parent, name);

    for(let i = 0; i < 9; i++) {
      this.createLight();
    }
    this.align(3, -1, 48, 48);

    this.x = x;
    this.y = y;
  }

  createLight() {
    let sprite = this.create(0,0, LightSprite);
    sprite.alpha = 0.4;
  }

}

export default Chandelier;