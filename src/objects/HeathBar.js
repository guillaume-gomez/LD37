class HealthBar {

  constructor(game, x, y, key, frame) {
    this.game = game;

    this.config = this.mergeWithDefaultConfiguration(providedConfig);
    this.setPosition(this.config.x, this.config.y);
    this.drawBackground();
    this.drawHealthBar();
  }

  mergeWithDefaultConfiguration(newConfig) {
    const defaultConfig = {
      width: 250,
      height: 40,
      x: 0,
      y: 0,
      bg: {
        color: '#651828'
      },
      bar: {
        color: '#FEFF03'
      }
    };
    return Object.assign({}, defaultConfig, newConfig);
  }

  drawBackground () {
    var bmd = this.game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bg.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();
   
    this.bgSprite = this.game.add.sprite(this.x, this.y, bmd);
    this.bgSprite.anchor.set(0.5);
  }
}

export default HealthBar;