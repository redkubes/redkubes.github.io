"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={slug:"lab-22",title:"Using custom metrics",sidebar_label:"Using custom metrics"},i=void 0,s={unversionedId:"for-devs/get-started/lab-22",id:"for-devs/get-started/lab-22",title:"Using custom metrics",description:"Prerequisite: For this lab, Prometheus and Grafana need to be activated.",source:"@site/docs/for-devs/get-started/lab-22.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-22",permalink:"/docs/for-devs/get-started/lab-22",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-22.md",tags:[],version:"current",frontMatter:{slug:"lab-22",title:"Using custom metrics",sidebar_label:"Using custom metrics"},sidebar:"mainSidebar",previous:{title:"View container metrics",permalink:"/docs/for-devs/get-started/lab-21"},next:{title:"Monitor services",permalink:"/docs/for-devs/get-started/lab-23"}},c={},l=[{value:"What are custom metrics",id:"what-are-custom-metrics",level:2},{value:"Deploy your container",id:"deploy-your-container",level:2},{value:"Configure a Grafana dashboard",id:"configure-a-grafana-dashboard",level:2}],m={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Prerequisite: For this lab, Prometheus and Grafana need to be activated.")),(0,a.kt)("h2",{id:"what-are-custom-metrics"},"What are custom metrics"),(0,a.kt)("p",null,"Prometheus will collect all kind of standard container metrics like CPU and memory usage, but no (custom) business or customer metrics like the number of customers who logged into your app each hour."),(0,a.kt)("p",null,"To be able to collect custom metrics you will need to expose this data in your code. This is called instrumentation of code and can include annotating the code with metadata, or adding in logic to calculate and expose data."),(0,a.kt)("p",null,"Instrumenting code means you write code to expose information about the technical, business, and customer context. This information can then be collected and analyzed using Prometheus and Grafana."),(0,a.kt)("p",null,"In this guide we will not dive into the way how to instrument your code. We will assume you have a container that exposes custom metrics and will show how the custom metrics can be collected and analysed."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In this guide we assume that otomi is configured for multi-tenancy and that each Team in Otomi is provided with a dedicated Prometheus instance that will be used for collecting custom metrics only.")),(0,a.kt)("h2",{id:"deploy-your-container"},"Deploy your container"),(0,a.kt)("p",null,"For this lab we'll use a prometheus-dummy-exporter container from Google"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now go to your team's Git repo for ArgoCD ",(0,a.kt)("inlineCode",{parentName:"p"},"(otomi/team-<name>-argocd)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a new file in the repo called custom-metrics.yaml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Add the following contents to the file:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: custom-metrics\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: custom-metrics\n  template:\n    metadata:\n      labels:\n        app: custom-metrics\n    spec:\n      containers:\n        - name: custom-metrics\n          image: us-docker.pkg.dev/google-samples/containers/gke/prometheus-dummy-exporter:v0.2.0\n          command: [\"./prometheus-dummy-exporter\"]\n          args:\n          - --metric-name=custom_prometheus\n          - --metric-value=40\n          - --port=8080\n          resources:\n            limits:\n              memory: '128Mi'\n              cpu: '200m'\n            requests:\n              memory: '64Mi'\n              cpu: '100m'\n          securityContext:\n            runAsUser: 1001\n          ports:\n            - name: metrics\n              containerPort: 8080\n              protocol: TCP\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: custom-metrics\nspec:\n  selector:\n    app: custom-metrics\n  ports:\n    - name: metrics\n      port: 8080\n      targetPort: 8080\n      protocol: TCP\n---\napiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: custom-metrics\n  labels:\n    app: custom-metrics\n    prometheus: team-dev\nspec:\n  namespaceSelector:\n    matchNames:\n    - team-dev\n  selector:\n    matchLabels:\n      app: custom-metrics\n  endpoints:\n  - port: metrics\n    path: /metrics\n")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," has a selector ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus: team-dev"),". This is required to make sure the metrics are only collected by the team's private Prometheus instance."),(0,a.kt)("h2",{id:"configure-a-grafana-dashboard"},"Configure a Grafana dashboard"),(0,a.kt)("p",null,"Configure a Grafana dashboard to analyse the custom metrics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open Grafana in the Team's apps"),(0,a.kt)("li",{parentName:"ul"},"Go to the Grafana dashboard homepage"),(0,a.kt)("li",{parentName:"ul"},"In the left-side navigation pane, choose + > Dashboard"),(0,a.kt)("li",{parentName:"ul"},"On the New dashboard page, click Add new panel"),(0,a.kt)("li",{parentName:"ul"},"On the New dashboard / Edit Panel"),(0,a.kt)("li",{parentName:"ul"},"In the A collapsible section, select a metric from the Metrics drop-down list. In our example we use the ",(0,a.kt)("inlineCode",{parentName:"li"},"go_gc_duration_second_count_")," metric")),(0,a.kt)("p",null,"You should now see something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Team apps",src:n(9330).Z,width:"2198",height:"880"})))}u.isMDXComponent=!0},9330:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/new-dashboard-f2031bce23474947c675effb6d247445.png"}}]);