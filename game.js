class Player {
    constructor(){
        this.name = "Player";
        this.properties = [];
    }
}


var config = {
    width:800,
    height:600,
    backgroundColor:0x000000,
    scene: [Scene1,Scene2, Base_property, location_contract_scene,menuScene],
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    },
    //player: new Player()
}

var game = new Phaser.Game(config);