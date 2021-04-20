class Base_property extends Phaser.Scene {
    totalTime;
    
    constructor(){
        super("Base_property")
    }


    
    preload(){
        this.load.image("buy", "assets/buttons/button_buy-property.png");
        this.load.image("leave", "assets/buttons/button_return-to-town.png");
        this.load.image("sleep", "assets/buttons/sleep_button.png");
    }
    create(){
        var Scene2 = this.scene.get("Scene2");
        Scene2.nextDay(this);
        Scene2.totalTime;
    }

    

    add_buttons(scene){
        scene.buy_button = scene.add.image(174, 501, "buy");
        scene.buy_button.setInteractive();
        scene.buy_button.on("pointerup", this.buy_property, this);
        scene.leave_button = scene.add.image(571, 501, "leave");
        scene.leave_button.setInteractive();
        scene.leave_button.on("pointerup", this.back_to_map, scene);
    }
    // Adds in buttons for your home, go back to town, or go to sleep
    
    home_buttons(scene){
        var Scene2 = scene.scene.get("playGame");
        scene.buy_button = scene.add.image(174, 561, "sleep");
        scene.buy_button.setInteractive();
        scene.buy_button.on("pointerup", Scene2.nextDay, Scene2);
        scene.buy_button.on("pointerup", this.back_to_map, scene);
        scene.leave_button = scene.add.image(571, 561, "leave");
        scene.leave_button.setInteractive();
        scene.leave_button.on("pointerup", this.back_to_map, scene);
    }
    

    //When you select the sleep button, it increments the time to "7:00am" the next day and gives you your daily returns
 
    buy_property(){
        console.log("buy property");
        console.log(config.assets.house);
        console.log(config.player.portfolio);
        this.score -= config.player.buyProperty(config.assets.house);
        console.log(config.player.portfolio);
    }
    back_to_map(){
        this.scene.start("playGame", {"score" : config.player.savings});
    }

    test(){
        console.log("from bp");
    }

    update(){

    }
}