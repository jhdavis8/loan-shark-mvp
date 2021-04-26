class Loan{
    name;
    principle;
    interestRate;
    duration;
    comp;
    owed;
    monthsPaid;
    constructor(name, principle, interest, months){
        this.name = name;
        this.principle = principle;
        this.interestRate = interest;
        this.duration = months;
        var comp= Math.pow((1+this.interestRate), this.duration);
        this.owed= this.principle*comp;
        this.monthsPaid =0;
    }

    getPayment(){
        var comp = Math.pow((1+this.interestRate), this.duration/7);
        var top = this.interestRate*comp;
        var bottom = comp-1;
        return (this.principle*(top/bottom)).toFixed(2);
    }

    toString(){
        var amount = "Loan amount: $" + this.principle;
        var interest = "Intrest Rate: " + this.interestRate*100 + "% per week";
        var duration = "Duration: " + this.duration + " days";
        var payment = "Payment: $" + this.getPayment() + " per week";
        return this.name+"\n"+amount+"\n"+interest+"\n"+duration+"\n"+payment;
    }
}

class Property{
    name;
    dailyIncome;
    price;
    constructor(name, income, price){
        this.name = name;
        this.dailyIncome = income;
        this.price = price;
    }

    getProfit(){
        return this.dailyIncome;
    }
}



class Player {
    constructor(){
        this.name = "Player";
        this.portfolio = new Portfolio;
        this.credit_score = 500;
        this.savings = 0;
    }

    buyProperty(beingBought){
        if (this.savings >= beingBought.price){
            console.log("property successfully purchased.");
            this.portfolio.assets.push(beingBought);
            this.savings -= beingBought.price;
            return beingBought.price;
        } else {
            console.log("you cannot afford this property.");
            return 0;
        }
        
    }

    takeLoan(loan){
        //console.log(config.loans[0].toString());
        console.log(loan.toString());
        this.savings += loan.principle;
        this.portfolio.loans.push(loan);
        //console.log(loan);
        
    }

}

// The portfolio class is where properties the player owns and loans the player has taken out are stored

class Portfolio {
    assets;
    loans;
    constructor(){
        this.assets = [];
        this.loans = [];
    }


    //Daily returns only pays off loans every 30 days, but earns income every day
    dailyReturns(currentDay){
        this.dailyReturn = 0;
        this.assets.forEach(element => {
            this.dailyReturn += element.getProfit();
        });
        if (currentDay%30 == 0){
            this.loans.forEach(element => {
                this.dailyReturn -= element.getPayment();
            });
        }
        console.log(this.dailyReturn);
        return this.dailyReturn;
    }

}


var config = {
    width:800,
    height:600,
    backgroundColor:0x000000,
    scene: [Scene1,Scene2, Base_property, home_scene, location_contract_scene,menuScene, Beach, Bank],
    physics: {
        default: "arcade",
        arcade:{
            debug: true
        }
    },
    player: new Player(),
    assets: {
        house : new Property("house", 40, 170000),
        boat : new Property("boat", 20, 75000),
    },
    loans:[
        new Loan("Loan 1", 1000, .08, 14),
        new Loan("Loan 2", 2000, .06, 35),
        new Loan("Loan 3", 1500, .10, 21),
      

        //new Loan("boat")
    ],
    bankTimer :1

}

function setLoans(){

}
console.log(config.player.name);
var game = new Phaser.Game(config);