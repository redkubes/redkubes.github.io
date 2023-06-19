"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={slug:"serverless",title:"Serverless",sidebar_label:"Serverless"},o=void 0,s={unversionedId:"use-cases/serverless",id:"use-cases/serverless",title:"Serverless",description:"Introduction",source:"@site/product/use-cases/serverless.md",sourceDirName:"use-cases",slug:"/use-cases/serverless",permalink:"/product/use-cases/serverless",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/serverless.md",tags:[],version:"current",lastUpdatedBy:"Kadu Di\xf3genes",lastUpdatedAt:1687189051,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{slug:"serverless",title:"Serverless",sidebar_label:"Serverless"},sidebar:"mainSidebar",previous:{title:"CI/CD",permalink:"/product/use-cases/ci-cd"},next:{title:"EULA",permalink:"/product/eula/v1"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Creating Knative services",id:"creating-knative-services",level:2},{value:"Migrating Lambda functions to Knative",id:"migrating-lambda-functions-to-knative",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Knative is a platform that provides tools for deploying, running, and managing ",(0,a.kt)("strong",{parentName:"p"},"serverless")," cloud-native applications to Kubernetes. Knative brings together the scalability of Kubernetes and ease of development of serverless applications, giving you more control over the resources, and allowing you to focus on the application without worrying about the infrastructure."),(0,a.kt)("p",null,"Otomi includes Knative Serving as an optional tool. Otomi installs and configures the correct version of Knative based on the used Kubernetes version and integrates Knative into the Otomi ingress architecture. All you need to do after activating Knative is to deploy a Knative service."),(0,a.kt)("h2",{id:"creating-knative-services"},"Creating Knative services"),(0,a.kt)("p",null,"There are 2 ways to deploy Knative serverless workloads in Otomi:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a raw Knative service manifest and add it to the teams ",(0,a.kt)("inlineCode",{parentName:"li"},"-argocd")," repository"),(0,a.kt)("li",{parentName:"ol"},"Create a workload using a BYO helm chart")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Otomi will soon provide Helm chart templates to create a Kubernetes Deployment (with HPA), a Kubernetes StatefullSet, a Kubernetes CronJob and/or a Knative Service. In this case you can use the wizard in Otomi to configure your values and Otomi will use the chart template and the values to automatically deploy the desired objects.")),(0,a.kt)("h2",{id:"migrating-lambda-functions-to-knative"},"Migrating Lambda functions to Knative"),(0,a.kt)("p",null,"A great way to migrate AWS Lambda functions to Kubernetes/Knative is to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/triggermesh/knative-lambda-runtime"},"Triggermesh KLR"),". KLR (pronounced clear) are Tekton Tasks that can be used to run an AWS Lambda function in a Kubernetes cluster installed with Knative."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"serverless",src:r(4785).Z,width:"1749",height:"690"})),(0,a.kt)("p",null,"Steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Activate Knative and ArgoCD in Otomi"),(0,a.kt)("li",{parentName:"ol"},"Create a Dockerfile, extracting the from the desired ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/triggermesh/knative-lambda-runtime#run-in-docker"},"runtime")),(0,a.kt)("li",{parentName:"ol"},"Build and push the image (to the private repository in Harbor)"),(0,a.kt)("li",{parentName:"ol"},"Create a Knative service"),(0,a.kt)("li",{parentName:"ol"},"Expose the service publicly using Otomi")))}p.isMDXComponent=!0},4785:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/knative-59f3112a78631dce4622f1b3ebdf0b01.png"}}]);