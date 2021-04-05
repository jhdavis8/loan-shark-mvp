class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.load.image("background", "src/assets/textures/grass.png");
        this.load.image("house", "src/assets/objects/house.png", {
            frameWidth: 48,
            frameHeight: 48
        });
        this.load.image("boat", "src/assets/objects/LS-Raft.png", {
            frameWidth: 32,
            frameHeight: 16
        });
        /*
        this.load.spritesheet("ship3", "src/assets/objects/minimum-viable-rowboat.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet("explosion", "assets/images/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("power-up", "assets/images/power-up.png", {
            frameWidth: 16,
            frameHeight: 16
        });*/
    }
    create() {
        this.add.text(20,20,"Loading game...");
        this.scene.start("playGame");
    }
}