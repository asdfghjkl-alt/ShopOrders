(this["webpackJsonpstore-recording"]=this["webpackJsonpstore-recording"]||[]).push([[3],{83:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0),n=a.n(c);function r(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"text-title col-10 mx-auto my-2 text-center"},n.a.createElement("h1",{className:"text-capitalize font-weight-bold"},e.name," ",n.a.createElement("strong",{className:"text-blue"},e.title))))}},84:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=(a(85),a(6)),l=a(21),s=a(18);t.a=function(e){var t=e.product,a=t.title,o=t.img,i=t.price,m=t._id,u=t.stock,d=Object(c.useContext)(l.a),f=Object(c.useContext)(s.a),p="http://localhost:5000/products/"+o;return n.a.createElement("div",{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container p-5"},n.a.createElement(r.b,{to:"/details/"+m.toString()},n.a.createElement("img",{src:p,alt:"product",className:"card-img-top",style:{width:"9rem",height:"9rem"}})),f.isLoggedIn?n.a.createElement("button",{onClick:function(){d.addToCart(e.product)},className:"cart-btn",style:{borderRadius:"50%",width:"15%",height:"15%"},disabled:u<=0},"+"):n.a.createElement(r.b,{to:"/signup"},n.a.createElement("button",{className:"cart-btn",style:{borderRadius:"50%",width:"15%",height:"15%"}},"+"))),n.a.createElement("div",{className:"card-footer d-flex justify-content-between"},n.a.createElement("p",{className:"align-self-center mb-0"},a),n.a.createElement("h5",{className:"text-blue font-italic mb-0"},n.a.createElement("span",{className:"mr-1"},"$"),i))))}},85:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var c=a(12),n=a(0),r=a.n(n),l=a(84),s=a(83),o=a(21);t.default=function(){var e=Object(n.useContext)(o.a).products;e=e.filter((function(e){return!0===e.onShelf}));var t=Object(n.useState)(e),a=Object(c.a)(t,2),i=a[0],m=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("input",{type:"text",className:"form-control",onChange:function(t){var a=[];""!==t.target.value?(m(e),a=e.filter((function(e){var a=e.title.toLowerCase(),c=t.target.value.toLowerCase();return a.includes(c)}))):a=e,m(a)},placeholder:"Search..."}),r.a.createElement(s.a,{name:"our",title:"Products"}),r.a.createElement("div",{className:"row"},i.map((function(e){return r.a.createElement(l.a,{key:e._id,product:e})}))))))}}}]);
//# sourceMappingURL=3.77880777.chunk.js.map