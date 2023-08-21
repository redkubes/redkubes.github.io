"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[3120],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=n,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return o?r.createElement(h,i(i({ref:t},d),{},{components:o})):r.createElement(h,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},5282:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(7462),n=(o(7294),o(3905));const a={slug:"ci-cd",title:"CI/CD",sidebar_label:"CI/CD"},i=void 0,s={unversionedId:"use-cases/ci-cd",id:"use-cases/ci-cd",title:"CI/CD",description:"Introduction",source:"@site/product/use-cases/ci-cd.md",sourceDirName:"use-cases",slug:"/use-cases/ci-cd",permalink:"/product/use-cases/ci-cd",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/ci-cd.md",tags:[],version:"current",lastUpdatedBy:"jeho",lastUpdatedAt:1692634936,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{slug:"ci-cd",title:"CI/CD",sidebar_label:"CI/CD"},sidebar:"mainSidebar",previous:{title:"Edge",permalink:"/product/use-cases/edge"},next:{title:"Serverless",permalink:"/product/use-cases/serverless"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"CI with Otomi",id:"ci-with-otomi",level:2},{value:"CD with Otomi",id:"cd-with-otomi",level:2}],d={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Otomi adds developer- and operations-centric tools, automation and self-service on top of Kubernetes. The integrated tools mainly focus on Continuous Deployment  (to automatically deploy code changes after the build stage) and on all runtime controls. When using Otomi, we advice to setup a seprate CI environment (using specialized CI tools like GitHub Actions or CircleCI) where artifacts (images) are build and then pushed to an image registry (like Harbor provided by Otomi). But with integrated tools like Gitea and Drone, Otomi can in some cases also be used for Continuous Integration (CI). This can be especially interesting in greenfield environments (where there is (not yet) a full CI toolset implemented) or in isolated environments (where developers don't have access to cloud CI services)."),(0,n.kt)("h2",{id:"ci-with-otomi"},"CI with Otomi"),(0,n.kt)("p",null,"Users on the platform can get access to an organization in Gitea. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitea.io/en-us/comparison/"},"here")," for a full list of all Gitea features and a comparison with other self-hosted Git solutions. By adding a Drone pipeline to a Git repository, users can take advantage of Drone to automate steps in the software delivery process, such as initiating code builds, running automated tests, and pushing images to a private image registry in harbor."),(0,n.kt)("h2",{id:"cd-with-otomi"},"CD with Otomi"),(0,n.kt)("p",null,"The most common workflow when using Otomi starts when an artifact (image) has been build. Using the workloads feature in Otomi, images can be used in 2 supported types of workloads:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A Kubernetes ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment"),", combined with an ","[HPA]","(",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/"},"https://kubernetes.io/docs/tasks/")),(0,n.kt)("li",{parentName:"ol"},"(if Knative enabled) A ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/knative/specs/blob/main/specs/serving/knative-api-specification-1.0.md#service"},"Knative service"))),(0,n.kt)("p",null,"Otomi uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"otomi-charts")," repository that contains a library of curated Helm charts that are used to deploy the supported workload types. When a workload specification (a combination of a Helm chart with custom values) has been created, Otomi automatically creates an ArgoCD application that deploys the configured chart. A workload can also be configured with the ",(0,n.kt)("a",{parentName:"p",href:"https://argocd-image-updater.readthedocs.io/en/stable/"},"Argo CD Image Updater")," that can check for new versions of the container images that are deployed with the workload and automatically update the workload to the latest allowed version."))}u.isMDXComponent=!0}}]);