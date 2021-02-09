var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var invi

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	invi = createSprite(250,520,10,10)
	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  if(keyDown("right")){
	  fairy.x = fairy.x + 8
  }

  
  if(keyDown("left")){
	fairy.x = fairy.x -8
}

if(keyWentDown("down")){
	star.velocityY = 5
}

if(star.y > 800){
	star.y = 50
	star.x = Math.round(random(50,500))
}

invi.x= fairy.x +125
invi.y=fairy.y -10
invi.visible = false

if(invi.isTouching(star)){
	star.velocityY = 0
	
}

  drawSprites();

}

