(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(3),s=c.n(a),i=c(48),r=c.n(i),o=(c(61),c(49)),l=c(7),d=(c(62),c(63),c(50)),j=c.n(d),u=c(51),b=c.n(u),h=c(13),m=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(n.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:s})},p=function(){return Object(a.useContext)(m)},x=c(37),_=x.a.initializeApp({apiKey:"AIzaSyD3Zbqg7Wn83_Dq8Ru2ReF9yERUIUmDWMI",authDomain:"clone-a5d06.firebaseapp.com",databaseURL:"https://clone-a5d06.firebaseio.com",projectId:"clone-a5d06",storageBucket:"clone-a5d06.appspot.com",messagingSenderId:"557903743053",appId:"1:557903743053:web:222b3191b87c875d64f404",measurementId:"G-LKQN6GTXHK"}).firestore(),g=x.a.auth();var v=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(h.b,{to:"/",children:Object(n.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(n.jsxs)("div",{className:"header__search",children:[Object(n.jsx)("input",{className:"header__searchInput",type:"text"}),Object(n.jsx)(j.a,{className:"header__searchIcon"})]}),Object(n.jsxs)("div",{className:"header__nav",children:[Object(n.jsx)(h.b,{to:!s&&"/login",children:Object(n.jsxs)("div",{onClick:function(){s&&g.signOut()},className:"header__option",children:[Object(n.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(n.jsx)(h.b,{to:"/orders",children:Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(n.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(n.jsx)(h.b,{to:"/checkout",children:Object(n.jsxs)("div",{className:"header__optionBasket",children:[Object(n.jsx)(b.a,{}),Object(n.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};c(73),c(74);var f=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,r=p(),o=Object(l.a)(r,2),d=(o[0].basket,o[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product__info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(n.jsx)("img",{src:a,alt:""}),Object(n.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:i}})},children:"Add to Basket"})]})};var N=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{className:"home__container",children:[Object(n.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(f,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(n.jsx)(f,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(f,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(n.jsx)(f,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(n.jsx)(f,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(n.jsx)("div",{className:"home__row",children:Object(n.jsx)(f,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},S=c(9),k=(c(75),c(76),c(25)),y=c.n(k),C=c(23),E=c(20),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(E.a)(Object(E.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(C.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(E.a)(Object(E.a)({},e),{},{basket:n});case"SET_USER":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});default:return e}};var T=function(){var e=Object(S.f)(),t=p(),c=Object(l.a)(t,2),a=c[0].basket;return c[1],Object(n.jsxs)("div",{className:"subtotal",children:[Object(n.jsx)(y.a,{renderText:function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("p",{children:["Subtotal (",a.length," items): ",Object(n.jsx)("strong",{children:e})]}),Object(n.jsxs)("small",{className:"subtotal__gift",children:[Object(n.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:A(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};c(78);var B=function(e){var t=e.id,c=e.image,a=e.title,s=e.price,i=e.rating,r=e.hideButton,o=p(),d=Object(l.a)(o,2),j=(d[0].basket,d[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(n.jsxs)("div",{className:"checkoutProduct__info",children:[Object(n.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(n.jsxs)("p",{className:"checkoutProduct__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\ud83c\udf1f"})}))}),!r&&Object(n.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var L=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("div",{className:"checkout",children:[Object(n.jsxs)("div",{className:"checkout__left",children:[Object(n.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(n.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),a.map((function(e){return Object(n.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(n.jsx)("div",{className:"checkout__right",children:Object(n.jsx)(T,{})})]})};c(79);var I=function(){var e=Object(S.f)(),t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(h.b,{to:"/",children:Object(n.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("h1",{children:"Sign-in"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h5",{children:"E-mail"}),Object(n.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{type:"password",value:d,onChange:function(e){return j(e.target.value)}}),Object(n.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(s,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(n.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(s,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},P=c(27),D=c.n(P),M=c(36),z=(c(81),c(24)),R=c(52),G=c.n(R).a.create({baseURL:"https://us-central1-challenge-4b2b2.cloudfunctions.net/api"});var U=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user,r=t[1],o=Object(S.f)(),d=Object(z.useStripe)(),j=Object(z.useElements)(),u=Object(a.useState)(!1),b=Object(l.a)(u,2),m=b[0],O=b[1],x=Object(a.useState)(""),g=Object(l.a)(x,2),v=g[0],f=g[1],N=Object(a.useState)(null),k=Object(l.a)(N,2),C=k[0],E=k[1],w=Object(a.useState)(!0),T=Object(l.a)(w,2),L=T[0],I=T[1],P=Object(a.useState)(!0),R=Object(l.a)(P,2),U=R[0],H=R[1];Object(a.useEffect)((function(){(function(){var e=Object(M.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G({method:"post",url:"/payments/create?total=".concat(100*A(s))});case 2:t=e.sent,H(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("THE SECRET IS >>>",U),console.log("\ud83d\udc71",i);var K=function(){var e=Object(M.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,d.confirmCardPayment(U,{payment_method:{card:j.getElement(z.CardElement)}}).then((function(e){var t=e.paymentIntent;_.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:s,amount:t.amount,created:t.created}),O(!0),E(null),f(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"payment",children:Object(n.jsxs)("div",{className:"payment__container",children:[Object(n.jsxs)("h1",{children:["Checkout (",Object(n.jsxs)(h.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Delivery Address"})}),Object(n.jsxs)("div",{className:"payment__address",children:[Object(n.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(n.jsx)("p",{children:"123 React Lane"}),Object(n.jsx)("p",{children:"Los Angeles, CA"})]})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Review items and delivery"})}),Object(n.jsx)("div",{className:"payment__items",children:s.map((function(e){return Object(n.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(n.jsxs)("div",{className:"payment__section",children:[Object(n.jsx)("div",{className:"payment__title",children:Object(n.jsx)("h3",{children:"Payment Method"})}),Object(n.jsx)("div",{className:"payment__details",children:Object(n.jsxs)("form",{onSubmit:K,children:[Object(n.jsx)(z.CardElement,{onChange:function(e){I(e.empty),E(e.error?e.error.message:"")}}),Object(n.jsxs)("div",{className:"payment__priceContainer",children:[Object(n.jsx)(y.a,{renderText:function(e){return Object(n.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:A(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(n.jsx)("button",{disabled:v||L||m,children:Object(n.jsx)("span",{children:v?Object(n.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),C&&Object(n.jsx)("div",{children:C})]})})]})]})})},H=(c(98),c(99),c(53)),K=c.n(H);var W=function(e){var t,c=e.order;return Object(n.jsxs)("div",{className:"order",children:[Object(n.jsx)("h2",{children:"Order"}),Object(n.jsx)("p",{children:K.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(n.jsx)("p",{className:"order__id",children:Object(n.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(n.jsx)(y.a,{renderText:function(e){return Object(n.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})};var X=function(){var e=p(),t=Object(l.a)(e,2),c=t[0],s=(c.basket,c.user),i=(t[1],Object(a.useState)([])),r=Object(l.a)(i,2),o=r[0],d=r[1];return Object(a.useEffect)((function(){s?_.collection("users").doc(null===s||void 0===s?void 0:s.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[s]),Object(n.jsxs)("div",{className:"orders",children:[Object(n.jsx)("h1",{children:"Your Orders"}),Object(n.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e){return Object(n.jsx)(W,{order:e})}))})]})},Y=c(54),F=Object(Y.a)("pk_test_51HhqMKAJhTIX7jX4EWdDjmcXN3zLrZQJHu1gxfnzfjskUJYHwMTkAfrxD7bgpq9cMB4YeuSvxHDFMbCJDHz4GDge00nkbjoxQO");var $=function(){var e=p(),t=Object(l.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(n.jsx)(h.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(S.c,{children:[Object(n.jsxs)(S.a,{path:"/orders",children:[Object(n.jsx)(v,{}),Object(n.jsx)(X,{})]}),Object(n.jsx)(S.a,{path:"/login",children:Object(n.jsx)(I,{})}),Object(n.jsxs)(S.a,{path:"/checkout",children:[Object(n.jsx)(v,{}),Object(n.jsx)(L,{})]}),Object(n.jsxs)(S.a,{path:"/payment",children:[Object(n.jsx)(v,{}),Object(n.jsx)(z.Elements,{stripe:F,children:Object(n.jsx)(U,{})})]}),Object(n.jsxs)(S.a,{path:"/",children:[Object(n.jsx)(v,{}),Object(n.jsx)(N,{})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(O,{initialState:{basket:[],user:null},reducer:w,children:Object(n.jsx)($,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},81:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.c5ba2918.chunk.js.map