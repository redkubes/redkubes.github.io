"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7927],{8481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(5893),i=n(1151);const s={slug:"tutorial-3",title:"Activating tools",sidebar_label:"Activating tools"},a=void 0,l={id:"tutorials/tutorial-3",title:"Activating tools",description:"Core Apps",source:"@site/docs/tutorials/tutorial-3.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-3",permalink:"/docs/tutorials/tutorial-3",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/tutorials/tutorial-3.md",tags:[],version:"current",frontMatter:{slug:"tutorial-3",title:"Activating tools",sidebar_label:"Activating tools"}},r={},c=[{value:"Core Apps",id:"core-apps",level:2},{value:"Optional Apps",id:"optional-apps",level:2},{value:"Instructions",id:"instructions",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"core-apps",children:"Core Apps"}),"\n",(0,o.jsx)(t.p,{children:"Otomi by default installs a minimal set of core applications. With the Core apps, Otomi offers an advanced ingress architecture using Nginx, Istio, Keycloak, Certmanager, and Oauth2 along with developer self-service."}),"\n",(0,o.jsx)(t.h2,{id:"optional-apps",children:"Optional Apps"}),"\n",(0,o.jsx)(t.p,{children:"Next to the Core apps, Otomi offers optional apps like Knative, Harbor, Vault, Kubeapps, Prometheus, Loki, Alertmanager, and more. These apps are all fully integrated and can be activated by dragging them to the active apps section in the Console."}),"\n",(0,o.jsx)(t.p,{children:"In this lab we are going to activate Loki for logging."}),"\n",(0,o.jsx)(t.h2,{id:"instructions",children:"Instructions"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go to ",(0,o.jsx)(t.code,{children:"Apps"})," under the ",(0,o.jsx)(t.code,{children:"Platform"})," section in the side menu and Drag and Drop ",(0,o.jsx)(t.code,{children:"Loki"})," from the ",(0,o.jsx)(t.code,{children:"Disabled apps"})," to the ",(0,o.jsx)(t.code,{children:"Enabled apps"}),". Notice that ",(0,o.jsx)(t.code,{children:"Grafana"})," and ",(0,o.jsx)(t.code,{children:"Prometheus"})," will also be enabled. This is because Loki requires Grafana, and Grafana requires Prometheus and therefore they are also installed because of these dependencies."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click on ",(0,o.jsx)(t.code,{children:"Deploy Changes"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["To see the progress of the installation of Loki, go to apps under the Platform section and click on ",(0,o.jsx)(t.code,{children:"Drone"}),". In the top right you will see a play button. Click on it. The Drone app will now open in a new tab. Click on the ",(0,o.jsx)(t.code,{children:"otomi/values"})," repository and then on the last build execution. When the ",(0,o.jsx)(t.code,{children:"apply"})," step is finished, Loki and Grafana will be installed and ready to use."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go to the Apps section again and click on ",(0,o.jsx)(t.code,{children:"Loki"}),". In the app bar, click on ",(0,o.jsx)(t.code,{children:"Values"}),". The Loki chart has been installed with sane default values to support the most common use cases. Click on ",(0,o.jsx)(t.code,{children:"Duration"})," to see the default value. All the defaults (specified in the Otomi values ",(0,o.jsx)(t.a,{href:"https://github.com/redkubes/otomi-core/blob/master/values-schema.yaml",children:"schema"})," can be modified."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["In the app bar, click on ",(0,o.jsx)(t.code,{children:"Raw values"}),". In the Raw values, all values of the Loki chart that are not provided with defaults from the Otomi values schema can be used here."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Click on the play button. A new tab wil open and here you can execute queries to search for logs. Add the following query: ",(0,o.jsx)(t.code,{children:'{namespace="team-$TEAM-NAME"}'}),". Now you will see all the logs of containers running in the namespace of your team. Copy the path after ",(0,o.jsx)(t.em,{children:".nip.io"})," from the address bar in your browser."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Go back to the console and in the Loki app, click on ",(0,o.jsx)(t.code,{children:"Shortcuts"}),". Click ",(0,o.jsx)(t.code,{children:"edit"})," and the ",(0,o.jsx)(t.code,{children:"Add item"}),'. Fill in a title (like "$TEAM-NAME logs"), a description (like "The logs of $TEAM-NAME") and paste the copied path. Now click submit. The shortcut you now created can be used to go directly to Loki and see the result of your query.']}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var o=n(7294);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);