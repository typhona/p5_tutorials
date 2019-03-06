// coding train 8.5
// HTML javascript DOM
//
// Callback functionality
// Sliders createSlider(min,max,start)
// value()
// createInput

let bgcolor;
let button;
let slider;
let sliderR;
let sliderG;
let sliderB;
let input;
let nameP;
let overpara;

function setup() {
	createCanvas(200, 200);
	bgcolor = color(200);
	nameP = createP('Your name');


	nameP.mouseOver(overpara);


	button  = createButton("go");
	button.mousePressed(changeColor);
	createP('Size');
	slider = 	createSlider(10, 100, 47);



	// color picker sliders for the fill of shape
	createP('Red');
	sliderR = 	createSlider(0, 255, 128);
	createP('Green');
	sliderG = 	createSlider(0, 255, 128);
	createP('Blue');
	sliderB = 	createSlider(0, 255, 128);
	createP('Input');
	input= createInput('Type your name');

}

	function overpara() {
		nameP.html('your mouse is over me');
	}

	function outpara() {
		nameP.html('your mouse is out');
	}

function changeColor () {
	bgcolor = color(random(255), random(255), random(255));
}

// function mousePressed() {
// 	changeColor();
// }

function draw() {
	background(bgcolor);
	// slider values being used for color
	fill (sliderR.value(), sliderG.value(), sliderB.value());
	// slider value for size of shape
	ellipse(100, 100, slider.value(), slider.value())
	nameP.html(input.value());
	text(input.value(), 10, 20);
}
