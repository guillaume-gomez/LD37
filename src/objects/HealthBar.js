class HealthBar {

  constructor(game, providedConfig) {
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

  drawBackground() {
    const bmd = this.game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bg.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.bgSprite = this.game.add.sprite(this.x, this.y, bmd);
    this.bgSprite.anchor.set(0.5);
  }

  drawHealthBar() {
    const bmd = this.game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bar.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.barSprite = this.game.add.sprite(this.x - this.bgSprite.width/2, this.y, bmd);
    this.barSprite.anchor.y = 0.5;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;

    if(this.bgSprite !== undefined && this.barSprite !== undefined){
      this.bgSprite.position.x = x;
      this.bgSprite.position.y = y;

      this.barSprite.position.x = x - this.config.width/2;
      this.barSprite.position.y = y;
    }
  }

  setPercent(newValue){
    if(newValue < 0) {
      newValue = 0;
    }
    if(newValue > 100) {
      newValue = 100;
    }
    const newWidth = (newValue * this.config.width) / 100;
    this.setWidth(newWidth);
  }

  setWidth(newWidth){
    this.barSprite.width = newWidth;
  }

  setWidth(newWidth){
    this.game.add.tween(this.barSprite).to( { width: newWidth }, this.config.animationDuration, Phaser.Easing.Linear.None, true);
  };
}

export default HealthBar;