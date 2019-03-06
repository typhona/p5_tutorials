let images = [];

function setup() {
  noCanvas();
  for (let i = 0; i < 5; i++) {
    p = createP('This is a link: ');
    p.style('background-color', '#CCC');
    p.style('padding', '24px');

    let a = createA('#', 'apples');
    a.mousePressed(addphoto);
    a.parent(p);
  }
	// css id NEEDS a # in front of the name
	let button = select('#clear');
	button.mousePressed(clearStuff);
}

function clearStuff() {
	for (i = 0; i < images.length; i++) {
		images[i].remove();
	}
	images = [];
}

function addphoto() {
  var img = createImg('apple2.jpg');
	images.push(img);
  img.size(100, 100);
  let paragraph = this.parent();
  img.parent(paragraph);

}
