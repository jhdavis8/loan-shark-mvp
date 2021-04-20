class Bank extends Phaser.Scene{
    constructor() {
        super("bank");

    }

    init(data){
        this.score = data.score;
    }
    preload() {
        this.load.image("take", "assets/buttons/button_take-loan.png");
        this.load.image("leave", "assets/buttons/button_return-to-town.png");
        this.load.image("scroll", "assets/textures/scroll.png", {
            frameWidth: 400,
            frameHeight: 300
        });
    }
    create(){
        
        
        config.loans.forEach(this.listLoan, this);
    
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        this.leave_button = this.add.image(400, 550, "leave");
        this.leave_button.setInteractive();
        this.leave_button.on("pointerup", this.back_to_map, this);
    }


    update(){
        this.changeSceneManager()
    }

    changeSceneManager(){
        if(this.cursorKeys.space.isDown){
            //this.scene.wake("playGame",{"score" : this.score});
            //this.scene.switch("house","playGame");
            this.scene.start("playGame", {"score" : this.score});
            
        }
    }

    listLoan(item, index){
        var loan_text = this.add.bitmapText(10, index*40+50, "pixelFont", item, 23, 1);
        var buy_button = this.add.image(config.width-100, index*40+50, "take");
        buy_button.setInteractive();
        buy_button.on("pointerup",  function(){
            this.takeLoan2(item, index, buy_button, loan_text)}, this);

        return buy_button;
    }

    takeLoan2(item, index, buy_button, loan_text){
        //console.log("player_takes_loan");
        //console.log(index);
        config.player.takeLoan(item);
        config.loans.splice(index, 1);
        console.log(config.loans);
        buy_button.destroy();
        loan_text.destroy();

    }

    back_to_map(){
        this.scene.restart();
        this.scene.switch("playGame", {"score" : 25});
    }

    
    
        

}