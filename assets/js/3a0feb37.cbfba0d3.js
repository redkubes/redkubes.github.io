"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[4825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?i.createElement(k,a(a({ref:t},u),{},{components:n})):i.createElement(k,a({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(7462),l=(n(7294),n(3905));const o={slug:"switch-to-dns",title:"Switch to use DNS"},a=void 0,r={unversionedId:"for-ops/how-to/switch-to-dns",id:"for-ops/how-to/switch-to-dns",title:"Switch to use DNS",description:"When Otomi is installed with minimal values, a custom CA is generated and Otomi uses nip.io for host names. It is possible to switch from nip.io to using a DNS zone after installing Otomi initially without DNS. To switch from nip.io to a DNS zone, follow the instructions as described below.",source:"@site/docs/for-ops/how-to/switch-to-dns.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/switch-to-dns",permalink:"/docs/for-ops/how-to/switch-to-dns",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/how-to/switch-to-dns.md",tags:[],version:"current",frontMatter:{slug:"switch-to-dns",title:"Switch to use DNS"},sidebar:"mainSidebar",previous:{title:"Use private ingress class",permalink:"/docs/for-ops/how-to/ingress-classes"},next:{title:"Overview",permalink:"/docs/for-ops/cli/overview"}},s={},p=[{value:"Step 1: Enable external DNS flag",id:"step-1-enable-external-dns-flag",level:2},{value:"Step 2: Provide DNS values",id:"step-2-provide-dns-values",level:2},{value:"Step 3: Set cluster domain suffix",id:"step-3-set-cluster-domain-suffix",level:2},{value:"Step 4 (optional): Use Let&#39;s Encrypt",id:"step-4-optional-use-lets-encrypt",level:2},{value:"Step 5: Deploy Changes",id:"step-5-deploy-changes",level:2},{value:"Step 6: Adjust the web hook in Gitea",id:"step-6-adjust-the-web-hook-in-gitea",level:2},{value:"Step 7: Restart the Drone server and agent",id:"step-7-restart-the-drone-server-and-agent",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When Otomi is installed with minimal values, a custom CA is generated and Otomi uses nip.io for host names. It is possible to switch from nip.io to using a DNS zone after installing Otomi initially without DNS. To switch from nip.io to a DNS zone, follow the instructions as described below."),(0,l.kt)("h2",{id:"step-1-enable-external-dns-flag"},"Step 1: Enable external DNS flag"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sing in to Otomi Console with user ",(0,l.kt)("inlineCode",{parentName:"li"},"otomi-admin")),(0,l.kt)("li",{parentName:"ul"},"In the left menu, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Setting")," under ",(0,l.kt)("inlineCode",{parentName:"li"},"Platform")),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Otomi")),(0,l.kt)("li",{parentName:"ul"},"Enable the External DNS option"),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,l.kt)("h2",{id:"step-2-provide-dns-values"},"Step 2: Provide DNS values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the left menu, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"DNS")," under Platform Settings. This option will only become active after External DNS is enabled in step 1"),(0,l.kt)("li",{parentName:"ul"},"Provide the DNS zone name used by the Teams tom publish URLs on"),(0,l.kt)("li",{parentName:"ul"},"Provide the Domain filter and optionally the Zone id filters"),(0,l.kt)("li",{parentName:"ul"},"Select your Provider"),(0,l.kt)("li",{parentName:"ul"},"Provide the required values"),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,l.kt)("h2",{id:"step-3-set-cluster-domain-suffix"},"Step 3: Set cluster domain suffix"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the left menu, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Cluster")," under Platform Settings"),(0,l.kt)("li",{parentName:"ul"},"Provide the cluster Domain Suffix"),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,l.kt)("h2",{id:"step-4-optional-use-lets-encrypt"},"Step 4 (optional): Use Let's Encrypt"),(0,l.kt)("p",null,"Let's encrypt requires a DNS zone. So if you would like to start using Let's Encrypt as a CA, now you can."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Apps")," under platform"),(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"CertManager")," app"),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"values")),(0,l.kt)("li",{parentName:"ul"},"Fill in an email address with a valid domain name (required!)"),(0,l.kt)("li",{parentName:"ul"},"Under ",(0,l.kt)("inlineCode",{parentName:"li"},"Issuer"),", click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Lets Encrypt")),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"Production")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Staging")),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,l.kt)("h2",{id:"step-5-deploy-changes"},"Step 5: Deploy Changes"),(0,l.kt)("p",null,"In the left menu, click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Deploy Changes")),(0,l.kt)("p",null,"Wait for the Drone runner to finish:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get pod -n drone-pipelines -w\n")),(0,l.kt)("h2",{id:"step-6-adjust-the-web-hook-in-gitea"},"Step 6: Adjust the web hook in Gitea"),(0,l.kt)("p",null,"Open Gitea and follow these steps:"),(0,l.kt)("p",null,"First sign in to the Otomi Console using the new domain name: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://otomi.<your-domain-name>")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Apps")," under Platform"),(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Gitea")," app"),(0,l.kt)("li",{parentName:"ul"},"Sign in"),(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"otomi/values")," repository"),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Settings")),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhooks")),(0,l.kt)("li",{parentName:"ul"},"Click on the existing webhook (",(0,l.kt)("inlineCode",{parentName:"li"},"https://drone.<ip-address>.nip.io/"),")"),(0,l.kt)("li",{parentName:"ul"},"Change the domain name in the target URL to your new domain name"),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Update Webhook"))),(0,l.kt)("h2",{id:"step-7-restart-the-drone-server-and-agent"},"Step 7: Restart the Drone server and agent"),(0,l.kt)("p",null,"Then run the following kubectl command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl delete pods -n team-admin -l app=drone\n")),(0,l.kt)("p",null,"When both the Drone Agent and Server are back up, open the Drone app and follow these steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Sign In")," on the 404 page"),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Continue")),(0,l.kt)("li",{parentName:"ul"},"Click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorize Application")),(0,l.kt)("li",{parentName:"ul"},"Complete the Drone registration"),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Submit")),(0,l.kt)("li",{parentName:"ul"},"On the Drone dashboard, click ",(0,l.kt)("inlineCode",{parentName:"li"},"SYNC"))),(0,l.kt)("p",null,"You're ready to go!"))}d.isMDXComponent=!0}}]);