let paragraph;
let paragraphs;

function setup() {
	createCanvas(100, 100);
	background(0);

	paragraph = select('#unicorn');
	// paragraph.mouseOver(highlight);
	// paragraph.mouseOut(unhighlight);

  paragraphs = selectAll('p');
	// paragraphs = selectAll('.rainbow');
	for (let i =0; i < paragraphs.length; i++) {

		paragraphs[i].mouseOver(highlight);
		paragraphs[i].mouseOut(unhighlight);

}
	// let button = select('#button');
	// button.mousePressed(canvasBg)
}

function highlight() {
	this.style('padding', '16pt');
	this.style('background-color', '#F0F');
}

function unhighlight() {
	this.style('padding', '0pt');
	this.style('background-color', '#FFF');
}
