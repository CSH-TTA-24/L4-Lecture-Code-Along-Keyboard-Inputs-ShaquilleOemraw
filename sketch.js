let XPos = 250
let YPos = 250
function setup() {
  createCanvas(500, 500);
  noStroke();

  rectMode(CENTER);
}

function draw() {
  background(0);
  fill('blue')
  rect(XPos, YPos, 30, 30)

  if(keyIsDown(RIGHT_ARROW)){
    XPos +=3
  }
  if(keyIsDown(LEFT_ARROW)){
    XPos -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    YPos +=3
  }
  if(keyIsDown(UP_ARROW)){
    YPos -=3
  }
}
