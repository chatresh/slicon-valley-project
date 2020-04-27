var player , playerimg;
var backgroundimg;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7;
var bg;
var coins = 0 ; 
function preload(){
backgroundimg = loadImage("images/grass.jpg");
playerimg = loadImage("images/player.jpg")
coinimg = loadImage("images/coins.gif");
dog1img = loadImage("images/dog1.jpg");
dog2img = loadImage("images/dog2.jpg");
dog3img = loadImage("images/dog3.jpg");
dog4img = loadImage("images/dog4.jpg");
dog5img = loadImage("images/dog5.jpg");
foodimg = loadImage("images/food.jpg");
man1img = loadImage("images/man1.jpg");
man2img = loadImage("images/man2.jpg");
man3img = loadImage("images/man3.jpg");
man4img = loadImage("images/man4.jpg");
}

function setup() {
  createCanvas(displayWidth-15 ,displayHeight-160);

//creating playable character for the game
 player =  createSprite(1130,550, 40, 40);
 player.addImage("plaimg",playerimg);
 player.setCollider("circle",10,10)
 player.scale = 0.22;



//creating a maze using sprites function
maze1 = createSprite(800,100,800,10);
maze2 = createSprite(1200,350,10,500);
maze3 = createSprite(790,580,780,10);
maze4 = createSprite(400,370,10,420);
maze5 = createSprite(1080,130,10,70);
maze6 = createSprite(1030,190,10,80);
maze7 = createSprite(1110,230,170,10);

maze1.shapeColor = "black";
maze2.shapeColor = "black";
maze3.shapeColor = "black";
maze4.shapeColor = "black";
maze5.shapeColor = "black";
maze6.shapeColor = "black";
maze7.shapeColor = "black";

middle1 = createSprite(500,550,10,50);
middle2 = createSprite(600,550,10,50);
middle3 = createSprite(655,520,120,10);
middle4 = createSprite(900,540,10,80);
middle5 = createSprite(550,185,10,180);
middle6 = createSprite(470,325,140,10);
middle7 = createSprite(535,345,10,50);
middle8 = createSprite(460,430,10,50);
middle9 = createSprite(530,460,150,10);

middle1.shapeColor = "black";
middle2.shapeColor = "black";
middle3.shapeColor = "black";
middle4.shapeColor = "black";
middle5.shapeColor = "black";
middle6.shapeColor = "black";
middle7.shapeColor = "black";
middle8.shapeColor = "black";
middle9.shapeColor = "black";

outmaze = createSprite(600,430,10,50);
outmaze1 = createSprite(680,410,150,10);
outmaze2 = createSprite(750,370,10,80);
outmaze3 = createSprite(680,330,10,160);
outmaze4 = createSprite(620,250,350,10);
outmaze5 = createSprite(450,220,10,70);
outmaze6 = createSprite(470,180,50,10);
outmaze7 = createSprite(800,340,10,200);
outmaze8 = createSprite(855,440,120,10);
outmaze9 = createSprite(910,390,10,100);
outmaze10 = createSprite(750,170,220,10);
outmaze11 = createSprite(860,230,10,130);
outmaze12 = createSprite(970,290,220,10);
outmaze13 = createSprite(1075,435,10,280);
outmaze14 = createSprite(1025,350,100,10);
outmaze15 = createSprite(980,380,10,60);

outmaze.shapeColor = "black";
outmaze1.shapeColor = "black";
outmaze2.shapeColor = "black";
outmaze3.shapeColor = "black";
outmaze4.shapeColor = "black";
outmaze5.shapeColor = "black";
outmaze6.shapeColor = "black";
outmaze7.shapeColor = "black";
outmaze8.shapeColor = "black";
outmaze9.shapeColor = "black";
outmaze10.shapeColor = "black";
outmaze11.shapeColor = "black";
outmaze12.shapeColor = "black";
outmaze13.shapeColor = "black";
outmaze14.shapeColor = "black";
outmaze15.shapeColor = "black";
 
 // coins for buying food
  coin1 = createSprite(500,210,20,20);
  coin2 = createSprite(720,550,20,20);
  coin3 = createSprite(720,380,20,20);
  coin4 = createSprite(1005,375,20,20);
  coin5 = createSprite(1060,185,20,20);
 
  coin1.addImage(coinimg);
  coin1.scale = 0.5;

  coin2.addImage(coinimg);
  coin2.scale = 0.5;
   
  coin3.addImage(coinimg);
  coin3.scale = 0.5;

  coin4.addImage(coinimg);
  coin4.scale = 0.5;

  coin5.addImage(coinimg);
  coin5.scale = 0.5;
 
 //creating obstacles in the game
 man1 = createSprite(600,200,20,20); 
 man2 = createSprite(790,540,20,20);
 man3 = createSprite(500,300,20,20);
 man4 = createSprite(950,220,20,20);

 man1.addImage(man1img);
 man1.scale = 0.3;

man3.addImage(man3img);
man3.scale = 0.3;

man4.addImage(man4img);
man4.scale = 0.3;

man2.addImage(man2img);
man2.scale = 0.3;

man1.velocityX = 2;
man1.velocityY = 2;

man2.velocityX = 2;
man2.velocityY = 2;

man3.velocityX = 2;
man3.velocityY = 2;

man4.velocityX = 2;
man4.velocityY = 2;
//creating sprites and adding images for the dogs 
dog1 = createSprite(500,50,20,20);
dog1.addImage(dog1img);
dog1.scale = 0.5;

dog2 = createSprite(650,50,20,20);
dog2.addImage(dog2img);
dog2.scale = 0.5;

dog3 = createSprite(800,50,20,20);
dog3.addImage(dog3img);
dog3.scale = 0.5;

dog4 = createSprite(950,50,20,20);
dog4.addImage(dog4img);
dog4.scale = 0.4;

dog5 = createSprite(1100,50,20,20);
dog5.addImage(dog5img);
dog5.scale = 0.35;
   }

function draw() {
 //set background
  background(0,255,255);

//giving feedback to game
 textSize(30);
  fill("green");
  text("Coins : " + coins , 140,100);

 //giving player to move with arrow keys
  if(keyDown(UP_ARROW)){
    setDir(0,-4);
  } else 

  if(keyDown(RIGHT_ARROW)){
    setDir(4,0);
  }else 

  if(keyDown(LEFT_ARROW)){
     setDir(-4,0);
  }else
  if(keyDown(DOWN_ARROW)){
    setDir(0,4);
  }
 

  // colliding maze with all mans and player
  player.bounceOff(maze1);
   player.bounceOff(maze2);
   player.bounceOff(maze3);
   player.bounceOff(maze4);
   player.bounceOff(maze5);
   player.bounceOff(maze6);
   player.bounceOff(maze7);

   player.bounceOff(middle1);
   player.bounceOff(middle2);
   player.bounceOff(middle3);
   player.bounceOff(middle4);
   player.bounceOff(middle5);
   player.bounceOff(middle6);
   player.bounceOff(middle7);
   player.bounceOff(middle8);
   player.bounceOff(middle9);

   player.bounceOff(outmaze);
   player.bounceOff(outmaze1);
   player.bounceOff(outmaze2);   
   player.bounceOff(outmaze3);
   player.bounceOff(outmaze4);
   player.bounceOff(outmaze5);
   player.bounceOff(outmaze6);
   player.bounceOff(outmaze7);
   player.bounceOff(outmaze8);
   player.bounceOff(outmaze9);
   player.bounceOff(outmaze10);
   player.bounceOff(outmaze11);
   player.bounceOff(outmaze12);
   player.bounceOff(outmaze13);
   player.bounceOff(outmaze14);
   player.bounceOff(outmaze15);
 
   man1.bounceOff(maze1);
   man1.bounceOff(maze2);
   man1.bounceOff(maze3);
   man1.bounceOff(maze4);
   man1.bounceOff(maze5);
   man1.bounceOff(maze6);
   man1.bounceOff(maze7);

   man1.bounceOff(middle1);
   man1.bounceOff(middle2);
   man1.bounceOff(middle3);
   man1.bounceOff(middle4);
   man1.bounceOff(middle5);
   man1.bounceOff(middle6);
   man1.bounceOff(middle7);
   man1.bounceOff(middle8);
   man1.bounceOff(middle9);

   man1.bounceOff(outmaze);
   man1.bounceOff(outmaze1);
   man1.bounceOff(outmaze2);   
   man1.bounceOff(outmaze3);
   man1.bounceOff(outmaze4);
   man1.bounceOff(outmaze5);
   man1.bounceOff(outmaze6);
   man1.bounceOff(outmaze7);
   man1.bounceOff(outmaze8);
   man1.bounceOff(outmaze9);
   man1.bounceOff(outmaze10);
   man1.bounceOff(outmaze11);
   man1.bounceOff(outmaze12);
   man1.bounceOff(outmaze13);
   man1.bounceOff(outmaze14);
   man1.bounceOff(outmaze15);
  

   man2.bounceOff(maze1);
   man2.bounceOff(maze2);
   man2.bounceOff(maze3);
   man2.bounceOff(maze4);
   man2.bounceOff(maze5);
   man2.bounceOff(maze6);
   man2.bounceOff(maze7);

   man2.bounceOff(middle1);
   man2.bounceOff(middle2);
   man2.bounceOff(middle3);
   man2.bounceOff(middle4);
   man2.bounceOff(middle5);
   man2.bounceOff(middle6);
   man2.bounceOff(middle7);
   man2.bounceOff(middle8);
   man2.bounceOff(middle9);

   man2.bounceOff(outmaze);
   man2.bounceOff(outmaze1);
   man2.bounceOff(outmaze2);   
   man2.bounceOff(outmaze3);
   man2.bounceOff(outmaze4);
   man2.bounceOff(outmaze5);
   man2.bounceOff(outmaze6);
   man2.bounceOff(outmaze7);
   man2.bounceOff(outmaze8);
   man2.bounceOff(outmaze9);
   man2.bounceOff(outmaze10);
   man2.bounceOff(outmaze11);
   man2.bounceOff(outmaze12);
   man2.bounceOff(outmaze13);
   man2.bounceOff(outmaze14);
   man2.bounceOff(outmaze15);
 

  man3.bounceOff(maze1);
   man3.bounceOff(maze2);
   man3.bounceOff(maze3);
   man3.bounceOff(maze4);
   man3.bounceOff(maze5);
   man3.bounceOff(maze6);
   man3.bounceOff(maze7);

   man3.bounceOff(middle1);
   man3.bounceOff(middle2);
   man3.bounceOff(middle3);
   man3.bounceOff(middle4);
   man3.bounceOff(middle5);
   man3.bounceOff(middle6);
   man3.bounceOff(middle7);
   man3.bounceOff(middle8);
   man3.bounceOff(middle9);

   man3.bounceOff(outmaze);
   man3.bounceOff(outmaze1);
   man3.bounceOff(outmaze2);   
   man3.bounceOff(outmaze3);
   man3.bounceOff(outmaze4);
   man3.bounceOff(outmaze5);
   man3.bounceOff(outmaze6);
   man3.bounceOff(outmaze7);
   man3.bounceOff(outmaze8);
   man3.bounceOff(outmaze9);
   man3.bounceOff(outmaze10);
   man3.bounceOff(outmaze11);
   man3.bounceOff(outmaze12);
   man3.bounceOff(outmaze13);
   man3.bounceOff(outmaze14);
   man3.bounceOff(outmaze15);
 
  man4.bounceOff(maze1);
   man4.bounceOff(maze2);
   man4.bounceOff(maze3);
   man4.bounceOff(maze4);
   man4.bounceOff(maze5);
   man4.bounceOff(maze6);
   man4.bounceOff(maze7);

   man4.bounceOff(middle1);
   man4.bounceOff(middle2);
   man4.bounceOff(middle3);
   man4.bounceOff(middle4);
   man4.bounceOff(middle5);
   man4.bounceOff(middle6);
   man4.bounceOff(middle7);
   man4.bounceOff(middle8);
   man4.bounceOff(middle9);

   man4.bounceOff(outmaze);
   man4.bounceOff(outmaze1);
   man4.bounceOff(outmaze2);   
   man4.bounceOff(outmaze3);
   man4.bounceOff(outmaze4);
   man4.bounceOff(outmaze5);
   man4.bounceOff(outmaze6);
   man4.bounceOff(outmaze7);
   man4.bounceOff(outmaze8);
   man4.bounceOff(outmaze9);
   man4.bounceOff(outmaze10);
   man4.bounceOff(outmaze11);
   man4.bounceOff(outmaze12);
   man4.bounceOff(outmaze13);
   man4.bounceOff(outmaze14);
   man4.bounceOff(outmaze15);
  
  

//collecting coins and increasing score
  if(player.collide(coin1)){
    coin1.destroy();
    coins = coins + 10;
  }

  if(player.collide(coin2)){
    coin2.destroy();
      coins = coins + 10;
  }
  
  if(player.collide(coin3)){
    coin3.destroy();
    coins = coins + 10;
  }

  if(player.collide(coin4)){
    coin4.destroy();
    coins = coins + 10;
  }

  if(player.collide(coin5)){
    coin5.destroy();
    coins = coins + 10;  
  }

//creating Button when collected all coins
  if(coins===50){
  var feeddog = createButton("Feed  The  Dog");
  feeddog.position(1225,100);
  man1.velocityX = 0;
  man1.velocityY = 0;
  man2.velocityX = 0;
  man2.velocityY = 0;
  man3.velocityX = 0;
  man3.velocityY = 0;
  man4.velocityX = 0;
  man4.velocityY = 0;

  feeddog.mousePressed(()=>{
  var food = createSprite(580,50,20,20);
  food.addImage(foodimg);
  food.scale = 0.5;

 dog1.destroy();
})
  }
  if(man1.collide(player)||man2.collide(player)||man3.collide(player)||man4.collide(player)){
  
  player.destroy();
  man1.velocityX = 0;
  man1.velocityY = 0;
  man2.velocityX = 0;
  man2.velocityY = 0;
  man3.velocityX = 0;
  man3.velocityY = 0;
  man4.velocityX = 0;
  man4.velocityY = 0;

  var lfb = createElement('h2'); 
  lfb.html("G A M E  O V E R !!");
  lfb.position(650,200);
 
  }
 
  

 
  
  //drawing the sprites
  drawSprites();
}
//function for set direction to the player
function setDir(x,y){
   player.x = player.x + x;
   player.y = player.y + y;
}
