"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var i=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=l,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return r?i.createElement(b,a(a({ref:t},c),{},{components:r})):i.createElement(b,a({ref:t},c))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<n;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=r(7462),l=(r(7294),r(3905));const n={slug:"multi-cluster",title:"Multi-cluster observability",sidebar_label:"Multi-cluster observability"},a=void 0,o={unversionedId:"use-cases/multi-cluster",id:"use-cases/multi-cluster",title:"Multi-cluster observability",description:"Introduction",source:"@site/product/use-cases/multi-cluster.md",sourceDirName:"use-cases",slug:"/use-cases/multi-cluster",permalink:"/product/use-cases/multi-cluster",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/multi-cluster.md",tags:[],version:"current",lastUpdatedBy:"jeho",lastUpdatedAt:1700733642,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{slug:"multi-cluster",title:"Multi-cluster observability",sidebar_label:"Multi-cluster observability"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Multi-cluster observability with Otomi",id:"multi-cluster-observability-with-otomi",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Using multiple Kubernetes clusters can have advantages based on your requirements. Some of the benefits of running multiple Kubernetes clusters are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"High availability: When one cluster fails, the other cluster(s) can take the load. Losing one cluster when your applications are appropriately spread across several other clusters is much better than losing a single cluster with everything on it"),(0,l.kt)("li",{parentName:"ul"},"Better end user experience: Splitting workloads can improve performance and reduce latency by providing users with a geographically close environment"),(0,l.kt)("li",{parentName:"ul"},"Separate development and production clusters to reduce the risk of being served beta or non-production code versions")),(0,l.kt)("p",null,"But from a technical perspective, managing multiple Kubernetes clusters is more complex than managing a single cluster. For effective multi-cluster management, a \u201csingle pane of glass\u201d with centralized real-time monitoring, time series comparisons across and within clusters and high availability is essential for teams operating with multiple clusters and multiple providers."),(0,l.kt)("h2",{id:"multi-cluster-observability-with-otomi"},"Multi-cluster observability with Otomi"),(0,l.kt)("p",null,"The following image shows a multi-cluster observability setup using Otomi:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"multi-cluster",src:r(1195).Z,width:"1556",height:"1226"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Aggregation of metrics from workload clusters for Prometheus high availability and single pane of glass"),(0,l.kt)("li",{parentName:"ol"},"Multi-cluster log aggregation"),(0,l.kt)("li",{parentName:"ol"},"Preconfigured multi-cluster dashboards"),(0,l.kt)("li",{parentName:"ol"},"Multi-cluster alerting")),(0,l.kt)("p",null,"This multi-cluster setup can be expanded with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Running Harbor on the management cluster to provide image and chart registries for the workload clusters"),(0,l.kt)("li",{parentName:"ul"},"Replicate workload cluster Git repositories to the management cluster Git repository"),(0,l.kt)("li",{parentName:"ul"},"Deploy multiple application clusters based on a single cluster profile")))}p.isMDXComponent=!0},1195:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/multi-cluster-dd1d21f51c8f0d0623e575b53e84568d.png"}}]);