
var bg1;
var score=0

function preload()
{
	
	bg1=loadImage("trophy.png")
	
}

function setup() {
  createCanvas(1000, 900);
	body = new Body();
	system = new System();


	
}


function draw() {
  
  background(0);
  clues();
  body.display();

  textSize(20);
  fill("purple");
  text("SCORE : "+ score,500,40);
  text("IT  IS  THIRD  PUZZLE GAME/ OK SOLVE IT/ ",140,600)
  text("THIS QUESTION BASED ON THE GENERAL KNOWLEDGE",140,650)
  

  if(score===6){
    clear()
    background(bg1);
  }
  
  drawSprites();
 
}



