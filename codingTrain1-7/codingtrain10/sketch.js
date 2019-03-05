// classes - encapsulation - template
// class *name* { everything it means to be an object }
// data and functionality
// class is the cookie cutter the object is the cookie
// new.class construct a new instance of an object
// uses a conctructor function
// try to switch to 'let' instead of 'var' for declaring a
// variable

let bubble1;
let bubble2;

function setup() {
	createCanvas(600, 400);
	bubble1 = new Bubble(200, 200, 40);
	bubble2 = new Bubble(400, 200, 20);
//	print (bubble.x, bubble.y);
}
function draw() {
	background (0);
	bubble1.move();
	bubble1.display();
	bubble2.move();
	bubble2.display();
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
			noFill();
			ellipse(this.x, this.y, this.r * 2);
		}
}
//
//
// function display() {
// 	stroke (255);
// 	strokeWeight(4);
// 	noFill();
// 	ellipse(bubble.x, bubble.y, 24, 24);
// }
//
// function move() {
// 	bubble.x = bubble.x + random(-5, 5);
// 	bubble.y = bubble.y + random(-5, 5);
// }
