class Loan{
    constructor(name, principle, intrest, months){
        this.name = name;
        this.principle = principle;
        this.intrestRate = intrest;
        this.duration = months;
        var comp= Math.pow((1+this.intrestRate), this.duration);
        this.owed= this.principle*comp;
        this.months_payed =0;
    }

    getPayment(){
        var comp = Math.pow((1+this.intrestRate), this.duration);
        var top = this.intrestRate*comp;
        var bottom = comp-1;
        return this.principle*(top/bottom);
    }
}

class Property{
    constructor(name, income, loan){
        this.name =name;
        this.loan = loan;
        this.monthly_income = income;
    }

    getProfit(){
        return this.monthly_income - this.loan.getPayment();
    }
}



class Player {
    constructor(){
        this.name = "Player";
        this.assets = {};
        this.credit_score = 500;
        this.savings = 0;
    }

}


var config = {
    width:800,
    height:600,
    backgroundColor:0x000000,
    scene: [Scene1,Scene2, Base_property, home_scene, location_contract_scene,menuScene, Beach],
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    },
    player: new Player(),
    assets: {
        house : new Property("house", 1000, new Loan("house", 100000, .08, 60)),
        boat : new Property("boat", 500, new Loan("boat"), 0,0,0)
    }
}
console.log(config.player.name);
var game = new Phaser.Game(config);