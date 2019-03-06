let firework = [];
let gravity;
function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB);
	gravity = createVector(0, .2);
	stroke(255);
	strokeWeight(4);
	background(0);
}

function draw() {
	colorMode(RGB);
	background(0, 25);
	if (random(1) < .03) {
	firework.push(new Firework());
}
	for (let i = firework.length-1; i >= 0 ; i--) {
		firework[i].update();
		firework[i].show();
		if(firework[i].done()) {
			firework.splice(i, 1);
		}
	}
}
