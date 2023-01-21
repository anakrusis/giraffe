function preload(){
	ELMTOBJ = loadJSON("gui.json");
}

function setup(){
	document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
	
	createCanvas(windowWidth, windowHeight);
	frameRate(60);
	textFont("Courier"); textSize(16); 
	pixelDensity(1);
	noSmooth();
	
	GIRAFFE.init(ELMTOBJ);
	
/* 	var testelement = new GuiElement(0,0,500,500);
	testelement.autosize = true; testelement.autopos = "top";
	
	var testelement2 = new GuiElement(0,0,500,100, testelement);
	testelement2.text = "Hello! This is a test for the GIRAFFE graphics interface library!";
	testelement2.onClick = function(){
		console.log("i was clicked!")
	}
	
	var testelement3 = new GuiElement(0,0,500,100, testelement);
	testelement3.text = "Hello! This is also a test also!";
	testelement3.onClick = function(){
		console.log("i was clicked too!")
	} */
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

function mousePressed() {	
	GIRAFFE.onClick(mouseX, mouseY);
	if (GIRAFFE.bypassGameClick){ GIRAFFE.bypassGameClick = false; return; }
}

function draw(){
	background(6,0,6);
	
	GIRAFFE.update();
	GIRAFFE.render();
}

function update(){
	
}