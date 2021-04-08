const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   ball= Bodies.circle(200,100,20);
    World.add(world,ball);

   var ground_options={
       isStatic:true
   }
   ground=Bodies.rectangle(200,390,200,20,ground_options);

    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}
