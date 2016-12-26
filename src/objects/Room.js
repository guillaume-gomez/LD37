import { SpriteWidth, SpriteHeight, SpriteRatioX, SpriteRatioY } from "../Constants.js";
import { Wall, BoomerangSprite } from "../SpriteConstants";
import { getRandomArbitrary } from "../utils";

const Divisor = 15;

class Room extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    this.Bounds = game.world.bounds;
  }

  createRandomLine(x1, y1, x2, y2, division = 1, varX = 0, varY = 0) {
    const middleX = (x1 + x2) / 2 + (varX * SpriteWidth);
    const middleY = (y1 + y2) / 2 + (varY * SpriteHeight);

    const middleXBefore = middleX - (middleX % SpriteWidth);
    const middleXAfter =  middleX + (middleX % SpriteWidth);
    const middleYBefore = middleY - (middleY % SpriteHeight);
    const middleYAfter = middleY + (middleY % SpriteHeight);
    if(division > 1) {
      this.createRandomLine(x1, y1, middleXBefore, middleYBefore, division - 1, varX, varY);
      this.createRandomLine(middleXAfter, middleYAfter, x2, y2, division - 1, varX, varY);
    } else {
      this.createLine(x1,y1, middleXBefore, middleYBefore);
      this.createLine(middleXAfter, middleYAfter, x2, y2);
    }
  }

  createLineByTile(x1, y1, nbTilesX, nbTilesY, division, varX, varY) {
    if(nbTilesX < 0 ) {
      throw `createLineByTile ${nbTilesX} is negative`;
    }
    if(nbTilesY < 0 ) {
      throw `createLineByTile ${nbTilesY} is negative`;
    }
    this.createRandomLine(x1, y1, (nbTilesX-1) * SpriteWidth + x1 , (nbTilesY-1) * SpriteHeight + y1, division, varX, varY);
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
      if (x >= x2 && y >= y2) break;
      if(x < 0 || y < 0 || x > this.Bounds.width || y > this.Bounds.height) break;
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
    sprite.body.immovable = true;
  }

  createBackground(x, y) {
    //put in another group i think
    let sprite = this.create(x,y, BoomerangSprite);
    sprite.body.immovable = true;
  }

  ////
  // (x,y) ####
  //       #  #
  //       #  #
  //       #  #
  //       ####
  //
  ///
  createSquare(x, y, nbTilesBySide) {
    this.createRandomSquare(x, y, nbTilesBySide, 1, false);
  }

  createRandomSquare(x, y, nbTilesBySide, division = 3, random = true) {
    const updateVariation = () => {
      const maxOffset = nbTilesBySide/ Divisor;
      if(random) {
        return [getRandomArbitrary(-maxOffset, maxOffset), getRandomArbitrary(-maxOffset, maxOffset), getRandomArbitrary(-maxOffset, maxOffset), getRandomArbitrary(-maxOffset, maxOffset)];
      }
      return [0, 0, 0, 0];
    };

    let varX = 0;
    let varY = 0;
    let varX2 = 0;
    let varY2 = 0;

    [varX, varY, varX2, varY2] = updateVariation();
    this.createLineByTile(x, y, nbTilesBySide, 1, division, varX, varY);
    this.createLineByTile(x, y + (nbTilesBySide-1) * SpriteHeight, nbTilesBySide, 1, division, varX2, varY2);

    [varX, varY, varX2, varY2] = updateVariation();
    //nbtiles - 2 because corner  was drawn  by vertical line
    this.createLineByTile(x, y + SpriteHeight, 1, nbTilesBySide - 2, division, varX, varY);
    this.createLineByTile(x + (nbTilesBySide-1) * SpriteWidth, y + SpriteHeight, 1, nbTilesBySide - 2, division, varX2, varY2);
  }

  tilemapStuff() {
    let firstMarker = this.children[0];
    this.children.forEach(tile => {
      if(firstMarker.y != tile.y) {
        firstMarker = tile;
      }
      if(firstMarker.y == tile.y  && firstMarker.x != tile.x) {
        nbTiles = (lastMarker.x - firstMarker.x) / SpriteWidth;
        for(const i = 0; i < nbtiles; i++) {
          this.createBackground(firstMarker.x + SpriteWidth + i * SpriteWidth, y);
        }
        firstMarker = tile;
      }
    });
  }
}

export default Room;