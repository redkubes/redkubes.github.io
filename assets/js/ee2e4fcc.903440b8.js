"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={slug:"lab-14",title:"Deploy serverless workloads",sidebar_label:"Lab 14"},l=void 0,i={unversionedId:"for-devs/get-started/lab-14",id:"for-devs/get-started/lab-14",title:"Deploy serverless workloads",description:"Prerequisite: For this lab, ArgoCD needs to be activated.",source:"@site/docs/for-devs/get-started/lab-14.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-14",permalink:"/docs/for-devs/get-started/lab-14",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-14.md",tags:[],version:"current",frontMatter:{slug:"lab-14",title:"Deploy serverless workloads",sidebar_label:"Lab 14"}},p={},s=[{value:"Create a Function as a Service workload",id:"create-a-function-as-a-service-workload",level:2},{value:"(optionally) Publicly expose the service",id:"optionally-publicly-expose-the-service",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Prerequisite: For this lab, ArgoCD needs to be activated.")),(0,r.kt)("p",null,"Otomi uses Knative serving for serverless (or Function as a Service) support."),(0,r.kt)("p",null,"As a developer, you'll have the following options to deploy serverless workloads:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BYO Knative service manifest and deploy it using kubectl or ArgoCD"),(0,r.kt)("li",{parentName:"ul"},"Create workloads with the deployment Helm chart  in ",(0,r.kt)("inlineCode",{parentName:"li"},"otomi-charts")),(0,r.kt)("li",{parentName:"ul"},"Create workloads with the Knative Helm chart in ",(0,r.kt)("inlineCode",{parentName:"li"},"otomi-charts"))),(0,r.kt)("p",null,"In this lab we're going to create a workload in Otomi to create a Knative service using the knative chart in ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-charts"),"."),(0,r.kt)("h2",{id:"create-a-function-as-a-service-workload"},"Create a Function as a Service workload"),(0,r.kt)("p",null,"You can create a workload to deploy your own Helm chart, or you can use one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-charts")," Helm charts. In this case we'll use the deployment chart in the ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-charts")," repository."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Workloads")," in the right menu and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"New Workload"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Function as a Service")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubecfg",src:a(2231).Z,width:"2370",height:"626"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Enter a name for the workload")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hello-ksvc\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Fill in the image to deploy:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"otomi/nodejs-helloworld\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Fill in the tag of the image to deploy:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"v1.2.13\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubecfg",src:a(9653).Z,width:"3118",height:"2846"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note: When creating a Function as a Service workload, the Min Instances will by default be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Scale to Zero"),".")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the values. Here you can add more values supported by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-charts"},"otomi-charts")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubecfg",src:a(1049).Z,width:"3116",height:"1730"})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,r.kt)("p",null,"Now click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Changes")),(0,r.kt)("p",null,"After a few minutes, Otomi will have created all the needed ArgoCD resources to deploy your workload. In the workloads list, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," link of your workload to see the status of your workload."),(0,r.kt)("p",null,"The values of a workload can be changed at any time. Changes will automatically be deployed."),(0,r.kt)("h2",{id:"optionally-publicly-expose-the-service"},"(optionally) Publicly expose the service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the left menu panel under click ",(0,r.kt)("inlineCode",{parentName:"p"},"Services")," then click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Create Service"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the name of the (existing) knative service: ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-ksvc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"Exposure Ingress"),", select ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," and use the default configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy Changes")," (the Deploy Changes button in the left panel will light-up after you click on submit)."))))}d.isMDXComponent=!0},9653:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ksvc-app-2-52fc1cc95fbc88ca2d43bdf3f09f8c9b.png"},1049:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ksvc-app-3-7c9d602462e66749e02f23ecc5390ce7.png"},2231:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ksvc-app-af2d38defa4e7508bec044d21de3a1a5.png"}}]);