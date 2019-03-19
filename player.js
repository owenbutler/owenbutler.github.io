class Player {
  constructor() {
    this.position = p5.Vector.random2D();
  }

  update() {
    this.position.x = mouseX;
    this.position.y = mouseY;
  }

  draw() {
    fill(222, 93,163);
    noStroke();
    ellipse(this.position.x, this.position.y, 20, 20);
  }
}
