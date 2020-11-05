
var monkey,monkey_running
var banana,bananaImage, obstacles, obstacleImage
var FoodGroup, obstacleGroup
var score;
var survivalTime=0;
var ground;
var obstaceeeeeee;
var PLAY;
var END;
var gameState=PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  background("white");
  monkey = createSprite(80,315,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  score = 0;
  survialTime = 0;
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(250);

  stroke("balck");
  textSize(20);
  fill("black");
  text("score"+score,300,100)
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time"+ survivalTime,100,50);
  monkey.collide(ground);
  
  if(gameState ===PLAY){
    if(FoodGroup.isTouching(monkey)) {
      FoodGroup.destroyEach();
      score = score+1;
    }
     if (ground.x<0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -11;
    }
    monkey.velocityY=monkey.velocityY+0.4 
    
    if(monkey.isTouching(obstacleGroup)){
        
         gameState = END;
      
    }
  }

  if(gameState ===END){
    if(monkey.isTouching(obstacleGroup)){
   stroke("red");
    fill("red");
       textSize(30);
  text("Game Over", 110, 200);
   
   stroke("black");
    fill("black");
       textSize(30);
  text("Monkey is dead", 100, 240); 
    monkey.velocityY=0;
    obstaclee.velocityX=0;
    banana.visible=false;
    obstaclee.visible=0;
  }   
  }
  
  
 food();
  obstacles();
  drawSprites();
  FoodGroup.lifetime=100;
obstacles.lifetime=100;
}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(300,170, 50, 50 )
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-4;           
    banana.lifetime = 220;
    
    
    
    FoodGroup.add(banana);
  }
  
}
function obstacles(){
  if (frameCount%200 === 0){
    obstaclee=createSprite(400,330,20,20);
    obstaclee.addImage("obs",obstaceImage);
    obstaclee.velocityX=-6;
  obstaclee.scale=0.1;
    obstacleGroup.add(obstaclee);
  }
  }



