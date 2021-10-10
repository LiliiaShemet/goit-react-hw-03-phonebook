(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"FilterContact_label__3hZz5",filterInput:"FilterContact_filterInput__2QD3z"}},13:function(t,e,n){t.exports={container:"Container_container__1TclA"}},2:function(t,e,n){t.exports={filterList:"ContactList_filterList__2_510",filterListItem:"ContactList_filterListItem__3n6QA",text:"ContactList_text__O8IG4",span:"ContactList_span__2VQwu",btn:"ContactList_btn__2CGko"}},20:function(t,e,n){},3:function(t,e,n){t.exports={form:"ContactForm_form__plzVI",form__input:"ContactForm_form__input__2k1g7",btn:"ContactForm_btn__182xQ"}},31:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(11),o=n.n(c),s=(n(20),n(15)),i=n(5),l=n(6),u=n(8),m=n(7),b=n(12),f=n(3),h=n.n(f),j=n(0),d=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(b.a)({},a,r))},t.onSubmitForm=function(e){e.preventDefault(),console.log(t.state),t.props.handleSubmitForm(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:h.a.form,onSubmit:this.onSubmitForm,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{className:h.a.form__input,onChange:this.handleChange,value:e,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{className:h.a.form__input,onChange:this.handleChange,value:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:h.a.btn,children:"add contact"})]})}}]),n}(a.Component),p=d,_=n(2),O=n.n(_),v=function(t){var e=t.onDeleteContact,n=t.list;return console.log(n),0===n.length?null:Object(j.jsx)("ul",{className:O.a.filterList,children:n.map((function(t){var n=t.id,a=t.number,r=t.name;return Object(j.jsxs)("li",{className:O.a.filterListItem,children:[Object(j.jsxs)("p",{className:O.a.text,children:[r,": ",Object(j.jsx)("span",{className:O.a.span,children:a})]}),Object(j.jsx)("button",{className:O.a.btn,onClick:function(){return e(n)},type:"button",children:"delete"})]},n)}))})},C=n(10),x=n.n(C),g=function(t){var e=t.value,n=t.filter;return Object(j.jsxs)("label",{className:x.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:x.a.filterInput,onChange:e,value:n})]})},S=function(t){var e=t.title,n=t.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:e}),n]})},N=n(13),y=n.n(N),k=function(t){var e=t.children;return Object(j.jsx)("div",{className:y.a.container,children:e})},F=n(14),L=n.n(F),I=(n(30),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={filter:"",contacts:[]},t.takeCurrentValue=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getFilterContact=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.handleSubmitForm=function(e){var n=e.name,a=e.number,r={id:L.a.generate(),name:n,number:a};t.state.contacts.find((function(t){return t.name===r.name}))?alert("".concat(r.name," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[r])}}))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contact"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;this.state.contacts!==e.contacts&&localStorage.setItem("contact",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilterContact();return Object(j.jsxs)(k,{className:"App",children:[Object(j.jsx)(S,{title:"Phonebook",children:Object(j.jsx)(p,{handleSubmitForm:this.handleSubmitForm})}),Object(j.jsxs)(S,{title:"Contacts",children:[Object(j.jsx)(g,{value:this.takeCurrentValue,filter:t}),Object(j.jsx)(v,{onDeleteContact:this.onDeleteContact,list:e})]})]})}}]),n}(a.Component)),A=I;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.fd9e8e65.chunk.js.map