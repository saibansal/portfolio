(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"boat_animation_atlas_", frames: [[727,0,54,127],[0,0,725,1994]]}
];


// symbols:



(lib.boat = function() {
	this.initialize(ss["boat_animation_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.marinepath2x = function() {
	this.initialize(ss["boat_animation_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.marinepath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.marinepath2x();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,725,1994);


(lib.boat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.boat();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,127);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.boat_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(27,63.5,1,1,0,0,0,27,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.Scene_1_marine_path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// marine_path
	this.instance = new lib.marinepath("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(183.5,581.45,0.5062,0.6454,0,0,0,362.5,996.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(737).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(27,63.5,1,1,0,0,0,27,63.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,54,127), null);


(lib.Scene_1_boat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boat
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(256.15,1400.35,1,1,179.9983,0,0,26.9,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9998,scaleY:0.9998,rotation:181.7788,x:269.85,y:1029.45},19).to({regX:26.8,regY:63.2,scaleX:0.9996,scaleY:0.9996,rotation:183.5436,x:273.8,y:972.7},22).to({scaleX:0.9993,scaleY:0.9993,rotation:192.2786,x:283.5,y:896.75},24).to({regX:26.7,regY:63.1,scaleX:0.9988,scaleY:0.9988,rotation:192.51,x:287.2,y:873.05},10).to({scaleX:0.999,scaleY:0.999,rotation:196.4638,x:301.35,y:820.9},19).to({scaleX:0.9987,scaleY:0.9987,rotation:191.0351,x:319.05,y:745},24).to({regX:26.6,scaleX:0.999,scaleY:0.999,rotation:185.749,x:324.55,y:710.45},12).to({regX:26.7,scaleX:0.9987,scaleY:0.9987,rotation:184.738,x:327.3,y:685.5},8).to({scaleX:0.9982,scaleY:0.9982,rotation:167.6612,x:325,y:655.9},11).to({regX:26.9,regY:63.3,scaleX:0.9999,scaleY:0.9999,rotation:149.9982,x:317.4,y:631.1},10).to({regX:26.8,scaleX:0.9992,scaleY:0.9992,rotation:147.5363,x:311.75,y:619.6},9).to({regY:63.1,scaleX:0.9988,scaleY:0.9988,rotation:140.0383,x:299.3,y:600.2},10).to({regX:26.7,regY:62.5,scaleX:0.9985,scaleY:0.9985,rotation:145.4063,x:286.5,y:580.8},9).to({regX:26.8,regY:63,scaleX:0.9967,scaleY:0.9967,rotation:143.1762,x:278.1,y:568.7},12).to({regX:26.7,scaleX:0.9982,scaleY:0.9982,rotation:140.2314,x:272.75,y:560.75},15).to({regX:26.6,regY:62.9,scaleX:0.9973,scaleY:0.9973,rotation:138.9093,x:242.1,y:524.05},15).to({regX:26.7,scaleX:0.996,scaleY:0.996,rotation:135.6294,x:229.95,y:512.65},15).to({regX:26.8,regY:63.1,scaleX:0.9988,scaleY:0.9988,rotation:134.9876,x:154.7,y:442.55},29).to({regX:26.7,regY:63,scaleX:0.9974,scaleY:0.9974,rotation:137.1836,x:137.7,y:422.1},16).to({regX:26.8,regY:63.3,scaleX:0.9999,scaleY:0.9999,rotation:141.235,x:66.25,y:343.75},76).to({regX:26.7,regY:63.1,scaleX:0.9976,scaleY:0.9976,rotation:143.8424,x:63.8,y:339.2},10).to({regX:26.9,regY:63.3,scaleX:0.9982,scaleY:0.9982,rotation:147.6198,x:58.6,y:332.15},5).to({scaleX:0.9968,scaleY:0.9968,rotation:154.0908,x:51.8,y:318.45},20).to({scaleX:0.9956,scaleY:0.9956,rotation:158.7069,x:49.25,y:311.75},10).to({regX:26.8,scaleX:0.9949,scaleY:0.9949,rotation:166.4921,x:43.9,y:298},12).to({regY:63.2,scaleX:0.9953,scaleY:0.9953,rotation:172.9949,x:40.5,y:277.55},22).to({regY:63.1,scaleX:0.9958,scaleY:0.9958,rotation:200.5135,x:42.7,y:257.1},22).to({regX:26.7,regY:63.2,scaleX:0.9956,scaleY:0.9956,rotation:223.7959,x:53.15,y:243.45},12).to({scaleX:0.9955,scaleY:0.9955,rotation:229.6557,x:92.15,y:203.55},29).to({regX:26.9,regY:63.3,scaleX:0.9999,scaleY:0.9999,rotation:239.9981,x:160.4,y:152.6},50).to({regX:26.8,scaleX:0.9982,scaleY:0.9982,rotation:230.3989,x:186.9,y:130.95},29).to({scaleX:0.997,scaleY:0.997,rotation:218.3592,x:227.55,y:84.6},34).to({regX:26.7,scaleX:0.9965,scaleY:0.9965,rotation:191.317,x:255.75,y:39.3},34).to({scaleX:0.9998,scaleY:0.9998,rotation:180.035,x:265.45,y:-72.6},82).to({regX:26.8,scaleX:0.9999,scaleY:0.9999,rotation:179.9991,x:265.65,y:-73.9},1).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.boatanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_737 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(737).call(this.frame_737).wait(1));

	// boat_obj_
	this.boat = new lib.Scene_1_boat();
	this.boat.name = "boat";
	this.boat.parent = this;
	this.boat.setTransform(256.1,1400.2,1,1,0,0,0,256.1,1400.2);
	this.boat.depth = 0;
	this.boat.isAttachedToCamera = 0
	this.boat.isAttachedToMask = 0
	this.boat.layerDepth = 0
	this.boat.layerIndex = 0
	this.boat.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boat).wait(738));

	// marine_path_obj_
	this.marine_path = new lib.Scene_1_marine_path();
	this.marine_path.name = "marine_path";
	this.marine_path.parent = this;
	this.marine_path.setTransform(183.5,581.5,1,1,0,0,0,183.5,581.5);
	this.marine_path.depth = 0;
	this.marine_path.isAttachedToCamera = 0
	this.marine_path.isAttachedToMask = 0
	this.marine_path.layerDepth = 0
	this.marine_path.layerIndex = 1
	this.marine_path.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.marine_path).wait(738));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(173.5,462.4,198.89999999999998,1001.3000000000001);
// library properties:
lib.properties = {
	id: '78A880A03A6BC445827615A015BEE6AB',
	width: 367,
	height: 1200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/boat_animation_atlas_.png", id:"boat_animation_atlas_"}
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
an.compositions['78A880A03A6BC445827615A015BEE6AB'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;