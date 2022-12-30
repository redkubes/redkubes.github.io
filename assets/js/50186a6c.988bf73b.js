"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={slug:"get-started",title:"Getting started with Otomi",sidebar_label:"Get started"},i=void 0,s={unversionedId:"installation/get-started",id:"installation/get-started",title:"Getting started with Otomi",description:"Provision a Kubernetes cluster",source:"@site/docs/installation/get-started.md",sourceDirName:"installation",slug:"/installation/get-started",permalink:"/docs/installation/get-started",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/installation/get-started.md",tags:[],version:"current",frontMatter:{slug:"get-started",title:"Getting started with Otomi",sidebar_label:"Get started"}},l={},u=[{value:"Provision a Kubernetes cluster",id:"provision-a-kubernetes-cluster",level:2},{value:"Install Otomi",id:"install-otomi",level:2},{value:"Explore Otomi",id:"explore-otomi",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"provision-a-kubernetes-cluster"},"Provision a Kubernetes cluster"),(0,a.kt)("p",null,"To get started with Otomi, first provision a Kubernetes cluster. Read the minimal requirements in the ",(0,a.kt)("a",{parentName:"p",href:"prerequisites"},"prerequisites")," to make sure your cluster is ready to install Otomi."),(0,a.kt)("p",null,"We have created ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/quickstart"},"quickstarts")," for Azure, GCP, AWS, Linode, Digital Ocean and Minikube to help you spin-up a Kubernetes cluster."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When using Minikube, only Otomi Core apps can be used! Activating more apps will require more compute resources. We advise to have a node pool available with at least 12 vCPU and 32 GiB memory."))),(0,a.kt)("h2",{id:"install-otomi"},"Install Otomi"),(0,a.kt)("p",null,"Use the Otomi Helm chart to install Otomi on your Kubernetes cluster. In order to guarantee exact outcomes, we strongly advise to follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check the ",(0,a.kt)("a",{parentName:"li",href:"optional"},"optional configuration")," options"),(0,a.kt)("li",{parentName:"ul"},"Install Otomi using the ",(0,a.kt)("a",{parentName:"li",href:"chart"},"Helm chart")),(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"activation"},"activation steps"))),(0,a.kt)("h2",{id:"explore-otomi"},"Explore Otomi"),(0,a.kt)("p",null,"To help you start using Otomi, we have prepared a comprehensive set of hands-on labs to get a good understanding/overview of Otomi. Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/workshops"},"workshops")," repository to get started."))}c.isMDXComponent=!0}}]);