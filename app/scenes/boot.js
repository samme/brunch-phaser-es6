import CONST from 'data/const';

export default class BootScene extends Phaser.Scene {

  constructor () {
    super('boot');
    this.progressBar = null;
    this.progressBarRectangle = null;
  }

  preload () {
    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.load.image('red', 'red.png');
    this.load.on('progress', this.onLoadProgress, this);
    this.load.on('complete', this.onLoadComplete, this);
    this.createProgressBar();
  }

  create () {
    this.registry.set('score', 0);
    this.scene.start('menu');
  }

  // extend:

  createProgressBar () {
    const main = this.cameras.main;
    this.progressBarRectangle = new Phaser.Geom.Rectangle(0, 0, 0.5 * main.width, 50);
    Phaser.Geom.Rectangle.CenterOn(this.progressBarRectangle, 0.5 * main.width, 0.5 * main.height);
    this.progressBar = this.add.graphics();
  }

  onLoadComplete (loader) {
    // console.debug('onLoadComplete', loader);
    console.debug('complete', loader.totalComplete);
    console.debug('failed', loader.totalFailed);
    this.progressBar.destroy();
  }

  onLoadProgress (progress) {
    console.debug('progress', progress);
    const rect = this.progressBarRectangle;
    const color = this.load.totalFailed ? CONST.hexColors.red : CONST.hexColors.white;
    this.progressBar
      .clear()
      .fillStyle(CONST.hexColors.darkGray)
      .fillRect(rect.x, rect.y, rect.width, rect.height)
      .fillStyle(color)
      .fillRect(rect.x, rect.y, progress * rect.width, rect.height);
  }

}
