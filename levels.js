import Brick from './brick';

export function buildLevel(game,level1){
    var bricks = [];
    level1.forEach( (row,rowIndex) => {
        row.forEach( (brick, brickIndex) => {
            if(brick == 1)
            {
                var position = {
                    x: 52 * brickIndex,
                    y: 24 * rowIndex
                }
                bricks.push(new Brick(game,position));
            }
        })   ;
    });

    return bricks;
}
export const level1 = [
    [0,1,0,1,0,],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
     [0,0,1,0,1],
      [0,0,0,0,0], [0,0,1,0,1],
      [0,0,0,0,0], [0,0,1,0,1],
      [0,0,0,0,0], [0,0,1,0,0],
      [0,0,0,0,0], [0,0,1,0,1],
      [0,0,1,0,0], [0,0,0,0,1],
      [0,1,0,0,0], [0,0,1,0,0],
      [0,0,0,0,0], [0,0,1,0,1],
      [0,0,0,1,0], [0,0,1,0,1],
      [0,0,1,0,0]

];