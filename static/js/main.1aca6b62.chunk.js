(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(17),a(18),a(4)),m=a(5),i=a(9),s=a(6),u=a(10),p=a(8),f=(a(21),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).onDrop=function(e){a.setState({files:e.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})})},a.state={files:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.files.map(function(e){return r.a.createElement("li",{key:e.name,className:"mb-2"},/^image/.test(e.type)?r.a.createElement("img",{src:e.preview,alt:e.name,className:"img-thumbnail"}):r.a.createElement("a",{href:e.preview},e.name))});return r.a.createElement("div",{className:"App container pt-3"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h3",null,"Leave a comment"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"comment",className:"sr-only"},"Your comment:"),r.a.createElement("textarea",{className:"form-control",id:"comment",rows:"5"})),r.a.createElement(p.a,{onDrop:this.onDrop},function(t){var a=t.getRootProps,n=t.getInputProps;return r.a.createElement("div",{className:"form-group"},r.a.createElement("div",a({className:"dropzone p-3 mb-2 bg-light"}),r.a.createElement("input",n()),r.a.createElement("div",{className:"text-center"},"Drag 'n' drop some files here, or click to select files")),e.length?r.a.createElement("div",null,r.a.createElement("h4",null,"Files: "),r.a.createElement("ul",null,e)):null)}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.1aca6b62.chunk.js.map