function setup() {
for (let i = 0; i < 10; i++) {
	let p = createA('#', 'apples');
	let x = floor(random(windowWidth));
	let y = floor(random(windowHeight));
	p.position(x, y);
	p.class('apple');
	}

	for (let i = 0; i < 10; i++) {
		let p = createA('#','blueberries');
		let x = floor(random(windowWidth));
		let y = floor(random(windowHeight));
		p.position(x, y);
		p.class("blueberry");
		p.mousePressed(becomeApple);
		}
		function becomeApple() {
			this.class('apple');
		}

}
