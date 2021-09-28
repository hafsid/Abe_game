var back,backImg;
var char,charImg;

var enemy,enemyImg,enemyG;

function preload(){
  backImg = loadImage("img/bg.png");
  charImg = loadAnimation("img/ch3.png","img/ch4.png")
  charImg.frameDelay = 10

  enemyImg = loadAnimation("img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png","img/11.png","img/12.png")
  enemyImg.frameDelay = 10
}
function setup(){
  createCanvas(1000,400)

  back = createSprite(200,200);
  back.addImage("back",backImg);

  char = createSprite(80,350);
  char.addAnimation("running",charImg)
  char.scale = 2

}

function draw(){
  background(0);
  back.velocityX = -4

  if(back.x <0){
    back.x = back.width/2
  }
  enemies();
  drawSprites();
  fill("white")
  textSize(20)
  text(mouseX+","+mouseY,mouseX,mouseY);

}

function enemies(){
  if(frameCount % 120===0){
    enemy = createSprite(1000,350)
    enemy.addAnimation("enemy",enemyImg)
    enemy.scale = 1.5
    enemy.velocityX = -4
  }
}