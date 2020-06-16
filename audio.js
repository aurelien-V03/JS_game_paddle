/*
    Class that uses MP3 files

*/

export default class Audio{

    constructor(){
        }

    static getMp3Content(){
        this.audio_rebond = document.getElementById('rebond_sound');
        this.audio_brickBreaking = document.getElementById('break_sound'); 
    }
    // Sound of the ball touches paddle
    static playRebondPaddle(){
         this.audio_rebond.play();
    }

    // Sound when the ball touches a brick and break it
    static playBreakingBrick(){
        this.audio_brickBreaking.play();
    }


}