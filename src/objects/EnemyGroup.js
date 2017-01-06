import { EnemyWidth, EnemyHeight, Border, MinEnemies, MaxEnemies } from "../Constants.js";
import { getRandomArbitrary } from "../utils";
import { SpriteEnemy, SpriteEnemy2, SpriteEnemy3 } from "../SpriteConstants";

import Enemy from "objects/Enemy";


const VelocityBorders =
[
  {velocityMin: 30, velocityMax: 60},
  {velocityMin: 60, velocityMax: 100},
  {velocityMin: 100, velocityMax: 130}
]


class EnemyGroup extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    let nbEnemies = getRandomArbitrary(MinEnemies, MaxEnemies);

    let nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 30);
    this.enemyTop(game,nbEnemiesOnSide);

    nbEnemies -= nbEnemiesOnSide;
    nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 20);
    this.enemyLeft(game, nbEnemiesOnSide);

    nbEnemies -= nbEnemiesOnSide;
    nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 10);
    this.enemyBottom(game, nbEnemiesOnSide);

    nbEnemies -= nbEnemiesOnSide;
    this.enemyRight(game, nbEnemiesOnSide);

  }

  getElapsedX(game, nbEnemies) {
    return (game.world.bounds.width - 2 * Border) / nbEnemies;
  }

  getElapsedY(game, nbEnemies) {
    return (game.world.bounds.height - 2 * Border) / nbEnemies;
  }

  enemyBottom(game,nbEnemies) {
    const elapsedX = this.getElapsedX(game, nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomY = getRandomArbitrary(game.world.bounds.height, game.world.bounds.height + Border);
      this.addEnemy(game, Border + elapsedX * i, randomY);
    }
  }

  enemyTop(game, nbEnemies) {
    const elapsedX = this.getElapsedX(game, nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomY = getRandomArbitrary(-Border, 0);
      this.addEnemy(game, Border + elapsedX * i, randomY);
    }
  }

  enemyLeft(game, nbEnemies) {
    const elapsedY = this.getElapsedY(game, nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomX = getRandomArbitrary(-Border, 0);
      this.addEnemy(game, randomX, Border + elapsedY * i);
    }
  }

  enemyRight(game, nbEnemies) {
    const elapsedY = this.getElapsedY(game, nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomX = getRandomArbitrary(game.world.bounds.width , game.world.bounds.width + Border);
      this.addEnemy(game, randomX, Border + elapsedY * i);
    }
  }

  addEnemy(game, x, y) {
    const spriteArray = [SpriteEnemy, SpriteEnemy2, SpriteEnemy3];
    const spriteIndex = getRandomArbitrary(0, spriteArray.length);
    const vel = getRandomArbitrary(VelocityBorders[spriteIndex].velocityMin, VelocityBorders[spriteIndex].velocityMax);
    const enemy = new Enemy(game,x, y, vel, spriteArray[spriteIndex]);
    this.add(enemy);
  }

  follow(playerPosition) {
    this.children.forEach(enemy => {
      enemy.follow(playerPosition);
    });
  }

  hasEnemies() {
    return this.total > 0;
  }

  render(game) {
    this.children.forEach(enemy => {
      game.debug.body(enemy);
    });
  }
}

export default EnemyGroup;