(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.man1 = function() {
	this.initialize(img.man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.nbn_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAXIAAggIgOAUQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgOgUIAAAhQAAAEgFABQgFgBAAgEIAAgvQAAgEAFAAIABAAQAEAAABACIAQAaIASgaQABgCADAAIABAAQAFAAAAAEIAAAuQAAAGgFAAQgFAAAAgGg");
	this.shape.setTransform(41.7,2.2,0.524,0.524);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAXIAAgpIgOAAQgEAAAAgFQAAgEAEAAIAlAAQAEAAAAAEQAAAFgEAAIgOAAIAAApQAAAGgFAAQgEAAAAgGg");
	this.shape_1.setTransform(38.5,2.2,0.524,0.524);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBB7QgJgHAAgNIAAh2QAAgegOgQQgOgQgbAAQgZgBgPASQgQARAAAdIAAB1QAAANgJAHQgJAJgMAAQgMAAgJgJQgIgHAAgNIAAjKQAAgMAIgJQAIgJANAAQAMAAAJAJQAJAJAAAMIAAANQAegtAxAAQArAAAYAbQAYAaAAAtIAACIQAAANgIAHQgJAJgMAAQgNAAgIgJg");
	this.shape_2.setTransform(35.9,11.9,0.524,0.524);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJCIIAAANQAAAMgIAJQgJAIgMAAQgNAAgIgIQgJgJAAgMIAAksQAAgNAJgIQAIgIANAAQAMAAAJAIQAIAIAAANIAAByQAigwA1AAQAwAAAiAjQAlAlAAA8IAAABQAAA9glAmQgiAigwAAQg0AAgjgtgAg0gLQgWAWAAAkIAAABQAAAkAWAYQAWAWAeAAQAfAAAUgWQAWgXAAglIAAgBQAAgkgWgWQgVgXgeAAQgeAAgWAXg");
	this.shape_3.setTransform(21.2,9.5,0.524,0.524);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABBB7QgJgHAAgNIAAh2QAAgegOgQQgOgQgbAAQgZgBgPASQgQARAAAdIAAB1QAAANgJAHQgJAJgMAAQgMAAgJgJQgIgHAAgNIAAjKQAAgMAIgJQAIgJANAAQAMAAAJAJQAJAJAAAMIAAANQAegtAxAAQArAAAYAbQAYAaAAAtIAACIQAAANgIAHQgJAJgMAAQgNAAgIgJg");
	this.shape_4.setTransform(6,11.9,0.524,0.524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nbn_text, new cjs.Rectangle(0,0,43.2,19), null);


(lib.nbn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.nbn, null, null);


(lib.man1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man1_1, new cjs.Rectangle(-150,-125,160,600), null);


(lib.InitColour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var circleRoot = this;
		var ranColourFrame = Math.round(Math.random()*900);
		
		var stopFrameTimeout = setTimeout(stopFrame, ranColourFrame);
		
		function stopFrame(){
			circleRoot.stop();
			clearTimeout(stopFrameTimeout);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EABE1E").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape.setTransform(9,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FACB39").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_1.setTransform(9,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBE200").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_2.setTransform(9,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#69BF3F").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_3.setTransform(9,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#52CC74").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_4.setTransform(9,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B72B7").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_5.setTransform(9,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A97F5").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_6.setTransform(9,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6FD7D7").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_7.setTransform(9,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#163488").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_8.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAcQgLgMAAgQQAAgPAKgLQAKgLAOAAQARAAAJAMQAJAKAAAOQAAACgCACQgDADgDAAIgsAAQABAJAGAFQAFAEAIAAQAJABAIgHQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAGgBABAHQAAADgCADQgLAJgPAAQgQAAgKgKgAgLgSQgGAGgBAIIAlAAQgBgTgSAAQgGAAgFAFg");
	this.shape.setTransform(-26.3,196.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAdIAAg5QABgIAHAAQAJAAAAAIIAAAIQAGgQALAAQAIAAAAAIQAAAGgGACQgTAEAAAXIAAAWQAAADgDADQgCACgEAAQgHAAgBgIg");
	this.shape_1.setTransform(-32.7,196.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbAbQgLgLAAgPIAAgBQAAgOALgLQAMgMAPAAQARAAALALQALALAAAPQAAAPgLAMQgMALgQAAQgQAAgLgLgAgPgPQgGAGAAAJQAAAJAGAIQAHAGAIAAQAKAAAGgGQAGgHAAgJIAAgBQAAgIgGgHQgHgIgJAAQgJAAgGAIg");
	this.shape_2.setTransform(-40.4,196.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmAdIAAggQAAgSgOAAQgQAAAAASIAAAgQAAADgCADQgDACgDAAQgIABAAgJIAAggQAAgSgOAAQgHAAgEAEQgFAGAAAIIAAAgQAAAJgIgBQgIABAAgJIAAg5QAAgIAIAAQAIAAAAAIIAAAEQAJgNANABQAQgBAFANQAJgNAQABQAMAAAGAHQAHAHAAANIAAAmQAAAJgIgBQgJABAAgJg");
	this.shape_3.setTransform(-51.4,196.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMAaIAAglIgDAAQgHAAAAgHQgBgDADgCQACgDADAAIADAAIAAgMQAAgIAIAAQAHAAAAAIIAAAMIANAAQADAAADADQACACAAADQgBAHgHAAIgNAAIAAAiQAAAJAJAAIAEAAQAHAAAAAHQAAAEgEACQgEACgIAAQgTAAAAgVg");
	this.shape_4.setTransform(-65,195.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAeQgHgHAAgOIAAgmQAAgIAJAAQAIAAAAAIIAAAiQAAARAPAAQAQAAAAgSIAAghQAAgDACgCQADgCADgBQAEABACACQADACAAADIAAA5QAAADgDADQgCACgEAAQgIABAAgJIAAgEQgJANgNAAQgMABgHgIg");
	this.shape_5.setTransform(-72.1,196.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAbQgLgLAAgPIAAgBQAAgOALgLQAMgMAPAAQARAAALALQALALAAAPQAAAPgLAMQgMALgQAAQgQAAgLgLgAgPgPQgGAGAAAJQAAAJAGAIQAHAGAIAAQAKAAAGgGQAGgHAAgJIAAgBQAAgIgGgHQgHgIgJAAQgJAAgGAIg");
	this.shape_6.setTransform(-80.8,196.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaApQgKgKAAgSQgBgQALgLQAJgKAOABQAOgBAJANIAAgfQABgEACgCQACgCAEgBQADABADACQADACgBAEIAABUQAAAJgIgBQgJABAAgJIAAgEQgJANgOAAQgOAAgJgKgAgOgDQgGAGAAAKQAAALAGAGQAGAHAIAAQAIAAAHgHQAGgGAAgLQAAgKgGgGQgHgGgIAAQgIAAgGAGg");
	this.shape_7.setTransform(-94.2,195.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQAdIAAggQAAgSgQAAQgPAAAAASIAAAgQAAAJgIgBQgJABAAgJIAAg5QAAgDADgCQACgCAEgBQADABADACQACACAAADIAAAEQAJgNANABQAMAAAHAHQAHAIAAAMIAAAmQAAAJgJgBQgIABAAgJg");
	this.shape_8.setTransform(-102.9,196.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAqIAAg5QAAgIAHAAQAJAAAAAIIAAA5QAAAJgJgBQgHABAAgJgAgIgpIAAgBQAAgIAIAAQAKAAAAAIIAAABQAAAJgKgBQgIABAAgJg");
	this.shape_9.setTransform(-109.2,195.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAuQgCgDAAgDIAAhPQAAgJAIABIA4AAQADAAACACQACACAAADQAAADgCACQgCADgDAAIgvAAIAAAaIAoAAQAIAAAAAHQAAAHgIABIgoAAIAAAfQAAADgDADQgCACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-115.3,195.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#21327E").s().p("ApFCqQgjAAgYgiQgYgjAAgvIAAhqQAAgwAYgjQAYgiAjAAISLAAQAjAAAXAiQAZAjAAAwIAABqQAAAvgZAjQgXAigjAAg");
	this.shape_11.setTransform(-71.3,195);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-137.8,178,133,34), null);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhRBuIAAjbICjAAIAADbg");
	var mask_graphics_1 = new cjs.Graphics().p("AiQBuIAAjbIEhAAIAADbg");
	var mask_graphics_2 = new cjs.Graphics().p("AjKBuIAAjbIGVAAIAADbg");
	var mask_graphics_3 = new cjs.Graphics().p("Aj2BuIAAjbIHtAAIAADbg");
	var mask_graphics_4 = new cjs.Graphics().p("AmBhIIAAjcIKXAAIAADcg");
	var mask_graphics_5 = new cjs.Graphics().p("AmMhIIAAjcIMZAAIAADcg");
	var mask_graphics_6 = new cjs.Graphics().p("AnRhIIAAjcIOjAAIAADcg");
	var mask_graphics_7 = new cjs.Graphics().p("AoWhIIAAjcIQtAAIAADcg");
	var mask_graphics_8 = new cjs.Graphics().p("ApThIIAAjcISnAAIAADcg");
	var mask_graphics_9 = new cjs.Graphics().p("AqNBuIAAjbIUbAAIAADbg");
	var mask_graphics_10 = new cjs.Graphics().p("AqCD2IAAjXIBwAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_11 = new cjs.Graphics().p("AqDD2IAAjXIDpAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_12 = new cjs.Graphics().p("AqDD2IAAjXIGdAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_13 = new cjs.Graphics().p("AqDD2IAAjXIIFAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_14 = new cjs.Graphics().p("AqDD2IAAjXIKLAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_15 = new cjs.Graphics().p("AqDD2IAAjXIMIAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_16 = new cjs.Graphics().p("AqDD2IAAjXIOAAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_17 = new cjs.Graphics().p("AqDD2IAAjXIQMAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_18 = new cjs.Graphics().p("AqDD2IAAjXISsAAIAADXgAqNgZIAAjcIUbAAIAADcg");
	var mask_graphics_19 = new cjs.Graphics().p("Ap7GHIAAjXICOAAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_20 = new cjs.Graphics().p("Ap7GHIAAjXIEQAAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_21 = new cjs.Graphics().p("Ap7GHIAAjXIG/AAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_22 = new cjs.Graphics().p("Ap7GHIAAjXII8AAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_23 = new cjs.Graphics().p("Ap8GHIAAjXIK4AAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_24 = new cjs.Graphics().p("Ap9GHIAAjXINjAAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_25 = new cjs.Graphics().p("Ap9GHIAAjXIP4AAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_26 = new cjs.Graphics().p("Ap9GHIAAjXIRzAAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_27 = new cjs.Graphics().p("Ap9GHIAAjXITSAAIAADXgAqDBlIAAjWISsAAIAADWgAqNiqIAAjcIUbAAIAADcg");
	var mask_graphics_28 = new cjs.Graphics().p("Ap+IOIAAjtIBpAAIAADtgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_29 = new cjs.Graphics().p("Ap+IOIAAjtICyAAIAADtgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_30 = new cjs.Graphics().p("Ap+IOIAAjtIE2AAIAADtgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_31 = new cjs.Graphics().p("Ap+IOIAAjtIIrAAIAADtgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_32 = new cjs.Graphics().p("Ap/IOIAAjtIK0AAIAADtgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_33 = new cjs.Graphics().p("Ap/EhIM7gFIAADtIs7AFgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_34 = new cjs.Graphics().p("Ap/EhIO9gFIAADtIu9AFgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_35 = new cjs.Graphics().p("Ap/EhIQjgFIAADtIwjAFgAp9EAIAAjXITSAAIAADXgAqDghIAAjXISsAAIAADXgAqNkxIAAjcIUbAAIAADcg");
	var mask_graphics_36 = new cjs.Graphics().p("Ap2KWIAAjVIB1AAIAADVgAp/CZIQjgFIAADtIwjAEgAp9B3IAAjWITSAAIAADWgAqDiqIAAjXISsAAIAADXgAqNm5IAAjcIUbAAIAADcg");
	var mask_graphics_37 = new cjs.Graphics().p("Ap3KWIAAjVIDuAAIAADVgAp/CZIQjgFIAADtIwjAEgAp9B3IAAjWITSAAIAADWgAqDiqIAAjXISsAAIAADXgAqNm5IAAjcIUbAAIAADcg");
	var mask_graphics_38 = new cjs.Graphics().p("Ap3KWIAAjVIFDAAIAADVgAp/CZIQjgFIAADtIwjAEgAp9B3IAAjWITSAAIAADWgAqDiqIAAjXISsAAIAADXgAqNm5IAAjcIUbAAIAADcg");
	var mask_graphics_39 = new cjs.Graphics().p("Ap3KWIAAjVIG6AAIAADVgAp/CZIQjgFIAADtIwjAEgAp9B3IAAjWITSAAIAADWgAqDiqIAAjXISsAAIAADXgAqNm5IAAjcIUbAAIAADcg");
	var mask_graphics_40 = new cjs.Graphics().p("AqcKWIAAjrIIjAAIAADrgApvCZIQjgFIAADtIwjAEgApuB3IAAjWITSAAIAADWgAp0iqIAAjXISsAAIAADXgAp+m5IAAjcIUbAAIAADcg");
	var mask_graphics_41 = new cjs.Graphics().p("AqcKWIAAjrIKbAAIAADrgApvCZIQjgFIAADtIwjAEgApuB3IAAjWITSAAIAADWgAp0iqIAAjXISsAAIAADXgAp+m5IAAjcIUbAAIAADcg");
	var mask_graphics_42 = new cjs.Graphics().p("AqcKWIAAjrIMwAAIAADrgApvCZIQjgFIAADtIwjAEgApuB3IAAjWITSAAIAADWgAp0iqIAAjXISsAAIAADXgAp+m5IAAjcIUbAAIAADcg");
	var mask_graphics_43 = new cjs.Graphics().p("ApsMkIAAjnICjAAIAADngAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");
	var mask_graphics_44 = new cjs.Graphics().p("AptMkIAAjnID3AAIAADngAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");
	var mask_graphics_45 = new cjs.Graphics().p("AptMkIAAjnIF3AAIAADngAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");
	var mask_graphics_46 = new cjs.Graphics().p("AptMkIAAjnIHvAAIAADngAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");
	var mask_graphics_47 = new cjs.Graphics().p("AptMkIAAj4IIjAAIAAD4gAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");
	var mask_graphics_48 = new cjs.Graphics().p("ApuMkIAAj4IKxAAIAAD4gAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");
	var mask_graphics_49 = new cjs.Graphics().p("ApuMkIAAj4IMrAAIAAD4gAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");
	var mask_graphics_50 = new cjs.Graphics().p("ApuMkIAAj4IPGAAIAAD4gAqcIIIAAjrIMwAAIAADrgApvAMIQjgGIAADtIwjAFgApugVIAAjXITSAAIAADXgAp0k3IAAjXISsAAIAADXgAp+pHIAAjcIUbAAIAADcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-68.9,y:-47.5}).wait(1).to({graphics:mask_graphics_1,x:-62.7,y:-47.5}).wait(1).to({graphics:mask_graphics_2,x:-57,y:-47.5}).wait(1).to({graphics:mask_graphics_3,x:-52.5,y:-47.5}).wait(1).to({graphics:mask_graphics_4,x:-38.6,y:-29.2}).wait(1).to({graphics:mask_graphics_5,x:-37.5,y:-29.2}).wait(1).to({graphics:mask_graphics_6,x:-30.7,y:-29.2}).wait(1).to({graphics:mask_graphics_7,x:-23.8,y:-29.2}).wait(1).to({graphics:mask_graphics_8,x:-17.7,y:-29.2}).wait(1).to({graphics:mask_graphics_9,x:-11.9,y:-47.5}).wait(1).to({graphics:mask_graphics_10,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_11,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_12,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_13,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_14,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_15,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_16,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_17,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_18,x:-11.9,y:-33.9}).wait(1).to({graphics:mask_graphics_19,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_20,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_21,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_22,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_23,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_24,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_25,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_26,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_27,x:-11.9,y:-19.4}).wait(1).to({graphics:mask_graphics_28,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_29,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_30,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_31,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_32,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_33,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_34,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_35,x:-11.9,y:-5.9}).wait(1).to({graphics:mask_graphics_36,x:-11.9,y:7.7}).wait(1).to({graphics:mask_graphics_37,x:-11.9,y:7.7}).wait(1).to({graphics:mask_graphics_38,x:-11.9,y:7.7}).wait(1).to({graphics:mask_graphics_39,x:-11.9,y:7.7}).wait(1).to({graphics:mask_graphics_40,x:-13.4,y:7.7}).wait(1).to({graphics:mask_graphics_41,x:-13.4,y:7.7}).wait(1).to({graphics:mask_graphics_42,x:-13.4,y:7.7}).wait(1).to({graphics:mask_graphics_43,x:-13.4,y:21.9}).wait(1).to({graphics:mask_graphics_44,x:-13.4,y:21.9}).wait(1).to({graphics:mask_graphics_45,x:-13.4,y:21.9}).wait(1).to({graphics:mask_graphics_46,x:-13.4,y:21.9}).wait(1).to({graphics:mask_graphics_47,x:-13.4,y:21.9}).wait(1).to({graphics:mask_graphics_48,x:-13.4,y:21.9}).wait(1).to({graphics:mask_graphics_49,x:-13.4,y:21.9}).wait(1).to({graphics:mask_graphics_50,x:-13.4,y:21.9}).wait(50));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3674").s().p("AgKAMQgFgEABgHIAAgBQgBgHAFgEQAFgEAFAAQAHAAAEAEQAFAEgBAHIAAABQABAHgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape.setTransform(16.2,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3674").s().p("AgeA4QgDgEAAgGIAAhbQAAgFADgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAMQAEgLAIgHIAIgGIAIgBQAGAAAEADQAEAEgBAGQABAFgEADQgDAEgFABQgGABgGADQgGAEgFAFQgDAGgCAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgGAAQgFAAgEgDg");
	this.shape_1.setTransform(10.3,87.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgFgLIgDgMIgBgNIAAAAQAAgLAEgMQAEgKAHgJQAJgIAKgFIALgEIALgBQAGAAAGACQAHABAFADQAKAEAHAJQAHAIAEAKQADAKAAALQAAAEgEAEQgDADgFAAIhIAAQABAIACAFQADAFAFAFQAEADAGACQAFACAGAAQAIAAAHgDQAHgDAFgEQAEgCADgBQAEAAAEADQADAEAAAEQAAAEgEAEQgIAHgKAEQgKAFgOAAQgLAAgLgFgAAegHIgDgMQgDgGgDgEQgEgEgFgCQgFgDgGAAQgFAAgGADQgFABgEAFQgEAEgCAGQgDAFgBAHIA7AAIAAAAg");
	this.shape_2.setTransform(-0.6,87.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3674").s().p("AgZBOQgKgEgHgIQgIgIgEgLIgEgMIgBgNIAAgBQAAgKAFgOQAEgMAIgHQAHgIAKgEQAJgEALAAQAGAAAGACQAGABAFADQAIAFAIAJIAAgyQAAgFADgFQAEgDAGAAQAFAAAEADQAEAFAAAFIAACIQAAAFgEAEQgEADgFAAQgGAAgEgDQgDgEAAgFIAAgIQgIAKgIAGIgLAEQgGACgGAAQgKAAgKgEgAgMgMQgGACgEAFQgFAFgCAGQgDAHAAAIIAAABQAAAIADAHQACAGAFAGQAEAFAGACQAHADAFAAQAHAAAGgDQAGgCAFgFQAFgGACgGQADgHAAgIIAAgBQAAgIgDgHQgCgGgFgFQgFgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(-14,85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3674").s().p("AgIBNQgEgEAAgFIAAhbQAAgGAEgEQAEgEAEAAQAGAAAEAEQADAEAAAGIAABbQAAAFgDAEQgEAEgGAAQgEAAgEgEgAgKg4QgEgDAAgGIAAgCQAAgFAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAFIAAACQAAAGgEADQgFAEgGAAQgFAAgFgEg");
	this.shape_4.setTransform(-23.3,85.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3674").s().p("AAAA8QgFAAgEgDQgEgDgCgGIgnhXIgBgHQAAgFAEgEQAEgEAFAAQAFAAAEADQACACACAFIAdBMIAfhNQACgEACgCQADgDAFAAQAFAAAEAEQAEAEAAAFIgBAGIgnBYQgCAGgEADQgEADgFAAg");
	this.shape_5.setTransform(-31.9,87.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3674").s().p("AgMA8IgMgEQgLgFgIgIQgJgIgEgLIgEgMIgBgMIAAAAQAAgHAFgQQAEgKAJgJQAIgIALgFIAMgEIAMgBQAJAAAQAFQALAFAIAIQAJAJAEAKQAFAQAAAHIAAAAIgBAMIgEAMQgEAKgJAJQgIAIgLAFQgQAEgJABgAgOgiQgGADgFAFQgEAFgDAHQgCAHAAAHIAAAAQAAAHACAIQADAGAFAFQAFAFAGAEQAHACAGAAQAIAAAHgCQAGgEAFgFQAEgEADgHQACgHAAgIIAAAAQAAgGgCgIQgDgGgFgFQgFgGgGgDQgHgCgHAAQgHAAgHACg");
	this.shape_6.setTransform(-44.7,87.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3674").s().p("AgeA4QgDgEgBgGIAAhbQABgFADgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAAAMQAFgLAGgHIAIgGIAJgBQAGAAAEADQADAEABAGQgBAFgDADQgCAEgFABQgIABgFADQgGAEgFAFQgCAGgDAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgFAAQgGAAgEgDg");
	this.shape_7.setTransform(-54.9,87.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3674").s().p("Ag4BJQgDgDAAgGIAAh+QAAgGADgDQAEgEAGgBQAFABAEAEQAFADAAAGIAAAHQAHgKAIgGQAGgCAFgCQAGgCAGAAQAKAAAKAFQAJADAIAIQAIAIAEALQAFAQAAAJIAAABIgBAOIgEALQgEAKgIAJQgHAIgKADQgKAFgKAAQgGgBgGgBIgLgFQgJgFgGgJIAAApQAAAGgFADQgEAEgFABQgGgBgEgEgAgMgzQgGADgFAFQgFAFgCAGQgDAHAAAIIAAABQAAAIADAIQACAFAFAFQAFAFAGADQAGACAGAAQAGAAAHgCQAFgDAFgFQAFgFACgFQADgIAAgIIAAgBQAAgIgDgHQgCgHgFgFQgFgEgFgDQgHgDgGABQgGgBgGADg");
	this.shape_8.setTransform(-66.2,89.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgEgLIgEgMIgBgNIAAAAQAAgMAEgKQAEgLAIgJQAHgIALgFIAKgDIALgCQAHAAAHACQAFABAGACQAKAFAHAJQAHAIADALQAEAJAAALQAAAEgEAEQgEAEgFgBIhIAAQABAIAEAFQADAGAEAEQAEADAGACQAFACAGAAQAIAAAHgDQAGgDAHgEQADgCADgBQAEAAAEADQADADAAAFQAAAEgEAEQgIAHgKAEQgKAFgNAAQgMAAgLgFgAAegHIgDgMQgDgGgDgEQgDgEgGgDQgFgCgHAAQgFAAgFACQgFACgEAFQgEAEgDAGQgCAFgBAHIA7AAIAAAAg");
	this.shape_9.setTransform(-7.7,60.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3674").s().p("AgFA8IgLgEQgLgEgIgJQgIgIgFgLQgEgLAAgNIAAAAQAAgLAEgLQAFgLAIgJQAIgIALgFIALgDIAMgCQANABALAEQAJADAIAHQAEADAAAGQAAAGgEACQgDAEgFAAQgFAAgDgDQgGgEgFgDQgHgDgHAAQgHAAgFADQgGAEgFAEQgEAGgDAHQgCAGAAAHIAAAAQAAAIACAHQADAGAEAFQAFAFAGADQAGADAIAAQAHAAAGgDQAGgCAGgFQADgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgIAIgKAEQgOAEgKABg");
	this.shape_10.setTransform(-19.7,60.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3674").s().p("AgIBNQgEgEAAgFIAAhbQAAgGAEgEQAEgEAEAAQAGAAAEAEQADAEAAAGIAABbQAAAFgDAEQgEAEgGAAQgEAAgEgEgAgKg4QgEgDAAgGIAAgCQAAgFAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAFIAAACQAAAGgEADQgFAEgGAAQgFAAgFgEg");
	this.shape_11.setTransform(-28.2,58.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3674").s().p("AAAA8QgFAAgEgDQgEgDgCgGIgnhXIgBgHQAAgFAEgEQAEgEAFAAQAFAAAEADQACACACAFIAdBMIAfhNQACgEACgCQADgDAFAAQAFAAAEAEQAEAEAAAFIgBAGIgnBYQgCAGgEADQgEADgFAAg");
	this.shape_12.setTransform(-36.9,60.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3674").s().p("AgeA4QgEgEABgGIAAhbQgBgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAMQAEgLAHgHIAJgGIAIgBQAGAAAEADQAEAEgBAGQABAFgEADQgDAEgFABQgGABgGADQgGAEgEAFQgDAGgDAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgGAAQgFAAgEgDg");
	this.shape_13.setTransform(-46.3,60.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgFgLIgDgMIgBgNIAAAAQAAgMAEgKQAEgLAHgJQAIgIALgFIALgDIAKgCQAIAAAFACQAHABAFACQAKAFAHAJQAHAIAEALQADAJAAALQAAAEgEAEQgEAEgEgBIhIAAQABAIACAFQADAGAFAEQAEADAGACQAFACAGAAQAIAAAHgDQAGgDAGgEQADgCAEgBQAEAAAEADQADADAAAFQAAAEgEAEQgIAHgKAEQgKAFgOAAQgLAAgLgFgAAegHIgDgMQgDgGgDgEQgDgEgGgDQgFgCgHAAQgEAAgGACQgFACgEAFQgEAEgDAGQgCAFgBAHIA7AAIAAAAg");
	this.shape_14.setTransform(-57.2,60.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3674").s().p("AgTA4QgMgDgJgHQgFgDAAgGQAAgFADgDQADgDAEAAQAEABACABQAJAFAIADQAIADAIAAQAIAAAFgEQAFgCAAgHIAAAAQAAgGgIgEIgRgGQgSgGgHgEQgGgEgDgFQgCgHAAgIQAAgIACgGQAEgHAFgEQAGgFAIgCQAHgDAIAAQAJAAAJADQAKACAIAFQAHACgBAIQAAAEgCADQgDADgFAAIgGgBIgNgGQgIgCgGAAQgGAAgFADQgEAEAAAEIAAABQAAAFAIAEQAEADANAEIANAFQAHADAEACQAGAFADAFQADAGAAAHIAAABQAAAIgDAIQgEAGgGAFQgFAFgIACQgIACgJAAQgLAAgLgEg");
	this.shape_15.setTransform(-68.6,60.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3674").s().p("AgeA4QgDgEAAgGIAAhbQAAgFADgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAMQAEgLAIgHIAIgGIAIgBQAGAAAEADQAEAEgBAGQABAFgEADQgDAEgFABQgGABgGADQgGAEgFAFQgDAGgCAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgGAAQgFAAgEgDg");
	this.shape_16.setTransform(24.2,34);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3674").s().p("AgcA4QgHgCgGgHQgFgFgDgIQgCgJAAgJIAAg9QAAgGADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAAA1QAAAGACAGQACAEADAEQADAEAFACQAEACAGAAQAFAAAFgCQAFgDADgDQAEgEABgFQACgFAAgHIAAg0QAAgGAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAABbQAAAFgEAEQgEADgFAAQgGABgEgEQgEgEAAgFIAAgHQgGAKgIAFIgKAEQgEACgHAAQgKAAgIgEg");
	this.shape_17.setTransform(13.1,34.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A3674").s().p("AgMA8IgMgEQgLgEgIgJQgJgJgEgKIgEgLIgBgNIAAAAQAAgHAFgPQAEgMAJgHQAIgJALgFIAMgDIAMgBQAJgBAQAFQALAFAIAIQAJAJAEALQAFAPAAAHIAAAAIgBAMIgEAMQgEAKgJAJQgIAIgLAFQgQAEgJAAgAgOgiQgGAEgFAEQgEAGgDAHQgCAGAAAHIAAAAQAAAHACAIQADAGAFAFQAFAGAGACQAHADAGAAQAIAAAHgDQAGgCAFgGQAEgEADgHQACgHAAgIIAAAAQAAgHgCgGQgDgHgFgFQgFgGgGgDQgHgDgHAAQgHAAgHADg");
	this.shape_18.setTransform(0,34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3674").s().p("AgsBJQgDgBgDgCQgDgDABgFQAAgEADgEQADgDAEAAIAFABIAKACQAFAAAEgDQADgDAEgHIABgCIgrhfIgCgHQAAgFAEgEQAEgEAFAAQAFAAADADQADACADAFIAdBNIAdhNQACgEADgDQADgDAGAAQAEAAAFAEQADAEAAAFIgBAGIgrBlQgDAJgEAGQgEAGgEAEQgEAEgGACQgGACgGAAQgLAAgIgEg");
	this.shape_19.setTransform(-12.7,35.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3674").s().p("ABBA4QgEgEAAgFIAAg1QAAgHgBgFQgCgGgDgDQgDgEgEgCQgEgCgGAAQgGAAgEACQgFACgDAEQgDADgCAGQgCAFAAAHIAAA1QAAAFgEAEQgEAEgFAAQgFAAgEgEQgEgEAAgFIAAg1QAAgHgBgFQgCgGgDgDQgDgEgEgCQgFgCgFAAQgGAAgEACQgFACgDAEQgDAEgCAFQgCAGAAAGIAAA1QAAAFgEAEQgEAEgFAAQgGAAgEgEQgDgEAAgFIAAhbQAAgGADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAAAFQAHgJAHgFQAEgDAFgBIAMgCQAHAAAFACIAKAEQAEACADAEIAFAJQAIgKAJgFIAKgEQAGgCAGAAQAKAAAHADQAIADAFAGQAGAFACAJQADAIAAALIAAA9QAAAFgEAEQgDAEgGAAQgGAAgEgEg");
	this.shape_20.setTransform(-34.4,33.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3674").s().p("AgMA8IgMgEQgLgEgIgJQgJgJgEgKIgEgLIgBgNIAAAAQAAgHAFgPQAEgMAJgHQAIgJALgFIAMgDIAMgBQAJgBAQAFQALAFAIAIQAJAJAEALQAFAPAAAHIAAAAIgBAMIgEAMQgEAKgJAJQgIAIgLAFQgQAEgJAAgAgOgiQgGAEgFAEQgEAGgDAHQgCAGAAAHIAAAAQAAAHACAIQADAGAFAFQAFAGAGACQAHADAGAAQAIAAAHgDQAGgCAFgGQAEgEADgHQACgHAAgIIAAAAQAAgHgCgGQgDgHgFgFQgFgGgGgDQgHgDgHAAQgHAAgHADg");
	this.shape_21.setTransform(-51.2,34);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3674").s().p("AgeA4QgDgEAAgGIAAhbQAAgFADgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAMQAFgLAGgHIAIgGIAJgBQAGAAAEADQAEAEAAAGQAAAFgEADQgDAEgFABQgGABgGADQgGAEgEAFQgEAGgCAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgGAAQgFAAgEgDg");
	this.shape_22.setTransform(-61.4,34);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A3674").s().p("AgQBOQgFgEAAgFIAAhQIgEAAQgEgBgEgDQgDgDAAgFQAAgEADgDQAEgEAEAAIAEAAIAAgJQAAgJADgHQADgIAEgEQAFgFAGgCQAGgCAIgBIAOABQAEABACADQADADAAAFQAAAEgEADQgDAEgEAAIgGAAQgHAAgEADQgEAFAAAJIAAAGIAVAAQAEAAADAEQAEADAAAEQAAAFgEADQgDADgEABIgVAAIAABQQAAAFgDAEQgDADgGAAQgFAAgEgDg");
	this.shape_23.setTransform(-69.5,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A3674").s().p("AgBBJQgGgBgFgEQgEgEgDgGQgCgIAAgIIAAg9IgEAAQgFAAgDgDQgEgDAAgFQAAgFAEgDQADgDAFgBIAEAAIAAgUQAAgFAEgEQAEgDAFAAQAGAAADADQAEAEAAAFIAAAUIAUAAQAFABAEADQAEADAAAFQAAAFgEADQgEADgFAAIgUAAIAAA4QAAAHADAFQAEADAHAAIAGgBQAFAAADADQAEADAAAFQAAAHgHADQgJADgJABQgIgBgFgCg");
	this.shape_24.setTransform(42.7,5.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgFgLIgDgMIgBgNIAAAAQAAgLAEgLQAEgLAIgJQAHgIALgFIALgDIAKgBQAHAAAHABQAFABAGACQAKAGAHAIQAHAIADALQAEAJAAAKQAAAFgEAEQgEADgFAAIhHAAQABAIACAFQAEAGAEAEQAEADAGACQAGACAFAAQAIAAAHgDQAGgDAHgEQADgDADAAQAFAAADAEQADADAAAEQAAAEgEAEQgIAHgKAFQgKADgNAAQgMAAgLgDgAAegHIgDgMQgDgGgDgEQgEgEgFgDQgFgCgHAAQgEAAgGACQgFACgEAEQgEAFgDAFQgCAGgBAHIA7AAIAAAAg");
	this.shape_25.setTransform(32.6,7.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A3674").s().p("AgZBKQgKgCgLgFQgEgCgCgCQgCgDAAgEQAAgEAEgEQADgCAFAAIAEABQAIAEAJACQAJACAKABQAIAAAHgCQAHgDAEgEQAFgFACgGQADgIAAgIIAAgJQgLAMgGADQgFADgGABQgGACgGAAQgKAAgKgDQgJgEgIgHQgHgHgFgKQgEgJAAgNIAAgBQAAgIAFgOQAEgLAHgGQAIgIAJgDQAKgEAKAAQAGAAAGABIALAFQAJAFAIAIIAAgFQAAgFADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAABPQAAAOgEAMQgDAKgIAIQgDADgGADIgLAGQgRADgJAAQgMAAgMgDgAgMgzQgGACgFAEQgEAEgDAGQgCAHAAAGQAAAHACAHQADAFAFAEQAEAEAGACQAGACAGABQAHgBAGgCQAGgCAFgEQAFgEACgFQADgHAAgHQAAgGgDgGQgCgHgFgEQgFgEgGgCQgGgCgHAAQgGAAgGACg");
	this.shape_26.setTransform(19.1,8.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A3674").s().p("AAeA4QgEgEgBgFIAAg1QAAgHgCgFQgBgGgDgDQgDgEgFgCQgFgCgFAAQgFAAgFACQgFACgDAEQgEAEgCAFQgCAGABAGIAAA1QAAAFgFAEQgEAEgFAAQgFAAgFgEQgDgEAAgFIAAhbQAAgGADgEQAFgEAFAAQAFAAAEAEQAFAEAAAGIAAAFQAGgJAHgFQAFgDAFgBQAFgCAHAAQAKAAAHADQAHADAGAGQAFAGADAIQADAJAAAKIAAA9QAAAFgEAEQgDAEgGAAQgGAAgDgEg");
	this.shape_27.setTransform(0.6,7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A3674").s().p("AgaA5QgIgCgFgEQgGgFgDgHQgDgGgBgJIAAAAQABgJADgIQAEgHAGgEQAGgEAJgCQAJgDAKAAQANAAASAFIAAgDQgBgGgBgFQgCgEgEgDQgEgEgFgCQgFgBgGAAIgOABIgMADIgEABQgEAAgEgDQgDgDAAgFQAAgIAHgDQAJgDAIgCQAJgBAKAAQANAAAKADQAKADAGAHQAGAGADAJQAEAJAAAMIAAA4QAAAFgFAEQgDADgGAAQgFAAgEgDQgDgDAAgFIAAgEQgHAHgJAFQgNAFgIAAQgJAAgHgDgAgJAEIgJAFQgEACgCAEQgCADAAAEIAAABQABAIAGAFQAHAFAJgBQAFAAAHgCQAFgBAEgDQAFgEACgEQACgFAAgFIAAgIQgQgFgKAAQgGAAgEABg");
	this.shape_28.setTransform(-12.2,7.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A3674").s().p("AgFA8IgLgEQgLgFgIgIQgIgJgFgKQgEgLAAgNIAAAAQAAgLAEgLQAFgLAIgIQAJgJAKgFIALgDIANgBQANAAAKADQAJAEAIAHQAEADAAAGQAAAFgEADQgDAFgFAAQgFAAgDgEQgGgEgFgCQgGgEgIAAQgHAAgGAEQgFADgFAEQgEAFgDAIQgDAGABAHIAAAAQgBAIADAHQADAHAEAEQAFAGAGACQAFADAJABQAHgBAGgDQAHgCAFgFQADgDAEAAQAFAAADADQAEAEAAAFQAAAFgEADQgIAIgKAEQgOAEgKAAg");
	this.shape_29.setTransform(-23.6,7.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A3674").s().p("AgcA4QgHgCgGgHQgFgFgDgIQgCgJAAgJIAAg9QAAgGADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAAA1QAAAGACAFQACAFADAEQADAEAFACQAEACAGAAQAFAAAFgCQAFgCADgEQAEgEABgFQACgFAAgHIAAg0QAAgGAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAABaQAAAGgEADQgEAEgFAAQgGAAgEgDQgEgEAAgGIAAgGQgGAKgIAFIgKAEQgEACgHAAQgKAAgIgEg");
	this.shape_30.setTransform(-41.6,7.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A3674").s().p("AgMA8IgMgEQgLgFgIgIQgJgJgEgKIgEgLIgBgNIAAAAQAAgHAFgPQAEgMAJgHQAIgJALgFIAMgDIAMgBQAJgBAQAFQALAFAIAIQAJAJAEALQAFAPAAAHIAAAAIgBAMIgEALQgEAMgJAHQgIAJgLAFQgQAEgJAAgAgOghQgGADgFAEQgEAFgDAIQgCAGAAAHIAAAAQAAAHACAIQADAGAFAFQAFAGAGACQAHADAGABQAIgBAHgDQAGgCAFgGQAEgFADgGQACgHAAgIIAAAAQAAgHgCgGQgDgHgFgFQgFgFgGgDQgHgEgHAAQgHAAgHAEg");
	this.shape_31.setTransform(-54.7,7.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A3674").s().p("AgsBJQgDgBgDgCQgCgDAAgFQAAgEADgEQADgDAFAAIAEABIAJACQAHAAADgDQADgDAEgHIABgCIgshfIgBgHQAAgFAEgEQADgEAHAAQAEAAAEADQACACACAFIAfBNIAdhNQACgEACgDQADgDAFAAQAGAAADAEQAEAEAAAFIgBAGIgqBlQgEAJgEAGQgEAGgEAEQgFAEgFACQgGACgGAAQgLAAgIgEg");
	this.shape_32.setTransform(-67.5,8.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A3674").s().p("AgTA5QgMgEgJgGQgFgEAAgGQAAgEADgDQADgDAEgBQADAAADACQAIAGAJADQAIACAIAAQAIAAAFgEQAEgCABgHIAAAAQAAgGgIgEIgRgGQgSgGgHgEQgGgEgDgFQgCgHAAgHQAAgJACgHQADgGAGgEQAGgFAIgDQAHgCAIAAQAJAAAKACQAJADAJAFQAFACAAAHQAAAFgCADQgDADgFAAIgGgBIgNgGQgIgCgGAAQgHAAgEADQgEADAAAFIAAABQAAAFAIAFQAEACANAEIANAFQAHADAEADQAGAEADAFQADAGAAAHIAAAAQAAAJgDAIQgEAGgGAFQgFAEgIADQgIACgJAAQgLAAgLgDg");
	this.shape_33.setTransform(32.8,-19.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2A3674").s().p("AgZBOQgKgEgHgIQgIgIgEgKIgEgNIgBgOIAAAAQAAgJAFgQQAEgKAIgJQAHgHAKgEQAJgEALAAQAGAAAGABQAGACAFADQAIAFAIAKIAAgzQAAgGADgDQAEgEAGAAQAFAAAEAEQAEADAAAGIAACHQAAAGgEAEQgEAEgFAAQgGAAgEgEQgDgEAAgGIAAgHQgIALgIAEIgLAGQgGABgGAAQgKAAgKgEgAgMgNQgGADgEAFQgFAFgCAFQgDAIAAAIIAAAAQAAAJADAHQACAHAFAEQAEAFAGADQAHADAFAAQAHAAAGgDQAGgDAFgFQAFgEACgHQADgHAAgJIAAAAQAAgIgDgHQgCgGgFgFQgFgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_34.setTransform(20.6,-21.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgEgLIgEgMIgBgMIAAgBQAAgLAEgLQAEgLAHgJQAJgIAKgFIAKgDIAMgBQAGgBAGACQAHABAFACQAKAGAHAIQAHAIAEALQADAJAAAKQAAAFgEAEQgDAEgFAAIhJAAQACAGADAGQADAGAEADQAEAEAGACQAGACAFAAQAIAAAHgDQAHgCAFgFQADgDAEAAQAFABADADQADADAAAEQAAAEgEAEQgIAHgKAFQgLADgNAAQgLAAgLgDgAAegHIgDgMQgCgGgEgEQgEgEgFgDQgFgCgGAAQgGAAgFACQgFADgEADQgEAFgCAFQgDAGgBAHIA7AAIAAAAg");
	this.shape_35.setTransform(7.9,-19.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgEgLIgEgMIgBgMIAAgBQAAgLAEgLQAEgLAHgJQAJgIAKgFIAKgDIAMgBQAHgBAFACQAGABAGACQAKAGAHAIQAHAIADALQAEAJAAAKQAAAFgEAEQgDAEgGAAIhIAAQABAGAEAGQADAGAEADQAEAEAGACQAGACAFAAQAIAAAHgDQAHgCAFgFQADgDAEAAQAFABADADQADADAAAEQAAAEgEAEQgIAHgKAFQgLADgMAAQgMAAgLgDgAAegHIgDgMQgCgGgEgEQgDgEgGgDQgFgCgGAAQgGAAgFACQgFADgEADQgEAFgCAFQgDAGgBAHIA7AAIAAAAg");
	this.shape_36.setTransform(-4.5,-19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2A3674").s().p("Ag4BKQgDgFAAgFIAAh+QAAgGADgEQAEgDAGAAQAGAAADADQAEAEABAGIAAAHQAHgKAIgGQAGgCAFgCQAGgCAGABQAKAAAKADQAJAFAIAHQAIAIAEALQAFAQAAAJIAAABIgBANIgEAMQgEALgIAHQgHAIgKAFQgKADgKAAQgGABgHgCIgKgFQgJgFgGgJIAAApQgBAFgEAFQgDADgGAAQgGAAgEgDgAgMgzQgHADgEAFQgFAFgCAHQgDAGgBAIIAAABQABAJADAGQACAGAFAFQAEAFAHACQAGAEAGAAQAGAAAHgEQAFgCAFgEQAFgGACgGQADgGAAgJIAAgBQAAgIgDgGQgCgIgFgFQgFgEgFgDQgHgDgGAAQgGAAgGADg");
	this.shape_37.setTransform(-17.3,-18.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2A3674").s().p("AgSA5QgMgEgKgGQgFgEAAgGQAAgEADgDQADgDAEgBQADAAADACQAIAGAJADQAJACAGAAQAJAAAFgEQAFgCgBgHIAAAAQABgGgIgEIgRgGQgSgGgHgEQgFgEgDgFQgDgHgBgHQABgJADgHQACgGAHgEQAFgFAHgDQAIgCAIAAQAJAAAJACQAKADAIAFQAHACAAAHQAAAFgEADQgDADgEAAIgGgBIgOgGQgHgCgGAAQgHAAgEADQgEADAAAFIAAABQAAAFAIAFQAEACANAEIANAFQAHADAFADQAFAEADAFQADAGAAAHIAAAAQAAAJgDAIQgEAGgFAFQgGAEgIADQgIACgJAAQgKAAgLgDg");
	this.shape_38.setTransform(-29.7,-19.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgFgLIgDgMIgBgMIAAgBQAAgLAEgLQAEgLAHgJQAJgIAKgFIALgDIALgBQAGgBAGACQAHABAFACQAKAGAHAIQAHAIAEALQADAJAAAKQAAAFgEAEQgDAEgFAAIhIAAQABAGACAGQADAGAFADQAEAEAGACQAFACAGAAQAIAAAHgDQAHgCAFgFQAEgDADAAQAEABAEADQADADAAAEQAAAEgEAEQgIAHgKAFQgKADgOAAQgLAAgLgDgAAegHIgDgMQgDgGgDgEQgEgEgFgDQgFgCgGAAQgFAAgGACQgFADgEADQgEAFgCAFQgDAGgBAHIA7AAIAAAAg");
	this.shape_39.setTransform(-46.5,-19.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2A3674").s().p("AAeBOQgFgEAAgGIAAg2QAAgGgCgGQgBgEgDgEQgDgDgFgCQgEgCgGAAQgFAAgFACQgFACgEAEQgDADgCAFQgBAFAAAHIAAA1QAAAGgFAEQgEADgFAAQgGAAgEgDQgDgEAAgGIAAiHQAAgGADgEQAEgDAGAAQAFAAAEADQAFAEAAAGIAAAyQAGgJAHgFQAFgDAFgCQAFgBAHAAQAJAAAIADQAIADAFAGQAFAGADAIQADAIAAAJIAAA+QAAAGgEAEQgDADgGAAQgGAAgDgDg");
	this.shape_40.setTransform(-58.9,-22);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2A3674").s().p("AgBBJQgGgBgFgEQgEgEgCgGQgDgHAAgJIAAg9IgEAAQgFAAgDgDQgDgDAAgFQAAgFADgDQADgDAFAAIAEAAIAAgVQAAgFAEgEQAEgDAGAAQAFAAADADQAEAEAAAFIAAAVIAVAAQAFAAADADQADADABAFQgBAFgDADQgDADgFAAIgVAAIAAA4QAAAHAEAFQADACAHAAIAHAAQAEAAADADQAEAEAAAEQAAAHgHADQgJAEgKAAQgHAAgFgDg");
	this.shape_41.setTransform(-69.5,-21.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2A3674").s().p("AgBBKQgGgCgEgEQgFgEgDgGQgCgIAAgJIAAg8IgEAAQgFABgEgEQgDgDAAgFQAAgFADgEQAEgCAFAAIAEAAIAAgVQAAgFAEgEQAEgEAFAAQAGAAADAEQAEAEAAAFIAAAVIAUAAQAFAAAEACQADAEAAAFQAAAFgDADQgEAEgFgBIgUAAIAAA4QAAAHADAFQAEACAHAAIAGAAQAFAAAEADQADADAAAFQAAAHgHADQgJAEgJAAQgIAAgFgCg");
	this.shape_42.setTransform(46.2,-48.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2A3674").s().p("AgcA4QgHgCgGgHQgFgFgDgIQgCgJAAgJIAAg+QAAgFADgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAAA1QAAAHACAFQACAGADADQADAEAFACQAEABAGAAQAFAAAFgBQAFgCADgEQAEgEABgFQACgGAAgGIAAg1QAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAABbQAAAGgEADQgEAFgFAAQgGAAgEgEQgEgEAAgGIAAgFQgGAJgIAFIgKAFQgEABgHAAQgKAAgIgEg");
	this.shape_43.setTransform(35.8,-46.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2A3674").s().p("AgMA7IgMgDQgLgEgIgJQgJgIgEgLIgEgMIgBgLIAAgBQAAgHAFgQQAEgLAJgHQAIgJALgFIAMgEIAMAAQAJAAAQAEQALAFAIAIQAJAIAEALQAFAPAAAIIAAAAIgBAMIgEALQgEAMgJAHQgIAJgLAFQgQAFgJgBgAgOghQgGACgFAGQgEAEgDAHQgCAHAAAHIAAAAQAAAIACAGQADAHAFAGQAFAEAGADQAHAEAGAAQAIAAAHgEQAGgDAFgEQAEgGADgGQACgHAAgHIAAgBQAAgGgCgIQgDgGgFgFQgFgFgGgDQgHgDgHgBQgHABgHADg");
	this.shape_44.setTransform(22.7,-46.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2A3674").s().p("AgGBRIgLgGQgJgFgGgIIAAAFQAAAGgFADQgEAFgFAAQgGAAgEgFQgDgDAAgGIAAiHQAAgGADgEQAEgDAGAAQAFAAAEADQAFAEAAAGIAAA0QAHgLAIgFQAGgDAFgBQAGgCAGAAQAKAAAKAEQAJAEAIAHQAIAIAEALQAFAPAAAKIAAAAIgBAOIgEAMQgEALgIAIQgHAIgKAEQgKAEgKAAQgGAAgGgBgAgMgNQgGADgFAFQgFAFgCAGQgDAHAAAIIAAAAQAAAJADAHQACAHAFAEQAFAFAGADQAGADAGAAQAGAAAHgDQAFgDAFgEQAFgFACgHQADgHAAgJIAAAAQAAgIgDgHQgCgGgFgFQgFgFgFgDQgHgCgGAAQgGAAgGACg");
	this.shape_45.setTransform(9.4,-48.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2A3674").s().p("AgaA6QgIgDgFgEQgGgFgDgGQgDgIgBgIIAAAAQABgKADgHQAEgHAGgDQAGgFAJgCQAJgDAKAAQAMAAATAFIAAgDQgBgGgBgEQgCgGgEgCQgEgEgFgCQgFgBgGAAIgOABIgMAEIgEAAQgFAAgDgDQgDgDAAgFQAAgIAHgDQAJgDAIgBQAJgCAKAAQANAAAKADQAKAEAGAGQAGAGADAJQAEAJAAAMIAAA4QAAAGgFADQgDAEgGAAQgFAAgEgEQgEgDABgFIAAgEQgHAHgJAFQgNAFgIAAQgIAAgIgCgAgJAFIgJADQgEADgCAEQgBADAAAFIAAAAQAAAIAGAFQAHAFAJAAQAFAAAHgDQAFgBAEgDQAFgDACgFQACgFAAgFIAAgIQgQgFgKAAQgFAAgFACg");
	this.shape_46.setTransform(-4.2,-46.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2A3674").s().p("AAdA4QgDgEAAgFIAAg1QgBgHgCgFQgBgGgDgDQgDgEgFgCQgFgCgFAAQgFAAgFACQgFACgDAEQgEAEgCAFQgCAGABAGIAAA1QAAAFgFAEQgEAEgFAAQgGAAgEgEQgDgEAAgFIAAhbQAAgGADgEQAEgEAGAAQAFAAAEAEQAFAEAAAGIAAAFQAFgJAIgFQAFgDAGgBQAEgCAHAAQAKAAAHADQAHADAGAGQAFAGADAIQADAJAAAKIAAA9QAAAFgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_47.setTransform(-21.8,-46.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2A3674").s().p("AgeA4QgDgEAAgGIAAhbQAAgFADgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAMQAFgLAGgHIAIgGIAJgBQAGAAAEADQAEAEAAAGQAAAFgEADQgDAEgFABQgGABgGADQgGAEgEAFQgEAGgCAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgGAAQgFAAgEgDg");
	this.shape_48.setTransform(-31.7,-46.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2A3674").s().p("AgaA6QgIgDgFgEQgGgFgDgGQgEgIABgIIAAAAQgBgKAEgHQADgHAHgDQAGgFAJgCQAIgDALAAQANAAARAFIAAgDQAAgGgBgEQgCgGgDgCQgFgEgEgCQgGgBgGAAIgOABIgMAEIgEAAQgEAAgEgDQgDgDAAgFQAAgIAHgDQAJgDAIgBQAKgCAKAAQANAAAJADQAKAEAGAGQAGAGADAJQADAJAAAMIAAA4QAAAGgDADQgEAEgFAAQgGAAgEgEQgEgDAAgFIAAgEQgGAHgIAFQgNAFgKAAQgHAAgIgCgAgKAFIgJADQgDADgBAEQgCADAAAFIAAAAQgBAIAHAFQAGAFAKAAQAFAAAGgDQAGgBAEgDQAEgDADgFQACgFAAgFIAAgIQgPgFgLAAQgFAAgGACg");
	this.shape_49.setTransform(-42.7,-46.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgFgLIgDgMIgBgMIAAgBQAAgLAEgMQAEgLAHgIQAJgIAKgFIALgEIALAAQAGgBAGACQAHABAFACQAKAGAHAIQAHAIAEAKQADAKAAAKQAAAFgEAEQgDAEgFAAIhIAAQABAGACAGQADAGAFADQAEAEAGACQAFACAGAAQAIAAAHgDQAHgCAFgFQAEgCADAAQAEAAAEADQADADAAAEQAAAFgEADQgIAIgKAEQgKADgOAAQgLAAgLgDgAAegHIgDgMQgDgGgDgEQgEgEgFgCQgFgDgGAAQgFAAgGADQgFACgEADQgEAFgCAFQgDAGgBAHIA7AAIAAAAg");
	this.shape_50.setTransform(-54.6,-46.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2A3674").s().p("AgoBOQgGgBgEgEQgDgDAAgGIAAh/QAAgGADgDQAEgFAGAAQAGAAADAFQAEADABAGIAAB0IBEAAQAFAAAEADQAEAEAAAFQAAAFgEAEQgEAEgFAAg");
	this.shape_51.setTransform(-66.5,-48.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.9,-58.5,15.3,22);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ag7BuIAAjbIB3AAIAADbg");
	var mask_graphics_1 = new cjs.Graphics().p("Ah0BuIAAjbIDpAAIAADbg");
	var mask_graphics_2 = new cjs.Graphics().p("AjHBuIAAjbIGPAAIAADbg");
	var mask_graphics_3 = new cjs.Graphics().p("AkKBuIAAjbIIVAAIAADbg");
	var mask_graphics_4 = new cjs.Graphics().p("AlOBuIAAjbIKdAAIAADbg");
	var mask_graphics_5 = new cjs.Graphics().p("AlnBuIAAjbILPAAIAADbg");
	var mask_graphics_6 = new cjs.Graphics().p("AmCBuIAAjbIMGAAIAADbg");
	var mask_graphics_7 = new cjs.Graphics().p("AnQBuIAAjbIOhAAIAADbg");
	var mask_graphics_8 = new cjs.Graphics().p("AnjD4IAAjdIB4AAIAADdgAm9gbIAAjbIOhAAIAADbg");
	var mask_graphics_9 = new cjs.Graphics().p("AnjD4IAAjdIEiAAIAADdgAm9gbIAAjbIOhAAIAADbg");
	var mask_graphics_10 = new cjs.Graphics().p("AnjD4IAAjdIG4AAIAADdgAm9gbIAAjbIOhAAIAADbg");
	var mask_graphics_11 = new cjs.Graphics().p("AnjD4IAAjdIIvAAIAADdgAm9gbIAAjbIOhAAIAADbg");
	var mask_graphics_12 = new cjs.Graphics().p("AnkD4IAAjdIKKAAIAADdgAm8gbIAAjbIOhAAIAADbg");
	var mask_graphics_13 = new cjs.Graphics().p("AnkD4IAAjdILgAAIAADdgAm8gbIAAjbIOhAAIAADbg");
	var mask_graphics_14 = new cjs.Graphics().p("AnkD4IAAjdINaAAIAADdgAm8gbIAAjbIOhAAIAADbg");
	var mask_graphics_15 = new cjs.Graphics().p("AnkD4IAAjdIPJAAIAADdgAm8gbIAAjbIOhAAIAADbg");
	var mask_graphics_16 = new cjs.Graphics().p("AoLF4IAAjKICqAAIAADKgAm9B3IAAjbIPJAAIAADbgAmVibIAAjcIOhAAIAADcg");
	var mask_graphics_17 = new cjs.Graphics().p("AoLF4IAAjKIElAAIAADKgAm9B3IAAjbIPJAAIAADbgAmVibIAAjcIOhAAIAADcg");
	var mask_graphics_18 = new cjs.Graphics().p("AoLF4IAAjKIF3AAIAADKgAm9B3IAAjbIPJAAIAADbgAmVibIAAjcIOhAAIAADcg");
	var mask_graphics_19 = new cjs.Graphics().p("AoLF4IAAjKIH0AAIAADKgAm8B3IAAjbIPIAAIAADbgAmVibIAAjcIOhAAIAADcg");
	var mask_graphics_20 = new cjs.Graphics().p("AoLF4IAAjKIJMAAIAADKgAm8B3IAAjbIPIAAIAADbgAmVibIAAjcIOhAAIAADcg");
	var mask_graphics_21 = new cjs.Graphics().p("AoMF4IAAjKILFAAIAADKgAm8B3IAAjbIPJAAIAADbgAmUibIAAjcIOhAAIAADcg");
	var mask_graphics_22 = new cjs.Graphics().p("AoMF4IAAjKIM6AAIAADKgAm8B3IAAjbIPJAAIAADbgAmUibIAAjcIOhAAIAADcg");
	var mask_graphics_23 = new cjs.Graphics().p("AoMF4IAAjKIPdAAIAADKgAm8B3IAAjbIPJAAIAADbgAmUibIAAjcIOhAAIAADcg");
	var mask_graphics_24 = new cjs.Graphics().p("AmjIJIAAjKIBzAAIAADKgAoMDnIAAjKIPdAAIAADKgAm8gZIAAjcIPJAAIAADcgAmUksIAAjcIOhAAIAADcg");
	var mask_graphics_25 = new cjs.Graphics().p("AmjIJIAAjKID+AAIAADKgAoMDnIAAjKIPdAAIAADKgAm8gZIAAjcIPJAAIAADcgAmUksIAAjcIOhAAIAADcg");
	var mask_graphics_26 = new cjs.Graphics().p("AmjIJIAAjKIF0AAIAADKgAoMDnIAAjKIPdAAIAADKgAm8gZIAAjcIPJAAIAADcgAmUksIAAjcIOhAAIAADcg");
	var mask_graphics_27 = new cjs.Graphics().p("AmjIJIAAjKIHuAAIAADKgAoMDnIAAjKIPdAAIAADKgAm8gZIAAjcIPJAAIAADcgAmUksIAAjcIOhAAIAADcg");
	var mask_graphics_28 = new cjs.Graphics().p("AmjIJIAAjeIJ/AAIAADegAoMDnIAAjKIPdAAIAADKgAm8gZIAAjcIPJAAIAADcgAmUksIAAjcIOhAAIAADcg");
	var mask_graphics_29 = new cjs.Graphics().p("AmjIJIAAjeIMAAAIAADegAoMDnIAAjKIPdAAIAADKgAm8gZIAAjcIPJAAIAADcgAmUksIAAjcIOhAAIAADcg");
	var mask_graphics_30 = new cjs.Graphics().p("AmhKJIAAi/IB9AAIAAC/gAmjGJIAAjeIMAAAIAADegAoMBoIAAjKIPdAAIAADKgAm8iZIAAjcIPJAAIAADcgAmUmsIAAjcIOhAAIAADcg");
	var mask_graphics_31 = new cjs.Graphics().p("AmiKJIAAi/IDpAAIAAC/gAmjGJIAAjeIMAAAIAADegAoMBoIAAjKIPdAAIAADKgAm8iZIAAjcIPJAAIAADcgAmUmsIAAjcIOhAAIAADcg");
	var mask_graphics_32 = new cjs.Graphics().p("AmiKJIAAjTIGLAAIAADTgAmjGJIAAjeIMAAAIAADegAoMBoIAAjKIPdAAIAADKgAm8iZIAAjcIPJAAIAADcgAmUmsIAAjcIOhAAIAADcg");
	var mask_graphics_33 = new cjs.Graphics().p("AmiKJIAAjTIIWAAIAADTgAmjGJIAAjeIMAAAIAADegAoMBoIAAjKIPdAAIAADKgAm8iZIAAjcIPJAAIAADcgAmUmsIAAjcIOhAAIAADcg");
	var mask_graphics_34 = new cjs.Graphics().p("AmiKJIAAjTILbAAIAADTgAmjGJIAAjeIMAAAIAADegAoMBoIAAjKIPdAAIAADKgAm8iZIAAjcIPJAAIAADcgAmUmsIAAjcIOhAAIAADcg");
	var mask_graphics_35 = new cjs.Graphics().p("AmiKJIAAjTIOPAAIAADTgAmjGJIAAjeIMAAAIAADegAoMBoIAAjKIPdAAIAADKgAm8iZIAAjcIPJAAIAADcgAmUmsIAAjcIOhAAIAADcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-73,y:-25.3}).wait(1).to({graphics:mask_graphics_1,x:-67.3,y:-25.3}).wait(1).to({graphics:mask_graphics_2,x:-59.1,y:-25.3}).wait(1).to({graphics:mask_graphics_3,x:-52.3,y:-25.3}).wait(1).to({graphics:mask_graphics_4,x:-45.6,y:-25.3}).wait(1).to({graphics:mask_graphics_5,x:-43.1,y:-25.3}).wait(1).to({graphics:mask_graphics_6,x:-40.4,y:-25.3}).wait(1).to({graphics:mask_graphics_7,x:-32.7,y:-25.3}).wait(1).to({graphics:mask_graphics_8,x:-34.6,y:-11.5}).wait(1).to({graphics:mask_graphics_9,x:-34.6,y:-11.5}).wait(1).to({graphics:mask_graphics_10,x:-34.6,y:-11.5}).wait(1).to({graphics:mask_graphics_11,x:-34.6,y:-11.5}).wait(1).to({graphics:mask_graphics_12,x:-34.7,y:-11.5}).wait(1).to({graphics:mask_graphics_13,x:-34.7,y:-11.5}).wait(1).to({graphics:mask_graphics_14,x:-34.7,y:-11.5}).wait(1).to({graphics:mask_graphics_15,x:-34.7,y:-11.5}).wait(1).to({graphics:mask_graphics_16,x:-38.6,y:1.3}).wait(1).to({graphics:mask_graphics_17,x:-38.6,y:1.3}).wait(1).to({graphics:mask_graphics_18,x:-38.6,y:1.3}).wait(1).to({graphics:mask_graphics_19,x:-38.6,y:1.3}).wait(1).to({graphics:mask_graphics_20,x:-38.6,y:1.3}).wait(1).to({graphics:mask_graphics_21,x:-38.7,y:1.3}).wait(1).to({graphics:mask_graphics_22,x:-38.7,y:1.3}).wait(1).to({graphics:mask_graphics_23,x:-38.7,y:1.3}).wait(1).to({graphics:mask_graphics_24,x:-38.7,y:15.8}).wait(1).to({graphics:mask_graphics_25,x:-38.7,y:15.8}).wait(1).to({graphics:mask_graphics_26,x:-38.7,y:15.8}).wait(1).to({graphics:mask_graphics_27,x:-38.7,y:15.8}).wait(1).to({graphics:mask_graphics_28,x:-38.7,y:15.8}).wait(1).to({graphics:mask_graphics_29,x:-38.7,y:15.8}).wait(1).to({graphics:mask_graphics_30,x:-38.7,y:28.6}).wait(1).to({graphics:mask_graphics_31,x:-38.7,y:28.6}).wait(1).to({graphics:mask_graphics_32,x:-38.7,y:28.6}).wait(1).to({graphics:mask_graphics_33,x:-38.7,y:28.6}).wait(1).to({graphics:mask_graphics_34,x:-38.7,y:28.6}).wait(1).to({graphics:mask_graphics_35,x:-38.7,y:28.6}).wait(62));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3674").s().p("AgKAMQgEgEgBgHIAAgBQABgHAEgEQAFgEAFAAQAHAAAEAEQAFAEgBAHIAAABQABAHgFAEQgEAEgHAAQgFAAgFgEg");
	this.shape.setTransform(7.4,88.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgEgLIgEgMIgBgMIAAgBQAAgLAEgLQAEgLAHgJQAJgIAKgFIAKgDIAMgBQAHgBAFACQAGABAGACQAKAGAHAIQAHAIADALQAEAJAAAKQAAAFgEAEQgDAEgGAAIhIAAQACAGADAGQADAGAEADQAEAEAGACQAGACAFAAQAIAAAHgDQAHgCAFgFQADgDAEAAQAFABADADQADADAAAEQAAAEgEAEQgIAHgKAFQgLADgNAAQgLAAgLgDgAAegHIgDgMQgCgGgEgEQgDgEgGgDQgFgCgGAAQgGAAgFACQgFADgEADQgEAFgCAFQgDAGgBAHIA7AAIAAAAg");
	this.shape_1.setTransform(-1.2,84.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3674").s().p("ABBA4QgEgEAAgFIAAg1QAAgHgBgFQgCgGgDgDQgDgEgEgCQgEgCgGAAQgGAAgEACQgFACgDAEQgDADgCAGQgCAFAAAHIAAA1QAAAFgEAEQgEAEgFAAQgFAAgEgEQgEgEAAgFIAAg1QAAgHgBgFQgCgGgDgDQgDgEgEgCQgFgCgFAAQgGAAgEACQgFACgDAEQgDAEgCAFQgCAGAAAGIAAA1QAAAFgEAEQgEAEgFAAQgGAAgEgEQgDgEAAgFIAAhbQAAgGADgEQAEgEAGAAQAFAAAEAEQAEAEAAAGIAAAFQAHgJAHgFQAEgDAFgBIAMgCQAHAAAFACIAKAEQAEACADAEIAFAJQAIgKAJgFIAKgEQAGgCAGAAQAKAAAHADQAIADAFAGQAGAFACAJQADAIAAALIAAA9QAAAFgEAEQgDAEgGAAQgGAAgEgEg");
	this.shape_2.setTransform(-17.4,84.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3674").s().p("AgMA7IgMgDQgLgFgIgIQgJgJgEgKIgEgLIgBgMIAAgBQAAgHAFgPQAEgMAJgHQAIgJALgFIAMgDIAMgBQAJgBAQAFQALAFAIAIQAJAJAEALQAFAPAAAHIAAAAIgBAMIgEALQgEAMgJAHQgIAJgLAFQgQAFgJgBgAgOghQgGACgFAGQgEAEgDAIQgCAGAAAHIAAAAQAAAIACAGQADAHAFAFQAFAGAGACQAHAEAGAAQAIAAAHgEQAGgCAFgGQAEgFADgGQACgHAAgHIAAgBQAAgHgCgGQgDgHgFgFQgFgFgGgDQgHgEgHAAQgHAAgHAEg");
	this.shape_3.setTransform(-34.2,84.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3674").s().p("AAeBOQgFgEAAgGIAAg2QAAgGgCgGQgBgEgDgEQgDgDgFgCQgEgCgGAAQgFAAgFACQgFACgEAEQgDADgCAFQgBAFAAAHIAAA1QAAAGgFAEQgEADgFAAQgGAAgEgDQgDgEAAgGIAAiHQAAgGADgEQAEgDAGAAQAFAAAEADQAFAEAAAGIAAAyQAGgJAHgFQAFgDAFgCQAFgBAHAAQAJAAAIADQAIADAFAGQAFAGADAIQADAIAAAJIAAA+QAAAGgEAEQgDADgGAAQgGAAgDgDg");
	this.shape_4.setTransform(-47.2,81.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3674").s().p("AgBBJQgGgBgFgEQgEgEgDgGQgCgHAAgJIAAg9IgEAAQgFAAgDgDQgEgDAAgFQAAgFAEgDQADgDAFAAIAEAAIAAgVQAAgFAEgEQAEgDAFAAQAGAAADADQAEAEAAAFIAAAVIAUAAQAFAAAEADQAEADAAAFQAAAFgEADQgEADgFAAIgUAAIAAA4QAAAHADAFQAEADAHAAIAGgBQAFAAADADQAEAEAAAEQAAAHgHADQgJAEgJAAQgIAAgFgDg");
	this.shape_5.setTransform(-63.5,82.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3674").s().p("AgaA5QgIgCgFgEQgGgFgDgHQgEgGABgJIAAAAQgBgJAEgIQADgHAHgDQAGgFAJgCQAIgDALAAQANAAARAFIAAgDQAAgGgBgEQgCgGgDgCQgFgEgEgCQgGgBgGAAIgOABIgMADIgEABQgEAAgEgDQgDgDAAgFQAAgIAHgDQAJgDAIgBQAKgCAKAAQANAAAJADQAKADAGAHQAGAGADAJQADAJAAAMIAAA4QAAAFgDAEQgEAEgFAAQgGAAgEgEQgEgDAAgFIAAgEQgGAHgIAFQgNAFgKAAQgHAAgIgDgAgKAFIgJADQgDADgBAEQgCADAAAFIAAAAQgBAIAHAFQAGAFAKAAQAFgBAGgCQAGgBAEgDQAEgDADgFQACgFAAgFIAAgIQgPgFgLAAQgFAAgGACg");
	this.shape_6.setTransform(-73.8,84.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3674").s().p("AgSA5QgMgEgKgGQgFgDAAgHQAAgEADgDQADgDAEAAQADAAADABQAIAFAJAEQAJACAGAAQAJAAAFgDQAFgEgBgFIAAgBQABgGgIgEIgRgGQgSgGgHgEQgFgEgDgFQgDgHAAgHQAAgJADgHQACgGAHgEQAFgFAHgDQAIgCAIAAQAJAAAJACQAKADAIAFQAHADAAAGQAAAFgDADQgDADgFAAIgGgBIgNgGQgIgCgGAAQgGAAgFADQgEADAAAGIAAAAQAAAGAIAEQAEACANAEIANAFQAHADAFADQAFAEADAFQADAGAAAHIAAAAQAAAJgDAIQgEAGgFAFQgGAEgIADQgIACgJAAQgKAAgLgDg");
	this.shape_7.setTransform(-12.1,57.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3674").s().p("AgZBOQgKgEgHgIQgIgIgEgLIgEgMIgBgOIAAAAQAAgKAFgPQAEgLAIgIQAHgHAKgEQAJgEALAAQAGAAAGACQAGABAFADQAIAFAIAKIAAgzQAAgGADgDQAEgEAGAAQAFAAAEAEQAEADAAAGIAACHQAAAGgEAEQgEAEgFAAQgGAAgEgEQgDgEAAgGIAAgHQgIALgIAEIgLAGQgGABgGAAQgKAAgKgEgAgMgNQgGADgEAFQgFAFgCAFQgDAIAAAIIAAAAQAAAJADAHQACAHAFAEQAEAFAGADQAHADAFAAQAHAAAGgDQAGgDAFgFQAFgEACgHQADgHAAgJIAAAAQAAgIgDgHQgCgGgFgFQgFgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_8.setTransform(-24.2,55.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgEgLIgEgMIgBgMIAAgBQAAgLAEgMQAEgLAIgIQAHgIALgFIAKgEIALAAQAHgBAHACQAFABAGACQAKAGAHAIQAHAIADAKQAEAKAAAKQAAAFgEAEQgEAEgFAAIhIAAQABAGAEAGQADAGAEADQAEAEAGACQAFACAGAAQAIAAAHgDQAGgCAHgFQADgCADAAQAEAAAEADQADADAAAEQAAAFgEADQgIAIgKAEQgKADgNAAQgMAAgLgDgAAegHIgDgMQgDgGgDgEQgDgEgGgCQgFgDgHAAQgFAAgFADQgFACgEADQgEAFgDAFQgCAGgBAHIA7AAIAAAAg");
	this.shape_9.setTransform(-37,57.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3674").s().p("AgTA5QgLgFgIgIQgIgIgFgLIgDgMIgBgMIAAgBQAAgLAEgMQAEgLAIgIQAHgIALgFIALgEIAKAAQAHgBAHACQAFABAGACQAKAGAHAIQAHAIADAKQAEAKAAAKQAAAFgEAEQgEAEgFAAIhHAAQAAAGADAGQAEAGAEADQAEAEAGACQAGACAFAAQAIAAAHgDQAGgCAHgFQADgCADAAQAFAAADADQADADAAAEQAAAFgEADQgIAIgKAEQgKADgNAAQgMAAgLgDgAAegHIgDgMQgDgGgDgEQgEgEgFgCQgFgDgHAAQgEAAgGADQgFACgEADQgEAFgDAFQgCAGgBAHIA7AAIAAAAg");
	this.shape_10.setTransform(-49.3,57.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3674").s().p("Ag3BKQgEgEAAgGIAAh+QAAgFAEgFQAEgDAFgBQAFABAFADQADAFAAAFIAAAHQAHgKAJgFQAFgEAGgBQAGgCAGABQAKAAAKADQAKAFAHAHQAIAIAEALQAFAQAAAKIAAAAIgCANIgDAMQgEALgIAIQgHAIgKAEQgJADgLAAQgGAAgHgBIgKgFQgIgFgIgJIAAApQAAAGgDAEQgFADgFAAQgFAAgEgDgAgNgzQgGADgEAFQgFAFgDAHQgDAGAAAJIAAAAQAAAJADAGQADAGAFAFQAEAFAGACQAHAEAGAAQAGAAAGgEQAHgCAEgEQAEgGADgGQADgGAAgJIAAAAQAAgJgDgGQgDgIgEgEQgEgFgHgDQgGgDgGAAQgGAAgHADg");
	this.shape_11.setTransform(-62.1,59);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3674").s().p("AgTA5QgLgEgKgGQgFgDAAgHQAAgEADgDQADgDAFAAQADAAACABQAIAFAJAEQAIACAHAAQAJAAAFgDQAEgEAAgFIAAgBQAAgGgHgEIgRgGQgSgGgHgEQgGgEgDgFQgDgHAAgHQAAgJADgHQAEgGAFgEQAGgFAIgDQAHgCAIAAQAJAAAKACQAJADAJAFQAFADAAAGQAAAFgDADQgDADgEAAIgFgBIgPgGQgHgCgGAAQgGAAgFADQgEADAAAGIAAAAQAAAGAIAEQAEACANAEIANAFQAHADAEADQAGAEADAFQADAGAAAHIAAAAQAAAJgDAIQgDAGgHAFQgFAEgIADQgIACgJAAQgKAAgMgDg");
	this.shape_12.setTransform(-74.6,57.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3674").s().p("AgBBKQgGgCgFgEQgEgEgCgGQgDgIAAgJIAAg8IgEAAQgFABgDgEQgDgEAAgEQAAgFADgEQADgCAFAAIAEAAIAAgUQAAgGAEgDQAEgFAGAAQAFAAADAFQAEADAAAGIAAAUIAVAAQAFAAADACQADAEABAFQgBAEgDAEQgDAEgFgBIgVAAIAAA4QAAAIAEAEQADACAHAAIAHAAQAEAAADAEQAEADAAAEQAAAHgHAEQgJADgKAAQgHAAgFgCg");
	this.shape_13.setTransform(-3.8,28.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgEgLIgEgMIgBgMIAAgBQAAgMAEgLQAEgLAHgIQAJgIAKgFIAKgEIAMgBQAHABAFABQAGABAGADQAKAEAHAJQAHAIADAKQAEAKAAAKQAAAFgEAEQgDADgGABIhIAAQABAGAEAGQADAFAEAEQAEAEAGACQAGACAFAAQAIAAAHgDQAHgCAFgFQADgCAEAAQAFAAADACQADADAAAFQAAAFgEADQgIAIgKADQgLAEgMAAQgMAAgLgEgAAegHIgDgMQgCgGgEgEQgDgEgGgCQgFgDgGAAQgGAAgFADQgFACgEADQgEAFgCAFQgDAGgBAHIA7AAIAAAAg");
	this.shape_14.setTransform(-13.9,30.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3674").s().p("AAdA4QgEgEAAgFIAAg1QAAgHgBgFQgCgGgDgDQgDgEgFgCQgEgCgHAAQgEAAgFACQgFACgEAEQgDAEgCAFQgCAGAAAGIAAA1QAAAFgDAEQgEAEgGAAQgFAAgEgEQgEgEAAgFIAAhbQAAgGAEgEQAEgEAFAAQAGAAAEAEQADAEAAAGIAAAFQAGgJAJgFQAEgDAFgBQAFgCAGAAQAKAAAIADQAHADAGAGQAGAGACAIQADAJAAAKIAAA9QAAAFgEAEQgEAEgFAAQgGAAgEgEg");
	this.shape_15.setTransform(-26.4,30.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3674").s().p("AgeA4QgEgEAAgGIAAhbQAAgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAAAMQAEgLAIgHIAIgGIAIgBQAGAAAEADQADAEAAAGQAAAFgDADQgDAEgEABQgIABgFADQgGAEgFAFQgDAGgCAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgFAAQgGAAgEgDg");
	this.shape_16.setTransform(-36.3,30.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgEgLIgEgMIgBgMIAAgBQAAgMAEgLQAEgLAHgIQAJgIAKgFIAKgEIAMgBQAHABAFABQAGABAGADQAKAEAHAJQAHAIADAKQAEAKAAAKQAAAFgEAEQgDADgGABIhIAAQACAGADAGQADAFAEAEQAEAEAGACQAGACAFAAQAIAAAHgDQAHgCAFgFQADgCAEAAQAFAAADACQADADAAAFQAAAFgEADQgIAIgKADQgLAEgNAAQgLAAgLgEgAAegHIgDgMQgCgGgEgEQgDgEgGgCQgFgDgGAAQgGAAgFADQgFACgEADQgEAFgCAFQgDAGgBAHIA7AAIAAAAg");
	this.shape_17.setTransform(-47.1,30.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A3674").s().p("AgBBKQgGgCgFgEQgEgEgDgGQgCgIAAgJIAAg8IgEAAQgFABgDgEQgDgEgBgEQABgFADgEQADgCAFAAIAEAAIAAgUQAAgGAEgDQAEgFAGAAQAFAAADAFQAEADAAAGIAAAUIAUAAQAGAAADACQADAEABAFQgBAEgDAEQgDAEgGgBIgUAAIAAA4QAAAIAEAEQADACAHAAIAGAAQAFAAADAEQAEADAAAEQAAAHgHAEQgJADgJAAQgIAAgFgCg");
	this.shape_18.setTransform(-57.5,28.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A3674").s().p("AAeA4QgFgEAAgFIAAg1QAAgHgBgFQgCgGgDgDQgEgEgEgCQgEgCgHAAQgEAAgFACQgFACgEAEQgDAEgCAFQgCAGAAAGIAAA1QAAAFgEAEQgDAEgGAAQgGAAgDgEQgEgEAAgFIAAhbQAAgGAEgEQADgEAGAAQAGAAADAEQAEAEAAAGIAAAFQAGgJAIgFQAFgDAFgBQAFgCAGAAQAKAAAIADQAHADAGAGQAGAGACAIQADAJAAAKIAAA9QAAAFgEAEQgDAEgGAAQgGAAgDgEg");
	this.shape_19.setTransform(-67.7,30.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A3674").s().p("AgJBNQgDgEAAgFIAAhbQAAgGADgEQAEgEAFAAQAFAAAEAEQAFAEAAAGIAABbQAAAFgFAEQgEAEgFAAQgFAAgEgEgAgKg4QgEgDAAgGIAAgCQAAgFAEgEQAFgEAFAAQAGAAAEAEQAFAEAAAFIAAACQAAAGgFADQgEAEgGAAQgFAAgFgEg");
	this.shape_20.setTransform(-76.8,28.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A3674").s().p("AgeA4QgEgEABgGIAAhbQgBgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAMQAFgLAGgHIAJgGIAIgBQAGAAAEADQADAEAAAGQAAAFgDADQgDAEgFABQgGABgGADQgGAEgEAFQgDAGgDAIQgCAHAAAKIAAAiQAAAGgEADQgEAEgGAAQgFAAgEgDg");
	this.shape_21.setTransform(7.3,3.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgFgLIgDgMIgBgMIAAgBQAAgMAEgLQAEgLAIgIQAHgIALgFIALgEIAKgBQAIABAGABQAGABAFADQAKAEAHAJQAHAIAEAKQADAKAAAKQAAAFgEAEQgEADgEABIhIAAQABAGACAGQADAFAFAEQAEAEAGACQAGACAFAAQAIAAAHgDQAGgDAHgEQADgDADABQAEAAAEACQADADAAAFQAAAFgEADQgIAIgKADQgLAEgNABQgLgBgLgEgAAegHIgDgMQgDgGgDgEQgEgEgFgCQgFgDgHAAQgEAAgGADQgFABgEAEQgEAFgDAGQgCAFgBAHIA7AAIAAAAg");
	this.shape_22.setTransform(-3.5,3.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A3674").s().p("AgBBKQgGgCgEgEQgFgEgCgGQgDgIAAgJIAAg8IgEAAQgFAAgEgDQgCgEAAgEQAAgFACgEQAEgCAFAAIAEAAIAAgUQAAgGAEgDQAEgFAFAAQAGAAADAFQAEADAAAGIAAAUIAVAAQAEAAAEACQAEAEgBAFQABAEgEAEQgEADgEAAIgVAAIAAA4QAAAIADAEQAEACAHAAIAHAAQAEAAAEAEQADADAAAEQAAAHgHAEQgJACgKAAQgHABgFgCg");
	this.shape_23.setTransform(-13.9,1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A3674").s().p("AgBBKQgGgCgEgEQgFgEgCgGQgDgIAAgJIAAg8IgEAAQgFAAgEgDQgCgEAAgEQAAgFACgEQAEgCAFAAIAEAAIAAgUQAAgGAEgDQAEgFAFAAQAGAAADAFQAEADAAAGIAAAUIAVAAQAEAAAEACQAEAEgBAFQABAEgEAEQgEADgEAAIgVAAIAAA4QAAAIADAEQAEACAHAAIAHAAQAEAAAEAEQADADAAAEQAAAHgHAEQgJACgKAAQgHABgFgCg");
	this.shape_24.setTransform(-22,1.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgFgLIgDgMIgBgMIAAgBQAAgMAEgLQAEgLAHgIQAJgIAKgFIALgEIALgBQAGABAGABQAHABAFADQAKAEAHAJQAHAIAEAKQADAKAAAKQAAAFgEAEQgDADgFABIhIAAQABAGACAGQADAFAFAEQAEAEAGACQAFACAGAAQAIAAAHgDQAHgDAFgEQAEgDADABQAEAAAEACQADADAAAFQAAAFgEADQgIAIgKADQgKAEgOABQgLgBgLgEgAAegHIgDgMQgDgGgDgEQgEgEgFgCQgFgDgGAAQgFAAgGADQgFABgEAEQgEAFgCAGQgDAFgBAHIA7AAIAAAAg");
	this.shape_25.setTransform(-32.1,3.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A3674").s().p("AgGBRIgLgGQgJgFgGgIIAAAFQAAAGgFADQgEAFgFAAQgGAAgEgFQgDgDAAgGIAAiHQAAgFADgFQAEgDAGAAQAFAAAEADQAFAFAAAFIAAAzQAGgKAKgFQAFgDAFgBQAGgCAGAAQAKAAAKAEQAJAEAIAHQAIAJAEAKQAFAQAAAJIAAAAIgCAOIgDAMQgEALgIAIQgHAIgKAEQgJAEgLAAQgGAAgGgBgAgNgNQgFAEgFAEQgFAFgDAGQgCAHAAAIIAAAAQAAAJACAHQADAGAFAFQAFAFAFADQAHADAGAAQAHAAAFgDQAGgDAFgEQAEgFADgHQADgHAAgJIAAAAQAAgIgDgHQgDgGgEgFQgFgFgGgDQgFgCgHAAQgGAAgHACg");
	this.shape_26.setTransform(-44.9,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A3674").s().p("AgMA7IgMgDQgLgFgIgIQgJgJgEgKIgEgMIgBgLIAAgBQAAgHAFgQQAEgLAJgIQAIgIALgFIAMgEIAMgBQAJABAQAEQALAFAIAIQAJAIAEALQAFAPAAAIIAAAAIgBAMIgEALQgEALgJAJQgIAIgLAFQgQAFgJAAgAgOgiQgGAEgFAFQgEAFgDAGQgCAHAAAHIAAAAQAAAIACAGQADAHAFAGQAFAEAGAEQAHACAGAAQAIAAAHgCQAGgEAFgEQAEgGADgGQACgHAAgHIAAgBQAAgGgCgIQgDgGgFgFQgFgGgGgDQgHgCgHAAQgHAAgHACg");
	this.shape_27.setTransform(-64.6,3.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A3674").s().p("AgBBKQgGgCgEgEQgFgEgCgGQgDgIAAgJIAAg8IgEAAQgFAAgEgDQgCgEAAgEQAAgFACgEQAEgCAFAAIAEAAIAAgUQAAgGAEgDQAEgFAFAAQAGAAADAFQAEADAAAGIAAAUIAVAAQAEAAAEACQAEAEgBAFQABAEgEAEQgEADgEAAIgVAAIAAA4QAAAIADAEQAEACAHAAIAHAAQAEAAAEAEQADADAAAEQAAAHgHAEQgJACgKAAQgHABgFgCg");
	this.shape_28.setTransform(-75.5,1.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A3674").s().p("AgMA8IgMgEQgLgFgIgIQgJgIgEgLIgEgMIgBgMIAAAAQAAgHAFgQQAEgKAJgJQAIgIALgFIAMgEIAMgBQAJABAQAEQALAFAIAIQAJAJAEAKQAFAPAAAIIAAAAIgBAMIgEAMQgEAKgJAJQgIAIgLAFQgQAFgJAAgAgOgiQgGAEgFAEQgEAFgDAHQgCAHAAAHIAAAAQAAAHACAIQADAGAFAGQAFAFAGADQAHACAGAAQAIAAAHgCQAGgDAFgFQAEgFADgHQACgHAAgIIAAAAQAAgGgCgIQgDgGgFgFQgFgGgGgDQgHgCgHAAQgHAAgHACg");
	this.shape_29.setTransform(5.9,-23.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A3674").s().p("AgJBOQgDgEAAgGIAAiHQAAgGADgEQAEgDAFAAQAFAAAEADQAEAEAAAGIAACHQAAAGgEAEQgEADgFAAQgFAAgEgDg");
	this.shape_30.setTransform(-3.5,-25.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A3674").s().p("AgJBOQgDgEAAgGIAAiHQAAgGADgEQAEgDAFAAQAFAAAEADQAEAEAAAGIAACHQAAAGgEAEQgEADgFAAQgFAAgEgDg");
	this.shape_31.setTransform(-8.9,-25.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A3674").s().p("AgTA4QgLgEgIgIQgIgIgEgLIgEgMIgBgNIAAAAQAAgLAEgMQAEgKAIgJQAIgIAKgFIAKgEIALgBQAHABAHABQAFABAGADQAKAEAHAJQAHAIADAKQAEAKAAALQAAAEgEAEQgEADgFAAIhIAAQABAHADAGQADAFAFAEQAEAEAGACQAFACAGAAQAIAAAHgDQAGgDAHgEQADgDADABQAEAAAEACQADADAAAFQAAAEgEAEQgIAIgKADQgKAFgNAAQgMAAgLgFgAAegHIgDgMQgDgGgDgEQgDgEgGgCQgFgDgHAAQgEAAgGADQgFABgEAFQgEAEgDAGQgCAFgBAHIA7AAIAAAAg");
	this.shape_32.setTransform(-17.7,-23.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2A3674").s().p("AAdBOQgDgEAAgGIAAg2QAAgGgCgGQgCgEgDgEQgEgDgEgCQgFgCgGAAQgEAAgFACQgFACgDAEQgEADgCAFQgBAFgBAHIAAA1QAAAGgDAEQgEADgGAAQgFAAgEgDQgEgEAAgGIAAiHQAAgGAEgEQAEgDAFAAQAGAAAEADQADAEAAAGIAAAyQAHgJAIgFQAEgDAGgCQAEgBAGAAQALAAAHADQAIADAFAGQAFAGADAIQADAIAAAJIAAA+QAAAGgEAEQgDADgGAAQgGAAgEgDg");
	this.shape_33.setTransform(-30.2,-25.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2A3674").s().p("AgsBJQgDgBgDgCQgDgDAAgFQAAgEAEgEQADgDAFAAIAEABIAJACQAGAAAEgDQADgDAEgHIABgCIgshfIgBgHQAAgFAEgEQADgEAHAAQAEAAADADQAEACABAFIAeBNIAehNQABgEADgDQAEgDAEAAQAFAAAEAEQAEAEAAAFIgBAGIgqBlQgEAJgEAGQgEAGgEAEQgEAEgGACQgFACgIAAQgKAAgIgEg");
	this.shape_34.setTransform(-48.3,-21.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A3674").s().p("AgaA6QgHgDgGgFQgGgEgDgGQgEgIABgIIAAgBQgBgJAEgHQADgHAHgEQAGgEAJgDQAIgCALAAQAMAAATAFIAAgDQAAgGgCgFQgCgEgDgEQgFgDgEgBQgGgCgGAAIgOABIgMAEIgEAAQgFAAgDgDQgDgDAAgFQAAgHAHgDQAJgEAIgCQAKgBAKAAQANAAAJADQAKADAGAHQAGAGADAJQADAJAAALIAAA5QAAAGgEADQgDADgGAAQgFAAgEgDQgDgDAAgEIAAgFQgHAHgIAFQgNAFgKAAQgHAAgIgCgAgKAEIgJAEQgDADgBADQgCAEAAAEIAAABQgBAIAHAFQAGAEAKAAQAFAAAHgBQAFgCAEgEQAEgDADgEQACgFAAgGIAAgHQgPgFgLAAQgFAAgGABg");
	this.shape_35.setTransform(-60.6,-23.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A3674").s().p("AgLBOIgOgEIgOgGIgOgIQgFgEAAgHQAAgFAEgEQADgDAGAAQAEAAAEACQAJAIALAEQALAEALAAIALgBIAJgEQADgDACgDQACgEAAgEIAAAAQAAgFgBgDQgCgEgEgCQgEgDgGgCIgRgFIgVgHQgLgDgFgFQgIgFgCgHQgEgIAAgKIAAgBQAAgJAEgJQAEgIAHgGQAHgGAKgDQAJgDALAAQAOAAAMADQAMAEALAHQAFADAAAIQAAAFgDAEQgEAEgFgBQgEAAgEgCQgJgFgIgDQgJgDgIAAIgLABQgEABgDADQgHAFAAAIIAAABQAAAEACAEQABACAEADIALAGIASAEQAMAEAKADQAJAFAGADQAGAGADAHQADAIAAAIIAAABQAAALgEAJQgEAIgHAGQgIAGgKADQgJADgNAAg");
	this.shape_36.setTransform(-73,-25.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79,-36.3,12,22);


(lib.circleColour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var ColourFrame = 0;
		this.gotoAndStop(ColourFrame);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#203D79").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape.setTransform(9,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F5191").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_1.setTransform(9,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#397FBA").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_2.setTransform(9,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009CDD").s().p("Ag/BAQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaQAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgag");
	this.shape_3.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.nbnMid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var midroot = this;
		
		this.stop();
		
		setTimeout(playMid, 2000);
		
		function playMid(){
			midroot.gotoAndPlay(1);
		}
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// Layer 2
	this.instance = new lib.nbn_text();
	this.instance.parent = this;
	this.instance.setTransform(27.4,24.4,1,1,0,0,0,21.7,9.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({regX:21.6,alpha:1},9).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A3674").s().p("AiVCWQg+g+AAhYQAAhWA+g/QA+g9BXgBQBYABA+A9QA+A/AABWQAABYg+A+Qg+A9hYAAQhXAAg+g9g");
	this.shape.setTransform(26.5,26.5,0.128,0.128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3674").s().p("AgcAdQgMgNAAgQQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAAQgMANQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(26.6,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3674").s().p("AglAmQgQgQAAgWQAAgWAQgPQAQgPAVAAQAWAAAQAPQAQAPAAAWQAAAWgQAQQgQAPgWAAQgVAAgQgPg");
	this.shape_2.setTransform(26.5,26.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A3674").s().p("AgvAvQgTgTAAgcQAAgbATgUQAUgTAbAAQAcAAAUATQATAUAAAbQAAAcgTATQgUAUgcAAQgbAAgUgUg");
	this.shape_3.setTransform(26.6,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3674").s().p("Ag4A5QgXgYAAghQAAghAXgXQAXgXAhAAQAhAAAYAXQAXAXAAAhQAAAhgXAYQgYAXghAAQghAAgXgXg");
	this.shape_4.setTransform(26.6,26.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3674").s().p("AhBBCQgbgcgBgmQABgmAbgbQAcgbAlAAQAnAAAbAbQAbAbABAmQgBAmgbAcQgbAbgnAAQglAAgcgbg");
	this.shape_5.setTransform(26.6,26.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A3674").s().p("AhLBMQgfggAAgsQAAgrAfggQAggeArAAQAtAAAfAeQAfAgAAArQAAAsgfAgQgfAegtAAQgrAAgggeg");
	this.shape_6.setTransform(26.6,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A3674").s().p("AhUBUQgjgjAAgxQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAxgjAjQgjAkgyAAQgxAAgjgkg");
	this.shape_7.setTransform(26.6,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A3674").s().p("AhdBeQgngnAAg3QAAg2AngnQAngnA2AAQA3AAAoAnQAmAnAAA2QAAA3gmAnQgoAng3AAQg2AAgngng");
	this.shape_8.setTransform(26.6,26.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A3674").s().p("AhnBnQgrgrAAg8QAAg8ArgrQArgqA8AAQA9AAArAqQArArAAA8QAAA8grArQgrArg9AAQg8AAgrgrg");
	this.shape_9.setTransform(26.6,26.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A3674").s().p("AhxBxQgugvAAhCQAAhBAugvQAwgvBBAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAQhBAAgwgvg");
	this.shape_10.setTransform(26.6,26.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A3674").s().p("Ah5B6QgzgzAAhGQAAhIAzgyQAygzBHAAQBIAAAzAzQAyAyAABIQAABGgyAzQgzAzhIAAQhHAAgygzg");
	this.shape_11.setTransform(26.6,26.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A3674").s().p("AiDCDQg3g2AAhNQAAhMA3g3QA2g2BNAAQBNAAA3A2QA2A3ABBMQgBBNg2A2Qg3A3hNAAQhNAAg2g3g");
	this.shape_12.setTransform(26.6,26.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A3674").s().p("AiNCNQg6g7AAhRQAAhTA6g6QA7g7BSAAQBSAAA8A7QA6A6AABTQAABRg6A7Qg8A7hSAAQhSAAg7g7g");
	this.shape_13.setTransform(26.6,26.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A3674").s().p("AiWCWQg+g+AAhYQAAhXA+g+QA/g/BXAAQBYAAA/A/QA+A+AABXQAABYg+A+Qg/A/hYAAQhXAAg/g/g");
	this.shape_14.setTransform(26.6,26.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A3674").s().p("AifCgQhChDAAhdQAAhcBChDQBDhCBcAAQBeAABCBCQBCBDAABcQAABdhCBDQhCBCheAAQhcAAhDhCg");
	this.shape_15.setTransform(26.6,26.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A3674").s().p("AipCpQhGhGAAhjQAAhiBGhGQBHhGBiAAQBjAABGBGQBHBGAABiQAABjhHBGQhGBGhjAAQhiAAhHhGg");
	this.shape_16.setTransform(26.6,26.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A3674").s().p("AiyCyQhKhKAAhoQAAhnBKhKQBLhKBnAAQBpAABKBKQBKBKAABnQAABohKBKQhKBKhpAAQhnAAhLhKg");
	this.shape_17.setTransform(26.6,26.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:0.128,scaleY:0.128,x:26.5,y:26.5}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape,p:{scaleX:1.256,scaleY:1.256,x:26.6,y:26.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.circleFade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(1));

	// Layer 2
	this.cc = new lib.InitColour();
	this.cc.parent = this;
	this.cc.setTransform(9,9,1,1,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get(this.cc).wait(20).to({alpha:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// circleFade
	this.circleFade = new lib.circleFade();
	this.circleFade.parent = this;
	this.circleFade.setTransform(9,9,1,1,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get(this.circleFade).wait(1));

	// CircleColour
	this.cc = new lib.circleColour();
	this.cc.parent = this;
	this.cc.setTransform(9,9,1,1,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get(this.cc).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(0,0,18,18), null);


(lib.NBNtrail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Variables
		var trailroot = this,
			coords = [],
			circleMovie,
			ranTime, x, y, ranScaleX, ranScaleY, ranAlpha, ranDelay,
			ranX, ranY, trailx, traily, ranXend, ranYend,
			bannerScale, particleAmount;
		
		
		initBanner();
		
		setTimeout(auroraAnimate,100);
		
		
		function initBanner(){
			// if scaling banner up
			// 1: 300x250
			// 2: 600x500
			bannerScale = 1;
		
			ColourFrame = 0;
			particleAmount = 85;
			storeEndCoordinate(0, 0, 0, 0, coords);
		
			//storing end circle coordinates for later use
			for (var i = 1; i <= particleAmount; i++) {
				//console.log(i);
				circleMovie = eval("trailroot.circle"+i);
				storeEndCoordinate(circleMovie.x, circleMovie.y, circleMovie.scaleX, circleMovie.scaleY, coords);
				circleMovie.x = -1000;
				circleMovie.y = -1000;
		
			}
		}
		
		function checkColour(i,circleColour)
		{
			if(i <= 6 && i >= 1)
			{
				ColourFrame = 0;
			}
			else if(i <= 15 && i >= 7)
			{
				ColourFrame = 1;
			}
			else if(i <= 28 && i >= 16)
			{
				ColourFrame = 2;
			}
			else if(i <= 47 && i >= 29)
			{
				ColourFrame = 3;
			}
			else if(i <= 85 && i >= 48)
			{
				ColourFrame = Math.round(Math.random()*4)+4;
			}
			
			if(i == 4 || i == 7 || i == 13 || i == 17 || i == 22 || i == 36 || i == 43)
			{
				ColourFrame = Math.round(Math.random()*4)+4;
			}
		}
		
		function storeEndCoordinate(xVal, yVal, xscaleVal, yscaleVal, array) {
		    array.push({x: xVal, y: yVal, xscale: xscaleVal, yscale: yscaleVal});
		}
		
		
		function auroraAnimate() {
			
			for (var i = 1; i <= particleAmount; i++) {
				//initial properties
				
				circleMovie = eval("trailroot.circle"+i);
				circleMovie.x = coords[i].x;
				circleMovie.y = coords[i].y;
				circleMovie.scaleX = coords[i].xscale;
				circleMovie.scaleY = coords[i].yscale;
				
				circleMovie.alpha = Math.random()*0.15+0.85;
				
				//end properties
				
				ranTime = 0.6 + (Math.random()*0.3) - i*0.005;
				ranDelay = i*0.03 - (Math.random()*0.1);
				
				trailx = coords[i].x;
				traily = coords[i].y;
				
				ranX = (trailx - Math.random()*60) * bannerScale;
				ranY = (traily + Math.random()*30-15) * bannerScale;
				
				ranXend = (trailx + Math.random()*2) * bannerScale;
				ranYend = (traily + Math.random()*2) * bannerScale;
				
				ranScaleX = ranScaleY = (Math.random()*0.1+0.1) * bannerScale;
				ranAlpha = 0;
				
				TweenMax.from(circleMovie, ranTime, {x:ranX, y:ranY, scaleX:ranScaleX, scaleY:ranScaleY, alpha:ranAlpha, 
											delay:ranDelay, ease:Sine.easeOut,
											onComplete:objFadeOut, onCompleteParams:[circleMovie, ranXend, ranYend]});
				
				circleColour = eval("trailroot.circle"+i+".circleFade.cc");
				//ColourFrame = 4;
				checkColour(i, circleColour);
				circleColour.gotoAndStop(ColourFrame);
				circleColour.alpha = Math.random()*0.4+0.6;
											
				circleFadeMovie = eval("trailroot.circle"+i+".circleFade");
				circleFadeMovie.alpha = 1;
				circleFadeMovie.stop();
			}
			
		}
		
		function objFadeOut(circleMovie, ranXend, ranYend){
			
			TweenMax.to(circleMovie, 0.4, {x:ranXend, y:ranYend, scaleX:0.1, scaleY:0.1, alpha:0, ease:Sine.easeInOut});
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// trail2
	this.circle84 = new lib.circle();
	this.circle84.parent = this;
	this.circle84.setTransform(-70.7,54.9,0.2,0.2,0,0,0,9.2,10);

	this.circle85 = new lib.circle();
	this.circle85.parent = this;
	this.circle85.setTransform(-60,13.4,0.153,0.153,0,0,0,9.2,9.5);

	this.circle82 = new lib.circle();
	this.circle82.parent = this;
	this.circle82.setTransform(-62.8,43.5,0.105,0.105,0,0,0,9.1,9.6);

	this.circle83 = new lib.circle();
	this.circle83.parent = this;
	this.circle83.setTransform(-49.6,32.9,0.114,0.114,0,0,0,9.2,9.7);

	this.circle81 = new lib.circle();
	this.circle81.parent = this;
	this.circle81.setTransform(-50.2,6,0.14,0.14,0,0,0,9,10.4);

	this.circle80 = new lib.circle();
	this.circle80.parent = this;
	this.circle80.setTransform(-62.9,32.8,0.102,0.102,0,0,0,8.8,10.3);

	this.circle75 = new lib.circle();
	this.circle75.parent = this;
	this.circle75.setTransform(-69.7,41.7,0.246,0.246,0,0,0,9.6,9.6);

	this.circle79 = new lib.circle();
	this.circle79.parent = this;
	this.circle79.setTransform(-72.8,35,0.207,0.207,0,0,0,9.2,9.9);

	this.circle78 = new lib.circle();
	this.circle78.parent = this;
	this.circle78.setTransform(-81.8,44.7,0.153,0.153,0,0,0,9.2,9.5);

	this.circle76 = new lib.circle();
	this.circle76.parent = this;
	this.circle76.setTransform(-64.7,22.8,0.295,0.295,0,0,0,9.3,9.7);

	this.circle77 = new lib.circle();
	this.circle77.parent = this;
	this.circle77.setTransform(-74.1,29.4,0.194,0.194,0,0,0,9.5,9.8);

	this.circle74 = new lib.circle();
	this.circle74.parent = this;
	this.circle74.setTransform(-53.5,7.9,0.153,0.153,0,0,0,9.2,9.5);

	this.circle73 = new lib.circle();
	this.circle73.parent = this;
	this.circle73.setTransform(-68.3,33.4,0.247,0.247,0,0,0,9.6,10.2);

	this.circle72 = new lib.circle();
	this.circle72.parent = this;
	this.circle72.setTransform(-67.1,28,0.266,0.266,0,0,0,9.2,9.8);

	this.circle71 = new lib.circle();
	this.circle71.parent = this;
	this.circle71.setTransform(-50.9,13.7,0.268,0.268,0,0,0,9.5,9.5);

	this.circle70 = new lib.circle();
	this.circle70.parent = this;
	this.circle70.setTransform(-74.2,29.7,0.221,0.221,0,0,0,9.5,9.5);

	this.circle69 = new lib.circle();
	this.circle69.parent = this;
	this.circle69.setTransform(-61.6,24.2,0.298,0.298,0,0,0,9.4,9.6);

	this.circle66 = new lib.circle();
	this.circle66.parent = this;
	this.circle66.setTransform(-81.2,33.9,0.248,0.248,0,0,0,9.2,9.8);

	this.circle67 = new lib.circle();
	this.circle67.parent = this;
	this.circle67.setTransform(-80,20.2,0.153,0.153,0,0,0,9.2,9.5);

	this.circle65 = new lib.circle();
	this.circle65.parent = this;
	this.circle65.setTransform(-102,37.7,0.306,0.306,0,0,0,9.2,10);

	this.circle68 = new lib.circle();
	this.circle68.parent = this;
	this.circle68.setTransform(-70.5,21.4,0.153,0.153,0,0,0,9.2,9.5);

	this.circle64 = new lib.circle();
	this.circle64.parent = this;
	this.circle64.setTransform(-94.1,40.5,0.256,0.256,0,0,0,9.2,9.8);

	this.circle63 = new lib.circle();
	this.circle63.parent = this;
	this.circle63.setTransform(-59,18.4,0.239,0.239,0,0,0,9.2,10.1);

	this.circle60 = new lib.circle();
	this.circle60.parent = this;
	this.circle60.setTransform(-69.8,25.2,0.254,0.254,0,0,0,9.5,9.8);

	this.circle62 = new lib.circle();
	this.circle62.parent = this;
	this.circle62.setTransform(-79.1,28.9,0.285,0.285,0,0,0,9.3,9.7);

	this.circle58 = new lib.circle();
	this.circle58.parent = this;
	this.circle58.setTransform(-71.2,19.6,0.153,0.153,0,0,0,9.2,9.5);

	this.circle59 = new lib.circle();
	this.circle59.parent = this;
	this.circle59.setTransform(-72.2,26,0.311,0.311,0,0,0,9.5,9.8);

	this.circle61 = new lib.circle();
	this.circle61.parent = this;
	this.circle61.setTransform(-66,16.5,0.181,0.181,0,0,0,9.2,10);

	this.circle57 = new lib.circle();
	this.circle57.parent = this;
	this.circle57.setTransform(-83.8,21.8,0.247,0.247,0,0,0,9.5,9.7);

	this.circle56 = new lib.circle();
	this.circle56.parent = this;
	this.circle56.setTransform(-85.9,32,0.334,0.334,0,0,0,9.4,10);

	this.circle55 = new lib.circle();
	this.circle55.parent = this;
	this.circle55.setTransform(-97.6,22,0.238,0.238,0,0,0,9.5,9.7);

	this.circle54 = new lib.circle();
	this.circle54.parent = this;
	this.circle54.setTransform(-95.9,30,0.289,0.289,0,0,0,9.3,9.7);

	this.circle53 = new lib.circle();
	this.circle53.parent = this;
	this.circle53.setTransform(-82.4,31.4,0.252,0.252,0,0,0,9.2,10);

	this.circle52 = new lib.circle();
	this.circle52.parent = this;
	this.circle52.setTransform(-63.8,7.1,0.153,0.153,0,0,0,9.2,9.5);

	this.circle51 = new lib.circle();
	this.circle51.parent = this;
	this.circle51.setTransform(-75.7,43.8,0.2,0.2,0,0,0,9,9.2);

	this.circle50 = new lib.circle();
	this.circle50.parent = this;
	this.circle50.setTransform(-76.3,36,0.2,0.2,0,0,0,9,9.2);

	this.circle49 = new lib.circle();
	this.circle49.parent = this;
	this.circle49.setTransform(-91.8,31.7,0.341,0.341,0,0,0,9.1,9.4);

	this.circle48 = new lib.circle();
	this.circle48.parent = this;
	this.circle48.setTransform(-90.8,38.1,0.342,0.342,0,0,0,9.1,9.7);

	this.circle40 = new lib.circle();
	this.circle40.parent = this;
	this.circle40.setTransform(-115.7,26.8,0.2,0.2,0,0,0,9,9.2);

	this.circle45 = new lib.circle();
	this.circle45.parent = this;
	this.circle45.setTransform(-107.9,33.2,0.228,0.228,0,0,0,9,9.4);

	this.circle47 = new lib.circle();
	this.circle47.parent = this;
	this.circle47.setTransform(-83.5,36.5,0.226,0.226,0,0,0,8.8,9.5);

	this.circle43 = new lib.circle();
	this.circle43.parent = this;
	this.circle43.setTransform(-96.5,38.6,0.269,0.269,0,0,0,9.1,9.3);

	this.circle46 = new lib.circle();
	this.circle46.parent = this;
	this.circle46.setTransform(-102.4,31.6,0.394,0.394,0,0,0,9.2,9.4);

	this.circle41 = new lib.circle();
	this.circle41.parent = this;
	this.circle41.setTransform(-113,29.4,0.286,0.286,0,0,0,9.2,9.6);

	this.circle44 = new lib.circle();
	this.circle44.parent = this;
	this.circle44.setTransform(-99.7,34.6,0.325,0.325,0,0,0,9.1,9.2);

	this.circle42 = new lib.circle();
	this.circle42.parent = this;
	this.circle42.setTransform(-110,34.3,0.355,0.355,0,0,0,9.2,9.3);

	this.circle39 = new lib.circle();
	this.circle39.parent = this;
	this.circle39.setTransform(-119.4,29.2,0.375,0.375,0,0,0,9.3,9.5);

	this.circle38 = new lib.circle();
	this.circle38.parent = this;
	this.circle38.setTransform(-122.7,23.3,0.316,0.316,0,0,0,9,9.3);

	this.circle34 = new lib.circle();
	this.circle34.parent = this;
	this.circle34.setTransform(-131,26,0.344,0.344,0,0,0,9.2,9.3);

	this.circle36 = new lib.circle();
	this.circle36.parent = this;
	this.circle36.setTransform(-125.5,22.1,0.339,0.339,0,0,0,9.2,9.3);

	this.circle37 = new lib.circle();
	this.circle37.parent = this;
	this.circle37.setTransform(-114.5,38.8,0.211,0.211,0,0,0,9,9.2);

	this.circle35 = new lib.circle();
	this.circle35.parent = this;
	this.circle35.setTransform(-114.4,18.6,0.2,0.2,0,0,0,9,9.2);

	this.circle33 = new lib.circle();
	this.circle33.parent = this;
	this.circle33.setTransform(-138.7,33.2,0.2,0.2,0,0,0,9,9.2);

	this.circle30 = new lib.circle();
	this.circle30.parent = this;
	this.circle30.setTransform(-131.4,19.7,0.306,0.306,0,0,0,9,9.3);

	this.circle31 = new lib.circle();
	this.circle31.parent = this;
	this.circle31.setTransform(-128.3,16.7,0.306,0.306,0,0,0,9,9.3);

	this.circle32 = new lib.circle();
	this.circle32.parent = this;
	this.circle32.setTransform(-137.3,20.1,0.489,0.489,0,0,0,9,9.3);

	this.circle28 = new lib.circle();
	this.circle28.parent = this;
	this.circle28.setTransform(-145.3,27,0.27,0.27,0,0,0,9.1,9.5);

	this.circle29 = new lib.circle();
	this.circle29.parent = this;
	this.circle29.setTransform(-142.9,17.9,0.336,0.336,0,0,0,9.1,9.3);

	this.circle27 = new lib.circle();
	this.circle27.parent = this;
	this.circle27.setTransform(-152.6,18.9,0.221,0.221,0,0,0,9.1,9.3);

	this.circle25 = new lib.circle();
	this.circle25.parent = this;
	this.circle25.setTransform(-149.1,14.2,0.499,0.499,0,0,0,9.1,9.5);

	this.circle23 = new lib.circle();
	this.circle23.parent = this;
	this.circle23.setTransform(-156.6,18.3,0.112,0.112,0,0,0,9,9.4);

	this.circle26 = new lib.circle();
	this.circle26.parent = this;
	this.circle26.setTransform(-140.2,12.9,0.306,0.306,0,0,0,9,9.3);

	this.circle21 = new lib.circle();
	this.circle21.parent = this;
	this.circle21.setTransform(-161.9,9,0.487,0.487,0,0,0,9.1,9.6);

	this.circle24 = new lib.circle();
	this.circle24.parent = this;
	this.circle24.setTransform(-155.9,9.1,0.492,0.492,0,0,0,9.2,9.5);

	this.circle22 = new lib.circle();
	this.circle22.parent = this;
	this.circle22.setTransform(-154.1,9.7,0.219,0.219,0,0,0,9.2,9.3);

	this.circle18 = new lib.circle();
	this.circle18.parent = this;
	this.circle18.setTransform(-164.5,19.4,0.306,0.306,0,0,0,9,9.3);

	this.circle20 = new lib.circle();
	this.circle20.parent = this;
	this.circle20.setTransform(-154.7,16.7,0.187,0.187,0,0,0,9.1,9.3);

	this.circle19 = new lib.circle();
	this.circle19.parent = this;
	this.circle19.setTransform(-166.9,10.4,0.306,0.306,0,0,0,9,9.3);

	this.circle17 = new lib.circle();
	this.circle17.parent = this;
	this.circle17.setTransform(-169.4,13.8,0.306,0.306,0,0,0,9,9.3);

	this.circle16 = new lib.circle();
	this.circle16.parent = this;
	this.circle16.setTransform(-182.9,15.3,0.36,0.36,0,0,0,9.1,9.6);

	this.circle1 = new lib.circle();
	this.circle1.parent = this;
	this.circle1.setTransform(-202.5,13.4,0.205,0.205,0,0,0,8.8,9);

	this.circle10 = new lib.circle();
	this.circle10.parent = this;
	this.circle10.setTransform(-170.6,24,0.17,0.17,0,0,0,9.1,9.4);

	this.circle15 = new lib.circle();
	this.circle15.parent = this;
	this.circle15.setTransform(-174.7,14,0.49,0.49,0,0,0,9.1,9.4);

	this.circle14 = new lib.circle();
	this.circle14.parent = this;
	this.circle14.setTransform(-168.9,2,0.28,0.28,0,0,0,8.9,9.2);

	this.circle13 = new lib.circle();
	this.circle13.parent = this;
	this.circle13.setTransform(-173.6,22.7,0.28,0.28,0,0,0,8.9,9.2);

	this.circle12 = new lib.circle();
	this.circle12.parent = this;
	this.circle12.setTransform(-179.4,18.6,0.367,0.367,0,0,0,9,9.2);

	this.circle9 = new lib.circle();
	this.circle9.parent = this;
	this.circle9.setTransform(-186.2,19,0.126,0.126,0,0,0,9.1,9.5);

	this.circle11 = new lib.circle();
	this.circle11.parent = this;
	this.circle11.setTransform(-195.2,6.1,0.28,0.28,0,0,0,8.9,9.2);

	this.circle3 = new lib.circle();
	this.circle3.parent = this;
	this.circle3.setTransform(-189.1,28.4,0.302,0.302,0,0,0,9.1,9.2);

	this.circle7 = new lib.circle();
	this.circle7.parent = this;
	this.circle7.setTransform(-185.7,21.4,0.28,0.28,0,0,0,8.9,9.2);

	this.circle5 = new lib.circle();
	this.circle5.parent = this;
	this.circle5.setTransform(-192.2,24.3,0.383,0.383,0,0,0,9.2,9.2);

	this.circle6 = new lib.circle();
	this.circle6.parent = this;
	this.circle6.setTransform(-187.8,19.4,0.371,0.371,0,0,0,8.8,9.3);

	this.circle4 = new lib.circle();
	this.circle4.parent = this;
	this.circle4.setTransform(-198.5,24.9,0.417,0.417,0,0,0,8.9,9.5);

	this.circle8 = new lib.circle();
	this.circle8.parent = this;
	this.circle8.setTransform(-194.4,19.7,0.28,0.28,0,0,0,8.9,9.2);

	this.circle2 = new lib.circle();
	this.circle2.parent = this;
	this.circle2.setTransform(-203,27.5,0.139,0.139,0,0,0,9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circle2},{t:this.circle8},{t:this.circle4},{t:this.circle6},{t:this.circle5},{t:this.circle7},{t:this.circle3},{t:this.circle11},{t:this.circle9},{t:this.circle12},{t:this.circle13},{t:this.circle14},{t:this.circle15},{t:this.circle10},{t:this.circle1},{t:this.circle16},{t:this.circle17},{t:this.circle19},{t:this.circle20},{t:this.circle18},{t:this.circle22},{t:this.circle24},{t:this.circle21},{t:this.circle26},{t:this.circle23},{t:this.circle25},{t:this.circle27},{t:this.circle29},{t:this.circle28},{t:this.circle32},{t:this.circle31},{t:this.circle30},{t:this.circle33},{t:this.circle35},{t:this.circle37},{t:this.circle36},{t:this.circle34},{t:this.circle38},{t:this.circle39},{t:this.circle42},{t:this.circle44},{t:this.circle41},{t:this.circle46},{t:this.circle43},{t:this.circle47},{t:this.circle45},{t:this.circle40},{t:this.circle48},{t:this.circle49},{t:this.circle50},{t:this.circle51},{t:this.circle52},{t:this.circle53},{t:this.circle54},{t:this.circle55},{t:this.circle56},{t:this.circle57},{t:this.circle61},{t:this.circle59},{t:this.circle58},{t:this.circle62},{t:this.circle60},{t:this.circle63},{t:this.circle64},{t:this.circle68},{t:this.circle65},{t:this.circle67},{t:this.circle66},{t:this.circle69},{t:this.circle70},{t:this.circle71},{t:this.circle72},{t:this.circle73},{t:this.circle74},{t:this.circle77},{t:this.circle76},{t:this.circle78},{t:this.circle79},{t:this.circle75},{t:this.circle80},{t:this.circle81},{t:this.circle83},{t:this.circle82},{t:this.circle85},{t:this.circle84}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NBNtrail, new cjs.Rectangle(-204.3,-0.6,163.2,62.6), null);


(lib.NBNlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Variables
		var root = this,
			coords = [],
			circleMovie,
			ranTime, x, y, ranScaleX, ranScaleY, ranAlpha, ranDelay,
			ranX, ranY, nbnMidX, nbnMidY,
			bannerScale, particleAmount;
		
		
		initBanner();
		
		setTimeout(auroraAnimate,1500);
		
		function initBanner(){
			// if scaling banner up
			// 1: 300x250
			// 2: 600x500
			bannerScale = 1;
			
			
			ColourFrame = 0;
			particleAmount = 104;
			storeEndCoordinate(0, 0, 0, 0, coords);
		
			//storing end circle coordinates for later use
			for (var i = 1; i <= particleAmount; i++) {
				//console.log(i);
				circleMovie = eval("root.circle"+i);
				storeEndCoordinate(circleMovie.x, circleMovie.y, circleMovie.scaleX, circleMovie.scaleY, coords);
				circleMovie.x = -1000;
				circleMovie.y = -1000;
				
				circleColour = eval("root.circle"+i+".cc");
				checkColour(i, circleColour);
				circleColour.gotoAndStop(ColourFrame);
		
			}
		}
		
		function storeEndCoordinate(xVal, yVal, xscaleVal, yscaleVal, array) {
		    array.push({x: xVal, y: yVal, xscale: xscaleVal, yscale: yscaleVal});
		}
		
		function checkColour(i,circleColour)
		{
			if(i <= 36 && i >= 1)
			{
				ColourFrame = 1;
			}
			else if(i <= 62 && i >= 37)
			{
				ColourFrame = 2;
			}
			else if(i <= 82 && i >= 63)
			{
				ColourFrame = 3;
			}
			else if(i <= 104 && i >= 83)
			{
				ColourFrame = 4;
			}
		}
		
		function auroraAnimate() {
			
			for (var i = 1; i <= particleAmount; i++) {
				//initial properties
				
				circleMovie = eval("root.circle"+i);
				circleMovie.x = coords[i].x;
				circleMovie.y = coords[i].y;
				circleMovie.scaleX = coords[i].xscale;
				circleMovie.scaleY = coords[i].yscale;
				
				circleMovie.alpha = 1;
				
				//end properties
				ranTime = 1.5 + (Math.random()*0.5);
				ranDelay = 0.1 + (Math.random()*0.5);
				
				nbnMidX = 38;
				nbnMidY = 30;
				
				ranX = (nbnMidX -25 + Math.random()*50) * bannerScale;
				ranY = (nbnMidY -25 + Math.random()*50) * bannerScale;
				
				ranScaleX = ranScaleY = (Math.random()*0.5+0.1) * bannerScale;
				ranAlpha = 0;
				
				TweenMax.from(circleMovie, ranTime, {x:ranX, y:ranY, scaleX:ranScaleX, scaleY:ranScaleY, alpha:ranAlpha, 
											delay:ranDelay, ease:Expo.easeOut});
				
				circleColour2 = eval("root.circle"+i+".circleFade.cc");
				ColourFrame = 8- Math.round(Math.random()*6-Math.random()*2);
				circleColour2.gotoAndStop(ColourFrame);
				circleColour2.alpha = Math.random()*0.4+0.6;
											
				circleFadeMovie = eval("root.circle"+i+".circleFade");
				circleFadeMovie.alpha = 1;
				circleFadeMovie.play();
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// circle
	this.circle104 = new lib.circle();
	this.circle104.parent = this;
	this.circle104.setTransform(106,130.1,0.207,0.207,0,0,0,9.4,9.9);

	this.circle103 = new lib.circle();
	this.circle103.parent = this;
	this.circle103.setTransform(101.3,124,0.207,0.207,0,0,0,9.4,9.9);

	this.circle102 = new lib.circle();
	this.circle102.parent = this;
	this.circle102.setTransform(108.8,124.2,0.207,0.207,0,0,0,9.4,9.9);

	this.circle101 = new lib.circle();
	this.circle101.parent = this;
	this.circle101.setTransform(110.3,110.8,0.207,0.207,0,0,0,9.4,9.9);

	this.circle100 = new lib.circle();
	this.circle100.parent = this;
	this.circle100.setTransform(119,101.8,0.207,0.207,0,0,0,9.4,9.9);

	this.circle99 = new lib.circle();
	this.circle99.parent = this;
	this.circle99.setTransform(126.3,91.4,0.207,0.207,0,0,0,9.4,9.9);

	this.circle98 = new lib.circle();
	this.circle98.parent = this;
	this.circle98.setTransform(131.2,80.6,0.207,0.207,0,0,0,9.4,9.9);

	this.circle97 = new lib.circle();
	this.circle97.parent = this;
	this.circle97.setTransform(3.5,45.8,0.274,0.274,0,0,0,9.1,9.8);

	this.circle96 = new lib.circle();
	this.circle96.parent = this;
	this.circle96.setTransform(2.5,56.7,0.274,0.274,0,0,0,9.1,9.8);

	this.circle95 = new lib.circle();
	this.circle95.parent = this;
	this.circle95.setTransform(3.5,67.5,0.274,0.274,0,0,0,9.1,9.8);

	this.circle94 = new lib.circle();
	this.circle94.parent = this;
	this.circle94.setTransform(6.3,77.9,0.274,0.274,0,0,0,9.1,9.8);

	this.circle93 = new lib.circle();
	this.circle93.parent = this;
	this.circle93.setTransform(11,87.8,0.274,0.274,0,0,0,9.1,9.8);

	this.circle92 = new lib.circle();
	this.circle92.parent = this;
	this.circle92.setTransform(17.1,96.7,0.274,0.274,0,0,0,9.1,9.8);

	this.circle91 = new lib.circle();
	this.circle91.parent = this;
	this.circle91.setTransform(96.1,110.5,0.288,0.288,0,0,0,9.1,9.9);

	this.circle90 = new lib.circle();
	this.circle90.parent = this;
	this.circle90.setTransform(104.8,104.4,0.288,0.288,0,0,0,9.1,9.9);

	this.circle89 = new lib.circle();
	this.circle89.parent = this;
	this.circle89.setTransform(112.8,96.8,0.288,0.288,0,0,0,9.1,9.9);

	this.circle88 = new lib.circle();
	this.circle88.parent = this;
	this.circle88.setTransform(119.1,87.9,0.288,0.288,0,0,0,9.1,9.9);

	this.circle87 = new lib.circle();
	this.circle87.parent = this;
	this.circle87.setTransform(123.3,77.8,0.288,0.288,0,0,0,9.1,9.9);

	this.circle86 = new lib.circle();
	this.circle86.parent = this;
	this.circle86.setTransform(126.4,67.5,0.288,0.288,0,0,0,9.1,9.9);

	this.circle85 = new lib.circle();
	this.circle85.parent = this;
	this.circle85.setTransform(127.2,56.9,0.288,0.288,0,0,0,9.1,9.9);

	this.circle84 = new lib.circle();
	this.circle84.parent = this;
	this.circle84.setTransform(104.8,9.1,0.288,0.288,0,0,0,9.1,9.9);

	this.circle83 = new lib.circle();
	this.circle83.parent = this;
	this.circle83.setTransform(96.3,2.9,0.288,0.288,0,0,0,9.1,9.9);

	this.circle82 = new lib.circle();
	this.circle82.parent = this;
	this.circle82.setTransform(15.3,38.8,0.352,0.352,0,0,0,9.1,9.8);

	this.circle81 = new lib.circle();
	this.circle81.parent = this;
	this.circle81.setTransform(12.8,47.5,0.352,0.352,0,0,0,9.1,9.8);

	this.circle80 = new lib.circle();
	this.circle80.parent = this;
	this.circle80.setTransform(12.2,56.7,0.352,0.352,0,0,0,9.1,9.8);

	this.circle79 = new lib.circle();
	this.circle79.parent = this;
	this.circle79.setTransform(12.8,65.8,0.352,0.352,0,0,0,9.1,9.8);

	this.circle78 = new lib.circle();
	this.circle78.parent = this;
	this.circle78.setTransform(15.3,74.9,0.352,0.352,0,0,0,9.1,9.8);

	this.circle77 = new lib.circle();
	this.circle77.parent = this;
	this.circle77.setTransform(19.1,83.1,0.352,0.352,0,0,0,9.1,9.8);

	this.circle76 = new lib.circle();
	this.circle76.parent = this;
	this.circle76.setTransform(24.5,90.7,0.352,0.352,0,0,0,9.1,9.8);

	this.circle75 = new lib.circle();
	this.circle75.parent = this;
	this.circle75.setTransform(91.3,102.6,0.352,0.352,0,0,0,9.1,9.8);

	this.circle74 = new lib.circle();
	this.circle74.parent = this;
	this.circle74.setTransform(98.8,97.2,0.352,0.352,0,0,0,9.1,9.8);

	this.circle73 = new lib.circle();
	this.circle73.parent = this;
	this.circle73.setTransform(105.2,90.6,0.352,0.352,0,0,0,9.1,9.8);

	this.circle72 = new lib.circle();
	this.circle72.parent = this;
	this.circle72.setTransform(110.6,83.1,0.352,0.352,0,0,0,9.1,9.8);

	this.circle71 = new lib.circle();
	this.circle71.parent = this;
	this.circle71.setTransform(114.6,74.9,0.352,0.352,0,0,0,9.1,9.8);

	this.circle70 = new lib.circle();
	this.circle70.parent = this;
	this.circle70.setTransform(116.7,65.8,0.352,0.352,0,0,0,9.1,9.8);

	this.circle69 = new lib.circle();
	this.circle69.parent = this;
	this.circle69.setTransform(117.7,56.7,0.352,0.352,0,0,0,9.1,9.8);

	this.circle68 = new lib.circle();
	this.circle68.parent = this;
	this.circle68.setTransform(116.7,47.5,0.352,0.352,0,0,0,9.1,9.8);

	this.circle67 = new lib.circle();
	this.circle67.parent = this;
	this.circle67.setTransform(114.6,38.8,0.352,0.352,0,0,0,9.1,9.8);

	this.circle66 = new lib.circle();
	this.circle66.parent = this;
	this.circle66.setTransform(110.6,30.3,0.352,0.352,0,0,0,9.1,9.8);

	this.circle65 = new lib.circle();
	this.circle65.parent = this;
	this.circle65.setTransform(105.2,22.9,0.352,0.352,0,0,0,9.1,9.8);

	this.circle64 = new lib.circle();
	this.circle64.parent = this;
	this.circle64.setTransform(98.7,16.3,0.352,0.352,0,0,0,9.1,9.8);

	this.circle63 = new lib.circle();
	this.circle63.parent = this;
	this.circle63.setTransform(91.3,11,0.352,0.352,0,0,0,9.1,9.8);

	this.circle62 = new lib.circle();
	this.circle62.parent = this;
	this.circle62.setTransform(31.7,28.9,0.4,0.4,0,0,0,9,9.8);

	this.circle61 = new lib.circle();
	this.circle61.parent = this;
	this.circle61.setTransform(27.5,35.1,0.4,0.4,0,0,0,9,9.8);

	this.circle60 = new lib.circle();
	this.circle60.parent = this;
	this.circle60.setTransform(24.3,41.9,0.4,0.4,0,0,0,9,9.8);

	this.circle59 = new lib.circle();
	this.circle59.parent = this;
	this.circle59.setTransform(22.3,49.1,0.4,0.4,0,0,0,9,9.8);

	this.circle58 = new lib.circle();
	this.circle58.parent = this;
	this.circle58.setTransform(21.7,56.7,0.4,0.4,0,0,0,9,9.8);

	this.circle57 = new lib.circle();
	this.circle57.parent = this;
	this.circle57.setTransform(22.3,64.2,0.4,0.4,0,0,0,9,9.8);

	this.circle56 = new lib.circle();
	this.circle56.parent = this;
	this.circle56.setTransform(24.3,71.5,0.4,0.4,0,0,0,9,9.8);

	this.circle55 = new lib.circle();
	this.circle55.parent = this;
	this.circle55.setTransform(27.5,78.3,0.4,0.4,0,0,0,9,9.8);

	this.circle54 = new lib.circle();
	this.circle54.parent = this;
	this.circle54.setTransform(31.9,84.6,0.4,0.4,0,0,0,9,9.8);

	this.circle53 = new lib.circle();
	this.circle53.parent = this;
	this.circle53.setTransform(37.2,89.8,0.4,0.4,0,0,0,9,9.8);

	this.circle52 = new lib.circle();
	this.circle52.parent = this;
	this.circle52.setTransform(79.6,97.2,0.4,0.4,0,0,0,9,9.8);

	this.circle51 = new lib.circle();
	this.circle51.parent = this;
	this.circle51.setTransform(86.5,94.2,0.4,0.4,0,0,0,9,9.8);

	this.circle50 = new lib.circle();
	this.circle50.parent = this;
	this.circle50.setTransform(92.7,89.8,0.4,0.4,0,0,0,9,9.8);

	this.circle49 = new lib.circle();
	this.circle49.parent = this;
	this.circle49.setTransform(98,84.4,0.4,0.4,0,0,0,9,9.8);

	this.circle48 = new lib.circle();
	this.circle48.parent = this;
	this.circle48.setTransform(102.3,78.3,0.4,0.4,0,0,0,9,9.8);

	this.circle47 = new lib.circle();
	this.circle47.parent = this;
	this.circle47.setTransform(105.4,71.5,0.4,0.4,0,0,0,9,9.8);

	this.circle46 = new lib.circle();
	this.circle46.parent = this;
	this.circle46.setTransform(107.4,64.2,0.4,0.4,0,0,0,9,9.8);

	this.circle45 = new lib.circle();
	this.circle45.parent = this;
	this.circle45.setTransform(108,56.6,0.4,0.4,0,0,0,9,9.8);

	this.circle44 = new lib.circle();
	this.circle44.parent = this;
	this.circle44.setTransform(107.4,49.2,0.4,0.4,0,0,0,9,9.8);

	this.circle43 = new lib.circle();
	this.circle43.parent = this;
	this.circle43.setTransform(105.4,41.9,0.4,0.4,0,0,0,9,9.8);

	this.circle42 = new lib.circle();
	this.circle42.parent = this;
	this.circle42.setTransform(102.3,35.1,0.4,0.4,0,0,0,9,9.8);

	this.circle41 = new lib.circle();
	this.circle41.parent = this;
	this.circle41.setTransform(97.9,28.9,0.4,0.4,0,0,0,9,9.8);

	this.circle40 = new lib.circle();
	this.circle40.parent = this;
	this.circle40.setTransform(92.7,23.6,0.4,0.4,0,0,0,9,9.8);

	this.circle39 = new lib.circle();
	this.circle39.parent = this;
	this.circle39.setTransform(72.4,14.3,0.4,0.4,0,0,0,9,9.8);

	this.circle38 = new lib.circle();
	this.circle38.parent = this;
	this.circle38.setTransform(64.9,13.5,0.4,0.4,0,0,0,9,9.8);

	this.circle37 = new lib.circle();
	this.circle37.parent = this;
	this.circle37.setTransform(57.5,14.3,0.4,0.4,0,0,0,9,9.8);

	this.circle36 = new lib.circle();
	this.circle36.parent = this;
	this.circle36.setTransform(35.7,39.9,0.4,0.4,0,0,0,9,9.8);

	this.circle35 = new lib.circle();
	this.circle35.parent = this;
	this.circle35.setTransform(33.3,45.3,0.4,0.4,0,0,0,9,9.8);

	this.circle34 = new lib.circle();
	this.circle34.parent = this;
	this.circle34.setTransform(31.8,50.9,0.4,0.4,0,0,0,9,9.8);

	this.circle33 = new lib.circle();
	this.circle33.parent = this;
	this.circle33.setTransform(31.4,56.8,0.4,0.4,0,0,0,9,9.8);

	this.circle32 = new lib.circle();
	this.circle32.parent = this;
	this.circle32.setTransform(31.8,62.5,0.4,0.4,0,0,0,9,9.8);

	this.circle31 = new lib.circle();
	this.circle31.parent = this;
	this.circle31.setTransform(33.2,68.2,0.4,0.4,0,0,0,9,9.8);

	this.circle30 = new lib.circle();
	this.circle30.parent = this;
	this.circle30.setTransform(35.7,73.5,0.4,0.4,0,0,0,9,9.8);

	this.circle29 = new lib.circle();
	this.circle29.parent = this;
	this.circle29.setTransform(39.1,78.3,0.4,0.4,0,0,0,9,9.8);

	this.circle28 = new lib.circle();
	this.circle28.parent = this;
	this.circle28.setTransform(43.3,82.5,0.4,0.4,0,0,0,9,9.8);

	this.circle27 = new lib.circle();
	this.circle27.parent = this;
	this.circle27.setTransform(48,86.1,0.4,0.4,0,0,0,9,9.8);

	this.circle26 = new lib.circle();
	this.circle26.parent = this;
	this.circle26.setTransform(53.4,88.4,0.4,0.4,0,0,0,9,9.8);

	this.circle25 = new lib.circle();
	this.circle25.parent = this;
	this.circle25.setTransform(59,89.8,0.4,0.4,0,0,0,9,9.8);

	this.circle24 = new lib.circle();
	this.circle24.parent = this;
	this.circle24.setTransform(64.7,90.4,0.4,0.4,0,0,0,9,9.8);

	this.circle23 = new lib.circle();
	this.circle23.parent = this;
	this.circle23.setTransform(70.7,89.8,0.4,0.4,0,0,0,9,9.8);

	this.circle22 = new lib.circle();
	this.circle22.parent = this;
	this.circle22.setTransform(76.4,88.4,0.4,0.4,0,0,0,9,9.8);

	this.circle21 = new lib.circle();
	this.circle21.parent = this;
	this.circle21.setTransform(81.5,85.8,0.4,0.4,0,0,0,9,9.8);

	this.circle20 = new lib.circle();
	this.circle20.parent = this;
	this.circle20.setTransform(86.5,82.5,0.4,0.4,0,0,0,9,9.8);

	this.circle19 = new lib.circle();
	this.circle19.parent = this;
	this.circle19.setTransform(90.7,78.1,0.417,0.417,0,0,0,9,9.7);

	this.circle18 = new lib.circle();
	this.circle18.parent = this;
	this.circle18.setTransform(94,73.5,0.415,0.4,0,0,0,9.1,9.6);

	this.circle17 = new lib.circle();
	this.circle17.parent = this;
	this.circle17.setTransform(96.5,68.1,0.417,0.4,0,0,0,9,9.6);

	this.circle16 = new lib.circle();
	this.circle16.parent = this;
	this.circle16.setTransform(97.9,62.5,0.4,0.4,0,0,0,9,9.6);

	this.circle15 = new lib.circle();
	this.circle15.parent = this;
	this.circle15.setTransform(98.4,56.7,0.4,0.4,0,0,0,9,9.6);

	this.circle14 = new lib.circle();
	this.circle14.parent = this;
	this.circle14.setTransform(98,50.9,0.4,0.401,0,0,0,9.1,9.6);

	this.circle12 = new lib.circle();
	this.circle12.parent = this;
	this.circle12.setTransform(93.8,39.8,0.4,0.4,0,0,0,9,9.6);

	this.circle13 = new lib.circle();
	this.circle13.parent = this;
	this.circle13.setTransform(96.5,45.1,0.419,0.4,0,0,0,9.2,9.5);

	this.circle11 = new lib.circle();
	this.circle11.parent = this;
	this.circle11.setTransform(90.5,34.9,0.4,0.4,0,0,0,9,9.6);

	this.circle10 = new lib.circle();
	this.circle10.parent = this;
	this.circle10.setTransform(86.4,30.7,0.4,0.4,0,0,0,9.1,9.6);

	this.circle9 = new lib.circle();
	this.circle9.parent = this;
	this.circle9.setTransform(81.5,27.6,0.4,0.4,0,0,0,9,9.6);

	this.circle8 = new lib.circle();
	this.circle8.parent = this;
	this.circle8.setTransform(76.3,24.9,0.396,0.396,0,0,0,8.8,9.2);

	this.circle7 = new lib.circle();
	this.circle7.parent = this;
	this.circle7.setTransform(70.6,23.4,0.396,0.396,0,0,0,8.8,9.1);

	this.circle6 = new lib.circle();
	this.circle6.parent = this;
	this.circle6.setTransform(64.6,22.8,0.396,0.396,0,0,0,8.8,9.1);

	this.circle5 = new lib.circle();
	this.circle5.parent = this;
	this.circle5.setTransform(58.8,23.4,0.396,0.396,0,0,0,8.8,9.1);

	this.circle4 = new lib.circle();
	this.circle4.parent = this;
	this.circle4.setTransform(53.1,24.9,0.396,0.396,0,0,0,8.8,9.2);

	this.circle3 = new lib.circle();
	this.circle3.parent = this;
	this.circle3.setTransform(47.9,27.2,0.396,0.396,0,0,0,8.8,9.2);

	this.circle2 = new lib.circle();
	this.circle2.parent = this;
	this.circle2.setTransform(43.2,30.6,0.396,0.396,0,0,0,8.8,9.2);

	this.circle1 = new lib.circle();
	this.circle1.parent = this;
	this.circle1.setTransform(39,34.8,0.396,0.396,0,0,0,9,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circle1},{t:this.circle2},{t:this.circle3},{t:this.circle4},{t:this.circle5},{t:this.circle6},{t:this.circle7},{t:this.circle8},{t:this.circle9},{t:this.circle10},{t:this.circle11},{t:this.circle13},{t:this.circle12},{t:this.circle14},{t:this.circle15},{t:this.circle16},{t:this.circle17},{t:this.circle18},{t:this.circle19},{t:this.circle20},{t:this.circle21},{t:this.circle22},{t:this.circle23},{t:this.circle24},{t:this.circle25},{t:this.circle26},{t:this.circle27},{t:this.circle28},{t:this.circle29},{t:this.circle30},{t:this.circle31},{t:this.circle32},{t:this.circle33},{t:this.circle34},{t:this.circle35},{t:this.circle36},{t:this.circle37},{t:this.circle38},{t:this.circle39},{t:this.circle40},{t:this.circle41},{t:this.circle42},{t:this.circle43},{t:this.circle44},{t:this.circle45},{t:this.circle46},{t:this.circle47},{t:this.circle48},{t:this.circle49},{t:this.circle50},{t:this.circle51},{t:this.circle52},{t:this.circle53},{t:this.circle54},{t:this.circle55},{t:this.circle56},{t:this.circle57},{t:this.circle58},{t:this.circle59},{t:this.circle60},{t:this.circle61},{t:this.circle62},{t:this.circle63},{t:this.circle64},{t:this.circle65},{t:this.circle66},{t:this.circle67},{t:this.circle68},{t:this.circle69},{t:this.circle70},{t:this.circle71},{t:this.circle72},{t:this.circle73},{t:this.circle74},{t:this.circle75},{t:this.circle76},{t:this.circle77},{t:this.circle78},{t:this.circle79},{t:this.circle80},{t:this.circle81},{t:this.circle82},{t:this.circle83},{t:this.circle84},{t:this.circle85},{t:this.circle86},{t:this.circle87},{t:this.circle88},{t:this.circle89},{t:this.circle90},{t:this.circle91},{t:this.circle92},{t:this.circle93},{t:this.circle94},{t:this.circle95},{t:this.circle96},{t:this.circle97},{t:this.circle98},{t:this.circle99},{t:this.circle100},{t:this.circle101},{t:this.circle102},{t:this.circle103},{t:this.circle104}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NBNlogo, new cjs.Rectangle(0,0,133,131.8), null);


// stage content:
(lib.Better_Speed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_174 = function() {
		var nbnroot = this,
			nbnClip, nbnTrail;
		
		nbnClip = eval("nbnroot.NBNlogo");
		nbnTrail = eval("nbnroot.NBNtrail");
		
		TweenMax.from(nbnClip, 2.5, {rotation:-70, delay:2.0, ease:Expo.easeOut});
		TweenMax.from(nbnTrail, 3, {rotation:-15, delay:0.1, ease:Expo.easeOut});
		TweenMax.to(nbnroot.nbn, 1, {alpha:1, delay:1.5, ease:Sine.easeInOut});
	}
	this.frame_230 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(56).call(this.frame_230).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgMfAvMMAAAheXIY/AAMAAABeXgEgMaAu0IY1AAMAAAhdnI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(231));

	// nbn
	this.nbn = new lib.nbn();
	this.nbn.parent = this;
	this.nbn.setTransform(186.4,263.5,0.716,0.717,0,0,0,55.3,32.4);
	this.nbn.alpha = 0;
	this.nbn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nbn).wait(174).to({_off:false},0).wait(57));

	// NBNLogo
	this.NBNlogo = new lib.NBNlogo();
	this.NBNlogo.parent = this;
	this.NBNlogo.setTransform(80.2,272.8,0.842,0.843,0,0,0,67.9,67.7);
	this.NBNlogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.NBNlogo).wait(174).to({_off:false},0).wait(57));

	// nbnMid
	this.nbnMid = new lib.nbnMid();
	this.nbnMid.parent = this;
	this.nbnMid.setTransform(78.4,264.8,0.842,0.843,0,0,0,27.8,28.1);
	this.nbnMid._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nbnMid).wait(174).to({_off:false},0).wait(57));

	// Trail
	this.NBNtrail = new lib.NBNtrail();
	this.NBNtrail.parent = this;
	this.NBNtrail.setTransform(151.5,243.4,1.151,1.152,0,0,0,7.2,28.4);
	this.NBNtrail._off = true;

	this.timeline.addTween(cjs.Tween.get(this.NBNtrail).wait(174).to({_off:false},0).wait(57));

	// CTA
	this.instance = new lib.cta();
	this.instance.parent = this;
	this.instance.setTransform(151.5,170.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({_off:false},0).to({alpha:1},13).wait(1));

	// copy2
	this.instance_1 = new lib.copy2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(91.2,77.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).wait(76).to({alpha:0},14).wait(43));

	// copy1
	this.instance_2 = new lib.copy1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(98.6,54.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(68).to({alpha:0},13).wait(133));

	// man1
	this.instance_3 = new lib.man1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-0.99)).wait(157).to({alpha:0},14).wait(43));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(231));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,298,160,604);
// library properties:
lib.properties = {
	id: '3CDC4F089FBD487C864E6CD949F1A62E',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1507608665643", id:"bg"},
		{src:"images/man1.png?1507608665643", id:"man1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3CDC4F089FBD487C864E6CD949F1A62E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;