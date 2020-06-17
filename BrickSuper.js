/*
    Super class of BrickExtra and Brick 

*/
export default class BrickSuper{

       // Bricks : WIDTH / HEIGHT
       static width = 100;
       static height = 50;
       static game;

    constructor(position){

        this.isDestroyed = false;
        this.position = position;

        this.width = BrickSuper.width;
        this.height = BrickSuper.height;

        this.gw = BrickSuper.game.game_width;
        this.gh = BrickSuper.game.game_height;

        this.game = BrickSuper.game;

    }



}