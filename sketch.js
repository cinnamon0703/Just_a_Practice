class Circle {
  constructor() {
    this.pos = createVector(random(width), random(height)); 
    this.vel = createVector(random(-10, 10), random(-10, 10)); 
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.pos.add(this.vel);

    if (this.pos.x - 25 > width) {
      this.pos.x = -25;
    } else if (this.pos.x + 25 < 0) {
      this.pos.x = width + 25;
    }

    if (this.pos.y - 25 > height) {
      this.pos.y = -25;
    } else if (this.pos.y + 25 < 0) {
      this.pos.y = height + 25;
    }
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 50);
  }

  randomVel() {
    this.vel = createVector(random(-10, 10), random(-10, 10)); 
  }

  randomColor() {
    this.color = color(random(255), random(255), random(255));
  }
}

let circle;
let circles = []; 
let newCircle;

function setup() {
  createCanvas(1200, 1200);
  circle = new Circle();
}

function draw() {
  background(220);
  circle.update();
  circle.display();

 
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].display();
  }
}

function mouseClicked() {
  
  circle.randomVel();
  circle.randomColor();
  
   let amount = random(1, 6);
  for (let i = 0; i < amount; i++) {
    newCircle = new Circle();
    newCircle.randomVel();
    newCircle.randomColor();
    circles.push(newCircle);
  }

 
  for (let i = 0; i < circles.length; i++) {
    circles[i].randomVel();
    circles[i].randomColor();
  }
   
  
}
