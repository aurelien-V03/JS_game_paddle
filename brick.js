
import {detectCollision, detectCollisionSide } from './collisionDetection';
import Audio from './audio';
export default class Brick{

    static width = 100;
    static height = 50;

    constructor(game, position){

        this.isDestroyed = false;

        this.gw = game.game_width;
        this.gh = game.game_height;

        this.game = game;

        this.brick_img = document.getElementById("img_brick");
        
        this.width = Brick.width;
        this.height = Brick.height;

        this.position = position;
    }

    update(){

        // if ball hits the brick
        if(detectCollision(this.game.ball, this))
        {
            this.isDestroyed = true;
            this.game.levelBrickHit++;
            
            Audio.playBreakingBrick();

            var topOfBall = this.game.ball.position.y;
            if(topOfBall >= this.position.y && topOfBall < this.position.y + this.height){
              this.game.ball.speed.x = -this.game.ball.speed.x; 
            }
            else{
                this.game.ball.speed.y = -this.game.ball.speed.y;

            }
        }
    }
    draw(ctx){
        ctx.drawImage(this.brick_img,this.position.x,this.position.y,this.width,this.height);
    }


}