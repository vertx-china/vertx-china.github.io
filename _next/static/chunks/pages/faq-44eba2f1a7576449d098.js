_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"3ouP":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return y})),n.d(t,"default",(function(){return N}));var r=n("cpVT"),o=n("dhJC"),a=n("q1tI"),i=n.n(a),s=n("7ljp"),c=n("UMc4"),l=n("nKUr"),u=n("TSYQ"),p=n.n(u),m=n("17x9"),d=n.n(m);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=Object(a.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,a=void 0===o?24:o,s=b(e,["color","size"]);return i.a.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),i.a.createElement("polyline",{points:"9 18 15 12 9 6"}))}));h.propTypes={color:d.a.string,size:d.a.oneOfType([d.a.string,d.a.number])},h.displayName="ChevronRight";var O=h,v=(n("g+v8"),function(e){var t=e.question,n=e.children,r=Object(a.useState)(),o=r[0],i=r[1];return Object(l.jsxs)("section",{className:"faq-question",children:[Object(l.jsxs)("h3",{onClick:function(){i(!o)},children:[Object(l.jsx)(O,{className:p()("faq-question-chevron",{visible:o})}),t]}),Object(l.jsx)("div",{className:p()("faq-question-answer",{visible:o}),children:n})]})});n("YFqc");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={title:"Frequently asked questions"},x={meta:y},w=c.a;function N(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.mdx)(w,g(g(g({},x),n),{},{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h2",null,"Frequently asked questions"),Object(s.mdx)(v,{question:Object(s.mdx)(i.a.Fragment,null,"The ",Object(s.mdx)("code",null,"logActivity")," option is enabled, but nothing is logged"),mdxType:"Question"},Object(s.mdx)("p",null,"Most Vert.x net\xadwork clients or servers have a ",Object(s.mdx)("inlineCode",{parentName:"p"},"logActivity")," op\xadtion which en\xadables net\xadwork ac\xadtiv\xadity log\xadging.\nWhen ac\xadtive, Netty\u2019s pipeline is con\xadfig\xadured for log\xadging on Netty\u2019s log\xadger, at ",Object(s.mdx)("inlineCode",{parentName:"p"},"DEBUG")," level"),Object(s.mdx)("p",null,"This is why switch\xading on the ",Object(s.mdx)("inlineCode",{parentName:"p"},"logActivity")," op\xadtion is not enough.\nYou also have to set the ",Object(s.mdx)("inlineCode",{parentName:"p"},"io.netty.handler.logging.LoggingHandler")," log\xadger to ",Object(s.mdx)("inlineCode",{parentName:"p"},"DEBUG")," level in your log\xadging frame\xadwork con\xadfig\xadu\xadra\xadtion.")),Object(s.mdx)(v,{question:"When Vert.x is clustered, what happens to event-bus messages if a node crashes?",mdxType:"Question"},Object(s.mdx)("p",null,"When you send a mes\xadsage on the event-\u200bbus, it is sent to the re\xadcip\xadi\xadent\u2019s node and stored in mem\xadory until it is processed.\nIt is ",Object(s.mdx)("strong",{parentName:"p"},"not")," per\xadsisted to disk or a data\xadbase."),Object(s.mdx)("p",null,"Con\xadse\xadquently, if the re\xadcip\xadi\xadent\u2019s node crashes be\xadfore the mes\xadsage is processed, the mes\xadsage is lost."),Object(s.mdx)("p",null,"If it\u2019s not pos\xadsi\xadble to tol\xader\xadate loss of some mes\xadsages, there are a few op\xadtions in\xadclud\xading:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"idem\xadpo\xadtent retry when send\xading fails with an error"),Object(s.mdx)("li",{parentName:"ul"},"asyn\xadchro\xadnous ac\xadknowl\xadegde\xadment")),Object(s.mdx)("p",null,"Oth\xader\xadwise, con\xadsider using a full-\u200bfledged broker-\u200bbased mes\xadsag\xading sys\xadtem like ",Object(s.mdx)("a",g({parentName:"p"},{href:"http://activemq.apache.org/"}),"Apache Ac\xadtiveMQ")," or ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://www.rabbitmq.com/"}),"Rab\xadbitMQ"),"."),Object(s.mdx)("p",null,"Vert.x has clients for such so\xadlu\xadtions: ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://vertx.io/docs/vertx-amqp-client/java/"}),"Vert.x AMQP Client"),", ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://vertx.io/docs/vertx-rabbitmq-client/java/"}),"Rab\xadbitMQ Client for Vert.x")," or ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://vertx.io/docs/vertx-stomp/java/"}),"Vert.x-\u200bStomp"),".")),Object(s.mdx)(v,{question:"Why doesn't my event-bus consumer pickup messages sent previously?",mdxType:"Question"},Object(s.mdx)("p",null,"When you pub\xadlish a mes\xadsage on the event-\u200bbus, it is sent to all nodes hav\xading one or more con\xadsumers reg\xadis\xadtered for the cor\xadre\xadspond\xading mes\xadsage ad\xaddress.\nIt is ",Object(s.mdx)("strong",{parentName:"p"},"not")," per\xadsisted to disk or a data\xadbase."),Object(s.mdx)("p",null,"Con\xadse\xadquently, new con\xadsumers on ex\xadist\xading nodes or nodes join\xading the clus\xadter later will ",Object(s.mdx)("strong",{parentName:"p"},"not")," re\xadceive this mes\xadsage."),Object(s.mdx)("p",null,"If you need this fea\xadture, con\xadsider using a full-\u200bfledged broker-\u200bbased mes\xadsag\xading sys\xadtem like ",Object(s.mdx)("a",g({parentName:"p"},{href:"http://activemq.apache.org/"}),"Apache Ac\xadtiveMQ")," or ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://www.rabbitmq.com/"}),"Rab\xadbitMQ"),"."),Object(s.mdx)("p",null,"Vert.x has clients for such so\xadlu\xadtions: ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://vertx.io/docs/vertx-amqp-client/java/"}),"Vert.x AMQP Client"),", ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://vertx.io/docs/vertx-rabbitmq-client/java/"}),"Rab\xadbitMQ Client for Vert.x")," or ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://vertx.io/docs/vertx-stomp/java/"}),"Vert.x-\u200bStomp"),".")),Object(s.mdx)(v,{question:"How to use the JVM built-in address resolver?",mdxType:"Question"},Object(s.mdx)("p",null,"By de\xadfault, Vert.x re\xadlies on a non-\u200bblocking ad\xaddress re\xadsolver in\xadstead of the JVM built-\u200bin one.\nFor most users this is trans\xadpar\xadent but the non-\u200bblocking re\xadsolver is less ma\xadture and may not work in some en\xadvi\xadron\xadments."),Object(s.mdx)("p",null,"In this case, please file an issue on the ",Object(s.mdx)("a",g({parentName:"p"},{href:"https://github.com/eclipse-vertx/vert.x/issues"}),"Vert.x core repos\xadi\xadtory"),"."),Object(s.mdx)("p",null,"As a workaround, you can switch the non-\u200bblocking re\xadsolver off and fall\xadback to the JVM built-\u200bin one.\nTo do so, start the JVM with the ",Object(s.mdx)("inlineCode",{parentName:"p"},"vertx.disableDnsResolver")," sys\xadtem prop\xaderty set to ",Object(s.mdx)("inlineCode",{parentName:"p"},"true"),":"),Object(s.mdx)("pre",null,Object(s.mdx)("code",g({parentName:"pre"},{className:"hljs language-ini"}),Object(s.mdx)("span",g({parentName:"code"},{className:"hljs-attr"}),"-Dvertx.disableDnsResolver"),"=",Object(s.mdx)("span",g({parentName:"code"},{className:"hljs-literal"}),"true"),"\n"))))}N.isMDXComponent=!0},"4hdO":function(e,t,n){"use strict";function r(e){document.body.scrollTop=document.documentElement.scrollTop=e}function o(e,t){requestAnimationFrame||r(e);var n=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);if(n!==e){var o=e-n,a=void 0;requestAnimationFrame((function e(i){a||(a=i);var s=i-a,c=Math.min(1,s/t);r(n+o*(c*(2-c))),c<1&&requestAnimationFrame(e)}))}}n.d(t,"a",(function(){return o}))},"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return p}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){return function(t){var n=m(t.components);return o.a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=m(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,d=u["".concat(i,".").concat(p)]||u[p]||f[p]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},UMc4:function(e,t,n){"use strict";var r=n("nKUr"),o=n("TSYQ"),a=n.n(o),i=n("q1tI"),s=n("nOHt"),c=n.n(s),l=n("4hdO"),u=n("anbt"),p=n("Cgje"),m=n("naWs");n("05nU");function d(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.meta,n=void 0===t?{}:t,o=e.narrow,s=e.hashSmoothScroll,f=void 0!==s&&s,b=e.children,h=Object(i.useContext)(u.a.State),O=Object(i.useRef)(),v=Object(i.useCallback)((function(e,t){var n=e.substring(e.indexOf("#")+1),r=document.getElementById(n);if(r){var o=r.offsetTop-h.height;Object(l.a)(o,t?200:500)}}),[h.height]),j=Object(i.useCallback)((function(e){v(e.newURL)}),[v]),g=Object(i.useCallback)((function(e){var t,n=d(e.current.querySelectorAll("a[href^='#']"));try{var r=function(){var e=t.value;e.onclick=function(t){t.preventDefault();var n=window.location.href;n.substring(n.indexOf("#"))!==e.getAttribute("href")?c.a.push(window.location.pathname+e.getAttribute("href")):v(n)}};for(n.s();!(t=n.n()).done;)r()}catch(o){n.e(o)}finally{n.f()}}),[v]);return Object(i.useEffect)((function(){return f&&(c.a.events.on("hashChangeStart",v),window.addEventListener("hashchange",j),g(O),v(window.location.href,!0)),function(){f&&(window.removeEventListener("hashchange",j),c.a.events.off("hashChangeStart",v))}}),[j,v,g,f]),Object(r.jsxs)("main",{className:"page",children:[Object(r.jsx)(p.a,{title:n.title}),Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)("div",{className:a()("container",{"container-narrow":o}),ref:O,children:b})}),Object(r.jsx)(m.a,{})]})}},dhJC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},ijRy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n("3ouP")}])}},[["ijRy",0,2,1,4,3]]]);