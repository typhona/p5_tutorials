// setTimeout(*,*)
// function as 1st argument
// second argument is time in ms
// time delay for a function

let x = 0;

function setup() {
  createCanvas(200, 200)
	setTimeout(rainbow, 3000);
	// rainbow();
}

function rainbow() {
	createP('rainbow');
}


function draw() {
	background(51);
	stroke(255);
	line(x,0,x,height);

	x = x + 3;
	if(x > width) {
		x = 0;
	}

}
