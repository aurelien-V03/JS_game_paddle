import Paddle from './Paddle';
import InputHandler  from './input';
import Ball from './ball';
import Brick from './brick';
import {buildLevel} from './levels'; 


// Game State
const GAMESTATE = {
    PAUSE:0,
    RUNNING:1,
    MENU:2,
    GAMEOVER:3,
    GAMEWON:4
}

export default class Game{

    constructor(GAME_WIDTH, GAME_HEIGHT){
        this.game_width = GAME_WIDTH;
        this.game_height = GAME_HEIGHT;
        this.gamestate = GAMESTATE.MENU;

        this.lives = 1;

        // Level 
        this.currentLevelNumber = 0;
        this.levelBrickHit = 0;
        this.currentLevel = buildLevel(this,this.currentLevelNumber);

        // Instanciate game objects
        this.padle = new Paddle(this);
        this.inputHandler = new InputHandler(this.padle,this);
        this.ball = new Ball(this);


        this.gamesObject = [this.ball, this.padle,...this.currentLevel];
    }

    start(){
        console.log("Game start");
        if(this.gamestate == GAMESTATE.MENU){
            var bricks = buildLevel(this,this.currentLevelNumber);
            this.gamesObject = [this.ball, this.padle,...bricks];
            this.gamestate = GAMESTATE.RUNNING;
        }
    }

    // MAJ de la position de chaque objet
    update(deltaTime){

        // level completed => next level
        if(this.currentLevel != null && this.levelBrickHit == this.currentLevel.length)
        {
            this.currentLevelNumber++;
            this.levelBrickHit = 0;

            // new level array
            this.currentLevel = buildLevel(this,this.currentLevelNumber);
            // if last array of levels
            if(this.currentLevel == null)
            {
                this.gamestate = GAMESTATE.GAMEWON;
            }
            else{
                 this.gamesObject = [this.ball, this.padle,...this.currentLevel];
            }

            }
        if(this.lives === 0)
        {
            this.gamestate = GAMESTATE.GAMEOVER;
        }

        // NO UPDATE 
        if(this.gamestate == GAMESTATE.PAUSE || this.gamestate == GAMESTATE.MENU || this.gamestate == GAMESTATE.GAMEOVER ||this.gamestate == GAMESTATE.GAMEWON) {
            return;
        }
        else{
            this.gamesObject.forEach((obj) => {obj.update(deltaTime)});
            // Affichage uniquement des objets non detruits
            this.gamesObject = this.gamesObject.filter( obj =>  obj.isDestroyed == false);
        }
    }
    

    // Display game objects + eventuals screen
    draw(ctx){
        this.gamesObject.forEach((obj) => {obj.draw(ctx)});
  
        if(this.gamestate == GAMESTATE.PAUSE){
            this.gamePauseScreen(ctx);
        }
        if(this.gamestate == GAMESTATE.MENU){
             this.gameMenuScreen(ctx)
        }

        if(this.gamestate == GAMESTATE.GAMEOVER)
        {
            this.gameOverScreen(ctx);
        }
        if(this.gamestate == GAMESTATE.GAMEWON)
        {
            this.gameWonScreen(ctx);
        }
    }

    // When user press 'ESC' to pause the game
    pause(){
        if(this.gamestate == GAMESTATE.PAUSE){
            this.gamestate = GAMESTATE.RUNNING;
        }
        else{
            this.gamestate = GAMESTATE.PAUSE;
        }
        console.log("Pause game " + this.gamestate);
    }

   
    // Pause screen when user press "ESC"
    gamePauseScreen(ctx)
    {
        ctx.rect(0,0,this.game_width,this.game_height);
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fill();
        ctx.font ="30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused",this.game_width/2,this.game_height/2);
    }
    // Menu screen when game loads
    gameMenuScreen(ctx){
        ctx.rect(0,0,this.game_width,this.game_height);
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fill();
        ctx.font ="30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Press SPACE BAR to start",this.game_width/2,this.game_height/2);
    }

    gameOverScreen(ctx){
        ctx.rect(0,0,this.game_width,this.game_height);
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fill();
        ctx.font ="30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER (Press key 'P' to restart) ",this.game_width/2,this.game_height/2);
    }

    gameWonScreen(ctx)
    {
        ctx.rect(0,0,this.game_width,this.game_height);
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fill();
        ctx.font ="30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME WON ! ",this.game_width/2,this.game_height/2);
    }

    // return true if the game is in RUNNING MODE
    isRunning(){
       return this.gamestate == GAMESTATE.RUNNING;  
    }

    isPaused(){
        return this.gamestate == GAMESTATE.PAUSE;  
    }

    // the game is now in running mode
    running(){
        this.gamestate = GAMESTATE.RUNNING;
    }

    isOnMenu(){
        return this.gamestate == GAMESTATE.MENU;
    }


}