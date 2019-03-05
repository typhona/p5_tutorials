// objects in arrays
// rollover rather than click
// changed to change kittens to flowers or random kittens

let bubbles = [];
let kittens = [];
let flower;
function preload(){
	 flower = loadImage('kittens/flower.jpg');
	 for (let i = 0; i < 5; i++ ) {
		  kittens[i] = loadImage(`kittens/kitten${i}.jpg`)
	 }
}

function setup() {
	createCanvas(600, 400);
	for (let i = 0; i <20; i++) {
	let x = random(width);
	let y = random(height);
	let r = random(100, 150);
	let kitten = random(kittens);
	let b = new Bubble(x, y, r, kitten);
	bubbles.push(b);
	}
}

 function mousePressed() {
for (let i =bubbles.length - 1; i >= 0; i--) {
	if (bubbles[i].clicked(mouseX, mouseY)) {
		bubbles.splice(i,1);
	}
}
}
function draw() {
	background (0);
	for (let i = 0; i < bubbles.length; i++) {
 	if (bubbles[i].clicked(mouseX, mouseY))


	bubbles[i].move();
	bubbles[i].display();
	}
}

class Bubble {
		constructor(x, y, r, img) {
			this.x = x;
			this.y = y;
			this.r = r;
			this.kitten = img;
		}

		clicked(x, y) {
			// let d = dist(x, y, this.x, this.y);
			// if (d < this.r) {
			if(x > this.x && x < this.x + this.r && y > this.y && y < this.y + this.r) {
				this.kitten = flower;
			}
		}
		move() {
			this.x = this.x + random(-2, 2);
			this.y = this.y + random(-2, 2);
		}
		display() {
			image(this.kitten, this.x, this.y, this.r, this.r);
 			// stroke (255);
			// strokeWeight(4);
			// fill(this.brightness, 125);
			// ellipse(this.x, this.y, this.r * 2);
		}
}
