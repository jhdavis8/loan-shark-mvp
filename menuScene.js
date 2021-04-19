class menuScene extends Phaser.Scene{
    constructor(){
        super("menuS");
    }

    preload(){
        this.load.image("Lbox", "assets/objects/UI-ELEMENT-LTextbox.png");
        this.load.image("sbox", "assets/objects/UI-ELEMENT-STextbox.png");
        this.load.image("menu", "assets/objects/UI-ELEMENT-MENU.png");
    }
    create(){
        
        this.menu = this.add.image(400, 300, "menu");
        this.sbox = this.add.image(400, 300, "sbox");

    }

    update(){
        this.leaveMenu();

    }
    leaveMenu(){
        this.input.keyboard.on('keydown-A', function (event) {
            console.log("MENU CLOSE");
            this.scene.start("playGame", {"score" : this.score});},this);
    }


















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