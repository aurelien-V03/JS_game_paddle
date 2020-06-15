export default class InputHandler{

    
    constructor(paddle, game){
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
                    game.start();
                    break;
               
             }
        });

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