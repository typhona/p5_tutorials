// loops for repetitive tasks
// using while and for while is boolean
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(255);

// initiallize variable
	var x = 0;
// conditional statement that loops
	while (x <= width) {
		fill (0, 200, 255)
		ellipse(x, 200, 25, 25);
// incrimentation
		x = x + 50;
	}
// for loops use all 3 in one line
for (var x = 0; x <= width; x += 50) {
	fill(255,0,200);
	ellipse(x, 300, 25, 25);
	}
}
