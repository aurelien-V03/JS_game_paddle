/*
    Class that handle the input of the user 

*/
export default class InputHandler{

    constructor(paddle, game){
        // When user PRESS a key down
        document.addEventListener('keydown', function(event){

            console.log(event.keyCode);

             switch(event.keyCode)
             {
                 // LEFT
                case 37:
                    paddle.moveLeft();
                     break;
                // RIGHT
                 case 39:
                    paddle.moveRight();
                    break;
                // ESC
                case 27:
                    if(game.isRunning()){
                        game.pause();
                    }
                    else if(game.isPaused())
                    {
                       game.running();
                    }
                    break;
                // SPACE BAR
                case 32:
                    if(game.isOnMenu()){
                    game.start();
                    }
                    break;
               
             }
        });
        // When user releases key up
        document.addEventListener('keyup',function(event){
            switch(event.keyCode)
             {
                
                 // LEFT
                case 37:
                    if(paddle.speed < 0)
                             paddle.stop()
                     break;          
                // RIGHT
                 case 39:
                   if(paddle.speed > 0)                    
                        paddle.stop()
                     
                    break;
                

             }
            
            });


    }


}