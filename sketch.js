var bullet, wall;
var speed, weight;
var thickness;



function setup() {
  createCanvas(1600,400);
  
  // weight and speed
  speed = random(223,321);
  weight = random(30,53);
  thickness = random(22,83);

  // car sprite
  bullet = createSprite(50, 200, 50, 20); 
  bullet.velocityX = speed;

  //wall sprite
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80;
  
  
}

function draw() {
  background(255,255,255);  
  
  // to detect collision 
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
  
  // to calculate damage
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
  
  // to assign colors to the amount of damage
  if(damage > 10) {
    wall.shapeColor = color(255,0,0); // red
  }

  // damage is greater than or less than, then this change color to this. 
  if(damage < 10){
    wall.shapeColor = color(0,255,0); // green
  }
  
  }
  
  //console.log(damage);
  
  
  
  drawSprites();
}

// has collided function
function hasCollided(lbullet,lwall) {

 lbulletRightEdge = lbullet.x + lbullet.width;
 lwallLeftEdge = lwall.x;
 
 if(lbulletRightEdge >= lwallLeftEdge) {
   return true;
 }
 else {
   return false; 
 }


}