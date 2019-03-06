// rgb(221,202,136) yellow background
// rgb(78,44,104) puple blobs
// rgb(25,192,244) blue blobs
var colors = [[78,44,104], [25,192,244]]

var blob = {
		x:0,
		y:0
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	 background(247,221,162);
	 show();
	 fill(255, 100);
	 noStroke();
}

function draw() {
	fill(255, 100)
 rect(200, 200, 200, 400, 90);
}

function show (){
	i = random(0, colors.length);

	for (let i = 0; i < 8; i++) {
		let purpx = random(0, width);
		let purpy = random(0, height);
		let bluex = purpx * random(1, 3);
		let bluey = purpy * random(1, 3);
		for(let c = 0; c < 10; c++) {
			// this.x = random(0, width);
			// this.y= random(0, height);
			stroke(colors[1]);
			fill(colors[1]);
 			ellipse(bluex + random(-50, 50), bluey + random(-50, 50), random(25, 100));
		}
		for(let c = 0; c < 10; c++) {

			stroke(colors[0]);
			fill(colors[0]);
 			ellipse(purpx + random(50, -50), purpy + random(50, -50), random(25, 100));
		}
	}
}
