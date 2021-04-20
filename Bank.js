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
        //console.log(this.score);
        //this.background= this.add.tileSprite(0,0, config.width, config.height, "scroll");
        //this.background.setOrigin(0,0);

        var fruits = ["apple", "orange", "cherry"];
        fruits.forEach(this.listLoans, this);
        
        
        //this.list = this.add.bitmapText(10, 5, "pixelFont","alsdjfalsdjflaksdjfolasdkfa", 32, 1);
        

        
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

    listLoans(item, index){
    
        this.test = this.add.bitmapText(10, index*40+50, "pixelFont",item, 32, 1);

        this.buy_button = this.add.image(config.width-100, index*40+50, "take");
        this.buy_button.setInteractive();
        this.buy_button.on("pointerup", this.takeLoan, this);
        console.log(item);
    }

    takeLoan(){
        console.log("player_takes_loan");
    }

    back_to_map(){
        this.scene.switch("playGame", {"score" : 25});
    }

    
    
        

}