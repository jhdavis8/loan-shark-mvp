class Base_property extends Phaser.Scene {
    constructor(){
        super("Base_property")
    }

    preload(){
        this.load.image("buy", "assets/buttons/button_buy-property.png");
        this.load.image("leave", "assets/buttons/button_return-to-town.png");
    }
    create(){

    }
    add_buttons(scene){
        scene.buy_button = scene.add.image(174, 431, "buy");
        scene.buy_button.setInteractive();
        scene.buy_button.on("pointerup", this.buy_property, this);
        scene.leave_button = scene.add.image(571, 431, "leave");
        scene.leave_button.setInteractive();
        scene.leave_button.on("pointerup", this.back_to_map, scene);
    }

    buy_property(){
        console.log("buy property")
    }
    back_to_map(){
        this.scene.start("playGame", {"score" : 25});
    }

    test(){
        console.log("from bp");
    }

    update(){

    }
}