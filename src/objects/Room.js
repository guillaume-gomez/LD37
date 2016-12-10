import { SpriteWidth, SpriteHeight, SpriteRatioX, SpriteRatioY } from "../Constants.js";
import { Wall } from "../SpriteConstants";

class Room extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, false, Phaser.Physics.ARCADE);
    let sprite = this.create(100, 30, Wall);
    sprite.scale.setTo(SpriteRatioX, SpriteRatioY);
  }

  createLine(x1, y1, x2, y2) {
    const xBegin = Math.min(x1, x2);
    const xEnd = Math.max(x1, x2);
    const yBegin = Math.min(y1, y2);
    const yEnd = Math.max(y1, y2);

    const xStep = Math.trunc((x2-x1) / SpriteWidth);
    const yStep = Math.trunc((y2-y1) / SpriteHeight);

    if (xStep === 0) {
      this.createVerticalLine(x, yBegin, yEnd, yStep);
    }

    if (yStep === 0) {
      this.createHorizontalLine(xBegin, xEnd, y, xStep);
    }

  }

  createHorizontalLine(x, y1, y2, yStep) {
    for(let y = y1; y < y2; y += yStep) {
      this.create(x, y, Wall);
    }
  }

  createVerticalLine(x1, x2, y, xStep) {
    for(let x = x1; x < x2; x += xStep) {
      this.create(x, y, Wall);
    }
  }

  createSquare() {
  }
}

export default Room;