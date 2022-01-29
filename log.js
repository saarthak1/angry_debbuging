class Log extends Box{
    constructor(x,y,w,angle){
        super(x,y,w,15);
        Matter.Body.setAngle(this.body,angle);
        density(10)
    }
}