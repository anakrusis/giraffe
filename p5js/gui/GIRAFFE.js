// this is the main GIRAFFE handler

class GIRAFFE {
	static elements    = []; // outermost parent elements here, child elements contained within..
	static allElements = [];
	
	// key and touch handling
	static shiftDown = false;
	static bypassGameClick = false; // gui boolean for when a gui element is clicked, not to trigger anything in game world
	
	// main handler status
	static GUI_SCALE = 1.5;
	static FANCY_TEXT = false; 
	static LORES_MODE = false;
	
	static init(){
		
		if (getItem("GUI_SCALE")){
			GUI_SCALE = getItem("GUI_SCALE");
		}
		
		if (getItem("MOUSE_SENSITIVITY")){
			MOUSE_SENSITIVITY = getItem("MOUSE_SENSITIVITY");
		}
		
	}
	
	static update(){
		
		this.shiftDown = false;
		if (keyIsDown(16)){
			this.shiftDown = true;
		}
		if (keyIsDown(8) && selectedTextEntry){
			backspaceTimer--;
			if (backspaceTimer <= 0){
				
				if (framecount % 4 == 0){
					
					selectedTextEntry.setting = selectedTextEntry.setting.slice(0, -1);
					// = BACKSPACE_TIMER_AMT;
				}
			}
		}
		
		// Zoom keys
		if (keyIsDown(187)) { // plus
			cam_zoom += (cam_zoom / 25);
			
		}else if (keyIsDown(189)) { // minus
			cam_zoom -= (cam_zoom / 25);
		}
		
		if ( mouseIsPressed && touches.length == 0 ){
			
			for (var i = this.elements.length - 1; i >= 0; i--){
				var e = this.elements[i];
				if ((e.active || e.bypassActiveForClicks) && !e.parent && e.holdclick){
					e.click(mouseX, mouseY);
				}
			}
			this.bypassGameClick = false;
		}
		
		for (var i = 0; i < this.allElements.length; i++){
			var e = this.allElements[i];
			if (e.active || e == GROUP_HOTBAR){
				e.update();
			}
		}
		if (this.LORES_MODE && this.FANCY_TEXT){ GUI_SCALE = 2; }
		
		if (this.lastLoresMode != this.LORES_MODE){
			pixelDensity( this.LORES_MODE ? 0.5 : 1 );
		}
		this.lastLoresMode = this.LORES_MODE;
	}
	
	static render(){
		
		scale(this.GUI_SCALE);
		fill(0);
		stroke(255);
		
		for (var i = 0; i < this.elements.length; i++){
			var e = this.elements[i];
			e.render();
		}
		
		resetMatrix()
	}
}