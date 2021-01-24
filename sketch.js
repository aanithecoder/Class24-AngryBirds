const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150,300,50,50);
    box2 = new Box(300,300,50,50);
    ground = new Ground(200,height,400,20)
    log1 = new Log(230, 200, 250, PI/2);
    pig1 = new Pig(225, 180);
    log2 = new Log(230, 130, 250, PI/2);
    pig2 = new Pig(225, 250);
    box3 = new Box(150,150,50,50);
    box4 = new Box(300,150,50,50);
    box5 = new Box(225, 50, 50, 50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
}