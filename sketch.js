var ship, ship_moving;
var sea, sea_image;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  //create sea
  sea = createSprite(200,200,20,20);
  sea.addImage("sea", sea_image);

  //create ship
  ship = createSprite(100,190,40,40);
  ship.addAnimation("ship", ship_moving);
  ship.scale = 0.4;
}

function draw() {
  background("blue");

  sea.velocityX = -2;

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 
  drawSprites();
}