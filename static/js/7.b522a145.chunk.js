(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{295:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(87);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,a=!1,i=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(c.push(s.value),!t||c.length!==t);n=!0);}catch(o){a=!0,i=o}finally{try{n||null==r.return||r.return()}finally{if(a)throw i}}return c}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},311:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(295),i=c(0),s=c(127),r=c(128),o=c(48),d=c(38),l=Object(r.a)({form:"audio"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,className:"Login",children:[Object(n.jsxs)("div",{className:"d-flex",children:["Name Music:",Object(n.jsx)(s.a,{component:o.a,validate:[d.b],name:"nameMusic",placeholder:"..."})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Name Compositor:",Object(n.jsx)(s.a,{component:o.a,validate:[d.b],name:"nameCompositor",placeholder:"..."})]}),Object(n.jsxs)("div",{className:"d-flex",children:["URL image:",Object(n.jsx)(s.a,{component:o.a,validate:[d.b],name:"imgURL",placeholder:"..."})]}),Object(n.jsxs)("div",{className:"d-flex",children:["URL music:",Object(n.jsx)(s.a,{component:o.a,validate:[d.b],name:"musicURL",placeholder:"..."})]}),Object(n.jsx)("button",{className:"w-100 btn btn-success",children:"Add"})]})})),b=function(e){var t=Object(i.useState)(!1),c=Object(a.a)(t,2),s=c[0],r=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{onClick:function(){r(!s)},className:"right d-flex",children:[s?Object(n.jsx)("span",{className:"Link",children:"Cancel"}):Object(n.jsx)("span",{className:"Link",children:"Add Music"}),Object(n.jsx)("div",{className:"ml-1",children:Object(n.jsx)("button",{className:s?"btn btn-close btn-outline-danger":"btn btn-outline-success",children:!s&&"+"})})]}),Object(n.jsx)("div",{children:s&&Object(n.jsx)(l,{onSubmit:function(t){e.addAudio(t.nameMusic,t.nameCompositor,t.musicURL,t.imgURL)}})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:e.audioData})]})},j=c(21),u=c(91),m=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"card mt-2",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h1",{className:"Link",children:[e.name,"-",e.compositor,Object(n.jsx)("div",{className:"right",children:Object(n.jsx)("button",{onClick:function(){e.deleteAudio(e.id)},className:"btn btn-close",title:"delete audio"})})]}),Object(n.jsx)("audio",{className:"mt-4",controls:!0,children:Object(n.jsx)("source",{src:e.asrc&&e.asrc})})]})})})})})},h=Object(j.b)((function(e){return{}}),{deleteAudio:u.c})(m),O=function(e){return e.audioPage.Property.audioData.map((function(e){return Object(n.jsx)(h,{name:e.name,compositor:e.compositor,asrc:e.asrc,img:e.img,id:e.id})}))};t.default=Object(j.b)((function(e){return{audioData:O(e)}}),{addAudio:u.a})(b)}}]);
//# sourceMappingURL=7.b522a145.chunk.js.map