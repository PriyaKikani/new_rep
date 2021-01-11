
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Bodies are created here

	roof = new Roof(400, 100, 350, 40);
	bobDiameter = 25;

	bob1 = new Bob(300, 400, bobDiameter);
	bob2 = new Bob(350, 400, bobDiameter);
	bob3 = new Bob(400, 400, bobDiameter);
	bob4 = new Bob(450, 400, bobDiameter);
	bob5 = new Bob(500, 400, bobDiameter);

	rope1 = new Rope (bob1.body, roof.body, -(bobDiameter * 4), bobDiameter);
	rope2 = new Rope (bob2.body, roof.body, -(bobDiameter * 2), bobDiameter);
	rope3 = new Rope (bob3.body, roof.body, 0, bobDiameter);
	rope4 = new Rope (bob4.body, roof.body, (bobDiameter * 2), bobDiameter);
	rope5 = new Rope (bob5.body, roof.body, (bobDiameter * 4), bobDiameter);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.setStatic(bob1.body, false);
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-70, y:-65})
	}
  }
