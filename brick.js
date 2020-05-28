
import {detectCollision } from './collisionDetection';
export default class Brick{
    constructor(game, position){

        this.isDestroyed = false;

        this.gw = game.game_width;
        this.gh = game.game_height;

        this.game = game;

        this.brick_img = document.getElementById("img_brick");
        
        this.width = 52;
        this.height = 24;

        this.position = position;
    }

    update(){
        if(detectCollision(this.game.ball, this))
        {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.isDestroyed = true;
        }
    }
    draw(ctx){
        ctx.drawImage(this.brick_img,this.position.x,this.position.y,this.width,this.height);

    }


}