(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1487],{37182:function(e,t,r){"use strict";var o=r(75263).default,n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(38416)),s=r(92138),i=n(r(94184)),c=r(34744),l=o(r(67294)),u=r(4087);t.default=function(e){var t,r,o,n,d,f,p,v=e.prefixCls,m=e.width,g=e.strokeWidth,h=e.trailColor,y=e.strokeLinecap,b=e.gapPosition,k=e.gapDegree,x=e.type,C=e.children,w=e.success,j=m||120,P=g||6,E="[object Object]"===Object.prototype.toString.call(e.strokeColor),O=(r=(t={success:w,strokeColor:e.strokeColor}).success,o=t.strokeColor,[(void 0===r?{}:r).strokeColor||s.presetPrimaryColors.green,o||null]),N=(0,i.default)("".concat(v,"-inner"),(0,a.default)({},"".concat(v,"-circle-gradient"),E));return l.createElement("div",{className:N,style:{width:j,height:j,fontSize:.15*j+6}},l.createElement(c.Circle,{percent:(n=e.percent,d=e.success,f=e.successPercent,[p=(0,u.validProgress)((0,u.getSuccessPercent)({success:d,successPercent:f})),(0,u.validProgress)((0,u.validProgress)(n)-p)]),strokeWidth:P,trailWidth:P,strokeColor:O,strokeLinecap:void 0===y?"round":y,trailColor:void 0===h?null:h,prefixCls:v,gapDegree:k||0===k?k:"dashboard"===x?75:void 0,gapPosition:b||"dashboard"===x&&"bottom"||void 0}),C)}},2384:function(e,t,r){"use strict";var o=r(75263).default,n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.sortGradient=t.handleGradient=t.default=void 0;var a=n(r(10434)),s=r(92138),i=o(r(67294)),c=r(4087),l=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r},u=function(e){var t=[];return Object.keys(e).forEach(function(r){var o=parseFloat(r.replace(/%/g,""));isNaN(o)||t.push({key:o,value:e[r]})}),(t=t.sort(function(e,t){return e.key-t.key})).map(function(e){var t=e.key,r=e.value;return"".concat(r," ").concat(t,"%")}).join(", ")};t.sortGradient=u;var d=function(e,t){var r=e.from,o=void 0===r?s.presetPrimaryColors.blue:r,n=e.to,a=void 0===n?s.presetPrimaryColors.blue:n,i=e.direction,c=void 0===i?"rtl"===t?"to left":"to right":i,d=l(e,["from","to","direction"]);if(0!==Object.keys(d).length){var f=u(d);return{backgroundImage:"linear-gradient(".concat(c,", ").concat(f,")")}}return{backgroundImage:"linear-gradient(".concat(c,", ").concat(o,", ").concat(a,")")}};t.handleGradient=d,t.default=function(e){var t=e.prefixCls,r=e.direction,o=e.percent,n=e.strokeWidth,s=e.size,l=e.strokeColor,u=e.strokeLinecap,f=void 0===u?"round":u,p=e.children,v=e.trailColor,m=e.success,g=l&&"string"!=typeof l?d(l,r):{background:l},h="square"===f||"butt"===f?0:void 0,y=(0,a.default)({width:"".concat((0,c.validProgress)(o),"%"),height:n||("small"===s?6:8),borderRadius:h},g),b=(0,c.getSuccessPercent)(e),k={width:"".concat((0,c.validProgress)(b),"%"),height:n||("small"===s?6:8),borderRadius:h,backgroundColor:null==m?void 0:m.strokeColor},x=void 0!==b?i.createElement("div",{className:"".concat(t,"-success-bg"),style:k}):null;return i.createElement(i.Fragment,null,i.createElement("div",{className:"".concat(t,"-outer")},i.createElement("div",{className:"".concat(t,"-inner"),style:{backgroundColor:(void 0===v?null:v)||void 0,borderRadius:h}},i.createElement("div",{className:"".concat(t,"-bg"),style:y}),x)),p)}},44428:function(e,t,r){"use strict";var o=r(75263).default,n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(38416)),s=n(r(94184)),i=o(r(67294));t.default=function(e){for(var t=e.size,r=e.steps,o=e.percent,n=e.strokeWidth,c=void 0===n?8:n,l=e.strokeColor,u=e.trailColor,d=void 0===u?null:u,f=e.prefixCls,p=e.children,v=Math.round(r*((void 0===o?0:o)/100)),m="small"===t?2:14,g=Array(r),h=0;h<r;h++){var y=Array.isArray(l)?l[h]:l;g[h]=i.createElement("div",{key:h,className:(0,s.default)("".concat(f,"-steps-item"),(0,a.default)({},"".concat(f,"-steps-item-active"),h<=v-1)),style:{backgroundColor:h<=v-1?y:d,width:m,height:c}})}return i.createElement("div",{className:"".concat(f,"-steps-outer")},g,p)}},74806:function(e,t,r){"use strict";var o=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(7325)).default;t.default=n},7325:function(e,t,r){"use strict";var o=r(75263).default,n=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(38416)),s=n(r(10434)),i=n(r(37431)),c=n(r(71961)),l=n(r(42547)),u=n(r(40753)),d=n(r(94184)),f=n(r(18475)),p=o(r(67294)),v=r(31929),m=r(66764);n(r(13594));var g=n(r(37182)),h=n(r(2384)),y=n(r(44428)),b=r(4087),k=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r};(0,m.tuple)("line","circle","dashboard");var x=(0,m.tuple)("normal","exception","active","success");t.default=function(e){var t,r,o,n,m=e.prefixCls,C=e.className,w=e.steps,j=e.strokeColor,P=e.percent,E=void 0===P?0:P,O=e.size,N=void 0===O?"default":O,S=e.showInfo,Z=void 0===S||S,D=e.type,_=void 0===D?"line":D,W=k(e,["prefixCls","className","steps","strokeColor","percent","size","showInfo","type"]),A=p.useContext(v.ConfigContext),L=A.getPrefixCls,R=A.direction,M=L("progress",m),F=(t=e.status,!x.includes(t)&&parseInt(void 0!==(r=(0,b.getSuccessPercent)(e))?r.toString():E.toString(),10)>=100?"success":t||"normal"),I=function(t,r){var o,n=e.format,a=(0,b.getSuccessPercent)(e);if(!Z)return null;var s="line"===_;return n||"exception"!==r&&"success"!==r?o=(n||function(e){return"".concat(e,"%")})((0,b.validProgress)(E),(0,b.validProgress)(a)):"exception"===r?o=s?p.createElement(l.default,null):p.createElement(u.default,null):"success"===r&&(o=s?p.createElement(i.default,null):p.createElement(c.default,null)),p.createElement("span",{className:"".concat(t,"-text"),title:"string"==typeof o?o:void 0},o)}(M,F),T=Array.isArray(j)?j[0]:j,G="string"==typeof j||Array.isArray(j)?j:void 0;"line"===_?n=w?p.createElement(y.default,(0,s.default)({},e,{strokeColor:G,prefixCls:M,steps:w}),I):p.createElement(h.default,(0,s.default)({},e,{strokeColor:T,prefixCls:M,direction:R}),I):("circle"===_||"dashboard"===_)&&(n=p.createElement(g.default,(0,s.default)({},e,{strokeColor:T,prefixCls:M,progressStatus:F}),I));var V=(0,d.default)(M,(o={},(0,a.default)(o,"".concat(M,"-").concat("dashboard"===_&&"circle"||w&&"steps"||_),!0),(0,a.default)(o,"".concat(M,"-status-").concat(F),!0),(0,a.default)(o,"".concat(M,"-show-info"),Z),(0,a.default)(o,"".concat(M,"-").concat(N),N),(0,a.default)(o,"".concat(M,"-rtl"),"rtl"===R),o),C);return p.createElement("div",(0,s.default)({},(0,f.default)(W,["status","format","trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","success","successPercent"]),{className:V,role:"progressbar"}),n)}},4087:function(e,t,r){"use strict";var o=r(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.getSuccessPercent=function(e){var t=e.success,r=e.successPercent;return t&&"progress"in t&&(r=t.progress),t&&"percent"in t&&(r=t.percent),r},t.validProgress=function(e){return!e||e<0?0:e>100?100:e},o(r(13594))},13882:function(e,t,r){"use strict";function o(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return o}})},19013:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(71002),n=r(13882);function a(e){(0,n.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,o.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},1469:function(e){var t=Array.isArray;e.exports=t},99096:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/hardware-info",function(){return r(30366)}])},54615:function(e,t,r){"use strict";r.d(t,{k:function(){return d}});var o=r(85893),n=r(58091),a=r(67294),s=r(30744),i=r(23148),c=r(26495),l=r(65400);function u(e){let t={};return e.forEach(e=>{let r=new Date(e.time),o=(0,n.Z)(r,"H:mma");t[o]=e.value}),t}i.kL.register(i.uw,i.WV,i.f$,i.od,i.jn,i.Dx,i.u,i.De);let d=e=>{let{data:t,title:r,color:n,unit:i,dataCollections:d,yFlipped:f,yLogarithmic:p,minYValue:v,yStepSize:m=0}=e,g=[],h=(0,a.useRef)(null);return t&&t.length>0&&g.push({id:r,label:r,backgroundColor:n,borderColor:n,borderWidth:3,data:u(t)}),d.forEach(e=>{g.push({id:e.name,label:e.name,data:u(e.data),backgroundColor:e.color,borderColor:e.color,borderWidth:3,pointStyle:e.pointStyle||"circle",radius:e.pointRadius||1})}),(0,o.jsxs)("div",{className:"line-chart-container",children:[(0,o.jsx)(c.x1,{ref:h,data:{datasets:g},options:{responsive:!0,clip:!1,scales:{y:{type:p?"logarithmic":"linear",reverse:f,min:v,ticks:{stepSize:m},title:{display:!0,text:i}}}},height:"70vh"}),(0,o.jsx)(l.default,{size:"small",onClick:()=>{if(h.current){let e=document.createElement("a");e.download="chart.png",e.href=h.current.canvas.toDataURL(),e.click()}},type:"ghost",icon:(0,o.jsx)(s.default,{}),className:"download-btn"})]})};d.defaultProps={dataCollections:[],data:[],title:"",yFlipped:!1,yLogarithmic:!1}},15014:function(e,t,r){"use strict";r.d(t,{m:function(){return p}});var o=r(85893),n=r(53740),a=r(26289),s=r(70302),i=r(74806);let{Text:c}=n.default,l={title:"",value:0,prefix:null,suffix:null,color:"",progress:!1,centered:!1,formatter:null},u=e=>{let{prefix:t,value:r,suffix:n,title:a}=e;return(0,o.jsxs)("div",{children:[t,(0,o.jsx)("div",{children:(0,o.jsx)(c,{type:"secondary",children:a})}),(0,o.jsx)("div",{children:(0,o.jsxs)(c,{type:"secondary",children:[r,n||"%"]})})]})},d=e=>{let{title:t,value:r,prefix:n,suffix:a,color:s}=e,c=(0,o.jsx)(u,{prefix:n,value:r,suffix:a,title:t});return(0,o.jsx)(i.default,{type:"dashboard",percent:r,width:120,strokeColor:{"0%":s,"90%":r>90?"red":s},format:()=>c})};d.defaultProps=l;let f=e=>{let{title:t,value:r,prefix:n,formatter:s}=e;return(0,o.jsx)(a.Z,{title:t,value:r,prefix:n,formatter:s})};f.defaultProps=l;let p=e=>{let{progress:t,centered:r}=e,n=t?d:f;return(0,o.jsx)(s.default,{type:"inner",children:(0,o.jsx)("div",{style:r?{display:"flex",alignItems:"center",justifyContent:"center"}:{},children:(0,o.jsx)(n,{...e})})})};p.defaultProps=l},30366:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var o=r(85893),n=r(55673),a=r(5789),s=r(53740),i=r(4863),c=r(89552),l=r(67294),u=r(5152),d=r.n(u),f=r(81453),p=r(54615),v=r(15014),m=r(34261);let g=d()(()=>r.e(8695).then(r.t.bind(r,18695,23)),{loadableGenerated:{webpack:()=>[18695]},ssr:!1}),h=d()(()=>r.e(7061).then(r.t.bind(r,77061,23)),{loadableGenerated:{webpack:()=>[77061]},ssr:!1}),y=d()(()=>r.e(9790).then(r.t.bind(r,79790,23)),{loadableGenerated:{webpack:()=>[79790]},ssr:!1});function b(){var e,t,r;let[u,d]=(0,l.useState)({cpu:[],memory:[],disk:[],message:""}),m=async()=>{try{let e=await (0,f.rQ)(f.nx);d({...e})}catch(e){d({...u,message:e.message})}};if((0,l.useEffect)(()=>{let e=null;return m(),e=setInterval(m,f.NE),()=>{clearInterval(e)}},[]),!u.cpu)return(0,o.jsxs)("div",{children:[(0,o.jsx)(s.default.Title,{children:"Hardware Info"}),(0,o.jsx)(i.default,{style:{marginTop:"10px"},banner:!0,message:"Please wait",description:"No hardware details have been collected yet.",type:"info"}),(0,o.jsx)(c.default,{spinning:!0,style:{width:"100%",margin:"10px"}})]});let b=null===(e=u.cpu[u.cpu.length-1])||void 0===e?void 0:e.value,k=null===(t=u.memory[u.memory.length-1])||void 0===t?void 0:t.value,x=null===(r=u.disk[u.disk.length-1])||void 0===r?void 0:r.value,C=[{name:"CPU",color:"#B63FFF",data:u.cpu,pointStyle:"rect"},{name:"Memory",color:"#2087E2",data:u.memory,pointStyle:"circle"},{name:"Disk",color:"#FF7700",data:u.disk,pointStyle:"rectRounded"}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.default.Title,{children:"Hardware Info"}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{children:[(0,o.jsxs)(n.Z,{gutter:[16,16],justify:"space-around",children:[(0,o.jsx)(a.Z,{children:(0,o.jsx)(v.m,{title:C[0].name,value:"".concat(Math.round(b)||0),prefix:(0,o.jsx)(h,{style:{color:C[0].color}}),color:C[0].color,progress:!0,centered:!0})}),(0,o.jsx)(a.Z,{children:(0,o.jsx)(v.m,{title:C[1].name,value:"".concat(Math.round(k)||0),prefix:(0,o.jsx)(g,{style:{color:C[1].color}}),color:C[1].color,progress:!0,centered:!0})}),(0,o.jsx)(a.Z,{children:(0,o.jsx)(v.m,{title:C[2].name,value:"".concat(Math.round(x)||0),prefix:(0,o.jsx)(y,{style:{color:C[2].color}}),color:C[2].color,progress:!0,centered:!0})})]}),(0,o.jsx)(p.k,{title:"% used",dataCollections:C,color:"#FF7700",unit:"%"})]})]})}b.getLayout=function(e){return(0,o.jsx)(m.l,{page:e})}},60057:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var o=r(4942),n=r(1413),a=r(97685),s=r(45987),i=r(67294),c=r(81263),l=r(94184),u=r.n(l),d={adjustX:1,adjustY:1},f=[0,0],p={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:f}},v=r(15105),m=r(75164),g=r(88603),h=v.Z.ESC,y=v.Z.TAB,b=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"],k=i.forwardRef(function(e,t){var r,l,d,f,v,k,x,C,w,j,P,E,O,N,S,Z,D=e.arrow,_=void 0!==D&&D,W=e.prefixCls,A=void 0===W?"rc-dropdown":W,L=e.transitionName,R=e.animation,M=e.align,F=e.placement,I=e.placements,T=e.getPopupContainer,G=e.showAction,V=e.hideAction,z=e.overlayClassName,B=e.overlayStyle,H=e.visible,q=e.trigger,X=void 0===q?["hover"]:q,U=e.autoFocus,Q=(0,s.Z)(e,b),Y=i.useState(),$=(0,a.Z)(Y,2),J=$[0],K=$[1],ee="visible"in e?H:J,et=i.useRef(null);i.useImperativeHandle(t,function(){return et.current}),d=(l={visible:ee,setTriggerVisible:K,triggerRef:et,onVisibleChange:e.onVisibleChange,autoFocus:U}).visible,f=l.setTriggerVisible,v=l.triggerRef,k=l.onVisibleChange,x=l.autoFocus,C=i.useRef(!1),w=function(){if(d&&v.current){var e,t,r,o;null===(e=v.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(r=t.current)||void 0===r||null===(o=r.focus)||void 0===o||o.call(r),f(!1),"function"==typeof k&&k(!1)}},j=function(){var e,t,r,o,n=(0,g.tS)(null===(e=v.current)||void 0===e?void 0:null===(t=e.popupRef)||void 0===t?void 0:null===(r=t.current)||void 0===r?void 0:null===(o=r.getElement)||void 0===o?void 0:o.call(r))[0];return null!=n&&!!n.focus&&(n.focus(),C.current=!0,!0)},P=function(e){switch(e.keyCode){case h:w();break;case y:var t=!1;C.current||(t=j()),t?e.preventDefault():w()}},i.useEffect(function(){return d?(window.addEventListener("keydown",P),x&&(0,m.Z)(j,3),function(){window.removeEventListener("keydown",P),C.current=!1}):function(){C.current=!1}},[d]);var er=function(){var t=e.overlay;return"function"==typeof t?t():t},eo=function(){var e=er();return i.createElement(i.Fragment,null,_&&i.createElement("div",{className:"".concat(A,"-arrow")}),e)},en=V;return en||-1===X.indexOf("contextMenu")||(en=["click"]),i.createElement(c.Z,(0,n.Z)((0,n.Z)({builtinPlacements:void 0===I?p:I},Q),{},{prefixCls:A,ref:et,popupClassName:u()(z,(0,o.Z)({},"".concat(A,"-show-arrow"),_)),popupStyle:B,action:X,showAction:G,hideAction:en||[],popupPlacement:void 0===F?"bottomLeft":F,popupAlign:M,popupTransitionName:L,popupAnimation:R,popupVisible:ee,stretch:(E=e.minOverlayWidthMatchTrigger,O=e.alignPoint,"minOverlayWidthMatchTrigger"in e?E:!O)?"minWidth":"",popup:"function"==typeof e.overlay?eo:eo(),onPopupVisibleChange:function(t){var r=e.onVisibleChange;K(t),"function"==typeof r&&r(t)},onPopupClick:function(t){var r=e.onOverlayClick;K(!1),r&&r(t)},getPopupContainer:T}),(S=(N=e.children).props?N.props:{},Z=u()(S.className,void 0!==(r=e.openClassName)?r:"".concat(A,"-open")),ee&&N?i.cloneElement(N,{className:Z}):N))})},34744:function(e,t,r){"use strict";r.r(t),r.d(t,{Circle:function(){return w},Line:function(){return f},default:function(){return j}});var o=r(87462),n=r(1413),a=r(45987),s=r(67294),i=r(94184),c=r.n(i),l={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},u=function(){var e=(0,s.useRef)([]),t=(0,s.useRef)(null);return(0,s.useEffect)(function(){var r=Date.now(),o=!1;e.current.forEach(function(e){if(e){o=!0;var n=e.style;n.transitionDuration=".3s, .3s, .3s, .06s",t.current&&r-t.current<100&&(n.transitionDuration="0s, 0s")}}),o&&(t.current=Date.now())}),e.current},d=["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"],f=function(e){var t=(0,n.Z)((0,n.Z)({},l),e),r=t.className,i=t.percent,f=t.prefixCls,p=t.strokeColor,v=t.strokeLinecap,m=t.strokeWidth,g=t.style,h=t.trailColor,y=t.trailWidth,b=t.transition,k=(0,a.Z)(t,d);delete k.gapPosition;var x=Array.isArray(i)?i:[i],C=Array.isArray(p)?p:[p],w=u(),j=m/2,P="M ".concat("round"===v?j:0,",").concat(j,"\n         L ").concat("round"===v?100-m/2:100,",").concat(j),E=0;return s.createElement("svg",(0,o.Z)({className:c()("".concat(f,"-line"),r),viewBox:"0 0 100 ".concat(m),preserveAspectRatio:"none",style:g},k),s.createElement("path",{className:"".concat(f,"-line-trail"),d:P,strokeLinecap:v,stroke:h,strokeWidth:y||m,fillOpacity:"0"}),x.map(function(e,t){var r=1;switch(v){case"round":r=1-m/100;break;case"square":r=1-m/2/100;break;default:r=1}var o={strokeDasharray:"".concat(e*r,"px, 100px"),strokeDashoffset:"-".concat(E,"px"),transition:b||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},n=C[t]||C[C.length-1];return E+=e,s.createElement("path",{key:t,className:"".concat(f,"-line-path"),d:P,strokeLinecap:v,stroke:n,strokeWidth:m,fillOpacity:"0",ref:function(e){w[t]=e},style:o})}))},p=r(71002),v=r(97685),m=r(98924),g=0,h=(0,m.Z)(),y=function(e){var t=s.useState(),r=(0,v.Z)(t,2),o=r[0],n=r[1];return s.useEffect(function(){var e;n("rc_progress_".concat((h?(e=g,g+=1):e="TEST_OR_SSR",e)))},[]),e||o},b=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function k(e){return+e.replace("%","")}function x(e){var t=null!=e?e:[];return Array.isArray(t)?t:[t]}var C=function(e,t,r,o,n,a,s,i,c,l){var u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,d=(100-o)/100*t;return"round"===c&&100!==o&&(d+=l/2)>=t&&(d=t-.01),{stroke:"string"==typeof i?i:void 0,strokeDasharray:"".concat(t,"px ").concat(e),strokeDashoffset:d+u,transform:"rotate(".concat(n+r/100*360*((360-a)/360)+(0===a?0:({bottom:0,top:180,left:90,right:-90})[s]),"deg)"),transformOrigin:"0 0",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},w=function(e){var t,r,i,d,f=(0,n.Z)((0,n.Z)({},l),e),v=f.id,m=f.prefixCls,g=f.steps,h=f.strokeWidth,w=f.trailWidth,j=f.gapDegree,P=void 0===j?0:j,E=f.gapPosition,O=f.trailColor,N=f.strokeLinecap,S=f.style,Z=f.className,D=f.strokeColor,_=f.percent,W=(0,a.Z)(f,b),A=y(v),L="".concat(A,"-gradient"),R=50-h/2,M=2*Math.PI*R,F=P>0?90+P/2:-90,I=M*((360-P)/360),T="object"===(0,p.Z)(g)?g:{count:g,space:2},G=T.count,V=T.space,z=C(M,I,0,100,F,P,E,O,N,h),B=x(_),H=x(D),q=H.find(function(e){return e&&"object"===(0,p.Z)(e)}),X=u();return s.createElement("svg",(0,o.Z)({className:c()("".concat(m,"-circle"),Z),viewBox:"".concat(-50," ").concat(-50," ").concat(100," ").concat(100),style:S,id:v,role:"presentation"},W),q&&s.createElement("defs",null,s.createElement("linearGradient",{id:L,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(q).sort(function(e,t){return k(e)-k(t)}).map(function(e,t){return s.createElement("stop",{key:t,offset:e,stopColor:q[e]})}))),!G&&s.createElement("circle",{className:"".concat(m,"-circle-trail"),r:R,cx:0,cy:0,stroke:O,strokeLinecap:N,strokeWidth:w||h,style:z}),G?(t=Math.round(G*(B[0]/100)),r=100/G,i=0,Array(G).fill(null).map(function(e,o){var n=o<=t-1?H[0]:O,a=n&&"object"===(0,p.Z)(n)?"url(#".concat(L,")"):void 0,c=C(M,I,i,r,F,P,E,n,"butt",h,V);return i+=(I-c.strokeDashoffset+V)*100/I,s.createElement("circle",{key:o,className:"".concat(m,"-circle-path"),r:R,cx:0,cy:0,stroke:a,strokeWidth:h,opacity:1,style:c,ref:function(e){X[o]=e}})})):(d=0,B.map(function(e,t){var r=H[t]||H[H.length-1],o=r&&"object"===(0,p.Z)(r)?"url(#".concat(L,")"):void 0,n=C(M,I,d,e,F,P,E,r,N,h);return d+=e,s.createElement("circle",{key:t,className:"".concat(m,"-circle-path"),r:R,cx:0,cy:0,stroke:o,strokeLinecap:N,strokeWidth:h,opacity:0===e?0:1,style:n,ref:function(e){X[t]=e}})}).reverse()))},j={Line:f,Circle:w}}},function(e){e.O(0,[2196,5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,9552,3068,8091,6300,8531,5283,4261,9774,2888,179],function(){return e(e.s=99096)}),_N_E=e.O()}]);