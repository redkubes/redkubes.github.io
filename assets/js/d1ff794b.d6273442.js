"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[5586],{4813:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=t(5893),n=t(1151);const s={slug:"lab-25",title:"Monitor PostgreSQL databases",sidebar_label:"Monitor databases"},r=void 0,d={id:"get-started/labs/lab-25",title:"Monitor PostgreSQL databases",description:"If you previously created a database, you'll noticed that we did not let the operator create a PodMonitor. The reason of this, is that the PodMonitor requires specific lables to be picked-up by the team's own Prometheus. In this lab we'll create a custom PodMonitor and create a dashboard in the team's own Grafana.",source:"@site/docs/get-started/labs/lab-25.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-25",permalink:"/docs/get-started/labs/lab-25",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-25.md",tags:[],version:"current",frontMatter:{slug:"lab-25",title:"Monitor PostgreSQL databases",sidebar_label:"Monitor databases"}},i={},l=[{value:"Create a PodMonitor",id:"create-a-podmonitor",level:2},{value:"Add a custom dashboard to the team&#39;s Grafana",id:"add-a-custom-dashboard-to-the-teams-grafana",level:2}];function c(e){const a={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.p,{children:"If you previously created a database, you'll noticed that we did not let the operator create a PodMonitor. The reason of this, is that the PodMonitor requires specific lables to be picked-up by the team's own Prometheus. In this lab we'll create a custom PodMonitor and create a dashboard in the team's own Grafana."}),"\n",(0,o.jsx)(a.h2,{id:"create-a-podmonitor",children:"Create a PodMonitor"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:["In the apps section in Otomi console, click on Gitea. In the list of repo's you'll now see a new repo called ",(0,o.jsx)(a.code,{children:"otomi/team-<name>-argocd"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:["Create a new file called ",(0,o.jsx)(a.code,{children:"my-db-pod-monitor.yaml"})]}),"\n"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-yaml",children:"apiVersion: monitoring.coreos.com/v1\nkind: PodMonitor\nmetadata:\n  name: my-db-pm\n  labels:\n    cnpg.io/cluster: my-db\n    prometheus: team-demo\nspec:\n  namespaceSelector:\n    matchNames:\n      - team-demo\n  podMetricsEndpoints:\n    - port: metrics\n  selector:\n    matchLabels:\n      cnpg.io/cluster: my-db\n"})}),"\n",(0,o.jsxs)(a.ol,{start:"3",children:["\n",(0,o.jsx)(a.li,{children:"Save the file and commit the changes."}),"\n"]}),"\n",(0,o.jsx)(a.p,{children:"The pod monitor will be picked-up by the team's own Prometheus. You can now add a dashboard to the team's Grafana instance."}),"\n",(0,o.jsx)(a.h2,{id:"add-a-custom-dashboard-to-the-teams-grafana",children:"Add a custom dashboard to the team's Grafana"}),"\n",(0,o.jsxs)(a.ol,{start:"4",children:["\n",(0,o.jsxs)(a.li,{children:["Create a new file called ",(0,o.jsx)(a.code,{children:"my-db-dashboard.yaml"})]}),"\n"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: my-db-cluster-dashboard\n  labels:\n    grafana_dashboard: "1"\n    release: grafana-dashboards-demo\ndata:\n  cnp.json: |-\n    # your dashboard json\n'})})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>d,a:()=>r});var o=t(7294);const n={},s=o.createContext(n);function r(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);