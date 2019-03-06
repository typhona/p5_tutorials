let font;
let vehicles = [];

function preload() {
	font = loadFont('LiberationSerif-Bold.ttf');
}

function setup() {
	createCanvas(800, 300);
	background(51);
	// textFont(font);
	// textSize(128);
	// fill(255);
	// noStroke();
	// text('FUCK YOU', 50, 200);

	let points = font.textToPoints('Eat A Dick', 50, 200, 128)
	for (let i =0; i < points.length; i++) {
	let pt = points[i];
	let vehicle = new Vehicle(pt.x, pt.y);
	vehicles.push(vehicle)
	// stroke(0, 255, 0);
	// strokeWeight(4);
	// point(pt.x, pt.y);
	}

}

function draw() {
	background(51);
	for (let i = 0; i < vehicles.length; i++) {
		let v = vehicles[i];
		v.behaviors();
		v.update();
		v.show();
	}
}
