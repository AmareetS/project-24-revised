const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var trashbin
function setup() {
	createCanvas(1500, 700);
    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	trashbin = new Trashbin(1000,500,200,15);
    ground1 = new Ground(400,550,1900,15);
    ball = new Paper(100,520,15);
  }
function draw() {
  rectMode(CENTER);
  background(0);
  trashbin.display();
  ground1.display();
  ball.display();
 }
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
  }
}