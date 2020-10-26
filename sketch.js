var rect1,rect2,rect3,rect1sprite,rect2sprite,rect3sprite;
var ball,dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);
	engine = Engine.create();
	world = engine.world;
	ball= new Ball(100,100);
	dustbin=new Dustbin()
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );

	Engine.run(engine);
	World.add(world,ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  dustbin.display();
  rect(width/2, 365, width, 10);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-80});
	}
}


