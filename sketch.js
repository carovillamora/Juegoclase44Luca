var bedda, beddaImg, carne, carneImg, corazon, corazonImg;
var pilares, pilaresImg, bc, bcImg;

function preload(){
  beddaImg = loadImage("Bedda.png");
  carneImg = loadImage("carne.png");
  corazonImg = loadImage("Corazon.png");
  pilaresImg = loadImage("Pilar.png");
  bcImg = loadImage("bc.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  bc = createSprite(500,321,1000,20);
  bc.addImage(bcImg);
  bc.scale=0.3;
  bc.velocityX = -4;
  bedda = createSprite(50,50,10,20);
}

function draw(){
  background("white");
  
  if(bc.x < 0 ){
    bc.x = (width/1.5);
  }
  drawSprites();
}
