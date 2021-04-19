class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
        
    }
    init(data){
        this.score = data.score;
    }
    create() {
    
        
        this.background= this.add.tileSprite(0,0, config.width, config.height, "background");
        this.water= this.add.tileSprite(400,800, config.width, config.height, "water");
        this.road = this.add.tileSprite(0, 160, config.width, 40, "road");

        this.car = this.add.image(170,130,"car");
        this.roadVert = this.add.tileSprite(160, 200, 270, 40, "road");
        this.dock = this.add.tileSprite(120, 480, 40, 80, "dock");
        this.dockpillars = this.add.tileSprite(160, 498, 40, 64, "dockpillars");
        this.dockpillars2 = this.add.tileSprite(112, 498, 40, 64, "dockpillars");
        this.roadVert.angle = 90;
        this.dock.setOrigin(0,0);
        this.dockpillars.setOrigin(0,0);
        this.dockpillars2.setOrigin(0,0);
        this.background.setOrigin(0,0);
        this.road.setOrigin(0,0);
        this.roadVert.setOrigin(0,0);
        this.logo = this.add.image(80, 60, "logo");
        this.house = this.physics.add.image(128, 128, "house");
        this.raft = this.add.image(436, 556, "raft");
        this.rowboat = this.add.image(240, 550, "rowboat");
        this.speedboat = this.add.image(684, 546, "speedboat");
        //this.player = this.physics.add.sprite(300,150, "player");

        
        this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont","Money: " + this.score, 16);
       
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        
        

        this.player_anim(this);
        this.physics.add.overlap(this.player, this.house, this.pickPowerUp, null, this);
    }
    pickPowerUp(player, house){
        this.score+=15;
        this.scoreLabel.text = "Money: " + this.score;
        this.scene.start("house", {"score" : this.score});
    }
    update() {
        this.movePlayerManager();
        
         this.loadMenu();
    }
   
    loadMenu(){
        this.input.keyboard.on('keydown-A', function (event) {
          console.log("MENU OPEN");
          this.scene.start("menuS", {"score" : this.score});},this);
        
    }
    

    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            if(this.player.x > 0+this.player.width/2){
                this.player.x -=1;
                this.player.flipX=true;
                console.log(this.player.x);

            }
        }
        if(this.cursorKeys.right.isDown){
            if(this.player.x < config.width-this.player.width/2){
                this.player.x +=1;
                this.player.flipX=false;
                console.log(this.player.x);
            }
        }
        if(this.cursorKeys.up.isDown){
            if(this.player.y >0+this.player.height/2){
                this.player.y -=1;
                console.log(this.player.y);
            }
        }
        if(this.cursorKeys.down.isDown){
            if(this.player.y < 506){
                this.player.y +=1;
                console.log(this.player.y)
            }
        }
        if(this.cursorKeys.space.isDown){
            this.score+=1;
            console.log(this.score);
            this.scoreLabel.text ="Money:" +this.score.toString();
            
        }
        
        
        else{}
        
    }


    player_anim(scene){

        scene.player = scene.physics.add.sprite(300,150, "player");
        scene.anims.create({
            key: "player_anim",
            frames: scene.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
          }, this);

          scene.player.play("player_anim");
    }
}