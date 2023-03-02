"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=s,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const i={slug:"installation",title:"Known Issues: Installation",sidebar_label:"Installation"},o=void 0,a={unversionedId:"for-ops/known-issues/installation",id:"for-ops/known-issues/installation",title:"Known Issues: Installation",description:"Otomi can be installed on any Kubernetes cluster. But there are always infrastructure specifics that can impact the installation of Otomi.",source:"@site/docs/for-ops/known-issues/installation.md",sourceDirName:"for-ops/known-issues",slug:"/for-ops/known-issues/installation",permalink:"/docs/for-ops/known-issues/installation",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/known-issues/installation.md",tags:[],version:"current",frontMatter:{slug:"installation",title:"Known Issues: Installation",sidebar_label:"Installation"},sidebar:"mainSidebar",previous:{title:"Istio",permalink:"/docs/for-ops/known-issues/istio"},next:{title:"Loki",permalink:"/docs/for-ops/known-issues/loki"}},l={},u=[{value:"Metrics server with untrusted Kube API certificates",id:"metrics-server-with-untrusted-kube-api-certificates",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Otomi can be installed on any Kubernetes cluster. But there are always infrastructure specifics that can impact the installation of Otomi."),(0,s.kt)("h3",{id:"metrics-server-with-untrusted-kube-api-certificates"},"Metrics server with untrusted Kube API certificates"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Problem")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Metrics server will not start when installing on a K8s cluster (like on Minikube or a cluster created with Kubeadm) with Kube API using self-signed certificates\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Solution")," "),(0,s.kt)("p",null,"Add extra args to the metrics-service by using the following values when installing Otomi with Helm chart:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"apps:\n  metrics-server:\n    enabled: true\n    _rawValues:\n      extraArgs:\n        kubelet-preferred-address-types: InternalIP\n        kubelet-insecure-tls: true\n")))}p.isMDXComponent=!0}}]);