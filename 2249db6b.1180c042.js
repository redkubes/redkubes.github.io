(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(123)),i={slug:"/",title:"Otomi Container Platform",sidebar_label:"Introduction"},c={unversionedId:"about-intro",id:"about-intro",isDocsHomePage:!1,title:"Otomi Container Platform",description:"Otomi Container Platform offers an out-of-the-box enterprise container management platform (on top of Kubernetes) that increases developer efficiency and reduces complexity. It is a turnkey cloud native solution that integrates upstream Kubernetes with proven open source components. It is a single deployable package with curated industry proven applications and policies for better governance and security. With carefully crafted sane defaults at every step, it minimizes configuration effort and time to market. It strives to automate most (if not all) of your cluster operations, and includes application lifecycle management at its core. Day 2 operations can start at day 1 and can focus mostly on optimization and streamlining of performance. It is open source and transparent, allowing customization but also extensibility. Incorporating Open Source standards and best practices, it aims to bring new features and stability with every iteration. Otomi offers maturity and speed while still supporting customization if desired.",source:"@site/about/about-intro.md",slug:"/",permalink:"/about/",editUrl:"https://github.com/redkubes/redkubes/edit/master/about/about-intro.md",version:"current",lastUpdatedBy:"Maurice Faber",lastUpdatedAt:1610452787,sidebar_label:"Introduction",sidebar:"about",next:{title:"Vision",permalink:"/about/vision"}},s=[],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Otomi Container Platform offers an out-of-the-box enterprise container management platform (on top of Kubernetes) that increases developer efficiency and reduces complexity. It is a turnkey cloud native solution that integrates upstream Kubernetes with proven open source components. It is a single deployable package with curated industry proven applications and policies for better governance and security. With carefully crafted sane defaults at every step, it minimizes configuration effort and time to market. It strives to automate most (if not all) of your cluster operations, and includes application lifecycle management at its core. Day 2 operations can start at day 1 and can focus mostly on optimization and streamlining of performance. It is open source and transparent, allowing customization but also extensibility. Incorporating Open Source standards and best practices, it aims to bring new features and stability with every iteration. Otomi offers maturity and speed while still supporting customization if desired."),Object(o.b)("p",null,"This documentation is intended to provide technical, operational and background information for Otomi Container Platform."),Object(o.b)("p",null,"Please read the following sections to understand the reasoning and decisions made involving the development of Otomi:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"vision"}),"Vision")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"development-journey"}),"Development journey")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"design-and-architecture"}),"Design & Architecture")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"roadmap"}),"Roadmap"))),Object(o.b)("p",null,"For developer information please visit the repositories involved:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redkubes/otomi-core/"}),"otomi-core"),": The monorepo containing all the apps and configuration."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redkubes/otomi-tasks/"}),"otomi-tasks"),": The tasks used by core to massage apps to adhere to the configuration."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redkubes/otomi-clients/"}),"otomi-clients"),": The openapi generator for the clients used by the tasks.")))}u.isMDXComponent=!0}}]);