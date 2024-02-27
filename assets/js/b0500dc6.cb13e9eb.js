"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8185],{6065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(5893),i=n(1151);const a={slug:"multi-tenancy",title:"Multi-tenancy",sidebar_label:"Multi-tenancy"},o=void 0,r={id:"use-cases/multi-tenancy",title:"Multi-tenancy",description:"Introduction",source:"@site/product/use-cases/multi-tenancy.md",sourceDirName:"use-cases",slug:"/use-cases/multi-tenancy",permalink:"/product/use-cases/multi-tenancy",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/edit/main/product/use-cases/multi-tenancy.md",tags:[],version:"current",lastUpdatedBy:"Ferruh",lastUpdatedAt:1709038692,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{slug:"multi-tenancy",title:"Multi-tenancy",sidebar_label:"Multi-tenancy"},sidebar:"mainSidebar",previous:{title:"Adoption Framework",permalink:"/product/use-cases/adoption-framework"},next:{title:"CI/CD",permalink:"/product/use-cases/ci-cd"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Multi-tenancy in Otomi",id:"multi-tenancy-in-otomi",level:2},{value:"Why multi-tenancy in Otomi?",id:"why-multi-tenancy-in-otomi",level:2},{value:"Prevent cluster sprawl",id:"prevent-cluster-sprawl",level:3},{value:"Fast onboarding of multiple tenants",id:"fast-onboarding-of-multiple-tenants",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:'Multi-tenant Kubernetes clusters are shared by multiple users and/or workloads which are referred to as "tenants". Operators most commonly implement resource isolation in Kubernetes, using namespaces and resource quota.'}),"\n",(0,s.jsx)(t.p,{children:"The most common use cases for implementing multi-tenancy are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/security/multi-tenancy/#multiple-teams",children:"Multiple teams"})," (within an organization) share a single cluster"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://kubernetes.io/docs/concepts/security/multi-tenancy/#multiple-customers",children:"Multiple customers"})," share a single cluster"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Probably the most known tools to implement multi-tenancy are ",(0,s.jsx)(t.a,{href:"https://github.com/clastix/capsule",children:"Capsule"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/loft-sh/kiosk",children:"Kiosk"}),". But these tools only implement multi-tenancy on cluster API level. What they don't offer is multi-tenant and role based access to shared tools on the cluster like Harbor, Vault, Git, and Argo CD. They also don't provide isolation for container logs and custom metrics."]}),"\n",(0,s.jsx)(t.p,{children:"So what if you would like to offer teams or customers not only access to the Kubernetes API, but also to (automatically provisioned) access to a Git repo, a private docker registry, a space in Vault to create and manage secrets, Argo CD, a private Prometheus instance, isolated log aggregation? This is where Otomi steps in."}),"\n",(0,s.jsx)(t.h2,{id:"multi-tenancy-in-otomi",children:"Multi-tenancy in Otomi"}),"\n",(0,s.jsx)(t.p,{children:"Otomi goes a step higher up in the stack. Otomi does not only provide multi-tenancy on the K8s API level, but also for shared tools on the cluster."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"multi-tenancy",src:n(1998).Z+"",width:"2025",height:"1465"})}),"\n",(0,s.jsx)(t.p,{children:"When multi-tenancy in Otomi is activated (which is optional), Otomi will support the following features:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Teams are provided with a dedicated Prometheus instance for custom metrics (for metrics that should not be accessible for other tenants)"}),"\n",(0,s.jsx)(t.li,{children:"Teams are provided with a dedicated Grafana instance configured with authorization, allowing only authenticated tenant members to access tenant dashboards"}),"\n",(0,s.jsx)(t.li,{children:"Container logs are separated in Loki combined with authorization, allowing only authenticated tenant members access to the tenants container logs"}),"\n",(0,s.jsx)(t.li,{children:"When Harbor is enabled, tenants will get access to a tenant project, allowing only authenticated tenant members to access tenant registries"}),"\n",(0,s.jsx)(t.li,{children:"When Vault is enabled, tenant will get access to a space in Vault, allowing only authenticated tenant members access to tenant secrets"}),"\n",(0,s.jsx)(t.li,{children:"When ArgoCD is enabled, tenants can only see the tenants ArgoCD applications created by Otomi"}),"\n",(0,s.jsx)(t.li,{children:"Tenants will get access to Gitea and can create their own Git repositories"}),"\n",(0,s.jsx)(t.li,{children:"Tenant namespaces are by default isolated for ingress and egress network traffic"}),"\n",(0,s.jsx)(t.li,{children:"Tenants can allow other tenants to access their services"}),"\n",(0,s.jsx)(t.li,{children:"Tenant services that are publicly exposed can be configured with OIDC, only allowing tenant members to access the exposed services"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"why-multi-tenancy-in-otomi",children:"Why multi-tenancy in Otomi?"}),"\n",(0,s.jsx)(t.h3,{id:"prevent-cluster-sprawl",children:"Prevent cluster sprawl"}),"\n",(0,s.jsx)(t.p,{children:"As companies look to further harness the power of cloud-native, they are adopting container technologies at rapid speed, increasing the number of clusters and workloads. As the number of Kubernetes clusters grows, this is creating increased work for Platform teams. When it comes to patching security vulnerabilities or upgrading clusters, teams are doing five times the amount of work."}),"\n",(0,s.jsx)(t.p,{children:"With Otomi you can support multi-tenancy, allowing multiple tenants (like multiple development teams) to work independently on the same cluster, while sharing all the tools. Now you only have to deploy a single development cluster to support multiple development teams. This prevents you from Kubernetes cluster sprawl."}),"\n",(0,s.jsx)(t.h3,{id:"fast-onboarding-of-multiple-tenants",children:"Fast onboarding of multiple tenants"}),"\n",(0,s.jsx)(t.p,{children:"When a new project starts, or when a new development team would like to start using Kubernetes, onboarding usually takes a lot of time. It's not only about providing development teams access to a Kubernetes namespace. No, developers also need access to an image registry, container logs, container metrics, alerts, secrets stores, container vulnerability reports and policy compliance reports."}),"\n",(0,s.jsx)(t.p,{children:"With Otomi you can onboard development teams (tenants) in just a couple of minutes, allowing them to login to the self-service portal and:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Get access to a private image registry"}),"\n",(0,s.jsx)(t.li,{children:"Download the Docker login credentials to get access to their private image registry"}),"\n",(0,s.jsx)(t.li,{children:"Build OCI-compliant images from application code"}),"\n",(0,s.jsx)(t.li,{children:"Deploy images (stored in the private registry) using the Otomi workloads feature"}),"\n",(0,s.jsx)(t.li,{children:"Get access to pre-configured dashboards to see container metrics, policy violations, detected threads in containers and detected vulnerabilities in containers"}),"\n",(0,s.jsx)(t.li,{children:"Configure ingress and network policies"}),"\n",(0,s.jsx)(t.li,{children:"Configure HTTP response headers"}),"\n",(0,s.jsx)(t.li,{children:"Configure CNAMEs"}),"\n",(0,s.jsx)(t.li,{children:"Get access to Vault to create and manage secrets"}),"\n",(0,s.jsx)(t.li,{children:"Use secrets for ingress or workloads"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"When a team already has a code repo with a Dockderfile, they can build, deploy and expose this app within minutes after they have been onboarded onto the platform."})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1998:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/multi-tenancy-6d20d20cfd471ce025aa59ca8b3498bf.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);