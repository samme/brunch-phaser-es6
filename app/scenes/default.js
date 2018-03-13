export default class Default extends Phaser.Scene {

  constructor () {
    super('default');
    this.score = null;
  }

  init (data) {
    console.log('init', this.scene.key, data, this);
    this.score = 0;
  }

  create () {
    var sky = this.add.image(400, 300, 'sky');
    sky.alpha = 0.5;
    const particles = this.add.particles('red');
    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    });
    const logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    emitter.startFollow(logo);
    this.input.keyboard.once('keydown_Q', this.quit, this);
  }

  update () {
    this.score += 1;
  }

  // extend:

  quit () {
    this.scene.start('menu', { score: this.score });
  }

}
