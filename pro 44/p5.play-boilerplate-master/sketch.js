var bg, bgImg;
var x, xImg;
var o, oImg;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function preload(){
 bgImg = loadImage("background.png");
 xImg = loadImage("X.png");
 oImg = loadImage("O.png");

}

function setup() {
  createCanvas(800,800);

   x = createSprite(400, 400, 100, 100);
   x.addImage(xImg);
   x.scale = 0.7;

  b1 = createSprite(150, 150, 200, 200);
  b2 = createSprite(400, 150, 200, 200);
  b3 = createSprite(650, 150, 200, 200);

  b4 = createSprite(150, 400, 200, 200);
  b5 = createSprite(400, 400, 200, 200);
  b6 = createSprite(650, 400, 200, 200);

  b7 = createSprite(150, 650, 200, 200);
  b8 = createSprite(400, 650, 200, 200);
  b9 = createSprite(650, 650, 200, 200);

  b1.visible = false;
  b2.visible = false;
  b3.visible = false;
  b4.visible = false;
  b5.visible = false;
  b6.visible = false;
  b7.visible = false;
  b8.visible = false;
  b9.visible = false;
    
}

function draw() {
  background(200); 

  fill("black");
  text(mouseX + " , " + mouseY, mouseX, mouseY);
  
  stroke("white");
  strokeWeight(15);
  line(30, 30, 30, 770)
  line(275, 30, 275, 770);
  line(527, 30, 527, 770);
  line(770, 30, 770, 770);

  line(30, 30, 770, 30);
  line(30, 275, 770, 275);
  line(30, 527, 770, 527);
  line(30, 770, 770, 770);


  drawSprites();
}