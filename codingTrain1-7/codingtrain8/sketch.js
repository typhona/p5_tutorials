// lolloipop function
// define the function and call it 3 times
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	lollipop(100, 100, 50);
	lollipop(200, 300, 100);
	lollipop(150, 75, 150);

}

function lollipop(x, y, diameter) {
	fill(0, 200, 255);
	rect(x-10, y, 20, 150);

	fill(255, 0 ,200);
	ellipse(x, y, diameter, diameter)

}
