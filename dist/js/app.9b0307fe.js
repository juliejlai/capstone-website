(function(t){function e(e){for(var n,r,c=e[0],o=e[1],u=e[2],h=0,d=[];h<c.length;h++)r=c[h],i[r]&&d.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0500":function(t,e,a){},"078d":function(t,e,a){},"177a":function(t,e,a){},"244f":function(t,e,a){t.exports=a.p+"img/mail.fb68c536.svg"},"2ee6":function(t,e,a){"use strict";var n=a("c764"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("router-view")],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),a("li",[a("router-link",{attrs:{to:"/recommender"}},[t._v("Get Recommendations")])],1)])])])},c=[],o=(a("7b0e"),a("2877")),u={},l=Object(o["a"])(u,r,c,!1,null,null,null),h=l.exports,d={components:{AppHeader:h}},v=d,f=(a("5c0b"),Object(o["a"])(v,i,s,!1,null,null,null)),m=f.exports,p=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"container",staticClass:"home",class:{loading:t.loading}},[a("div",{staticClass:"text"},[t._m(0),a("h2",[t._v("a spotify recommender & visualizer ")]),a("button",{on:{click:t.auth}},[t._v("Login")])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("i",[t._v("D")]),a("i",[t._v("F")]),a("i",[t._v("A")]),a("i",[t._v("J")]),a("i",[t._v("-")]),a("i",[t._v("F")]),a("i",[t._v("M")])])}],b=(a("96cf"),a("3b8d")),k=(a("6c7b"),a("d263"),a("d225")),w=a("b0b4"),x=a("308d"),_=a("6bb5"),O=a("4e2b"),C=a("cebc"),S=(a("ac6a"),a("5df3"),a("768b")),P=a("75fc"),j=(a("cf6a"),a("7618"));function T(t){var e=Object(j["a"])(t);return null==t||"object"!=e&&"function"!=e}function I(t){var e=Object.seal(Object(C["a"])({},t)),a={__all__:[]};for(var n in e)a[n]=[];var i={set:function(t,e,n){var i;return i=T(t[e])?t[e]:Array.isArray(t[e])?Object(P["a"])(t[e]):Object(C["a"])({},t[e]),t[e]=n,a[e]&&(a[e].map(function(t){return t(n,i)}),a.__all__.map(function(t){return t(n,i)})),!0}};return new Proxy(Object(C["a"])({},e,{watch:function(t,e){"string"===typeof t&&t in a&&a[t].push(e),"function"===typeof t&&a.__all__.push(t)}}),{set:i.set})}a("28a5"),a("c5f6"),a("3b2b"),a("a481");function A(t){return t&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(t).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}function F(t,e,a,n,i,s){if(!t||/^(?:expires|max\-age|path|domain|secure)$/i.test(t))return!1;var r="";if(a)switch(a.constructor){case Number:r=a===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+a;break;case String:r="; expires="+a;break;case Date:r="; expires="+a.toUTCString();break}return document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+r+(i?"; domain="+i:"")+(n?"; path="+n:"")+(s?"; secure":""),!0}function E(t,e,a,n){var i=new XMLHttpRequest;for(var s in i.open(t,e,a),n)i.setRequestHeader(s,n[s]);return i}function M(t){return{request:t,status:t.status,data:function(){try{var e=JSON.parse(t.responseText);return e}catch(a){return t.responseText}}()}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.async,n=void 0===a||a,i=e.headers,s=void 0===i?{}:i;return new Promise(function(e,a){var i=E("GET",t,n,s),r=function(){var t=M(i);t.success=!1,t.error=i.responseText,a(t)};i.onload=function(){if(i.status>=200&&i.status<400){var t=M(i);t.success=!0,e(t)}i.status>=400&&r(i)},i.onerror=function(){return r(i)},i.send()})}function D(t,e){return function(a){return t*(1-a)+e*a}}var $=a("ce24"),z=a("bc17"),G={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"easeInOutQuint",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!G[e])throw new Error('Unknown easing function "'.concat(e,'"'));for(var n=Math.min(Math.max(0,t),1),i=G[e](n),s=0;s<a;s++)i+=n;return i/(a+1)}var N=function(){function t(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.volumeSmoothing,i=void 0===n?100:n,s=a.pingDelay,r=void 0===s?2500:s,c=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(k["a"])(this,t);var o=A("SPOTIFY_ACCESS_TOKEN"),u=A("SPOTIFY_REFRESH_TOKEN"),l=A("SPOTIFY_REFRESH_CODE");this.state=I({api:{currentlyPlaying:"https://api.spotify.com/v1/me/player",trackAnalysis:"https://api.spotify.com/v1/audio-analysis/",trackFeatures:"https://api.spotify.com/v1/audio-features/",tokens:{accessToken:o,refreshToken:u,refreshCode:l},headers:{Authorization:"Bearer "+o,Accept:"application/json"},pingDelay:r},intervalTypes:["tatums","segments","beats","bars","sections"],activeIntervals:I({tatums:{},segments:{},beats:{},bars:{},sections:{}}),currentlyPlaying:{},trackAnalysis:{},trackFeatures:{energy:.2},initialTrackProgress:0,initialStart:0,trackProgress:0,active:!1,noPlayback:null,initialized:!1,volumeSmoothing:i,volume:0,queues:{volume:[],beat:[]}}),this.initHooks(),!0===c?setTimeout(function(){e.state.trackAnalysis=e.buildStaticIntervals(),e.state.active=!0,requestAnimationFrame(e.tick.bind(e))},300):this.ping()}return Object(w["a"])(t,[{key:"initHooks",value:function(){var t=this;this.hooks={tatum:function(){},segment:function(){},beat:function(){},bar:function(){},section:function(){}},this.state.activeIntervals.watch("tatums",function(e){return t.hooks.tatum(e)}),this.state.activeIntervals.watch("segments",function(e){return t.hooks.segment(e)}),this.state.activeIntervals.watch("beats",function(e){return t.hooks.beat(e)}),this.state.activeIntervals.watch("bars",function(e){return t.hooks.bar(e)}),this.state.activeIntervals.watch("sections",function(e){return t.hooks.section(e)})}},{key:"ping",value:function(){var t=this;setTimeout(function(){return t.getCurrentlyPlaying()},this.state.api.pingDelay)}},{key:"getNewToken",value:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.state.api.tokens.refreshToken||(window.location.href="/"),t.next=3,R("".concat("http://localhost:8001","/refresh?token=").concat(this.state.api.tokens.refreshToken));case 3:e=t.sent,a=e.data,F("SPOTIFY_ACCESS_TOKEN",a.access_token),this.state.api.tokens.accessToken=a.access_token,this.state.api.headers={Authorization:"Bearer "+this.state.api.tokens.accessToken,Accept:"application/json"},this.ping();case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getCurrentlyPlaying",value:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(){var e,a,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(this.state.api.currentlyPlaying,{headers:this.state.api.headers});case 3:if(e=t.sent,a=e.data,a&&a.is_playing){t.next=9;break}return!0===this.state.active&&(this.state.active=!1),!0!==this.state.noPlayback&&(this.state.noPlayback=!0),t.abrupt("return",this.ping());case 9:this.processResponse(a),t.next=17;break;case 12:if(t.prev=12,t.t0=t["catch"](0),n=t.t0.status,401!==n){t.next=17;break}return t.abrupt("return",this.getNewToken());case 17:case"end":return t.stop()}},t,this,[[0,12]])}));function e(){return t.apply(this,arguments)}return e}()},{key:"processResponse",value:function(t){var e=JSON.stringify(t.item)===JSON.stringify(this.state.currentlyPlaying);if(!1===this.state.initialized||!e||!1===this.state.active)return this.getTrackInfo(t);this.ping()}},{key:"getTrackInfo",value:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(e){var a,n,i,s,r,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=window.performance.now(),t.next=3,Promise.all([R(this.state.api.trackAnalysis+e.item.id,{headers:this.state.api.headers}).then(function(t){return t.data}),R(this.state.api.trackFeatures+e.item.id,{headers:this.state.api.headers}).then(function(t){return t.data})]);case 3:n=t.sent,i=Object(S["a"])(n,2),s=i[0],r=i[1],this.state.intervalTypes.forEach(function(t){var a=s[t];a[0].duration=a[0].start+a[0].duration,a[0].start=0,a[a.length-1].duration=e.item.duration_ms/1e3-a[a.length-1].start,a.forEach(function(t){t.loudness_max_time&&(t.loudness_max_time=1e3*t.loudness_max_time),t.start=1e3*t.start,t.duration=1e3*t.duration})}),c=window.performance.now()-a,this.state.currentlyPlaying=e.item,this.state.trackAnalysis=s,this.state.trackFeatures=r,this.state.initialTrackProgress=e.progress_ms+c,this.state.trackProgress=e.progress_ms+c,this.state.initialStart=window.performance.now(),!1===this.state.initialized&&(requestAnimationFrame(this.tick.bind(this)),this.state.initialized=!0),!1===this.state.active&&(this.state.active=!0),!0===this.state.noPlayback&&(this.state.noPlayback=!1),this.ping();case 19:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"setActiveIntervals",value:function(){var t=this,e=function(e){for(var a=t.state.trackAnalysis[e],n=t.state.trackProgress,i=0;i<a.length;i++){if(i===a.length-1)return i;if(a[i].start<n&&n<a[i+1].start)return i}};this.state.intervalTypes.forEach(function(a){var n=e(a);t.state.activeIntervals[a].start&&n===t.state.activeIntervals[a].index||(t.state.activeIntervals[a]=Object(C["a"])({},t.state.trackAnalysis[a][n],{index:n}));var i=t.state.activeIntervals[a],s=i.start,r=i.duration,c=t.state.trackProgress-s;t.state.activeIntervals[a].elapsed=c,t.state.activeIntervals[a].progress=q(c/r)})}},{key:"getVolume",value:function(){var t=this.state.activeIntervals.segments,e=t.loudness_max,a=t.loudness_start,n=t.loudness_max_time,i=t.duration,s=t.elapsed,r=t.start,c=t.index;if(!this.state.trackAnalysis.segments[c+1])return 0;var o=this.state.trackAnalysis.segments[c+1].loudness_start,u=r+s;if(s<n){var l=Math.min(1,s/n);return D(a,e)(l)}var h=r+n,d=u-h,v=i-n,f=Math.min(1,d/v);return D(e,o)(f)}},{key:"watch",value:function(t,e){this.state.watch(t,e)}},{key:"on",value:function(t,e){this.hooks[t]=e}},{key:"getInterval",value:function(t){return this.state.activeIntervals[t+"s"]}},{key:"tick",value:function(t){if(requestAnimationFrame(this.tick.bind(this)),this.state.active){this.state.trackProgress=t-this.state.initialStart+this.state.initialTrackProgress,this.setActiveIntervals();var e=this.getVolume(),a=this.state.queues;a.volume.unshift(e),a.volume.length>400&&a.volume.pop(),a.beat.unshift(e),a.beat.length>this.state.volumeSmoothing&&a.beat.pop();var n=Object($["b"])().domain([Object(z["d"])(a.volume),s(a.volume)]).range([0,1]),i=s(a.beat);this.volume=n(i)}function s(t){return t.reduce(function(t,e){return t+e})/t.length}}},{key:"buildStaticIntervals",value:function(){var t={},e=3e3,a={beats:e,tatums:[.666*e,.333*e],segments:e/2,sections:16*e,bars:4*e},n=["tatums","segments","beats","bars","sections"];return n.forEach(function(n){t[n]=[];for(var i=0;i<1e4;i++){var s=t.tatums[i-1]?t.tatums[i-1].start+t.tatums[i-1].duration:0,r=i%2===0?a.tatums[0]:a.tatums[1];t[n].push({start:"tatums"===n?s:i*a[n],duration:"tatums"===n?r:a[n],loudness_start:i*i,loudness_max:i*i,loudness_max_time:e/2/1e3})}}),t}},{key:"isActive",get:function(){return!0===this.state.active}}]),t}(),W=(a("7f7f"),function(){function t(){var e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.main,i=void 0===n?null:n,s=a.container,r=void 0===s?document.body:s,c=a.hidpi,o=void 0===c||c;Object(k["a"])(this,t),this.container=r,this.hidpi=o,this.active=!1,this.queue=[],this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.setSize(),window.addEventListener("resize",function(){e.setSize()}),null!==i&&this.add("main",i)}return Object(w["a"])(t,[{key:"setSize",value:function(){var t=this.hidpi?window.devicePixelRatio:1;this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*t,this.canvas.height=this.height*t,this.canvas.style.transformOrigin="top left",this.canvas.style.transform="scale(".concat(1/t,")"),this.ctx.scale(t,t)}},{key:"add",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.queue.push({name:t,method:e,duration:a,start:window.performance.now()})}},{key:"remove",value:function(t){this.queue=this.queue.filter(function(e){return e.name!==t})}},{key:"start",value:function(){!0!==this.active&&(this.active=!0,requestAnimationFrame(this.loop.bind(this)))}},{key:"stop",value:function(){!1!==this.active&&(this.active=!1,cancelAnimationFrame(this.loop.bind(this)))}},{key:"paint",value:function(t,e){var a=e.name,n=e.start,i=e.duration,s=e.method,r=t-n,c="number"===typeof i?Math.min(r/i,1):null,o={ctx:this.ctx,width:this.width,height:this.height,now:t,progress:c,duration:i,elapsed:r,start:n};s(o),1===c&&this.remove(a)}},{key:"loop",value:function(t){var e=this;!0===this.active&&requestAnimationFrame(this.loop.bind(this)),this.queue.forEach(function(a){return e.paint(t,a)})}}]),t}()),B=function(){function t(e){var a=e.volumeSmoothing,n=void 0===a?100:a,i=e.hidpi,s=void 0===i||i,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(k["a"])(this,t),this.sync=new N({volumeSmoothing:n},r),this.sketch=new W({main:this.paint.bind(this),hidpi:s}),this.watch(),this.hooks()}return Object(w["a"])(t,[{key:"watch",value:function(){var t=this;this.sync.watch("active",function(e){!0===e?t.sketch.start():t.sketch.stop()})}},{key:"hooks",value:function(){}},{key:"paint",value:function(){}}]),t}(),H=a("a43d"),U=a("482f"),J=2*Math.PI,L=Math.PI/180,Q=function(t){function e(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.fixed,i=void 0!==n&&n;return Object(k["a"])(this,e),t=Object(x["a"])(this,Object(_["a"])(e).call(this,{volumeSmoothing:75,hidpi:!1},i)),t.theme=[Object(U["a"])("#FFE66D"),Object(U["a"])("#4ECDC4"),Object(U["a"])("#FF6B6B"),Object(U["a"])("#292F36"),Object(U["a"])("#001124")],t.overlayColors=[Object(U["a"])("#4281A4"),Object(U["a"])("#48A9A6"),Object(U["a"])("#E4DFDA"),Object(U["a"])("#D4B483"),Object(U["a"])("#C1666B"),Object(U["a"])("#D4B483"),Object(U["a"])("#E4DFDA"),Object(U["a"])("#48A9A6"),Object(U["a"])("#4281A4")].map(function(t){var e=t.r,a=t.g,n=t.b;return"rgba(".concat(e,", ").concat(a,", ").concat(n,", 1)")}),t.setGradients(),t.setCtxParams(),t.setScales(),t.watch(),window.addEventListener("resize",function(){t.setGradients(),t.setCtxParams()}),t.sync.watch("trackFeatures",function(){t.sync.state.volumeSmoothing=t.smoothingScale(t.sync.state.trackFeatures.energy)}),t}return Object(O["a"])(e,t),Object(w["a"])(e,[{key:"setGradients",value:function(){var t=this.sketch.height>this.sketch.width?this.sketch.height/2:this.sketch.width/2,e={x:this.sketch.width/2,y:this.sketch.height/2};this.gradient=this.sketch.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,t),this.gradient.addColorStop(0,this.theme[0]),this.gradient.addColorStop(.5,this.theme[1]),this.gradient.addColorStop(1,this.theme[0]),this.gradient2=this.sketch.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,t/3),this.gradient2.addColorStop(0,this.theme[0]),this.gradient2.addColorStop(.5,this.theme[1]),this.gradient2.addColorStop(1,this.theme[0]),this.gradient3=this.sketch.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,t),this.gradient3.addColorStop(0,this.theme[4]),this.gradient3.addColorStop(1,this.theme[3])}},{key:"setCtxParams",value:function(){this.sketch.ctx.lineCap="round",this.sketch.ctx.lineJoin="round"}},{key:"setScales",value:function(){this.rotationScale=Object($["a"])().domain([0,1]).range([3e3,800]),this.radiusScale=Object($["a"])().domain([0,.3,.6,1]).range([.5,1,1.1,1.2]),this.smoothingScale=Object($["a"])().domain([0,1]).range([100,30])}},{key:"createPath",value:function(t,e){var a=e.x,n=e.y,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;t.beginPath();for(var s=0;s<i*J;s+=L){var r=a(s),c=n(s);0===s?t.moveTo(r,c):t.lineTo(r,c)}}},{key:"render",value:function(t,e){for(var a in e){var n=e[a];t.beginPath();for(var i=0;i<n.bound.length;i++){var s=n.bound[i];0==i?t.moveTo(s.x,s.y):t.lineTo(s.x,s.y)}}}},{key:"paintBackground",value:function(t){var e=t.ctx,a=t.width,n=t.height;this.sketch.ctx.fillStyle=this.gradient3,e.fillRect(0,0,a,n)}},{key:"paintOuterLines",value:function(t){var e=this,a=t.ctx,n=t.width,i=t.height,s=t.now,r=this.sync.getInterval("tatum"),c=r.progress,o=n>i?n/10:i/10,u=Object(H["b"])([this.sync.volume*-o,this.sync.volume*o,this.sync.volume*-o]),l=u(c)*this.radiusScale(this.sync.state.trackFeatures.energy)/2,h=n>i?this.sync.volume*i/3:this.sync.volume*n/3,d=function(t){return(h+l*Math.sin(7*(t+s/e.rotationScale(e.sync.state.trackFeatures.energy))))*Math.tan(t)+n/2},v=function(t){return(h+l*Math.sin(7*(t+s/e.rotationScale(e.sync.state.trackFeatures.energy)/2)))*Math.cos(t)+i/2};this.createPath(a,{x:d,y:v}),a.lineWidth=5*this.sync.volume,a.strokeStyle=this.gradient,a.stroke()}},{key:"paintInnerLines",value:function(t){var e=this,a=t.ctx,n=t.width,i=t.height,s=t.now,r=this.sync.getInterval("beat"),c=r.progress,o=this.sync.volume,u=Object(H["b"])([o*(i/4),o*(i/4)])(c),l=n>i?o*i/3:o*n/3,h=function(t){return(l+u*Math.sin(2.019*(t+s/e.rotationScale(e.sync.state.trackFeatures.energy)*8)))*Math.cos(t)+n/2},d=function(t){return(l+u*Math.sin(2.019*(t+s/e.rotationScale(e.sync.state.trackFeatures.energy)*4)))*Math.sin(t)+i/2};this.createPath(a,{x:h,y:d},15),a.lineWidth=Math.min(o,1),a.strokeStyle=this.gradient2,a.stroke()}},{key:"paintCenter",value:function(t){var e=this,a=t.ctx,n=t.width,i=t.height,s=t.now,r=this.sync.getInterval("tatum"),c=r.progress,o=n>i?n/10:i/10,u=Object(H["b"])([this.sync.volume*-o,this.sync.volume*o,this.sync.volume*-o]),l=u(c)*this.radiusScale(this.sync.state.trackFeatures.energy),h=n>i?this.sync.volume*i/4:this.sync.volume*n/4,d=function(t){return(h+.2*l*Math.sin(7.05*(t+s/e.rotationScale(e.sync.state.trackFeatures.energy)*4)))*Math.cos(t)+n/2},v=function(t){return(h+.2*l*Math.cos(7.05*(t+s/e.rotationScale(e.sync.state.trackFeatures.energy))))*Math.sin(t)+i/2};this.createPath(a,{x:d,y:v},10),a.lineWidth=Math.min(this.sync.volume,1),a.strokeStyle=this.gradient,a.stroke()}},{key:"paintOverlay",value:function(t){var e=t.ctx,a=t.width,n=t.height,i=t.now;this.backgroundTick||(this.backgroundTick=i);var s=this.sync.getInterval("section"),r=s.progress,c=Math.min((i-this.backgroundTick)/1e4,1);e.save(),e.globalCompositeOperation="overlay",e.fillStyle=Object(H["d"])(this.overlayColors)(r),e.fillRect(0,0,a,n),e.restore(),1===c&&(this.backgroundTick=i)}},{key:"updateCanvas",value:function(t){var e=t.ctx,a=t.width,n=t.height,i=t.now;this.backgroundTick||(this.backgroundTick=i);var s=this.sync.getInterval("beat"),r=(s.progress,5),c=5*r,o=parseInt(a),u=parseInt(n),l=["#114B5F","#028090","#E4FDE1","#456990"],h=l.length,d=Math.min((i-this.backgroundTick)/1e4,1);e.save(),e.globalCompositeOperation="overlay";for(var v=0;v<o;v++)for(var f=0;f<u;f++)e.fillStyle=l[parseInt(Math.random()*h)],e.beginPath(),e.arc(r+c*v,r+c*f,r,0,2*Math.PI,!0),e.closePath(),e.fill();e.restore(),1===d&&(this.backgroundTick=i)}},{key:"paint",value:function(t){this.paintBackground(t),this.paintInnerLines(t),this.paintOverlay(t)}}]),e}(B),K={data:function(){return{loading:!1}},components:{AppHeader:h},methods:{auth:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,R("".concat("http://localhost:8001","/auth"));case 2:e=t.sent,a=e.data,this.loading=!0,this.$refs.container.addEventListener("animationend",function(){window.location.href="".concat("http://localhost:8001","/login?auth_id=").concat(a.auth_id)});case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.wavesync=new Q({fixed:!0})}},Y=K,V=(a("edc0"),Object(o["a"])(Y,g,y,!1,null,"fd71e396",null)),X=V.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"visualizer"},[a("Status",{attrs:{loaded:t.loaded,noPlayback:t.noPlayback}}),a("NowPlaying",{attrs:{nowPlaying:t.nowPlaying}})],1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"status"},[a("div",{staticClass:"loading msg",class:{visible:!t.loaded}},[a("h2",[t._v("loading, one moment please")])]),a("div",{staticClass:"no-playback msg",class:{visible:t.noPlayback}},[a("h2",[t._v("no playback detected")])])])},at=[],nt={props:["loaded","noPlayback"]},it=nt,st=(a("dd1b"),Object(o["a"])(it,et,at,!1,null,null,null)),rt=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"now-playing",class:{visible:t.visible}},[a("img",{attrs:{src:t.image}}),a("div",{staticClass:"text",style:{color:t.color||"white"}},[a("div",{staticClass:"name"},[t._v(t._s(t.name))]),a("div",{staticClass:"artist"},[t._v(t._s(t.artist))])])])},ot=[],ut={props:["nowPlaying","color"],data:function(){return{delay:4e3,visible:!1,image:"",name:"",artist:""}},watch:{nowPlaying:function(t){var e=this,a=this.getCurrentlyPlaying(t);a?(this.image=a.image,this.artist=a.artist,this.name=a.name,this.visible=!0,setTimeout(function(){return e.visible=!1},this.delay)):this.visible=!1}},methods:{getCurrentlyPlaying:function(t){var e=t.name||!1,a=t.album,n=!!a&&a.images[1].url,i=a?a.artists[0].name:"";return!1!==n&&{name:e,image:n,artist:i}}}},lt=ut,ht=(a("67b1"),Object(o["a"])(lt,ct,ot,!1,null,"42a5fbf7",null)),dt=ht.exports,vt={components:{Status:rt,NowPlaying:dt},data:function(){return{loaded:!1,noPlayback:!1,nowPlaying:{image:"",name:"",artist:""}}},mounted:function(){var t=this;this.waveSync=new Q,this.waveSync.sync.watch("active",function(){return t.loaded=!0}),this.waveSync.sync.watch("noPlayback",function(e){return t.noPlayback=e}),this.waveSync.sync.watch("currentlyPlaying",function(e){t.nowPlaying=e})}},ft=vt,mt=Object(o["a"])(ft,Z,tt,!1,null,null,null),pt=mt.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("html",[n("head",[n("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}})]),n("body",[n("br"),n("div",{staticClass:"container-fluid cover",staticStyle:{width:"100%","backdrop-filter":"blur(3px) contrast(0.9)"}},[n("div",{staticClass:"pt-5 pb-5 mb-0 text-white"},[n("br"),n("h1",{staticClass:"mt-5 pt-5 pb-3 mb-0 display-3 center",staticStyle:{"font-size":"80px",color:"white"}},[t._v("\n                        Meet Our Team\n                    ")]),n("h2",{staticClass:"center pb-3",staticStyle:{"font-size":"1.5rem",color:"white"}},[t._v("\n                        Thank you for visiting our website! Feel free to\n                        reach out to any of our team members through their\n                        emails listed below.\n                    ")]),n("br"),n("hr",{staticClass:"mt-0",staticStyle:{height:"5px","backdrop-filter":"blur(3px) contrast(0.9)"},attrs:{color:"white"}}),n("div",{staticClass:"container center"},[n("img",{staticStyle:{width:"auto",height:"70px","margin-left":"auto","margin-right":"auto","backdrop-filter":"blur(3px) contrast(0.9)"}})])])]),n("div",{staticClass:"container-fluid",staticStyle:{width:"100%","backdrop-filter":"blur(3px) contrast(0.9)"}},[n("div",{staticClass:"row center justify-content-center",staticStyle:{display:"flex",width:"100%","backdrop-filter":"blur(3px) contrast(0.9)"}},[n("div",{staticClass:"column"},[n("div",{staticClass:"card center"},[n("img",{staticClass:"profile",staticStyle:{width:"50%"},attrs:{src:"https://ca.slack-edge.com/T0WA5NWKG-U012HFBP9PC-213c4b0329f5-512",alt:"Frank Bruni"}}),n("div",{staticClass:"container"},[n("h2",{staticClass:"name-card-title pt-3 center"},[t._v("\n                                    Frank Bruni\n                                ")]),n("p",{staticClass:"title"},[t._v("Recommender Model & API")]),n("a",{staticClass:"center",staticStyle:{width:"fit-content",color:"white"},attrs:{href:"mailto:frankbruni@ischool.berkeley.edu"}},[n("img",{attrs:{src:a("244f"),alt:"email Frank"}})])])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"card center"},[n("img",{staticClass:"profile",staticStyle:{width:"50%"},attrs:{src:"https://ca.slack-edge.com/T0WA5NWKG-U012F495TV1-28d089035e9e-512",alt:"Julie Lai"}}),n("div",{staticClass:"container"},[n("h2",{staticClass:"name-card-title pt-3 center"},[t._v("\n                                    Julie Lai\n                                ")]),n("p",{staticClass:"title"},[t._v("Website Development")]),n("a",{staticStyle:{color:"white"},attrs:{href:"mailto:julielai@ischool.berkeley.edu"}},[n("img",{attrs:{src:a("244f"),alt:"email Julie"}})])])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"card center"},[n("img",{staticClass:"profile",staticStyle:{width:"50%"},attrs:{src:"https://ca.slack-edge.com/T0WA5NWKG-U014YSAKM7H-5f1b71348749-512",alt:"Angela Gao"}}),n("div",{staticClass:"container"},[n("h2",{staticClass:"name-card-title pt-3 center"},[t._v("\n                                    Angela Gao\n                                ")]),n("p",{staticClass:"title"},[t._v("Website Development")]),n("a",{staticStyle:{color:"white"},attrs:{href:"mailto:agao729@berkeley.edu"}},[n("img",{attrs:{src:a("244f"),alt:"email Angela"}})])])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"card center"},[n("img",{staticClass:"profile",staticStyle:{width:"50%"},attrs:{src:"https://ca.slack-edge.com/T0WA5NWKG-UU6P51H0D-281b5052f13d-512",alt:"Daphne Yang"}}),n("div",{staticClass:"container"},[n("h2",{staticClass:"name-card-title pt-3 center"},[t._v("\n                                    Daphne Yang\n                                ")]),n("p",{staticClass:"title"},[t._v("Recommender Model & API")]),n("a",{staticStyle:{color:"white"},attrs:{href:"mailto:daphne.yang@berkeley.edu"}},[n("img",{attrs:{src:a("244f"),alt:"email Daphne"}})])])])])])])])])])}],bt={data:function(){return{loading:!1}},mounted:function(){this.wavesync=new Q({fixed:!0})}},kt=bt,wt=(a("56db"),Object(o["a"])(kt,gt,yt,!1,null,"9beba9d0",null)),xt=wt.exports,_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("body",[a("html",[a("head",[a("meta",{attrs:{name:"viewport",content:"width=device-width, initial-scale=1"}})]),a("body",[a("div",{staticClass:"container-fluid cover",staticStyle:{width:"100%","backdrop-filter":"blur(3px) contrast(0.9)"}},[a("div",{staticClass:"pt-5 pb-5 mb-0 text-white"},[a("div",{staticClass:"container center"},[a("img",{staticStyle:{width:"auto",height:"570px","margin-left":"auto","margin-right":"auto","backdrop-filter":"blur(3px) contrast(0.9)"}})])])])])])])}],Ct={data:function(){return{loading:!1}},mounted:function(){this.wavesync=new Q({fixed:!0})}},St=Ct,Pt=(a("2ee6"),Object(o["a"])(St,_t,Ot,!1,null,"cb26ab72",null)),jt=Pt.exports;n["a"].use(p["a"]);var Tt=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:X},{path:"/visualizer",name:"about",component:pt},{path:"/about",name:"About",component:xt},{path:"/recommender",name:"Get Recommendations",component:jt}]});n["a"].config.productionTip=!1,new n["a"]({router:Tt,render:function(t){return t(m)}}).$mount("#app")},"56db":function(t,e,a){"use strict";var n=a("0500"),i=a.n(n);i.a},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),i=a.n(n);i.a},"5e27":function(t,e,a){},"61ce":function(t,e,a){},"67b1":function(t,e,a){"use strict";var n=a("fef0"),i=a.n(n);i.a},"7b0e":function(t,e,a){"use strict";var n=a("177a"),i=a.n(n);i.a},c764:function(t,e,a){},dd1b:function(t,e,a){"use strict";var n=a("61ce"),i=a.n(n);i.a},edc0:function(t,e,a){"use strict";var n=a("078d"),i=a.n(n);i.a},fef0:function(t,e,a){}});
//# sourceMappingURL=app.9b0307fe.js.map