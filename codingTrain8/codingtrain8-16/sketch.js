let sliders = [];

let angle = 0;
// let x = 151;

function setup() {
	noCanvas();
	for (let i =0; i < 100; i++) {
	sliders[i] = createSlider(0, 255, 50);
}
	sliders[0].input(adjustSliders);
}

function adjustSliders() {

	for (let i =1; i < sliders.length; i++) {
			sliders[i].value(sliders[0].value());
		}
	// ZOMBIE slider
	// slider.value(x);
	// x = x + random(-10, 10);
		angle += 0.1;

}
