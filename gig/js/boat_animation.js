(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,725,1994);
p.frameBounds = [rect];


(lib.boat_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.boat();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,127);
p.frameBounds = [rect];


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
	this.instance.setTransform(183.5,504.7,0.5062,0.5062,0,0,0,362.5,997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({startPosition:0},0).wait(59).to({startPosition:0},0).wait(212).to({startPosition:0},0).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.Symbol1, rect = new cjs.Rectangle(0,0,54,127), [rect]);


(lib.Scene_1_boat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boat
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(256.15,1086.4,1,1,179.9983,0,0,26.9,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9998,scaleY:0.9998,rotation:181.7788,x:257.65,y:1029.45},11).to({regX:26.8,regY:63.2,scaleX:0.9996,scaleY:0.9996,rotation:183.5436,x:261.6,y:972.7},12).to({scaleX:0.9993,scaleY:0.9993,rotation:186.0251,x:263.2,y:896.75},14).to({regY:63.1,scaleX:0.999,scaleY:0.999,rotation:188.5268,x:270.8,y:820.9},16).to({regX:26.7,scaleX:0.9987,scaleY:0.9987,rotation:191.0351,x:284.85,y:745},14).to({regX:26.9,regY:63.3,scaleX:0.9999,scaleY:0.9999,rotation:194.9973,x:317.35,y:631.05},23).to({regX:26.8,scaleX:0.9992,scaleY:0.9992,rotation:192.5355,x:320.95,y:619.6},5).to({scaleX:0.9989,scaleY:0.9989,rotation:185.0375,x:326.65,y:599.9},5).to({regX:26.7,regY:63.2,scaleX:0.9987,scaleY:0.9987,rotation:177.7269,x:324.1,y:580.3},5).to({regY:63.1,scaleX:0.9982,scaleY:0.9982,rotation:170.4529,x:323.05,y:560.65},5).to({regX:26.6,scaleX:0.9974,scaleY:0.9974,rotation:148.1828,x:308.85,y:530.05},5).to({regY:63,scaleX:0.9961,scaleY:0.9961,rotation:143.6831,x:294,y:512.55},5).to({regX:26.8,regY:63.1,scaleX:0.9989,scaleY:0.9989,rotation:125.9878,x:218.8,y:442.5},16).to({regX:26.9,regY:63.3,scaleX:0.9999,scaleY:0.9999,rotation:134.9975,x:94.35,y:343.75},51).to({scaleX:0.9982,scaleY:0.9982,rotation:139.1554,x:80,y:332.1},5).to({scaleX:0.9968,scaleY:0.9968,rotation:147.6477,x:66.55,y:318.45},7).to({regX:26.8,scaleX:0.9956,scaleY:0.9956,rotation:151.9197,x:58.5,y:311.6},5).to({scaleX:0.9949,scaleY:0.9949,rotation:160.4307,x:51.15,y:297.95},7).to({regY:63.2,scaleX:0.9953,scaleY:0.9953,rotation:172.9949,x:40.5,y:277.55},12).to({scaleX:0.9958,scaleY:0.9958,rotation:185.515,x:42.8,y:257},12).to({regX:26.7,scaleX:0.9956,scaleY:0.9956,rotation:223.7959,x:53.15,y:243.45},7).to({scaleX:0.9955,scaleY:0.9955,rotation:229.6557,x:92.15,y:203.55},16).to({regX:26.9,regY:63.3,scaleX:0.9999,scaleY:0.9999,rotation:239.9981,x:160.4,y:167.85},28).to({regX:26.8,scaleX:0.9982,scaleY:0.9982,rotation:230.3989,x:199.1,y:140.1},16).to({scaleX:0.997,scaleY:0.997,rotation:218.3592,x:239.75,y:90.7},19).to({regX:26.7,scaleX:0.9965,scaleY:0.9965,rotation:191.317,x:255.75,y:39.3},19).to({regX:26.6,regY:63.4,scaleX:0.9997,scaleY:0.9997,rotation:180.0621,x:265.45,y:-71.6},45).to({regX:26.8,regY:63.3,scaleX:0.9999,scaleY:0.9999,rotation:179.9991,x:265.65,y:-73.9},1).wait(1));

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
	this.frame_386 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(386).call(this.frame_386).wait(1));

	// boat_obj_
	this.boat = new lib.Scene_1_boat();
	this.boat.name = "boat";
	this.boat.parent = this;
	this.boat.setTransform(256.1,1086.2,1,1,0,0,0,256.1,1086.2);
	this.boat.depth = 0;
	this.boat.isAttachedToCamera = 0
	this.boat.isAttachedToMask = 0
	this.boat.layerDepth = 0
	this.boat.layerIndex = 0
	this.boat.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boat).wait(387));

	// marine_path_obj_
	this.marine_path = new lib.Scene_1_marine_path();
	this.marine_path.name = "marine_path";
	this.marine_path.parent = this;
	this.marine_path.setTransform(183.5,504.7,1,1,0,0,0,183.5,504.7);
	this.marine_path.depth = 0;
	this.marine_path.isAttachedToCamera = 0
	this.marine_path.isAttachedToMask = 0
	this.marine_path.layerDepth = 0
	this.marine_path.layerIndex = 1
	this.marine_path.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.marine_path).wait(387));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(183.5,600,367,1149.7);
p.frameBounds = [rect, new cjs.Rectangle(183.5,600,367,1144.6), new cjs.Rectangle(183.5,600,367,1139.5), new cjs.Rectangle(183.5,600,367,1134.4), new cjs.Rectangle(183.5,600,367,1129.2), new cjs.Rectangle(183.5,600,367,1124.2), new cjs.Rectangle(183.5,600,367,1119), new cjs.Rectangle(183.5,600,367,1114), new cjs.Rectangle(183.5,600,367,1108.9), new cjs.Rectangle(183.5,600,367,1103.8), new cjs.Rectangle(183.5,600,367,1098.6), new cjs.Rectangle(183.5,600,367,1093.6), new cjs.Rectangle(183.5,600,367,1088.9), new cjs.Rectangle(183.5,600,367,1084.3), new cjs.Rectangle(183.5,600,367,1079.5), new cjs.Rectangle(183.5,600,367,1074.9), new cjs.Rectangle(183.5,600,367,1070.2), new cjs.Rectangle(183.5,600,367,1065.5), new cjs.Rectangle(183.5,600,367,1060.8), new cjs.Rectangle(183.5,600,367,1056.1), new cjs.Rectangle(183.5,600,367,1051.5), new cjs.Rectangle(183.5,600,367,1046.8), new cjs.Rectangle(183.5,600,367,1042.2), new cjs.Rectangle(183.5,600,367,1037.4), new cjs.Rectangle(183.5,600,367,1032), new cjs.Rectangle(183.5,600,367,1026.6), new cjs.Rectangle(183.5,600,367,1021.3), new cjs.Rectangle(183.5,600,367,1016), new cjs.Rectangle(183.5,600,367,1010.5), rect=new cjs.Rectangle(183.5,600,367,1009.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(182.2,600,368.3,1009.4), new cjs.Rectangle(179.3,600,371.3,1009.4), new cjs.Rectangle(176.9,600,373.7,1009.4), new cjs.Rectangle(174.9,600,375.7,1009.4), new cjs.Rectangle(173.5,600,377,1009.4), new cjs.Rectangle(175.9,600,374.6,1009.4), new cjs.Rectangle(178.1,600,372.4,1009.4), new cjs.Rectangle(180.4,600,370.2,1009.4), new cjs.Rectangle(182.7,600,367.9,1009.4), rect=new cjs.Rectangle(183.5,600,367,1009.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(183.5,597.5,367,1012), new cjs.Rectangle(183.5,594.7,367,1014.7), new cjs.Rectangle(183.5,592,367,1017.4), new cjs.Rectangle(183.5,589.3,367,1020.1), new cjs.Rectangle(183.5,586.7,367,1022.7), new cjs.Rectangle(183.5,584.1,367,1025.4), new cjs.Rectangle(183.5,581.5,367,1028), new cjs.Rectangle(183.5,579,367,1030.4), new cjs.Rectangle(183.5,576.5,367,1033), new cjs.Rectangle(183.5,574.1,367,1035.4), new cjs.Rectangle(183.5,571.7,367,1037.7), new cjs.Rectangle(183.5,569.4,367,1040.1), new cjs.Rectangle(183.5,567,367,1042.5), new cjs.Rectangle(183.5,564.5,367,1045), new cjs.Rectangle(183.5,562.1,367,1047.3), new cjs.Rectangle(183.5,559.8,367,1049.7), new cjs.Rectangle(183.5,557.4,367,1052.1), new cjs.Rectangle(183.5,555,367,1054.5), new cjs.Rectangle(183.5,552.5,367,1056.9), new cjs.Rectangle(183.5,550.2,367,1059.3), new cjs.Rectangle(183.5,547.8,367,1061.7), new cjs.Rectangle(183.5,545.4,367,1064.1), new cjs.Rectangle(183.5,543,367,1066.4), new cjs.Rectangle(183.5,540.6,367,1068.9), new cjs.Rectangle(183.5,538.2,367,1071.2), new cjs.Rectangle(183.5,535.9,367,1073.6), new cjs.Rectangle(183.5,533.4,367,1076), new cjs.Rectangle(183.5,531.1,367,1078.3), new cjs.Rectangle(183.5,528.7,367,1080.8), new cjs.Rectangle(183.5,526.3,367,1083.1), new cjs.Rectangle(183.5,523.9,367,1085.5), new cjs.Rectangle(183.5,521.6,367,1087.8), new cjs.Rectangle(183.5,519.2,367,1090.2), new cjs.Rectangle(183.5,516.8,367,1092.6), new cjs.Rectangle(183.5,514.4,367,1095), new cjs.Rectangle(183.5,512,367,1097.4), new cjs.Rectangle(183.5,509.7,367,1099.7), new cjs.Rectangle(183.5,507.4,367,1102.1), new cjs.Rectangle(183.5,504.9,367,1104.5), new cjs.Rectangle(183.5,502.5,367,1106.9), new cjs.Rectangle(183.5,500.2,367,1109.2), new cjs.Rectangle(183.5,497.8,367,1111.6), new cjs.Rectangle(183.5,495.5,367,1113.9), new cjs.Rectangle(183.5,493.2,367,1116.3), new cjs.Rectangle(183.5,490.7,367,1118.7), new cjs.Rectangle(183.5,488.3,367,1121.1), new cjs.Rectangle(183.5,486,367,1123.4), new cjs.Rectangle(183.5,483.6,367,1125.8), new cjs.Rectangle(183.5,481.3,367,1128.2), new cjs.Rectangle(183.5,478.9,367,1130.5), new cjs.Rectangle(183.5,476.5,367,1132.9), new cjs.Rectangle(183.5,474.2,367,1135.2), new cjs.Rectangle(183.5,471.9,367,1137.5), new cjs.Rectangle(183.5,469.6,367,1139.9), new cjs.Rectangle(183.5,467.2,367,1142.3), new cjs.Rectangle(183.5,464.9,367,1144.6), new cjs.Rectangle(183.5,462.4,367,1147)];
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