import Paddle from './Paddle';
import InputHandler  from './input';
import Ball from './ball';
import Brick from './brick';
import {buildLevel, level1} from './levels'; 

const GAMESTATE = {
    PAUSE:0,
    RUNNING:1,
    MENU:2,
    GAMEOVER:3
}

export default class Game{
    constructor(GAME_WIDTH, GAME_HEIGHT){
        this.game_width = GAME_WIDTH;
        this.game_height = GAME_HEIGHT;
        this.gamestate = GAMESTATE.MENU;

        this.padle = new Paddle(this);
        this.inputHandler = new InputHandler(this.padle,this);
        this.ball = new Ball(this);

        var bricks = buildLevel(this,level1);
        this.gamesObject = [this.ball, this.padle,...bricks];

        
    }

    start(){
        if(this.gamestate == GAMESTATE.MENU){
        console.log("Game start");
        var bricks = buildLevel(this,level1);
        this.gamesObject = [this.ball, this.padle,...bricks];
        this.gamestate = GAMESTATE.RUNNING;
        }
    }

    // MAJ de la position de chaque objet
    update(deltaTime){
        if(this.gamestate == GAMESTATE.PAUSE || this.gamestate == GAMESTATE.MENU) {
            console.log('rien');
            return;
        }
        else{
        this.gamesObject.forEach((obj) => {obj.update(deltaTime)});
        // Affichage uniquement des objets non detruits
        this.gamesObject = this.gamesObject.filter( obj =>  obj.isDestroyed == false);
        }
    }
    
    draw(ctx){
        this.gamesObject.forEach((obj) => {obj.draw(ctx)});

        if(this.gamestate == GAMESTATE.PAUSE){
        ctx.rect(0,0,this.game_width,this.game_height);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();
        ctx.font ="30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused",this.game_width/2,this.game_height/2);}

        if(this.gamestate == GAMESTATE.MENU){
            ctx.rect(0,0,this.game_width,this.game_height);
            ctx.fillStyle = 'rgba(0,0,0,1)';
            ctx.fill();
            ctx.font ="30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACE BAR to start",this.game_width/2,this.game_height/2);
            }
    }

    pause(){
        if(this.gamestate == GAMESTATE.PAUSE){
            this.gamestate = GAMESTATE.RUNNING;
        }
        else{
            this.gamestate = GAMESTATE.PAUSE;
        }
        console.log("Pause game " + this.gamestate);

    }


}