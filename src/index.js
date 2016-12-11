import { ScreenWidth, ScreenHeight } from "./Constants.js";
import Game from 'states/Game';
import Menu from 'states/Menu';

class LD37 extends Phaser.Game {

  constructor() {
    super(ScreenWidth, ScreenHeight, Phaser.AUTO, 'content', null);
    this.state.add('Game', Game, false);
    this.state.add('Menu', Menu, false);
    this.state.start('Menu');
  }

  goToGame() {
    this.state.start('Game', Phaser.Plugin.StateTransition.Out.SlideBottom, null, true, true);
  }

  goToLose() {
    this.state.start('Menu', Phaser.Plugin.StateTransition.Out.SlideLeft, null, true, true);
  }

  goToWin() {
    this.state.start('Menu', Phaser.Plugin.StateTransition.Out.SlideRight, null, true, true);
  }

}

new LD37();
