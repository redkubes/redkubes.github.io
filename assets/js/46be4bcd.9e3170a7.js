"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7973],{1645:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>i});var r=t(5893),s=t(1151);const n={slug:"workloads",title:"Team Workloads",sidebar_label:"Workloads"},l=void 0,a={id:"for-devs/console/workloads",title:"Team Workloads",description:"A Workload in Otomi is a self-service feature for creating Kubernetes resources using Helm charts from the Otomi Developer Catalog.",source:"@site/docs/for-devs/console/workloads.md",sourceDirName:"for-devs/console",slug:"/for-devs/console/workloads",permalink:"/docs/for-devs/console/workloads",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/console/workloads.md",tags:[],version:"current",frontMatter:{slug:"workloads",title:"Team Workloads",sidebar_label:"Workloads"},sidebar:"mainSidebar",previous:{title:"Builds",permalink:"/docs/for-devs/console/builds"},next:{title:"Services",permalink:"/docs/for-devs/console/services"}},d={},i=[{value:"Workloads (all)",id:"workloads-all",level:2},{value:"Create a Workload",id:"create-a-workload",level:2}];function c(e){const o={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"A Workload in Otomi is a self-service feature for creating Kubernetes resources using Helm charts from the Otomi Developer Catalog."}),"\n",(0,r.jsx)(o.h2,{id:"workloads-all",children:"Workloads (all)"}),"\n",(0,r.jsx)(o.p,{children:"All Workloads of the team are listed here."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Team workloads",src:t(7883).Z+"",width:"2258",height:"1486"})}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Property"}),(0,r.jsx)(o.th,{children:"Description"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Name"}),(0,r.jsx)(o.td,{children:"The name of the workload"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Argocd"}),(0,r.jsx)(o.td,{children:"Link to the Argo CD application in the Argo CD UI"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Image update strategy"}),(0,r.jsx)(o.td,{children:"The configured update strategy for the workload"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Status"}),(0,r.jsx)(o.td,{children:"The status of the workload. Click on the Argo CD application link to see more status details"})]})]})]}),"\n",(0,r.jsx)(o.h2,{id:"create-a-workload",children:"Create a Workload"}),"\n",(0,r.jsxs)(o.p,{children:["Before creating a workload from the developer catalog, we'll need the ",(0,r.jsx)(o.code,{children:"repository"})," and ",(0,r.jsx)(o.code,{children:"tag"})," of the image you would like to use."]}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Go to the list of Builds and add the ",(0,r.jsx)(o.code,{children:"repository"})," of the build to use to your clipboard. Remember the tag."]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Go to ",(0,r.jsx)(o.code,{children:"Workloads"})," in the left menu and click on ",(0,r.jsx)(o.code,{children:"New Workload"})]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Select a template from the catalog to use"}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["Add a ",(0,r.jsx)(o.code,{children:"Name"})," for the workload"]}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsxs)(o.p,{children:["(Optional) Configure the ",(0,r.jsx)(o.code,{children:"Auto image updater"}),". Default is ",(0,r.jsx)(o.code,{children:"Disabled"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"The Auto Image Updater will (based on the update strategy) automatically update the container images of a workload."}),"\n",(0,r.jsx)(o.p,{children:"Select the update strategy. Choose between:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Digest: Inspects a single tag in the registry for changes, and updates the image on any change to the previous state. Requires to provide a ",(0,r.jsx)(o.code,{children:"repository"})," and a ",(0,r.jsx)(o.code,{children:"tag"}),"."]}),"\n",(0,r.jsxs)(o.li,{children:["Semver: Update based on semantic versions. Example: ",(0,r.jsx)(o.code,{children:"v1.0"})," would allow the image to be updated to any patch version within the 1.0 minor release."]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["There are 2 other properties available: ",(0,r.jsx)(o.code,{children:"imageParameter"})," and ",(0,r.jsx)(o.code,{children:"tagParameter"}),". Change the parameters in case your Helm application contains more than one image in the manifests or uses another parameters to define which image to render in the manifests."]}),"\n",(0,r.jsxs)(o.ol,{start:"6",children:["\n",(0,r.jsxs)(o.li,{children:["In the workload ",(0,r.jsx)(o.code,{children:"values"}),", change the following parameters:"]}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"image:\n  repository: <paste from clipboard>\n  tag: latest\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"6",children:["\n",(0,r.jsxs)(o.li,{children:["Click ",(0,r.jsx)(o.code,{children:"Submit"})]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Now click on ",(0,r.jsx)(o.code,{children:"Deploy Changes"})]}),"\n",(0,r.jsxs)(o.p,{children:["After a few minutes, Otomi will have created all the needed Argo CD resources to deploy your workload. In the workloads list, click on the ",(0,r.jsx)(o.code,{children:"Application"})," link of your workload to see the status of your workload."]}),"\n",(0,r.jsx)(o.p,{children:"The values of a workload can be changed at any time. Changes will automatically be deployed."})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},7883:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/team-workloads-9e421367e6657c81bdd722e70a892089.png"},1151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>l});var r=t(7294);const s={},n=r.createContext(s);function l(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);