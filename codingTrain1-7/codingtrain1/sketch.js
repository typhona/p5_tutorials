// var x = random(200, 800);
// var y = random(200, 800);
// var rad = random(5, 20);
// let r = random(0, 255);
// let g = random(0, 255);
// let b = random(0, 255);
// var x = 500;
// var y = 300;
// var rad = 100

function setup() {
	createCanvas(windowWidth, windowHeight);
	background (0, 255, 255);

}

function draw() {


var x = random(0, width);
var y = random(0, height);
var rad = random(5, 100);
var x1 = random(0, width);
var y1 = random(0, height);
var rad1 = random(5, 100);
var trans = random(0,255)
let r = random(0, 255);
let g = random(0, 255);
let b = random(0, 255);
let r1 = random(0, 255);
let g1 = random(0, 255);
let b1 = random(0, 255);
let trans1 = random(0, 255);

strokeWeight(4);
line(x2, y2, x3, y3);
noStroke();
fill (r, g, b, trans);
ellipse(x, y, rad);
fill (r1, g1, b1, trans1);
rect (x1, y1, rad1, rad1);
var x2 = random(0, windowWidth);
var y2 = random(0, windowHeight);
var x3 = random(0, windowWidth);
var y3 = random(0, windowHeight);


}
