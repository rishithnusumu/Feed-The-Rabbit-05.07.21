var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg
var orangeleafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  //
  createApples();
  createLeaves();
  createorangeLeaves();

  drawSprites();

}

//
function createApples() {
  if (frameCount %60 == 0){
	var apple = createSprite(50,30,10,10);
	apple.addImage(appleImg)
	apple.velocityY = 5
  apple.scale = 0.1
  apple.x = Math.round(random(50,350))
  apple.lifetime = 50;
  }
}
//
function createLeaves() {
  if (frameCount %60 == 0){
	var leaf = createSprite(75,50,10,10);
	leaf.addImage(leafImg)
	leaf.velocityY = 5
  leaf.scale = 0.1
  leaf.x = Math.round(random(50,350))
  leaf.lifetime = 70;
  }
}

function createorangeLeaves() {
  if (frameCount %60 == 0){
	var orangeleaf = createSprite(100,70,10,10);
	orangeleaf.addImage(orangeleafImg)
	orangeleaf.velocityY = 5
  orangeleaf.scale = 0.1
  orangeleaf.x = Math.round(random(50,350))
  orangeleaf.lifetime = 70;
  }
}
