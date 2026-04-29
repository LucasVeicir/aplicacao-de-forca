const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
let ground;
let right;
let left;
let topWall;
let ball;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,20);
    right = new Ground(390,200,20,400);
    left = new Ground(10,200,20,400);
    topWall = new Ground(200,10,400,20);

    let ballOptions = {
        restitution:0.95
    }
    ball = Bodies.circle(200,100,20,ballOptions);
    World.add(world,ball);
}

function draw(){
    background(51);
    Engine.update(engine);

    ground.show();
    right.show();
    left.show();
    topWall.show();

    ellipse(ball.position.x,ball.position.y,20);
}

function hForce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}