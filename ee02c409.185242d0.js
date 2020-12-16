(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(123)),i={slug:"lifecycle-management/upgrades",title:"Upgrades"},s={unversionedId:"lm-upgrades",id:"lm-upgrades",isDocsHomePage:!1,title:"Upgrades",description:"Introduction",source:"@site/docs/lm-upgrades.md",slug:"/lifecycle-management/upgrades",permalink:"/docs/lifecycle-management/upgrades",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/lm-upgrades.md",version:"current",sidebar:"mainSidebar",previous:{title:"LM Overview",permalink:"/docs/lifecycle-management/"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Steps to upgrade otomi-core",id:"steps-to-upgrade-otomi-core",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,'Since otomi-core is a mono repo with many open source charts that are working together, it is very hard to coordinate updates to its parts. Luckily we can rely on a lot of smart operators to take care of upgrades (we strive to only adopt operators with capability level "Seamless Upgrades"), but some scripting is always needed in this case. We strive to make upgrades as painless as possible by creating upgrade scripts for the release versions. You can find these in ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core/tree/master/bin/upgrades"}),"otomi-core/bin/upgrades"),"."),Object(o.b)("p",null,"Example: in order to migrate from ",Object(o.b)("inlineCode",{parentName:"p"},"v0.10.*")," to ",Object(o.b)("inlineCode",{parentName:"p"},"v0.11.*")," you would run ",Object(o.b)("inlineCode",{parentName:"p"},"bin/upgrades/v0.11.sh"),". Soon the upgrade scripts can also be used to migrate from an older version, as it will apply any in between upgrade scripts successively."),Object(o.b)("p",null,"In some situations however, the automatic upgrades will throw an error, and might require removing/patching existing resources before helm can adopt or manipulate them. Notable issues:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Resources not under helm chart control: since helm 3.2 these can be adopted. When trying to deploy helm resources over existing resources helm will give detailed instructions on how to adopt these."),Object(o.b)("li",{parentName:"ul"},"Some resources have labels and do not allow changing them. This usually points to bad chart practices, but mandates removal before recreating these resources. This can't always be done and is a big drawback. Remedies usually exist but might have to be investigated on the fly.")),Object(o.b)("h2",{id:"steps-to-upgrade-otomi-core"},"Steps to upgrade otomi-core"),Object(o.b)("p",null,"So every time an upgrade of the stack is released it is important to follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Read the release notes on ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/redkubes/otomi-core"}),"otomi-core")," for impact and special cases."),Object(o.b)("li",{parentName:"ol"},"Check the corresponding upgrade script(s) and read the comments. It might involve manual steps."),Object(o.b)("li",{parentName:"ol"},"Set the new version tag in ",Object(o.b)("inlineCode",{parentName:"li"},"clusters.yaml")," and run ",Object(o.b)("inlineCode",{parentName:"li"},"otomi bootstrap")," to pull in latest artifacts"),Object(o.b)("li",{parentName:"ol"},"Do a diff first: ",Object(o.b)("inlineCode",{parentName:"li"},"otomi diff")),Object(o.b)("li",{parentName:"ol"},"Run the upgrade script"),Object(o.b)("li",{parentName:"ol"},"Check the output and fix anything that needs fixing and repeat steps 4-6"),Object(o.b)("li",{parentName:"ol"},"Commit the values when all is well and Drone syncing will take it from there")))}p.isMDXComponent=!0},123:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);