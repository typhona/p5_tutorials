// Random walk with vector addition.

let x;
let y;
let pos;
let perv;

function setup() {

	createCanvas(400, 400);
	background(51);
	x = random(100);
	y = random(100);
	pos = createVector(x, y)
	prev = pos.copy();
	console.log(pos);
	fill (78,44,104, 100);
	noStroke();
	for (splat = 0; splat < 5; splat++) {
		pos.x = pos.x + random(200);
		pos.y = pos.y + random(200)
	for (i = 0; i < 40; i++) {
		ellipse(pos.x, pos.y, random(40));
	 prev.set(pos);
		let step = p5.Vector.random2D();
		let r = random(10);
		if (r < 1) {
		step.mult(random(50));
	}	else {
		step.setMag(5);
	}
		 pos.add(step);
	}
}

}

function draw() {

// line(pos.x, pos.y, prev.x, prev.y);

}
