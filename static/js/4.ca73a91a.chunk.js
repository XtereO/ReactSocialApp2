(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(89);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,s=!1,a=void 0;try{for(var i,r=e[Symbol.iterator]();!(n=(i=r.next()).done)&&(c.push(i.value),!t||c.length!==t);n=!0);}catch(o){s=!0,a=o}finally{try{n||null==r.return||r.return()}finally{if(s)throw a}}return c}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},299:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(295),a=c(0),i=c(126),r=c(127),o=c(81),d=c(50),l=Object(r.a)({form:"audio"})((function(e){return Object(n.jsxs)("form",{onSubmit:e.handleSubmit,className:"Login",children:[Object(n.jsxs)("div",{className:"d-flex",children:["Name Music:",Object(n.jsx)(i.a,{component:o.a,validate:[d.b],name:"nameMusic",placeholder:"..."})]}),Object(n.jsxs)("div",{className:"d-flex",children:["Name Compositor:",Object(n.jsx)(i.a,{component:o.a,validate:[d.b],name:"nameCompositor",placeholder:"..."})]}),Object(n.jsxs)("div",{className:"d-flex",children:["URL image:",Object(n.jsx)(i.a,{component:o.a,name:"imgURL",placeholder:"..."})]}),Object(n.jsxs)("div",{className:"d-flex",children:["URL music:",Object(n.jsx)(i.a,{component:o.a,name:"musicURL",placeholder:"..."})]}),Object(n.jsx)("button",{className:"w-100 btn btn-success",children:"Add"})]})})),j=function(e){var t=Object(a.useState)(!1),c=Object(s.a)(t,2),i=c[0],r=c[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{onClick:function(){r(!i)},className:"right  d-flex",children:[i?Object(n.jsx)("span",{className:"Link",children:"Cancel"}):Object(n.jsx)("span",{className:"Link",children:"Add Music"}),Object(n.jsx)("div",{className:"ml-1",children:Object(n.jsx)("button",{className:i?"btn btn-close btn-outline-danger":"btn btn-outline-success",children:!i&&"+"})})]}),Object(n.jsx)("br",{}),i&&Object(n.jsx)("div",{children:Object(n.jsx)(l,{onSubmit:function(t){e.addAudio(t.nameMusic,t.nameCompositor,t.musicURL,t.imgURL)}})})]}),Object(n.jsx)("div",{children:e.audioData})]})},m=c(20),b=c(91),u=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"card mt-2",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-2",children:Object(n.jsx)("img",{src:e.img,className:"img rounded w-100"})}),Object(n.jsx)("div",{className:"col-10",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("h1",{className:"Link",children:[e.name,"-",e.compositor,Object(n.jsx)("div",{className:"right",children:Object(n.jsx)("button",{onClick:function(){e.deleteAudio(e.id)},className:"btn btn-close",title:"delete audio"})})]}),Object(n.jsx)("audio",{className:"mt-4",controls:"controls",children:Object(n.jsx)("source",{src:e.asrc})})]})})]})})})},h=Object(m.b)((function(e){return{}}),{deleteAudio:b.c})(u),O=function(e){return e.audioPage.Property.audioData.map((function(e){return Object(n.jsx)(h,{name:e.name,compositor:e.compositor,asrc:e.asrc,img:e.img,id:e.id})}))},x=Object(m.b)((function(e){return{audioData:O(e)}}),{addAudio:b.a})(j);t.default=x}}]);
//# sourceMappingURL=4.ca73a91a.chunk.js.map