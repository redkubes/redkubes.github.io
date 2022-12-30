"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={slug:"faq/",title:"FAQ"},r=void 0,l={unversionedId:"faq",id:"faq",title:"FAQ",description:"More about Otomi",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq/",permalink:"/docs/faq/",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/faq.md",tags:[],version:"current",frontMatter:{slug:"faq/",title:"FAQ"},sidebar:"mainSidebar",previous:{title:"Architecture",permalink:"/docs/get-started/architecture"},next:{title:"Overview",permalink:"/docs/for-ops/console/overview"}},s={},u=[{value:"More about Otomi",id:"more-about-otomi",level:2},{value:"Setup and Installation",id:"setup-and-installation",level:2},{value:"Other",id:"other",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"more-about-otomi"},"More about Otomi"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is Otomi a lightweight version of Rancher or OpenShift"),(0,a.kt)("p",null,"We understand that solutions like Rancher and OpenShift all propagate that their products ship with integrated tools, but we take the term integrated a little more serious. Within Otomi, integrated means applications are pre-configured with Otomi default configuration values, applications have been adjusted to comply with all Otomi security policies, and applications have been made user-aware (using OIDC) and multi-tenant."),(0,a.kt)("p",null,"Otomi can NOT be used to provision and manage Kubernetes clusters. Otomi is an application stack on top of Kubernetes that can be installed with one Helm chart, and offers a complete suite of integrated and pre-configured applications combined with automation and developer self-service.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is Otomi some kind of Kubeapps"),(0,a.kt)("p",null,"We can imagine when looking at the list of all pre-configured and ready-to-use apps, you might get the impression that Otomi is some kind of application catalog for Kubernetes. But the opposite is true. When you install Otomi, you will get all of these apps and they\u2019re already configured for you, and they will work ou-of-the-box. You can then use the web UI or values repository to adjust the configuration of these apps based on your own requirements.")),(0,a.kt)("h2",{id:"setup-and-installation"},"Setup and Installation"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What are the minimal requirements to install Otomi?"),(0,a.kt)("p",null,"Otomi requires a running Kubernetes cluster of version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.18")," up to ",(0,a.kt)("inlineCode",{parentName:"p"},"1.23")," using a Node pool with at least ",(0,a.kt)("inlineCode",{parentName:"p"},"6 vCPU")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"8 GiB memory"),", but more is recommended. When using the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," provider (when installing Kubernetes on a not supported provider), make sure Otomi can create a K8s LoadBalancer Service that is accessible from your machine (but not using 127.0.0.1).")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is the Quickstart the only way to install Otomi?"),(0,a.kt)("p",null,"No. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/quickstart"},"otomi-quickstart")," uses Terraform to provision a three-node Kubernetes cluster in AWS, Azure, or GCP and installs Otomi. You can also provision a Kubernetes cluster yourself and install Otomi using the Helm chart. Check ",(0,a.kt)("a",{parentName:"p",href:"/docs/get-started/installation#install-otomi-with-helm"},"chart-install")," for more details.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Where can I find all possible configuration options for Otomi?"),(0,a.kt)("p",null,"When installing Otomi with the helm chart you can find its ",(0,a.kt)("inlineCode",{parentName:"p"},"values-schema.json")," inside, which contains all the possible configuration parameters. It is generated from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml"},"otomi-core/values-schema.yaml"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Can Otomi be deployed on an existing cluster?"),(0,a.kt)("p",null,"Yes, Otomi can be installed on any cluster as long as there are no namespaces that are also created by Otomi.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Can I install Otomi without using a DNS zone?"),(0,a.kt)("p",null,"Yes, using a DNS zone for name resolution is optional. When installing Otomi with minimal values, nip.io is used for name resolution pointing to the public IP of the cloud load balancer.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I don't have an external IdP like Azure AD. Can I still install Otomi?"),(0,a.kt)("p",null,"Yes, using an external IdP like Azure AD is optional. When installing Otomi with minimal values (no optional configuration), Otomi will configure Keycloak as an IdP. You can create users in Keycloak and assign them to the pre-configured roles.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Can I install Otomi on my laptop using Minikube?"),(0,a.kt)("p",null,"Yes. You can use the Otomi ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," provider to install Otomi on Kubernetes running on your own hardware, including Minikube. Note that Otomi needs to be able to create a Kubernetes LoadBalancer service and the IP needs to be accessible for pods running in the cluster and for your local browser. ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," can not be used, so running minikube with the Docker provider is not supported. Use the ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/drivers/hyperkit/"},"Hyperkit driver")," instead.")),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Do you provide commercial support?"),(0,a.kt)("p",null,"Yes, you can contact us for commercial support. ",(0,a.kt)("a",{parentName:"p",href:"https://redkubes.com"},"Red Kubes")," is the company behind Otomi.")))}p.isMDXComponent=!0}}]);