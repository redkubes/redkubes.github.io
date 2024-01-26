"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4493],{2663:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(5893),o=i(1151);const s={slug:"civo",title:"Civo",sidebar_label:"Civo"},l="Install Otomi on Civo with DNS",r={id:"get-started/installation/civo",title:"Civo",description:"Otomi can also be installed using the Civo marketplace. When Otomi is installed using the Civo marketplace, Otomi is installed without DNS! To see the full potential of Otomi, install Otomi with DNS as described here.",source:"@site/docs/get-started/installation/civo.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/civo",permalink:"/docs/get-started/installation/civo",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/civo.md",tags:[],version:"current",frontMatter:{slug:"civo",title:"Civo",sidebar_label:"Civo"},sidebar:"mainSidebar",previous:{title:"Azure",permalink:"/docs/get-started/installation/azure"},next:{title:"Custom",permalink:"/docs/get-started/installation/custom"}},a={},d=[{value:"Create a K3s cluster in Civo",id:"create-a-k3s-cluster-in-civo",level:2},{value:"Configure DNS",id:"configure-dns",level:2},{value:"Create the values.yaml file",id:"create-the-valuesyaml-file",level:2},{value:"Install Otomi",id:"install-otomi",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"ATTENTION",type:"info",children:(0,t.jsx)(n.p,{children:"Otomi can also be installed using the Civo marketplace. When Otomi is installed using the Civo marketplace, Otomi is installed without DNS! To see the full potential of Otomi, install Otomi with DNS as described here."})}),"\n",(0,t.jsx)(n.h1,{id:"install-otomi-on-civo-with-dns",children:"Install Otomi on Civo with DNS"}),"\n",(0,t.jsx)(n.h2,{id:"create-a-k3s-cluster-in-civo",children:"Create a K3s cluster in Civo"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Sign in to the ",(0,t.jsx)(n.a,{href:"https://dashboard.civo.com/",children:"Civo dashboard"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"Kubernetes"})," in the left menu"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Create new cluster"})]}),"\n",(0,t.jsx)(n.li,{children:"Provide a name for the cluster"}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.code,{children:"Standard Large"})," node pool size (3 nodes)"]}),"\n",(0,t.jsxs)(n.li,{children:["Configure ",(0,t.jsx)(n.code,{children:"Network"})," and ",(0,t.jsx)(n.code,{children:"Firewall"})]}),"\n",(0,t.jsx)(n.li,{children:"Show advanced options"}),"\n",(0,t.jsxs)(n.li,{children:["Choose ",(0,t.jsx)(n.code,{children:"Flannel"}),", Cluster type ",(0,t.jsx)(n.code,{children:"K3S"})," and Kubernetes version ",(0,t.jsx)(n.code,{children:"1.27.1"})]}),"\n",(0,t.jsxs)(n.li,{children:["In the Marketplace, under ",(0,t.jsx)(n.code,{children:"Architecture"}),", de-activate ",(0,t.jsx)(n.code,{children:"Traefik v2 (NodePort)"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Create cluster"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configure-dns",children:"Configure DNS"}),"\n",(0,t.jsx)(n.p,{children:"Set up DNS in Civo:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Networking"})," in the Civo Dashboard, click ",(0,t.jsx)(n.code,{children:"DNS"})," and then ",(0,t.jsx)(n.code,{children:"Add a domain name"})]}),"\n",(0,t.jsxs)(n.li,{children:["Fill in a domain name and then click ",(0,t.jsx)(n.code,{children:"Add domain"})]}),"\n",(0,t.jsxs)(n.li,{children:["Create a NS record in the zone where your domain is hosted and add the Civo name servers ",(0,t.jsx)(n.code,{children:"ns0.civo.com"})," ans ",(0,t.jsx)(n.code,{children:"ns1.civo.com"})]}),"\n",(0,t.jsxs)(n.li,{children:["Under ",(0,t.jsx)(n.code,{children:"Settings"}),", ",(0,t.jsx)(n.code,{children:"Profile"}),", click on the tab ",(0,t.jsx)(n.code,{children:"Security"})," and copy the ",(0,t.jsx)(n.code,{children:"API key"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Add the API key to your environment variables:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'CIVO_TOKEN="<your-api-key>"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"create-the-valuesyaml-file",children:"Create the values.yaml file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tee values.yaml<<EOF\ncluster:\n  name: otomi\n  provider: civo\n  domainSuffix: civo.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters: \n    - example.com\n  provider:\n    civo:\n      apiToken: $CIVO_TOKEN\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@your-domain.com\nEOF\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And adjust the ",(0,t.jsx)(n.code,{children:"domainSuffix"}),", ",(0,t.jsx)(n.code,{children:"domainFilters"})," and ",(0,t.jsx)(n.code,{children:"email"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"install-otomi",children:"Install Otomi"}),"\n",(0,t.jsx)(n.admonition,{title:"ALERT",type:"info",children:(0,t.jsxs)(n.p,{children:["There are some known issues when installing Otomi on Civo. Check them ",(0,t.jsx)(n.a,{href:"/docs/get-started/installation/known-issues",children:"here"})]})}),"\n",(0,t.jsx)(n.p,{children:"Install Otomi using Helm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\nhelm install -f values.yaml otomi otomi/otomi\n"})}),"\n",(0,t.jsx)(n.p,{children:"Monitor the logs of the installer job:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl logs jobs/otomi -n default -f\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the installer is finished, copy the ",(0,t.jsx)(n.code,{children:"url"})," and ",(0,t.jsx)(n.code,{children:"admin-password"})," from the console output."]}),"\n",(0,t.jsxs)(n.p,{children:["Follow the activation steps ",(0,t.jsx)(n.a,{href:"https://otomi.io/docs/get-started/activation",children:"here."})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Like to learn how to use Otomi? Go through the ",(0,t.jsx)(n.a,{href:"/docs/get-started/labs/overview",children:"Get Started labs"})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(7294);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);