let shapes = [];
let points = [[-3, 5], [3, 7], [1, 5],[2,4],[4,3],[5,2],[6,2],[8,4],[8,-1],[6,0],[0,-3],[2,-6],[-2,-3],[-4,-2],[-5,-1],[-6,1],[-6,2]];

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  for (let i = 0; i < 10; i++) {
    shapes.push(new MovingShape(random(width), random(height), random(50, 200)));
  }
}

function draw() {  
  background("#faedcd");  
  for (let shape of shapes) {
    shape.move();
    shape.display();
  }
}

class MovingShape {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
    fill("#d6ccc2");
    stroke("#d4a373");
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < points.length; i++) {
      let x = map(points[i][0], -10, 10, this.x - this.size / 2, this.x + this.size / 2);
      let y = map(points[i][1], -10, 10, this.y - this.size / 2, this.y + this.size / 2);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
