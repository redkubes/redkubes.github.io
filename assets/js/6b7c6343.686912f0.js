"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4628:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={slug:"lab-15",title:"Check policy compliance",sidebar_label:"Check policy compliance"},o=void 0,l={unversionedId:"get-started/labs/lab-15",id:"get-started/labs/lab-15",title:"Check policy compliance",description:"Prerequisite: For this lab, Gatekeeper needs to be activated.",source:"@site/docs/get-started/labs/lab-15.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-15",permalink:"/docs/get-started/labs/lab-15",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-15.md",tags:[],version:"current",frontMatter:{slug:"lab-15",title:"Check policy compliance",sidebar_label:"Check policy compliance"},sidebar:"mainSidebar",previous:{title:"Create a database",permalink:"/docs/get-started/labs/lab-24"},next:{title:"Scan images",permalink:"/docs/get-started/labs/lab-7"}},c={},s=[{value:"View policy violations",id:"view-policy-violations",level:2}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Prerequisite: For this lab, Gatekeeper needs to be activated.")),(0,n.kt)("p",null,"When the platform administrator has enabled Gatekeeper and configured policies, you might like to check and see if your workloads are policy compliant. When the administrator has enabled Gatekeeper on the platform level, each team will automatically get access to a Policy Violations dashboard in Grafana."),(0,n.kt)("h2",{id:"view-policy-violations"},"View policy violations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Grafana app"),(0,n.kt)("li",{parentName:"ul"},"Click on ",(0,n.kt)("inlineCode",{parentName:"li"},"Dashboards")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"Browse")),(0,n.kt)("li",{parentName:"ul"},"In the list of dashboards you will see a dashboard called ",(0,n.kt)("inlineCode",{parentName:"li"},"Policy Violations"),". Click on it"),(0,n.kt)("li",{parentName:"ul"},"Now you will see the following dashboard, showing all detected policy violations within your team workloads")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"policy-violations",src:a(1420).Z,width:"2628",height:"1726"})))}d.isMDXComponent=!0},1420:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/policy-violations-cc6b0fa70ac156c6ceccb4212fb1bf1b.png"}}]);