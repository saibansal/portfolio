(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"plane_animation_atlas_", frames: [[0,1005,152,152],[0,0,970,1003],[154,1005,115,153]]}
];


// symbols:



(lib.Path1 = function() {
	this.initialize(ss["plane_animation_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Path = function() {
	this.initialize(ss["plane_animation_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Shape = function() {
	this.initialize(ss["plane_animation_atlas_"]);
	this.gotoAndStop(2);
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


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path1();
	this.instance.parent = this;
	this.instance.setTransform(-76,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-76,152,152);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path1();
	this.instance.parent = this;
	this.instance.setTransform(-76,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-76,152,152);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-485,-501.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485,-501.5,970,1003);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-485,-501.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485,-501.5,970,1003);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path1();
	this.instance.parent = this;
	this.instance.setTransform(-76,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-76,152,152);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Shape();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(57.5,76.5,1,1,0,0,0,57.5,76.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,115,153), null);


(lib.Scene_1_plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// plane
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(401.1,-242.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0.0026,y:-238.75},38).to({regX:0.1,regY:-0.1,scaleX:0.9994,scaleY:0.9994,rotation:0.9063,guide:{path:[401.1,-238.7,400,-136.7,398.9,-34.7]}},30).to({regY:0.1,scaleX:1,scaleY:1,rotation:17.491,x:396.5,y:54.6},26).to({regY:0,scaleX:0.9974,scaleY:0.9974,rotation:38.3003,x:391,y:85.9},8).to({regY:0.1,scaleX:0.9981,scaleY:0.9981,rotation:51.7815,x:379.35,y:115.75},8).to({scaleX:0.9968,scaleY:0.9968,rotation:50.3105,x:354.9,y:136.55},8).to({scaleX:0.999,scaleY:0.999,rotation:41.7793,x:327.5,y:154.05},8).to({regX:0.2,scaleX:0.9974,scaleY:0.9974,rotation:26.1397,x:302.45,y:175.2},8).to({regX:0.3,scaleX:0.9961,scaleY:0.9961,rotation:7.5757,x:282.5,y:200.9},8).to({regX:0.4,scaleX:0.9957,scaleY:0.9957,rotation:-7.6895,x:270.85,y:231.45},8).to({regX:0.3,scaleX:0.9939,scaleY:0.9939,rotation:-33.3702,x:278.6,y:296.45},17).to({regX:0.4,regY:0.3,scaleX:0.9954,scaleY:0.9954,rotation:-49.2812,x:292.85,y:325.9},8).to({scaleX:0.9937,scaleY:0.9937,rotation:-76.653,x:312.25,y:352.05},8).to({regX:0.3,regY:0.4,rotation:-94.1264,x:340.5,y:368.55},8).to({regY:0.3,scaleX:0.9939,scaleY:0.9939,rotation:-100.3639,x:373.4,y:369.75},8).to({regY:0.4,scaleX:0.9937,scaleY:0.9937,rotation:-102.7656,x:438.8,y:357.25},16).to({regY:0.5,scaleX:0.994,scaleY:0.994,rotation:-89.5136,x:634.75,y:324.4},50).to({scaleX:0.9939,scaleY:0.9939,rotation:-80.2486,x:700.15,y:324.65},16).to({regY:0.6,scaleX:0.9935,scaleY:0.9935,rotation:-54.9906,x:795.2,y:346.45},25).to({regY:0.7,scaleX:0.9923,scaleY:0.9923,rotation:-14.1871,x:885.75,y:437.7},33).to({regY:0.8,scaleX:0.9924,scaleY:0.9924,rotation:4.162,x:904.05,y:536.5},25).to({regX:0.4,regY:0.7,scaleX:0.9926,scaleY:0.9926,rotation:11.8802,x:894.35,y:635.95},25).to({regY:0.8,scaleX:0.9928,scaleY:0.9928,rotation:25.5135,x:847,y:789.7},41).to({regX:0.5,scaleX:0.9923,scaleY:0.9923,rotation:58.0634,x:771.35,y:893.95},33).to({regY:0.7,scaleX:0.9912,scaleY:0.9912,rotation:77.4235,x:715.35,y:928.05},16).to({regY:0.8,scaleX:0.9918,scaleY:0.9918,rotation:97.6105,x:618.1,y:943.3},25).to({regX:0.6,regY:0.7,scaleX:0.9925,scaleY:0.9925,rotation:111.6764,x:489.25,y:914.35},33).to({regX:0.7,scaleX:0.994,scaleY:0.994,rotation:93.4235,x:303.45,y:843.45},49).to({scaleX:0.9934,scaleY:0.9934,rotation:80.1958,x:238.25,y:837.7},17).to({scaleX:0.9943,scaleY:0.9943,rotation:59.7358,x:173.45,y:846.35},16).to({regX:0.8,scaleX:0.9941,scaleY:0.9941,rotation:-0.1425,x:80.15,y:929.6},33).to({scaleX:0.996,scaleY:0.996,rotation:-19.9704,x:97.7,y:1058.85},33).to({regY:0.8,scaleX:0.9974,scaleY:0.9974,rotation:-27.5212,x:144.95,y:1181.35},33).to({startPosition:0},37).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// path
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(542,-508.5);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(542,501.5);

	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},875).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:501.5},6).wait(876));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_mapicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mapicon
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.5,-228.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({_off:true},6).wait(746).to({_off:false,x:15.9,y:769.15},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Tween8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(151.4,1196.7,1,1,-68.7046);
	this.instance._off = true;

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(907.2,497,1,1,3.212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},757).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},33).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},39).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(757).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleX:0.9993,scaleY:0.9993,rotation:89.7087,guide:{path:[151.6,1196.7,162.7,1200.9,173.9,1205.1,202.9,1215.7,235.6,1226.5,340.4,1261,443.8,1285.1,588.5,1318.8,709.7,1326.7,861.2,1336.6,967.1,1305.4,1073,1274.1,1156.9,1221.1,1224,1178.7,1274.1,1124.4,1309.8,1085.6,1333.5,1044.7,1345.3,1024.2,1350,1011.5,1374,772.9,1398.1,534.4,1355.3,371.4,1312.6,208.5,1243.6,188.4,1174.6,168.3]}},2).to({regX:0.2,scaleX:0.9984,scaleY:0.9984,rotation:58.0138,guide:{path:[1174.6,168.2,1167,166,1159.4,163.8,1143.8,161.3,1120.4,164.7,1099.8,167.6,1080.6,174.8]}},14).to({regX:0.3,scaleX:0.9958,scaleY:0.9958,rotation:54.017,guide:{path:[1080.6,174.9,1074.7,177.1,1068.9,179.7]}},33).to({regX:0.4,regY:0.1,scaleX:0.9946,scaleY:0.9946,rotation:40.4148,guide:{path:[1068.8,179.6,1050.6,187.9,1033.8,200.3,1028.7,204,1023.8,208.1]}},10).to({scaleX:0.9943,scaleY:0.9943,rotation:26.1003,guide:{path:[1023.9,208,998.3,229.2,978,259.4]}},9).to({regX:0.3,regY:-0.1,scaleX:0.9979,scaleY:0.9979,rotation:11.5601,guide:{path:[978,259.4,959.9,286.2,946.1,320,936.4,343.7,928.8,370.5]}},16).to({scaleX:0.9998,scaleY:0.9998,rotation:3.2933,guide:{path:[928.9,370.5,913.4,425.6,907.1,494]}},39).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,rotation:3.212,guide:{path:[907.1,493.9,906.9,495.5,906.8,497]}},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(79.7,800.2,0.05,0.05,0,0,0,56,76);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1349,scaleY:0.1349,x:79.85,y:804.3,alpha:0.5641},0).wait(1).to({scaleX:0.2171,scaleY:0.2171,x:80,y:808.3,alpha:0.7691},0).wait(1).to({scaleX:0.2965,scaleY:0.2965,x:80.05,y:812.2,alpha:0.8002},0).wait(1).to({scaleX:0.3731,scaleY:0.3731,x:80.15,y:815.9,alpha:0.8316},0).wait(1).to({scaleX:0.447,scaleY:0.447,x:80.25,y:819.5,alpha:0.8619},0).wait(1).to({scaleX:0.518,scaleY:0.518,x:80.35,y:822.95,alpha:0.891},0).wait(1).to({scaleX:0.5863,scaleY:0.5863,x:80.4,y:826.25,alpha:0.919},0).wait(1).to({scaleX:0.6517,scaleY:0.6517,x:80.5,y:829.45,alpha:0.9458},0).wait(1).to({scaleX:0.7144,scaleY:0.7144,x:80.6,y:832.5,alpha:0.9715},0).wait(1).to({scaleX:0.7743,scaleY:0.7743,x:80.65,y:835.4,alpha:0.996},0).wait(1).to({scaleX:0.8314,scaleY:0.8314,x:80.75,y:838.15,alpha:1},0).wait(1).to({scaleX:0.8857,scaleY:0.8857,x:80.8,y:840.8},0).wait(1).to({scaleX:0.9373,scaleY:0.9373,x:80.85,y:843.3},0).wait(1).to({scaleX:0.9861,scaleY:0.9861,x:80.95,y:845.7},0).wait(1).to({scaleX:1,scaleY:1,y:847.9},0).wait(1).to({y:850},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5627},0).wait(1).to({scaleX:0.2158,scaleY:0.2158,x:79.95,y:808.25,alpha:0.7686},0).wait(1).to({scaleX:0.2935,scaleY:0.2935,x:80.1,y:812.05,alpha:0.799},0).wait(1).to({scaleX:0.3678,scaleY:0.3678,x:80.15,y:815.65,alpha:0.8294},0).wait(1).to({scaleX:0.4386,scaleY:0.4386,x:80.2,y:819.1,alpha:0.8584},0).wait(1).to({scaleX:0.506,scaleY:0.506,x:80.35,y:822.35,alpha:0.8861},0).wait(1).to({scaleX:0.5699,scaleY:0.5699,x:80.4,y:825.45,alpha:0.9122},0).wait(1).to({scaleX:0.6303,scaleY:0.6303,x:80.5,y:828.4,alpha:0.937},0).wait(1).to({scaleX:0.6874,scaleY:0.6874,x:80.55,y:831.2,alpha:0.9604},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:80.6,y:833.8,alpha:0.9823},0).wait(1).to({scaleX:0.791,scaleY:0.791,x:80.7,y:836.2,alpha:1},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:80.75,y:838.5},0).wait(1).to({scaleX:0.8808,scaleY:0.8808,x:80.8,y:840.6},0).wait(1).to({scaleX:0.9205,scaleY:0.9205,x:80.85,y:842.5},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,y:844.25},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:80.95,y:845.85},0).wait(1).to({scaleX:1,scaleY:1,y:847.3},0).wait(1).to({y:848.55},0).wait(1).to({y:849.6},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1347,scaleY:0.1347,x:79.85,y:804.3,alpha:0.5629},0).wait(1).to({scaleX:0.2161,scaleY:0.2161,x:79.95,y:808.3,alpha:0.7687},0).wait(1).to({scaleX:0.2941,scaleY:0.2941,x:80.05,y:812.05,alpha:0.7992},0).wait(1).to({scaleX:0.3689,scaleY:0.3689,x:80.15,y:815.7,alpha:0.8299},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:80.2,y:819.2,alpha:0.8591},0).wait(1).to({scaleX:0.5084,scaleY:0.5084,x:80.35,y:822.5,alpha:0.887},0).wait(1).to({scaleX:0.5731,scaleY:0.5731,x:80.4,y:825.65,alpha:0.9136},0).wait(1).to({scaleX:0.6346,scaleY:0.6346,x:80.5,y:828.6,alpha:0.9387},0).wait(1).to({scaleX:0.6927,scaleY:0.6927,x:80.6,y:831.45,alpha:0.9626},0).wait(1).to({scaleX:0.7475,scaleY:0.7475,x:80.65,y:834.1,alpha:0.985},0).wait(1).to({scaleX:0.799,scaleY:0.799,x:80.7,y:836.65,alpha:1},0).wait(1).to({scaleX:0.8472,scaleY:0.8472,x:80.75,y:838.95},0).wait(1).to({scaleX:0.892,scaleY:0.892,x:80.8,y:841.15},0).wait(1).to({scaleX:0.9335,scaleY:0.9335,x:80.9,y:843.1},0).wait(1).to({scaleX:0.9718,scaleY:0.9718,x:80.95,y:845},0).wait(1).to({scaleX:1,scaleY:1,y:846.7},0).wait(1).to({y:848.2},0).wait(1).to({y:849.55},0).wait(1).to({x:80.9,y:850.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1).to({regX:56,regY:76,scaleX:0.05,scaleY:0.05,x:79.7,y:800.2,alpha:0},0).wait(1).to({regX:57.5,regY:76.5,scaleX:0.1346,scaleY:0.1346,x:79.85,y:804.3,alpha:0.5623},0).wait(1).to({scaleX:0.2155,scaleY:0.2155,x:79.95,y:808.25,alpha:0.7685},0).wait(1).to({scaleX:0.2929,scaleY:0.2929,x:80.05,y:812,alpha:0.7987},0).wait(1).to({scaleX:0.3667,scaleY:0.3667,x:80.15,y:815.6,alpha:0.829},0).wait(1).to({scaleX:0.4368,scaleY:0.4368,x:80.2,y:819,alpha:0.8577},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:80.3,y:822.2,alpha:0.885},0).wait(1).to({scaleX:0.5664,scaleY:0.5664,x:80.4,y:825.3,alpha:0.9108},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,x:80.5,y:828.15,alpha:0.9351},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:80.55,y:830.9,alpha:0.958},0).wait(1).to({scaleX:0.7337,scaleY:0.7337,x:80.6,y:833.45,alpha:0.9794},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:80.7,y:835.8,alpha:0.9993},0).wait(1).to({scaleX:0.8273,scaleY:0.8273,y:838,alpha:1},0).wait(1).to({scaleX:0.8686,scaleY:0.8686,x:80.8,y:840},0).wait(1).to({scaleX:0.9064,scaleY:0.9064,y:841.85},0).wait(1).to({scaleX:0.9406,scaleY:0.9406,x:80.9,y:843.5},0).wait(1).to({scaleX:0.9712,scaleY:0.9712,y:844.95},0).wait(1).to({scaleX:0.9982,scaleY:0.9982,x:80.95,y:846.25},0).wait(1).to({scaleX:1,scaleY:1,y:847.4},0).wait(1).to({y:848.35},0).wait(1).to({y:849.15},0).wait(1).to({y:849.75},0).wait(1).to({y:850.2},0).wait(1).to({x:80.9,y:850.45},0).wait(1).to({y:850.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.plaen2 = function(mode,startPosition,loop) {
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
	this.frame_881 = function() {
		this.___loopingOver___ = true;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(881).call(this.frame_881).wait(1));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 0
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(757).to({x:939.35,y:337.5},0).wait(123).to({x:0,y:0},1).wait(1));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 1
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(11).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(31).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(25).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(26).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:81,regY:848.5,x:81,y:848.5},0).wait(24));

	// mapicon_obj_
	this.mapicon = new lib.Scene_1_mapicon();
	this.mapicon.name = "mapicon";
	this.mapicon.parent = this;
	this.mapicon.depth = 0;
	this.mapicon.isAttachedToCamera = 0
	this.mapicon.isAttachedToMask = 0
	this.mapicon.layerDepth = 0
	this.mapicon.layerIndex = 2
	this.mapicon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.mapicon).wait(756).to({_off:true},1).wait(125));

	// plane_obj_
	this.plane = new lib.Scene_1_plane();
	this.plane.name = "plane";
	this.plane.parent = this;
	this.plane.setTransform(401.1,-242.2,1,1,0,0,0,401.1,-242.2);
	this.plane.depth = 0;
	this.plane.isAttachedToCamera = 0
	this.plane.isAttachedToMask = 0
	this.plane.layerDepth = 0
	this.plane.layerIndex = 3
	this.plane.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.plane).wait(756).to({_off:true},1).wait(125));

	// path_obj_
	this.path = new lib.Scene_1_path();
	this.path.name = "path";
	this.path.parent = this;
	this.path.setTransform(542,-508.5,1,1,0,0,0,542,-508.5);
	this.path.depth = 0;
	this.path.isAttachedToCamera = 0
	this.path.isAttachedToMask = 0
	this.path.layerDepth = 0
	this.path.layerIndex = 4
	this.path.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.path).wait(882));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(499.8,-508.5,826.2,1803.6);
// library properties:
lib.properties = {
	id: 'A59C540ECDCFD347A54A18299D5AFEAB',
	width: 1000,
	height: 1003,
	fps: 24,
	color: "#282828",
	opacity: 1.00,
	manifest: [
		{src:"images/plane_animation_atlas_.png", id:"plane_animation_atlas_"}
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
an.compositions['A59C540ECDCFD347A54A18299D5AFEAB'] = {
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