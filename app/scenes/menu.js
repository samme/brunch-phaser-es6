const FONT = 'Futura,system-ui,sans-serif';

export default class Menu extends Phaser.Scene {

  constructor () {
    super('menu');
    this.highScore = null;
  }

  init (data) {
    console.log('init', this.scene.key, data, this);
    this.highScore = data.score || 0;
  }

  create () {
    const sky = this.add.image(400, 300, 'sky');
    sky.alpha = 0.25;
    this.add.text(400, 300, 'START', {
      fill: 'white',
      fontFamily: FONT,
      fontSize: 48
    })
      .setOrigin(0.5)
      .setShadow(0, 1, '#62F6FF', 10);
    this.add.text(400, 450, 'High Score: ' + this.highScore, {
      fill: '#FED141',
      fontFamily: FONT,
      fontSize: 24
    })
      .setOrigin(0.5)
      .setShadow(0, 1, 'black', 5);
    this.input.on('pointerup', this.start, this);
  }

  // extend:

  start () {
    this.scene.start('default', { today: (new Date).toString() });
  }

}
