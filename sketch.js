var ball;
var ground;
var leftSide,rightSide;
var radius=40;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    

	var balls_options={

		isStatic:false,
		restitution:0.3,
		frictiom:0,
		density:1.2,
	}
    ball=Bodies.circle(260,100,radius/2,balls_options);
	World.add(world,ball);

	ground= new Ground(width/2,670,width,20);
	leftSide= new Ground(1100,600,20,120);
	rightSide= new Ground(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
  ground.show();
  leftSide.show();
  rightSide.show();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



