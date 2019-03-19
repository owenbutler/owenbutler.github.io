
function setup() {
  createCanvas(1024, 576);
}

let player = new Player();

function draw() {

  fill(255, 184, 107, 50);
  rect(0, 0, width, height);

  player.update();
  player.draw();
}

// .rgba-primary-0 { color: rgba(255,184,107,1) }	/* Main Primary color */
// .rgba-primary-1 { color: rgba(255,222,186,1) }
// .rgba-primary-2 { color: rgba(255,201,143,1) }
// .rgba-primary-3 { color: rgba(255,169, 76,1) }
// .rgba-primary-4 { color: rgba(233,139, 37,1) }
// 
// .rgba-secondary-1-0 { color: rgba(194,243,102,1) }	/* Main Secondary color (1) */
// .rgba-secondary-1-1 { color: rgba(228,252,184,1) }
// .rgba-secondary-1-2 { color: rgba(210,248,139,1) }
// .rgba-secondary-1-3 { color: rgba(180,238, 71,1) }
// .rgba-secondary-1-4 { color: rgba(154,217, 34,1) }
// 
// .rgba-secondary-2-0 { color: rgba(222, 93,163,1) }	/* Main Secondary color (2) */
// .rgba-secondary-2-1 { color: rgba(246,179,216,1) }
// .rgba-secondary-2-2 { color: rgba(235,131,188,1) }
// .rgba-secondary-2-3 { color: rgba(208, 62,141,1) }
// .rgba-secondary-2-4 { color: rgba(189, 30,117,1) }
// 
// .rgba-complement-0 { color: rgba( 84,161,191,1) }	/* Main Complement color */
// .rgba-complement-1 { color: rgba(176,221,238,1) }
// .rgba-complement-2 { color: rgba(125,191,216,1) }
// .rgba-complement-3 { color: rgba( 53,132,163,1) }
// .rgba-complement-4 { color: rgba( 28,114,146,1) }
