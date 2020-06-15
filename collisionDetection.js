export function detectCollision(ball,gameObject)
{
        var bottomOfBall = ball.position.y + ball.size;
        var topOfBall = ball.position.y;


        var topOfGameObject = gameObject.position.y;
        var leftSideOfGameObject = gameObject.position.x;
        var rightSideOfGameObject = gameObject.position.x + gameObject.width; 
        var bottomSideOfGameObject = gameObject.position.y + gameObject.height;
    
        
        if(bottomOfBall >= topOfGameObject 
            && topOfBall <= bottomSideOfGameObject
            && ball.position.x + ball.size >= leftSideOfGameObject 
            && ball.position.x <= rightSideOfGameObject 
            )
        {
                return true;
        }
        else{ 
                return false;
        }
}

export function detectCollisionSide(ball,gameObject)
{
        var leftSideOfGameObject = gameObject.position.x;
        var rightSideOfGameObject = gameObject.position.x + gameObject.width; 

        if(
             ball.position.x + ball.size >= leftSideOfGameObject 
            || ball.position.x <= rightSideOfGameObject 
            )
        {
                return true;
        }
        else{
                return false;
        }
}