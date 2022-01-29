class Bird extends Box {
    constructor(x,y){
        super(x,y,50,50);
        this.img=loadImage("sprites/bird.png");
        this.img1=loadImage("sprites/smoke.png");
        this.trajectory=[];
    }
    display(){
        if(shot.sling.bodyA==null && this.body.velocity.x>10)
    {var pos=[this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);}
        for(var i=0;i<this.trajectory.length;i++){
            image(this.img1,this.trajectory[i][0],this.trajectory[i][1])
        }
        super.display();
    }
}