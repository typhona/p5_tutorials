// objects in arrays
// rollover rather than click
// changed to remove the bubble from array
let bubbles = [];
// let bubble;
function setup() {
	createCanvas(600, 400);
	for (let i = 0; i <10; i++) {
	let x = random(width);
	let y = random(height);
	let r = random(10, 50);
	let b = new Bubble(x, y, r);
	bubbles.push(b);
	}
}
 // function mousePressed() {
	//  for (let i =0; i < bubbles.length; i++){
 // 	bubbles[i].clicked(mouseX, mouseY);
 // 	// bubbles[i].display();
	// 	}
	// }
 function mousePressed() {
for (let i =bubbles.length - 1; i >= 0; i--) {
	if (bubbles[i].contains(mouseX, mouseY)) {
		bubbles.splice(i,1);
	}
}
}
function draw() {
	background (0);
	for (let i =0; i < bubbles.length; i++) {
 	if (bubbles[i].contains(mouseX, mouseY)) {
		bubbles[i].changeColor(255);
	} else {
		bubbles[i].changeColor(0);

	}
	bubbles[i].move();
	bubbles[i].display();
	}
}

class Bubble {
		constructor(x, y, r) {
			this.x = x;
			this.y = y;
			this.r = r;
			this.brightness = 0;
		}
		changeColor(bright) {
			this.brightness = bright;
		}

		contains(x, y) {
			let d = dist(x, y, this.x, this.y);
			if (d < this.r) {
				return true;
			} else {
				return false;
			}
		}
		move() {
			this.x = this.x + random(-2, 2);
			this.y = this.y + random(-2, 2);
		}
		display() {
			stroke (255);
			strokeWeight(4);
	//		noStroke();
			fill(this.brightness, 125);
			ellipse(this.x, this.y, this.r * 2);
		}
}
