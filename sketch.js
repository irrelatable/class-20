var movingrect, fixedrect
function setup(){
  createCanvas(1200,800)
  fixedrect = createSprite(400,200,50,80)
  fixedrect.shapeColor = "blue"
  fixedrect.debug = true
  movingrect = createSprite(200,200,30,80)
  movingrect.shapeColor = "blue"
  movingrect.debug = true
}
function draw(){
  background("black")
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 && 
    fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2 &&
    movingrect.y-fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2){
    movingrect.shapeColor = "white"
    fixedrect.shapeColor = "white" 
  }
  else {
    movingrect.shapeColor = "blue"
    fixedrect.shapeColor = "blue" 
  }

  drawSprites();
}