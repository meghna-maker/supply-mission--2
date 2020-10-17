const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG,packageIMG,engine,world;
var packageBody,ground,helicopter;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(300 , 200 , 50, {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	console.log(packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
 	World.add(world,ground);
	console.log(ground);

	helicopter = Bodies.rectangle(300,180,100,100,{isStatic:true});
	World.add(world,helicopter);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 rect(ground.position.x,ground.position.y,800,10);
 image(packageIMG,packageBody.position.x,packageBody.position.y,50,50);
 image(helicopterIMG,helicopter.position.x,helicopter.position.y,100,100);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



