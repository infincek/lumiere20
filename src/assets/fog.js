/* eslint-disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports._vantaEffect=t():e._vantaEffect=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){"use strict";function i(e,t){for(let n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function o(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600}n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"i",(function(){return s})),n.d(t,"h",(function(){return r})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return h})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return l})),Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};const s=e=>e[Math.floor(Math.random()*e.length)];function r(e,t){return null==e&&(e=0),null==t&&(t=1),e+Math.random()*(t-e)}function a(e,t){return null==e&&(e=0),null==t&&(t=1),Math.floor(e+Math.random()*(t-e+1))}const h=e=>document.querySelector(e),u=e=>"number"==typeof e?"#"+("00000"+e.toString(16)).slice(-6):e,c=(e,t=1)=>{const n=u(e),i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),o=i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null;return"rgba("+o.r+","+o.g+","+o.b+","+t+")"},l=e=>.299*e.r+.587*e.g+.114*e.b},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(0);const o="object"==typeof window;let s=o&&window.THREE||{};o&&!window.VANTA&&(window.VANTA={});const r=o&&window.VANTA||{};r.register=(e,t)=>r[e]=e=>new t(e),r.version="0.5.4";const a=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};r.VantaBase=class{constructor(e={}){if(!o)return!1;if(r.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this),this.options=Object(i.c)({},this.defaultOptions),(e instanceof HTMLElement||"string"==typeof e)&&(e={el:e}),Object(i.c)(this.options,e),this.options.THREE&&(s=this.options.THREE),this.el=this.options.el,null==this.el)a('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const e=this.el;if(this.el=Object(i.f)(e),!this.el)return void a("Cannot find element",e)}let t,n;for(t=0;t<this.el.children.length;t++)n=this.el.children[t],"static"===getComputedStyle(n).position&&(n.style.position="relative"),"auto"===getComputedStyle(n).zIndex&&(n.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative"),this.initThree(),this.setSize();try{this.init()}catch(e){return a("Init error",e),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(i.a)(this.options.backgroundColor)))}const h=window.addEventListener;h("resize",this.resize),this.resize(),this.animationLoop(),h("scroll",this.windowMouseMoveWrapper),h("mousemove",this.windowMouseMoveWrapper),h("touchstart",this.windowTouchWrapper),h("touchmove",this.windowTouchWrapper)}setOptions(e={}){Object(i.c)(this.options,e)}applyCanvasStyles(e,t={}){Object(i.c)(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object(i.c)(e.style,t),e.classList.add("vanta-canvas")}initThree(){s.WebGLRenderer?(this.renderer=new s.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new s.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}windowMouseMoveWrapper(e){const t=this.getCanvasElement();if(!t)return!1;const n=t.getBoundingClientRect(),i=e.clientX-n.left,o=e.clientY-n.top;i>=0&&o>=0&&i<=n.width&&o<=n.height&&(this.mouseX=i,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(i,o))}windowTouchWrapper(e){if(1===e.touches.length){const t=this.getCanvasElement();if(!t)return!1;const n=t.getBoundingClientRect(),i=e.touches[0].clientX-n.left,o=e.touches[0].clientY-n.top;i>=0&&o>=0&&i<=n.width&&o<=n.height&&(this.mouseX=i,this.mouseY=o,this.options.mouseEase||this.triggerMouseMove(i,o))}}triggerMouseMove(e,t){this.uniforms&&(this.uniforms.u_mouse.value.x=e/this.scale,this.uniforms.u_mouse.value.y=t/this.scale);const n=e/this.width,i=t/this.height;"function"==typeof this.onMouseMove&&this.onMouseMove(n,i)}setSize(){this.scale||(this.scale=1),Object(i.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=this.el.offsetWidth||window.innerWidth,this.height=this.el.offsetHeight||window.innerHeight}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),n=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=t.top+n;return i-window.innerHeight<=n&&n<=i+e}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.u_time.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX=this.mouseEaseX+.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY=this.mouseEaseY+.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null)}},t.b=r.VantaBase},function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var i=n(1),o=n(0);n.d(t,"a",(function(){return i.a}));let s="object"==typeof window&&window.THREE;class r extends i.b{constructor(e){(s=e.THREE||s).Color.prototype.toVector=function(){return new s.Vector3(this.r,this.g,this.b)},super(e),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new s.Vector2(1,1)},u_mouse:{type:"v2",value:new s.Vector2(0,0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(e){super.setOptions(e),this.updateUniforms()}initBasicShader(e=this.fragmentShader,t=this.vertexShader){t||(t="uniform float u_time;\nuniform vec2 u_resolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"),this.updateUniforms(),"function"==typeof this.valuesChanger&&this.valuesChanger();const n=new s.ShaderMaterial({uniforms:this.uniforms,vertexShader:t,fragmentShader:e}),i=this.options.texturePath;i&&(this.uniforms.u_tex={type:"t",value:(new s.TextureLoader).load(i)});const o=new s.Mesh(new s.PlaneGeometry(2,2),n);this.scene.add(o),this.camera=new s.Camera,this.camera.position.z=1}updateUniforms(){const e={};let t,n;for(t in this.options)n=this.options[t],-1!==t.toLowerCase().indexOf("color")?e[t]={type:"v3",value:new s.Color(n).toVector()}:"number"==typeof n&&(e[t]={type:"f",value:n});return Object(o.c)(this.uniforms,e)}resize(){super.resize(),this.uniforms.u_resolution.value.x=this.width/this.scale,this.uniforms.u_resolution.value.y=this.height/this.scale}}},,,,,,,function(e,t,n){"use strict";n.r(t);var i=n(2);class o extends i.b{}t.default=i.a.register("FOG",o),o.prototype.defaultOptions={highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1,scale:2,scaleMobile:4},o.prototype.fragmentShader="uniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\n\nuniform float blurFactor;\nuniform vec3 baseColor;\nuniform vec3 lowlightColor;\nuniform vec3 midtoneColor;\nuniform vec3 highlightColor;\nuniform float zoom;\n\nfloat random (in vec2 _st) {\n  return fract(sin(dot(_st.xy,\n                        vec2(12.9898,78.233)))*\n      43758.5453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 _st) {\n  vec2 i = floor(_st);\n  vec2 f = fract(_st);\n\n  // Four corners in 2D of a tile\n  float a = random(i);\n  float b = random(i + vec2(1.0, 0.0));\n  float c = random(i + vec2(0.0, 1.0));\n  float d = random(i + vec2(1.0, 1.0));\n\n  vec2 u = f * f * (3.0 - 2.0 * f);\n\n  return mix(a, b, u.x) +\n          (c - a)* u.y * (1.0 - u.x) +\n          (d - b) * u.x * u.y;\n}\n\n#define NUM_OCTAVES 6\n\nfloat fbm ( in vec2 _st) {\n  float v = 0.0;\n  float a = blurFactor;\n  vec2 shift = vec2(100.0);\n  // Rotate to reduce axial bias\n  mat2 rot = mat2(cos(0.5), sin(0.5),\n                  -sin(0.5), cos(0.50));\n  for (int i = 0; i < NUM_OCTAVES; ++i) {\n      v += a * noise(_st);\n      _st = rot * _st * 2.0 + shift;\n      a *= (1. - blurFactor);\n  }\n  return v;\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / u_resolution.xy*3.;\n  st.x *= 0.7 * u_resolution.x / u_resolution.y ; // Still keep it more landscape than square\n  st *= zoom;\n\n  // st += st * abs(sin(u_time*0.1)*3.0);\n  vec3 color = vec3(0.0);\n\n  vec2 q = vec2(0.);\n  q.x = fbm( st + 0.00*u_time);\n  q.y = fbm( st + vec2(1.0));\n\n  vec2 dir = vec2(0.15,0.126);\n  vec2 r = vec2(0.);\n  r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ dir.x*u_time );\n  r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ dir.y*u_time);\n\n  float f = fbm(st+r);\n\n  color = mix(baseColor,\n              lowlightColor,\n              clamp((f*f)*4.0,0.0,1.0));\n\n  color = mix(color,\n              midtoneColor,\n              clamp(length(q),0.0,1.0));\n\n  color = mix(color,\n              highlightColor,\n              clamp(length(r.x),0.0,1.0));\n\n  vec3 finalColor = mix(baseColor, color, f*f*f+.6*f*f+.5*f);\n  gl_FragColor = vec4(finalColor,1.0);\n}\n"}])}));