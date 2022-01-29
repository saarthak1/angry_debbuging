var engine,world,ground,box1,box2,pig1,pig2
,box3,box4,log1,log2,box5,log3,log4,bird,log5,sling;
var score=0,c=0, gamestate;
function preload(){
    bg=loadImage("sprites/bg.png")
    baground();
}
function setup(){
    createCanvas(1200,600);
    engine=Matter.Engine.create();
    world=engine.world;
    ground=new Ground(width/2,height,width,40);
    box1=new Box (700,320,70,70);
    box2=new Box(920,320,70,70);
    pig1=new Pig(810,350);
    log1=new Log(810,260,300,PI)
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    pig2=new Pig(810,220)
    log2=new Log(810,180,300,PI);
    box5=new Box(810,160,70,70);
    log3=new Log(730,90,150,-2*PI/7);
    log4=new Log(870,90,150,2*PI/5);
        bird=new Bird(200,50);
    shot=new Sling(bird.body,{x:200,y:50});
    //baground()
}

function draw(){
    background(bg);
    Matter.Engine.update(engine);
    textSize(30);
    fill("darkblue");
    text("Score : "+score,width-200,40);
    ground.display();
    box1.display();
    box2.display();  
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();  
    log3.display();
    log4.display();
    bird.display();
    shot.display();
    pig1.score();
    pig2.score();
    console.log(gamestate)
}
function mouseDragged(){
//    bird.body.position.x=mouseX;
//      bird.body.position.y=mouseY;
if(gamestate!="launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

}
function mouseReleased() {
    shot.fly();
    gamestate="launched"
}
function keyPressed() {
    gamestate="";
    Matter.Body.setPosition(bird.body,{x:200,y:50})
    shot.attach();
}
async function baground() {
    var response=await fetch ("http://worldtimeapi.org/api/timezone/asia/kolkata");
    //console.log(response) 
    var jsonresponse=await response.json();  
    // console.log(jsonresponse);
    var datetime=jsonresponse.datetime;
    // console.log(datetime);
    var time=datetime.slice(11,13)
    // console.log(time);
    if (time >=6 && time <=18 ){
        bg=loadImage("sprites/bg.png")
    }
    else {
        bg=loadImage("sprites/bg2.jpg")
    }

}
