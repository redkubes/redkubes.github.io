"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1506],{9980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(5893),i=t(1151);const s={slug:"tutorial-1",title:"Installing Otomi",sidebar_label:"Install Otomi"},r=void 0,l={id:"tutorials/tutorial-1",title:"Installing Otomi",description:"To go through the tutorials, you first need to install Otomi on a running Kubernetes cluster.",source:"@site/docs/tutorials/tutorial-1.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-1",permalink:"/docs/tutorials/tutorial-1",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/tutorials/tutorial-1.md",tags:[],version:"current",frontMatter:{slug:"tutorial-1",title:"Installing Otomi",sidebar_label:"Install Otomi"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Instructions",id:"instructions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To go through the tutorials, you first need to install Otomi on a running Kubernetes cluster."}),"\n",(0,o.jsxs)(n.p,{children:["In this first tutorial, we'll be installing ",(0,o.jsx)(n.a,{href:"https://github.com/redkubes/otomi-core",children:"Otomi"})," using ",(0,o.jsx)(n.code,{children:"helm"})," with minimal values."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Kubernetes cluster on one of the ",(0,o.jsx)(n.a,{href:"/docs/get-started/prerequisites#supported-providers",children:"supported providers"})]}),"\n",(0,o.jsx)(n.li,{children:"Helm installed"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"instructions",children:"Instructions"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add Otomi helm chart repository"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm repo add otomi https://otomi.io/otomi-core && \\\nhelm repo update\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Install Otomi with chart values"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"helm install otomi otomi/otomi \\\n--set cluster.name=$CLUSTERNAME \\\n--set cluster.provider=$PROVIDER\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Monitoring the Chart install"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# The chart deploys a Job (`otomi`) in the `default` namespace\n# Monitor the status of the job\nkubectl get job otomi -w\n# watch the helm chart install status (optional)\nwatch helm list -Aa\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"When the installer job is finished, go to the end of the logs"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl logs jobs/otomi -n default -f\n"})}),"\n",(0,o.jsx)(n.p,{children:"There you will see the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'2022-04-01T10:01:59.239Z otomi:cmd:commit:commit:info                                                                                            \n################################################################################################\n#  To start using Otomi, go to https://<your-ip>.nip.io and sign in to the web console         #\n#  with username "otomi-admin" and password "password".                                        #\n#  Then activate Drone. For more information see: https://otomi.io/docs/get-started/activation #\n################################################################################################\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Sign in to the web UI (Otomi Console)"}),"\n",(0,o.jsx)(n.p,{children:"Once Otomi is installed, go to the url provided in the logs of the installer job and sign in to the web UI with the provided username and password."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the auto generated CA to your keychain (optional)"}),"\n",(0,o.jsx)(n.p,{children:"Since we install Otomi without proving a custom CA or using LetsEncrypt, the installer generated a CA. This CA is of course not trusted on your local machine.\nTo prevent you from clicking away lots of security warning in your browser, you can add the generated CA to your keychain:"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'In the left pane of the console, click on "Download CA"'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Double click the downloaded CA.crt or add the CA to your keychain on your mac using the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# On Mac\nsudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/Downloads/ca.crt  \n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-powershell",children:'# On Windows(PowerShell - Run as Administrator)\n# Use certutil:\ncertutil.exe -addstore root <downloaded cert path>\n# Or \nImport-Certificate -FilePath "<downloaded cert path>" -CertStoreLocation Cert:\\LocalMachine\\Root\n# Restart the browser \n'})}),"\n",(0,o.jsx)(n.p,{children:"But you could also run Chrome (sorry Msft folks ;) in insecure mode:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"alias chrome-insecure='/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --ignore-certificate-errors --ignore-urlfetcher-cert-requests &> /dev/null'\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"8",children:["\n",(0,o.jsx)(n.li,{children:"Activate Drone:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the side menu of Otomi Console under ",(0,o.jsx)(n.code,{children:"platform"})," click on ",(0,o.jsx)(n.code,{children:"apps"})," and then on the ",(0,o.jsx)(n.code,{children:"Drone"})," app"]}),"\n",(0,o.jsxs)(n.li,{children:["Sign in locally with as ",(0,o.jsx)(n.code,{children:"otomi-admin"})," and the password provided in the logs of the installer job"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.code,{children:"Authorize Application"})]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.code,{children:"Submit"})," on the Complete your Drone Registration page. You don't need to fill in your Email, Full Name or Company Name if you don't want to"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(n.code,{children:"otomi/values"})," repository"]}),"\n",(0,o.jsxs)(n.li,{children:["Click on ",(0,o.jsx)(n.code,{children:"+ Activate Repository"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);