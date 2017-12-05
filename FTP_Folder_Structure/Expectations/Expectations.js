(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.man1 = function() {
	this.initialize(img.man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.man2 = function() {
	this.initialize(img.man2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAXIAAggIgOAUQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgOgUIAAAhQAAAEgFABQgFgBAAgEIAAgvQAAgEAFAAIABAAQAEAAABACIAQAaIASgaQABgCADAAIABAAQAFAAAAAEIAAAuQAAAGgFAAQgFAAAAgGg");
	this.shape.setTransform(16.7,-13.5,0.398,0.398,0,0,0,0.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAXIAAgpIgOAAQgEAAAAgFQAAgEAEAAIAlAAQAEAAAAAEQAAAFgEAAIgOAAIAAApQAAAGgFAAQgEAAAAgGg");
	this.shape_1.setTransform(14.2,-13.6,0.398,0.398);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBB7QgJgHAAgNIAAh2QAAgegOgQQgOgQgbAAQgZgBgPASQgQARAAAdIAAB1QAAANgJAHQgJAJgMAAQgMAAgJgJQgIgHAAgNIAAjKQAAgMAIgJQAIgJANAAQAMAAAJAJQAJAJAAAMIAAANQAegtAxAAQArAAAYAbQAYAaAAAtIAACIQAAANgIAHQgJAJgMAAQgNAAgIgJg");
	this.shape_2.setTransform(12.3,-6.2,0.398,0.398,0,0,0,0.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJCIIAAANQAAAMgIAJQgJAIgMAAQgNAAgIgIQgJgJAAgMIAAksQAAgNAJgIQAIgIANAAQAMAAAJAIQAIAIAAANIAAByQAigwA1AAQAwAAAiAjQAlAlAAA8IAAABQAAA9glAmQgiAigwAAQg0AAgjgtgAg0gLQgWAWAAAkIAAABQAAAkAWAYQAWAWAeAAQAfAAAUgWQAWgXAAglIAAgBQAAgkgWgWQgVgXgeAAQgeAAgWAXg");
	this.shape_3.setTransform(1.1,-7.9,0.398,0.398,0,0,0,0.1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABBB7QgJgHAAgNIAAh2QAAgegOgQQgOgQgbAAQgZgBgPASQgQARAAAdIAAB1QAAANgJAHQgJAJgMAAQgMAAgJgJQgIgHAAgNIAAjKQAAgMAIgJQAIgJANAAQAMAAAJAJQAJAJAAAMIAAANQAegtAxAAQArAAAYAbQAYAaAAAtIAACIQAAANgIAHQgJAJgMAAQgNAAgIgJg");
	this.shape_4.setTransform(-10.4,-6.2,0.398,0.398,0,0,0,0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A3674").s().p("AiVCWQg+g+AAhYQAAhWA+g/QA+g9BXgBQBYABA+A9QA+A/AABWQAABYg+A+Qg+A9hYAAQhXAAg+g9g");
	this.shape_5.setTransform(0.8,-6.3,0.954,0.954);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#489BD3").s().p("AggAhQgOgNAAgUQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAAUgOANQgOAOgTAAQgTAAgNgOg");
	this.shape_6.setTransform(22.6,-48.2,0.398,0.398);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#489BD3").s().p("AggAiQgOgOAAgUQAAgSAOgOQANgOATAAQATAAAOAOQAOAOAAASQAAAUgOAOQgOANgTAAQgTAAgNgNg");
	this.shape_7.setTransform(22.5,33.9,0.398,0.398);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#489BD3").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQAUAAAOAOQANANAAATQAAATgNAOQgOAOgUAAQgTAAgNgOg");
	this.shape_8.setTransform(29.3,29.1,0.398,0.398);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#489BD3").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
	this.shape_9.setTransform(35.2,23.3,0.398,0.398);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#489BD3").s().p("AggAiQgOgPAAgTQAAgTAOgNQANgOATAAQATAAAPAOQANANAAATQAAATgNAPQgPANgTAAQgTAAgNgNg");
	this.shape_10.setTransform(39.9,16.5,0.398,0.398);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#489BD3").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQAUAAANAOQAOANAAATQAAATgOAOQgNAOgUAAQgTAAgNgOg");
	this.shape_11.setTransform(43.4,9,0.398,0.398);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#489BD3").s().p("AggAiQgOgOAAgUQAAgTAOgNQAOgOASAAQATAAAOAOQAOANAAATQAAAUgOAOQgOANgTAAQgSAAgOgNg");
	this.shape_12.setTransform(45.5,1,0.398,0.398);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#489BD3").s().p("AggAiQgOgOAAgUQAAgTAOgNQANgOATAAQAUAAAOAOQANANAAATQAAAUgNAOQgOANgUAAQgTAAgNgNg");
	this.shape_13.setTransform(46.2,-7.2,0.398,0.398);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#489BD3").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQATAAAPAOQANANAAATQAAATgNAOQgPAOgTAAQgTAAgNgOg");
	this.shape_14.setTransform(29.3,-43.5,0.398,0.398);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#489BD3").s().p("AggAiQgOgOAAgUQAAgTAOgNQAOgOASAAQAUAAAOAOQANANAAATQAAAUgNAOQgOANgUAAQgSAAgOgNg");
	this.shape_15.setTransform(-47.9,-15.4,0.398,0.398);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#489BD3").s().p("AggAiQgOgOAAgUQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAAUgOAOQgOANgTAAQgTAAgNgNg");
	this.shape_16.setTransform(-48.7,-7.2,0.398,0.398);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#489BD3").s().p("AggAiQgOgOAAgUQAAgTAOgNQAOgOASAAQAUAAAOAOQANANAAATQAAAUgNAOQgOANgUAAQgSAAgOgNg");
	this.shape_17.setTransform(-47.9,1,0.398,0.398);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#489BD3").s().p("AggAiQgOgOAAgUQAAgSAOgOQANgOATAAQATAAAOAOQAOAOAAASQAAAUgOAOQgOANgTAAQgTAAgNgNg");
	this.shape_18.setTransform(-45.8,9,0.398,0.398);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#489BD3").s().p("AggAiQgOgPAAgTQAAgTAOgNQAOgOASAAQAUAAAOAOQANANAAATQAAATgNAPQgOANgUAAQgSAAgOgNg");
	this.shape_19.setTransform(-42.3,16.5,0.398,0.398);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#489BD3").s().p("AggAhQgOgOAAgTQAAgTAOgNQANgOATAAQATAAAOAOQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
	this.shape_20.setTransform(-37.6,23.3,0.398,0.398);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#489BD3").s().p("AgYAZQgKgKAAgPQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_21.setTransform(49.2,11.2,0.398,0.398);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#489BD3").s().p("AgXAZQgLgKAAgPQAAgOALgKQAJgKAOAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgNAAgKgKg");
	this.shape_22.setTransform(45.5,19.4,0.398,0.398);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#489BD3").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAPAAAJAKQALALAAANQAAAOgLAKQgJALgPAAQgOAAgKgLg");
	this.shape_23.setTransform(40,27.3,0.398,0.398);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#489BD3").s().p("AgYAYQgKgJAAgPQAAgOAKgKQALgKANAAQAOAAALAKQAKAKAAAOQAAAPgKAJQgLALgOAAQgNAAgLgLg");
	this.shape_24.setTransform(33.3,34,0.398,0.398);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#489BD3").s().p("AgYAZQgKgLAAgOQAAgNAKgKQALgLANAAQAOAAALALQAKAKAAANQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_25.setTransform(30,48.7,0.398,0.398);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#489BD3").s().p("AgYAZQgKgLAAgOQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgOAAgKgKg");
	this.shape_26.setTransform(26.5,44.1,0.398,0.398);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#489BD3").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_27.setTransform(32.1,44.1,0.398,0.398);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgSQARgRAYAAQAZAAARARQASASAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_28.setTransform(-38.9,-20.9,0.398,0.398);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3B7FBB").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARASAAAXQAAAZgRARQgSASgZAAQgYAAgSgSg");
	this.shape_29.setTransform(-40.8,-14.2,0.398,0.398);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3B7FBB").s().p("AgpArQgSgSAAgZQAAgYASgSQARgRAYAAQAZAAARARQASATAAAXQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape_30.setTransform(-41.4,-7.2,0.398,0.398);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3B7FBB").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgXAAgTgSg");
	this.shape_31.setTransform(-40.8,-0.2,0.398,0.398);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_32.setTransform(-38.9,6.5,0.398,0.398);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_33.setTransform(-36,12.9,0.398,0.398);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQASgSAXAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_34.setTransform(18.9,-42,0.398,0.398);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_35.setTransform(24.6,-38,0.398,0.398);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_36.setTransform(29.6,-33,0.398,0.398);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_37.setTransform(33.6,-27.3,0.398,0.398);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgSQASgRAXAAQAZAAARARQASASAAAYQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_38.setTransform(36.5,-20.9,0.398,0.398);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgXASgSQASgSAXAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_39.setTransform(38.3,-14.2,0.398,0.398);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3B7FBB").s().p("AgpArQgSgSAAgZQAAgYASgSQARgRAYAAQAZAAARARQASASAAAYQAAAZgSASQgRARgZAAQgYAAgRgRg");
	this.shape_40.setTransform(39,-7.2,0.398,0.398);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_41.setTransform(38.3,-0.2,0.398,0.398);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgXASgSQASgSAXAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_42.setTransform(36.5,6.5,0.398,0.398);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_43.setTransform(33.6,12.9,0.398,0.398);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_44.setTransform(29.6,18.6,0.398,0.398);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_45.setTransform(24.6,23.6,0.398,0.398);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQASgSAXAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgXAAgSgSg");
	this.shape_46.setTransform(18.9,27.6,0.398,0.398);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3B7FBB").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_47.setTransform(-32,18.6,0.398,0.398);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_48.setTransform(-6.9,-39.6,0.398,0.398);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#306CA8").s().p("AgwAxQgUgVAAgcQAAgcAUgUQAUgVAcAAQAdAAAUAVQAUAUAAAcQAAAcgUAVQgUAUgdAAQgcAAgUgUg");
	this.shape_49.setTransform(10,23.7,0.398,0.398);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_50.setTransform(15.2,21.2,0.398,0.398);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_51.setTransform(19.9,18,0.398,0.398);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_52.setTransform(24,13.9,0.398,0.398);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAVgdgBQgcABgUgVg");
	this.shape_53.setTransform(27.3,9.2,0.398,0.398);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#306CA8").s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_54.setTransform(29.7,4,0.398,0.398);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_55.setTransform(31.2,-1.5,0.398,0.398);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_56.setTransform(31.7,-7.2,0.398,0.398);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_57.setTransform(31.2,-12.9,0.398,0.398);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_58.setTransform(29.7,-18.4,0.398,0.398);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_59.setTransform(27.2,-23.6,0.398,0.398);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_60.setTransform(24,-28.3,0.398,0.398);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_61.setTransform(19.9,-32.4,0.398,0.398);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_62.setTransform(4.5,-39.6,0.398,0.398);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_63.setTransform(-1.2,-40.1,0.398,0.398);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_64.setTransform(-26.4,-28.3,0.398,0.398);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_65.setTransform(-29.7,-23.6,0.398,0.398);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_66.setTransform(-32.1,-18.4,0.398,0.398);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_67.setTransform(-33.6,-12.9,0.398,0.398);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_68.setTransform(-34.1,-7.2,0.398,0.398);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_69.setTransform(-33.6,-1.5,0.398,0.398);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_70.setTransform(-32.1,4,0.398,0.398);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAVgdgBQgcABgUgVg");
	this.shape_71.setTransform(-29.7,9.2,0.398,0.398);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_72.setTransform(-26.4,13.9,0.398,0.398);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#306CA8").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");
	this.shape_73.setTransform(-22.3,18,0.398,0.398);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#21518F").s().p("AgiLAQgPgJgKgQQgLAOgRAHQgSAGgSgDQgTgEgOgMQgNgLgHgSQgNAMgSAEQgTAEgRgHQgSgGgMgQQgMgOgCgRQgQAJgSABQgTAAgQgJQgRgKgIgQQgKgQABgTQgRAGgSgCQgSgDgPgMQgPgMgFgSQgHgRAEgSQgSADgRgGQgSgFgMgPQgMgPgDgSQgDgSAHgRQgTAAgQgIQgQgKgKgQQgJgQAAgTQABgSAJgQQgSgDgOgMQgPgLgGgSQgHgSAEgSQADgSANgNQgSgHgLgNQgNgOgDgTQgEgSAHgSQAHgRAOgLQgQgJgJgQQgKgQAAgTQAAgSAKgQQAJgPAQgKQgOgLgHgRQgHgSAEgSQADgTANgNQAMgOARgHQgNgNgDgSQgEgSAHgSQAGgRAPgMQAOgMASgDQgJgQgBgSQAAgSAJgRQAKgQAQgJQAQgJATAAQgHgRADgSQADgSAMgPQANgPARgFQARgHASAFQgEgTAHgRQAFgSAPgMQAPgMASgDQASgDARAHQgBgTAKgQQAIgQARgKQAQgJATAAQASABAQAJQACgRAMgOQAMgQASgGQARgGATADQASAEANAMQAHgSANgLQAOgMATgEQASgDASAGQARAHALAPQAKgRAPgJQAQgKASAAQASAAARAKQAQAJAJAQQALgOARgHQARgGATADQATAEANAMQAOAMAHARQANgMASgEQASgEASAHQASAGALAQQAMAOADARQAQgJASgBQATAAAQAJQAQAKAKAQQAIAQAAATQARgHASADQASADAPAMQAPAMAFASQAHARgEASQASgEARAHQASAFAMAPQAMAPADASQACASgGARQATAAAQAJQAQAJAKAQQAJARAAASQgBASgJAQQASADAOAMQAPAMAGARQAHASgEASQgDASgNANQASAHALAOQAMANAEATQADATgGARQgHARgOALQAQAKAJAPQAKAQAAASQAAATgKAQQgJAQgQAJQAOALAHARQAGASgDASQgEATgMAOQgLANgSAHQANANADASQAEASgHASQgGASgPALQgOAMgSADQAJAQABASQAAATgJAQQgKAQgQAKQgQAIgTAAQAGARgCASQgDASgMAPQgMAPgSAFQgRAGgSgDQAEASgHARQgFASgPAMQgPAMgSADQgSACgRgGQAAATgIAQQgKAQgQAKQgQAJgTAAQgSgBgQgJQgDARgMAOQgLAQgSAGQgSAHgSgEQgSgDgNgNQgHASgOALQgNANgTADQgTADgRgGQgRgHgLgOQgJAQgQAJQgQAKgTAAQgSAAgQgKgAA0JSQAQgcAfgFQAfgGAYAVQAMgeAdgKQAcgLAdAPQAGgfAbgPQANgIAQgBQAOgBAOAEQAAgfAYgUQAYgUAgAFQgGggAVgYQAUgYAfAAQgKgeAQgbQAPgbAfgGQgPgdALgcQAKgdAegMQgVgYAGgfQAFgeAcgRQgZgVAAgfQAAgeAZgVQgcgQgFgfQgGgfAVgYQgegLgKgeQgLgcAPgdQgfgGgPgbQgQgbAKgeQgfAAgUgYQgVgYAGggQggAGgYgUQgYgVAAgfQgOAEgOgBQgQgBgNgIQgbgPgGggQgdAQgcgKQgdgLgMgeQgYAVgfgGQgfgFgQgcQgVAYgfABQgfgBgUgYQgRAcgeAFQgfAGgYgVQgLAdgeAMQgdAKgcgQQgGAggbAPQgNAIgQABQgOABgOgEQgBAfgYAVQgXAUgggGQAGAggUAYQgVAYgfAAQAKAegQAbQgPAbggAGQAQAcgKAdQgLAegfALQAWAYgGAfQgGAggcAPQAZAUAAAfQAAAggZAUQAcAQAGAfQAFAegVAZQAfAMALAdQAKAdgQAcQAgAGAPAbQAQAbgKAeQAfAAAVAYQAUAYgGAgQAggFAXAUQAYATABAgQAOgEAOABQAQABANAIQAbAQAGAeQAcgPAdALQAdAKAMAeQAYgVAfAGQAeAFARAcQAVgZAeAAQAfAAAVAZg");
	this.shape_74.setTransform(0.8,-6.3,0.398,0.398);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-50.1,101.1,100.2);


(lib.man2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man2_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.man1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.man1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.man1_1, new cjs.Rectangle(-150,-125,300,250), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAkQgIgIAAgQIAAgvQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAoQAAAWATAAQAIAAAGgFQAFgHAAgKIAAgoQAAgEADgDQADgDAFAAQAEAAADADQADADAAAEIAABFQAAAFgDADQgDADgEAAQgEAAgEgDQgDgDAAgFIAAgEQgKAQgQAAQgPAAgJgKg");
	this.shape.setTransform(91.5,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAhQgOgNAAgTIAAgBQAAgSAOgOQAOgNATAAQAVAAANANQANAOABASQgBAUgNANQgOANgUAAQgUAAgNgNgAgTgTQgHAIAAALQAAAMAIAIQAHAIALAAQAMABAIgJQAHgHAAgMIAAgBQAAgLgHgIQgIgJgMABQgLgBgIAJg");
	this.shape_1.setTransform(80.8,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA4QgGgCAAgGQAAgJAIAAIAEABIAHABQAJAAAEgJIABgCIgihJIgBgFQAAgKAKAAQAIAAACAIIAXA6IAXg6QACgIAIAAQAEAAACADQADADAAAEIgBAFIghBNQgFAOgGAFQgHAGgKAAQgIAAgHgDg");
	this.shape_2.setTransform(70.7,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghAhQgNgNAAgTIAAgBQAAgSANgOQAOgNATAAQAUAAAOANQANAOAAASQAAAUgNANQgOANgUAAQgUAAgNgNgAgTgTQgHAIAAALQAAAMAHAIQAIAIALAAQAMABAHgJQAIgHAAgMIAAgBQAAgLgIgIQgHgJgMABQgLgBgIAJg");
	this.shape_3.setTransform(55.1,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAgIAAguIgEAAQgDAAgDgCQgDgDAAgEQAAgDADgDQADgDADABIAEAAIAAgQQAAgEADgDQADgDAEAAQAEAAACADQADADAAAEIAAAQIAQAAQADgBADADQADADAAADQAAAEgDADQgCACgEAAIgQAAIAAArQAAALALAAIAFAAQAEgBACADQADACAAAEQAAAGgGACQgHACgHAAQgYAAAAgag");
	this.shape_4.setTransform(46.2,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAkQgDgDAAgFQgBgIAJAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAOAJALAAQAOAAAAgKIAAAAQAAgFgGgDIgNgEQgcgIAAgRIAAgBQAAgMAJgIQAJgHANAAQAOAAAOAHQAFACgBAGQABAIgJAAIgEgBQgMgGgIAAQgMAAAAAJQAAAFAGADIANAFQAcAIAAARQAAANgKAIQgJAHgOAAQgRAAgRgKg");
	this.shape_5.setTransform(33.5,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAgIAAguIgEAAQgDAAgDgCQgDgDAAgEQAAgDADgDQADgDADABIAEAAIAAgQQAAgEADgDQADgDAEAAQAEAAACADQADADAAAEIAAAQIAQAAQADgBADADQADADAAADQAAAEgDADQgCACgEAAIgQAAIAAArQAAALALAAIAFAAQAJgBAAAJQAAAGgGACQgHACgHAAQgYAAAAgag");
	this.shape_6.setTransform(25.8,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAiQgOgNAAgUIAAgBQAAgSANgOQAMgNASAAQATAAANAOQAKAMAAASQAAACgDADQgDADgDAAIg3AAQABALAIAGQAGAGAKAAQALAAAKgIIAEgCQAEAAACACQACADAAADQAAAEgCADQgNAMgTgBQgTAAgMgMgAgOgWQgGAGgBAKIAsAAQgBgKgGgGQgFgHgLABQgHgBgHAHg");
	this.shape_7.setTransform(17.3,18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkAzQgFgCAAgGQAAgDACgDQADgCAEAAIADAAQANAIAOAAQAbAAAAgcIAAgHQgMARgRAAQgRAAgLgLQgNgMAAgSQAAgTANgMQALgLARAAQAQAAANAPIAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEIAAA9QAAAWgMALQgMAMgXAAQgRAAgSgIgAgRgiQgIAHABAKIAAABQgBALAIAFQAHAHAKAAQAKAAAIgHQAIgGAAgKIAAgBQAAgKgIgHQgIgHgKAAQgKAAgHAHg");
	this.shape_8.setTransform(6.4,19.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggAzQgNgNAAgWQAAgTANgOQALgMASAAQARAAALAQIAAgnQAAgEADgDQADgDAFAAQAEAAADADQADADAAAEIAABnQAAAFgDADQgDADgEAAQgFAAgDgDQgDgDAAgFIAAgFQgLARgRAAQgRAAgMgMgAgRgDQgIAHAAAMQAAANAIAJQAHAHAKAAQALAAAHgIQAIgIAAgNQAAgMgIgHQgHgIgLAAQgKAAgHAIg");
	this.shape_9.setTransform(-10,17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWArQgCgDAAgFIAAgnQAAgXgTAAQgIAAgGAHQgGAFAAALIAAAnQAAAFgDADQgCADgFAAQgEAAgDgDQgDgDAAgFIAAhFQAAgEADgDQADgDAEAAQAFAAACADQADADAAAEIAAAFQALgQAQAAQAPAAAJAJQAIAKAAAPIAAAuQAAAFgDADQgDADgEAAQgFAAgDgDg");
	this.shape_10.setTransform(-20.6,18.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAnQgJgHAAgNIAAgBQAAgOAKgGQAKgHAQAAQAMAAALADIAAgCQAAgTgVAAQgKAAgJADIgEABQgIAAAAgJQAAgGAFgCQAQgFAMAAQATAAALAKQAJAJAAASIAAArQAAAEgDADQgDADgEAAQgKAAAAgIIAAgEQgLANgRAAQgNAAgJgHgAgTARIAAABQAAAGAFAEQAEADAIAAQAJAAAHgFQAHgFAAgJIAAgGQgJgDgLAAQgUAAAAAOg");
	this.shape_11.setTransform(-31.1,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAvIAAAEQAAAFgCADQgDADgFAAQgEAAgDgDQgDgDAAgFIAAhnQAAgEADgDQADgDAEAAQAFAAADADQACADAAAEIAAAoQAMgRASAAQARAAAMAMQAMANAAAUQAAAWgMANQgNAMgQAAQgRAAgNgQgAgRgDQgIAHAAAMQAAANAIAIQAHAIAKAAQALAAAHgHQAHgJABgNQgBgMgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_12.setTransform(-41.3,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAzQgNgNAAgWQAAgTANgOQAMgMAQAAQARAAAMAQIAAgnQAAgEAEgDQACgDAEAAQAFAAADADQADADAAAEIAABnQAAAFgDADQgDADgEAAQgEAAgDgDQgEgDAAgFIAAgFQgLARgSAAQgQAAgMgMgAgRgDQgIAHABAMQgBANAIAJQAHAHAKAAQAKAAAIgIQAIgIAAgNQAAgMgIgHQgIgIgKAAQgKAAgHAIg");
	this.shape_13.setTransform(-53,17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAnQgJgHAAgNIAAgBQAAgOAKgGQAKgHAQAAQALAAAMADIAAgCQAAgTgVAAQgKAAgJADIgEABQgIAAAAgJQAAgGAFgCQAQgFAMAAQATAAALAKQAJAJAAASIAAArQAAAEgDADQgDADgEAAQgKAAAAgIIAAgEQgLANgRAAQgNAAgJgHgAgTARIAAABQAAAGAFAEQAEADAIAAQAJAAAHgFQAHgFAAgJIAAgGQgJgDgMAAQgTAAAAAOg");
	this.shape_14.setTransform(-63.7,18.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghAhQgOgNAAgTIAAgBQAAgSAOgOQAOgNATAAQAUAAAOANQAOAOAAASQAAAUgOANQgOANgUAAQgUAAgNgNgAgTgTQgHAIAAALQAAAMAHAIQAJAIAKAAQAMABAHgJQAIgHAAgMIAAgBQAAgLgIgIQgHgJgMABQgLgBgIAJg");
	this.shape_15.setTransform(-73.9,18.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXArQgCgDAAgFIAAhFQAAgEACgDQADgDAFAAQADAAAEADQADADAAAEIAAAJQAHgUAOAAQALAAAAALQAAAIgJABQgYAEABAeIAAAaQAAAFgDADQgEADgDAAQgFAAgDgDg");
	this.shape_16.setTransform(-82.2,18.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAvIAAAEQAAAFgDADQgCADgFAAQgEAAgDgDQgDgDAAgFIAAhnQAAgEADgDQADgDAEAAQAFAAACADQADADAAAEIAAAoQAMgRASAAQARAAAMAMQAMANAAAUQAAAWgMANQgNAMgQAAQgSAAgMgQgAgRgDQgIAHAAAMQAAANAIAIQAHAIAKAAQALAAAHgHQAHgJAAgNQAAgMgHgHQgHgIgLAAQgKAAgHAIg");
	this.shape_17.setTransform(-91.6,17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdAuQgJAAgCgJIgSg0IgQA0QgEAJgHAAIgBAAQgIAAgEgJIgXhDIgBgFQAAgEADgDQACgDAFAAQAHAAADAIIARA1IARg1QACgIAIAAIABAAQAHAAADAIIASA1IARg1QADgIAHAAQAEAAADADQADADgBAEIgBAEIgYBEQgDAJgIAAg");
	this.shape_18.setTransform(89.9,-1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAiQgNgNAAgUIAAgBQAAgSAMgOQAMgNATAAQATAAAMAOQALAMAAASQAAACgDADQgCADgFAAIg3AAQACALAHAGQAHAGAJAAQAMAAAJgIQADgCADAAQAHAAABAJQAAADgDADQgNAMgTgBQgTAAgNgMgAgOgXQgGAHgCAKIAtAAQgDgXgTAAQgIAAgHAGg");
	this.shape_19.setTransform(77.9,-1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWArQgCgDAAgFIAAgnQgBgXgSAAQgJAAgFAHQgGAFAAALIAAAnQAAAFgDADQgDADgEAAQgEAAgDgDQgDgDAAgFIAAhFQAAgKAKAAQAEAAADADQADADAAAEIAAAFQAMgQAPAAQAPAAAIAJQAJAKAAAPIAAAuQAAAFgDADQgDADgEAAQgEAAgEgDg");
	this.shape_20.setTransform(67.7,-1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXArQgCgDAAgFIAAhFQAAgEACgDQAEgDAEAAQAEAAADADQADADAAAEIAAAJQAEgIAEgGQAHgGAHAAQAJAAABALQgBAIgHABQgYAEAAAeIAAAaQAAAFgDADQgDADgEAAQgEAAgEgDg");
	this.shape_21.setTransform(54.3,-1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfAkQgIgIAAgQIAAgvQAAgEADgDQADgDAEAAQAEAAAEADQACADAAAEIAAApQAAAVATAAQAIAAAGgFQAGgHAAgKIAAgoQAAgEADgDQACgDAFAAQAEAAADADQADADAAAEIAABFQAAAFgDADQgDADgEAAQgFAAgCgDQgDgDAAgFIAAgEQgMAQgPAAQgQAAgIgKg");
	this.shape_22.setTransform(45.1,-1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AghAhQgNgNAAgTIAAgBQAAgSANgOQAOgNATAAQAUAAAOANQANAOAAASQAAAUgNANQgOANgUAAQgUAAgNgNgAgSgTQgIAIAAALQAAAMAIAIQAHAIALABQAMAAAHgJQAIgHAAgMIAAgBQAAgLgIgIQgHgJgMABQgLgBgHAJg");
	this.shape_23.setTransform(34.3,-1.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiA4QgGgCAAgGQAAgJAIAAIAEABIAHABQAIAAAFgJIAAgCIghhJIgBgFQAAgKAKAAQAHAAADAIIAXA6IAWg6QAEgIAGAAQAEAAADADQADADAAAEIgBAFIggBNQgGANgGAGQgHAGgKAAQgIAAgHgDg");
	this.shape_24.setTransform(24.2,-0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAcAuQgIAAgDgJIgRg0IgRA0QgDAJgIAAIAAAAQgJAAgDgJIgYhDIgBgFQAAgEADgDQADgDAEAAQAIAAACAIIASA1IARg1QACgIAIAAIABAAQAIAAACAIIASA1IARg1QACgIAIAAQAEAAADADQADADAAAEIgBAEIgZBEQgDAJgIAAg");
	this.shape_25.setTransform(7,-1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AghAhQgNgNAAgTIAAgBQAAgSANgOQAOgNAUAAQATAAAOANQANAOAAASQAAAUgNANQgNANgVAAQgTAAgOgNgAgSgTQgIAIAAALQAAAMAIAIQAIAIALABQAMAAAHgJQAHgHABgMIAAgBQgBgLgHgIQgIgJgMABQgLgBgHAJg");
	this.shape_26.setTransform(-5.5,-1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAWA8QgDgDAAgFIAAgpQAAgVgTAAQgIAAgFAGQgGAFABAKIAAApQAAAFgEADQgDADgEAAQgEAAgDgDQgDgDAAgFIAAhoQAAgDADgEQADgCAEgBQAEABADACQAEAEAAADIAAAnQAKgPAQAAQAPAAAIAJQAJAJAAAOIAAAwQAAAFgDADQgDADgEAAQgFAAgDgDg");
	this.shape_27.setTransform(-16.2,-3.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAgIAAguIgDAAQgDAAgDgCQgDgDAAgEQAAgDADgDQADgDADABIADAAIAAgQQAAgEADgDQADgDAFAAQAEAAACADQADADAAAEIAAAQIAQAAQADgBADADQADADAAADQAAAEgDADQgCACgEAAIgQAAIAAArQAAALALAAIAFAAQADgBADADQACACAAAEQAAAGgFACQgHACgHAAQgZAAAAgag");
	this.shape_28.setTransform(-30.1,-2.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAkQgJgIAAgQIAAgvQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAApQAAAVATAAQAJAAAFgFQAGgHAAgKIAAgoQAAgEADgDQACgDAFAAQAEAAADADQADADAAAEIAABFQAAAFgDADQgDADgEAAQgFAAgCgDQgDgDAAgFIAAgEQgMAQgQAAQgPAAgHgKg");
	this.shape_29.setTransform(-38.7,-1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AghAhQgNgNAAgTIAAgBQAAgSANgOQAOgNATAAQAVAAANANQANAOAAASQAAAUgNANQgNANgVAAQgTAAgOgNgAgSgTQgIAIAAALQAAAMAIAIQAIAIAKABQAMAAAHgJQAIgHAAgMIAAgBQAAgLgIgIQgHgJgMABQgLgBgHAJg");
	this.shape_30.setTransform(-49.5,-1.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AggAzQgNgNAAgWQAAgUANgNQAMgMAQAAQARAAANAQIAAgnQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABnQAAAFgDADQgDADgEAAQgEAAgDgDQgDgDAAgFIAAgFQgNARgRAAQgQAAgMgMgAgQgEQgJAIABAMQgBANAJAJQAGAHALAAQAKAAAIgIQAHgIAAgNQAAgMgHgIQgIgHgKAAQgLAAgGAHg");
	this.shape_31.setTransform(-66,-3.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWArQgDgDABgFIAAgnQgBgXgSAAQgJAAgFAHQgGAFABALIAAAnQAAAFgEADQgDADgEAAQgEAAgDgDQgDgDAAgFIAAhFQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEIAAAFQAKgQAQAAQAPAAAIAJQAJAKAAAPIAAAuQAAAFgDADQgDADgEAAQgEAAgEgDg");
	this.shape_32.setTransform(-76.6,-1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGA7QgDgDAAgFIAAhFQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAABFQAAAFgDADQgDADgEAAQgDAAgDgDgAgKgyIAAgBQAAgKAKAAQAMAAAAAKIAAABQAAAKgMAAQgKAAAAgKg");
	this.shape_33.setTransform(-84.3,-3.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgoA5QgDgDAAgFIAAhhQAAgFADgDQADgCAEAAIBEAAQAJAAAAAJQAAAEgCACQgDAEgEAAIg6AAIAAAfIAyAAQAKAAAAAJQAAAEgDACQgDADgEAAIgyAAIAAAnQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_34.setTransform(-91.8,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#21327E").s().p("AxKEdQhAAAgug6Qgtg5AAhQIAAiyQAAhRAtg6QAug5BAAAMAiUAAAQBBAAAuA5QAuA6AABRIAACyQAABQguA5QguA6hBAAg");
	this.shape_35.setTransform(-1.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(-126.5,-20.1,250.9,57), null);


(lib.copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21307C").s().p("AgHAKQgEgDAAgGIAAgBQgBgFAEgEQADgDAFAAQAFAAADADQAEAEAAAFIAAABQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(74.1,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#21307C").s().p("AgeAjQgNgNAAgWQgBgTANgOQANgOATAAQAUAAAMAPQAMANAAASQAAADgEADQgDADgDAAIg6AAQACALAHAGQAHAGAKAAQAMAAAKgIIAFgCQAIAAAAAJQAAAEgDACQgNAMgUAAQgTAAgNgNgAgXgGIAuAAQAAgLgGgGQgGgHgKAAQgUAAgEAYg");
	this.shape_1.setTransform(66.7,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21307C").s().p("AA1AtQgEgDAAgFIAAgqQABgXgUAAQgTAAgBAXIAAAqQAAAFgCADQgDADgFAAQgDAAgDgDQgEgDABgFIAAgqQgBgWgSAAQgKAAgFAGQgGAHAAAKIAAApQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIAAhIIABAAQAAgEAEgDQADgEADAAQAFAAADAEQADADABAEIAAAEQALgQARAAQATAAAIAQQALgQATAAQAQAAAIAJQAJAKAAAQIAAAxQAAAFgEADQgDADgDAAQgEAAgEgDg");
	this.shape_2.setTransform(53,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21307C").s().p("AgiAjQgOgOAAgUQAAgTAOgPQAOgOAUAAQAVAAAOAOQAOAOAAATQAAAUgOAOQgOAOgVAAIgBAAQgTAAgOgNgAgTgTQgIAIAAALQAAAMAIAJQAIAJALAAQANABAIgJQAHgIAAgNQAAgLgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_3.setTransform(38.9,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21307C").s().p("AAYA+QgDgEAAgEIAAgrQAAgWgUAAQgIAAgGAGQgGAFAAALIAAArQAAAEgDAEQgEADgEAAQgFAAgCgDQgDgEAAgEIAAhrQAAgEADgDQADgEAEAAQAEAAADAEQADADAAAEIAAAoQALgQASAAQAPAAAJAJQAIAKAAAPIAAAxQAAAEgDAEQgDADgEAAQgEAAgDgDg");
	this.shape_4.setTransform(27.9,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#21307C").s().p("AgRAiIAAgxIgDAAQgEAAgDgCQgCgDAAgEQAAgDACgDQADgDAEAAIADAAIAAgQQAAgEAEgDQADgDAEAAQAFAAACADQADADAAAEIAAAQIARAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAIgRAAIAAAsQAAAMALAAIAFgBQAEAAACADQADADAAADQAAAGgGADQgFABgKAAIgFABQgUAAAAgag");
	this.shape_5.setTransform(13.6,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#21307C").s().p("AAXAmIAAgEQgKANgTAAQgQgBgJgHQgLgIAAgNQAAgPALgHQAKgIASABQAMAAAMADIAAgBQAAgVgWABQgOAAgGAEIgDAAQgEABgDgDQgCgDAAgEQAAgFAGgDQANgEAQAAQATAAAMAKQAKAJAAATIAAAtQAAAFgDADQgDADgEgBQgKABAAgKgAgPAEQgGAEAAAHQAAAGAGAFQAEADAIAAQAKACAHgGQAIgFAAgJIAAgHQgOgEgHAAQgKAAgGAEg");
	this.shape_6.setTransform(4.7,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#21307C").s().p("AgsA7QgDgEAAgEIAAhkQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFIAAAFQAMgQATAAQARAAANAMQANANAAAXQAAAVgNANQgMAMgSAAQgRABgOgRIAAAhQAAAFgDADQgDADgFgBQgEAAgDgCgAgRghQgJAIAAANQAAAMAJAJQAHAIAKAAQALAAAHgIQAIgJAAgMQAAgNgHgIQgIgJgLAAQgKAAgHAJg");
	this.shape_7.setTransform(86,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#21307C").s().p("AAXAtQgDgDAAgFIAAgFQgKAQgSAAQgPAAgJgJQgJgLAAgQIAAgwQAAgEADgEQADgDAEAAQAEAAAEADQADAEAAAEIAAArQAAAWAUABQAIgBAFgFQAHgHAAgLIAAgqQAAgEADgDQADgDAEgBQAFABADADQADADAAAEIABBJQAAAFgDADQgEADgEAAQgEAAgEgDg");
	this.shape_8.setTransform(74.4,-2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#21307C").s().p("AAYAtQgDgDAAgFIAAgFQgLAQgSAAQgPAAgJgJQgJgLAAgQIAAgwQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEIAAArQAAAWAUABQAIgBAGgFQAGgHAAgLIAAgqQAAgEAEgDQADgDAEgBQAFABADADQADADAAAEIAABJQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_9.setTransform(58.2,-2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#21307C").s().p("AgiAjQgOgOAAgUQAAgTAOgPQAOgOAUAAQAVAAAOAOQAOAOAAATQAAAUgOAOQgPAOgUAAIgDAAQgSAAgNgNgAgTgTQgHAIAAALQAAAMAIAJQAIAJALAAQAMABAIgJQAIgJAAgMQAAgMgIgIQgIgJgMAAQgLAAgJAJg");
	this.shape_10.setTransform(47.2,-2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#21307C").s().p("AgjA7QgHgDAAgGQAAgEADgDQACgCAEAAIAEABIAHABQAJAAAEgKIABgCIgihMIgBgFQAAgFADgCQADgDAEAAQAGAAAEAIIAYA8IAXg8QAFgIAFAAQAKAAAAAKIgBAFIgiBQQgGAOgGAGQgHAGgLAAIgDAAQgFAAgGgCg");
	this.shape_11.setTransform(36.6,-1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#21307C").s().p("AgJA3QgIgHAAgOIAAgxIgDAAQgDAAgDgCQgDgDAAgEQAAgDADgDQADgDADAAIADAAIAAgQQAAgKALAAQAFAAACADQADADAAAEIAAAQIARAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAIgRAAIAAAsQAAANALAAIAFgBQAEAAADACQACADAAAEQAAAGgGACQgFACgKAAIgEAAQgIAAgFgFg");
	this.shape_12.setTransform(22.6,-4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#21307C").s().p("AgeAjQgOgOAAgVQAAgTANgOQANgOASAAQAVAAAMAPQAMANAAASQAAADgDADQgDADgEAAIg5AAQADAWAXAAQANABAJgIIAFgDQAIAAAAAKQAAAFgDABQgOAMgUAAQgTAAgNgNgAgPgYQgGAHgBALIAtAAQgBgZgVAAQgJABgHAGg");
	this.shape_13.setTransform(13.8,-2.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#21307C").s().p("AggAkQgEgCAAgFQAAgEADgDQADgCADAAIAFABQANAJANAAQAOAAAAgKQAAgIgUgFQgOgEgGgDQgJgHAAgMQAAgNAJgIQAKgHANAAQAOAAAPAIQAEADAAAFQAAAEgCACQgDADgEAAIgDgBQgMgGgKAAQgFAAgDADQgEACAAAEQAAAIAUAFQANAEAGAEQAKAHAAALQAAAOgKAIQgJAHgPAAQgTgBgQgLg");
	this.shape_14.setTransform(4.1,-2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#21307C").s().p("AgGA9QgEgDAAgFIAAhqQAAgFAEgCQACgDAEAAQAEAAADADQAEADAAAEIAABqQAAAFgEADQgDADgEAAQgEAAgCgDg");
	this.shape_15.setTransform(67.9,-25.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#21307C").s().p("AgHA9QgCgDAAgFIAAhqQAAgFACgCQAEgDADAAQAEAAAEADQACADAAAEIAABqQAAAFgCADQgEADgEAAQgDAAgEgDg");
	this.shape_16.setTransform(62.9,-25.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#21307C").s().p("AgGA9QgDgEAAgEIAAhIQAAgEADgDQADgEADABQAEgBAEAEQADADAAAEIAABIQAAAEgDAEQgEADgEAAQgDAAgDgDgAgLg0IAAgBQAAgKALAAQAMAAAAAKIAAABQAAAKgMAAQgLAAAAgKg");
	this.shape_17.setTransform(57.8,-25.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#21307C").s().p("AAdAvQgKABgCgKIgRg2IgSA2QgEAKgIgBIgBAAQgHAAgDgKIgZhEQgBgCAAgEQAAgEAEgDQACgCAEAAQAJAAABAHIASA3IASg3QAEgHAHAAIAAAAQAIAAADAHIASA3IATg3QABgHAIAAQAFAAADACQADADgBAEIgBAGIgZBFQgCAKgKgBg");
	this.shape_18.setTransform(47.8,-23.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#21307C").s().p("AgQAiIAAgwIgEAAQgEAAgCgDQgDgCAAgEQAAgDADgDQACgDAEAAIAEAAIAAgQQAAgFACgDQAEgDAEAAQAFAAACADQADADAAAFIAAAQIARAAQAEAAADADQACADAAADQAAAJgJAAIgRAAIAAAsQAAAMALAAIAFgBQAJAAAAAJQAAAHgGABQgFACgKAAIgGAAQgSAAAAgag");
	this.shape_19.setTransform(31.5,-25.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#21307C").s().p("AAXAmIAAgDQgKANgTAAQgQgBgJgIQgKgHAAgOQAAgPALgHQAKgIARAAQAKAAAOAFIAAgCQAAgVgXAAQgNAAgGAFIgDABQgEgBgCgCQgDgDAAgDQAAgHAFgCQAPgEAPgBQATAAALALQALAJgBAUIAAAtQAAAEgCADQgDACgFABQgKAAABgKgAgVAQQAAAGAFAEQAFADAIAAQAJACAIgFQAGgGABgIIAAgIQgJgDgMAAQgWAAABAPg");
	this.shape_20.setTransform(22.8,-23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#21307C").s().p("AAYA9QgDgDgBgFIAAgrQAAgWgTAAQgIAAgHAHQgFAFAAAKIAAArQgBAFgDADQgDADgFAAQgEAAgCgDQgEgDAAgFIABhqQAAgFADgCQADgDAEAAQAFAAADADQADADAAAEIAAAoQALgQARAAQAPAAAJAJQAJAJgBAQIAAAwQAAAFgDADQgCADgFAAQgEAAgDgDg");
	this.shape_21.setTransform(12.4,-25.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#21307C").s().p("AgRAiIAAgwIgDAAQgJAAAAgJQAAgDADgDQADgDADAAIADAAIAAgQQgBgFAEgDQADgDAEAAQAFAAADADQADADAAAFIAAAQIARAAQAEAAADADQACADAAADQAAAJgJAAIgRAAIAAAsQAAAMALAAIAFgBQAJAAAAAJQAAAHgHABQgFACgJAAIgHAAQgSAAAAgag");
	this.shape_22.setTransform(3.4,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy3, new cjs.Rectangle(0.4,-32,90.5,55.1), null);


(lib.copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21307C").s().p("AgZAkIAAhIIgCAAQAAgEADgDQADgDAEAAQAFAAADADQAEADAAAEIAAAJQAHgTAPAAQALgBAAAKQAAAJgIABQgYAHAAAcIAAAcQAAAFgDADQgEADgEAAQgKAAAAgLg");
	this.shape.setTransform(72.3,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#21307C").s().p("AgeAjQgNgNAAgWQgBgTANgOQANgOATAAQAUAAANAPQAKANABASQAAADgEADQgDADgDAAIg6AAQABALAIAGQAHAGAKAAQANAAAJgIIAFgCQAIAAAAAJQAAAEgDACQgNAMgUAAQgTAAgNgNgAgPgXQgHAHgBAKIAuAAQgBgYgWAAQgIAAgHAHg");
	this.shape_1.setTransform(62.9,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21307C").s().p("AAeA+QgEgDAAgFIAAgFQgLAQgTAAQgSAAgMgMQgOgNAAgXQAAgVAOgNQAMgMASAAQAQgBAOARIAAgpQABgEADgDQACgDAFAAQAEAAADADQAEADAAAEIAABsIABAAQAAAFgDADQgEADgEAAQgFAAgDgDgAgQgCQgIAHAAAOQAAAOAIAIQAHAIALAAQAKAAAJgIQAHgJABgNQgBgNgHgIQgJgIgKAAQgLAAgHAIg");
	this.shape_2.setTransform(51.4,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21307C").s().p("AgJA1IAAhIQAAgEADgDQADgEADAAQAFAAADAEQADADAAAEIAABIQAAAFgDADQgDADgFAAQgJAAAAgLgAgLg0IAAgBQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEIAAABQAAAFgEADQgDACgFAAQgLAAAAgKg");
	this.shape_3.setTransform(43.3,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21307C").s().p("AAAAwQgIgBgEgIIgehGIgBgGQAAgDACgEQAEgCAEAAQAHgBAEAJIAXA8IAXg9QAEgHAGAAQALAAAAAKIgCAFIgfBGQgDAJgIAAg");
	this.shape_4.setTransform(35.7,-6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#21307C").s().p("AgiAjQgOgOAAgUQAAgTAOgPQAOgOAUAAQAVAAAOAOQAOAOAAATQAAAUgOAOQgPAOgUAAIgBAAQgTAAgOgNgAgTgTQgIAIAAALQABAMAHAJQAJAJAKAAQANABAIgJQAIgJAAgMQgBgMgHgIQgIgJgNAAQgLAAgIAJg");
	this.shape_5.setTransform(25.2,-7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#21307C").s().p("AgXAsQgDgDAAgFIAAhIIgBAAQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEIAAAJQAEgIAGgGQAGgFAGAAQALgBAAAKQABAJgJABQgYAHAAAcIAAAcQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_6.setTransform(16.6,-6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#21307C").s().p("AgsA7QgDgDAAgEIAAhmQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEIAAAGQALgRAUAAQARAAAMANQAOANAAAXQAAAVgOANQgMANgRAAQgSAAgNgQIAAAhQAAAKgLAAQgEAAgDgDgAgSgiQgIAIAAAOQAAAMAIAJQAIAIAKAAQAKAAAIgJQAHgIABgMQgBgOgHgIQgIgIgKAAQgLAAgHAIg");
	this.shape_7.setTransform(7,-5.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#21307C").s().p("AgRAiIAAgxIgCAAQgEAAgDgCQgDgDAAgEQAAgDADgDQADgDAEAAIACAAIAAgQQABgEADgDQADgDAEAAQAFAAACADQADADAAAEIAAAQIARAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAIgRAAIAAAsQAAAMALAAIAFgBQAEAAADADQACADAAADQAAAFgFAEQgGABgJAAIgGABQgUAAAAgag");
	this.shape_8.setTransform(-8.1,-8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#21307C").s().p("AgeAjQgOgNAAgWQABgTANgOQANgOARAAQAVAAANAPQALANgBASQAAADgCADQgDADgEAAIg5AAQABALAIAGQAGAGAKAAQANAAAJgIIAFgCQAIAAAAAJQAAAFgDABQgNAMgUAAQgTAAgNgNgAgPgXQgHAHgBAKIAuAAQgBgKgGgHQgGgHgKAAQgJAAgGAHg");
	this.shape_9.setTransform(-16.9,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#21307C").s().p("AAYAsQgDgDAAgFIAAgqQAAgWgVAAQgHAAgGAGQgHAGABAKIAAAqQAAAFgDADQgEADgEAAQgFAAgCgDQgDgDAAgFIAAhIQAAgEADgDQACgDAFAAQAEAAAEADQADADAAAEIAAAGQAKgRARABQAQAAAJAJQAJAKAAAQIAAAvQAAAFgDADQgEADgDAAQgFAAgDgDg");
	this.shape_10.setTransform(-27.6,-6.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#21307C").s().p("AgXAsQgDgDAAgFIAAhIIAAAAQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAJQAEgIAFgGQAHgFAGAAQALgBAAAKQAAAJgIABQgYAHAAAcIAAAcQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_11.setTransform(-36.2,-6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#21307C").s().p("AgeAjQgOgNAAgWQAAgTAOgOQANgOARAAQAVAAAMAPQALANAAASQAAADgDADQgCADgFAAIg4AAQABALAIAGQAGAGALAAQAMAAAJgIIAGgCQAHAAABAJQAAAEgEACQgQAMgQAAQgUAAgNgNgAgOgXQgHAHgCAKIAvAAQgBgKgHgHQgFgHgLAAQgIAAgGAHg");
	this.shape_12.setTransform(-45.5,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#21307C").s().p("AgKA3QgHgHAAgOIAAgxIgDAAQgDAAgDgCQgDgDAAgEQAAgDADgDQADgDADAAIADAAIAAgQQAAgEADgDQADgDAFAAQAFAAACADQADADAAAEIAAAQIARAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAIgRAAIAAAsQAAAMALAAIAFgBQAEAAADADQACADAAADQAAAGgGADQgFABgKAAIgEABQgIAAgGgFg");
	this.shape_13.setTransform(-54.3,-8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#21307C").s().p("AAYAsQgEgDAAgFIAAgqQABgWgVAAQgHAAgGAGQgHAGABAKIAAAqQAAAFgDADQgEADgEAAQgFAAgCgDQgDgDAAgFIAAhIQAAgEADgDQACgDAFAAQAEAAAEADQADADAAAEIAAAGQALgRAQABQAQAAAJAJQAJAKAAAQIAAAvQAAAFgEADQgDADgDAAQgFAAgDgDg");
	this.shape_14.setTransform(-63.2,-6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#21307C").s().p("AgJA1IAAhIQAAgEADgDQADgEADAAQAFAAADAEQADADAAAEIAABIQAAAFgDADQgDADgFAAQgJAAAAgLgAgLg0IAAgBQAAgEADgDQAEgDAEAAQAFAAAEADQADADAAAEIAAABQAAAKgMAAQgLAAAAgKg");
	this.shape_15.setTransform(-71.2,-8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#21307C").s().p("AgiA1QgNgNAAgXQAAgUANgOQAMgNASAAQAQABAOAQIAAgpQAAgEAEgDQADgDADgBQAFABADADQADADABAEIAABsIABAAQAAAFgEADQgDADgFAAQgEAAgDgDQgDgDgBgFIAAgFQgMARgSAAQgSAAgMgNgAgRgDQgIAHAAAOQAAAOAIAJQAHAHALABQALgBAIgHQAIgKAAgNQAAgNgIgHQgIgJgLAAQgLABgHAHg");
	this.shape_16.setTransform(13.8,-29.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#21307C").s().p("AAYAsQgEgDAAgFIAAgpQABgXgVAAQgHAAgGAGQgHAGABALIAAApQAAAFgDADQgEADgEAAQgFAAgCgDQgDgDAAgFIAAhHQAAgFADgDQACgDAFAAQAEAAAEADQADADAAAFIAAAFQAJgQASAAQAQAAAJAJQAJAKAAAQIAAAvQAAAFgEADQgDADgDAAQgFAAgDgDg");
	this.shape_17.setTransform(2.9,-27.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#21307C").s().p("AAWAmIAAgDQgJAMgUAAQgPAAgJgIQgKgHAAgPQAAgOAKgHQAKgIASABQALgBANAFIAAgCQAAgVgWABQgOgBgGAFIgEAAQgDABgDgDQgDgCAAgFQAAgGAGgCQAPgEAOAAQATgBAMALQAKAJAAAUIAAAsQAAAFgDADQgDACgEAAQgKAAAAgJgAgVAQQAAAGAFAEQAFAEAIgBQAJACAHgFQAIgGAAgIIAAgHQgKgFgLAAQgVABAAAPg");
	this.shape_18.setTransform(-7.9,-27.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#21307C").s().p("AgeAjQgOgNAAgWQAAgTANgOQANgOATAAQAUAAANAPQALANAAASQAAADgDADQgDADgEAAIg5AAQADAWAXAAQANABAJgIIAFgDQAIAAAAAKQAAAFgDABQgOAMgTAAQgUAAgNgNgAgPgYQgGAHgCALIAuAAQAAgLgGgHQgGgGgLgBQgIABgHAGg");
	this.shape_19.setTransform(-23.4,-27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#21307C").s().p("AAYAsQgEgDAAgFIAAgpQABgXgVAAQgIAAgGAGQgFAGAAALIAAApQAAAFgEADQgDADgEAAQgFAAgCgDQgDgDgBgFIAAhHQABgFADgDQACgDAFAAQAEAAADADQAEADAAAFIAAAFQAJgQASAAQAQAAAJAJQAJAKAAAQIAAAvQAAAFgEADQgDADgDAAQgFAAgDgDg");
	this.shape_20.setTransform(-34.1,-27.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#21307C").s().p("AgiAjQgOgOAAgUQAAgTAOgPQAOgOAUAAQAUAAAPAOQAOAOAAATQAAAUgOAOQgPAOgUAAIgDAAQgSAAgNgNgAgSgTQgIAIAAALQAAAMAIAJQAIAJALAAQAMABAIgJQAIgJAAgMQAAgMgIgIQgIgJgMAAQgMAAgHAJg");
	this.shape_21.setTransform(-45.3,-28);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#21307C").s().p("AAYA+QgDgEAAgEIAAgrQAAgWgVAAQgHAAgGAHQgHAFAAAKIAAArQAAAEgCAEQgEADgEAAQgFAAgDgDQgCgEAAgEIAAhrQAAgEACgDQADgEAFAAQAEAAAEAEQACADAAAEIAAAoQALgQARAAQAQAAAJAKQAJAJAAAPIAAAxQAAAEgDAEQgEADgDAAQgFAAgDgDg");
	this.shape_22.setTransform(-56.4,-29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#21307C").s().p("AgsA7QgDgEAAgEIAAhkQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFIAAAFQANgQASAAQASAAAMAMQANANAAAXQAAAVgNANQgMAMgSAAQgRABgOgRIAAAhQAAAFgDADQgDADgFgBQgEAAgDgCgAgSghQgIAIAAANQAAAMAIAJQAIAIAKAAQALAAAIgIQAHgJAAgMQAAgNgHgIQgIgJgLAAQgKAAgIAJg");
	this.shape_23.setTransform(-67.6,-26.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#21307C").s().p("AgZAkIAAhHIgBAAQAAgFADgDQACgDAFAAQAEAAAEADQADADAAAFIAAAJQAGgUAPAAQAMAAAAAKQAAAHgJADQgYAEAAAfIAAAbQAAAFgDADQgDADgEAAQgKAAAAgLg");
	this.shape_24.setTransform(28.5,-48.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#21307C").s().p("AAXAtQgDgEAAgEIAAgFQgKAQgSAAQgQAAgIgKQgJgKAAgQIAAgwQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFIAAArQAAAXAUgBQAIAAAGgFQAGgHAAgKIAAgqQAAgFADgDQADgEAFABQAEgBAEAEQADADAAAFIAABIQAAAFgDADQgEADgEAAQgEAAgEgDg");
	this.shape_25.setTransform(18.8,-49);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#21307C").s().p("AgjAjQgNgNAAgVQAAgUAOgOQAOgOAUAAQAUAAAPAOQAOAOAAATQAAAUgOAOQgPAOgUAAIgDAAQgSAAgOgNgAgSgUQgJAJABALQgBAMAJAJQAIAJALAAQAMAAAIgIQAIgJAAgMQAAgMgIgJQgIgIgMAAQgMAAgHAIg");
	this.shape_26.setTransform(7.8,-49);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#21307C").s().p("AgjA7QgHgDAAgGQAAgEADgDQADgCADAAIAEABIAHABQAIAAAFgKIABgCIgihMIgBgFQAAgFADgCQADgDAEAAQAHAAADAIIAYA8IAXg8QAEgIAGAAQAKAAAAAKIgBAFIgiBQQgGAOgGAGQgHAGgLAAIgEAAQgEAAgGgCg");
	this.shape_27.setTransform(-2.7,-47.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#21307C").s().p("AggAkQgEgEAAgDQAAgEACgDQADgCAEAAIAFABQANAJANAAQAOAAAAgKQAAgIgUgFQgOgEgFgDQgKgHAAgMQAAgNAKgIQAJgHANAAQAQAAAOAIQAEAEAAAEQAAADgCADQgDADgEAAIgEgBQgMgGgKAAQgMAAAAAJQAAAHAUAGQAdAIAAASQAAAOgKAHQgJAIgPAAQgQgBgTgLg");
	this.shape_28.setTransform(-17.7,-48.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#21307C").s().p("AgOAUQAAgDAEgBQAKgDAAgNQgJgCAAgKIAAgBQAAgEAEgEQADgDAEAAQANgBAAAQIAAACQAAAPgJAKQgHAHgIABQgFgBAAgFg");
	this.shape_29.setTransform(-24.1,-54.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#21307C").s().p("AgKA4QgHgHAAgPIAAgwIgDAAQgEAAgCgDQgDgCAAgEQAAgDADgDQACgDAEAAIADAAIAAgQQAAgFAEgDQADgDAEAAQAFAAACADQADADAAAFIAAAQIARAAQAEAAADADQACADAAADQAAAJgJAAIgRAAIAAAsQAAAMALAAIAFgBQAJAAAAAJQAAAHgGABQgFACgKAAIgFAAQgHAAgGgEg");
	this.shape_30.setTransform(-30.1,-50.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#21307C").s().p("AgJA1IAAhIQAAgEADgDQADgEADABQAEgBAEAEQADADAAAEIAABIQAAAFgDADQgDADgFAAQgJAAAAgLgAgLg0IAAgBQAAgKALAAQAMAAAAAKIAAABQAAAKgMAAQgLAAAAgKg");
	this.shape_31.setTransform(-36.2,-50.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#21307C").s().p("AgIA4QgIgHAAgPIAAgwIgDAAQgFAAgCgDQgDgCAAgEQAAgDADgDQACgDAFAAIACAAIAAgQQAAgFADgDQADgDAFAAQAEAAADADQADADAAAFIAAAQIARAAQAEAAACADQADADAAADQAAAJgJAAIgRAAIAAAsQAAAMALAAIAFgBQAJAAAAAJQAAAHgGABQgFACgKAAIgFAAQgGAAgFgEg");
	this.shape_32.setTransform(-47.6,-50.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#21307C").s().p("AAYAtQgEgEAAgEIAAgFQgKAQgSAAQgPAAgJgKQgJgKAAgQIAAgwQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFIAAArQAAAXAUgBQAJAAAFgFQAGgHAAgKIAAgqQAAgFADgDQADgEAFABQAEgBAEAEQADADAAAFIAABIQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_33.setTransform(-56.6,-49);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#21307C").s().p("AgaAxIAAAEQAAAEgDADQgDAEgFAAQgEAAgDgEQgDgDAAgEIAAhrQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEIAAApQANgRASAAQASAAAMANQANANAAAVQAAAWgNAOQgMAMgSAAQgRAAgOgQgAgSgEQgIAIAAANQAAAMAIAJQAIAJAKAAQALAAAIgJQAHgIAAgNQAAgOgHgHQgIgJgLAAQgKAAgIAJg");
	this.shape_34.setTransform(-67.6,-50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy2, new cjs.Rectangle(-72.4,-57,147.5,57.7), null);


(lib.copy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21307C").s().p("AAVA8IgZgiIgOAMIAAAQQAAAEgDAEQgEADgEAAQgEAAgDgDQgDgEAAgEIAAhrQAAgFADgDQADgEAEAAQAEAAAEAEQADADAAAFIAABCIAnglQAFgFAEgBQAJABAAAJQAAAFgFAEIgZAXIAcAkIADAIQAAAEgDADQgDACgEAAQgHABgCgGg");
	this.shape.setTransform(-15.2,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#21307C").s().p("AgWAtQgDgEAAgEIAAhIIgCAAQABgFADgDQACgEAFAAQAEAAADAEQAEADAAAFIAAAJQAHgVAPAAQALABAAAJQgBAIgHADQgYAFAAAeIAAAcQAAAEgDAEQgEADgEAAQgFAAgCgDg");
	this.shape_1.setTransform(-23.7,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21307C").s().p("AgiAjQgOgOAAgUQAAgTAOgPQAOgOAUAAQAVAAAOAOQAOAOAAATQAAAUgOAOQgOAOgVAAIgBAAQgTAAgOgNgAgTgTQgIAIAAALQAAAMAIAJQAIAJALAAQANABAIgJQAHgIAAgNQAAgMgIgIQgIgJgMAAQgLAAgIAJg");
	this.shape_2.setTransform(-33.5,39.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21307C").s().p("AAdAvQgIAAgEgIIgRg2IgRA2QgDAJgIgBIgBAAQgJABgCgKIgZhGQgBgBAAgDQAAgFADgCQACgDAFgBQAIABACAHIASA4IASg4QADgHAHgBIAAAAQAJABACAHIASA4IASg4QACgHAIgBQAFABADADQACACAAAFIgBAEIgZBHQgDAIgJAAg");
	this.shape_3.setTransform(-46.5,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#21307C").s().p("AgRAiIAAgxIgDAAQgDAAgDgCQgCgDgBgEQABgDACgDQADgDADAAIADAAIAAgQQABgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAQIARAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAIgSAAIAAAsQAAAMALAAIAFgBQAEAAACADQADADAAADQAAAGgFADQgFABgLAAIgFABQgTAAAAgag");
	this.shape_4.setTransform(-57.5,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#21307C").s().p("AgeAjQgNgOAAgVQAAgTAMgOQANgOATAAQAUAAAMAPQAMANAAASQgBAEgDADQgCACgFAAIg4AAQABALAHAGQAIAGAJAAQANAAAJgIIAFgCQAJAAAAAJQAAAEgDACQgOAMgTAAQgUAAgNgNgAgOgXQgHAGgBALIAtAAQAAgLgHgGQgGgHgJAAQgJAAgGAHg");
	this.shape_5.setTransform(-66.3,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#21307C").s().p("AAYAtQgEgEAAgEIAAgqQABgYgVAAQgHAAgGAHQgHAGABALIAAAqQAAAEgDAEQgEADgEAAQgFAAgCgDQgDgEAAgEIAAhIQAAgFADgDQACgEAFAAQAEAAAEAEQADADAAAFIAAAEQALgQAQAAQAQAAAJAKQAJAKAAAPIAAAxQAAAEgEAEQgDADgDAAQgFAAgDgDg");
	this.shape_6.setTransform(-77.1,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#21307C").s().p("AggAkQgEgCAAgFQAAgEADgCQACgDAEAAIAFABQANAJANAAQAOAAAAgKQAAgIgUgFQgOgEgGgDQgJgHAAgMQAAgNAKgIQAJgHANAAQAOAAAPAIQAFADAAAFQAAAEgDADQgCACgEAAIgEgBQgMgGgKAAQgMAAAAAJQAAAIAUAFQAdAIAAASQAAAOgKAIQgJAHgPAAQgUgCgPgKg");
	this.shape_7.setTransform(72.7,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#21307C").s().p("AggAkQgEgCAAgFQAAgEACgCQADgDAEAAIAFABQANAJANAAQANAAAAgKQAAgIgTgFQgPgEgFgDQgKgHAAgMQAAgNALgIQAIgHANAAQAPAAAOAIQAGADAAAFQgBAEgCADQgDACgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgMgGgKAAQgMAAAAAJQAAAIAUAFQAdAIAAASQAAAOgKAIQgJAHgPAAQgVgCgOgKg");
	this.shape_8.setTransform(64.1,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#21307C").s().p("AgeAjQgOgNAAgWQAAgTANgOQAOgOARAAQAVAAANAPQAKANABASQAAADgDADQgEADgDAAIg6AAQABALAIAGQAHAGAKAAQANAAAJgIIAFgCQAIAAAAAJQAAAEgDACQgNAMgUAAQgTAAgNgNgAgPgXQgHAGgBALIAuAAQgBgYgWAAQgIAAgHAHg");
	this.shape_9.setTransform(54.6,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#21307C").s().p("AgcAiQgNgNAAgUQAAgUANgOQAOgOAUAAQAUgBAMAMQADADAAAEQAAALgKgBQgEAAgCgBQgIgJgMAAQgKABgIAIQgIAIAAAMQAAAMAIAJQAIAIALABQALgBAKgHQACgCAEgBQAEAAADADQACADAAADQAAAEgDADQgOAOgUAAQgTAAgOgPg");
	this.shape_10.setTransform(44.6,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#21307C").s().p("AgcAiQgNgNAAgUQAAgUANgOQAOgOAUAAQAUgBAMAMQADADAAAEQAAAFgCADQgDACgFAAQgEAAgCgBQgIgJgMAAQgKABgIAIQgIAIAAAMQAAAMAIAJQAHAIAMABQAMgBAJgHQACgCAEgBQAEAAADADQACADAAADQAAAFgDACQgNAOgVAAQgTAAgOgPg");
	this.shape_11.setTransform(34.8,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#21307C").s().p("AAWAmIAAgEQgJANgUAAQgOgBgKgHQgLgJAAgMQABgPAKgHQALgIARABQANAAALADIAAgBQAAgVgWABQgOAAgHADIgDABQgDABgDgDQgCgCgBgFQAAgGAHgCQANgEAPAAQAUgBAMALQAJAJABATIAAAtQAAAFgEADQgCACgEAAQgLAAAAgJgAgUAPQAAAHAFAEQAFADAIAAQAJACAIgGQAGgFAAgJIAAgHQgNgEgHAAQgVAAAAAPg");
	this.shape_12.setTransform(24.4,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#21307C").s().p("AAeA+QgEgDAAgFIAAgFQgLAQgTABQgSAAgMgNQgOgNAAgXQAAgUAOgOQAMgMASAAQAQgBAOARIAAgpQAAgEAEgDQACgDAEgBQAFABADADQAEADAAAEIAABsIABAAQAAAFgEADQgDADgEABQgFgBgDgDgAgSgCQgIAHAAAOQAAAOAIAIQAHAIALAAQALAAAIgIQAIgJAAgNQAAgNgIgIQgIgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(8.2,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#21307C").s().p("AAYAsQgEgDAAgFIAAgpQABgYgVAAQgHABgGAGQgHAGABALIAAApQAAAFgDADQgEADgEABQgFgBgCgDQgDgDAAgFIAAhIQAAgEADgDQACgDAFAAQAEAAADADQADADAAAEIAAAGQALgQARAAQAQAAAJAJQAIAJABARIAAAvQAAAFgEADQgDADgDABQgFgBgDgDg");
	this.shape_14.setTransform(-2.8,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#21307C").s().p("AAWAmIAAgEQgJANgTAAQgQgBgJgHQgKgIAAgNQgBgPALgHQAKgIASABQANAAALADIAAgBQAAgVgXABQgNAAgHADIgCABQgEABgDgDQgDgCABgFQAAgGAFgCQAOgEAQAAQATgBALALQAKAJAAATIAAAtQAAAFgCADQgDACgFAAQgKAAAAgJgAgUAPQAAAHAGAEQAEADAIAAQAKACAHgGQAHgGAAgIIAAgHQgNgEgIAAQgVAAAAAPg");
	this.shape_15.setTransform(-13.7,18.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#21307C").s().p("AgaAyIAAADQAAAFgDADQgEADgEAAQgKAAAAgLIAAhrQAAgEADgDQADgEAEAAQAEAAAEAEQADADAAAEIAAApQAMgRATAAQARAAANANQANANAAAWQAAAWgNANQgMANgSAAQgRAAgOgQgAgRgDQgJAHAAAOQAAANAJAJQAHAIAKAAQALAAAHgJQAIgIAAgNQAAgOgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_16.setTransform(-24.2,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#21307C").s().p("AAeA+QgEgDABgFIAAgFQgMAQgUABQgRAAgMgNQgOgNAAgXQAAgUAOgOQAMgMARAAQARgBAPARIAAgpQAAgEACgDQADgDAFgBQAEABAEADQACADABAEIAABsIAAAAQAAAFgCADQgEADgEABQgFgBgDgDgAgRgCQgHAHAAAOQgBAOAJAIQAHAIALAAQAKAAAIgIQAJgJAAgNQAAgNgJgIQgIgIgKAAQgLAAgIAIg");
	this.shape_17.setTransform(-36.5,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#21307C").s().p("AAWAmIAAgEQgJANgUAAQgPgBgJgHQgKgIAAgNQAAgPALgHQAKgIARABQANAAALADIAAgBQAAgVgWABQgOAAgGADIgDABQgEABgDgDQgCgCAAgFQAAgGAFgCQAOgEAPAAQAUgBALALQAKAJAAATIAAAtQAAAFgDADQgDACgEAAQgKAAAAgJgAgVAPQAAAHAFAEQAFADAIAAQAJACAHgGQAIgGAAgIIAAgHQgOgEgHAAQgVAAAAAPg");
	this.shape_18.setTransform(-47.4,18.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#21307C").s().p("AgjAjQgNgOAAgUQAAgTAOgPQAOgOAUAAQAVAAAOAOQAOAOAAATQAAAUgOAOQgPAOgUAAIgBAAQgUAAgOgNgAgTgTQgIAIAAALQAAAMAIAJQAIAJALAAQAMABAIgJQAIgJAAgMQAAgMgIgIQgIgJgMAAQgLAAgIAJg");
	this.shape_19.setTransform(-58.1,18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#21307C").s().p("AgXAsQgDgDAAgFIAAhIIAAAAQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEIAAAJQAHgTAPAAQAKgBAAAKQAAAJgIABQgYAHAAAcIAAAcQAAAFgDADQgDADgFABQgEgBgDgDg");
	this.shape_20.setTransform(-66.7,18.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#21307C").s().p("AgaAyIAAADQAAAFgDADQgDADgFAAQgEAAgDgDQgDgDAAgFIAAhrQAAgEADgDQADgEAEAAQAEAAAEAEQADADAAAEIAAApQANgRASAAQASAAAMANQANANAAAWQAAAWgNANQgMANgSAAQgRAAgOgQgAgSgDQgIAHAAAOQAAANAIAJQAIAIAKAAQALAAAIgJQAHgIAAgNQAAgOgHgHQgIgIgLAAQgKAAgIAIg");
	this.shape_21.setTransform(-76.4,16.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#21307C").s().p("AAdAwQgJAAgDgKIgRg2IgSA2QgDAKgIAAIgCAAQgHAAgDgKIgZhFQgBgBAAgFQAAgDADgDQADgEAEAAQAJAAABAIIASA3IASg3QADgIAIAAIABAAQAIAAADAIIASA3IASg3QABgIAJAAQAEAAADAEQADADAAADIgBAGIgZBFQgDAKgJAAg");
	this.shape_22.setTransform(41.8,-2.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#21307C").s().p("AgeAjQgNgOAAgVQAAgTANgOQANgOASAAQAUAAAMAPQALANAAASQAAADgDADQgDADgEAAIg5AAQADAWAXAAQANABAJgIIAFgDQAIAAAAAKQAAAFgDAAQgNANgUAAQgTAAgNgNgAgXgGIAvAAQgDgYgUAAQgUAAgEAYg");
	this.shape_23.setTransform(29.4,-2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#21307C").s().p("AAYAsQgDgDAAgFIAAgpQAAgXgUAAQgIAAgGAGQgGAGAAALIAAApQAAAFgDADQgEADgEAAQgFAAgCgDQgDgDAAgFIgBhHQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFIAAAFQAKgQASAAQAQAAAJAJQAJAKAAAQIAAAvQAAAFgDADQgDADgEAAQgFAAgDgDg");
	this.shape_24.setTransform(18.7,-2.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#21307C").s().p("AggAkQgEgDAAgEQAAgEACgDQAEgCADAAIAFABQANAJANAAQAOAAAAgKQAAgIgUgFQgOgEgFgDQgKgHAAgMQAAgNAKgIQAJgHANAAQAOAAAQAIQAEADAAAFQAAADgCADQgDADgEAAIgEgBQgMgGgKAAQgFAAgEADQgDACAAAEQAAAIAUAFQANAEAGAEQAKAHAAALQAAAOgKAIQgJAHgPAAQgRgBgSgLg");
	this.shape_25.setTransform(3.5,-2.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#21307C").s().p("AgOAVQgBgEAFgCQAKgDAAgMQgJgBAAgLIAAgBQAAgEAEgEQADgDAEAAQANgBAAAQIAAACQAAAPgJAKQgHAHgIABQgFgBAAgEg");
	this.shape_26.setTransform(-3,-7.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#21307C").s().p("AAWAmIAAgEQgJANgUAAQgOAAgKgHQgKgJAAgOQAAgOALgHQAKgHARAAQALgBANAFIAAgCQAAgUgWAAQgOgBgGAFIgDAAQgEAAgDgCQgDgDAAgEQAAgFAGgDQAPgEAOAAQATgBAMAKQAKAKAAAUIAAAsQAAAFgDADQgDACgEAAQgKAAAAgJgAgUAQQAAAGAFAEQAFADAIAAQAJADAHgGQAHgGAAgIIAAgHQgKgFgLAAQgUABAAAPg");
	this.shape_27.setTransform(-10.5,-2.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#21307C").s().p("AgGA9QgDgDAAgFIAAhIQAAgEADgDQADgDADgBQAEABAEADQADADAAAEIAABIQAAAFgDADQgEADgEAAQgDAAgDgDgAgLg0IAAgBQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEIAAABQAAAKgMAAQgLAAAAgKg");
	this.shape_28.setTransform(-17.9,-4.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#21307C").s().p("AgGA+QgEgEAAgEIAAhrQAAgEAEgDQADgEADAAQAEAAADAEQADADABAEIAABrQgBAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_29.setTransform(-22.9,-4.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#21307C").s().p("AAWAmIAAgEQgJANgUAAQgPAAgJgHQgKgJAAgOQAAgOAKgHQAKgHASAAQALgBANAFIAAgCQAAgUgWAAQgOgBgGAFIgEAAQgDAAgDgCQgDgDAAgEQAAgFAGgDQAPgEAOAAQATgBAMAKQAKAKAAAUIAAAsQAAAFgDADQgDACgEAAQgKAAAAgJgAgUAQQAAAGAFAEQAFADAIAAQAJADAIgGQAHgGAAgIIAAgHQgKgFgLAAQgVABAAAPg");
	this.shape_30.setTransform(-30.8,-2.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#21307C").s().p("AgWAsQgDgDAAgFIAAhHIgBAAQAAgFADgDQADgDAEAAQAEAAAEADQADADAAAFIAAAJQAHgUAOAAQALAAAAAKQAAAIgIACQgYAFAAAeIAAAbQAAAFgDADQgDADgEAAQgFAAgCgDg");
	this.shape_31.setTransform(-38.4,-2.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#21307C").s().p("AgJA3QgIgHAAgOIAAgxIgDAAQgEAAgDgCQgCgDAAgEQAAgDACgDQADgDAEAAIADAAIAAgQQAAgEADgDQADgDAFAAQAEAAADADQADADAAAEIAAAQIARAAQAEAAACADQADADAAADQAAAEgDADQgCACgEAAIgRAAIAAAsQAAANALAAIAFgBQAEAAACACQADADAAAEQAAAGgGACQgFACgKAAIgEAAQgIAAgFgFg");
	this.shape_32.setTransform(-46.1,-4.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#21307C").s().p("AggAkQgEgCAAgFQAAgEADgDQACgCAEAAIAFABQAOAJAMAAQAOAAAAgKQAAgIgUgFQgOgEgFgDQgKgHAAgMQAAgNAKgIQAJgHANAAQAPAAAOAIQAFADAAAFQAAAEgCACQgDADgEAAIgEgBQgMgGgKAAQgFAAgDADQgEACAAAEQAAAHAUAGQANAEAGAEQAKAHAAALQAAAOgKAIQgJAHgPAAQgSgBgRgLg");
	this.shape_33.setTransform(-54,-2.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#21307C").s().p("AAYAtQgEgDAAgFIAAgFQgKAQgSAAQgPAAgKgJQgIgLAAgQIAAgwQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFIAAArQAAAWAUABQAJgBAFgGQAGgFAAgMIAAgqQAAgEADgDQADgDAEgBQAFABADADQADADABAEIAABJQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_34.setTransform(-63.8,-2.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#21307C").s().p("Ag7A1QgBgCACgDIAuhlQAEgJAIAAIABAAQAIAAAFAJIAuBlIABAFQAAAKgKAAQgHAAgEgIIgKgXIg7AAIgKAYQgEAHgGAAQgKAAAAgKgAgWANIArAAIgVgxg");
	this.shape_35.setTransform(-75.7,-4.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#21307C").s().p("AgjAzQgGgBAAgGQgBgEADgDQADgDAEAAIADABQAMAHAQAAQAcAAABgcIAAgHQgOARgSAAQgSAAgLgMQgNgLgBgTQABgTANgNQALgLASAAQASABAMAQIAAgFQABgEADgDQACgDAFgBQAEABADADQAEADAAAEIAAA/QgBAXgMAMQgLANgaAAQgWgGgLgFgAgRgmQgIAHABALQAAALAIAHQAGAGALAAQAKABAJgFQAHgIABgLQgBgLgHgHQgIgIgLAAQgLAAgHAHg");
	this.shape_36.setTransform(41.1,-22.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#21307C").s().p("AAYAsQgEgDABgFIAAgpQAAgXgVAAQgHAAgGAGQgHAGAAALIAAApQAAAFgCADQgEADgEAAQgFAAgDgDQgCgDAAgFIAAhHQAAgFACgDQAEgDAEAAQAEAAAEADQACADAAAFIAAAFQAMgQAQAAQAQAAAJAJQAIAJAAARIAAAvQAAAFgCADQgEADgDAAQgFAAgDgDg");
	this.shape_37.setTransform(30.2,-23.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#21307C").s().p("AgGA9QgDgEAAgEIAAhIQAAgEADgDQADgDADAAQAEAAAEADQADADAAAEIAABIQAAAEgDAEQgEADgEAAQgEAAgCgDgAgLg0IAAgBQAAgKALAAQAMAAAAAKIAAABQAAAKgMAAQgLAAAAgKg");
	this.shape_38.setTransform(22.2,-25.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#21307C").s().p("AgiA1QgNgOgBgWQABgVANgNQAMgNASAAQAQAAAOAQIAAgoQAAgEAEgDQACgDAEAAQAFAAADADQAEADAAAEIAABsIABAAQAAAEgEAEQgDADgEAAQgFAAgDgDQgEgEAAgEIAAgGQgMARgSAAQgSAAgMgMgAgRgEQgIAIABAOQgBANAIAIQAHAJALAAQALAAAIgIQAIgJAAgNQAAgNgIgIQgIgIgLAAIgBAAQgKAAgHAHg");
	this.shape_39.setTransform(13.6,-25.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#21307C").s().p("AgGA9QgEgDAAgFIAAhqQAAgFAEgCQADgDADAAQAEAAADADQADADABAEIAABqQgBAFgDADQgDADgEAAQgEAAgCgDg");
	this.shape_40.setTransform(5.5,-25.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#21307C").s().p("AgHA9QgDgEAAgEIAAhIQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAABIQAAAEgDAEQgDADgEAAQgEAAgDgDgAgLg0IAAgBQAAgKALAAQAMAAAAAKIAAABQAAAKgMAAQgLAAAAgKg");
	this.shape_41.setTransform(0.5,-25.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#21307C").s().p("AAYAtQgEgEAAgEIAAgFQgKAQgSAAQgQAAgIgKQgJgJAAgRIAAgwQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFIAAArQAAAWAUAAQAJAAAFgFQAGgGAAgLIAAgrQAAgEAEgDQADgEAEABQAFgBADAEQADADAAAEIAABJQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_42.setTransform(-7.5,-23.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#21307C").s().p("AgaAxIAAAEQAAAEgDAEQgEADgEAAQgFAAgCgDQgDgEAAgEIAAhrQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEIAAApQAMgRATAAQARAAANANQANANAAAVQAAAWgNAOQgNAMgRAAQgRAAgOgQgAgRgEQgJAHABAOQAAAMAIAJQAIAJAKAAQAKAAAIgJQAHgIAAgNQAAgOgHgHQgIgJgKAAQgLAAgHAJg");
	this.shape_43.setTransform(-18.5,-25.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#21307C").s().p("AggAkQgEgCAAgFQAAgEADgDQADgCADAAIAFABQAOAJALAAQAPAAAAgKQAAgIgUgFQgOgEgGgDQgJgHAAgMQAAgNAKgIQAJgHANAAQAPAAAOAIQAFAEAAAEQAAAEgDACQgCADgEAAIgEgBQgMgGgKAAQgMAAAAAJQAAAHAUAGQAdAIAAASQAAAOgKAHQgJAIgPAAQgTgBgQgLg");
	this.shape_44.setTransform(-34.3,-23.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#21307C").s().p("AgIA9QgCgEAAgEIAAhIQAAgEACgDQADgDAEAAQAEAAAEADQACADAAAEIAABIQAAAEgCAEQgEADgEAAQgEAAgDgDgAgLg0IAAgBQAAgKALAAQAMAAAAAKIAAABQAAAKgMAAQgLAAAAgKg");
	this.shape_45.setTransform(-41.1,-25.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#21307C").s().p("AAUAtQgDgEAAgFIAAgoQgBgTgQAAQgPAAgBATIAAAoQAAAFgDAEQgEADgFAAQgGAAgDgDQgFgEAAgFIAAhFQAAgFAFgEQADgEAGAAQAEAAAFAEQADAEAAAFIAAABQAMgPAOAAQAQAAAIAKQAJAIAAARIAAAwQAAAFgFAEQgDADgGAAQgFAAgEgDg");
	this.shape_46.setTransform(-54.3,-23.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#21307C").s().p("AgWAzQAAAFgEAEQgEAEgFAAQgFAAgEgEQgEgEAAgFIAAhmQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIAAAkQAKgPASAAQARAAANAMQANAOAAAVQAAAWgNANQgMANgSAAQgSAAgKgOgAgPgBQgHAGAAAMQAAAMAHAHQAGAHAJAAQAKAAAGgHQAHgIAAgLQAAgMgHgGQgGgHgKAAQgIAAgHAHg");
	this.shape_47.setTransform(-65.5,-25.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#21307C").s().p("AAVAtQgEgEAAgFIAAgoQAAgTgQAAQgQAAAAATIAAAoQAAAFgFAEQgDADgGAAQgFAAgEgDQgEgEAAgFIAAhFQAAgFAEgEQAFgEAEAAQAGAAADAEQAEAEAAAFIAAABQAMgPAPAAQAOAAAJAKQAJAIgBARIAAAwQAAAFgDAEQgEADgFAAQgGAAgDgDg");
	this.shape_48.setTransform(-77,-23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy1, new cjs.Rectangle(-81.7,-32,158.1,76.1), null);


// stage content:
(lib.Expectations = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_244 = function() {
		var nbnroot = this,
			nbnClip, nbnTrail;
		
		nbnClip = eval("nbnroot.NBNlogo");
		nbnTrail = eval("nbnroot.NBNtrail");
		
		TweenMax.from(nbnClip, 2.5, {rotation:-70, delay:2.0, ease:Expo.easeOut});
		TweenMax.from(nbnTrail, 3, {rotation:-15, delay:0.1, ease:Expo.easeOut});
		TweenMax.to(nbnroot.nbn, 1, {alpha:1, delay:1.5, ease:Sine.easeInOut});
	}
	this.frame_292 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(244).call(this.frame_244).wait(48).call(this.frame_292).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDgA3RTYMAujAAAMAAAgmvMgujAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(293));

	// logo
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.7,89.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(263).to({_off:false},0).to({alpha:1},15).wait(15));

	// CTA
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151.5,170.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(274).to({_off:false},0).to({alpha:1},13).wait(6));

	// copy3
	this.instance_2 = new lib.copy3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(69.5,52,1,1,0,0,0,53.3,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(188).to({_off:false},0).to({alpha:1},14).wait(33).to({alpha:0},14).wait(44));

	// copy2
	this.instance_3 = new lib.copy2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(91.2,77.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-0.99)).wait(63).to({alpha:0},14).wait(105));

	// man2
	this.instance_4 = new lib.man2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(98).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-0.99)).wait(124).to({alpha:0},14).wait(44));

	// copy1
	this.instance_5 = new lib.copy1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(98.6,54.3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-0.98)).wait(55).to({alpha:0},13).wait(195));

	// man1
	this.instance_6 = new lib.man1_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({alpha:1},13,cjs.Ease.get(-0.99)).wait(68).to({alpha:0},13).wait(195));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(293));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	id: '3CDC4F089FBD487C864E6CD949F1A62E',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1507274638625", id:"bg"},
		{src:"images/man1.png?1507274638625", id:"man1"},
		{src:"images/man2.png?1507274638625", id:"man2"}
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