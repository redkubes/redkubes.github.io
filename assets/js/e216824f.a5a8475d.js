"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const l={slug:"prerequisites",title:"Prerequisites",sidebar_label:"Prerequisites"},a=void 0,o={unversionedId:"get-started/prerequisites",id:"get-started/prerequisites",title:"Prerequisites",description:"Client binaries",source:"@site/docs/get-started/prerequisites.md",sourceDirName:"get-started",slug:"/get-started/prerequisites",permalink:"/docs/get-started/prerequisites",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/prerequisites.md",tags:[],version:"current",frontMatter:{slug:"prerequisites",title:"Prerequisites",sidebar_label:"Prerequisites"},sidebar:"mainSidebar",previous:{title:"Promotions",permalink:"/docs/get-started/promotions"},next:{title:"Overview",permalink:"/docs/get-started/installation/overview"}},s={},u=[{value:"Client binaries",id:"client-binaries",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Versions",id:"versions",level:3},{value:"Minimal compute resource requirements",id:"minimal-compute-resource-requirements",level:3},{value:"CNI",id:"cni",level:3},{value:"CSI",id:"csi",level:3},{value:"Supported Providers",id:"supported-providers",level:2},{value:"Azure (AKS)",id:"azure-aks",level:3},{value:"Amazon Web Services (EKS)",id:"amazon-web-services-eks",level:3},{value:"Google Cloud Platform (GKE)",id:"google-cloud-platform-gke",level:3},{value:"Digital Ocean",id:"digital-ocean",level:3},{value:"OVH cloud",id:"ovh-cloud",level:3},{value:"Linode Kubernetes Engine (LKE)",id:"linode-kubernetes-engine-lke",level:3},{value:"Vultr (VKE)",id:"vultr-vke",level:3},{value:"Civo",id:"civo",level:3},{value:"All others",id:"all-others",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"client-binaries"},"Client binaries"),(0,i.kt)("p",null,"When installing Otomi using the chart, make sure the following client binaries exist:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubectl")," to access the cluster"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," for helm chart installation of Otomi")),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("p",null,"Otomi requires a (Vanilla) Kubernetes cluster."),(0,i.kt)("h3",{id:"versions"},"Versions"),(0,i.kt)("p",null,"Otomi currently supports the following Kubernetes versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1.25")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1.26")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1.27"))),(0,i.kt)("h3",{id:"minimal-compute-resource-requirements"},"Minimal compute resource requirements"),(0,i.kt)("p",null,"Otomi requires a node pool with at least ",(0,i.kt)("strong",{parentName:"p"},"12 vCPU")," and ",(0,i.kt)("strong",{parentName:"p"},"12 GiB RAM"),". Note that this is the requirements for a minimal install. When activating more apps, you'll probably need more resources."),(0,i.kt)("h3",{id:"cni"},"CNI"),(0,i.kt)("p",null,"To use the network policies feature in Otomi, make sure to install the ",(0,i.kt)("a",{parentName:"p",href:"https://www.tigera.io/project-calico/"},"Calico")," CNI or any other CNI that supports Kubernetes network polices."),(0,i.kt)("h3",{id:"csi"},"CSI"),(0,i.kt)("p",null,"Install a CSI driver for exposing block and file storage systems to containerized workloads."),(0,i.kt)("h2",{id:"supported-providers"},"Supported Providers"),(0,i.kt)("h3",{id:"azure-aks"},"Azure (AKS)"),(0,i.kt)("p",null,"To install Otomi on a AKS cluster in Azure, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"azure")," provider. The ",(0,i.kt)("inlineCode",{parentName:"p"},"azure")," provider includes creating optimized storage classes and optional integration with the a Application Gateway Ingress Controller add-on."),(0,i.kt)("h3",{id:"amazon-web-services-eks"},"Amazon Web Services (EKS)"),(0,i.kt)("p",null,"To install Otomi on a EKS cluster in AWS, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," provider."),(0,i.kt)("h3",{id:"google-cloud-platform-gke"},"Google Cloud Platform (GKE)"),(0,i.kt)("p",null,"To install Otomi on a GKE cluster in GCP, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"google")," provider."),(0,i.kt)("h3",{id:"digital-ocean"},"Digital Ocean"),(0,i.kt)("p",null,"To install Otomi on a Kubernetes cluster in Digital Ocean, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"digitalocean")," provider. Otomi is also available in the Digital Ocean ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.digitalocean.com/apps/otomi?refcode=476bfcac9ec9&action=deploy"},"marketplace"),"."),(0,i.kt)("h3",{id:"ovh-cloud"},"OVH cloud"),(0,i.kt)("p",null,"To install Otomi on a OVHcloud ",(0,i.kt)("a",{parentName:"p",href:"https://www.ovhcloud.com/en-gb/public-cloud/kubernetes/"},"Managed Kubernetes Service"),", use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ovh")," provider."),(0,i.kt)("h3",{id:"linode-kubernetes-engine-lke"},"Linode Kubernetes Engine (LKE)"),(0,i.kt)("p",null,"To install Otomi on a ",(0,i.kt)("a",{parentName:"p",href:"https://www.linode.com/products/kubernetes/"},"Linode Kubernetes Engine")," cluster, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"linode")," provider."),(0,i.kt)("h3",{id:"vultr-vke"},"Vultr (VKE)"),(0,i.kt)("p",null,"To install Otomi on a ",(0,i.kt)("a",{parentName:"p",href:"https://www.vultr.com/docs/vultr-kubernetes-engine/"},"Vultr Kubernetes Engine (VKE)")," cluster, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"vultr")," provider."),(0,i.kt)("h3",{id:"civo"},"Civo"),(0,i.kt)("p",null,"To install Otomi on a ",(0,i.kt)("a",{parentName:"p",href:"https://www.civo.com/kubernetes"},"Civo K3s")," cluster, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"civo")," provider."),(0,i.kt)("p",null,"Otomi on CIVO requires at least:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A node pool with ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," Large Standard nodes (4 CPU Cores and 8 GB RAM)"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes version ",(0,i.kt)("inlineCode",{parentName:"li"},"1.26")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"1.27"))),(0,i.kt)("p",null,"Otomi installs and configures Nginx as a default ingress controller. When launching from the marketplace, make sure to unselect the default Traefik v2 (NodePort)."),(0,i.kt)("h3",{id:"all-others"},"All others"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," provider for all other clouds, and when running Kubernetes on your own hardware. The custom provider uses the default available storage classes. The only requirement for using the custom provider is to be able to create a Kubernetes LoadBalancer Service that can obtain an external accessible IP."))}c.isMDXComponent=!0}}]);