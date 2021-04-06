class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create() {
        this.background= this.add.tileSprite(0,0, config.width, config.height, "background");
        this.water= this.add.tileSprite(200,360, config.width, config.height, "water");
        this.background.setOrigin(0,0);
        this.logo = this.add.image(80, 60, "logo");
        this.house = this.add.image(128, 128, "house");
        this.raft = this.add.image(100, 256, "raft");
        this.rowboat = this.add.image(200, 256, "rowboat");
        this.speedboat = this.add.image(300, 256, "speedboat");


        this.player = this.physics.add.sprite(150,150, "player");

        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.anims.create({
            key: "player_anim",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
          });

        this.player.play("player_anim");
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

    update() {
        this.movePlayerManager();
    }


    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            if(this.player.x > 0+this.player.width/2){
                this.player.x -=1;
                console.log(this.player.x);
            }
        }
        else if(this.cursorKeys.right.isDown){
            if(this.player.x < config.width-this.player.width/2){
                this.player.x +=1;
                console.log(this.player.x);
            }
        }
        else if(this.cursorKeys.up.isDown){
            if(this.player.y >0+this.player.height/2){
                this.player.y -=1;
                console.log(this.player.y);
            }
        }
        else if(this.cursorKeys.down.isDown){
            if(this.player.y < 193){
            this.player.y +=1;
            console.log(this.player.y)
        }
        }
        else{}
        
    }
}