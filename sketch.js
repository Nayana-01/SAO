var sword, swordImg, beast, beastImg, slash, Hp1, Hp2, Hp3, Hp4, Hp1Img, Hp2Img, Hp3Img, Hp4Img, backImg, back, beastGroup;

var PLAY=1;
var END=0;
var gameState=1;
var Score = 0;


function preload(){
  swordImg=loadImage("kiriti.png");
  beastImg=loadImage("beast.png");
  slash=loadSound("mixkit-sword-slash-swoosh-1476.mp3");
  
  Hp1Img=loadImage("Hp_100.png");
  
  Hp2Img=loadImage("Hp_75.png");
  
  Hp3Img=loadImage("Hp_45.png");
  
  Hp4Img=loadImage("Hp_0.png");
  
  backImg=loadImage("background.jpg");

}

function setup() {
  createCanvas(600, 400);
 
  back = createSprite(300,200, 600, 600);
  back.addImage("background",backImg);
 

  
  sword=createSprite(50, 200, 10, 10);
  sword.addImage(swordImg);
  sword.scale=0.2;
  
  Hp1 = createSprite(500, 50, 10, 10);
  Hp1.addImage(Hp1Img)
  Hp1.scale = 0.5
  
  
  beastGroup = new Group();
  
  
 
}

function draw() {
   background(250);
  if(gameState===PLAY){
  sword.y=World.mouseY;
  sword.x=World.mouseX;
  
  if(beastGroup.isTouching(sword)){
    slash.play();
    Score = Score+1;
    beastGroup.destroyEach();
  }
  
  if(Score === 2){
    Hp1.addImage(Hp2Img);
  }
  
  if(Score === 5){
    Hp1.addImage(Hp3Img);
  }
  
    if(Score === 8){
    Hp1.addImage(Hp4Img);
  }
  
   sword.debug = true;
  sword.setCollider("rectangle", 0, 0, 200, 500)
  
  beastGroup.debug = true;
  
  createBeast();
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ Score,150,30);
  }
 
  if(Score === 9){
    gameState = END;
    text("GameOver", 300, 250);
    beastGroup.destroyEach();
    sword.destroy();
    Hp1.destroy();
  }
}


function createBeast(){
  if (World.frameCount % 80 == 0) {
  var beast = createSprite(Math.round(random(50, 350),40, 10, 10));
  beast.addImage(beastImg);
  beast.scale=0.2;
  beast.velocityY = 5;
  beast.lifetime = 150;
  beastGroup.add(beast);
}
}
