(this.webpackJsonptotoapp=this.webpackJsonptotoapp||[]).push([[0],{31:function(e,t,n){e.exports={deleteButton:"item_deleteButton__2T8wB",contentText:"item_contentText__2X_o8",checkedText:"item_checkedText__1bpKs"}},87:function(e,t,n){"use strict";n.r(t);var o,c,a=n(0),i=n.n(a),r=n(8),d=n.n(r),l=n(33),u=n(59),s=n(27),j=n(60),b=n(124),p=n(126),x=n(125),h=n(128),O=n(6),v=[{value:"\u2605\u2606\u2606",label:"\u2605\u2606\u2606"},{value:"\u2605\u2605\u2606",label:"\u2605\u2605\u2606"},{value:"\u2605\u2605\u2605",label:"\u2605\u2605\u2605"}],f=function(e){var t=e.addTodo,n=e.inputText,o=e.setInputText,c=(Object(j.a)(e,["addTodo","inputText","setInputText"]),i.a.useState("")),a=Object(s.a)(c,2),r=a[0],d=a[1];return console.log(r),Object(O.jsxs)("div",{children:[Object(O.jsx)(p.a,{type:"text",label:"\u3084\u308b\u3053\u3068",variant:"outlined",value:n,onChange:function(e){return o(e.target.value)}}),Object(O.jsxs)(x.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",variant:"outlined",value:r,onChange:function(e){return d(e.target.value)},label:"\u512a\u5148\u5ea6",defaultValue:v[1].value,children:[Object(O.jsx)(h.a,{value:"",children:Object(O.jsx)("em",{children:"None"})}),v.map((function(e,t){return Object(O.jsx)(h.a,{value:e.value,children:e.label},t)}))]}),Object(O.jsx)(b.a,{variant:"outlined",color:"primary",onClick:function(){return t(n,r)},children:"\u8ffd\u52a0"})]})},m=n(31),g=n.n(m),T=function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("input",{className:g.a.checkbox,type:"checkbox",checked:e.todo.done,onChange:function(){return e.toggleChecked(e.todo.id)}}),Object(O.jsxs)("span",{className:"".concat(g.a.contentText," ").concat(e.todo.done?g.a.checkedText:""),children:["\u512a\u5148\u5ea6\uff1a",e.todo.priority,"\u3000",e.todo.content]}),Object(O.jsx)("button",{className:g.a.deleteButton,onClick:e.removeTodo,children:"\u524a\u9664"})]})},k=n(41),y=function(e){return Object(O.jsx)(C,{children:e.todos.map((function(t,n){return Object(O.jsx)(T,{todo:t,removeTodo:function(){return e.removeTodo(t.id)},toggleChecked:e.toggleChecked},n)}))})},C=k.a.ul(o||(o=Object(l.a)(["\n  border: 2px solid orange;\n  list-style: none;\n  padding: 12px;\n"]))),_=n(58),B=n.n(_),I=function(){var e=Object(a.useState)([{id:"01",content:"\u30d1\u30b9\u30bf\u3092\u4f5c\u308b",done:!1,priority:"\u2605\u2605\u2605"},{id:"02",content:"PR\u306e\u4fee\u6b63",done:!0,priority:"\u2605\u2605\u2606"},{id:"03",content:"\u30e2\u30f3\u30cf\u30f3\u3084\u308b",done:!1,priority:"\u2605\u2605\u2605"},{id:"04",content:"\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3084\u308b",done:!1,priority:"\u2605\u2606\u2606"}]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=i.a.useState(""),r=Object(s.a)(c,2),d=r[0],l=r[1],j=i.a.useState(!1),p=Object(s.a)(j,2),x=p[0],h=p[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{children:"ToDo App"}),Object(O.jsx)(b.a,{onClick:function(){return h(!x)},children:"\u65b0\u898f\u4f5c\u6210"}),x&&Object(O.jsxs)(N,{style:{border:"2px solid #333"},children:["\u541b\u306f\u30e2\u30c0\u30fc\u30eb\u3060",Object(O.jsx)(f,{addTodo:function(e,t){e?o([].concat(Object(u.a)(n),[{id:B.a.generate(),content:e,done:!1,priority:t}])):alert("\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),l("")},inputText:d,setInputText:l,hoge:"hogehoge"})]}),Object(O.jsx)(y,{todos:n,removeTodo:function(e){var t=n.filter((function(t){return e!==t.id}));o(t)},toggleChecked:function(e){var t=n.map((function(t){return e===t.id?(t.done=!t.done,t):t}));o(t)}})]})},N=k.a.div(c||(c=Object(l.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));d.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.32f515af.chunk.js.map