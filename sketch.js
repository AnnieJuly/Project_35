var dog, happydog;
var food, foodstock;

function preload()
{
	dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
	database= firebase.database();
  createCanvas(800, 700);
  dog = createSprite(250,250,10,10);
  var dogpos=database.ref("dog/position")
    dogpos.on("value", readPos, showerror)
  foodstock = createSprite(300,300,10,10);
}


function draw() {  
 if(keyDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogHappy);
}
  drawSprites();
  //add styles here

}

    

function changePosition(x,y){
    database.ref('ball/position').set({ 'x': position.x + x , 'y': position.y + y })
}
function readPos(data)
{ position = data.val();
     console.log(position.x);
      ball.x = position.x; ball.y = position.y; 
    }

function showerror(){
    console.log("Error in writing to the database");
}




