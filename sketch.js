
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var dustbin;
var packageBody,ground;

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin(920,344,20,105);
  dustbin2 = new Dustbin(960,380,80,20);
	dustbin3 = new Dustbin(990,344,20,105);	

  var paperObject_options ={
    isStatic:false,
    restitution : 0.3,
    density:1.2,
    friction:0.5,   
}
paperObject = Bodies.circle(200,370,10,paperObject_options);
World.add(world,paperObject);
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  paperObject.shapeColor = "white";
  ellipseMode(RADIUS);
  ellipse(paperObject.position.x,paperObject.position.y,10,10);  
}

function keyPressed(){

  if (keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  }
}

