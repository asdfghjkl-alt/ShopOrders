(this["webpackJsonpstore-recording"]=this["webpackJsonpstore-recording"]||[]).push([[4],{83:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),c=a.n(n);function r(e){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"text-title col-10 mx-auto my-2 text-center"},c.a.createElement("h1",{className:"text-capitalize font-weight-bold"},e.name," ",c.a.createElement("strong",{className:"text-blue"},e.title))))}},84:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(85),a(6)),l=a(21),s=a(18);t.a=function(e){var t=e.product,a=t.title,i=t.img,o=t.price,m=t._id,u=t.stock,d=Object(n.useContext)(l.a),f=Object(n.useContext)(s.a),p="http://localhost:5000/products/"+i;return c.a.createElement("div",{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container p-5"},c.a.createElement(r.b,{to:"/details/"+m.toString()},c.a.createElement("img",{src:p,alt:"product",className:"card-img-top",style:{width:"9rem",height:"9rem"}})),f.isLoggedIn?c.a.createElement("button",{onClick:function(){d.addToCart(e.product)},className:"cart-btn",style:{borderRadius:"50%",width:"15%",height:"15%"},disabled:u<=0},"+"):c.a.createElement(r.b,{to:"/signup"},c.a.createElement("button",{className:"cart-btn",style:{borderRadius:"50%",width:"15%",height:"15%"}},"+"))),c.a.createElement("div",{className:"card-footer d-flex justify-content-between"},c.a.createElement("p",{className:"align-self-center mb-0"},a),c.a.createElement("h5",{className:"text-blue font-italic mb-0"},c.a.createElement("span",{className:"mr-1"},"$"),o))))}},85:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(84),l=a(83),s=a(21);t.default=function(e){var t=String(e.value),a=Object(n.useContext)(s.a).products.filter((function(e){return e.page===t}));return a=a.filter((function(e){return!0===e.onShelf})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"py-5"},c.a.createElement("div",{className:"container"},c.a.createElement(l.a,{name:"our",title:t}),c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement(r.a,{key:e._id,product:e})}))))))}}}]);
//# sourceMappingURL=4.a38d9167.chunk.js.map