class Sling{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            length:10,
            stiffness:0.04
                    }
        this.sling=Matter.Constraint.create(options);
        Matter.World.add(world,this.sling)
        this.sll=loadImage ("sprites/sling1.png");
        this.bla=loadImage ("sprites/sling2.png")
    }
    display(){
        if (this.sling.bodyA!=null){
            push();
            strokeWeight(5)
            stroke(48,22,8)
            line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,
                this.sling.pointB.x-10,this.sling.pointB.y+20)
            line(this.sling.bodyA.position.x -20,this.sling.bodyA.position.y,
                this.sling.pointB.x +30,this.sling.pointB.y+20)
            pop();
        }
        else{
            c=c+1;
        }
        image(this.sll,200,50)
        image(this.bla,170,50)
    }
    fly(){
    this.sling.bodyA=null;
    }
    attach(){
        this.sling.bodyA=bird.body;
    }
}
