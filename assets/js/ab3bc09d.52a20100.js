"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8035:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"lab-29",title:"Explore the Catalog",sidebar_label:"Explore the Catalog"},i=void 0,l={unversionedId:"get-started/labs/lab-29",id:"get-started/labs/lab-29",title:"Explore the Catalog",description:"In this lab we are going to explore the Catalog in Otomi. The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by Otomi to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team.",source:"@site/docs/get-started/labs/lab-29.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-29",permalink:"/docs/get-started/labs/lab-29",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-29.md",tags:[],version:"current",frontMatter:{slug:"lab-29",title:"Explore the Catalog",sidebar_label:"Explore the Catalog"},sidebar:"mainSidebar",previous:{title:"Using Argo CD",permalink:"/docs/get-started/labs/deploy-workloads-argo-cd-otomi-kubernetes"},next:{title:"Create workloads",permalink:"/docs/get-started/labs/lab-13"}},s={},c=[{value:"About Otomi Catalog quick starts",id:"about-otomi-catalog-quick-starts",level:2},{value:"k8s-deployment",id:"k8s-deployment",level:3},{value:"k8s-deployment-otel",id:"k8s-deployment-otel",level:3},{value:"k8s-deployments-canary",id:"k8s-deployments-canary",level:3},{value:"knative-service",id:"knative-service",level:3},{value:"Otomi quick start for creating a PostgreSQL cluster",id:"otomi-quick-start-for-creating-a-postgresql-cluster",level:3},{value:"Otomi quick start for creating a Redis master-replica cluster",id:"otomi-quick-start-for-creating-a-redis-master-replica-cluster",level:3},{value:"Using the Catalog",id:"using-the-catalog",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this lab we are going to explore the Catalog in Otomi. The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by Otomi to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team."),(0,r.kt)("h2",{id:"about-otomi-catalog-quick-starts"},"About Otomi Catalog quick starts"),(0,r.kt)("p",null,"The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:"),(0,r.kt)("h3",{id:"k8s-deployment"},"k8s-deployment"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-quickstart-k8s-deployment")," Helm chart can be used to create a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," (to deploy a single image), a ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),". Optionally a ",(0,r.kt)("inlineCode",{parentName:"p"},"HorizontalPodAutoscaler"),", a Prometheus ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Configmap")," can be created."),(0,r.kt)("h3",{id:"k8s-deployment-otel"},"k8s-deployment-otel"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-quickstart-k8s-deployment-otel")," Helm chart can be used to create a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," (to deploy a single image), a ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),", an ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenTelemetryCollector")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"Instrumentation"),". Optionally a ",(0,r.kt)("inlineCode",{parentName:"p"},"HorizontalPodAutoscaler"),", a Prometheus ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Configmap")," can be created."),(0,r.kt)("h3",{id:"k8s-deployments-canary"},"k8s-deployments-canary"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-quickstart-k8s-deployments-canary")," Helm chart can be used to create 2 Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployments")," (to deploy 2 versions of an image), a ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),". Optionally a ",(0,r.kt)("inlineCode",{parentName:"p"},"HorizontalPodAutoscaler"),", a Prometheus ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Configmap")," (for each version) can be created."),(0,r.kt)("h3",{id:"knative-service"},"knative-service"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-quickstart-knative-service")," Helm chart can be used to create a Knative ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," (to deploy a single image), a ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and a  ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),". Optionally a Prometheus ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," can be created."),(0,r.kt)("h3",{id:"otomi-quick-start-for-creating-a-postgresql-cluster"},"Otomi quick start for creating a PostgreSQL cluster"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-quickstart-postgresql")," Helm chart can be used to create a cloudnativepg PostgreSQL ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster"),". Optionally a Prometheus ",(0,r.kt)("inlineCode",{parentName:"p"},"PodMonitor")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Configmap")," (for adding a postgresql dashboard to Grafana) can be created."),(0,r.kt)("h3",{id:"otomi-quick-start-for-creating-a-redis-master-replica-cluster"},"Otomi quick start for creating a Redis master-replica cluster"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"otomi-quickstart-redis")," Helm chart can be used to create a Redis master-replica cluster."),(0,r.kt)("h2",{id:"using-the-catalog"},"Using the Catalog"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Catalog")," in the left menu"),(0,r.kt)("li",{parentName:"ol"},"You will now see all the templates that are available to use")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"catalog",src:a(2523).Z,width:"2832",height:"1910"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"k8s-deployment")," template")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"catalog",src:a(5017).Z,width:"3514",height:"2164"})),(0,r.kt)("p",null,"In the Info tab you'll see some information about the Chart like the version and additional instructions."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Values")," tab")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"catalog",src:a(884).Z,width:"3522",height:"2130"})),(0,r.kt)("p",null,"From here you can create a Workload using the Catalog template by adding a name and changing the values. Go to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/get-started/labs/lab-13"},"next lab")," to create a workload."))}p.isMDXComponent=!0},5017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-2-63f198f20f4510b16a2ea3d7eb347ddc.png"},884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-3-800de29e40f3fb583e5e8815d64601a4.png"},2523:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/catalog-4a0aabdcc388d5532a137c903234869b.png"}}]);