class titleScene extends Phaser.Scene{
    constructor(){
        super("titleS");
    }

    preload(){
            //lOADING IN THE ASSETS YO!
        this.load.image("logo", "assets/logos/loanSharkLogo.png");
        this.load.image("play", "assets/buttons/button_play.png");
    }
    


    create(){
            // PUTS THINGS ON THE SCREEN YO!
        this.logo = this.add.image(400, 400, "logo");
        this.leave_button = this.add.image(400, 200, "play");
        
        this.leave_button.setInteractive();
        this.leave_button.on("pointerup", this.leaveMenu, this);

    }
    

    update(){
       // this.leaveMenu();

    }
    leaveMenu(){
            //LEAVES THE MENU AND STARTS THE GAME YO!
            this.scene.start("playGame", {"score" : 10}, {"totalTime" : 0});
        };
    


















    /* TODO: 
    *    
    * 
    * ADD COOL BG TO TITLE SCREEN
    * ADD A TUTORIAL BUTTOIN TO THE TITLE SCREEN  
    * 
    *   figureout how tf phaser works man
    */
}