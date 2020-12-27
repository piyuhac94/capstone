var background1;
var backgroundImg;
var hero;
var herorunning;
var herodie;
var ivg;
var dinoGroup;
var flyGroup;
var gs;
var goldgroup;
var silvergroup;
var bronezgroup;
var score = 0;
var die;
var jump;




const PLAY = "play";
const END = "end";


function preload() {
  backgroundImg = loadImage("backroung.png");
  herorunning = loadAnimation("alien1.png");
  herodie =loadAnimation("alien2.png");
 jump =  loadSound("maro-jump-sound-effect_1.mp3");
  die = loadSound("smb_gameover.wav");


}



function setup() {

  createCanvas(570, 400);



  background1 = createSprite(421, 200)
  background1.scale = 1.5
  background1.velocityX = -3
  background1.addImage(backgroundImg);



  ivg = createSprite(30, 385, 80, 10)

  hero = createSprite(50, 360)
  hero.addAnimation("alien1.png", herorunning);
  hero.scale = 0.5

  dinoGroup = new Group();
  flyGroup = new Group();
  goldgroup = new Group();
  silvergroup = new Group();
  bronezgroup = new Group();




  gs = PLAY





}


function draw() {

  background("lightblue")

  if (gs == PLAY) {


   
    text("SCORE  " + score, 500, 50)



    hero.collide(ivg);

    ivg.visible = false;

    if (background1.x < 4) {
      background1.x = 421
    }

    if (keyDown("space") && hero.y > 156) {
      hero.velocityY = -12;
      jump.play();
    }

    if (hero.isTouching(dinoGroup)) {
      gs = END;
      die.play();
       hero.changeAnimation("alien2.png",herodie);
    }
    
    if (hero.isTouching(flyGroup)) {
      gs = END;
      die.play();
       hero.changeAnimation("alien2.png",herodie);
    }
    
    
    if (hero.isTouching(goldgroup)){
      score ++
      flyGroup.destroyEach();
      
    }

     if (hero.isTouching(silvergroup)){
      score ++
       flyGroup.destroyEach();
    }

     if (hero.isTouching(bronezgroup)){
      score ++
       flyGroup.destroyEach();
    }

    hero.velocityY = hero.velocityY + 0.8;

    createdino();

    createdfly();

    coingold();

    coinsilver();

    bronzecoin();

  } else if (gs == END) {

    hero.changeAnimation("alien2.png",herodie);
    goldgroup.destroyEach();
    silvergroup.destroyEach();
    bronezgroup.destroyEach();
    dinoGroup.destroyEach();
    flyGroup.destroyEach();
    background1.velocityX = 0

  }





  console.log(hero.y)



  drawSprites();
  
   text("SCORE  " + score, 500, 50)

}


function createdino() {
  if (frameCount % 100 == 0) {
    var rand = Math.round(random(1, 6))
    var dino = createSprite(600, 343);
    var dinoImg
    dino.velocityX = -5;
    dino.scale = 0.2
    dino.lifetime = 189
    dinoGroup.add(dino);
    dinoImg = loadImage("dinosour.png");
    dino.addImage(dinoImg);

  }
}

function createdfly() {
  if (frameCount % 130 == 0) {
    var rand = Math.round(random(1, 100))
    var fly = createSprite(600, 130);
    var flyImg
    fly.velocityX = -5;
    fly.scale = 0.3
    fly.lifetime = 189
    flyGroup.add(fly);
    flyImg = loadImage("download (1).png");
    fly.addImage(flyImg);

  }
}

function coingold() {
  if (frameCount % 60 == 0) {
    var rand = Math.round(random(500, 100))
    var gold = createSprite(rand, rand);
    var goldImg
    gold.velocityX = -5;
    gold.scale = 0.5
    goldgroup.add(gold);
    goldImg = loadImage("coin gold 1.png");
    gold.addImage(goldImg);

  }
}

function coinsilver() {
  if (frameCount % 40 == 0) {
    var rand = Math.round(random(400, 100))
    var silver = createSprite(rand, rand);
    var silverImg
    silver.velocityX = -5;
    silver.scale = 0.5
    silvergroup.add(silver);
    silverImg = loadImage("coin silver.png");
    silver.addImage(silverImg);

  }
}

function bronzecoin() {
  if (frameCount % 40 == 0) {
    var rand = Math.round(random(600, 100))
    var bronze = createSprite(rand, rand);
    var bronzeImg
    bronze.velocityX = -5;
    bronze.scale = 0.5
    bronezgroup.add(bronze);
    bronzeImg = loadImage("coin bronze.png");
    bronze.addImage(bronzeImg);

  }
}