(this.webpackJsonpgator=this.webpackJsonpgator||[]).push([[0],{139:function(e,t,a){},140:function(e,t,a){},441:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(19),c=a.n(s),l=(a(139),a(31)),h=a(32),r=a(20),o=a(35),u=a(34),j=a(135),d=a(447),b=a(448),g=a(444),O=a(445),v=a(446),p=(a(140),a(141),a.p+"static/media/gator.1c42849a.png"),f=(a(442),a(3));function x(e,t,a){var n=t,i=a;if(!e)return console.log("undefined text input: ",e),"Error";var s="https://translation.googleapis.com/language/translate/v2?key=".concat("AIzaSyAe5DVH7T3fzwBiWSGedgT5nmAoL5DiV-w");return s+="&q="+encodeURI(e),s+="&source=".concat(n),s+="&target=".concat(i)}var C=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:"Geben Sie hier Deutsch ein!"},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=x(this.state.value,"de","en");fetch(a,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){t.setState({value:e.data.translations[0].translatedText})})).catch((function(e){console.log("There was an error with the translation request: ",e)})),e.preventDefault()}},{key:"render",value:function(){return Object(f.jsxs)(j.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(d.a.Control,{as:"textarea",rows:7,value:this.state.value,onChange:this.handleChange})}),Object(f.jsx)(b.a,{variant:"info",size:"lg",onClick:this.handleSubmit,block:!0,children:"zu Englisch"})]})}}]),a}(i.a.Component),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:"Type English here!"},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this,a=x(this.state.value,"en","de");fetch(a,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){t.setState({value:e.data.translations[0].translatedText})})).catch((function(e){console.log("There was an error with the translation request: ",e)})),e.preventDefault()}},{key:"render",value:function(){return Object(f.jsxs)(j.a,{children:[Object(f.jsx)(d.a,{children:Object(f.jsx)(d.a.Control,{as:"textarea",rows:7,value:this.state.value,onChange:this.handleChange})}),Object(f.jsx)(b.a,{variant:"info",size:"lg",onClick:this.handleSubmit,block:!0,children:"To German"})]})}}]),a}(i.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isHighlighted:!0,variant:"outline-success"},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({isHighlighted:!this.state.isHighlighted}),this.state.isHighlighted?this.state.variant="success":this.state.variant="outline-success"}},{key:"render",value:function(){return Object(f.jsx)(b.a,{onClick:this.handleChange,variant:this.state.variant,size:"lg",children:":)"})}}]),a}(i.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isHighlighted:!0,variant:"outline-danger"},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({isHighlighted:!this.state.isHighlighted}),this.state.isHighlighted?this.state.variant="danger":this.state.variant="outline-danger"}},{key:"render",value:function(){return Object(f.jsx)(b.a,{onClick:this.handleChange,variant:this.state.variant,size:"lg",children:":("})}}]),a}(i.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isHighlighted:!0,variant:"outline-secondary"},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({isHighlighted:!this.state.isHighlighted}),this.state.isHighlighted?this.state.variant="secondary":this.state.variant="outline-secondary"}},{key:"render",value:function(){return Object(f.jsx)(b.a,{onClick:this.handleChange,variant:this.state.variant,size:"lg",children:"?"})}}]),a}(i.a.Component),A=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"btnClick",value:function(){window.open("https://ufl.qualtrics.com/jfe/form/SV_cvHPHdmjbks9YVg")}},{key:"render",value:function(){return Object(f.jsxs)("h",{children:[Object(f.jsxs)(g.a,{fluid:!0,className:"App-header",children:[Object(f.jsx)(O.a,{children:Object(f.jsx)("label",{className:"App-header-title",children:"GatorCom"})}),Object(f.jsx)(O.a,{children:Object(f.jsx)("label",{className:"App-header-by",children:"By Alex Skladanek"})})]}),Object(f.jsx)(g.a,{fluid:!0,className:"App-map",children:Object(f.jsx)(v.a,{src:p,className:"App-component",fluid:!0})}),Object(f.jsxs)(g.a,{fluid:!0,className:"App",children:[Object(f.jsx)(j.a,{children:Object(f.jsx)(C,{})}),Object(f.jsx)(j.a,{children:Object(f.jsx)(m,{})})]}),Object(f.jsxs)(g.a,{className:"App-button-bottom",children:[Object(f.jsx)(j.a,{md:1}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(y,{}),Object(f.jsx)("label",{className:"App-invisible-accent",children:".  ."}),Object(f.jsx)(S,{}),Object(f.jsx)("label",{className:"App-invisible-accent",children:".  ."}),Object(f.jsx)(k,{})]}),Object(f.jsx)(j.a,{children:Object(f.jsx)(b.a,{variant:"outline-primary",size:"lg",onClick:this.btnClick.bind(this),children:"End Translations"})}),Object(f.jsxs)(j.a,{children:[Object(f.jsx)(y,{}),Object(f.jsx)("label",{className:"App-invisible-accent",children:".  ."}),Object(f.jsx)(S,{}),Object(f.jsx)("label",{className:"App-invisible-accent",children:".  ."}),Object(f.jsx)(k,{})]})]})]})}}]),a}(i.a.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,449)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),H()}},[[441,1,2]]]);
//# sourceMappingURL=main.c54721ed.chunk.js.map