import Game from './game';
import Audio from './audio';

var canvas = document.getElementById("canvas");
var ctx  = canvas.getContext('2d');

// TAILLE DU CANVAS
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Get all the MP3 files
Audio.getMp3Content();

var game = new Game(GAME_WIDTH,GAME_HEIGHT);

var lastTime = 0;


function gameLoop(ts){
    var dt = ts - lastTime;
    lastTime = ts;

    // CLEAN THE GAME 
    ctx.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);

    // UPDATE all the objects of the game (collision, position etc...)
    game.update(dt);
    // DISPLAY all the objects on screen
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);