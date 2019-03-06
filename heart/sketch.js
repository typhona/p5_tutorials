

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
background(0);
translate(width/2, height/2)
beginShape();
noFill();
stroke(255);
strokeWeight(1);
for (let a = 0; a < TWO_PI; a+=0.01) {
	 let r = 10;
	 let x = r * 16 * pow(sin(a),3);
	 let y = -r*(13 * cos(a) - 5*cos(2*a) - 2*cos(3*a) - cos(4*a));
	 vertex(x,y);
}
endShape();

}
