// namespacing for removing gloal variables and claiming as your own


let sketch1 = function(p) {
p.x = 100;
p.y = 100;


p.setup = function() {
	p.createCanvas(200, 200);
	p.x = p.width / 2;
	p.y = p.height / 2;
	p.background(51);

}

p.draw = function() {
	p.fill(255, 0, 200, 10);
	p.noStroke();
	p.ellipse(p.x, p.y, 48, 48);

	p.x = p.x + p.random(-15, 15);
	p.y = p.y + p.random(-15, 15);
	}
}

let sketch2 = function(p) {
p.x = 100;
p.y = 100;


p.setup = function() {
	p.createCanvas(200, 200);
	p.x = p.width / 2;
	p.y = p.height / 2;
	p.background(51);

}

p.draw = function() {
	p.fill(255, 250, 0, 10);
		p.noStroke();
	p.ellipse(p.x, p.y, 48, 48);

	p.x = p.x + p.random(-15, 15);
	p.y = p.y + p.random(-15, 15);
	}
}


let myp51 = new p5(sketch1);
let myp52 = new p5(sketch2);

function resetBackground() {
	myp51.x = myp51.width/2;
	myp51.y = myp51.height/2;
	myp51.background(51);
}
setInterval(resetBackground, 3000);
