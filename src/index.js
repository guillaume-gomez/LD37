import { ScreenWidth, ScreenHeight } from "./Constants.js";
import MainMenu from 'states/MainMenu';
import Menu from 'states/Menu';

class Game extends Phaser.Game {

  constructor() {
    super(ScreenWidth, ScreenHeight, Phaser.AUTO, 'content', null);
    this.state.add('MainMenu', MainMenu, false);
    this.state.add('Menu', Menu, false);
    this.state.start('Menu');
  }

  goToMainMenu() {
    this.state.start('MainMenu', Phaser.Plugin.StateTransition.Out.SlideBottom, null, true, true);
  }

}

new Game();
