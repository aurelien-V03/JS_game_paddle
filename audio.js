export default class Audio{

    constructor(){
        }

    static getMp3Content(){
        this.audio_rebond = document.getElementById('rebond_sound');
        this.audio_brickBreaking = document.getElementById('break_sound'); 
    }
    static playRebondPaddle(){
         this.audio_rebond.play();
    }

    static playBreakingBrick(){
        this.audio_brickBreaking.play();
    }


}