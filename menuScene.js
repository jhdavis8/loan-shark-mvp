class menuScene extends Phaser.Scene{
    constructor(){
        super("menuS");
    }

    preload(){

      //  this.load.image("Lbox", "assets/objects/UI-ELEMENT-LTextbox.png");
        this.load.image("sbox", "assets/objects/UI-ELEMENT-STextbox.png");
        this.load.image("menu", "assets/objects/UI-ELEMENT-MENU.png");
    
    }


    create(){
        
        this.menu = this.add.image(400, 300, "menu");
        //this.sbox = this.add.image(400, 300, "sbox");
        
        this.add.bitmapText(242, 115, "pixelFont", "MENU", 45, 1);

        this.leave_button = this.add.image(400, 300, "sbox");
        this.leave_button.setInteractive();
        this.leave_button.on("pointerup", this.leaveMenu, this);
        
        
        
        this.add.bitmapText(242, 200, "pixelFont",config.player.name, 28, 1);
        this.add.bitmapText(242, 210, "pixelFont",config.portfolio.loans.name, 28, 1);
        

    }
    

    update(){
       

    }
    leaveMenu(){
        
            this.scene.start("playGame", {"score" : config.player.savings});
        };
    


















    /* TODO: 
    *   Make menu popup when the player enters the shops or houses
    *   Give functionality to the menu
    *   add cool background to menu
    *   some red errors pop up so maybe fix em
    *   Make loading text
    *   Make Titlescreen  
    * 
    * 
    * 
    *   figureout how tf phaser works man
    */
}