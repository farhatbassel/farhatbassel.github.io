(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{21:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),i=s(11),r=s.n(i),n=(s(21),s(44)),l=s(45),j=s(0);function o(){return Object(j.jsx)("div",{className:"topbar",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"BF"}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)("a",{href:"#work",children:" Latest Projects"}),Object(j.jsx)("a",{href:"#portfolio",children:" About Me"}),Object(j.jsx)("a",{href:"#contact",children:" Contact Me"})]})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsx)("a",{href:"https://github.com/farhatbassel",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(n.a,{className:"github"})})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/bassel-farhat-835083159/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(l.a,{className:"linkedin"})})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsx)("a",{href:"https://www.kaggle.com/farhatbassel",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("span",{id:"kaggle",children:"k"})})})]})]})})}s(27);var d=s(46),h=s(13),b=s(8),u=s(14);function x(){var e=Object(c.useRef)();b.a.registerPlugin(u.a);var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){b.a.fromTo(".wrapperText",{y:"-50%",opacity:0},{opacity:1,y:"0%",duration:1.5})}),[]),Object(c.useEffect)((function(){Object(h.a)(e.current,{showCursor:!0,backDelay:1200,backSpeed:60,startDelay:1800,strings:["Astrophysicist","Programmer","Data Analyst"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"wrapperText",ref:t,children:[Object(j.jsx)("h2",{children:"Hey There, I'm"}),Object(j.jsx)("h1",{children:"Bassel Farhat"}),Object(j.jsx)("h3",{children:Object(j.jsx)("span",{ref:e})})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("a",{href:"#work",children:Object(j.jsx)(d.a,{className:"arrow"})})})]})}s(28);var m=s.p+"static/media/Lebenslauf.304e87d7.pdf";function O(){return Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"About Me"})}),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h2",{children:"My name is Bassel Farhat,"}),Object(j.jsx)("h2",{children:"I am an astrophysicist who loves to code."}),Object(j.jsx)("h2",{children:"Find my resume here"}),Object(j.jsx)("a",{href:m,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("button",{children:"Resume"})})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Would love to hear from you."}),Object(j.jsx)("h2",{children:"Whether it\u2019s a project, job opportunity or just to chat. "}),Object(j.jsx)("h2",{children:"Feel free to contact me."}),Object(j.jsx)("a",{href:"#contact",children:Object(j.jsx)(d.a,{className:"arrow"})})]})})]})]})}var f=s(3),p=(s(29),s.p+"static/media/Density_Perturbations_From_Magnetic_Fields.0d46f14f.pdf"),g=s(7),v=s.p+"static/media/thesis.43d85a15.png",N=s.p+"static/media/PointPlot.f6e16b7e.png",k=[{id:1,image:v,title:"Master's Thesis",text:"Studied the evolution of PMFs using 3D MHD equations. Currently working on the publication of the data",bothButtons:!0,githubLink:"https://github.com/farhatbassel/thesisPlots",firstButton:"Full Thesis",kaggle:!1,cssReference:"thesis"},{id:2,image:s.p+"static/media/SocialMedia.59ed05b9.jpg",title:"Social Media Website",text:"Created a Social Media account using MERN technologies",bothButtons:!1,githubLink:"https://github.com/farhatbassel/social-media-app",firstButton:null,kaggle:!1,cssReference:"social"},{id:3,image:N,title:"Data Analysis",text:"Studied multiple data sets using different visualization technics and machine learning algorithms",bothButtons:!1,githubLink:"https://www.kaggle.com/farhatbassel",firstButton:null,kaggle:!0,cssReference:"titanic"}];function w(){var e=Object(c.useState)(k),t=Object(f.a)(e,2),s=t[0],a=(t[1],Object(c.useState)(0)),i=Object(f.a)(a,2),r=i[0],l=i[1];return Object(c.useEffect)((function(){var e=s.length-1;r<0&&l(e),r>e&&l(0)}),[r,s]),Object(j.jsxs)("div",{className:"work",id:"work",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"Work"})}),Object(j.jsxs)("section",{children:[k.map((function(e,t){var s=e.image,c=e.title,a=e.text,i=e.bothButtons,l=e.githubLink,o=e.firstButton,d=e.kaggle,h=e.cssReference,b="nextSlide";return t===r&&(b="activeSlide"),(t===r-1||0===r&&t===e.length-1)&&(b="lastSlide"),Object(j.jsxs)("article",{className:"wrapper ".concat(b),children:[Object(j.jsx)("section",{className:"left",children:Object(j.jsx)("img",{src:s,alt:"".concat(c),className:"".concat(h)})}),Object(j.jsxs)("section",{className:"right",children:[Object(j.jsxs)("div",{className:"text",children:[Object(j.jsx)("h1",{children:c}),Object(j.jsx)("h2",{children:a})]}),Object(j.jsxs)("div",{className:"fullwrap",children:[i&&Object(j.jsx)("div",{className:"buttonwrap",children:Object(j.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("button",{id:"first-btn",children:o})})}),Object(j.jsx)("div",{className:"".concat(i?"buttonwrap":"second-btn"),children:Object(j.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("button",{children:d?Object(j.jsx)("span",{className:"kaggleButton",children:"k"}):Object(j.jsx)(n.a,{className:"github"})})})})]})]})]})})),Object(j.jsx)("button",{className:"prev",onClick:function(){return l(r-1)},children:Object(j.jsx)(g.a,{})}),Object(j.jsx)("button",{className:"next",onClick:function(){return l(r+1)},children:Object(j.jsx)(g.b,{})})]})]})}s(30);var y=s(15);function S(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),s=t[0],a=t[1];return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("div",{className:"middle",children:Object(j.jsx)("div",{className:"title",children:Object(j.jsx)("h1",{children:"Contact"})})}),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(!0),y.a.sendForm("service_f1dbg4d","template_8mjlvlc",e.target,"user_BrcwSNkzocUgrpVSwFjvB").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},children:[Object(j.jsx)("h2",{children:"To contact me, submit the form below"}),Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Name",required:!0}),Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Email",required:!0}),Object(j.jsx)("textarea",{placeholder:"Message",name:"message",required:!0}),Object(j.jsx)("button",{type:"submit",name:"submit",value:"Send Message",children:"Submit"}),s&&Object(j.jsx)("span",{children:"Thank you, I'll get back to you as soon as possible :)"})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Email:"}),Object(j.jsx)("h3",{children:"farhatbassel@tutanota.com"})]})})]})]})}s(31);var B=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(o,{}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(x,{}),Object(j.jsx)(w,{}),Object(j.jsx)(O,{}),Object(j.jsx)(S,{})]})]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1d1562d2.chunk.js.map