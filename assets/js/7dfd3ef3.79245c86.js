"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={slug:"lab-19",title:"Configuring network policies",sidebar_label:"Configure network policies"},l=void 0,a={unversionedId:"for-devs/get-started/lab-19",id:"for-devs/get-started/lab-19",title:"Configuring network policies",description:"In some cases you want to explicitly allow access to your application. This can be done by creating network policies. Otomi supports 2 types of network policies:",source:"@site/docs/for-devs/get-started/lab-19.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-19",permalink:"/docs/for-devs/get-started/lab-19",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-19.md",tags:[],version:"current",frontMatter:{slug:"lab-19",title:"Configuring network policies",sidebar_label:"Configure network policies"},sidebar:"mainSidebar",previous:{title:"Expose services",permalink:"/docs/for-devs/get-started/lab-18"},next:{title:"View container logs",permalink:"/docs/for-devs/get-started/lab-20"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"configuring network policies for internal ingress",id:"configuring-network-policies-for-internal-ingress",level:2},{value:"Configuring network policies for external egress",id:"configuring-network-policies-for-external-egress",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In some cases you want to explicitly allow access to your application. This can be done by creating network policies. Otomi supports 2 types of network policies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Policies for ingress traffic inside the cluster"),(0,i.kt)("li",{parentName:"ul"},"Policies for egress traffic to go outside of the cluster (to access external FQDNs)")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you can configure network policies, first make sure to add the  ",(0,i.kt)("inlineCode",{parentName:"p"},"otomi.io/app: <service name>")," label to all pods belonging to the service."),(0,i.kt)("h2",{id:"configuring-network-policies-for-internal-ingress"},"configuring network policies for internal ingress"),(0,i.kt)("p",null,"The internal ingress network policies alllow you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deny all traffic to your application"),(0,i.kt)("li",{parentName:"ul"},"Allow selected applications running on the cluster to access your application")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Deny all")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow all")," we don't need to explain right?"),(0,i.kt)("p",null,"To allow other applications running on the cluster to access your application, do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Register the Kubernetes ClusterIP service of your app as a Service in Otomi. If no public ingress is required, then just use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster")," ingress option")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress traffic inside the cluster")," block in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Network policies")," section of the Service, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow selected"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the team name and the service name (a service also registered in Otomi)"))),(0,i.kt)("p",null,"In the example below, you are part of the team backend and you would like to allow the service frontend running in team frontend to be able to access your service:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"harbor-projects",src:n(9611).Z,width:"2202",height:"1296"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Submit")," and then ",(0,i.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))),(0,i.kt)("h2",{id:"configuring-network-policies-for-external-egress"},"Configuring network policies for external egress"),(0,i.kt)("p",null,"The external egress policies allow you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allow your application to access resources outside of the cluster")),(0,i.kt)("p",null,"By default this is not allowed."),(0,i.kt)("p",null,"To allow your application to access resources outside of the cluster, do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"External egress filtering")," block in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Network policies")," section of the Service, click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Add item")),(0,i.kt)("li",{parentName:"ul"},"Add the Fully Qualified Domain Name (FQDN) or the IP address of the resource your application needs to access"),(0,i.kt)("li",{parentName:"ul"},"Add the port number"),(0,i.kt)("li",{parentName:"ul"},"Select the protocol")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"harbor-projects",src:n(5909).Z,width:"2184",height:"1364"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Submit")," and then ",(0,i.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))))}u.isMDXComponent=!0},5909:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-netpols-2-3991453a8cf2e72d79bc21f16b56c2f3.png"},9611:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-netpols-49314dcd47c7f58d174bc6adf6c2de9e.png"}}]);