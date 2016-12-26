import { SpriteWidth } from "../Constants.js";
import { BoomerangSprite } from "../SpriteConstants";

class BackgroundLayer extends Phaser.Group {

  constructor(game, borders, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    this.tilemapStuff(borders);
    // this.createBackground(500, 500);
    // this.createBackground(600, 500);
    // this.createBackground(700, 500);
  }

  createBackground(x, y) {
    let sprite = this.create(x,y, BoomerangSprite);
    sprite.body.immovable = true;
  }


  tilemapStuff(borders) {
    console.log(borders)
    let firstMarker = borders[0];
    borders.forEach(tile => {
      if(firstMarker.y != tile.y) {
        firstMarker = tile;
      }
      if(firstMarker.y == tile.y  && firstMarker.x != tile.x) {
        const nbTiles = (tile.x - firstMarker.x) / SpriteWidth;
        for(let i = 0; i < nbTiles; i++) {
          this.createBackground(firstMarker.x + SpriteWidth + i * SpriteWidth, firstMarker.y);
        }
        firstMarker = tile;
      }
    });
  }
}

export default BackgroundLayer;