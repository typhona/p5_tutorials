let paragraph;

function setup() {
	createCanvas(100, 100);
	background(0);

	// paragraph = select('#unicorn');
	// paragraphs = selectAll('p');
	paragraphs = selectAll('.rainbow');
	for (let i =0; i < paragraphs.length; i++) {
		paragraphs[i].style('font-size', '24pt');
}
	let button = select('#button');
	button.mousePressed(canvasBg)
}

function canvasBg() {
		background(random(255));
}


function changeBackground() {
	paragraph.style('background-color', '#F0F');
}
