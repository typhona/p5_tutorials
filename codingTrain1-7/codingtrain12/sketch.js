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
	// for (let bubble of bubbles) {
	// 	bubble.move();
	// 	bubble.show();
	// }

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
			// stroke (255);
			// strokeWeight(1);
			noStroke();
			fill(151, 10);
			ellipse(this.x, this.y, this.r * 2);
		}
}
