(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(188)),c={slug:"tutorials/use-secret",title:"Use secrets in Kubernetes",sidebar_label:"Use secret in Kubernetes"},i={unversionedId:"tutorial-9-use-secret",id:"tutorial-9-use-secret",isDocsHomePage:!1,title:"Use secrets in Kubernetes",description:"In his tutorial, you are going to use the secret created in Hashicorp Vault and added to Kubernetes using the Otomi Secrets feature in a Kubernetes deployment.",source:"@site/docs/tutorial-9-use-secret.md",slug:"/tutorials/use-secret",permalink:"/docs/tutorials/use-secret",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-9-use-secret.md",version:"current",sidebar_label:"Use secret in Kubernetes",sidebar:"mainSidebar",previous:{title:"Securely add a secret to Kubernetes",permalink:"/docs/tutorials/add-secret"},next:{title:"Create and expose a Knative service with Otomi",permalink:"/docs/tutorials/create-ksvc-otomi"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In his tutorial, you are going to use the secret created in Hashicorp Vault and added to Kubernetes using the Otomi Secrets feature in a Kubernetes deployment."),Object(a.b)("p",null,"Add the following snippet to the ",Object(a.b)("inlineCode",{parentName:"p"},"hello-svc.yaml")," file created in the previous tutorial to the ",Object(a.b)("inlineCode",{parentName:"p"},"spec:")," section of the deployment:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"env:\n  - name: TARGET\n    valueFrom:\n      secretKeyRef:\n        name: hello\n        key: TARGET\n")),Object(a.b)("p",null,"And apply the manifest to Kubernetes:"),Object(a.b)("p",null,"bash kubectl apply -f hello-svc.yaml"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"\nGo to https://hello.team-demo.your-domain.com/\n\nAs you can see, the text on the page now shows the value `party people` of the secret you created in Vault.\n\nYou can do the same for the Knative service `hello-ksvc`.\n")))}l.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(m,i(i({ref:t},u),{},{components:r})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);