"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3474],{9982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=a(5893),r=a(1151);const s={slug:"lab-29",title:"Explore the Catalog",sidebar_label:"Explore the Catalog"},n=void 0,i={id:"get-started/labs/lab-29",title:"Explore the Catalog",description:"In this lab we are going to explore the Catalog in Otomi. The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by Otomi to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team.",source:"@site/docs/get-started/labs/lab-29.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-29",permalink:"/docs/get-started/labs/lab-29",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-29.md",tags:[],version:"current",frontMatter:{slug:"lab-29",title:"Explore the Catalog",sidebar_label:"Explore the Catalog"},sidebar:"mainSidebar",previous:{title:"Using Argo CD",permalink:"/docs/get-started/labs/deploy-workloads-argo-cd-otomi-kubernetes"},next:{title:"Create workloads",permalink:"/docs/get-started/labs/lab-13"}},l={},c=[{value:"About Otomi Catalog quick starts",id:"about-otomi-catalog-quick-starts",level:2},{value:"k8s-deployment",id:"k8s-deployment",level:3},{value:"k8s-deployment-otel",id:"k8s-deployment-otel",level:3},{value:"k8s-deployments-canary",id:"k8s-deployments-canary",level:3},{value:"knative-service",id:"knative-service",level:3},{value:"Otomi quick start for creating a PostgreSQL cluster",id:"otomi-quick-start-for-creating-a-postgresql-cluster",level:3},{value:"Otomi quick start for creating a Redis master-replica cluster",id:"otomi-quick-start-for-creating-a-redis-master-replica-cluster",level:3},{value:"Using the Catalog",id:"using-the-catalog",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In this lab we are going to explore the Catalog in Otomi. The Catalog is a library of curated Helm charts to create Kubernetes resources. By default the Catalog contains a set of Helm charts provided by Otomi to get started quickly, but they can also be modified depending on your requirements or be removed from the Catalog. The contents of the Catalog and the RBAC configuration (which Team can use which Helm chart) are managed by the platform administrator. Contact the platform administrator if you would like to add your own charts to use within your Team."}),"\n",(0,o.jsx)(t.h2,{id:"about-otomi-catalog-quick-starts",children:"About Otomi Catalog quick starts"}),"\n",(0,o.jsx)(t.p,{children:"The Catalog contains a set of Helm charts that can be used as quick starts. The following quick starts are available:"}),"\n",(0,o.jsx)(t.h3,{id:"k8s-deployment",children:"k8s-deployment"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"otomi-quickstart-k8s-deployment"})," Helm chart can be used to create a Kubernetes ",(0,o.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,o.jsx)(t.code,{children:"Service"})," and a ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a ",(0,o.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"k8s-deployment-otel",children:"k8s-deployment-otel"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"otomi-quickstart-k8s-deployment-otel"})," Helm chart can be used to create a Kubernetes ",(0,o.jsx)(t.code,{children:"Deployment"})," (to deploy a single image), a ",(0,o.jsx)(t.code,{children:"Service"}),", a ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),", an ",(0,o.jsx)(t.code,{children:"OpenTelemetryCollector"})," and an ",(0,o.jsx)(t.code,{children:"Instrumentation"}),". Optionally a ",(0,o.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"k8s-deployments-canary",children:"k8s-deployments-canary"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"otomi-quickstart-k8s-deployments-canary"})," Helm chart can be used to create 2 Kubernetes ",(0,o.jsx)(t.code,{children:"Deployments"})," (to deploy 2 versions of an image), a ",(0,o.jsx)(t.code,{children:"Service"})," and a ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a ",(0,o.jsx)(t.code,{children:"HorizontalPodAutoscaler"}),", a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," (for each version) can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"knative-service",children:"knative-service"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"otomi-quickstart-knative-service"})," Helm chart can be used to create a Knative ",(0,o.jsx)(t.code,{children:"Service"})," (to deploy a single image), a ",(0,o.jsx)(t.code,{children:"Service"})," and a  ",(0,o.jsx)(t.code,{children:"ServiceAccount"}),". Optionally a Prometheus ",(0,o.jsx)(t.code,{children:"ServiceMonitor"})," can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"otomi-quick-start-for-creating-a-postgresql-cluster",children:"Otomi quick start for creating a PostgreSQL cluster"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"otomi-quickstart-postgresql"})," Helm chart can be used to create a cloudnativepg PostgreSQL ",(0,o.jsx)(t.code,{children:"Cluster"}),". Optionally a Prometheus ",(0,o.jsx)(t.code,{children:"PodMonitor"})," and a ",(0,o.jsx)(t.code,{children:"Configmap"})," (for adding a postgresql dashboard to Grafana) can be created."]}),"\n",(0,o.jsx)(t.h3,{id:"otomi-quick-start-for-creating-a-redis-master-replica-cluster",children:"Otomi quick start for creating a Redis master-replica cluster"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"otomi-quickstart-redis"})," Helm chart can be used to create a Redis master-replica cluster."]}),"\n",(0,o.jsx)(t.h2,{id:"using-the-catalog",children:"Using the Catalog"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Click on ",(0,o.jsx)(t.code,{children:"Catalog"})," in the left menu"]}),"\n",(0,o.jsx)(t.li,{children:"You will now see all the templates that are available to use"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"catalog",src:a(2523).Z+"",width:"2832",height:"1910"})}),"\n",(0,o.jsxs)(t.ol,{start:"3",children:["\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.code,{children:"k8s-deployment"})," template"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"catalog",src:a(5017).Z+"",width:"3514",height:"2164"})}),"\n",(0,o.jsx)(t.p,{children:"In the Info tab you'll see some information about the Chart like the version and additional instructions."}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsxs)(t.li,{children:["Click on the ",(0,o.jsx)(t.code,{children:"Values"})," tab"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"catalog",src:a(884).Z+"",width:"3522",height:"2130"})}),"\n",(0,o.jsxs)(t.p,{children:["From here you can create a Workload using the Catalog template by adding a name and changing the values. Go to the ",(0,o.jsx)(t.a,{href:"/docs/get-started/labs/lab-13",children:"next lab"})," to create a workload."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5017:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/catalog-2-63f198f20f4510b16a2ea3d7eb347ddc.png"},884:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/catalog-3-800de29e40f3fb583e5e8815d64601a4.png"},2523:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/catalog-4a0aabdcc388d5532a137c903234869b.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>n});var o=a(7294);const r={},s=o.createContext(r);function n(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);