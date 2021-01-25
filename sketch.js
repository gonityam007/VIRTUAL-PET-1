//Create variables here
var dog,happyDog,dImg,hImg;
var foodS,foodStock;
var database;
function preload()
{
  //load images here
  dImg=loadImage("images/dogImg.png");
  hImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 800);
  dog=createSprite(400,400);
  dog.addImage("d1",dImg);
  dog.addImage("d2",hImg);
  dog.scale=0.2;
database=firebase.database();
foodStock=database.ref('Food')
 foodStock.on("value",readStock)
}


function draw() {  
background(46,189,37);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.changeImage("d2",hImg);
}
  drawSprites();
  //add styles here
textSize(20);
fill("red");
text("Note:Press up Arrow to feed Drago Milk!",250,200);
textSize(20);
fill("red");
text("FOOD: "+foodS,280,280);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

