import { EnemyWidth, EnemyHeight, Border, MinEnemies, MaxEnemies, OriginalTimer, MinTimer, MaxWave } from "../Constants.js";
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
    this.nbWave = 0;
    this.loopWave(OriginalTimer);
  }

  loopWave(timer) {
    this.createWave(this.nbWave);
    this.nbWave++;
    if(this.nbWave > MaxWave) {
      return;
    }

    setTimeout(() => {
      const newTimer = Math.max(MinTimer, timer - this.nbWave);
      this.loopWave(newTimer);
      console.log(newTimer)
    }, timer * 1000);
  }

  createWave(waveNumber) {
    console.log(waveNumber)
    let nbEnemies = getRandomArbitrary(MinEnemies, MaxEnemies);

    let nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 30);
    this.enemyTop(nbEnemiesOnSide);

    nbEnemies -= nbEnemiesOnSide;
    nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 20);
    this.enemyLeft(nbEnemiesOnSide);

    nbEnemies -= nbEnemiesOnSide;
    nbEnemiesOnSide = getRandomArbitrary(10, nbEnemies - 10);
    this.enemyBottom(nbEnemiesOnSide);

    nbEnemies -= nbEnemiesOnSide;
    this.enemyRight(nbEnemiesOnSide);
  }

  getElapsedX(nbEnemies) {
    return (this.game.world.bounds.width - 2 * Border) / nbEnemies;
  }

  getElapsedY(nbEnemies) {
    return (this.game.world.bounds.height - 2 * Border) / nbEnemies;
  }

  enemyBottom(nbEnemies) {
    const elapsedX = this.getElapsedX(nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomY = getRandomArbitrary(this.game.world.bounds.height, this.game.world.bounds.height + Border);
      this.addEnemy(Border + elapsedX * i, randomY);
    }
  }

  enemyTop(nbEnemies) {
    const elapsedX = this.getElapsedX(nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomY = getRandomArbitrary(-Border, 0);
      this.addEnemy(Border + elapsedX * i, randomY);
    }
  }

  enemyLeft(nbEnemies) {
    const elapsedY = this.getElapsedY(nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomX = getRandomArbitrary(-Border, 0);
      this.addEnemy(randomX, Border + elapsedY * i);
    }
  }

  enemyRight(nbEnemies) {
    const elapsedY = this.getElapsedY(nbEnemies);
    for(let i = 0; i < nbEnemies; i++) {
      const randomX = getRandomArbitrary(this.game.world.bounds.width , this.game.world.bounds.width + Border);
      this.addEnemy(randomX, Border + elapsedY * i);
    }
  }

  addEnemy(x, y) {
    const spriteArray = [SpriteEnemy, SpriteEnemy2, SpriteEnemy3];
    const spriteIndex = getRandomArbitrary(0, spriteArray.length);
    const vel = getRandomArbitrary(VelocityBorders[spriteIndex].velocityMin, VelocityBorders[spriteIndex].velocityMax);
    const enemy = new Enemy(this.game,x, y, vel, spriteArray[spriteIndex]);
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