"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7015],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return o?n.createElement(h,r(r({ref:t},d),{},{components:o})):n.createElement(h,r({ref:t},d))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3918:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const i={slug:"introduction",title:"Why Otomi",sidebar_label:"Why Otomi"},r=void 0,s={unversionedId:"introduction",id:"introduction",title:"Why Otomi",description:"The vision",source:"@site/product/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/product/introduction",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/introduction.md",tags:[],version:"current",lastUpdatedBy:"jeho",lastUpdatedAt:1700733642,formattedLastUpdatedAt:"Nov 23, 2023",frontMatter:{slug:"introduction",title:"Why Otomi",sidebar_label:"Why Otomi"},sidebar:"mainSidebar",next:{title:"Otomi Projects",permalink:"/product/architecture"}},l={},u=[{value:"The vision",id:"the-vision",level:2},{value:"What is Otomi?",id:"what-is-otomi",level:2},{value:"What is the difference between an IDP and a PaaS?",id:"what-is-the-difference-between-an-idp-and-a-paas",level:3},{value:"When to build an IDP or use a PaaS?",id:"when-to-build-an-idp-or-use-a-paas",level:3},{value:"Otomi for developers",id:"otomi-for-developers",level:2},{value:"Removing the complexity",id:"removing-the-complexity",level:3},{value:"All the tools you need",id:"all-the-tools-you-need",level:3},{value:"Best practices",id:"best-practices",level:3},{value:"Self-Serving",id:"self-serving",level:3},{value:"Otomi for Platform Teams",id:"otomi-for-platform-teams",level:2},{value:"Avoid Cloud Lock-In",id:"avoid-cloud-lock-in",level:3},{value:"Make Developers Self Serving",id:"make-developers-self-serving",level:3},{value:"Lower The Operational Burden",id:"lower-the-operational-burden",level:3},{value:"Prevent Kubernetes Cluster Sprawl",id:"prevent-kubernetes-cluster-sprawl",level:3}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-vision"},"The vision"),(0,a.kt)("p",null,"Kubernetes has been called The Operating System of the Cloud. In our opinion, Kubernetes is only the Kernel of the Operating System of the Cloud. The Operating System (or Kubernetes-based Platform) is something you'll need to build yourself. And this is what organizations are now doing when using Kubernetes. All reinventing the wheel."),(0,a.kt)("p",null,"Building a Kubernetes-based platform requires a huge investment and requires skilled engineers. But why would you invest in building and maintaining a custom platform? Why can't you just install everyting you need to turn Kubernetes into a full platform, just like you can download a Linux distribution? "),(0,a.kt)("p",null,"This is what we indended when we created Otomi. Any infrastructure, any K8s, one install, all the tools you need in an integrated and automated way, easy self-service and everything as code."),(0,a.kt)("h2",{id:"what-is-otomi"},"What is Otomi?"),(0,a.kt)("p",null,"Otomi is a self-hosted PaaS and adds developer- and operations-centric tools, automation and self-service on top of Kubernetes offering a multi and hybrid platform experience out-of-the-box. Otomi is placed in the CNCF landscape under the ",(0,a.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/guide#platform--paas-container-service"},"PaaS/Container Service")," section. Otomi attempts to connect many of the technologies found in the CNCF landscape in a way to provide direct value. No more re-inventing the wheel when building and maintaining your own Kubernetes based platform or bespoke stack."),(0,a.kt)("h3",{id:"what-is-the-difference-between-an-idp-and-a-paas"},"What is the difference between an IDP and a PaaS?"),(0,a.kt)("p",null,"An Internal Developer Platform (IDP) consists of many different technologies, glued together to lowers cognitive load on developers without abstracting away context and underlying technologies. An IDP is always custom built."),(0,a.kt)("p",null,"A PaaS for Kubernetes also lowers cognitive load on developers, but abstracts away most of the underlying technologies. Unlike an IDP, a PaaS can be used almost instantly, just like downloading and using your favourite Linux Distribution. Organizations that use a PaaS instead of building an IDP can enjoy lower upfront costs and huge time savings."),(0,a.kt)("h3",{id:"when-to-build-an-idp-or-use-a-paas"},"When to build an IDP or use a PaaS?"),(0,a.kt)("p",null,"Because building an IDP requires a large upfront investment, it\u2019s mostly suitable for large enterprises. For smaller organizations a PaaS can sometimes be far more efficient than building a custom IDP in-house."),(0,a.kt)("h2",{id:"otomi-for-developers"},"Otomi for developers"),(0,a.kt)("p",null,"Otomi let's developers focus on their application, not on writing Kubernetes manifests! Kubernetes is great for running containers, but it's complex. Wouldn't it be awesome if you didn't need to worry about understanding Kubernetes objects and writing YAML manifests?"),(0,a.kt)("p",null,"This is how Otomi helps developers:"),(0,a.kt)("h3",{id:"removing-the-complexity"},"Removing the complexity"),(0,a.kt)("p",null,"As a Developer, you want to focus on your code and don\u2019t be bothered with Kubernetes internals. With Otomi, you can deploy your apps on Kubernetes without needing to understand or learn Kubernetes. Just build your image, push it to a registry in Otomi and use the Web Console to deploy your app in just a couple of minutes. Otomi makes Kubernetes easy!"),(0,a.kt)("h3",{id:"all-the-tools-you-need"},"All the tools you need"),(0,a.kt)("p",null,"Otomi provides developers with all the tools they need. After deploying your app you can directly see all the container logs, metrics, status, policy violations and vulnerabilities. Next to access to al kinds of dashboards, you will also get access to Harbor, Tekton and Argo CD. "),(0,a.kt)("h3",{id:"best-practices"},"Best practices"),(0,a.kt)("p",null,"Otomi offers you the ability to immediately start deploying applications on Kubernetes and configure public exposure. This will give you a jump start to get apps running on Kubernetes. But in time you will probably learn more about Kubernetes and start trying out things yourself. Otomi does not force you to use the Web Console. You can just as easily download the KubeConfig for your team and create and deploy manifests yourself. But Otomi will always force you to adhere to the configured safeguards and best practices."),(0,a.kt)("h3",{id:"self-serving"},"Self-Serving"),(0,a.kt)("p",null,"As a developer, you don\u2019t like to go to the Ops team asking for help. Otomi provides full developer self-service. Developers can spin up new virtual environments, download pull secrets, create Kubernetes secrets, build images from source code, deploy workloads and configure public exposure. And all of these features are accessible through just one Web Console. Now you can deliver code completely autonomously."),(0,a.kt)("h2",{id:"otomi-for-platform-teams"},"Otomi for Platform Teams"),(0,a.kt)("p",null,"If you can\u2019t scale beyond a handful of teams you're going to lose speed. Speed is everything to bring new products and applications to market. No one wants to slow down developers. Empower developers, ensure quality, compliance, and governance, avoid lock-in, and lower the operational burden. These are some of the challenges platform teams have to deal with and where Otomi can help out."),(0,a.kt)("h3",{id:"avoid-cloud-lock-in"},"Avoid Cloud Lock-In"),(0,a.kt)("p",null,"Are you worried that you can\u2019t adopt cloud-native technology without becoming completely reliant on one cloud provider? One way that organizations outsource management for Kubernetes is to use one of the cloud provider\u2019s Kubernetes versions in conjunction with a variety of cloud provider native services. This is often faster than using vanilla Kubernetes and managing integrations and infrastructure in-house, but it also completely locks the organization into the cloud provider and often becomes very expensive."),(0,a.kt)("p",null,"This approach also takes away the flexibility to change cloud providers in the future while increasing the financial risks. With Otomi, you don\u2019t have to lock yourself into any cloud provider or risk rapidly increasing cloud service bills in order to get the fastest possible platform to deploy containerized applications."),(0,a.kt)("h3",{id:"make-developers-self-serving"},"Make Developers Self Serving"),(0,a.kt)("p",null,"Free developers from worrying about the underlying platform setup while still enforcing standards and best practices so they can focus on delivering code. With Otomi, developers can be fully self-serving. They can spin up new namespaces, get access to all the tools they need, build images from source code, create secrets, deploy workloads, configure public exposure, add service monitors, and much more. And all of these features are accessible through just one web UI."),(0,a.kt)("p",null,"Platform administrators have access to all the platform applications. Team administrators can create team spaces for development teams and team members can create multiple namespaces within their team space(s)."),(0,a.kt)("h3",{id:"lower-the-operational-burden"},"Lower The Operational Burden"),(0,a.kt)("p",null,"Choosing the DIY platform engineering approach can be time-consuming and complex. On average, Platform teams need at least 6 months to build an initial setup. And the ongoing maintenance and hardening afterwards can become an operational nightmare. Otomi helps Platform teams to lower the operational burden by taking over the application management of everything running on top of Kubernetes, including the lifecycle management of all the integrated K8s applications."),(0,a.kt)("p",null,"This enables platform teams to focus on another very important aspect: Kubernetes cluster infrastructure management and cloud security. Now you have time to focus on other important aspects instead of building a custom (internal) developer platform solution."),(0,a.kt)("h3",{id:"prevent-kubernetes-cluster-sprawl"},"Prevent Kubernetes Cluster Sprawl"),(0,a.kt)("p",null,"As companies look to further harness the power of cloud-native, they are adopting container technologies at rapid speed, increasing the number of clusters and workloads. As the number of Kubernetes clusters grows, this is creating increased work for Platform teams. When it comes to patching security vulnerabilities or upgrading clusters, teams are doing five times the amount of work."),(0,a.kt)("p",null,"With Otomi you can support (soft) multi-tenancy, allowing multiple development teams to work independently of each other on the same cluster, while sharing all the tools. Now you only have to deploy a single dev or staging cluster to support multiple development teams. This prevents you from Kubernetes cluster sprawl."))}c.isMDXComponent=!0}}]);