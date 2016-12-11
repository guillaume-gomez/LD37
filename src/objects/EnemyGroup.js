import { EnemyWidth, EnemyHeight, Border } from "../Constants.js";
import { getRandomArbitrary } from "../utils";

import Enemy from "objects/Enemy";

class EnemyGroup extends Phaser.Group {

  constructor(game, parent, name) {
    super(game, parent, name, false, true, Phaser.Physics.ARCADE);
    let nbEnemies = getRandomArbitrary(40,50);

    let nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 30);
    this.enemyTop(game,nbEnemiesOnSide);

    // nbEnemies -= nbEnemiesOnSide;
    // nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 20);
    // this.enemyLeft(game, nbEnemiesOnSide);

    // nbEnemies -= nbEnemiesOnSide;
    // nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 10);
    // this.enemyBottom(game, nbEnemiesOnSide);

    // nbEnemies -= nbEnemiesOnSide;
    // this.enemyRight(game, nbEnemiesOnSide);

  }

  enemyBottom(game,nbEnemies) {

  }

  enemyTop(game, nbEnemies) {
    const elapsedX = (game.world.bounds.width - 2 * Border) / nbEnemies;
    for(let i = 0; i < nbEnemies; i++) {
      const randomY = getRandomArbitrary(0, Border - EnemyHeight);
      this.addEnemy(game, Border + elapsedX * i, randomY);
    }
  }

  enemyLeft(game, nbEnemies) {

  }

  enemyRight(game, nbEnemies) {

  }

  addEnemy(game, x, y) {
    const enemy = new Enemy(game,x, y);
    this.add(enemy);
  }

}

export default EnemyGroup;