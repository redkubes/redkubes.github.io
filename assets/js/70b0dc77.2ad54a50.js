"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2515],{9677:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(5893),i=s(1151);const o={slug:"edge",title:"Otomi at the edge",sidebar_label:"Edge"},r=void 0,a={id:"use-cases/edge",title:"Otomi at the edge",description:"Introduction",source:"@site/product/use-cases/edge.md",sourceDirName:"use-cases",slug:"/use-cases/edge",permalink:"/product/use-cases/edge",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/edge.md",tags:[],version:"current",lastUpdatedBy:"CasLubbers",lastUpdatedAt:1713446024,formattedLastUpdatedAt:"Apr 18, 2024",frontMatter:{slug:"edge",title:"Otomi at the edge",sidebar_label:"Edge"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"How Otomi supports edge computing using Kubernetes",id:"how-otomi-supports-edge-computing-using-kubernetes",level:2}];function d(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Edge computing is an approach where you run applications as close as possible to its data sources or end users. One of the benefits is improved response times."}),"\n",(0,n.jsx)(t.p,{children:"However, managing edge applications using Kubernetes comes with challenges, like:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Deploy and update applications consistently accross multiple clusters"}),"\n",(0,n.jsx)(t.li,{children:"Manage the run-time specifications for the applications like ingress, certificates, DNS, network policies, etc."}),"\n",(0,n.jsx)(t.li,{children:"Lifecycle management of all supporting tools"}),"\n",(0,n.jsx)(t.li,{children:"Using managed Kubernetes services in different clouds/infrastructures"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-otomi-supports-edge-computing-using-kubernetes",children:"How Otomi supports edge computing using Kubernetes"}),"\n",(0,n.jsx)(t.p,{children:"One of the benefits of Otomi is that everything managed by Otomi can be specified in a single values file. This enables you to not only define the applications workloads that need to be running on the cluster, but also all the required tools and configuration to support and secure the workloads."}),"\n",(0,n.jsx)(t.p,{children:"Let's explain this with an example:"}),"\n",(0,n.jsx)(t.p,{children:"Suppose you have 2 application workloads that you would like to run on multiple Kubernetes clusters in multiple geographic regions, using different public cloud providers (AWS, Azure, GCP) and different Kubernetes versions (1.22 and 1.23). Next to the 2 workloads, you also would like to use Istio for mTLS, cert-manager for certificates, ingress/egress network policies for isolation and HTTP response headers. Because you can not afford using L7 load balancers with WAF features in the different clouds, you would like to implement Nginx ingress with Modsecurity and OWASP filtering. The following picture shows the desired situation:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"edge",src:s(2300).Z+"",width:"1496",height:"1398"})}),"\n",(0,n.jsxs)(t.p,{children:["Read ",(0,n.jsx)(t.a,{href:"/docs/for-ops/how-to/core-only",children:"this"})," how-to to learn more about installing Otomi at the edge."]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2300:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/edge-173d01e1fe3f7ac45484237e916968e3.png"},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(7294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);