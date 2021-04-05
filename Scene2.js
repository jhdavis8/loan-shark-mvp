class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create() {
        this.background= this.add.tileSprite(0,0, config.width, config.height, "background");
        this.background.setOrigin(0,0);

        

        this.ship1 = this.physics.add.sprite(config.width/2 - 50, config.height/2, "ship");
        this.ship2 = this.physics.add.sprite(config.width/2, config.height/2, "ship2");
        this.ship3 = this.physics.add.sprite(config.width/2 + 50, config.height/2, "ship3");

        this.ships = this.physics.add.group();
        this.ships.add(this.ship1);
        this.ships.add(this.ship2);
        this.ships.add(this.ship3);

        this.ship1.setVelocity(Math.random() * 100+50,Math.random() * 100+50);
        this.ship1.setCollideWorldBounds(true);
        this.ship1.setBounce(1);
        this.ship2.setVelocity(-1 * (Math.random() * 100+50),Math.random() * 100+50);
        this.ship2.setCollideWorldBounds(true);
        this.ship2.setBounce(1);
        this.ship3.setVelocity(Math.random() * 100+50,Math.random() * 100+50);
        this.ship3.setCollideWorldBounds(true);
        this.ship3.setBounce(1);


        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
        var maxObjects = 1;
        


        this.powerUps = this.physics.add.group();
        for(var i = 0; i <= maxObjects; i++) {
            var powerUp = this.physics.add.sprite(16,16,"power-up");
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0,0,game.config.width, game.config.height);
            if (Math.random() > 0.5)
                powerUp.play("red");
            else
                powerUp.play("gray");
            powerUp.setVelocity(Math.random() * 100+50,Math.random() * 100+50);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }
        this.physics.add.collider(this.ships, this.powerUps, function(shipA, powerUp) {
            shipA.setTexture("explosion");
            shipA.play("explode");
            shipA.destroy();
        });
        
        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        /*
        this.physics.add.collider(ships, ships, function (ships, ships) {
            ships.setTexture("explosion");
            ships.ships.play("explode");
        });
        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this); */



        //this.add.text(20,20, "Playing game", {font: "25px Arial", fill: "yellow"});
    }
    /*moveShip(ship, speed) {
        ship.y+= speed;
        if (ship.y > config.height)
            this.resetShipPos(ship);
    }
    resetShipPos(ship) {
        ship.y = 0;
        var randomX = Phaser.Math.Between(0,config.width);
        ship.x = randomX;
    }*/
    
    destroyShip(gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }
    update() {
        this.background.tilePositionY -= 0.5;
    }
}