
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var paper,paperimg;
var dustbin;


function setup() {
	createCanvas(800,300);


	engine = Engine.create();
	world = engine.world;


ground = new Ground();
paper = new Paper ();
dustbin = new Dustbin(700,235,100,100)

	Engine.run(engine);
}


function draw() {
  background(220);

	ground.display();
	dustbin.display();
	paper.display();
}


function keyPressed(){
if(keyDown(UP_ARROW)){
Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-15});
}
}
