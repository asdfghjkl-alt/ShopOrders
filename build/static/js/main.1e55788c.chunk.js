(this["webpackJsonpstore-recording"]=this["webpackJsonpstore-recording"]||[]).push([[0],{18:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return p}));var n,r=a(4),c=a.n(r),o=a(13),s=a(12),u=a(0),l=a.n(u),i=a(8),m=a.n(i),p=l.a.createContext();function d(e){var t=Object(u.useState)(null),a=Object(s.a)(t,2),r=a[0],i=a[1],d=Object(u.useState)(),b=Object(s.a)(d,2),h=b[0],f=b[1],g=Object(u.useState)(""),k=Object(s.a)(g,2),E=k[0],v=k[1],x=Object(u.useState)(!1),O=Object(s.a)(x,2),j=O[0],y=O[1],w=Object(u.useCallback)(function(){var e=Object(o.a)(c.a.mark((function e(t,a,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(a),v(t),r=n||new Date((new Date).getTime()+36e5),f(r),!a){e.next=9;break}return e.next=7,m.a.get("https://ed-shop-backend.herokuapp.com/users",{headers:{Authorization:"Bearer "+a}});case 7:!0===e.sent.data.admin?(y(!0),localStorage.setItem("userData",JSON.stringify({admin:!0,userId:t,token:a,expiration:r.toISOString()}))):localStorage.setItem("userData",JSON.stringify({userId:t,token:a,expiration:r.toISOString()}));case 9:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),[]),S=Object(u.useCallback)((function(){i(null),f(null),v(null),localStorage.removeItem("userData"),y(!1)}),[]);return Object(u.useEffect)((function(){if(r&&h){var e=h.getTime()-(new Date).getTime();n=setTimeout(S,e)}else clearTimeout(n)}),[r,S,h]),Object(u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&w(e.userId,e.token,new Date(e.expiration))}),[w]),l.a.createElement(p.Provider,{value:{isLoggedIn:!!r,token:r,admin:j,userId:E,login:w,logout:S}},e.children)}p.Consumer},21:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return p}));var n=a(4),r=a.n(n),c=a(13),o=a(12),s=a(0),u=a.n(s),l=a(8),i=a.n(l),m=a(18),p=u.a.createContext();function d(e){var t=Object(s.useState)([]),a=Object(o.a)(t,2),n=a[0],l=a[1],d=Object(s.useState)([]),b=Object(o.a)(d,2),h=b[0],f=b[1],g=Object(s.useContext)(m.a),k=Object(s.useCallback)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("https://ed-shop-backend.herokuapp.com/products");case 3:if(t=e.sent,l(t.data),!g.token){e.next=12;break}return e.next=8,i.a.get("https://ed-shop-backend.herokuapp.com/orders",{headers:{Authorization:"Bearer "+g.token}});case 8:t=e.sent,f(t.data.cart),e.next=13;break;case 12:f([]);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),[g]),E=function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post(t,a);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:k();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,a){return e.apply(this,arguments)}}();function v(){return(v=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.token){e.next=11;break}return e.next=3,i.a.post("https://ed-shop-backend.herokuapp.com/orders/"+t._id,"",{headers:{Authorization:"Bearer "+g.token}});case 3:return a=e.sent,e.next=6,i.a.get("https://ed-shop-backend.herokuapp.com/orders",{headers:{Authorization:"Bearer "+g.token}});case 6:a=e.sent,f(a.data.cart),n="http://localhost:5000/products/update/"+t._id,E(n,{thing:1});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(c.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.token){e.next=17;break}return e.prev=1,e.next=4,i.a.post("https://ed-shop-backend.herokuapp.com/orders/decrease/"+t._id,"",{headers:{Authorization:"Bearer "+g.token.toString()}});case 4:return a=e.sent,e.next=7,i.a.get("https://ed-shop-backend.herokuapp.com/orders",{headers:{Authorization:"Bearer "+g.token}});case 7:a=e.sent,f(a.data.cart),n="http://localhost:5000/products/update/"+t._id,E(n,{thing:-1}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g.token){e.next=11;break}return e.next=3,i.a.post("https://ed-shop-backend.herokuapp.com/"+"orders/remove/".concat(t._id.toString()),"",{headers:{Authorization:"Bearer "+g.token}});case 3:return a=e.sent,e.next=6,i.a.get("https://ed-shop-backend.herokuapp.com/orders",{headers:{Authorization:"Bearer "+g.token}});case 6:a=e.sent,n="http://localhost:5000/products/update/"+t._id,c={thing:t.quantity},f(a.data.cart),E(n,c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){k()}),[g.login,g.token,g.isLoggedIn,k]),u.a.createElement(p.Provider,{value:{products:n,cart:h,addToCart:function(e){return v.apply(this,arguments)},decrement:function(e){return x.apply(this,arguments)},removeItem:function(e){return O.apply(this,arguments)},searchForData:k}},e.children)}p.Consumer},47:function(e,t,a){},48:function(e,t,a){e.exports=a(79)},72:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),s=a(6),u=(a(53),a(16)),l=a(4),i=a.n(l),m=a(13),p=a(12),d=a(45),b=a(25),h=a(21),f=a(18),g=a(8),k=a.n(g);a(47),a(72);var E=function(){var e=Object(n.useContext)(h.a),t=0,a=Object(n.useContext)(f.a),c=Object(n.useState)({}),o=Object(p.a)(c,2),u=o[0],l=o[1];return e.cart.forEach((function(e){t+=e.quantity})),Object(n.useEffect)((function(){var e=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://ed-shop-backend.herokuapp.com/users",{headers:{Authorization:"Bearer "+a.token}});case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.token?e():l({})}),[a]),r.a.createElement(b.a,{bg:"primary",varient:"dark",expand:"lg",className:"navbars"},r.a.createElement(s.b,{to:"/"},r.a.createElement("i",{className:"fas fa-leaf navbar-brand",style:{fontSize:"300%"}})),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"ml-5"},r.a.createElement(s.b,{to:"/fruit",className:"nav-link",style:{color:"chartreuse"}},r.a.createElement("i",{className:"fas fa-apple-alt"})," Fruit"),r.a.createElement(s.b,{to:"/vegetables",className:"nav-link"},r.a.createElement("i",{className:"fas fa-lemon"})," Vegetables"),a.admin&&r.a.createElement(s.b,{to:"/add",className:"nav-link",style:{color:"red"}},r.a.createElement("i",{className:"fas fa-plus",style:{color:"red"}})," Products add"))),r.a.createElement(s.b,{to:"/cart",className:"ml-auto"},r.a.createElement("button",{className:"button",style:{color:"yellow"}},u.name," Cart"," ",r.a.createElement("span",{className:"mr-2"},r.a.createElement("i",{className:"fa",style:{fontSize:"24px"}},"\uf07a"),r.a.createElement("span",{className:"badge badge-warning",id:"lblCartCount"}," ",t," ")))),a.isLoggedIn?r.a.createElement("p",null):r.a.createElement(s.b,{to:"/signup",className:"ml-auto"},r.a.createElement("button",{className:"button"},r.a.createElement("span",{className:"mr-2"},"Signup"))),a.isLoggedIn?r.a.createElement(s.b,{className:"ml-auto",to:"/"},r.a.createElement("button",{className:"button",onClick:a.logout,style:{color:"red"}},r.a.createElement("span",{className:"mr-2"},"Logout"))):r.a.createElement(s.b,{to:"/login",className:"ml-auto"},r.a.createElement("button",{className:"button"},r.a.createElement("span",{className:"mr-2"},"Login"))))},v=a(20),x=function(e){var t=e.component,a=Object(v.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return localStorage.getItem("userData")?r.a.createElement(u.a,{to:"/"}):r.a.createElement(t,e)}}))},O=function(e){var t=e.component,a=Object(v.a)(e,["component"]);return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return localStorage.getItem("userData")?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/signup"})}}))},j=function(e){var t=e.component,a=Object(v.a)(e,["component"]),n=JSON.parse(localStorage.getItem("userData"));return r.a.createElement(u.b,Object.assign({},a,{render:function(e){return n.admin?r.a.createElement(t,e):r.a.createElement(u.a,{to:"/"})}}))},y=r.a.lazy((function(){return a.e(9).then(a.bind(null,87))})),w=r.a.lazy((function(){return a.e(8).then(a.bind(null,93))})),S=r.a.lazy((function(){return a.e(5).then(a.bind(null,92))})),N=r.a.lazy((function(){return a.e(4).then(a.bind(null,88))})),I=r.a.lazy((function(){return a.e(6).then(a.bind(null,89))})),z=r.a.lazy((function(){return a.e(7).then(a.bind(null,90))})),C=r.a.lazy((function(){return a.e(3).then(a.bind(null,91))}));var D=function(){return r.a.createElement(s.a,null,r.a.createElement(E,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:C}),r.a.createElement(u.b,{exact:!0,path:"/details/:detailproduct",component:y}),r.a.createElement(j,{exact:!0,path:"/add",component:S}),r.a.createElement(O,{exact:!0,path:"/cart",component:w}),r.a.createElement(x,{exact:!0,path:"/signup",component:z}),r.a.createElement(x,{exact:!0,path:"/login",component:I}),r.a.createElement(u.b,{exact:!0,path:"/fruit",component:function(){return r.a.createElement(N,{value:"fruit"})}}),r.a.createElement(u.b,{exact:!0,path:"/vegetables",component:function(){return r.a.createElement(N,{value:"vegetable"})}}),r.a.createElement(u.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f.b,null,r.a.createElement(h.b,null,r.a.createElement(s.a,null,r.a.createElement(D,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.1e55788c.chunk.js.map