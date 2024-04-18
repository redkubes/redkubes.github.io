"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9329],{74:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=o(5893),r=o(1151);const i={slug:"lab-5",title:"Push your container images",sidebar_label:"Push images"},s=void 0,a={id:"get-started/labs/lab-5",title:"Push your container images",description:"For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (like Let's Encrypt using production certificate).",source:"@site/docs/get-started/labs/lab-5.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-5",permalink:"/docs/get-started/labs/lab-5",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-5.md",tags:[],version:"current",frontMatter:{slug:"lab-5",title:"Push your container images",sidebar_label:"Push images"}},c={},d=[{value:"Login to Harbor",id:"login-to-harbor",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"For this lab, Harbor needs to be activated and the cluster needs to be configured with trusted certificates (like Let's Encrypt using production certificate)."})}),"\n",(0,n.jsx)(t.h2,{id:"login-to-harbor",children:"Login to Harbor"}),"\n",(0,n.jsxs)(t.p,{children:["To be able to push images to Harbor, you'll need a robot account with push permissions. Otomi offers teams with a self-service option to download the Docker config for their team's private registry in Harbor. In the left menu you will see the option ",(0,n.jsx)(t.code,{children:"Download DOCKERCFG"}),". Click on it to download the credentials."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"harbor-projects",src:o(9256).Z+"",width:"2938",height:"1726"})}),"\n",(0,n.jsxs)(t.p,{children:["When you have downloaded the docker config then run ",(0,n.jsx)(t.code,{children:"docker login"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"docker login -u 'otomi-team-<team-name>-push' -p <token> harbor.<your-domain>\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["If Docker refuses to connect with an error\n",(0,n.jsx)(t.code,{children:"x509: certificate signed by unknown authority"}),", go to the Otomi Console,\nand click ",(0,n.jsx)(t.code,{children:"Download CA"})," (if you have not done so already); then copy the\nobtained file to ",(0,n.jsx)(t.code,{children:"~/.docker/ca.crt"})," or restart docker desktop."]})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Build and tag your image"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"docker build -t harbor.<your-domain>/<team-name>/<image-name>:<tag> .\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Push the image to Harbor"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"docker push harbor.<your-domain>/<team-name>/<image-name>:<tag>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},9256:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/download-dcfg-b432705c8bd42615c9993ca3905ca3eb.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var n=o(7294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);