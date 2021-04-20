class Scene2 extends Phaser.Scene {
    
    totalTime;
    displayTime;
    currentDay;
    //the higher the timerate, the slower the clock moves
    timeRate;
    timeRateCounter;

    constructor() {
        super("playGame");
        this.totalTime = 0;
        this.timeRate = 4;
        this.timeRateCounter = 0;
        this.currentDay = 0;
        
    }
    init(data){
        this.score = data.score;
    }
    create() {
    
        
        this.background= this.add.tileSprite(0,0, config.width, config.height, "background");
        this.sand = this.add.tileSprite(400, 450, config.width, 80, "sand");
        this.water= this.add.tileSprite(400,790, config.width, config.height, "water");
        this.road = this.add.tileSprite(0, 160, config.width, 40, "road");
        this.sandedge = this.add.tileSprite(0, 480, config.width, 40, "sandedge");
        this.grassedge = this.add.tileSprite(0, 400, config.width, 40, "grassedge");
        this.sandedge.setOrigin(0,0);
        this.grassedge.setOrigin(0,0);
        this.car = this.add.image(170,130,"car");
        this.roadVert = this.add.tileSprite(160, 200, 210, 40, "road");
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
        this.roadedge = this.add.image(160,405, "roadedge");
        this.roadedge.angle = 90;
        this.roadedge.setOrigin(0,0);
        this.house = this.physics.add.image(128, 128, "house");

        this.business = this.physics.add.image(210, 240, "businessOld");
        this.business.body.setSize(60,60);
        this.business.body.setOffset(10,20);
        this.boat = this.physics.add.image(180, 540, "rowboat");
        this.boat.body.setSize(120,40);
        this.boat.angle = 180;
        //this.rowboat = this.add.image(240, 550, "rowboat");
        //this.speedboat = this.add.image(684, 546, "speedboat");
        //this.player = this.physics.add.sprite(300,150, "player");

        
        this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont","Money: " + this.score, 16);
        this.timeLabel = this.add.bitmapText(10, 20, "pixelFont","Time: " + this.totalTime, 16);
       
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        
        

        this.player_anim(this);
        this.physics.add.overlap(this.player, this.boat, this.tada, null, this);
        this.physics.add.overlap(this.player, this.business, this.businessScene, null, this);

        this.physics.add.collider(this.player,this.water);
        this.physics.add.overlap(this.player, this.house, this.houseRepair, null, this);
    }
    businessScene() {
        console.log("Buy business");
    }
    houseRepair(player, house){
        this.score+=15;
        this.scoreLabel.text = "Money: " + this.score;
        //this.scene.start("house", {"score" : this.score});
        this.scene.start("house",{"score" : this.score});
        this.scene.switch("playGame","house");
    }
    tada() {
        console.log("trigger boat scene");
    }
    update() {

        config.player.savings = this.score;
        this.updateShoreline();
        this.movePlayerManager();
        this.loadMenu();
        this.updateTimeOfDay();

        //adds your daily returns once per day at midnight
        if ((this.totalTime%1440 == 0) && (this.timeRateCounter == 0)){
            this.score += config.player.portfolio.dailyReturns(this.currentDay);
        }

    }
    updateShoreline() {
        this.sandedge.tilePositionX += Math.random() * .18 - 0.09;
        this.water.tilePositionY += Math.random() * 0.05 + 0.05;
        this.water.tilePositionX += Math.random() * .08- 0.04;
    }
    loadMenu(){
        this.input.keyboard.on('keydown-A', function (event) {
          console.log("MENU OPEN");
          this.scene.start("menuS", {"score" : this.score});},this);
        
    }
    

    movePlayerManager(){
        var isMoving = 0;
        if(this.cursorKeys.left.isDown){
            isMoving = 1;
            if(this.player.x > 0+this.player.width/2){
                if((this.player.y > 490 && this.player.x > 131) || this.player.y <= 490)
                    this.player.x-= 1;
                this.player.flipX=true;
                console.log(this.player.x);

            }
        }
        if(this.cursorKeys.right.isDown){
            isMoving = 1;
            if(this.player.x < config.width-this.player.width/2){
                if((this.player.y > 490 && this.player.x < 154) || this.player.y <= 490)
                    this.player.x++;
                this.player.flipX=false;
                console.log(this.player.x);
            }
        }
        if(this.cursorKeys.up.isDown){
            isMoving = 1;
            if(this.player.y >0+this.player.height/2){
                this.player.y -=1;
                console.log(this.player.y);
            }
        }
        if(this.cursorKeys.down.isDown){
            isMoving = 1;
            if(this.player.y < 490){
                this.player.y +=1;
                console.log(this.player.y)
            }
            if(this.player.x > 125 && this.player.x < 155  && (this.player.y > 489 && this.player.y < 540)) 
                this.player.y++;
        }
        if(this.cursorKeys.space.isDown){
            this.score+=1;
            console.log(this.score);
            this.scoreLabel.text ="Money:" +this.score.toString();
            
        }
        if (isMoving);
            //scene.player.play("player_anim");
        else{
            //scene.player.play("player_idle");
        }
        
    }

    player_stand(scene) {
        scene.player = scene.physics.add.sprite(300,150, "playerIdle");
        scene.anims.create({
            key: "player_idle",
            frames: scene.anims.generateFrameNumbers("playerIdle"),
            frameRate: 20,
            repeat: -1
          }, this);

          scene.player.play("player_idle");
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
    updateTimeOfDay(){
        this.timeRateCounter++;
        if (this.timeRateCounter == this.timeRate){
            this.timeRateCounter = 0;
            this.totalTime += 1;
        }
        this.timeMod = this.totalTime % 720;
        if(this.totalTime%1440 >= 720){
            this.timeSuffix = "PM";
        } else{
            this.timeSuffix = "AM";
        }
        this.hour = (this.timeMod/60 | 0);
        this.minute = (this.timeMod-(60 * this.hour));
        if (this.minute < 30){
            this.minute = "00";
        }
        else if (this.minute < 60){
            this.minute = "30";
        }
        if (this.hour == 0)
            this.hour = 12;
        this.currentDay = ((this.totalTime/1440) | 0) + 1;
        this.displayTime = ("day " + this.currentDay + ", " + this.hour.toString() + ":"  + this.minute.toString() + " " + this.timeSuffix);

        
        this.timeLabel.text = this.displayTime;
    }
}