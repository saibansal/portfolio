!function(t){t.easyPieChart=function(e,i){var o,n,r,s,a,l,h,p,c=this;return this.el=e,this.$el=t(e),this.$el.data("easyPieChart",this),this.init=function(){var e,o;return c.options=t.extend({},t.easyPieChart.defaultOptions,i),e=parseInt(c.$el.data("percent"),10),c.percentage=0,c.canvas=t("<canvas width='"+c.options.size+"' height='"+c.options.size+"'></canvas>").get(0),c.$el.append(c.canvas),"undefined"!=typeof G_vmlCanvasManager&&null!==G_vmlCanvasManager&&G_vmlCanvasManager.initElement(c.canvas),c.ctx=c.canvas.getContext("2d"),window.devicePixelRatio>1&&(o=window.devicePixelRatio,t(c.canvas).css({width:c.options.size,height:c.options.size}),c.canvas.width*=o,c.canvas.height*=o,c.ctx.scale(o,o)),c.ctx.translate(c.options.size/2,c.options.size/2),c.ctx.rotate(c.options.rotate*Math.PI/180),c.$el.addClass("easyPieChart"),c.$el.css({width:c.options.size,height:c.options.size,lineHeight:c.options.size+"px"}),c.update(e),c},this.update=function(t){return t=parseFloat(t)||0,!1===c.options.animate?r(t):n(c.percentage,t),c},h=function(){var t,e,i;for(c.ctx.fillStyle=c.options.scaleColor,c.ctx.lineWidth=1,i=[],t=e=0;e<=24;t=++e)i.push(o(t));return i},o=function(t){var e;e=t%6==0?0:.017*c.options.size,c.ctx.save(),c.ctx.rotate(t*Math.PI/12),c.ctx.fillRect(c.options.size/2-e,0,.05*-c.options.size+e,1),c.ctx.restore()},p=function(){var t;t=c.options.size/2-c.options.lineWidth/2,!1!==c.options.scaleColor&&(t-=.08*c.options.size),c.ctx.beginPath(),c.ctx.arc(0,0,t,0,2*Math.PI,!0),c.ctx.closePath(),c.ctx.strokeStyle=c.options.trackColor,c.ctx.lineWidth=c.options.lineWidth,c.ctx.stroke()},l=function(){!1!==c.options.scaleColor&&h(),!1!==c.options.trackColor&&p()},r=function(e){var i;l(),c.ctx.strokeStyle=t.isFunction(c.options.barColor)?c.options.barColor(e):c.options.barColor,c.ctx.lineCap=c.options.lineCap,c.ctx.lineWidth=c.options.lineWidth,i=c.options.size/2-c.options.lineWidth/2,!1!==c.options.scaleColor&&(i-=.08*c.options.size),c.ctx.save(),c.ctx.rotate(-Math.PI/2),c.ctx.beginPath(),c.ctx.arc(0,0,i,0,2*Math.PI*e/100,!1),c.ctx.stroke(),c.ctx.restore()},a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},n=function(t,e){var i,o;c.options.onStart.call(c),c.percentage=e,Date.now||(Date.now=function(){return+new Date}),o=Date.now(),i=function(){var n,h;if((h=Date.now()-o)<c.options.animate&&a(i),c.ctx.clearRect(-c.options.size/2,-c.options.size/2,c.options.size,c.options.size),l.call(c),n=[s(h,t,e-t,c.options.animate)],c.options.onStep.call(c,n),r.call(c,n),h>=c.options.animate)return c.options.onStop.call(c,n,e)},a(i)},s=function(t,e,i,o){var n;return n=function(t){return Math.pow(t,2)},i/2*function(t){return t<1?n(t):2-n(t/2*-2+2)}(t/=o/2)+e},this.init()},t.easyPieChart.defaultOptions={barColor:"#ef1e25",trackColor:"#f2f2f2",scaleColor:"#dfe0e0",lineCap:"round",rotate:0,size:110,lineWidth:3,animate:!1,onStart:t.noop,onStop:t.noop,onStep:t.noop},t.fn.easyPieChart=function(e){return t.each(this,function(i,o){var n,r;if(!(n=t(o)).data("easyPieChart"))return r=t.extend({},e,n.data()),n.data("easyPieChart",new t.easyPieChart(o,r))})}}(jQuery),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,this.dataOptions(),o),this.init()};e.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null},e.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},e.prototype.dataOptions=function(){var t={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},e=Object.keys(t);for(var i in e){var o=e[i];void 0===t[o]&&delete t[o]}return t},e.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},e.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},e.prototype.restart=function(){this.stop(),this.init(),this.start()},e.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},e.prototype.stop=function(){this.interval&&clearInterval(this.interval)},e.prototype.toggle=function(){this.interval?this.stop():this.start()},t.fn.countTo=function(i){return this.each(function(){var o=t(this),n=o.data("countTo"),r="object"==typeof i?i:{},s="string"==typeof i?i:"start";(!n||"object"==typeof i)&&(n&&n.stop(),o.data("countTo",n=new e(this,r))),n[s].call(n)})}}),function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){for(var e in t.Context.refreshAll(),i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll?o.forward:o.backward;for(var r in this.waypoints[i]){var s=this.waypoints[i][r];if(null!==s.triggerPoint){var a=o.oldScroll<s.triggerPoint,l=o.newScroll>=s.triggerPoint;(a&&l||!a&&!l)&&(s.queueTrigger(n),t[s.group.id]=s.group)}}}for(var h in t)t[h].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};for(var r in this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}}){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,c,u=this.waypoints[r][a],d=u.options.offset,f=u.triggerPoint,w=0,y=null==f;u.element!==u.element.window&&(w=u.adapter.offset()[s.offsetProp]),"function"==typeof d?d=d.apply(u):"string"==typeof d&&(d=parseFloat(d),u.options.offset.indexOf("%")>-1&&(d=Math.ceil(s.contextDimension*d/100))),l=s.contextScroll-s.contextOffset,u.triggerPoint=Math.floor(w+l-d),h=f<s.oldScroll,p=u.triggerPoint>=s.oldScroll,c=!h&&!p,!y&&h&&p?(u.queueTrigger(s.backward),o[u.group.id]=u.group):!y&&c?(u.queueTrigger(s.forward),o[u.group.id]=u.group):y&&s.oldScroll>=u.triggerPoint&&(u.queueTrigger(s.forward),o[u.group.id]=u.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t).call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i===this.waypoints.length-1?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&((o=t.extend({},arguments[1])).handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),jQuery.fn.animateIfInViewport=function(t){var e=jQuery(this);t?e.find(t).each(function(){var t=jQuery(this);t.isInViewport()&&t.addClass(t.data("animation")).addClass("animated")}):e.isInViewport()&&e.addClass(e.data("animation")).addClass("animated")},function(t){"use strict";t(".et-counter").each(function(){var e=t(this).data("to");t(this).waypoint({handler:function(i){var o=t(this.element);o.addClass("active"),o.find(".counter").countTo({from:0,to:e,speed:2e3,refreshInterval:30}),this.destroy()},offset:"75%"})}),t(".et-circle-progress").each(function(){var e=t(this),i=e.data("bar"),o=e.data("track"),n=e.data("percent"),r=e.find(".percent"),s=150;e.hasClass("size-small")&&(s=200),e.waypoint({handler:function(e){t(this.element).addClass("visible"),t(this.element).easyPieChart({barColor:i,trackColor:void 0===o?"#eeeeee":o,lineCap:"square",lineWidth:8,size:s,animate:"1500",scaleColor:!1}),r.countTo({from:0,to:n,speed:2e3,refreshInterval:30}),this.destroy()},offset:"bottom-in-view"})})}(jQuery);