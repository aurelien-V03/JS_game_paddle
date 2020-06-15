import {detectCollision } from './collisionDetection';
import Audio from './audio';

export default  class Ball{
  
    constructor(game){
        this.gw = game.game_width;
        this.gh = game.game_height;
        this.isDestroyed = false;
        this.game = game;

        this.score_img = document.getElementById("img_score");
        this.size = 16;
        this.speed = { 
            x:2,
            y:2
        };

        this.position = {
            x:400,
            y:100
        };
    }

    draw(ctx){
        ctx.drawImage(this.score_img,this.position.x,this.position.y,this.size,this.size);
    }

    update(dt){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // ball hit LEFT or RIGHT screen
        if(this.position.x + this.size > this.gw || this.position.x < 0)
        {
            this.speed.x = -this.speed.x;
        }

        // ball hit UP
        if(this.position.y < 0)
        {
            this.speed.y = -this.speed.y;
        }

        // ball hit bottom = GAME OVER
        if(this.position.y + this.size > this.gh)
        {
            this.game.lives--;
        }

        // if ball hits paddle
        if(detectCollision(this,this.game.padle)){
         Audio.playRebondPaddle();
         this.speed.y = -this.speed.y;   
         this.position.y = this.game.padle.position.y - this.size;
        }
    }



}