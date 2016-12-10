import { SpriteWidth, SpriteHeight, SpriteRatioX, SpriteRatioY } from "../Constants.js";
import { Wall } from "../SpriteConstants";

class Room extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, false, Phaser.Physics.ARCADE);
  }

  createRandomLine(x1, y1, x2, y2, division, varX = 0, varY = 0) {
    const middleX = (x1 + x2) / 2 + (varX * SpriteWidth);
    const middleY = (y1 + y2) / 2 + (varY * SpriteHeight);
    if(division > 1) {
      this.createRandomLine(x1, y1, middleX, middleY, division - 1);
      this.createRandomLine(middleX, middleY, x2, y2, division - 1);
    } else {
      this.createLine(x1,y1, middleX, middleY);
      this.createLine(middleX,middleY, x2, y2);
    }
  }

  createLineByTile(x1, y1, nbTilesX, nbTilesY) {
    if(nbTilesX < 0 ) {
      throw `createLineByTile ${nbTilesX} is negative`;
    }
    if(nbTilesY < 0 ) {
      throw `createLineByTile ${nbTilesY} is negative`;
    }
    this.createLine(x1, y1, (nbTilesX-1) * SpriteWidth + x1 , (nbTilesY-1) * SpriteHeight + y1);
  }

  // //Brasenhem algorithm
  createLine(x1,y1, x2, y2) {
    const dx = Math.abs(x2 - x1);
    const sx = x1 < x2 ? SpriteWidth : -SpriteWidth;
    const dy = Math.abs(y2 - y1);
    const sy = y1 < y2 ? SpriteHeight : -SpriteHeight;
    var err = (dx > dy ? dx : -dy) / 2;

    let x = x1;
    let y = y1;

    while (true) {
      this.createSprite(x,y);
      debugger
      if (x >= x2 && y >= y2) break;
      let e2 = err;
      if (e2 > - dx) {
        err -= dy;
        x += sx;
      }
      if (e2 < dy) {
        err += dx;
        y += sy;
      }
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
    this.createLineByTile(x, y, nbTilesBySide, 1);
    this.createLineByTile(x, y + (nbTilesBySide-1) * SpriteHeight, nbTilesBySide, 1);

    //nbtiles - 2 because corner  was drawn  by vertical line
    this.createLineByTile(x, y + SpriteHeight, 1, nbTilesBySide - 2);
    this.createLineByTile(x + (nbTilesBySide-1) * SpriteWidth, y + SpriteHeight, 1, nbTilesBySide - 2);
  }

}

export default Room;