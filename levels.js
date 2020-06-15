import Brick from './brick';


/*
    return Array of Brick for level 1
*/
export function buildLevel(game,levelNumber){
    var bricks = [];
    // if level number > number of level available
    if(levelNumber + 1 > levels.length)
    {
        return null;
    }
    var levelChosen = levels[levelNumber]
    levelChosen.forEach( (row,rowIndex) => {
        row.forEach( (brick, brickIndex) => {
            if(brick == 1)
            {
                var position = {
                    x: Brick.width * brickIndex,
                    y: Brick.height * rowIndex
                }
                bricks.push(new Brick(game,position));
            }
        })   ;
    });

    return bricks;
}
export const levels = [
    [
      [1,0,1,0],
      [0,0,0,1,0,1] ,
      [1,0,0,] 
    ],
    [
    [1,0,0] 
  ]
];