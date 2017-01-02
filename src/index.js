import { ScreenWidth, ScreenHeight } from "./Constants.js";
import Game from 'states/Game';
import Commands from 'states/Commands';
import Menu from 'states/Menu';
import WinState from 'states/WinState';
import LoseState from 'states/LoseState';

class LD37 extends Phaser.Game {

  constructor() {
    super(ScreenWidth, ScreenHeight, Phaser.AUTO, 'content', null);
    this.state.add('Game', Game, false);
    this.state.add('Menu', Menu, false);
    this.state.add('Win', WinState, false);
    this.state.add('Lose', LoseState, false);
    this.state.add('Commands', Commands, false);
    this.state.start('Menu');
  }

  goToCommands() {
    this.state.start('Commands');
  }

  goToGame() {
    this.state.start('Game', Phaser.Plugin.StateTransition.Out.SlideBottom, null, true, true);
  }

  goToLose() {
    this.state.start('Lose', null, Phaser.Plugin.StateTransition.Out.SlideLeft, null, true);
  }

  goToWin() {
    this.state.start('Win', Phaser.Plugin.StateTransition.Out.SlideRight, null, true, true);
  }

}

new LD37();
