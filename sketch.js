var Car1,Car2,Bus,boy,Road,coin;
var Car1Img,Car2Img,BusImg,boyImg,RoadImg,gameImg,coinImg;
var edges;
var gamestate = "play";
var Car1Group,Car2Group,BusGroup,coinGroup;
var score = 0;
function preload(){
    
Car1Img = loadImage("Car1.png");
Car2Img = loadImage("Car2.png");
BusImg = loadImage("Bus.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
RoadImg = loadImage("Road.png");
gameImg = loadImage("gameOver.png");
coinImg = loadImage("coin.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight)
    Road = createSprite(width/2,300);
    Road.addImage("Road",RoadImg);
    Road.velocityY = 2;
    
    boy = createSprite(width/2,height-120,20,20);
    boy.addAnimation("boy",boyImg);
    boy.scale = 0.07;
   
    Car1Group = new Group();
    Car2Group = new Group();
    BusGroup = new Group();
    coinGroup = new Group();
}

function draw() {
 background("black");

if(gamestate === "play"){

    edges= createEdgeSprites();
    boy.collide(edges);
  
  if(keyDown("left_arrow")){
      boy.x -= 5;
  }
  if(keyDown("right_arrow")){
      boy.x += 5;
  }
  boy.setCollider("rectangle",0,0,boy.width,boy.height);

  if(Road.y > height ){
    Road.y = height/2;
  }
  
  bus();
  Car();
  Car3();
  Coin();

  if(Car1Group.isTouching(boy)){
    coinGroup.destroyEach();
    Car1Group.destroyEach();
    Car2Group.destroyEach();
    BusGroup.destroyEach();
    gamestate = "end" ;
}

 if(Car2Group.isTouching(boy)){
    coinGroup.destroyEach();
    Car1Group.destroyEach();
    Car2Group.destroyEach();
    BusGroup.destroyEach();
    gamestate = "end" ;
}

if(BusGroup.isTouching(boy)){
    coinGroup.destroyEach();
    Car1Group.destroyEach();
    Car2Group.destroyEach();
    BusGroup.destroyEach();
    gamestate = "end" ;
}

if(coinGroup.isTouching(boy)){
    coin.destroy();
    score += 20;
}

}

if(gamestate === "end"){
    textSize(24);
   fill("yellow");
    text("Game Over",width-230,300);
    Road.velocityY = 0;
    boy.addAnimation("boy",gameImg);
        boy.x = width-250;
        boy.y = height-300;
        boy.scale = 1;
}

 drawSprites();
 textSize(25);
 fill("yellow");
text("Score:"+score,width-100,30)


}

function bus(){
    if(frameCount % 200 == 0){
        Bus = createSprite(Math.round(random(100,width-500),40,10,10));
        Bus.addImage("bus",BusImg);
        Bus.scale = 0.3;
        Bus.velocityY = 5;
        Bus.lifetime = 140;
        BusGroup.add(Bus);
    }
}


function Car(){
    if(frameCount % 320 == 0){
        Car1 = createSprite(Math.round(random(100,width-500),40,10,10));
        Car1.addImage("car1",Car1Img);
        Car1.scale = 0.1;
        Car1.velocityY = 5;
        Car1.lifetime = 140;
        Car1Group.add(Car1);
    }
}

function Car3(){
    if(frameCount % 410 == 0){
        Car2 = createSprite(Math.round(random(100,width-500),40,10,10));
        Car2.addImage("car2",Car2Img);
        Car2.scale = 0.1;
        Car2.velocityY = 5;
        Car2.lifetime = 140;
        Car2Group.add(Car2);
    }
}

function Coin(){
    if(frameCount % 530 == 0){
        coin = createSprite(Math.round(random(100,width-500),40,10,10));
        coin.addImage("ruppe",coinImg);
        coin.scale = 0.5;
        coin.velocityY = 5;
        coin.lifetime = 140;
        coinGroup.add(coin);

    }
}
