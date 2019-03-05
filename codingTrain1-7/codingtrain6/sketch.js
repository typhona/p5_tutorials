//nested loops to make grid

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(255);

// for loops use all 3 in one line
for (var x = 0; x <= mouseX; x += 50) {
 	for (var y = 0; y <= height; y += 50) {

	fill(random(255),0,random(255));
	ellipse(x, y, 25, 25);
		 }
	}
}
