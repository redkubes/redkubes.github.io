(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(124)),a={slug:"prerequisites",title:"Prerequisites"},c={unversionedId:"inst-prerequisites",id:"inst-prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"1. Working k8s cluster(s)",source:"@site/docs/inst-prerequisites.md",slug:"/prerequisites",permalink:"/docs/prerequisites",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/inst-prerequisites.md",version:"current",sidebar:"mainSidebar",previous:{title:"Installation Overview",permalink:"/docs/installation"},next:{title:"Setup",permalink:"/docs/setup"}},l=[{value:"1. Working k8s cluster(s)",id:"1-working-k8s-clusters",children:[]},{value:"2. Kubectl running",id:"2-kubectl-running",children:[]},{value:"3. Docker running",id:"3-docker-running",children:[]},{value:"4. KMS credentials to manage keys for encryption (optional)",id:"4-kms-credentials-to-manage-keys-for-encryption-optional",children:[]},{value:"5. Pull secret for the API (optional)",id:"5-pull-secret-for-the-api-optional",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1-working-k8s-clusters"},"1. Working k8s cluster(s)"),Object(o.b)("p",null,"Otomi needs a working kubernetes cluster to deploy on. It supports two versions down from 1.19, so at a minimum 1.17 is required. If you don't have access with kubectl to your cluster, you may have to pull the credentials from the cloud first:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Azure: ",Object(o.b)("inlineCode",{parentName:"li"},"az aks get-credentials --resource-group $RG --name $CLUSTER_NAME --admin")),Object(o.b)("li",{parentName:"ul"},"AWS: ",Object(o.b)("inlineCode",{parentName:"li"},"aws eks update-kubeconfig --name $CLUSTER_NAME")),Object(o.b)("li",{parentName:"ul"},"Google: ",Object(o.b)("inlineCode",{parentName:"li"},"gcloud container clusters get-credentials $CLUSTER_NAME --region europe-west4 --project xxx"))),Object(o.b)("p",null,"If you are not logged in with the correct credentials then re-login first:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Azure: ",Object(o.b)("inlineCode",{parentName:"li"},"az login")),Object(o.b)("li",{parentName:"ul"},"AWS: ",Object(o.b)("inlineCode",{parentName:"li"},"aws login eks")),Object(o.b)("li",{parentName:"ul"},"Google: ",Object(o.b)("inlineCode",{parentName:"li"},"gcloud auth login"))),Object(o.b)("h3",{id:"2-kubectl-running"},"2. Kubectl running"),Object(o.b)("p",null,"To be able to target different kube contexts, kubectl needs to be installed."),Object(o.b)("h3",{id:"3-docker-running"},"3. Docker running"),Object(o.b)("p",null,"Otomi runs everything else from containers, so please start docker if you haven't already."),Object(o.b)("h3",{id:"4-kms-credentials-to-manage-keys-for-encryption-optional"},"4. KMS credentials to manage keys for encryption (optional)"),Object(o.b)("p",null,"If you would like the secrets in the values repo to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mozilla/sops"}),"sops"),", the tool used for encryption by otomi. Please read up there on how to work with sops, as it is out of scope for these docs."),Object(o.b)("h3",{id:"5-pull-secret-for-the-api-optional"},"5. Pull secret for the API (optional)"),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Otomi Enterprise Edition license needed")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you have a license for Otomi EE you can run the api, unlocking self service features."))),Object(o.b)("p",null,"When you have a paid license to use the api you will have a pull secret. Please keep it handy for the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"setup"}),"setup steps"),"."))}u.isMDXComponent=!0}}]);