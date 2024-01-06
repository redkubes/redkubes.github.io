"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[253],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=o.createContext({}),p=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=l,m=h["".concat(d,".").concat(u)]||h[u]||c[u]||n;return a?o.createElement(m,r(r({ref:t},s),{},{components:a})):o.createElement(m,r({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<n;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=a(7462),l=(a(7294),a(3905));const n={slug:"lab-32",title:"Create projects",sidebar_label:"Create projects"},r=void 0,i={unversionedId:"get-started/labs/lab-32",id:"get-started/labs/lab-32",title:"Create projects",description:"A Project in Otomi is a collection of a Build, a Workload and a Service. The benefit of using Projects is that you can create a Build, a Workload and a Service in one run. Projects are ideal for developers to run multiple code branches next to each other and automatically update the deployment based on a push. In this lab we are going to create a Project and see how everything now comes together is one simple form.",source:"@site/docs/get-started/labs/lab-32.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-32",permalink:"/docs/get-started/labs/lab-32",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-32.md",tags:[],version:"current",frontMatter:{slug:"lab-32",title:"Create projects",sidebar_label:"Create projects"},sidebar:"mainSidebar",previous:{title:"Configure auto image updater",permalink:"/docs/get-started/labs/lab-11"},next:{title:"Create a database",permalink:"/docs/get-started/labs/lab-24"}},d={},p=[{value:"Create a new Git repository",id:"create-a-new-git-repository",level:2},{value:"Create a Project",id:"create-a-project",level:2},{value:"Get the webhook URL",id:"get-the-webhook-url",level:2},{value:"Create a Webhook",id:"create-a-webhook",level:2},{value:"Trigger the build",id:"trigger-the-build",level:2},{value:"Check the status of the Workload",id:"check-the-status-of-the-workload",level:2},{value:"Check the status of the Service",id:"check-the-status-of-the-service",level:2},{value:"Change the code and push the commit",id:"change-the-code-and-push-the-commit",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Project in Otomi is a collection of a Build, a Workload and a Service. The benefit of using Projects is that you can create a Build, a Workload and a Service in one run. Projects are ideal for developers to run multiple code branches next to each other and automatically update the deployment based on a push. In this lab we are going to create a Project and see how everything now comes together is one simple form."),(0,l.kt)("h2",{id:"create-a-new-git-repository"},"Create a new Git repository"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new repo called ",(0,l.kt)("inlineCode",{parentName:"li"},"hello-world")),(0,l.kt)("li",{parentName:"ol"},"Set the Default Branch to ",(0,l.kt)("inlineCode",{parentName:"li"},"master")),(0,l.kt)("li",{parentName:"ol"},"Clone the Hello World Sample Application from the Red Kubes GitHub repository:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redkubes/nodejs-helloworld\ncd spring-petclinic\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Mirror the Hello World Sample Application to your ",(0,l.kt)("inlineCode",{parentName:"li"},"hello-world")," repo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"git push --mirror https://gitea.<your-domain>/<your-user-name>/hello-world.git\n")),(0,l.kt)("h2",{id:"create-a-project"},"Create a Project"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Project")," and click ",(0,l.kt)("inlineCode",{parentName:"li"},"Create Project")),(0,l.kt)("li",{parentName:"ol"},"Fill in a name for the Project. This name is used for the Build (the name of the image) and the Workload. The Service will automatically select the ClusterIp service name based on the Workload name."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Create build from source")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Next")),(0,l.kt)("li",{parentName:"ol"},"Choose ",(0,l.kt)("inlineCode",{parentName:"li"},"Docker")," and fill in the repository URL of the ",(0,l.kt)("inlineCode",{parentName:"li"},"hello-world")," repository"),(0,l.kt)("li",{parentName:"ol"},"Enable ",(0,l.kt)("inlineCode",{parentName:"li"},"Trigger")),(0,l.kt)("li",{parentName:"ol"},"Select the ",(0,l.kt)("inlineCode",{parentName:"li"},"Digest")," strategy for the ",(0,l.kt)("inlineCode",{parentName:"li"},"Auto image updater")),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"imageRepository")," is already filled in. Make sure the ",(0,l.kt)("inlineCode",{parentName:"li"},"tag")," is identical to the tag used for the Build"),(0,l.kt)("li",{parentName:"ol"},"Use the default Chart values "),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Next")),(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("inlineCode",{parentName:"li"},"Exposure")," select ",(0,l.kt)("inlineCode",{parentName:"li"},"External")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,l.kt)("h2",{id:"get-the-webhook-url"},"Get the webhook URL"),(0,l.kt)("p",null,"Before we can configure the webhook for the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-world")," repo in Gitea, we will need the webhook URL. You can find this webhook URL for your build in the list of Builds. Add the webhook URL to your clipboard."),(0,l.kt)("p",null,"Also notice that the status of the Build shows an exclamation mark. This is because Otomi created the Pipeline, but the PipelineRun is not yet created because it was not triggered yet."),(0,l.kt)("h2",{id:"create-a-webhook"},"Create a Webhook"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Otomi Console, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"apps")," the left menu and then open ",(0,l.kt)("inlineCode",{parentName:"li"},"Gitea")),(0,l.kt)("li",{parentName:"ol"},"In the top menu of Gitea, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Explore")," and then on the ",(0,l.kt)("inlineCode",{parentName:"li"},"hello-world")," repo"),(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Settings")," (top right) and then to ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhooks")),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Webhook")," and select ",(0,l.kt)("inlineCode",{parentName:"li"},"Gitea")),(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("inlineCode",{parentName:"li"},"Target URL"),", paste the webhook URL from your clipboard."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Webhook"))),(0,l.kt)("h2",{id:"trigger-the-build"},"Trigger the build"),(0,l.kt)("p",null,"You can now trigger the build by doing a commit in the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello-world")," repo, or by testing the webhook. Let's test the webhook:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Gitea, go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Settings")," (top right) of the ",(0,l.kt)("inlineCode",{parentName:"li"},"hello-world")," repo and then to ",(0,l.kt)("inlineCode",{parentName:"li"},"Webhooks")),(0,l.kt)("li",{parentName:"ol"},"Click on the webhook we just created"),(0,l.kt)("li",{parentName:"ol"},"In the bottom, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Test Delivery"))),(0,l.kt)("h2",{id:"check-the-status-of-the-workload"},"Check the status of the Workload"),(0,l.kt)("p",null,"Go to Workloads and click on the Argo CD ",(0,l.kt)("inlineCode",{parentName:"p"},"application")," link of the Workload created by the Project. What do you see? The Argo CD application is still in a ",(0,l.kt)("inlineCode",{parentName:"p"},"Degraded")," state because the image build has not completed yet. When the build in finished and the image can be pulled, the status of the application will automatically become ",(0,l.kt)("inlineCode",{parentName:"p"},"Healthy"),"."),(0,l.kt)("h2",{id:"check-the-status-of-the-service"},"Check the status of the Service"),(0,l.kt)("p",null,"When the state of the Workload becomes ",(0,l.kt)("inlineCode",{parentName:"p"},"Healthy"),", the URL of the Service created by the Project will show the following page:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hello World",src:a(2198).Z,width:"778",height:"182"})),(0,l.kt)("h2",{id:"change-the-code-and-push-the-commit"},"Change the code and push the commit"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"hello-world")," repository"),(0,l.kt)("li",{parentName:"ol"},"Edit the ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," and set the ",(0,l.kt)("inlineCode",{parentName:"li"},"Version")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"1.4.0")),(0,l.kt)("li",{parentName:"ol"},"Commit the changes")),(0,l.kt)("p",null,"Check the URL again. After a couple of minutes you will see the following page:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Hello World",src:a(5436).Z,width:"890",height:"252"})))}c.isMDXComponent=!0},5436:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hello-world-2-671a268fda45f814837a1a130d96823a.png"},2198:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/hello-world-ff027196740055b940f6785f98b26500.png"}}]);