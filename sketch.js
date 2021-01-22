var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(50,90);
  weight=random(400,1500);
  thickness.random(22,83);

  car=createSprite(50,200,50,50);
  
  wall=createSprite(1200,200,60,thickness,height/2);
  wall.shapeColor(80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  bullet.velocityX=speed;

  //hasCollided();

 if (hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness *thickness *thickness);

  if (damage>10){
    wall.shapeColor(255,0,0);
  }

  if (damage<10){
    wall.shapeColor(0,250,0);
  }

 }

}

function hasCollided(lbullet,lwall) {

   bulletRightEdge=lbullet.x=lbullet.width;
   wallLeftEdge=lwall.x
   if(bulletRightEdge<=wallLeftEdge)
   {
     return true
   }
 return false;

}