import BrickSuper from './BrickSuper';
export default class BrickExtra extends BrickSuper{
    static width = 50;
    static height = 20;
    
    constructor(position){
        super(position);
        this.brick_extra_img = document.getElementById("img_brick");   
    }

    

    update(dt){
        
    }

    draw(ctx){
        ctx.drawImage(this.brick_extra_img,this.position.x,this.position.y,this.width,this.height);

    }

}