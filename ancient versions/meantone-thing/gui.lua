function init_gui()

	GUI_SCALE = 1; bypassGameClick = false;

	elements = {};
	GROUP_WELCOME = GuiElement:new{x=0, y=0, width=500, height=500, name="one", autopos = "top", autosize = true};
	generatorviewer = GuiElement:new{x=0,y=0,width=160,height=64,parent=GROUP_WELCOME, name="gen", text=""};
	
	function generatorviewer:onUpdate()
		self.text = currentpreset .. ". " .. presetnames[currentpreset] .. " \n" .. math.floor(song.generator*1000)/1000 .."c";
	end
	function generatorviewer:onClick()
		currentpreset = currentpreset + 1;
		if ( currentpreset > #presets ) then currentpreset = 1 end 
		song.generator = presets[currentpreset];
	end
end

function click_gui(x,y)
	for i = 1, #elements do
		local e = elements[i];
		if ((e.active or e.bypassActiveForClicks) and not e.parent) then
			e:click(x,y);
		end
	end
end

function update_gui()

	for i = 1, #elements do
		local e = elements[i];
		if (e.active) then
			e:update();
		end
	end
	
	--print(GROUP_WELCOME2.dispwidth);
end

function render_gui()

	for i = 1, #elements do
		local e = elements[i];
		e:render();
	end
end