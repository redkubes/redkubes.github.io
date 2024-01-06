"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"lab-9",title:"Deploy your application",sidebar_label:"Deploy app"},l=void 0,s={unversionedId:"get-started/labs/lab-9",id:"get-started/labs/lab-9",title:"Deploy your application",description:"Now that you have access to the team namespace and have pushed your image to Harbor, you can now deploy your application.",source:"@site/docs/get-started/labs/lab-9.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-9",permalink:"/docs/get-started/labs/lab-9",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-9.md",tags:[],version:"current",frontMatter:{slug:"lab-9",title:"Deploy your application",sidebar_label:"Deploy app"}},i={},p=[{value:"Create a Deployment and Service",id:"create-a-deployment-and-service",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that you have access to the team namespace and have pushed your image to Harbor, you can now deploy your application."),(0,r.kt)("p",null,"In this case we'll use a demo app called hello. If you like you can clone the repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/redkubes/nodejs-helloworld.git\n")),(0,r.kt)("p",null,"And then tag and build the image as you have done in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/get-started/labs/lab-5"},"Push images")," lab."),(0,r.kt)("h2",{id:"create-a-deployment-and-service"},"Create a Deployment and Service"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-svc.yaml")," file and copy/paste the following 2 Kubernetes manifests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: hello-svc\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: hello-svc\n  template:\n    metadata:\n      labels:\n        app: hello-svc\n    spec:\n      containers:\n        - name: hello-svc\n          image: harbor.<your-domain>/<team-name>/<image-name>:<tag>\n          resources:\n            limits:\n              memory: '128Mi'\n              cpu: '200m'\n            requests:\n              memory: '64Mi'\n              cpu: '100m'\n          securityContext:\n            runAsUser: 1001\n          ports:\n            - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: hello-svc\nspec:\n  selector:\n    app: hello-svc\n  ports:\n    - port: 80\n      targetPort: 8080\n")),(0,r.kt)("p",null,"Now apply the manifest to Kubernetes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f hello-svc.yaml\n")),(0,r.kt)("p",null,"Check to see if the pod is running and the service has been created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl describe svc hello\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The example here is only a very simplified one. You can dive into the world of Kubernetes deployments, or you can ask your platform administrator to enable Knative Serving. Knative will then take care of auto scaling for you. We will also soon release a new feature that will help to remove the struggle of creating and managing Kubernetes manifests. Stay tuned!")))}u.isMDXComponent=!0}}]);