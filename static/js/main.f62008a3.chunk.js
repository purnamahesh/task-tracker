(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),s=c(7),i=c.n(s),o=c(9),l=c(5),j=c(2);c(15),c(16);var u=function(e){var t=e.text,c=e.onClick;return Object(n.jsx)("button",{className:"btn btn-primary",onClick:c,children:t})};var b=function(e){var t=e.title,c=e.toggle;return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{className:"title",children:t}),Object(n.jsx)(u,{text:"Add",onClick:c})]})},d=c(8);var O=function(e){var t=e.task,c=e.onDoubleClick,r=e.remove;return Object(n.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(n.jsxs)("h5",{children:[t.text,Object(n.jsx)(d.a,{style:{color:"red",float:"right"},onClick:function(){return r(t.id)}})]}),Object(n.jsx)("p",{children:t.day})]})};var m=function(e){var t=e.tasks,c=e.toggle,r=e.remove;return Object(n.jsx)(n.Fragment,{children:t.map((function(e,t){return Object(n.jsx)(O,{task:e,onDoubleClick:c,remove:r},t)}))})};var x=function(e){var t=e.addTask,c=Object(r.useState)(""),a=Object(j.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],d=Object(r.useState)(!1),O=Object(j.a)(d,2),m=O[0],x=O[1];return Object(n.jsxs)("form",{className:"add-task",onSubmit:function(e){e.preventDefault(),u?(t({text:u,day:s,reminder:m}),b(""),i(""),x(!1)):alert("Enter Text")},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Text"}),Object(n.jsx)("input",{className:"form-control",value:u,type:"text",placeholder:"Add Text",onChange:function(e){b(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Date Time"}),Object(n.jsx)("input",{type:"text",className:"form-control",value:s,placeholder:"Add Date",onChange:function(e){i(e.target.value)}})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"checkbox",className:"checkbox",checked:m,onChange:function(e){return x(e.currentTarget.checked)}}),Object(n.jsx)("label",{children:"reminder"})]}),Object(n.jsx)("input",{type:"submit",className:"btn btn-primary form-control",value:"Add Task"})]})};var h=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),u=i[0],d=i[1],O=Object(r.useState)(1),h=Object(j.a)(O,2),f=h[0],v=h[1];return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)(b,{title:"Task Tracker",toggle:function(){return a(!c)}}),c&&Object(n.jsx)(x,{addTask:function(e){d([].concat(Object(o.a)(u),[Object(l.a)({id:f},e)])),v(f+1)}}),u.length<1?Object(n.jsx)("p",{children:"No Tasks to Show"}):Object(n.jsx)(m,{tasks:u,toggle:function(e){d(u.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))},remove:function(e){d(u.filter((function(t){return t.id!==e})))}})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.f62008a3.chunk.js.map