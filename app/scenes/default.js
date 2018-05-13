export default class DefaultScene extends Phaser.Scene {

  constructor () {
    super('default');
  }

  init (data) {
    console.debug('init', this.scene.key, data, this);
    this.score = 0;
    this.events.on('shutdown', this.shutdown, this);
  }

  create () {
    this.add.image(400, 300, 'sky');
    
    const logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    this.input.keyboard.once('keydown_Q', this.quit, this);
  }

  update () {
    this.score += 1;
  }

  // extend:

  quit () {
    this.scene.start('menu');
  }
  
  shutdown () {
    this.registry.set('score', this.score);
  }

}
