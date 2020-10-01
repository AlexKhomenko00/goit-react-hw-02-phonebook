(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(e,t,a){e.exports={"form-bg":"#f8f4e5","form-shadow":"#ffa580",contactUs:"ContactForm_contactUs__1ha5B",ContactFormInput:"ContactForm_ContactFormInput__3Gp6Z"}},24:function(e,t,a){e.exports={title:"Section_title__2S6oE",section:"Section_section__Ap5Zy"}},25:function(e,t,a){e.exports={contacts:"ContactList_contacts__1Ny0J",contact:"ContactList_contact__3ZIyH"}},32:function(e,t,a){e.exports={appear:"fade_appear__Z2Q96",appearActive:"fade_appearActive__3CtpB"}},33:function(e,t,a){e.exports={appear:"fade_appear__2vzB0",appearActive:"fade_appearActive__2LlWC",enter:"fade_enter__2dBpZ",enterActive:"fade_enterActive__1bDem",exit:"fade_exit__1RKKh",exitActive:"fade_exitActive__1mH3q"}},34:function(e,t,a){e.exports={filterFormInput:"Filter_filterFormInput__3OudV"}},35:function(e,t,a){e.exports={appear:"fadeFilter_appear__kqH8F",appearActive:"fadeFilter_appearActive__2jfsG",enter:"fadeFilter_enter__217mK",enterActive:"fadeFilter_enterActive__3x2-P",exit:"fadeFilter_exit__29fK5",exitActive:"fadeFilter_exitActive__2p-RG"}},38:function(e,t,a){e.exports=a(55)},48:function(e,t,a){},49:function(e,t,a){e.exports={"form-bg":"#f8f4e5","form-shadow":"#ffa580","form-primary-highlight":"#95a4ff","form-secondary-highlight":"#ffc8ff","font-size":"16px","font-color":"#2A293E"}},50:function(e,t,a){e.exports={"form-bg":"#f8f4e5","form-shadow":"#ffa580","form-primary-highlight":"#95a4ff","form-secondary-highlight":"#ffc8ff","font-size":"16px","font-color":"#2A293E"}},55:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),c=a(5),i=a.n(c),l=a(7),u=(a(48),a(49),a(50),a(11)),s=a(36),m=a(4),p=a(8),f=a(57),d="phonebook/add",h="phonebook/remove",b="phonebook/changeFilter",_="phonebook/updateFromLS",v=Object(p.b)(d,(function(e,t){return{payload:{contact:{id:Object(f.a)(),name:e,number:t}}}})),g=Object(p.b)(_),C={addContact:v,removeContact:Object(p.b)(h),changeFilter:Object(p.b)(b),updateFromLocaleStorage:g},E=a(16),F=(a(54),function(e){return E.NotificationManager.error('Contact "'.concat(e,'" already exists!'),"Error!",3e3)}),O=Object(p.c)([],(n={},Object(u.a)(n,C.addContact,(function(e,t){var a=t.payload;return e.find((function(e){return e.name===a.contact.name}))?(F(a.contact.name),e):[].concat(Object(s.a)(e),[a.contact])})),Object(u.a)(n,C.removeContact,(function(e,t){var a=t.payload;return e.filter((function(e){return e.id!==a}))})),Object(u.a)(n,C.updateFromLocaleStorage,(function(e,t){return t.payload})),n)),y=Object(p.c)("",Object(u.a)({},C.changeFilter,(function(e,t){return t.payload}))),j=Object(m.c)({contacts:O,filter:y}),x=Object(p.a)({reducer:{phonebook:j}}),A=a(17),N=a(18),S=a(20),k=a(19),w=a(30),I=a(24),L=a.n(I),B=a(32),U=a.n(B),D=function(e){var t=e.title,a=e.children;return r.a.createElement("section",{className:L.a.section},t&&r.a.createElement(w.a,{in:!0,appear:!0,classNames:U.a,timeout:500},r.a.createElement("h2",{className:L.a.title},t)),a)};D.defaultProps={title:""};var J=D,Z=a(13),q=a.n(Z),K={name:"",number:""},P=function(e){Object(S.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state=K,e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(u.a)({},n,o))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.name,o=a.number;e.props.onAddContact(n,o),e.resetValue()},e.resetValue=function(){e.setState(K)},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return r.a.createElement("form",{className:q.a.contactUs,onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",name:"name",value:t,className:q.a.ContactFormInput,required:!0,onChange:this.handleChange})),r.a.createElement("label",null,"Number",r.a.createElement("input",{type:"tel",pattern:"(\\+?\\d[- .]*){7,13}",name:"number",required:!0,className:q.a.ContactFormInput,value:a,onChange:this.handleChange})),r.a.createElement("button",{className:q.a.ContactFormButton,type:"submit"},"Add contact"))}}]),a}(o.Component),R={onAddContact:C.addContact},z=Object(l.b)(null,R)(P),G=a(15),H=a(25),V=a.n(H),M=a(33),Q=a.n(M),W={onRemoveContact:C.removeContact},T=Object(l.b)((function(e){var t=e.phonebook;return{contacts:t.contacts.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())}))}}),W)((function(e){var t=e.contacts,a=e.onRemoveContact;return r.a.createElement(G.a,{component:"ul",className:V.a.contacts},t.map((function(e){var t=e.id,n=e.name,o=e.number;return r.a.createElement(w.a,{key:t,classNames:Q.a,timeout:250,appear:!0},r.a.createElement("li",{className:V.a.contact},r.a.createElement("p",null,r.a.createElement("span",null," ",n,":")," ",r.a.createElement("span",null,o)),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return a(t)}},"Delete"))))})))})),X=a(34),Y=a.n(X),$=a(35),ee=a.n($),te=function(e){var t=e.value,a=e.onChangeFilter;return r.a.createElement(w.a,{in:!0,timeout:300,classNames:ee.a,unmountOnExit:!0},r.a.createElement("input",{className:Y.a.filterFormInput,type:"text",placeholder:"Find contacts by name...",value:t,onChange:function(e){var t=e.target;return a(t.value)}}))};te.defaultProps={value:""};var ae={onChangeFilter:C.changeFilter},ne=Object(l.b)((function(e){return{value:e.phonebook.filter}}),ae)(te),oe=function(e){Object(S.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(A.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isShowAlert:!1},e}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.props.onUpdateFromLS(JSON.parse(e))}},{key:"componentDidUpdate",value:function(e){e.contacts!==this.props.contacts&&localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var e=this.props.contacts.length>1,t=this.props.contacts.length>0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{title:"Phonebook"},r.a.createElement(z,null)),r.a.createElement(J,{title:"Contacts"},e&&r.a.createElement(ne,null),t&&r.a.createElement(T,null)),r.a.createElement(E.NotificationContainer,null))}}]),a}(o.Component),re={onUpdateFromLS:C.updateFromLocaleStorage},ce=Object(l.b)((function(e){return{contacts:e.phonebook.contacts}}),re)(oe);i.a.render(r.a.createElement(l.a,{store:x},r.a.createElement(ce,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f00c579c.chunk.js.map