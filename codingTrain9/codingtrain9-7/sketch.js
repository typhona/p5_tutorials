// Object trails and object placement via mouse click
// Stores historical data of location in an array
let particles = [];

function setup() {
	createCanvas(600, 600);

}

function mousePressed() {
	particles.push(new Particle(mouseX, mouseY));
}

function draw() {
	background(200);
	for (let i =0; i < particles.length; i++) {
	particles[i].update();
 	particles[i].show();
	}
	// line(frameCount, 0, frameCount, height);
}
