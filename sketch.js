const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, bg ;
var girl;
var snowImage, snowGroup;


function preload(){
  snowImage = loadImage("snow4.webp");
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 800, 400);
  bg.addImage(backgroundImg);
  bg.scale = 0.65;

  snowGroup = new Group();
 
}

function draw() {
  background(255,255,255);  
  makeSnow();
  drawSprites();
}

function makeSnow() {
  if(frameCount%40 === 0) {
    var snow = createSprite(0, 0, 40, 10);
    snow.x = Math.round(random(0, 800));
    snow.addImage(snowImage);
    snow.scale = 0.2;
    snow.velocityY = 3;
    snow.lifetime = 200;
    snowGroup.add(snow);
  }
}
