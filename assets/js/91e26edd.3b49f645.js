"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3308],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1331:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={slug:"tutorials/",title:"Tutorial Overview",sidebar_label:"Overview"},u=void 0,s={unversionedId:"tutorial-overview",id:"tutorial-overview",title:"Tutorial Overview",description:"This section contains tutorials to learn using Otomi and all the integrated apps.",source:"@site/docs/tutorial-overview.md",sourceDirName:".",slug:"/tutorials/",permalink:"/docs/tutorials/",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/tutorial-overview.md",tags:[],version:"current",frontMatter:{slug:"tutorials/",title:"Tutorial Overview",sidebar_label:"Overview"}},c={},p=[{value:"More",id:"more",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section contains tutorials to learn using Otomi and all the integrated apps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"basic-install-for-tutorial"},"Install Otomi")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"build-tag-push"},"Build, tag and push an image to Harbor")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-k8s-service"},"Create a Kubernetes service")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-knative-service"},"Create a Knative service")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"expose-service"},"Publicly expose an existing service using Otomi Console")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-secret-vault"},"Create a secret in Hashicorp Vault")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"add-secret"},"Add a secret created in vault to Kubernetes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"use-secret"},"Use secrets in Kubernetes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"create-ksvc-otomi"},"Creating Knative services using Otomi Console"))),(0,i.kt)("p",null,"To be able to do the tutorials, please make sure you have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A running Kubernetes cluster"),(0,i.kt)("li",{parentName:"ul"},"Docker installed on your machine"),(0,i.kt)("li",{parentName:"ul"},"A Git client installed on your machine"),(0,i.kt)("li",{parentName:"ul"},"Visual Studio Code (or any other text editor) installed on you machine (in the tutorials we'll use VSC)"),(0,i.kt)("li",{parentName:"ul"},"Created a Team in Otomi. In the tutorials we'll use a team called ",(0,i.kt)("inlineCode",{parentName:"li"},"demo")),(0,i.kt)("li",{parentName:"ul"},"Signed in to Otomi as a user who is a member of the ",(0,i.kt)("inlineCode",{parentName:"li"},"team-demo")," group")),(0,i.kt)("p",null,"If you haven't already, first install Otomi."),(0,i.kt)("h2",{id:"more"},"More"),(0,i.kt)("p",null,"There are also lab exercises available on in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/kubernetes-hackfest/tree/master/labs/paas/otomi"},"Azure Kubernetes-hackfest")," repository."),(0,i.kt)("p",null,"We will soon add more tutorials here on otomi.io."))}f.isMDXComponent=!0}}]);