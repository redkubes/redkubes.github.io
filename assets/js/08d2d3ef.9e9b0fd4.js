"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(b,o(o({ref:t},c),{},{components:a})):r.createElement(b,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5049:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={slug:"lab-23",title:"Monitoring service availability",sidebar_label:"Monitor services"},o=void 0,l={unversionedId:"get-started/labs/lab-23",id:"get-started/labs/lab-23",title:"Monitoring service availability",description:"When your application is deployed, you would of course like to get an alert when you application (service) is not available anymore. To automatically monitor you applications for availability, Otomi automatically configures a prope to monitor your service.",source:"@site/docs/get-started/labs/lab-23.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-23",permalink:"/docs/get-started/labs/lab-23",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-23.md",tags:[],version:"current",frontMatter:{slug:"lab-23",title:"Monitoring service availability",sidebar_label:"Monitor services"},sidebar:"mainSidebar",previous:{title:"Create custom rules",permalink:"/docs/get-started/labs/lab-31"},next:{title:"Configure network policies",permalink:"/docs/get-started/labs/lab-19"}},s={},p=[{value:"Monitor your application for availability",id:"monitor-your-application-for-availability",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When your application is deployed, you would of course like to get an alert when you application (service) is not available anymore. To automatically monitor you applications for availability, Otomi automatically configures a prope to monitor your service."),(0,i.kt)("h2",{id:"monitor-your-application-for-availability"},"Monitor your application for availability"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/get-started/labs/lab-7"},"Create a Service")," for your app in Otomi. The service can have an Exposure ingress of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Prometheus"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kubecfg",src:a(8538).Z,width:"2898",height:"1916"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In Prometheus, Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Status")," and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Targets"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kubecfg",src:a(852).Z,width:"2968",height:"1920"})),(0,i.kt)("p",null,"In the list of targets you will see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"PodMonitor")," endpoints of the ",(0,i.kt)("inlineCode",{parentName:"li"},"istio sidecars")," os the Team Workloads"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Probes")," of all the Team services that are exposed")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"In Prometheus, Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"Alerts"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kubecfg",src:a(7038).Z,width:"2970",height:"880"})),(0,i.kt)("p",null,"In the alerts you will see an (inactive) alert for ",(0,i.kt)("inlineCode",{parentName:"p"},"ProbeFailing"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"State")," of a Servive Probe is ",(0,i.kt)("inlineCode",{parentName:"p"},"Down")," the Prometheus ",(0,i.kt)("inlineCode",{parentName:"p"},"Rule")," for this alert will fire. When alertmanager is enabled, and an alert notification receiver is configured, you will automatically receive an alert when your exposed Service is down."))}u.isMDXComponent=!0},7038:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prometheus-alerts-8b0a876a39c137149412137249531b83.png"},8538:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prometheus-teams-98c9bed1aa25d7d9f7fe76ef8120efa4.png"},852:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/targets-up-cc925a02c4de2f0f97fd9efcfa7e9075.png"}}]);