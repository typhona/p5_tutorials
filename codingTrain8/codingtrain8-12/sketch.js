let happy = ['rainbow', 'unicorn', 'purple', 'bacteria'];

function setup() {
	noCanvas();
var button = select('#button');
button.mousePressed(addItem);
}

function addItem() {
	let r = floor(random(0,happy.length))
	let li = createElement('li', happy[r]);
	li.parent('happylist');
}
