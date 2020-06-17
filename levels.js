import Brick from './brick';


/*
    return Array of Brick for a specific level number
*/
export function buildLevel(game,levelNumber){
    var bricks = [];

    // if level number > number of level available
    if(levelNumber + 1 > levels.length)
        return null;
    // get the specific number 
    var levelChosen = levels[levelNumber];

    // for each row of the level
    levelChosen.forEach( (row,rowIndex) => {
        row.forEach( (brick, brickIndex) => {
            if(brick == 1)
            {
                var position = {
                    x: Brick.width * brickIndex,
                    y: Brick.height * rowIndex
                }
                bricks.push(new Brick(position));
            }
        })   ;
    });

    return bricks;
}


// levels available for the game 
export const levels = [
    [
      [0,1,0],
      [1,1,0],
      [1,1,0], 
      [0,1,1], 
      [0,1,1,0,0,0,1,1],
      [0,1,1,1,1,1,1,0,1], 
      [0,1,1,1,1,1,1]
      
    ],
    [
    [1,0,0] 
  ]
];