(this["webpackJsonpcoders-hub"]=this["webpackJsonpcoders-hub"]||[]).push([[0],{20:function(e,t){e.exports=[{name:"Htoo Aung Lynn",website:"https://halchester.netlify.app",github:"halchester",emoji:"\ud83d\ude0b",info:"React and Django developer, interested in bikes and an undergrad from MIIT",phone:"iphone",laptop:"mac",tags:["Python","Javascript","Django","React","Flutter","openCV","TensorFlow","firebase"]},{name:"Hein Thant Maung Maung",website:"https://heinthanth.ninja",github:"heinthanth",emoji:"\ud83d\ude34",info:"FullStack Web, Mobile developer, a junior DevOps, creator of UiT lang and a PHP fan",phone:"iphone",laptop:"mac",tags:["PHP","JavaScript","C++","UiT Lang","React","Flutter","Laravel","Express","Java","Python","Linux","Docker"]},{name:"Min Thu Kyaw",website:"https://minthukyaw.bike",github:"thukyaw11",emoji:"\ud83d\udc73\ud83c\udffd\u200d\u2642\ufe0f",info:"A passionate Javascriprter with VUE js, Backend Developer and Biker",phone:"android",laptop:"linux",tags:["Javascript","VUE","React JS","Dart","Flutter","PHP","Laravel","Linux","C++","Firebase","git"]}]},51:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(0),r=n.n(i),c=n(13),s=n.n(c),o=n(64);var l=function(){return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(o.a,{variant:"h3",align:"center",children:"Coders"}),Object(a.jsx)("div",{className:"hub__container",style:{boder:"1px solid black",width:"fit-content",padding:5,margin:"0 auto",marginTop:5,background:"black",borderRadius:"10%"},children:Object(a.jsx)(o.a,{variant:"h4",align:"center",color:"primary",children:"Hub"})})]})},d=n(66),h=n(20),j=n.n(h),u=n(65),b=n(69),p=n(70);var m=function(e){var t=e.name,n=e.website,i=e.github,r=e.emoji,c=e.info,s=e.phone,l=e.laptop,d=e.tags,h="https://unavatar.now.sh/github/".concat(i),j="https://github.com/".concat(i);return Object(a.jsxs)(u.a,{style:{padding:"0.5rem",textAlign:"center",marginTop:"0.5rem",maxWidth:"100%"},children:[Object(a.jsxs)(b.a,{className:"header__container",style:{display:"flex",alignItems:"flex-start",justifyContent:"left"},children:[Object(a.jsx)("div",{className:"header__image__container",style:{padding:10},children:Object(a.jsx)("img",{src:h,className:"header__image",alt:"",style:{width:60,borderRadius:"100%",background:"linear-gradient(145deg, #070707, #20253f) !important",boxShadow:"3px 3px 7px #adb1c85b, -5px -5px 10px #8d8f9b36 !important",alignItems:"flex-start",display:"flex"}})}),Object(a.jsxs)("div",{className:"header__name__container",style:{marginTop:10},children:[Object(a.jsxs)(o.a,{variant:"h6",children:[t," ",r]}),Object(a.jsx)("a",{href:n,style:{textDecoration:"none",color:"cornflowerblue"},children:Object(a.jsx)(o.a,{variant:"body1",children:n})})]})]}),Object(a.jsx)(b.a,{className:"body__container",children:Object(a.jsxs)("div",{className:"body__info__container",children:[Object(a.jsx)(o.a,{variant:"subtitle1",style:{marginBottom:10},children:c}),d.map((function(e){return Object(a.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:3},children:e})}))]})}),Object(a.jsx)(u.a,{style:{background:"#3d3d3d"},children:Object(a.jsxs)(b.a,{className:"footer__container",style:{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:5,marginTop:10},children:[Object(a.jsx)("div",{className:"footer__laptop__container",children:function(e){switch(e){case"mac":return Object(a.jsx)("img",{src:"https://img.icons8.com/bubbles/50/000000/mac-logo.png",alt:""});case"linux":return Object(a.jsx)("img",{src:"https://img.icons8.com/color/48/000000/linux.png",alt:""});case"window":return Object(a.jsx)("img",{src:"https://img.icons8.com/doodle/48/000000/windows8.png",alt:""});default:return null}}(l)}),Object(a.jsx)("div",{className:"footer__phone__container",children:function(e){switch(e){case"iphone":return Object(a.jsx)("img",{src:"https://img.icons8.com/officel/48/000000/iphone.png",alt:""});case"android":return Object(a.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/android-os.png",alt:""});default:return null}}(s)}),Object(a.jsx)("div",{className:"footer__github__container",style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(a.jsx)(o.a,{children:Object(a.jsxs)("a",{href:j,style:{textDecoration:"none",color:"white"},children:["@",i]})})})]})})]})};var g=function(){return Object(a.jsx)(d.a,{container:!0,spacing:2,children:j.a.map((function(e,t){return Object(a.jsx)(d.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(m,{name:e.name,website:e.website,github:e.github,emoji:e.emoji,info:e.info,phone:e.phone,laptop:e.laptop,tags:e.tags},t)})}))})},x=n(22),f=n(30);function O(e,t){return e[t]=e[t]?e[t]+1:1,e}var y=function(){var e,t=j.a.reduce((e="tags",function(t,n){return[].concat(Object(f.a)(n[e]),Object(f.a)(t))}),[]).reduce(O,{}),n=Object.entries(t).sort((function(e,t){var n=Object(x.a)(e,2)[1];return Object(x.a)(t,2)[1]-n})).filter((function(e){return Object(x.a)(e,2)[1]>=1})).map((function(e){var t=Object(x.a)(e,2);return{name:t[0],count:t[1]}}));return[{name:"all",count:j.a.length}].concat(Object(f.a)(n))},v=function(){var e=y().map((function(e){return"".concat(e.name," - ").concat(e.count)}));return Object(a.jsx)("div",{style:{marginTop:10,marginBottom:5},children:e.map((function(e){return Object(a.jsx)(p.a,{size:"small",variant:"contained",color:"primary",style:{margin:5},children:e})}))})};var _=function(){return Object(a.jsxs)("div",{style:{margin:40,display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(a.jsx)("div",{className:"footer__container1",children:Object(a.jsxs)(o.a,{variant:"h4",children:["Add yourself on\xa0",Object(a.jsx)("a",{href:"https://github.com/halchester/Coders-Hub",style:{textDecoration:"none",color:"cornflowerblue"},children:"Github"})]})}),Object(a.jsx)("div",{className:"footer__container2",children:Object(a.jsxs)(o.a,{variant:"h5",style:{},children:["Inspired by\xa0",Object(a.jsx)("a",{href:"https://uses.tech/",style:{textDecoration:"none",color:"cornflowerblue"},children:"Awesome uses"})]})})]})};var w=function(){return Object(a.jsxs)("div",{className:"App",style:{background:"rgb(245, 245, 245)"},children:[Object(a.jsx)(l,{}),Object(a.jsx)(v,{}),Object(a.jsx)(g,{}),Object(a.jsx)(_,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))},N=n(36),D=Object(N.a)({palette:{primary:{main:"#f28b04"},secondary:{main:"#595959"}},typography:{fontFamily:["Poppins"]}}),T=n(67);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(T.a,{theme:D,children:Object(a.jsx)(w,{className:"main"})})}),document.getElementById("root")),k()}},[[51,1,2]]]);
//# sourceMappingURL=main.e7a17daa.chunk.js.map