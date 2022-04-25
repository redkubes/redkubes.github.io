"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6282],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={slug:"installation/prerequisites",title:"Prerequisites"},s=void 0,u={unversionedId:"inst-prerequisites",id:"inst-prerequisites",title:"Prerequisites",description:"Client binaries",source:"@site/docs/inst-prerequisites.md",sourceDirName:".",slug:"/installation/prerequisites",permalink:"/docs/installation/prerequisites",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/inst-prerequisites.md",tags:[],version:"current",frontMatter:{slug:"installation/prerequisites",title:"Prerequisites"},sidebar:"mainSidebar",previous:{title:"Get started",permalink:"/docs/installation/"},next:{title:"Optional configuration",permalink:"/docs/installation/optional"}},p={},c=[{value:"Client binaries",id:"client-binaries",level:2},{value:"Providers",id:"providers",level:2},{value:"AWS, Azure and Google",id:"aws-azure-and-google",level:3},{value:"Other clouds and on-prem",id:"other-clouds-and-on-prem",level:3},{value:"Kubernetes versions",id:"kubernetes-versions",level:2},{value:"Minimal compute resource requirements",id:"minimal-compute-resource-requirements",level:2},{value:"CNI",id:"cni",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"client-binaries"},"Client binaries"),(0,a.kt)("p",null,"When installing Otomi using the chart, make sure the following client binaries exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"Kubectl")," to access the cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," for helm chart installation of Otomi")),(0,a.kt)("h2",{id:"providers"},"Providers"),(0,a.kt)("h3",{id:"aws-azure-and-google"},"AWS, Azure and Google"),(0,a.kt)("p",null,"Otomi supports 3 cloud provides. The ",(0,a.kt)("inlineCode",{parentName:"p"},"aws"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"azure")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"google")," providers include creating optimized storage classes and optional integration with L7 load balancers (like an ALB in AWS and a Application Gateway in Azure)."),(0,a.kt)("h3",{id:"other-clouds-and-on-prem"},"Other clouds and on-prem"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," provider for all other clouds and when running Kubernetes on your own hardware (including Minikube and Kind on your local machine). The custom provider uses the default available storage classes. The only requirement for using the custom provider is to be able to create a Kubernetes LoadBalancer Service that obtains an external accessible IP."),(0,a.kt)("h2",{id:"kubernetes-versions"},"Kubernetes versions"),(0,a.kt)("p",null,"Otomi currently supports the following Kubernetes versions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.18")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.19")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.20")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.21")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.22"))),(0,a.kt)("p",null,"Support for ",(0,a.kt)("inlineCode",{parentName:"p"},"1.23")," is coming soon."),(0,a.kt)("h2",{id:"minimal-compute-resource-requirements"},"Minimal compute resource requirements"),(0,a.kt)("p",null,"Otomi requires a node pool with at least ",(0,a.kt)("strong",{parentName:"p"},"6 vCPU")," threads and ",(0,a.kt)("strong",{parentName:"p"},"8GiB+ RAM"),". Note that this is the requirements for a minimal (default) install. When activating more apps, you'll probably need more resources."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"ATTENTION")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The minimal resource requirement to run Otomi is based on running Core Apps only! The core apps provide an advanced ingress architecture based on Nginx, Istio, Keycloak, Oaut2 Proxy and Certmanager. Activating optional apps will require more compute resources. We advise to have a node pool available with 12 vCPU and 36 GiB memory."))),(0,a.kt)("h2",{id:"cni"},"CNI"),(0,a.kt)("p",null,"To use the network policies feature in Otomi, make sure to install the ",(0,a.kt)("a",{parentName:"p",href:"https://www.tigera.io/project-calico/"},"Calico")," CNI or any other CNI that supports Kubernetes network polices."))}m.isMDXComponent=!0}}]);