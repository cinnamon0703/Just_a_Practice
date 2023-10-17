let ball, ball2;

function setup() {
  createCanvas(400, 400);

  ball = new Particle();
  ball2 = new Particle();
  ball2.w = 10;
  ball2.pos.x = 50;
}


function draw() {
  background(220);

  // let gravity = createVector(0, 0.3);
  // ball.addForce(gravity);

  // if(mouseIsPressed) {
  // let wind = createVector(0.05, 0);
  // ball.addForce(wind);
  // } 
  // else {
  //   let reversewind = createVector(-0.01, 0);
  //   ball.addForce(reversewind);
  // } 

  ball.update();
  ball.show();
  ball2.update();
  ball2.show();
}

function mouseClicked() {
  ball.click(mouseX, mouseY);
  ball2.click(mouseX, mouseY);
//   let mp = createVector(mouseX, mouseY);
//   //ball.pos
 
//   let shoot =  p5.Vector.sub(ball.pos, mp);

//   if (shoot.mag() < ball.r) {
//   ball.addForce(shoot);
//  }
}


