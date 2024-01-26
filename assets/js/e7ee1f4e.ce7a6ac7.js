"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4722],{2973:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=o(5893),s=o(1151);const i={slug:"core-only",title:"Use Otomi Core only",sidebar_label:"Use Core only"},r=void 0,l={id:"for-ops/how-to/core-only",title:"Use Otomi Core only",description:"Otomi by default installs Gitea, Drone, Otomi API and Otomi Console. Otomi Console is the self-service UI and uses Otomi API to generate validated configuration code. This configuration code is then committed to Gitea (in the values repository), which will trigger teh pre-configured Drone pipeline to apply the changes.",source:"@site/docs/for-ops/how-to/core-only.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/core-only",permalink:"/docs/for-ops/how-to/core-only",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/how-to/core-only.md",tags:[],version:"current",frontMatter:{slug:"core-only",title:"Use Otomi Core only",sidebar_label:"Use Core only"},sidebar:"mainSidebar",previous:{title:"Use Team Admin",permalink:"/docs/for-ops/how-to/use-team-admin"},next:{title:"Backups",permalink:"/docs/for-ops/how-to/backups"}},a={},c=[{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Otomi by default installs Gitea, Drone, Otomi API and Otomi Console. Otomi Console is the self-service UI and uses Otomi API to generate validated configuration code. This configuration code is then committed to Gitea (in the ",(0,t.jsx)(n.code,{children:"values"})," repository), which will trigger teh pre-configured Drone pipeline to apply the changes."]}),"\n",(0,t.jsx)(n.p,{children:"In some cases you might not want to use Otomi Console, Otomi API and Drone, but instead install and manage configuration of the platform using a custom pipeline. Possible use-cases for this scenario are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Pushing configuration changes to multiple clusters at the same time (edge use-case)"}),"\n",(0,t.jsx)(n.li,{children:"Not allowing configuration changes be made by developers"}),"\n",(0,t.jsxs)(n.li,{children:["Only using the open source ",(0,t.jsx)(n.a,{href:"https://github.com/redkubes/otomi-core",children:"otomi-core"})," project"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The example Otomi chart values below shows how to install Otomi with"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A team with 2 workloads and 2 services"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"cluster:\n  name: ${clusterName}\n  provider: ${clusterProvider}\notomi:\n  adminPassword: ${password}\napps:\n  argocd:\n    enabled: true\nteamConfig:\n  demo:\n    password: ${somePassword}\n    id: myapp\n    networkPolicy:\n      egressPublic: true\n      ingressPrivate: true\n    services:\n      - name: front-end\n        ingressClassName: platform\n        networkPolicy:\n            ingressPrivate:\n                mode: DenyAll\n        ownHost: true\n        port: 8080\n        type: public\n        headers:\n          response:\n            set:\n              - name: Cache-Control\n                value: no-store\n              - name: Pragma\n                value: no-cache\n      - name: api\n        networkPolicy:\n            ingressPrivate:\n                mode: AllowOnly\n                allow:\n                  team: myapp\n                  service: front-end\n        port: 8081\n    workloads:\n      - name: front-end\n        path: ksvc\n        revision: v1.0.1\n        selectedChart: ksvc\n        url: https://github.com/redkubes/otomi-charts.git\n      - name: api\n        path: deployment\n        revision: v1.0.1\n        selectedChart: deployment\n        url: https://github.com/redkubes/otomi-charts.git\nfiles:\n  env/teams/workloads/demo/front-end.yaml: |\n    values: |\n        fullnameOverride: front-end\n        image:\n            repository: harbor.${domainSuffix}/team-demo/front-end\n            tag: latest\n        containerPorts:\n            - name: http1\n            containerPort: 8080\n            protocol: TCP\n        resources:\n            requests:\n                cpu: 200m\n                memory: 32Mi\n        autoscaling:\n            minReplicas: 0\n            maxReplicas: 10    \n  env/teams/workloads/demo/api.yaml: |\n    values: |\n      image:\n        image:\n            repository: harbor.${domainSuffix}/team-demo/api\n            tag: latest\n        containerPorts:\n            - name: http1\n            containerPort: 8080\n            protocol: TCP\n        resources:\n            requests:\n                cpu: 200m\n                memory: 32Mi\n        autoscaling:\n            minReplicas: 1\n            maxReplicas: 10    \n"})}),"\n",(0,t.jsx)(n.p,{children:"You can now make changes in this configuration and apply them directly to the cluster:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install Otomi using your custom values:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install -f values.yaml otomi otomi/otomi\n"})}),"\n",(0,t.jsx)(n.p,{children:"After Otomi has been installed with these values, Otomi will install and configure:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"All required ingress resources"}),"\n",(0,t.jsx)(n.li,{children:"Istio (including the virtual services for public exposed services with HTTP response headers)"}),"\n",(0,t.jsx)(n.li,{children:"Network policies"}),"\n",(0,t.jsx)(n.li,{children:"Argo CD and Argo CD application sets to automatically deploy the front-end and api workloads"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Change the values"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can extend the values with all Otomi supported configuration."}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Uninstall the Otomi release:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm uninstall otomi --no-hooks\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Re-install the chart with the adjusted values:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"helm install -f values.yaml otomi otomi/otomi\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var t=o(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);