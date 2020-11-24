var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var player, form,game;
var player1,player2, player2_img;
var players;
var virus,mask;
var virusGroup,maskGroup;
var virus_img, mask_img;
var virus2_img, mask2_img;
var player_img;
var score;
//var score2 = 0;
var info1_img;
var info2_img;
var info23img;
//var scores;
function preload(){
  back_img = loadImage("images/back.png");
  player_img = loadImage("images/female.png");
  player2_img = loadImage("images/safe.png");
  virus_img = loadImage("images/virus.png");
  mask_img = loadImage("images/mask.png");
  virus2_img = loadImage("images/virus2.png");
  mask2_img = loadImage("images/hand.png");
  info1_img = loadImage("images/info1.png");
  info2_img = loadImage("images/info2.png");
  info3_img = loadImage("images/info3.png");
  virusGroup = new Group();
  maskGroup = new Group();
}
function setup() {
  createCanvas(displayWidth, displayHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  player1 = createSprite(200,displayHeight);
  player1.addImage(player_img);
  player1.scale = .2;
  player1.debug = true;
  player1.setCollider("rectangle",0,0,player1.width,player1.height);
  

  player2 = createSprite(800,displayHeight);
  player2.addImage(player2_img);
  player2.scale = .2;
  
  //player2.debug = true;
  player2.setCollider("rectangle",0,0,player2.width,player2.height);

  players=[player1,player2];
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2 && gameState === 1) {
     game.update(1);
   }
   
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   } 
   
   if (gameState === 3) {
    
    game.info();
  } 
  if (gameState === 4) {
    
    game.info2();
  } 

  if (gameState === 5) {
    
    game.info3();
  } 

  if (gameState === 6) {
    
    game.numplr();
  } 

  if (gameState === 7) {
    
    game.oneplr();
  }
  
  if (gameState === 9) {
    
    game.onecool();
  }
  if (gameState === 10) {
    
    game.onesafe();
  }
  if (gameState === 11) {
    
    game.twosafe();
  }
  if (gameState === 12) {
    
    game.twocool();
  }
  if (gameState === 13) {
    
    game.play1s();
    spawnVirus();
   spawnMask();
  }
  if (gameState === 14) {
    drawSprites();
   
    game.play1c();
    spawnVirus();
   spawnMask();
  }


   if(gameState === 1){
   drawSprites();
   fill("black");
   textSize(20);
   game.play();
   spawnVirus();
   spawnMask();
  }
}
function spawnVirus(){
  if (frameCount % 20 === 0 && gameState === 1 ||frameCount % 20 === 0 && gameState === 14||frameCount % 20 === 0 && gameState === 13) {
    virus = createSprite(random(100, displayWidth), 0, 100, 100);
    virus.velocityY = 6;
    virus.scale = .03;
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: virus.addImage("virus",virus_img);
        break;
        case 2: virus.addImage("virus",virus2_img);
        break;
    }
    virusGroup.add(virus);
    virus.lifetime = displayHeight/virus.velocityY;
    
}
}

function spawnMask(){
  if (frameCount % 20 === 0 && gameState === 1||frameCount % 20 === 0 && gameState === 13||frameCount % 20 === 0 && gameState === 14) {
    mask = createSprite(random(100, displayWidth), 0, 100, 100);
    mask.velocityY = 6;
    mask.scale = .05;
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: mask.addImage("mask", mask_img);
        break;
        case 2: mask.addImage("mask", mask2_img);
        break;
    }
    maskGroup.add(mask);
    mask.lifetime = displayHeight/mask.velocityY;
    
}
}