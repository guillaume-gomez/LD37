import { SpriteWidth, SpriteHeight, SpriteRatioX, SpriteRatioY } from "../Constants.js";
import { Wall } from "../SpriteConstants";

class Room extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, false, Phaser.Physics.ARCADE);
  }

  createLineByTile(x1, y1, nbTilesX, nbTilesY) {
    this.createLine(x1, y1, nbTilesX * SpriteWidth + x1 , nbTilesY * SpriteHeight + y1);
  }

  createLine(x1, y1, x2, y2) {
    const xBegin = Math.min(x1, x2);
    const xEnd = Math.max(x1, x2);
    const yBegin = Math.min(y1, y2);
    const yEnd = Math.max(y1, y2);

    const xStep = (x2-x1);
    const yStep = (y2-y1);

    if (xStep === 0) {
      //x1 === x2
      return this.createVerticalLine(x1, yBegin, yEnd);
    }

    if (yStep === 0) {
      //y1 === y2
      return this.createHorizontalLine(xBegin, xEnd, y1);
    }

    let x = xBegin;
    let y = yBegin;
    while(x != xEnd || y != yEnd) {
      if(x < xEnd) {
        x += SpriteWidth;
      }
      if(y < yEnd) {
        y += SpriteHeight;
      }
      this.createSprite(x,y);
    }

  }

  createVerticalLine(x, y1, y2) {
    for(let y = y1; y < y2; y += SpriteHeight) {
      this.createSprite(x, y);
    }
  }

  createHorizontalLine(x1, x2, y) {
    for(let x = x1; x < x2; x += SpriteWidth) {
      this.createSprite(x, y);
    }
  }

  createSprite(x,y) {
    let sprite = this.create(x, y, Wall);
    sprite.scale.setTo(SpriteRatioX, SpriteRatioY);
  }

  ////
  //       ####
  //       #  #
  //       #  #
  //       #  #
  // (x,y) ####
  //
  ///
  createSquare(x, y, nbTilesBySide) {
    this.createLineByTile(x, y, nbTilesBySide, 0);
    this.createLineByTile(x, y + (nbTilesBySide - 1) * SpriteHeight, nbTilesBySide, 0);

    this.createLineByTile(x, y + SpriteHeight, 0, nbTilesBySide - 2);
    this.createLineByTile(x + (nbTilesBySide - 1) * SpriteWidth, y + SpriteHeight, 0, nbTilesBySide - 2);
  }
}

export default Room;