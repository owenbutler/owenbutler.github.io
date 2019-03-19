
function setup() {
  createCanvas(1024, 576);
  noCursor();
}

let player = new Player();

function draw() {

  fill(255, 184, 107, 50);
  rect(0, 0, width, height);

  player.update();
  player.draw();
}
