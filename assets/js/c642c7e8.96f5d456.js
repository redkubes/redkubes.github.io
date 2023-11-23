"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[512],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>p});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(o),p=r,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3909:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const i={title:"Welcome to our community",slug:"welcome",sidebar_label:"Welcome"},a=void 0,l={unversionedId:"welcome",id:"welcome",title:"Welcome to our community",description:"So you are interested to get involved with Otomi? Awesome! This guide will help you understand the overall organization of the project, and direct you to the best places to get started. You'll be able to pick up issues, write code to fix them, and get your work reviewed and merged. All feedback is welcome!",source:"@site/community/welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/community/welcome",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/community/welcome.md",tags:[],version:"current",lastUpdatedBy:"jeho",lastUpdatedAt:1700733642,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{title:"Welcome to our community",slug:"welcome",sidebar_label:"Welcome"},sidebar:"mainSidebar",next:{title:"Values",permalink:"/community/community-values"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:3},{value:"Developer guide",id:"developer-guide",level:3},{value:"Setting up your development environment",id:"setting-up-your-development-environment",level:3},{value:"Community Expectations and Roles",id:"community-expectations-and-roles",level:3}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So you are interested to get involved with Otomi? Awesome! This guide will help you understand the overall organization of the project, and direct you to the best places to get started. You'll be able to pick up issues, write code to fix them, and get your work reviewed and merged. All feedback is welcome!"),(0,r.kt)("p",null,"This document is the single source of truth for how to contribute to the following code bases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-core/"},"otomi-core"),": The heart of Otomi, a monorepo containing all the apps and configurations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-tasks/"},"otomi-tasks"),": The tasks used by core to massage apps to adhere to the configurations"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-clients/"},"otomi-clients"),": The openapi generator for the clients used by the tasks")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before submitting code to Otomi, you should first complete the following prerequisites. Completing these steps will make your first contribution easier:"),(0,r.kt)("h3",{id:"code-of-conduct"},"Code of Conduct"),(0,r.kt)("p",null,"Please make sure to read and observe the ",(0,r.kt)("a",{parentName:"p",href:"code-of-conduct"},"Code of Conduct")," and\n",(0,r.kt)("a",{parentName:"p",href:"community-values"},"Community Values")),(0,r.kt)("h3",{id:"developer-guide"},"Developer guide"),(0,r.kt)("p",null,"Effective development starts with an understanding the code structure and the relationship between different components of the system. Read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/docs/development.md"},"Code development guide")," to learn how to develop on Otomi."),(0,r.kt)("h3",{id:"setting-up-your-development-environment"},"Setting up your development environment"),(0,r.kt)("p",null,"It is not required to set up a developer environment in order to contribute to Otomi, but if you do plan to contribute code changes, follow the instructions in the Developer Docs on how to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/docs/setup.md"},"Set up your development environment"),"."),(0,r.kt)("h3",{id:"community-expectations-and-roles"},"Community Expectations and Roles"),(0,r.kt)("p",null,"Otomi is a community project. Consequently, it is wholly dependent on its community to provide a productive, friendly and collaborative environment."),(0,r.kt)("p",null,"Please read and review the ",(0,r.kt)("a",{parentName:"p",href:"expectations"},"Contribution Expectations")," for an understanding of code and review expectations."))}d.isMDXComponent=!0}}]);