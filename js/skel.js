var skel=function(){var a={config:{prefix:null,preloadStyleSheets:!1,pollOnce:!1,resetCSS:!1,normalizeCSS:!1,boxModel:null,useOrientation:!1,useRTL:!1,pollOnLock:!1,usePerpetualLock:!0,useDomainLock:!0,containers:960,grid:{collapse:!1,gutters:40},breakpoints:{all:{range:"*",hasStyleSheet:!1}},events:{}},isConfigured:!1,isInit:!1,lockState:null,stateId:"",me:null,breakpoints:[],breakpointList:[],events:[],plugins:{},cache:{elements:{},states:{}},locations:{html:null,head:null,body:null},vars:{},lsc:"_skel_lock",
sd:" ",css:{r:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",
n:'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{background:#fff;color:#000;font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"\u0081C" "\u0081D" "\u00818" "\u00819"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',
g:".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\31 u,.\\32 u,.\\33 u,.\\34 u,.\\35 u,.\\36 u,.\\37 u,.\\38 u,.\\39 u,.\\31 0u,.\\31 1u,.\\31 2u{float:left;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}",
gF:".row.flush{margin-left:0}.row.flush>*{padding:0!important}",gR:".row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}.row>*{padding-top:0}",gC:".row@{margin-left:0}.row@>*{float:none!important;width:100%!important;margin-left:0!important}.row:not(.no-collapse):not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3):not(.flush)>*{padding:10px 0 10px 0!important;}"},presets:{"default":{},standard:{breakpoints:{mobile:{range:"-480",lockViewport:!0,
containers:"fluid",grid:{collapse:1}},desktop:{range:"481-",containers:1200},"1000px":{range:"481-1200",containers:960}}}},defaults:{breakpoint:{test:null,config:null,elements:null},config_breakpoint:{range:"",containers:960,lockViewport:!1,viewportWidth:!1,hasStyleSheet:!0,grid:{}}},DOMReady:null,getElementsByClassName:null,indexOf:null,iterate:null,extend:function(b,d){a.iterate(d,function(c){"object"==typeof d[c]?("object"!=typeof b[c]&&(b[c]={}),a.extend(b[c],d[c])):b[c]=d[c]})},parseMeasurement:function(a){var d;
"string"!==typeof a?a=[a,"px"]:"fluid"==a?a=[100,"%"]:(d=a.match(/([0-9\.]+)([^\s]*)/),a=3>d.length||!d[2]?[parseFloat(a),"px"]:[parseFloat(d[1]),d[2]]);return a},getDevicePixelRatio:function(){var b=navigator.userAgent;if("ios"==a.vars.deviceType||"mac"==a.vars.deviceType||"windows"==a.vars.deviceType||"android"==a.vars.deviceType&&b.match(/Safari\/([0-9]+)/)&&537<=parseInt(RegExp.$1))return 1;if(void 0!==window.devicePixelRatio&&!b.match(/(Firefox; Mobile)/))return window.devicePixelRatio;if(window.matchMedia){if(window.matchMedia("(-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2/1),(min-resolution: 2dppx)").matches)return 2;
if(window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches)return 1.5}return 1},getViewportWidth:function(){var b,d,c;b=document.documentElement.clientWidth;d=void 0!==window.orientation?Math.abs(window.orientation):!1;c=a.getDevicePixelRatio();screen.width<b&&(b=screen.width);!1!==d&&(b=a.config.useOrientation?90===d?Math.max(screen.width,screen.height):Math.min(screen.width,screen.height):Math.min(screen.width,
screen.height));return b/c},unlock:function(){a.lockState=null;document.cookie=a.lsc+"=;expires=Thu, 1 Jan 1970 12:00:00 UTC; path="+(a.config.useDomainLock?"/":window.location.pathname);a.config.pollOnLock?a.poll():window.location.reload()},lock:function(b){a.lockState=b;document.cookie=a.lsc+"="+b+";expires="+(a.config.usePerpetualLock?"Thu, 1 Jan 2077 12:00:00 UTC":0)+"; path="+(a.config.useDomainLock?"/":window.location.pathname);a.config.pollOnLock?a.poll():window.location.reload()},getLock:function(){return a.lockState},
isLocked:function(){return!!a.lockState},hasActive:function(b){var d=!1;a.iterate(b,function(c){d=d||a.isActive(b[c])});return d},isActive:function(b){return-1!==a.indexOf(a.stateId,a.sd+b)},wasActive:function(b){return-1!==a.indexOf(a.vars.lastStateId,a.sd+b)},canUse:function(b){return a.breakpoints[b]&&a.breakpoints[b].test(a.getViewportWidth())},unreverseRows:function(){var b=a.getElementsByClassName("row");a.iterate(b,function(a){if("length"!==a&&(a=b[a],a._skel_isReversed)){var c=a.children,
f;for(f=1;f<c.length;f++)a.insertBefore(c[f],c[0]);a._skel_isReversed=!1}})},reverseRows:function(b){var d=a.getElementsByClassName("row");a.iterate(d,function(a){if("length"!==a&&(a=d[a],!(a._skel_isReversed||b&&a.className.match(/\bno-collapse-([0-9])\b/)&&parseInt(RegExp.$1)>=parseInt(b)))){var f=a.children,h;for(h=1;h<f.length;h++)a.insertBefore(f[h],f[0]);a._skel_isReversed=!0}})},bind:function(b,d){a.events[b]||(a.events[b]=[]);a.events[b].push(d)},trigger:function(b){a.events[b]&&0!=a.events[b].length&&
a.iterate(a.events[b],function(d){a.events[b][d]()})},onStateChange:function(b){a.bind("stateChange",b);a.isInit&&b()},registerLocation:function(b,d){d._skel_attach="head"==b?function(b){this===a.me.parentNode?this.insertBefore(b,a.me):this.appendChild(b)}:function(a){this.appendChild(a)};a.locations[b]=d},cacheElement:function(b,d,c,f){return a.cache.elements[b]={id:b,object:d,location:c,priority:f}},cacheBreakpointElement:function(b,d,c,f,h){var g=a.getCachedElement(d);g||(g=a.cacheElement(d,c,
f,h));a.breakpoints[b]&&a.breakpoints[b].elements.push(g);return g},getCachedElement:function(b){return a.cache.elements[b]?a.cache.elements[b]:null},detachAllElements:function(){var b;a.iterate(a.cache.elements,function(d){b=a.cache.elements[d].object;if(b.parentNode&&(!b.parentNode||b.parentNode.tagName)&&(b.parentNode.removeChild(b),a.cache.elements[d].onDetach))a.cache.elements[d].onDetach()})},attachElements:function(b){var d=[],c=[],f;a.iterate(b,function(a){d[b[a].priority]||(d[b[a].priority]=
[]);d[b[a].priority].push(b[a])});a.iterate(d,function(b){0!=d[b].length&&a.iterate(d[b],function(g){if(f=a.locations[d[b][g].location]){if(f._skel_attach(d[b][g].object),d[b][g].onAttach)d[b][g].onAttach()}else c.push(d[b][g])})});0<c.length&&a.DOMReady(function(){a.iterate(c,function(b){if(f=a.locations[c[b].location])if(f._skel_attach(c[b].object),c[b].onAttach)c[b].onAttach()})})},poll:function(){var b,d="";b=a.lockState?a.lockState:a.getViewportWidth();a.vars.viewportWidth=b;a.vars.devicePixelRatio=
a.getDevicePixelRatio();a.iterate(a.breakpoints,function(c){a.breakpoints[c].test(b)&&(d+=a.sd+c)});""===d&&(d=a.sd);d!==a.stateId&&(a.locations.html.className=a.locations.html.className.replace(a.stateId,""),a.changeState(d),a.locations.html.className+=a.stateId)},updateState:function(){var b,d=[],c=a.stateId.substring(1).split(a.sd);a.iterate(c,function(f){b=a.breakpoints[c[f]];0!=b.elements.length&&a.iterate(b.elements,function(c){a.cache.states[a.stateId].elements.push(b.elements[c]);d.push(b.elements[c])})});
0<d.length&&a.attachElements(d)},changeState:function(b){var d,c,f,h,g,l,k;a.vars.lastStateId=a.stateId;a.stateId=b;if(a.cache.states[a.stateId])c=a.cache.states[a.stateId];else{a.cache.states[a.stateId]={config:{},elements:[],values:{}};c=a.cache.states[a.stateId];d=a.stateId===a.sd?[]:a.stateId.substring(1).split(a.sd);a.extend(c.config,a.defaults.config_breakpoint);a.iterate(d,function(b){a.extend(c.config,a.breakpoints[d[b]].config)});a.config.boxModel&&(g="iBM",(h=a.getCachedElement(g))||(h=
a.cacheElement(g,a.newInline("*,*:before,*:after{-moz-@;-webkit-@;-o-@;-ms-@;@}".replace(/@/g,"box-sizing:"+a.config.boxModel+"-box")),"head",3)),c.elements.push(h));a.config.resetCSS?(g="iR",(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newInline(a.css.r),"head",2)),c.elements.push(h)):a.config.normalizeCSS&&(g="iN",(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newInline(a.css.n),"head",2)),c.elements.push(h));a.config.prefix&&(g="ssB",(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newStyleSheet(a.config.prefix+
".css"),"head",4)),c.elements.push(h));c.config.lockViewport?(g="mVL"+a.stateId,(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newMeta("viewport","width="+(c.config.viewportWidth?c.config.viewportWidth:"device-width")+",initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"),"head",1)),c.elements.push(h)):c.config.viewportWidth&&(g="mV"+a.stateId,(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newMeta("viewport","width="+c.config.viewportWidth),"head",1)),c.elements.push(h));10<=
a.vars.IEVersion&&(g="mVIE"+a.stateId,(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newInline("@-ms-viewport{width:"+("wp"==a.vars.deviceType?0.6666666666666667*a.vars.viewportWidth+"px":"device-width")+"}"),"head",2)),c.elements.push(h));f=a.parseMeasurement(c.config.containers);b=f[0];f=f[1];c.values.containers=b+f;g="iC"+b+f;if(!(h=a.getCachedElement(g))){var m;m=b+f;h=a.cacheElement(g,a.newInline("body{min-width:"+m+"}.container{margin-left:auto;margin-right:auto;width:"+m+"}.container.small{width:"+
(0.75*b+f)+"}.container.big{width:100%;max-width:"+(1.25*b+f)+";min-width:"+m+"}"),"head",3)}c.elements.push(h);g="iG";(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newInline(a.css.g+a.css.gF),"head",3));c.elements.push(h);g="iGG"+c.config.grid.gutters;if(!(h=a.getCachedElement(g))){var n,p,q;f=a.parseMeasurement(c.config.grid.gutters);b=f[0];n=f[1];f=b+n;m=b/2+n;p=b/4+n;q=1.5*b+n;b=2*b+n;h=a.cacheElement("iGG"+c.config.grid.gutters,a.newInline(".row>*{padding:"+f+" 0 0 "+f+"}.row+.row>*{padding-top:"+
f+"}.row{margin-left:-"+f+"}.row.half>*{padding:"+m+" 0 0 "+m+"}.row.half+.row.half>*{padding-top:"+m+"}.row.half{margin-left:-"+m+"}.row.quarter>*{padding:"+p+" 0 0 "+p+"}.row.quarter+.row.quarter>*{padding-top:"+p+"}.row.quarter{margin-left:-"+p+"}.row.oneandhalf>*{padding:"+q+" 0 0 "+q+"}.row.oneandhalf+.row.oneandhalf>*{padding-top:"+q+"}.row.oneandhalf{margin-left:-"+q+"}.row.double>*{padding:"+b+" 0 0 "+b+"}.row.double+.row.double>*{padding-top:"+b+"}.row.double{margin-left:-"+b+"}"),"head",
3)}c.elements.push(h);if(c.config.grid.collapse){if(b=parseInt(c.config.grid.collapse),isNaN(b)&&(b=1),g="iGC"+b,!(h=a.getCachedElement(g))){l=a.css.gR+a.css.gC;k=":not(.no-collapse)";switch(b){case 4:break;case 3:k+=":not(.no-collapse-3)";break;case 2:k+=":not(.no-collapse-2):not(.no-collapse-3)";break;default:k+=":not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3)"}l=l.replace(/@/g,k);h=a.cacheElement(g,a.newInline(l+".container{max-width:none!important;min-width:0!important;width:"+c.values.containers+
"!important}"),"head",3)}}else g="iGNoCo",(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newInline(a.css.gR),"head",3));c.elements.push(h);g="iCd"+a.stateId;(h=a.getCachedElement(g))||(l=[],k=[],a.iterate(a.breakpoints,function(b){-1!==a.indexOf(d,b)?l.push(".not-"+b):k.push(".only-"+b)}),b=(0<l.length?l.join(",")+"{display:none!important}":"")+(0<k.length?k.join(",")+"{display:none!important}":""),h=a.cacheElement(g,a.newInline(b.replace(/\.([0-9])/,".\\3$1 ")),"head",3),c.elements.push(h));a.iterate(d,
function(b){a.breakpoints[d[b]].config.hasStyleSheet&&a.config.prefix&&(g="ss"+d[b],(h=a.getCachedElement(g))||(h=a.cacheElement(g,a.newStyleSheet(a.config.prefix+"-"+d[b]+".css"),"head",5)),c.elements.push(h));0<a.breakpoints[d[b]].elements.length&&a.iterate(a.breakpoints[d[b]].elements,function(f){c.elements.push(a.breakpoints[d[b]].elements[f])})})}a.detachAllElements();a.attachElements(c.elements);a.DOMReady(function(){var b,d;a.config.useRTL&&(a.unreverseRows(),c.config.grid.collapse&&a.reverseRows(c.config.grid.collapse));
(b=a.getElementsByClassName("skel-cell-important"))&&0<b.length&&(c.config.grid.collapse?a.iterate(b,function(a){"length"!==a&&(e=b[a],e.hasOwnProperty("_skel_cell_important_placeholder")&&!1!==e._skel_cell_important_placeholder||(d=document.createElement("div"),d.innerHTML="",d.style.display="none",e.parentNode.insertBefore(d,e.nextSibling),e.parentNode.insertBefore(e,e.parentNode.firstChild),e._skel_cell_important_placeholder=d))}):a.iterate(b,function(a){e=b[a];"length"!==a&&(e.hasOwnProperty("_skel_cell_important_placeholder")||
(e._skel_cell_important_placeholder=!1),d=e._skel_cell_important_placeholder,!1!==d&&(e.parentNode.insertBefore(e,d),e.parentNode.removeChild(d),e._skel_cell_important_placeholder=!1))}))});a.vars.state=a.cache.states[a.stateId];a.vars.stateId=a.stateId;a.trigger("stateChange")},newMeta:function(a,d){var c=document.createElement("meta");c.name=a;c.content=d;return c},newStyleSheet:function(a){var d=document.createElement("link");d.rel="stylesheet";d.type="text/css";d.href=a;return d},newInline:function(b){var d;
8>=a.vars.IEVersion?(d=document.createElement("span"),d.innerHTML='&nbsp;<style type="text/css">'+b+"</style>"):(d=document.createElement("style"),d.type="text/css",d.innerHTML=b);return d},newDiv:function(a){var d=document.createElement("div");d.innerHTML=a;return d},registerPlugin:function(b,d){a.plugins[b]=d;d._=this;a.isConfigured&&(a.initPluginConfig(b,a.plugins[b]),d.init())},initPluginConfig:function(b,d){var c;c="_skel_"+b+"_config";window[c]?c=window[c]:(c=document.getElementsByTagName("script"),
(c=c[c.length-1].innerHTML.replace(/^\s+|\s+$/g,""))&&(c=eval("("+c+")")));"object"==typeof c&&(c.preset&&d.presets[c.preset]&&a.extend(d.config,d.presets[c.preset]),a.extend(d.config,c))},initConfig:function(){function b(b,c){var d;"string"!=typeof c&&(d=function(a){return!1});"*"==c?d=function(a){return!0}:"-"==c.charAt(0)?(h[b]=parseInt(c.substring(1)),d=function(a){return a<=h[b]}):"-"==c.charAt(c.length-1)?(h[b]=parseInt(c.substring(0,c.length-1)),d=function(a){return a>=h[b]}):-1!=a.indexOf(c,
"-")?(c=c.split("-"),h[b]=[parseInt(c[0]),parseInt(c[1])],d=function(a){return a>=h[b][0]&&a<=h[b][1]}):(h[b]=parseInt(c),d=function(a){return a==h[b]});return d}var d,c,f,h=[],g=[];window._skel_config?f=window._skel_config:(f=a.me.innerHTML.replace(/^\s+|\s+$/g,""))&&(f=eval("("+f+")"));"object"==typeof f&&(f.preset&&a.presets[f.preset]?(a.config.breakpoints={},a.extend(a.config,a.presets[f.preset])):f.breakpoints&&(a.config.breakpoints={}),a.extend(a.config,f));a.extend(a.defaults.config_breakpoint.grid,
a.config.grid);a.defaults.config_breakpoint.containers=a.config.containers;a.iterate(a.config.breakpoints,function(f){"object"!=typeof a.config.breakpoints[f]&&(a.config.breakpoints[f]={range:a.config.breakpoints[f]});d={};a.extend(d,a.defaults.config_breakpoint);a.extend(d,a.config.breakpoints[f]);a.config.breakpoints[f]=d;c={};a.extend(c,a.defaults.breakpoint);c.config=a.config.breakpoints[f];c.test=b(f,c.config.range);c.elements=[];a.breakpoints[f]=c;a.config.preloadStyleSheets&&c.config.hasStyleSheet&&
g.push(a.config.prefix+"-"+f+".css");a.breakpointList.push(f)});a.iterate(a.config.events,function(b){a.bind(b,a.config.events[b])});0<g.length&&"file:"!=window.location.protocol&&a.DOMReady(function(){document.getElementsByTagName("head");var b=new XMLHttpRequest;a.iterate(g,function(a){b.open("GET",g[a],!1);b.send("")})})},initEvents:function(){a.config.pollOnce||(window.onresize=function(){a.poll()},a.config.useOrientation&&(window.onorientationchange=function(){a.poll()}))},initUtilityMethods:function(){(function(){var b=
window,d=function(a){f=!1;d.isReady=!1;"function"===typeof a&&h.push(a);a=!1;if(!f)if(f=!0,"loading"!==c.readyState&&l(),c.addEventListener)c.addEventListener("DOMContentLoaded",g,!1),b.addEventListener("load",g,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",g);b.attachEvent("onload",g);try{a=null==b.frameElement}catch(n){}c.documentElement.doScroll&&a&&k()}},c=b.document,f=!1,h=[],g=function(){c.addEventListener?c.removeEventListener("DOMContentLoaded",g,!1):c.detachEvent("onreadystatechange",
g);l()},l=function(){if(!d.isReady){if(!c.body)return setTimeout(l,1);d.isReady=!0;a.iterate(h,function(a){h[a]()});h=[]}},k=function(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(k,1);return}l()}};d.isReady=!1;a.DOMReady=d})();a.getElementsByClassName=document.getElementsByClassName?function(a){return document.getElementsByClassName(a)}:function(a){var d=document;return d.querySelectorAll?d.querySelectorAll(("."+a.replace(" "," .")).replace(/\.([0-9])/,".\\3$1 ")):[]};
a.indexOf=Array.prototype.indexOf?function(a,d){return a.indexOf(d)}:function(a,d){if("string"==typeof a)return a.indexOf(d);var c;c=d?d:0;var f;if(!this)throw new TypeError;f=this.length;if(0===f||c>=f)return-1;for(0>c&&(c=f-Math.abs(c));c<f;c++)if(this[c]===a)return c;return-1};a.iterate=Object.keys?function(a,d){if(!a)return[];var c,f=Object.keys(a);for(c=0;f[c];c++)d(f[c])}:function(a,d){if(!a)return[];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&d(c)}},initAPI:function(){var b,d,
c=navigator.userAgent;a.vars.IEVersion=c.match(/MSIE ([0-9]+)\./)?RegExp.$1:99;a.vars.deviceType="other";d={ios:"(iPad|iPhone|iPod)",android:"Android",mac:"Macintosh",wp:"Windows Phone",windows:"Windows NT"};a.iterate(d,function(b){c.match(RegExp(d[b],"g"))&&(a.vars.deviceType=b)});switch(a.vars.deviceType){case "ios":c.match(/([0-9_]+) like Mac OS X/);b=parseFloat(RegExp.$1.replace("_",".").replace("_",""));break;case "android":c.match(/Android ([0-9\.]+)/);b=parseFloat(RegExp.$1);break;case "mac":c.match(/Mac OS X ([0-9_]+)/);
b=parseFloat(RegExp.$1.replace("_",".").replace("_",""));break;case "wp":c.match(/IEMobile\/([0-9\.]+)/);b=parseFloat(RegExp.$1);break;case "windows":c.match(/Windows NT ([0-9\.]+)/);b=parseFloat(RegExp.$1);break;default:b=99}a.vars.deviceVersion=b;a.vars.isTouch="wp"==a.vars.deviceType?0<navigator.msMaxTouchPoints:!!("ontouchstart"in window);b=document.cookie.split(";");a.iterate(b,function(c){c=b[c].split("=");c[0].replace(/^\s+|\s+$/g,"")==a.lsc&&(a.lockState=c[1])})},init:function(b,d){a.initUtilityMethods();
a.initAPI();b&&(window._skel_config=b);d&&a.iterate(d,function(a){window["_skel_"+a+"_config"]=d[a]});a.initConfig();a.registerLocation("html",document.getElementsByTagName("html")[0]);a.registerLocation("head",document.getElementsByTagName("head")[0]);a.DOMReady(function(){a.registerLocation("body",document.getElementsByTagName("body")[0])});a.initEvents();a.poll();a.iterate(a.plugins,function(b){a.initPluginConfig(b,a.plugins[b]);a.plugins[b].init()});a.isInit=!0},preInit:function(){var b=document.getElementsByTagName("script");
a.me=b[b.length-1];if(window._skel_config)a.isConfigured=!0;else if(s=document.getElementsByTagName("script"),s=s[s.length-1].innerHTML.replace(/^\s+|\s+$/g,""))a.isConfigured=!0;a.isConfigured&&a.init()}};a.preInit();return a}();