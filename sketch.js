// You could have multiple flags like: start, launch to indicate the state of the game.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,400,20)
    tanker = new Tanker(200,300,10,10)
   
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    tanker.display();
    
    
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}