"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6611],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(k,n(n({ref:t},p),{},{components:a})):r.createElement(k,n({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var d=2;d<l;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=a(7462),o=(a(7294),a(3905));const l={slug:"lab-13",title:"Deploy workloads using Otomi",sidebar_label:"Create workloads"},n=void 0,i={unversionedId:"get-started/labs/lab-13",id:"get-started/labs/lab-13",title:"Deploy workloads using Otomi",description:"In the previous lab we deployed a workload using Argo CD with a BYO manifest and we explored the Catalog. In this lab we'll create a workload (a Kubernetes Deployment) using the Catalog and the Workload feature.",source:"@site/docs/get-started/labs/lab-13.md",sourceDirName:"get-started/labs",slug:"/get-started/labs/lab-13",permalink:"/docs/get-started/labs/lab-13",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/labs/lab-13.md",tags:[],version:"current",frontMatter:{slug:"lab-13",title:"Deploy workloads using Otomi",sidebar_label:"Create workloads"},sidebar:"mainSidebar",previous:{title:"Explore the Catalog",permalink:"/docs/get-started/labs/lab-29"},next:{title:"Expose services",permalink:"/docs/get-started/labs/lab-18"}},s={},d=[{value:"Create a Workload from the Catalog",id:"create-a-workload-from-the-catalog",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the previous lab we deployed a workload using Argo CD with a BYO manifest and we explored the Catalog. In this lab we'll create a workload (a Kubernetes Deployment) using the Catalog and the Workload feature."),(0,o.kt)("h2",{id:"create-a-workload-from-the-catalog"},"Create a Workload from the Catalog"),(0,o.kt)("p",null,"Before creating a workload from the Catalog, we'll need the ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tag")," of the image to use. Go to the list of Builds and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"repository")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"blue")," build to your clipboard. Remember that the tag is ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),"."),(0,o.kt)("p",null,"You can create a workload from the developer catalog:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Catalog")," in the left menu and click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"k8s-deployment"),"template"),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Values")),(0,o.kt)("li",{parentName:"ol"},"Add the Name ",(0,o.kt)("inlineCode",{parentName:"li"},"blue")),(0,o.kt)("li",{parentName:"ol"},"Leave the ",(0,o.kt)("inlineCode",{parentName:"li"},"Auto image updater")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Disabled")),(0,o.kt)("li",{parentName:"ol"},"In the workload ",(0,o.kt)("inlineCode",{parentName:"li"},"values"),", change the following parameters:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"image:\n  repository: <paste from clipboard>\n  tag: latest\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workloads",src:a(9968).Z,width:"3520",height:"2126"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Submit")," and then ",(0,o.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))),(0,o.kt)("p",null,"Otomi will now create all the needed Argo CD resources to deploy your workload. "),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Workloads")," in the left menu. You will now see a list of all Workloads and there status:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workloads",src:a(4583).Z,width:"3518",height:"2088"})),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"In the workloads list, click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Application")," link of your workload to see the status of your workload in Argo CD:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workloads",src:a(5123).Z,width:"3520",height:"1704"})),(0,o.kt)("p",null,"The values of a workload can be changed at any time. Changes will automatically be synchronized."))}c.isMDXComponent=!0},9968:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/workloads-1-7ffc4a919fb1afeb70bad4401ada6fcf.png"},4583:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/workloads-2-5cad51ba977ab4ed7559da6d81a27101.png"},5123:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/workloads-3-57afb6a313e52744d5f798989d7d2980.png"}}]);