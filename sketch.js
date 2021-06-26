const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var polygon

var box17,box18,box19,box20,box21,box22
var score = 0

function preload() {
  polygon = loadImage("polygon.png"); 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(400,325,300,30);

    box1 = new Box(470,285);
    box2 = new Box(440,285);
    box3 = new Box(410,285);
    box4 = new Box(390,285);
    box5 = new Box(360,285);
    box6 = new Box(330,285);
    box7 = new Box(300,285);
    box8 = new Box(330,235);
    box9 = new Box(360,235);
    box10 = new Box(390,235);
    box11 = new Box(420,235);
    box12 = new Box(450,235);
    box13 = new Box(360,185);
    box14 = new Box(390,185);
    box15 = new Box(430,185);
    box16 = new Box(390,135);

    polygon = new Box(40,350,20,20);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon)

    slingshot = new SlingShot(this.polygon,{x:100,y:200});

    box17 = new Box(670,285);
    box18 = new Box(640,285);
    box19 = new Box(610,285);
    box20 = new Box(650,285);
    box21 = new Box(620,285);
    box22 = new Box(625,285);
    
    text("score:"+score,750,40); 

}

function draw(){
    background("black");
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    imageMode(CENTER);
    image(polygon,polygon.position.x,polygon.position.y,40,40)
    polygon.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    
} 

function mouseDragged(){
  
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon);
    }
}