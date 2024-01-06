"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8379],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={slug:"upgrades",title:"Upgrades"},i=void 0,s={unversionedId:"for-ops/sre/upgrades",id:"for-ops/sre/upgrades",title:"Upgrades",description:"Introduction",source:"@site/docs/for-ops/sre/upgrades.md",sourceDirName:"for-ops/sre",slug:"/for-ops/sre/upgrades",permalink:"/docs/for-ops/sre/upgrades",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/sre/upgrades.md",tags:[],version:"current",frontMatter:{slug:"upgrades",title:"Upgrades"},sidebar:"mainSidebar",previous:{title:"Daily Routine",permalink:"/docs/for-ops/sre/daily"},next:{title:"Troubleshooting",permalink:"/docs/for-ops/sre/troubleshooting"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Steps to upgrade otomi-core",id:"steps-to-upgrade-otomi-core",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,'Since otomi-core is a mono repo with many open source charts that are working together, it is very hard to coordinate updates to its parts. Luckily we can rely on a lot of smart operators to take care of upgrades (we strive to only adopt operators with capability level "Seamless Upgrades"), but some scripting is always needed in this case. We strive to make upgrades as painless as possible by creating upgrade scripts for the release versions.'),(0,n.kt)("p",null,"Example: in order to migrate from ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.10.*")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.11.*")," you would run ",(0,n.kt)("inlineCode",{parentName:"p"},"bin/upgrades/v0.11.sh"),". Soon the upgrade scripts can also be used to migrate from an older version, as it will apply any in between upgrade scripts successively."),(0,n.kt)("p",null,"In some situations however, the automatic upgrades will throw an error, and might require removing/patching existing resources before helm can adopt or manipulate them. Notable issues:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Resources not under helm chart control: since helm 3.2 these can be adopted. When trying to deploy helm resources over existing resources helm will give detailed instructions on how to adopt these."),(0,n.kt)("li",{parentName:"ul"},"Some resources have labels and do not allow changing them. This usually points to bad chart practices, but mandates removal before recreating these resources. This can't always be done and is a big drawback. Remedies usually exist but might have to be investigated on the fly.")),(0,n.kt)("h2",{id:"steps-to-upgrade-otomi-core"},"Steps to upgrade otomi-core"),(0,n.kt)("p",null,"So every time an upgrade of the stack is released it is important to follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Read the release notes on ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/redkubes/otomi-core"},"otomi-core")," for impact and special cases."),(0,n.kt)("li",{parentName:"ol"},"Check the corresponding upgrade script(s) and read the comments. It might involve manual steps."),(0,n.kt)("li",{parentName:"ol"},"Set the new version tag in ",(0,n.kt)("inlineCode",{parentName:"li"},"clusters.yaml")," and run ",(0,n.kt)("inlineCode",{parentName:"li"},"otomi bootstrap")," to pull in latest artifacts"),(0,n.kt)("li",{parentName:"ol"},"Do a diff first: ",(0,n.kt)("inlineCode",{parentName:"li"},"otomi diff")),(0,n.kt)("li",{parentName:"ol"},"Run the upgrade script"),(0,n.kt)("li",{parentName:"ol"},"Check the output and fix anything that needs fixing and repeat steps 4-6"),(0,n.kt)("li",{parentName:"ol"},"Commit the values when all is well and the Otomi Tekton pipeline will take it from there")))}c.isMDXComponent=!0}}]);