// coding train 8.2
// HTML javascript DOM

//** Create functions **//
// createP()
// createDiv()
// createButton()
//createImg()
//createElement('tag', 'content')


function setup() {
	createCanvas(200, 200);
	// createP("My favorite color is purple.");
	createElement('h1', 'My favorite number is below');

}

function mousePressed() {
	// createP("My favorite color is purple.");
	createP("My favorite number is " + random(0, 10));

}
function draw() {
	background(0);
	fill (255, 0, 0);
	rect(100, 100, 50, 50)
}
