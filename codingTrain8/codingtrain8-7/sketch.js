// Javascript CSS demo
let bgcolor;
let button;
let txt;

function setup() {
	createCanvas(200,200);
	bgcolor  = color(51);
	txt = createP('some text');
	txt.mouseOver(changeStyle);
	txt.mouseOut(revertStyle);
	button = createButton("go");
	// button.mousePressed(changeStyle);
}

function changeStyle() {
	txt.style("background-color", "pink");
	txt.style("padding", "24px");
}

function revertStyle() {
	txt.style("background-color", "purple");
	txt.style("padding", "8px");
}

function draw() {
	background(bgcolor);
	fill(255, 0, 175);
	ellipse(100, 100, 50, 50);
}
