// bouncing ball using || (OR statement)
var x =0;
var speed = 10;
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(x, 200, 100, 100);
		if (x > width || x < 0) {
			speed = speed * -1;
			}
		// if (x < 0) {
		// 		speed =  20;
		// 	}
	x = x + speed;

// var x1 = random(0, windowWidth);
// var y1 = random(0, windowHeight);
// var x2 = random(0, windowWidth);
// var y2 = random(0, windowHeight);
//
// line(x1, y1, x2, y2);

}
