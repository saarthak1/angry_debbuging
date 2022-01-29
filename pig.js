class Pig extends Box {
    constructor(x,y){
        super(x,y,50,50);
        this.img=loadImage("sprites/enemy.png");
        this.vip=255;
    }
    display(){
        if(shot.sling.bodyA==null){
               push();
        this.vip-=0.5;
        tint(255,this.vip);
        super.display()
        pop()
        }
        else{
            super.display();
        }
    }
    score(){
        if(this.vip<240 && this.vip>-100 && bird.body.velocity.x>=0.5 && gamestate=="launched"){
            score=score+1;
            console.log(bird.body.velocity.x);
        }
    }
}
