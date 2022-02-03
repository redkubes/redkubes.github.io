"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"apps/vault",title:"Working with Hashicorp Vault",sidebar_label:"Hashicorp Vault"},l=void 0,u={unversionedId:"app-vault",id:"app-vault",title:"Working with Hashicorp Vault",description:"Vault is a tool for safe use of secrets. A secret is something (e.g. a password) to which you want to restrict access and to be able to find out who used which secret based on an audit log. Read more about Vault here",source:"@site/docs/app-vault.md",sourceDirName:".",slug:"/apps/vault",permalink:"/docs/apps/vault",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-vault.md",tags:[],version:"current",frontMatter:{slug:"apps/vault",title:"Working with Hashicorp Vault",sidebar_label:"Hashicorp Vault"},sidebar:"mainSidebar",previous:{title:"Kubeapps",permalink:"/docs/apps/kubeapps"},next:{title:"Gatekeeper",permalink:"/docs/apps/gatekeeper"}},c=[{value:"Sign in with full access",id:"sign-in-with-full-access",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Vault is a tool for safe use of secrets. A secret is something (e.g. a password) to which you want to restrict access and to be able to find out who used which secret based on an audit log. Read more about Vault ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/what-is-vault"},"here")),(0,o.kt)("p",null,"HashiCorp Vault is a shared application for securely storing and managing secrets. Vault has been made tennant aware in Otomi. When Vault is enabled, each team will automatically be provided with a space in Vault and is only allowed to see and manage secrets owned by the team. Vault uses the generic Otomi integration options for user management. Based on the roles in Otomi, users get access to a space in Vault. A team user automatically gains access to the secrets of the team. The authentication (via OIDC) is also integrated offering SSO."),(0,o.kt)("p",null,"Vault (like all parts of Otomi) runs natively on Kubernetes. To prevent data from Vault being lost during a rolling cluster upgrade, data persistence can be configured in combination with external (blob) storage. Read more ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/configuration/storage/azure"},"here")," for configuring data persistence for Vault on Azure."),(0,o.kt)("h2",{id:"sign-in-with-full-access"},"Sign in with full access"),(0,o.kt)("p",null,"If you would like to sign in into Vault with full access (and not with limited access provided by Otomi), you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get the token")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get secret -n vault vault-unseal-keys -o jsonpath='{.data.vault-root}' | base64 -d | pbcopy\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Vault and sign in with method ",(0,o.kt)("inlineCode",{parentName:"p"},"token"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the token generated in step 1."))))}d.isMDXComponent=!0}}]);