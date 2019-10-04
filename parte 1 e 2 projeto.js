var x = 100;
var y = 340;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5
  }
  
  if(keyIsDown(LEFT_ARROW)){
    x = x - 5
  }
  
  if(keyIsDown(UP_ARROW)){
    y = y - 5
  }
  
  if(keyIsDown(DOWN_ARROW)){
    y = y + 5
  }
  
  ellipse(x, y, 40, 40);
  square(320, 320, 40);
}