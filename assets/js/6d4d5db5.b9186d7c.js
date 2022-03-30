"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1676],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3283:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"installation/optional",title:"Optional configuration"},s=void 0,u={unversionedId:"inst-optional",id:"inst-optional",title:"Optional configuration",description:"You can optionally configure Otomi to use an external IDP (Azure AD), use an external Key Management Service (KMS) provider for SOPS and use a DNS zone in combination with LetsEncrpt certificates. Below you can find detailed instructions on how to set up Azure AD as an external IDP and configure KMS. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta.",source:"@site/docs/inst-optional.md",sourceDirName:".",slug:"/installation/optional",permalink:"/docs/installation/optional",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/inst-optional.md",tags:[],version:"current",frontMatter:{slug:"installation/optional",title:"Optional configuration"},sidebar:"mainSidebar",previous:{title:"Minimal requirements",permalink:"/docs/installation/prerequisites"},next:{title:"Install from chart",permalink:"/docs/installation/chart"}},p={},d=[{value:"Use DNS and LetsEncrypt",id:"use-dns-and-letsencrypt",level:2},{value:"Use Azure AD as IDP",id:"use-azure-ad-as-idp",level:2},{value:"Use KMS to manage keys for encryption",id:"use-kms-to-manage-keys-for-encryption",level:2}],c={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can optionally configure Otomi to use an external IDP (Azure AD), use an external Key Management Service (KMS) provider for SOPS and use a DNS zone in combination with LetsEncrpt certificates. Below you can find detailed instructions on how to set up Azure AD as an external IDP and configure KMS. We will soon add more instructions for other IDPs, such as Amazon Incognito, Google Identity, and Okta."),(0,i.kt)("h2",{id:"use-dns-and-letsencrypt"},"Use DNS and LetsEncrypt"),(0,i.kt)("p",null,"By default, Otomi uses the public IP address of the load balancer for nameresolving using ",(0,i.kt)("a",{parentName:"p",href:"http://nip.io"},"nip.io"),". To use DNS with LetsEncrypt, follow these instructions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/aws.md"},"Setting up external DNS in AWS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/azure.md"},"Setting up external DNS in Azure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/external-dns/blob/master/docs/tutorials/gke.md"},"Setting up external DNS in Google"))),(0,i.kt)("h2",{id:"use-azure-ad-as-idp"},"Use Azure AD as IDP"),(0,i.kt)("p",null,"The authentication of brokered identities through Azure AD requires a service principal with certain Azure AD API permissions. An app registration needs to be created with the following API permissions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API / Permission name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / email"),(0,i.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,i.kt)("td",{parentName:"tr",align:null},"View users' email address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / openid"),(0,i.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,i.kt)("td",{parentName:"tr",align:null},"Sign users in")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / profile"),(0,i.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,i.kt)("td",{parentName:"tr",align:null},"View users' basic profile")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft Graph / User.Read"),(0,i.kt)("td",{parentName:"tr",align:null},"Delegated"),(0,i.kt)("td",{parentName:"tr",align:null},"Sign in and read user profile")))),(0,i.kt)("p",null,"And the following token configurations:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Claim"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Token type"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional settings"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"family_name"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides the last name, surename, or family name"),(0,i.kt)("td",{parentName:"tr",align:null},"ID"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"given_name"),(0,i.kt)("td",{parentName:"tr",align:null},'Provides the first or "give" name of the user'),(0,i.kt)("td",{parentName:"tr",align:null},"ID"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"groups"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional formatting for group claims"),(0,i.kt)("td",{parentName:"tr",align:null},"ID, Access, SAML"),(0,i.kt)("td",{parentName:"tr",align:null},"Default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"upn"),(0,i.kt)("td",{parentName:"tr",align:null},"An identifier for the user that can be used ..."),(0,i.kt)("td",{parentName:"tr",align:null},"ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Default")))),(0,i.kt)("p",null,"Note that the group type should be set to 'security groups'."),(0,i.kt)("p",null,'At the \'Authentication\' tab you should be able to set the following callback URL\xa7s and enable that both "Access tokens" and "ID tokens" are issued and public client flows are allowed:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://keycloak.<dns-zone-name>/realms/master/broker/otomi-idp/endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://keycloak.<dns-zone-name>"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"otomi-idp")," is the default KeyCloak alias (shown as login title). To use another alias, add the following to the chart values:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"charts:\n  keycloak:\n    idp:\n      alias: <your-alias>\n")))),(0,i.kt)("h2",{id:"use-kms-to-manage-keys-for-encryption"},"Use KMS to manage keys for encryption"),(0,i.kt)("p",null,"If you would like the secrets in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," repository to be encrypted, you will have to setup an account with your Key Management Service (KMS) provider. It is needed by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops"},"sops"),", the tool used for encryption."),(0,i.kt)("p",null,"Find quickstart documentation below on how to setup KMS access per supported provider:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/kms/getting-started/"},"AWS KMS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/key-vault/#getting-started"},"Azure Vault")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/kms/docs/quickstart"},"Google KMS"))),(0,i.kt)("p",null,"Follow the instructions of the provider of your choosing and jot down the credentials obtained for the next steps."))}m.isMDXComponent=!0}}]);