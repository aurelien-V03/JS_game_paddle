import Game from './game';
import Audio from './audio';

var canvas = document.getElementById("canvas");
var ctx  = canvas.getContext('2d');

// TAILLE DU CANVAS
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

Audio.getMp3Content();

var game = new Game(GAME_WIDTH,GAME_HEIGHT);
//game.start();


var lastTime = 0;


function gameLoop(ts){
    var dt = ts - lastTime;
    lastTime = ts;

    // CLEAN THE GAME 
    ctx.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);

    game.update(dt);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);