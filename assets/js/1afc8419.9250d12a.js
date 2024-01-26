"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8344],{8300:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=i(5893),o=i(1151);const a={slug:"overview",title:"SRE Overview",sidebar_label:"Overview"},s=void 0,r={id:"for-ops/sre/overview",title:"SRE Overview",description:"Otomi is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, Otomi offers all required parts in a single package. Otomi can be seen as any other Kubernetes application or add-on, with the difference that Otomi is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications.",source:"@site/docs/for-ops/sre/overview.md",sourceDirName:"for-ops/sre",slug:"/for-ops/sre/overview",permalink:"/docs/for-ops/sre/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/sre/overview.md",tags:[],version:"current",frontMatter:{slug:"overview",title:"SRE Overview",sidebar_label:"Overview"},sidebar:"mainSidebar",previous:{title:"otomi x",permalink:"/docs/for-ops/cli/x"},next:{title:"Daily Routine",permalink:"/docs/for-ops/sre/daily"}},c={},l=[{value:"Reference configuration",id:"reference-configuration",level:2},{value:"Standard",id:"standard",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Guides &amp; checklists",id:"guides--checklists",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Otomi is a set of functions built on top of a suite of pre-configured and integrated open source applications. Instead of selecting, configuring, and integrating all the parts that are needed to securely manage containerized applications in multi- and hybrid environments, Otomi offers all required parts in a single package. Otomi can be seen as any other Kubernetes application or add-on, with the difference that Otomi is pre-configured and offers a higher abstraction of configuration for all the integrated solutions. All integrated applications can however be used freely, meaning that a user can benefit from the pre-configuration to start using the offered applications."}),"\n",(0,t.jsxs)(n.p,{children:["The user controls the configuration of all objects installed by Otomi, based on the ",(0,t.jsx)(n.a,{href:"https://github.com/redkubes/otomi-core/blob/main/values-schema.yaml",children:"values schema"})," provided by Otomi, and the user controls the full configuration of all Kubernetes objects deployed. Lets take a closer look:"]}),"\n",(0,t.jsx)(n.h2,{id:"reference-configuration",children:"Reference configuration"}),"\n",(0,t.jsx)(n.p,{children:"Otomi provides a reference configuration (Otomi Values) that can be used as a quick-start to install and configure a complete suite of integrated open source applications, an advanced ingress architecture, multi-tenancy, developer self-service, and implemented security best-practices. The reference configuration can be modified using the Otomi Console and Otomi API, based on a pre-defined value schema. SRE can change and optimize the reference configuration when needed. There are 2 supported options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Standard, using the Otomi values schema to modify the configuration"}),"\n",(0,t.jsx)(n.li,{children:"Advanced, customization using overrides"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Let's take a closer look at both options."}),"\n",(0,t.jsx)(n.h3,{id:"standard",children:"Standard"}),"\n",(0,t.jsx)(n.p,{children:"Out-of-the-box, Otomi comes with an extensive values schema (see here). Most of the standard values (platform configuration) can be modified using Otomi Console. Changes made through the console are translated into configuration code (based on the values schema). Schema-supported values that can not be changed using the Otomi Console, can be modified in the Otomi Values repository (default Gitea is installed, but an external repository like Github is also supported). Otomi supports Visual Studio Code integration for autocompletion based on the Otomi schema. The Otomi values schema supports the most common use-cases when working with Kubernetes."}),"\n",(0,t.jsx)(n.h3,{id:"advanced",children:"Advanced"}),"\n",(0,t.jsx)(n.p,{children:"For advanced use-cases, configuration values of all integrated open source applications can be customized. Together with the fully integrated observability suite, SRE can pro-actively monitor the resource usage of the integrated open source applications (like Istio and Ingress NGINX) and optimize the configuration when needed."}),"\n",(0,t.jsx)(n.p,{children:"The Otomi values schema, in this case, can be overridden by custom configuration values. Custom configuration values can be all values supported by the charts of the integrated open source applications in Otomi Core."}),"\n",(0,t.jsx)(n.p,{children:"SRE can use Otomi Console to change configuration settings (like security policies), but can also change the Otomi Values directly using the Otomi values schema and by using overrides. In all cases, the configuration is stored in code (the otomi-values repository)."}),"\n",(0,t.jsx)(n.p,{children:"The following code shows the configuration values of the ingress-nginx chart."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"charts:\n  ingress-nginx:\n    private:\n      enabled: false\n    modsecurity:\n      enabled: true\n      owasp: true\n    _rawValues:\n      controller:\n        config:\n          error-log-level: info\n"})}),"\n",(0,t.jsx)(n.p,{children:"Line 1-7 are configuration options supported in the Otomi values schema. Line 8-11 are used to add specific (not schema supported) configuration values using overrides (rawValues)."}),"\n",(0,t.jsx)(n.h2,{id:"guides--checklists",children:"Guides & checklists"}),"\n",(0,t.jsx)(n.p,{children:"For SRE's we have created a couple of guides and checklists:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/for-ops/sre/daily",children:"Daily routine"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/for-ops/sre/troubleshooting",children:"Troubleshooting"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/for-ops/sre/upgrades",children:"Upgrading Otomi"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(7294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);