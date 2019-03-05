// objects in arrays

let bubbles = [];
// let bubble;
function setup() {
	createCanvas(600, 400);
	for (let i = 0; i <5; i++) {
	let x = random(width);
	let y = random(height);
	let r = random(10, 50);
	let b = new Bubble(x, y, r);
	bubbles.push(b);
	}
}
 function mousePressed() {
	 for (let i =0; i < bubbles.length; i++){
 	bubbles[i].clicked(mouseX, mouseY);
 	// bubbles[i].display();
		}
	}
// function mousePressed() {
// 	let r = random(10, 50);
// 	let b = new Bubble(mouseX, mouseY, r);
// 	bubbles.push(b);
// }
function draw() {
	background (0);
	// bubble.move();
	// bubble.display();
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
			this.brightness = 0;
		}
		clicked(x, y) {
			let d = dist(x, y, this.x, this.y);
			if (d < this.r) {
			this.brightness = 255;
			if (d < this.r && this.brightness > 0) {
				this.brightness = 0;
			}
			// console.log("CLICKED ON BUBBLE");
			}
		}
		move() {
			this.x = this.x + random(-5, 5);
			this.y = this.y + random(-5, 5);
		}
		display() {
			stroke (255);
			strokeWeight(4);
	//		noStroke();
			fill(this.brightness, 125);
			ellipse(this.x, this.y, this.r * 2);
		}
}
