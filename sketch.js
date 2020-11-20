
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBody;
var groundBody;
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	paperBody = new Paper (100,630);
	//Create the Bodies Here.
	dustbin1 = new Dustbin (750,620,20,100);
	dustbin2 = new Dustbin (950,620,20,100);
	dustbin3 = new Dustbin (850,660,200,20);
	groundBody = new Ground (600,680,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBody.display();
  groundBody.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:85,y:-85})
	}
	
}


