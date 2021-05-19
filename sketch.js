var tower,towerImage;
var door,doorImg,doorsGroup;
var climber,climberImg,climbersGroup;
var ghost,ghostImg;
var invisibleBlock,invisibleBlockGroup;

function preload(){
  towerImage = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png")
}
function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImage);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;
}
function draw(){
  background(0);
  if(tower.y>400){
     tower.y = 300;
  }
  spawnDoors();
  
  if(keyDown("left")){
    ghost.x = ghost.x-3;
    
  }
  if(keyDown("right")){
    ghost.x = ghost.x+3;   
  }
  
  if(keyDown("space")){
    ghost.velocityY = -5;   
  }
  
  ghost.velocityY = ghost.velocityY+0.8;
  
  if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
  }
  
  drawSprites();
}

function spawnDoors(){
  if(frameCount % 240 === 0){
     door = createSprite(200,-50);
     door.addImage(doorImg);
    
     climber = createSprite(200,10);
     climber.addImage(climberImg);
    
     invisibleBlock = createSprite(200,15);
     invisibleBlock.width = climber.width;
     invisibleBlock.height = 2;
     
     door.x = Math.round(random(120,400));
     door.velocityY = 1;      
     
     ghost.depth = door.depth;
     ghost.depth +=1;            
     
     climber.x = door.x;
     climber.velocityY = 1;
    
     invisibleBlock.x = door.x;
     invisibleBlock.velocityY =1;
    
     door.lifetime = 800;
     climber.lifetime = 800;
    
     doorsGroup.add(door);
     climbersGroup.add(climber);
     invisibleBlockGroup.add(invisibleBlock);
     invisibleBlock.debug = true;
  }
}
