var box
var edges
function setup() {
  createCanvas(400,400);
  box=createSprite(160,160,50,50)
  box.shapeColor = "blue"
  box.velocityX = 2
  box.velocityY = 3

 edges=createEdgeSprites()

}

function draw() 
{ 
  background("yellow");
  box.bounceOff(edges)
  if(keyDown("right")){
    box.x += 5
  }

  if(keyDown("left")){
    box.x -= 5
  }
drawSprites()

}




