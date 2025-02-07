var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;
var bolha;
var corais;

function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('peixe', 'assets/peixes/baiacu.png');
    this.load.image('bolha', 'assets/bolhas.png')
    this.load.image('corais', 'assets/coral.png')
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false);
    bolha = this.add.image (150, 500, 'bolha');
    corais = this.add.image (680, 550, 'corais')

    peixinho.setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}