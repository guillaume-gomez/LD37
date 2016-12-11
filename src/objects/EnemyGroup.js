import { EnemyWidth, EnemyHeight, Border } from "../Constants.js";
import { getRandomArbitrary } from "../utils";

import Enemy from "objects/Enemy";

class EnemyGroup extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    let nbEnemies = getRandomArbitrary(20,40);

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
      const randomY = getRandomArbitrary(game.world.bounds.height - Border, game.world.bounds.height - EnemyHeight);
      this.addEnemy(game, Border + elapsedX * i, randomY);
    }
  }

  enemyTop(game, nbEnemies) {
    const elapsedX = this.getElapsedX(game, nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomY = getRandomArbitrary(0, Border - EnemyHeight);
      this.addEnemy(game, Border + elapsedX * i, randomY);
    }
  }

  enemyLeft(game, nbEnemies) {
    const elapsedY = this.getElapsedY(game, nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomX = getRandomArbitrary(0, Border - EnemyWidth);
      this.addEnemy(game, randomX, Border + elapsedY * i);
    }
  }

  enemyRight(game, nbEnemies) {
    const elapsedY = this.getElapsedY(game, nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomX = getRandomArbitrary( game.world.bounds.width - Border, game.world.bounds.width - EnemyWidth);
      this.addEnemy(game, randomX, Border + elapsedY * i);
    }
  }

  addEnemy(game, x, y) {
    const enemy = new Enemy(game,x, y);
    this.add(enemy);
  }

  follow(playerPosition) {
    this.children.forEach(enemy => {
      enemy.follow(playerPosition);
    });
  }

}

export default EnemyGroup;