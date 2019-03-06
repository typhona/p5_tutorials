let dropzone;

function setup() {
	createCanvas(200, 200);
	background(0);

dropzone = select('#dropzone');
dropzone.dragOver(highlight);
dropzone.dragLeave(unhighlight);
dropzone.drop(gotFile, highlight);

}


function gotFile(file) {
	createP(file.name);
	createP(file.type);
	createP(file.size);

	createImg(file.data);

}

function highlight() {
	dropzone.style('background-color', '#CCC');
}


function unhighlight() {
	dropzone.style('background-color', '#FFF');
}
