(this.webpackJsonpgator=this.webpackJsonpgator||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(15),s=a.n(i),l=(a(21),a(10)),r=a(11),o=a(7),h=a(13),u=a(12),j=a(16),d=a(33),b=a(34),p=a(30),O=a(31),v=a(32),g=(a(22),a(23),a.p+"static/media/gator.1c42849a.png"),x=a(4);function f(e,t,a){var n=t,c=a;if(!e)return console.log("undefined text input: ",e),"Error";var i="https://translation.googleapis.com/language/translate/v2?key=".concat("AIzaSyAe5DVH7T3fzwBiWSGedgT5nmAoL5DiV-w");return i+="&q="+encodeURI(e),i+="&source=".concat(n),i+="&target=".concat(c)}var m=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:"Geben Sie hier Deutsch ein!"},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=f(this.state.value,"de","en");fetch(a,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){t.setState({value:e.data.translations[0].translatedText})})).catch((function(e){console.log("There was an error with the translation request: ",e)})),e.preventDefault()}},{key:"render",value:function(){return Object(x.jsxs)(j.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(d.a.Control,{as:"textarea",rows:7,value:this.state.value,onChange:this.handleChange})}),Object(x.jsx)(b.a,{variant:"info",size:"lg",onClick:this.handleSubmit,block:!0,children:"zu Englisch"})]})}}]),a}(c.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:"Type English here!"},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=f(this.state.value,"en","de");fetch(a,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){t.setState({value:e.data.translations[0].translatedText})})).catch((function(e){console.log("There was an error with the translation request: ",e)})),e.preventDefault()}},{key:"render",value:function(){return Object(x.jsxs)(j.a,{children:[Object(x.jsx)(d.a,{children:Object(x.jsx)(d.a.Control,{as:"textarea",rows:7,value:this.state.value,onChange:this.handleChange})}),Object(x.jsx)(b.a,{variant:"info",size:"lg",onClick:this.handleSubmit,block:!0,children:"To German"})]})}}]),a}(c.a.Component);var S=function(){return Object(x.jsxs)("h",{children:[Object(x.jsxs)(p.a,{fluid:!0,className:"App-header",children:[Object(x.jsx)(O.a,{children:Object(x.jsx)("label",{className:"App-header-title",children:"GatorCom"})}),Object(x.jsx)(O.a,{children:Object(x.jsx)("label",{className:"App-header-by",children:"By Alex Skladanek"})})]}),Object(x.jsx)(p.a,{fluid:!0,className:"App-map",children:Object(x.jsx)(v.a,{src:g,className:"App-component",fluid:!0})}),Object(x.jsxs)(p.a,{fluid:!0,className:"App",children:[Object(x.jsx)(j.a,{children:Object(x.jsx)(m,{})}),Object(x.jsx)(j.a,{children:Object(x.jsx)(C,{})})]}),Object(x.jsxs)(p.a,{fluid:!0,className:"App-button-bottom",children:[Object(x.jsx)(j.a,{md:2}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a,{variant:"outline-danger",size:"lg",children:":("}),Object(x.jsx)("label",{className:"App-invisible-accent",children:".  ."}),Object(x.jsx)(b.a,{variant:"outline-success",size:"lg",children:":)"})]}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a,{variant:"outline-danger",size:"lg",children:":("}),Object(x.jsx)("label",{className:"App-invisible-accent",children:".  ."}),Object(x.jsx)(b.a,{variant:"outline-success",size:"lg",children:":)"})]})]})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),k()}},[[28,1,2]]]);
//# sourceMappingURL=main.987c7cab.chunk.js.map