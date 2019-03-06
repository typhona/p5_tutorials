// fill screen with non overlapping circles

let circles = [];

function setup() {
	createCanvas(640, 360);

	while (circles.length < 100) {
	// for (let i =0; i < 25; i++) {

		let circle = {
			x: random(width),
			y: random(height),
			r: random(12, 26)
		}

		let overlapping = false;

		let protection =  0;

		for (let j =0; j < circles.length; j++){
			let other = circles[j];
			let d = dist(circle.x, circle.y, other.x, other.y);
			if (d < circle.r + other.r) {
				// THEY ARE OVERLAPPING
				overlapping = true;
				break;
			}
		}
		if (!overlapping) {
		circles.push(circle);
		}

		protection++;
		if (protection > 10000) {
			break;
		}
 		// let x = random(width);
		// let y = random(height);
		// let r = 32;

for (let i = 0; i < circles.length; i++) {
		fill(255, 0, 150, 10)
		noStroke();
		ellipse(circles[i].x, circles[i].y, circles[i].r *2, circles[i].r*2);
		}
	}

}

function draw() {


}
