// objects in arrays

let bubbles = [];

function setup() {
	createCanvas(600, 400);
}

function mouseDragged() {
	let r = random(10, 50);
	let b = new Bubble(mouseX, mouseY, r);
	bubbles.push(b);
}
function draw() {
	background (0);
	for (let i =0; i < bubbles.length; i++){
	bubbles[i].move();
	bubbles[i].display();
	}
}

class Bubble {
		constructor(x, y, r) {
			this.x = x;
			this.y = y;
			this.r = r;
		}
		move() {
			this.x = this.x + random(-5, 5);
			this.y = this.y + random(-5, 5);
		}
		display() {
			stroke (255);
			strokeWeight(4);
	//		noStroke();
			noFill();
			ellipse(this.x, this.y, this.r * 2);
		}
}