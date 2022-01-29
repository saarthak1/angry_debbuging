class Box{
    constructor(x,y,w,h)
    {
        var options={
            restitution:1
        }
        this.x=x; 
		this.y=y;
        this.w=	w;
        this.h=	h;
        this.body=Matter.Bodies.rectangle(this.x, this.y, w,h, options);
        this.img=loadImage("sprites/wood1.png");
		Matter.World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;	
        var angle=this.body.angle;	
			push()
			
			imageMode(CENTER);
            translate(pos.x,pos.y)
            rotate(angle);
			strokeWeight(4);
			stroke("black");
			fill("grey");
			image(this.img,0,0,this.w,this.h );
		pop()
    }
}