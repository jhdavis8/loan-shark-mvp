export default class Player {
    name: string;  
    properties:  Map<string, string>;

    constructor(){
        this.name = "Player";
        this.properties = new Map<string, string>();
    }
}