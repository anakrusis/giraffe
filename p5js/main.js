function setup(){
	document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
	
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	textFont("Courier"); textSize(16); 
	pixelDensity(1);
	noSmooth();
	
	GIRAFFE.init();
	
	var testelement = new GuiElement(0,0,500,500);
	testelement.text = "Hello! This is a test for the GIRAFFE graphics interface library!"
}

function windowResized() {
	var outerw  = window.innerWidth;
	var outerh = window.innerHeight;
	var window_aspect_ratio = outerh/outerw
	
	bodydiv = document.getElementById("bodydiv");
	var cw = bodydiv.offsetWidth - 30;
	var ch = cw * (window_aspect_ratio)
	resizeCanvas(windowWidth, windowHeight);
}

function draw(){
	background(6,0,6);
	
	GIRAFFE.update();
	GIRAFFE.render();
}

function update(){
	
}