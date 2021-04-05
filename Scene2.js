class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create() {
        this.background= this.add.tileSprite(0,0, config.width, config.height, "background");
        this.background.setOrigin(0,0);
        this.logo = this.add.image(80, 60, "logo");
        this.house = this.add.image(128, 128, "house");
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
    }
}