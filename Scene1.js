class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.load.image("background", "assets/textures/grass.png");
        this.load.image("water", "assets/textures/water.png");
        this.load.image("house", "assets/objects/house.png", {
            frameWidth: 128,
            frameHeight: 128
        });
        this.load.spritesheet("player", "assets/sprites/Pirate1 (Walk).png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.image("logo", "assets/logos/loanSharkLogo.png");
        this.load.image("raft", "assets/objects/LS-Raft.png");
        this.load.image("speedboat", "assets/objects/speedboat.png");
        this.load.image("rowboat", "assets/objects/rowboat.png");
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