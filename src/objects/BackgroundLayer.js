import { SpriteWidth, SpriteHeight } from "../Constants.js";
import { Background, BoomerangSprite } from "../SpriteConstants";

class BackgroundLayer extends Phaser.Group {

  constructor(game, x, y, borders, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    // console.log(x)
    // console.log(y)
    // console.log(borders)
    const xOnGrid = x - x % SpriteWidth; 
    const yOnGrid = y - y % SpriteHeight;
    this.fillBackground(borders, xOnGrid, yOnGrid);
   }

  createBackground(x, y) {
    let sprite = this.create(x,y, Background);
    sprite.body.immovable = true;
  }

  fillBackground(borders, xOrigin, yOrigin) {
    let stack = [];
    const hasBorder = (x,y) => {
      const element = borders.find(tile => {return tile.position.x === x && tile.position.y === y; });
      return element;
    };

    if(hasBorder(xOrigin, yOrigin)) {
      return null;
    }
    stack.push({x: xOrigin, y: yOrigin});
    while(stack.length != 0) {
      const coord = stack.pop();
      this.createBackground(coord.x, coord.y);
      if(!hasBorder(coord.x, coord.y - SpriteHeight)) {
        stack.push({x: coord.x, y: coord.y - SpriteHeight});
      }
      if(!hasBorder(coord.x, coord.y + SpriteHeight)) {
        stack.push({x: coord.x, y: coord.y + SpriteHeight});
      }
      if(!hasBorder(coord.x - SpriteWidth, coord.y)) {
        stack.push({x: coord.x - SpriteWidth, y: coord.y});
      }
      if(!hasBorder(coord.x + SpriteWidth, coord.y)) {
        stack.push({x: coord.x + SpriteWidth, y: coord.y});
      }
    }
  }

    // fillBackground(x,y, borders) {
  //   const hasBorder = (x,y) => {
  //     const element = borders.find(tile => {return tile.position.x === x && tile.position.y === y; });
  //     return element;
  //   };

  //   if(x < 512 || x > 650 || y < 512 || y > 650) {
  //     return null;
  //   }
  //   if(!hasBorder()) {
  //     this.createBackground(x,y);
  //     //this.fillBackground(x, y - SpriteHeight, borders);
  //     this.fillBackground(x, y + SpriteHeight, borders);
  //     this.fillBackground(x + SpriteWidth, y, borders);
  //     //this.fillBackground(x - SpriteWidth, y, borders);
  //   }
  // }
}

export default BackgroundLayer;