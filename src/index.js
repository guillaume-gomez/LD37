import MainMenu from 'states/MainMenu';

class Game extends Phaser.Game {

  constructor() {
    super(600, 800, Phaser.AUTO, 'content', null);
    this.state.add('MainMenu', MainMenu, false);
    this.state.start('MainMenu');
  }

}

new Game();
