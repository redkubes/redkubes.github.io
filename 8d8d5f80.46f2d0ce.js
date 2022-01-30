(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(185)),c={slug:"console/platform-jobs",title:"Jobs"},l={unversionedId:"ui-platform-jobs",id:"ui-platform-jobs",isDocsHomePage:!1,title:"Jobs",description:"Platform Jobs",source:"@site/docs/ui-platform-jobs.md",slug:"/console/platform-jobs",permalink:"/docs/console/platform-jobs",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ui-platform-jobs.md",version:"current",sidebar:"mainSidebar",previous:{title:"Services",permalink:"/docs/console/platform-services"},next:{title:"Settings",permalink:"/docs/console/settings/alerts"}},b=[],i={toc:b};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{alt:"Platform Jobs",src:n(266).default})),Object(o.b)("p",null,"All known Jobs on the platform are listed here. Jobs can be sorted based on:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Job Name"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The name of the job")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Job type (Job/CronJob)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Run Policy"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The configured run policy (Off/Always/OnSpecChange)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Schedule"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The configured schedule (only if type is CronJob)")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Team"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The team that owns the service")))),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Create Job")," button will only become active when a team is selected."))}p.isMDXComponent=!0},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(d,l(l({ref:t},i),{},{components:n})):a.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},266:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/platform-jobs-085098cf9331bd3d6815ac01f64b3db8.png"}}]);