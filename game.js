class Player {
    constructor(){
        this.name = "Player";
        this.properties = new Map();
    }
}



var config = {
    width:800,
    height:600,
    backgroundColor:0x000000,
    scene: [Scene1,Scene2, location_contract_scene],
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    },
    player: new Player()
}

var game = new Phaser.Game(config);