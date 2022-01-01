var dog, dogHappy;
var food, foodstock;
var changinggameState, readinggameState;
var bedroom, garden, washroom;

function preload(){
  dogImg=loadImage("images/Dog.png");
  dogHappy=loadImage("images/Happy.png");
  bedroom=loadImage("images/Bed Room.png");
  garden=loadImage("images/Garden.png");
  sadDog=loadImage("images/deadDog.png")

}

function setup() {
	database= firebase.database();
  createCanvas(800, 700);
  dog = createSprite(250,250,10,10);
  dog = addImage("dogImg",dogImg);

  dog.scale=0.15;
 

  foodStock=database.ref('Food');
 foodStock.on("value",readStock);
 textSize(20); 
}
function draw() {  
  if(keyDown(UP_ARROW)){
     writeStock(food);
     dog.addImage(dogHappy);
 }  
  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
   }
 
   currentTime=hour();
   if(currentTime==(lastFed+1)){
     update("Playing");
     foodObj.garden();
   }else if(currentTime==(lastFed+2)){
     update("Sleeping");
     foodObj.bedroom();
   }else{
     update("Hungry");
     foodObj.display();
   }
 drawSprites();
 }
 
 function update(state){
   database.ref('/').update({  gameState:state
   });
 }
 function bedroom(){
   background(bedroom,550,500);
 }
 
 function garden(){
   background(garden,550,500);
 }
 
 function washroom(){
   background(washroom,550,500);
 }
 
     
 