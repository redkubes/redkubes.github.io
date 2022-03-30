"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[6143],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4142:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={slug:"tutorials/create-secret-vault",title:"Create a secret in Hashicorp Vault",sidebar_label:"Create a secret in Vault"},c=void 0,u={unversionedId:"tutorial-7-create-secret",id:"tutorial-7-create-secret",title:"Create a secret in Hashicorp Vault",description:"In his tutorial, you are going to create a secret in Hashicorp Vault.",source:"@site/docs/tutorial-7-create-secret.md",sourceDirName:".",slug:"/tutorials/create-secret-vault",permalink:"/docs/tutorials/create-secret-vault",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-7-create-secret.md",tags:[],version:"current",frontMatter:{slug:"tutorials/create-secret-vault",title:"Create a secret in Hashicorp Vault",sidebar_label:"Create a secret in Vault"},sidebar:"mainSidebar",previous:{title:"Expose a service",permalink:"/docs/tutorials/expose-service"},next:{title:"Add secret to Kubernetes",permalink:"/docs/tutorials/add-secret"}},s={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In his tutorial, you are going to create a secret in Hashicorp Vault."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the left panel under the Team demo, click ",(0,i.kt)("inlineCode",{parentName:"li"},"Otomi Apps")," then click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Vault")),(0,i.kt)("li",{parentName:"ul"},"Sign in with Method ",(0,i.kt)("inlineCode",{parentName:"li"},"OIDC"),", skip role and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Sign in with OIDC Provider"))),(0,i.kt)("p",null,"You are now automatically redirected to the team space ",(0,i.kt)("inlineCode",{parentName:"p"},"teams/team-demo/"),"created in Vault."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Create secret")),(0,i.kt)("li",{parentName:"ul"},"Provide a name for the secret. We'll use the name hello. The name of the secret will be: ",(0,i.kt)("inlineCode",{parentName:"li"},"teams/team-demo/hello")),(0,i.kt)("li",{parentName:"ul"},"In the key field, fill in ",(0,i.kt)("inlineCode",{parentName:"li"},"TARGET")),(0,i.kt)("li",{parentName:"ul"},"In the value field, fill in ",(0,i.kt)("inlineCode",{parentName:"li"},"party people")),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"save"))),(0,i.kt)("p",null,'The secret is now created in vault. In the next tutorial, you are going to "inject" the secret in the Otomi service configuration.'))}d.isMDXComponent=!0}}]);