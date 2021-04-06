var config = {
    width:400,
    height:300,
    backgroundColor:0x000000,
    scene: [Scene1,Scene2],
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    }
}

var game = new Phaser.Game(config);