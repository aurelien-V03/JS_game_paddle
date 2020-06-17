
import {detectCollision, detectCollisionSide } from './collisionDetection';
import Audio from './audio';
import BrickSuper from './BrickSuper';
export default class Brick extends BrickSuper{

 

    constructor(position){

        super(position);
        this.brick_img = document.getElementById("img_brick");
    }

    update(){

        // if ball hits the brick
        if(detectCollision(BrickSuper.game.ball, this))
        {
            this.isDestroyed = true;
            BrickSuper.game.levelBrickHit++;
            
            Audio.playBreakingBrick();

            var topOfBall = BrickSuper.game.ball.position.y;
            if(topOfBall >= this.position.y && topOfBall < this.position.y + this.height){
                BrickSuper.game.ball.speed.x = -BrickSuper.game.ball.speed.x; 
            }
            else{
                BrickSuper.game.ball.speed.y = -BrickSuper.game.ball.speed.y;

            }
        }
    }
    draw(ctx){
        ctx.drawImage(this.brick_img,this.position.x,this.position.y,this.width,this.height);
    }


}