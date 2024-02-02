"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[253],{8623:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var l=o(5893),i=o(1151);const n={slug:"lab-32",title:"Create projects",sidebar_label:"Create projects"},r=void 0,s={id:"get-started/labs/lab-32",title:"Create projects",description:"A Project in Otomi is a collection of a Build, a Workload and a Service. The benefit of using Projects is that you can create a Build, a Workload and a Service in one run. Projects are ideal for developers to run multiple code branches next to each other and automatically update the deployment based on a push. In this lab we are going to create a Project and see how everything now comes together is one simple form.",source:"@site/docs/get-started/labs/lab-32.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-32",permalink:"/docs/get-started/labs/lab-32",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-32.md",tags:[],version:"current",frontMatter:{slug:"lab-32",title:"Create projects",sidebar_label:"Create projects"},sidebar:"mainSidebar",previous:{title:"Configure auto image updater",permalink:"/docs/get-started/labs/lab-11"},next:{title:"Create a database",permalink:"/docs/get-started/labs/lab-24"}},d={},c=[{value:"Create a new Git repository",id:"create-a-new-git-repository",level:2},{value:"Create a Project",id:"create-a-project",level:2},{value:"Get the webhook URL",id:"get-the-webhook-url",level:2},{value:"Create a Webhook",id:"create-a-webhook",level:2},{value:"Trigger the build",id:"trigger-the-build",level:2},{value:"Check the status of the Workload",id:"check-the-status-of-the-workload",level:2},{value:"Check the status of the Service",id:"check-the-status-of-the-service",level:2},{value:"Change the code and push the commit",id:"change-the-code-and-push-the-commit",level:2}];function h(e){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"A Project in Otomi is a collection of a Build, a Workload and a Service. The benefit of using Projects is that you can create a Build, a Workload and a Service in one run. Projects are ideal for developers to run multiple code branches next to each other and automatically update the deployment based on a push. In this lab we are going to create a Project and see how everything now comes together is one simple form."}),"\n",(0,l.jsx)(t.h2,{id:"create-a-new-git-repository",children:"Create a new Git repository"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Create a new repo called ",(0,l.jsx)(t.code,{children:"nodejs-helloworld"})]}),"\n",(0,l.jsxs)(t.li,{children:["Set the Default Branch to ",(0,l.jsx)(t.code,{children:"master"})]}),"\n",(0,l.jsx)(t.li,{children:"Clone the Hello World Sample Application from the Red Kubes GitHub repository:"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/redkubes/nodejs-helloworld\ncd nodejs-helloworld\n"})}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsxs)(t.li,{children:["Mirror the Hello World Sample Application to your ",(0,l.jsx)(t.code,{children:"nodejs-helloworld"})," repo:"]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"git push --mirror https://gitea.<your-domain>/<your-user-name>/nodejs-helloworld.git\n"})}),"\n",(0,l.jsx)(t.h2,{id:"create-a-project",children:"Create a Project"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Go to ",(0,l.jsx)(t.code,{children:"Project"})," and click ",(0,l.jsx)(t.code,{children:"Create Project"})]}),"\n",(0,l.jsx)(t.li,{children:"Fill in a name for the Project. This name is used for the Build (the name of the image) and the Workload. The Service will automatically select the ClusterIP service name based on the Workload name"}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.code,{children:"Create build from source"})]}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.code,{children:"Next"})]}),"\n",(0,l.jsxs)(t.li,{children:["Choose ",(0,l.jsx)(t.code,{children:"Docker"})," and fill in the repository URL of the ",(0,l.jsx)(t.code,{children:"nodejs-helloworld"})," repository"]}),"\n",(0,l.jsxs)(t.li,{children:["Enable ",(0,l.jsx)(t.code,{children:"Trigger"})]}),"\n",(0,l.jsxs)(t.li,{children:["Select the ",(0,l.jsx)(t.code,{children:"Digest"})," strategy for the ",(0,l.jsx)(t.code,{children:"Auto image updater"})]}),"\n",(0,l.jsxs)(t.li,{children:["The ",(0,l.jsx)(t.code,{children:"imageRepository"})," is already filled in. Make sure the ",(0,l.jsx)(t.code,{children:"tag"})," is identical to the tag used for the Build"]}),"\n",(0,l.jsx)(t.li,{children:"Use the default Chart values"}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.code,{children:"Next"})]}),"\n",(0,l.jsxs)(t.li,{children:["Under ",(0,l.jsx)(t.code,{children:"Exposure"})," select ",(0,l.jsx)(t.code,{children:"External"})]}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.code,{children:"Submit"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"get-the-webhook-url",children:"Get the webhook URL"}),"\n",(0,l.jsxs)(t.p,{children:["Before we can configure the webhook for the ",(0,l.jsx)(t.code,{children:"nodejs-helloworld"})," repo in Gitea, we will need the webhook URL. You can find this webhook URL for your build in the list of Builds. Add the webhook URL to your clipboard."]}),"\n",(0,l.jsx)(t.p,{children:"Also notice that the status of the Build shows an exclamation mark. This is because Otomi created the Pipeline, but the PipelineRun is not yet created because it was not triggered yet."}),"\n",(0,l.jsx)(t.h2,{id:"create-a-webhook",children:"Create a Webhook"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["In Otomi Console, click on ",(0,l.jsx)(t.code,{children:"apps"})," the left menu and then open ",(0,l.jsx)(t.code,{children:"Gitea"})]}),"\n",(0,l.jsxs)(t.li,{children:["In the top menu of Gitea, click on ",(0,l.jsx)(t.code,{children:"Explore"})," and then on the ",(0,l.jsx)(t.code,{children:"nodejs-helloworld"})," repo"]}),"\n",(0,l.jsxs)(t.li,{children:["Go to ",(0,l.jsx)(t.code,{children:"Settings"})," (top right) and then to ",(0,l.jsx)(t.code,{children:"Webhooks"})]}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.code,{children:"Add Webhook"})," and select ",(0,l.jsx)(t.code,{children:"Gitea"})]}),"\n",(0,l.jsxs)(t.li,{children:["In the ",(0,l.jsx)(t.code,{children:"Target URL"}),", paste the webhook URL from your clipboard."]}),"\n",(0,l.jsxs)(t.li,{children:["Click ",(0,l.jsx)(t.code,{children:"Add Webhook"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"trigger-the-build",children:"Trigger the build"}),"\n",(0,l.jsxs)(t.p,{children:["You can now trigger the build by doing a commit in the ",(0,l.jsx)(t.code,{children:"nodejs-helloworld"})," repo, or by testing the webhook. Let's test the webhook:"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["In Gitea, go to the ",(0,l.jsx)(t.code,{children:"Settings"})," (top right) of the ",(0,l.jsx)(t.code,{children:"nodejs-helloworld"})," repo and then to ",(0,l.jsx)(t.code,{children:"Webhooks"})]}),"\n",(0,l.jsx)(t.li,{children:"Click on the webhook we just created"}),"\n",(0,l.jsxs)(t.li,{children:["In the bottom, click on ",(0,l.jsx)(t.code,{children:"Test Delivery"})]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"check-the-status-of-the-workload",children:"Check the status of the Workload"}),"\n",(0,l.jsxs)(t.p,{children:["Go to Workloads and click on the Argo CD ",(0,l.jsx)(t.code,{children:"application"})," link of the Workload created by the Project. What do you see? The Argo CD application is still in a ",(0,l.jsx)(t.code,{children:"Degraded"})," state because the image build has not completed yet. When the build in finished and the image can be pulled, the status of the application will automatically become ",(0,l.jsx)(t.code,{children:"Healthy"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"check-the-status-of-the-service",children:"Check the status of the Service"}),"\n",(0,l.jsxs)(t.p,{children:["When the state of the Workload becomes ",(0,l.jsx)(t.code,{children:"Healthy"}),", the URL of the Service created by the Project will show the following page:"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Hello World",src:o(2198).Z+"",width:"778",height:"182"})}),"\n",(0,l.jsx)(t.h2,{id:"change-the-code-and-push-the-commit",children:"Change the code and push the commit"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["Go to the ",(0,l.jsx)(t.code,{children:"hello-world"})," repository"]}),"\n",(0,l.jsxs)(t.li,{children:["Edit the ",(0,l.jsx)(t.code,{children:"package.json"})," and set the ",(0,l.jsx)(t.code,{children:"Version"})," to ",(0,l.jsx)(t.code,{children:"1.4.0"})]}),"\n",(0,l.jsx)(t.li,{children:"Commit the changes"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Check the URL again. After a couple of minutes you will see the following page:"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Hello World",src:o(5436).Z+"",width:"890",height:"252"})})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5436:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/hello-world-2-671a268fda45f814837a1a130d96823a.png"},2198:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/hello-world-ff027196740055b940f6785f98b26500.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>r});var l=o(7294);const i={},n=l.createContext(i);function r(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);