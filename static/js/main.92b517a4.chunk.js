(this["webpackJsonptask-tracker2"]=this["webpackJsonptask-tracker2"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n.n(c),s=n(9),o=n.n(s),i=n(11),u=n(6),l=n(2),j=n.n(l),d=n(4),b=n(3);n(18),n(19);var f=function(t){var e=t.text,n=t.onClick;return Object(r.jsx)("button",{className:"btn btn-primary",onClick:n,children:e})};var h=function(t){var e=t.title,n=t.toggle;return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("h1",{className:"title",children:e}),Object(r.jsx)(f,{text:"Add",onClick:n})]})},p=n(10);var x=function(t){var e=t.task,n=t.onDoubleClick,c=t.remove;return Object(r.jsxs)("div",{className:"task ".concat(e.reminder?"reminder":""),onDoubleClick:function(){return n(e.id)},children:[Object(r.jsxs)("h5",{children:[e.text,Object(r.jsx)(p.a,{style:{color:"red",float:"right"},onClick:function(){return c(e.id)}})]}),Object(r.jsx)("p",{children:e.day})]})};var O=function(t){var e=t.tasks,n=t.toggle,c=t.remove;return Object(r.jsx)(r.Fragment,{children:e.map((function(t,e){return Object(r.jsx)(x,{task:t,onDoubleClick:n,remove:c},e)}))})};var m=function(t){var e=t.addTask,n=Object(c.useState)(""),a=Object(b.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(""),u=Object(b.a)(i,2),l=u[0],j=u[1],d=Object(c.useState)(!1),f=Object(b.a)(d,2),h=f[0],p=f[1];return Object(r.jsxs)("form",{className:"add-task",onSubmit:function(t){t.preventDefault(),l?(e({text:l,day:s,reminder:h}),j(""),o(""),p(!1)):alert("Enter Text")},children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Text"}),Object(r.jsx)("input",{className:"form-control",value:l,type:"text",placeholder:"Add Text",onChange:function(t){j(t.target.value)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{children:"Date Time"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:s,placeholder:"Add Date",onChange:function(t){o(t.target.value)}})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{type:"checkbox",className:"checkbox",checked:h,onChange:function(t){return p(t.currentTarget.checked)}}),Object(r.jsx)("label",{children:"reminder"})]}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primary form-control",value:"Add Task"})]})};var v=function(){var t=Object(c.useState)(!1),e=Object(b.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),o=Object(b.a)(s,2),l=o[0],f=o[1];Object(c.useEffect)((function(){(function(){var t=Object(d.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:e=t.sent,f(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var p=function(){var t=Object(d.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(d.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks/".concat(e),{method:"DELETE"});case 2:f(l.filter((function(t){return t.id!==e})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks/".concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,r,c,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return n=t.sent,r=Object(u.a)(Object(u.a)({},n),{},{reminder:!n.reminder}),t.next=6,fetch("http://localhost:5000/tasks/".concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=t.sent,t.next=9,c.json();case 9:a=t.sent,f(l.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{reminder:a.reminder}):t})));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(d.a)(j.a.mark((function t(e){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,f([].concat(Object(i.a)(l),[r]));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)(h,{title:"Task Tracker",toggle:function(){return a(!n)}}),n&&Object(r.jsx)(m,{addTask:g}),l.length<1?Object(r.jsx)("p",{children:"No Tasks to Show"}):Object(r.jsx)(O,{tasks:l,toggle:k,remove:x})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),k()}},[[20,1,2]]]);
//# sourceMappingURL=main.92b517a4.chunk.js.map