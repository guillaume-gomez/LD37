import { ScreenWidth, ScreenHeight } from "./Constants.js";
import MainMenu from 'states/MainMenu';

class Game extends Phaser.Game {

  constructor() {
    super(ScreenWidth, ScreenHeight, Phaser.AUTO, 'content', null);
    this.state.add('MainMenu', MainMenu, false);
    this.state.start('MainMenu');
  }

}

new Game();
