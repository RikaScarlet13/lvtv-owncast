(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{83514:function(e,t,n){"use strict";var s=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(38416)),c=a(n(94184)),i=s(n(67294)),o=n(31929),u=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>t.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]]);return n};t.default=function(e){var t,n=e.prefixCls,s=e.className,a=e.checked,d=e.onChange,f=e.onClick,g=u(e,["prefixCls","className","checked","onChange","onClick"]),m=(0,i.useContext(o.ConfigContext).getPrefixCls)("tag",n),h=(0,c.default)(m,(t={},(0,r.default)(t,"".concat(m,"-checkable"),!0),(0,r.default)(t,"".concat(m,"-checkable-checked"),a),t),s);return i.createElement("span",(0,l.default)({},g,{className:h,onClick:function(e){null==d||d(!a),null==f||f(e)}}))}},59361:function(e,t,n){"use strict";var s=n(75263).default,a=n(64836).default;t.Z=void 0;var l=a(n(38416)),r=a(n(10434)),c=a(n(27424)),i=a(n(40753)),o=a(n(94184)),u=a(n(18475)),d=s(n(67294)),f=n(31929),g=n(45471),m=a(n(61539));a(n(13594));var h=a(n(83514)),p=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)0>t.indexOf(s[a])&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]]);return n},b=new RegExp("^(".concat(g.PresetColorTypes.join("|"),")(-inverse)?$")),v=new RegExp("^(".concat(g.PresetStatusColorTypes.join("|"),")$")),x=d.forwardRef(function(e,t){var n,s=e.prefixCls,a=e.className,g=e.style,h=e.children,x=e.icon,j=e.color,N=e.onClose,C=e.closeIcon,k=e.closable,y=void 0!==k&&k,E=p(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),S=d.useContext(f.ConfigContext),w=S.getPrefixCls,O=S.direction,P=d.useState(!0),U=(0,c.default)(P,2),_=U[0],T=U[1];d.useEffect(function(){"visible"in E&&T(E.visible)},[E.visible]);var D=function(){return!!j&&(b.test(j)||v.test(j))},I=(0,r.default)({backgroundColor:j&&!D()?j:void 0},g),Z=D(),M=w("tag",s),J=(0,o.default)(M,(n={},(0,l.default)(n,"".concat(M,"-").concat(j),Z),(0,l.default)(n,"".concat(M,"-has-color"),j&&!Z),(0,l.default)(n,"".concat(M,"-hidden"),!_),(0,l.default)(n,"".concat(M,"-rtl"),"rtl"===O),n),a),A=function(e){e.stopPropagation(),null==N||N(e),!e.defaultPrevented&&("visible"in E||T(!1))},z="onClick"in E||h&&"a"===h.type,F=(0,u.default)(E,["visible"]),L=x||null,R=L?d.createElement(d.Fragment,null,L,d.createElement("span",null,h)):h,X=d.createElement("span",(0,r.default)({},F,{ref:t,className:J,style:I}),R,y?C?d.createElement("span",{className:"".concat(M,"-close-icon"),onClick:A},C):d.createElement(i.default,{className:"".concat(M,"-close-icon"),onClick:A}):null);return z?d.createElement(m.default,null,X):X});x.CheckableTag=h.default,t.Z=x},13882:function(e,t,n){"use strict";function s(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return s}})},19013:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(71002),a=n(13882);function l(e){(0,a.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,s.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},42011:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return n(38367)}])},4349:function(e,t,n){"use strict";n.d(t,{Q:function(){return u},Y:function(){return d}});var s=n(85893),a=n(67294),l=n(53740),r=n(59361),c=n(67032),i=n(57520);let{Title:o}=l.default,u="#5a67d8",d=e=>{let{title:t,description:n,placeholder:l,maxLength:d,values:f,handleDeleteIndex:g,handleCreateString:m,submitStatus:h,continuousStatusMessage:p}=e,[b,v]=(0,a.useState)("");return(0,s.jsxs)("div",{className:"edit-string-array-container",children:[(0,s.jsx)(o,{level:3,className:"section-title",children:t}),(0,s.jsx)("p",{className:"description",children:n}),(0,s.jsx)("div",{className:"edit-current-strings",children:null==f?void 0:f.map((e,t)=>(0,s.jsx)(r.Z,{closable:!0,onClose:()=>{g(t)},color:u,children:e},"tag-".concat(e,"-").concat(t)))}),p&&(0,s.jsx)("div",{className:"continuous-status-section",children:(0,s.jsx)(i.E,{status:p})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(c.nv,{fieldName:"string-input",value:b,onChange:e=>{let{value:t}=e;v(t)},onPressEnter:()=>{let e=b.trim();m(e),v("")},maxLength:d,placeholder:l,status:h})})]})};d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},44716:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(85893),a=n(67294),l=n(40987),r=n(91332),c=n(57520),i=n(24044),o=n(38631);let u=e=>{let{apiPath:t,checked:n,reversed:u=!1,configPath:d="",disabled:f=!1,fieldName:g,label:m,tip:h,useSubmit:p,onChange:b}=e,[v,x]=(0,a.useState)(null),j=null,N=(0,a.useContext)(o.a),{setFieldInConfigState:C}=N||{},k=()=>{x(null),clearTimeout(j),j=null},y=async e=>{if(p){x((0,r.kg)(r.Jk));let n=u?!e:e;await (0,i.Si)({apiPath:t,data:{value:n},onSuccess:()=>{C({fieldName:g,value:n,path:d}),x((0,r.kg)(r.zv))},onError:e=>{x((0,r.kg)(r.Un,"There was an error: ".concat(e)))}}),j=setTimeout(k,i.sI)}b&&b(e)},E=null!==v&&v.type===r.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[m&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:m})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(l.Z,{className:"switch field-".concat(g),loading:E,onChange:y,defaultChecked:n,checked:n,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,s.jsx)(c.E,{status:v})]}),(0,s.jsx)("p",{className:"field-tip",children:h})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},38367:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(85893),a=n(53740),l=n(67294),r=n(67032),c=n(78353),i=n(44716),o=n(4349),u=n(91332),d=n(24044),f=n(38631),g=n(34261);function m(){var e;let{Title:t}=a.default,[n,g]=(0,l.useState)(null),[m,h]=(0,l.useState)(null),[p,b]=(0,l.useState)(null),v=(0,l.useContext)(f.a),{serverConfig:x,setFieldInConfigState:j}=v||{},{chatDisabled:N,chatJoinMessagesEnabled:C,forbiddenUsernames:k,instanceDetails:y,suggestedUsernames:E,chatEstablishedUserMode:S}=x,{welcomeMessage:w}=y,O=e=>{let{fieldName:t,value:s}=e;g({...n,[t]:s})};function P(){h(null)}function U(){(0,d.Si)({apiPath:d.CJ,data:{value:n.forbiddenUsernames},onSuccess:()=>{j({fieldName:"forbiddenUsernames",value:n.forbiddenUsernames}),h((0,u.kg)(u.zv)),setTimeout(P,d.sI)},onError:e=>{h((0,u.kg)(u.Un,e)),setTimeout(P,d.sI)}})}function _(){b(null)}function T(){(0,d.Si)({apiPath:d.cf,data:{value:n.suggestedUsernames},onSuccess:()=>{j({fieldName:"suggestedUsernames",value:n.suggestedUsernames}),b((0,u.kg)(u.zv)),setTimeout(_,d.sI)},onError:e=>{h((0,u.kg)(u.Un,e)),setTimeout(_,d.sI)}})}return((0,l.useEffect)(()=>{g({chatDisabled:N,chatJoinMessagesEnabled:C,forbiddenUsernames:k,suggestedUsernames:E,welcomeMessage:w,chatEstablishedUserMode:S})},[x]),n)?(0,s.jsxs)("div",{className:"config-server-details-form",children:[(0,s.jsx)(t,{children:"Chat Settings"}),(0,s.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,s.jsx)(i.Z,{fieldName:"chatDisabled",...d.yj,checked:!n.chatDisabled,reversed:!0,onChange:function(e){O({fieldName:"chatDisabled",value:!e})}}),(0,s.jsx)(i.Z,{fieldName:"chatJoinMessagesEnabled",...d.kB,checked:n.chatJoinMessagesEnabled,onChange:function(e){O({fieldName:"chatJoinMessagesEnabled",value:e})}}),(0,s.jsx)(i.Z,{fieldName:"chatEstablishedUserMode",...d.dj,checked:n.chatEstablishedUserMode,onChange:function(e){O({fieldName:"chatEstablishedUserMode",value:e})}}),(0,s.jsx)(c.$7,{fieldName:"welcomeMessage",...d.IX,type:r.Sk,value:n.welcomeMessage,initialValue:w,onChange:O}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Y,{title:d.Dg.label,placeholder:d.Dg.placeholder,description:d.Dg.tip,values:n.forbiddenUsernames,handleDeleteIndex:function(e){n.forbiddenUsernames.splice(e,1),U()},handleCreateString:function(e){n.forbiddenUsernames.push(e),O({fieldName:"forbiddenUsernames",value:n.forbiddenUsernames}),U()},submitStatus:m}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.Y,{title:d.AN.label,placeholder:d.AN.placeholder,description:d.AN.tip,values:n.suggestedUsernames,handleDeleteIndex:function(e){n.suggestedUsernames.splice(e,1),T()},handleCreateString:function(e){n.suggestedUsernames.push(e),O({fieldName:"suggestedUsernames",value:n.suggestedUsernames}),T()},submitStatus:p,continuousStatusMessage:0===(e=n.suggestedUsernames.length)?(0,u.kg)("success",d.AN.no_entries):e>0&&e<10?(0,u.kg)("warning",d.AN.min_not_reached):null})]})]}):null}m.getLayout=function(e){return(0,s.jsx)(g.l,{page:e})}}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,4938,4261,9774,2888,179],function(){return e(e.s=42011)}),_N_E=e.O()}]);