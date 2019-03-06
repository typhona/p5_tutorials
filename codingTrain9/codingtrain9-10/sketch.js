// code broken due to lack of Flock.js but concept
// is just to reset the sketch with a button

let flock;

function setup() {
	createCanvas(640, 360);
	// flock = new Flock();
	// for (let i = 0; i < 100; i++) {
	// 	let b = new Boid(width/2, height/2);
	// 	flock.addBoid(b);
	// }
	let button = createButton('reset');
	button.mousPressed(resetSketch);
}

	function resetSketch() {
		// the main code for the sketch goes here
		flock = new Flock();
		for (let i = 0; i < 100; i++) {
			let b = new Boid(width/2, height/2);
			flock.addBoid(b);
		}

	}
function draw() {
	background(51);
	flock.run();
}
