(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[884],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4383:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],s={slug:"sre/known-issues/harbor",title:"Known Issues: Harbor",sidebar_label:"Harbor"},l={unversionedId:"ki-harbor",id:"ki-harbor",isDocsHomePage:!1,title:"Known Issues: Harbor",description:"When working with Harbor you can expect to run into the following issues:",source:"@site/docs/ki-harbor.md",sourceDirName:".",slug:"/sre/known-issues/harbor",permalink:"/docs/sre/known-issues/harbor",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ki-harbor.md",version:"current",sidebar_label:"Harbor",frontMatter:{slug:"sre/known-issues/harbor",title:"Known Issues: Harbor",sidebar_label:"Harbor"},sidebar:"mainSidebar",previous:{title:"Known Issues: Current Otomi CLI",permalink:"/docs/sre/known-issues/cli"},next:{title:"Known Issues: Istio",permalink:"/docs/sre/known-issues/istio"}},u=[{value:"Docker login",id:"docker-login",children:[]},{value:"OIDC: conflicting user",id:"oidc-conflicting-user",children:[]},{value:"Pod multi-attach error",id:"pod-multi-attach-error",children:[]}],c={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When working with Harbor you can expect to run into the following issues:"),(0,a.kt)("h2",{id:"docker-login"},"Docker login"),(0,a.kt)("p",null,"Unfortunately Harbor has not yet delivered a user friendly mechanism for users to interface with their registry via docker cli. To use docker cli one has to login with the registry EVERY time before using the cli. At the same time this fails when one is not logged into the Harbor dashboard beforehand. In order to login without issues one has to follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ONLY ONCE: get the cli secret from the Harbor dashboard (via User Profile)."),(0,a.kt)("li",{parentName:"ul"},"refresh Harbor dashboard web view (this will refresh the OIDC auth token)"),(0,a.kt)("li",{parentName:"ul"},"docker login using the cli secret as password: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker login harbor.<cluster-domain> -u < User_Name > -p <CLI secret>")),(0,a.kt)("li",{parentName:"ul"},"do your docker pull/push etc within the token TTL window (60 secs)")),(0,a.kt)("p",null,"Usually this is not a problem as team users don't pull or push these images directly. We are working on solving this, and expect to have a fix soon."),(0,a.kt)("h2",{id:"oidc-conflicting-user"},"OIDC: conflicting user"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem:")),(0,a.kt)("p",null,"Error while logging in to harbor with OIDC: ",(0,a.kt)("inlineCode",{parentName:"p"},"Conflict, the user with same username or email has been onboarded."),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cause:")),(0,a.kt)("p",null,"By redeploing keycloak the same user gets a new ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," claim in ",(0,a.kt)("inlineCode",{parentName:"p"},"openid")," scope. Harbor uses ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"iss")," claims in order to match them to a user from its database (see: ",(0,a.kt)("inlineCode",{parentName:"p"},"subiss")," column at ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc_user")," table in ",(0,a.kt)("inlineCode",{parentName:"p"},"registry")," database). If the same user identifies with a new sub then harbor tries to create a new entry in the ",(0,a.kt)("inlineCode",{parentName:"p"},"harbor_user")," database table and it fails on the username column uniqueness constraint."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution:")),(0,a.kt)("p",null,"Please check up on this link when this problem occurs, because a fix might already be released: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/goharbor/harbor/issues/13674"},"goharbor/harbor#13674"),". If so, please create a PR to fix this in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redkubes/otomi-core"},"otomi-core")," repo, or create an issue there. Otherwise continue:"),(0,a.kt)("p",null,"Connect to the database service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kh exec harbor-harbor-database-0 -it -- psql -U postgres\n")),(0,a.kt)("p",null,"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"registry")," database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\\c registry\n")),(0,a.kt)("p",null,"Find out the ",(0,a.kt)("inlineCode",{parentName:"p"},"<user_id>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT user_id FROM harbor_user WHERE username = '<user name>';\n")),(0,a.kt)("p",null,"Remove the user from the database"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM oidc_user WHERE user_id = <userid>;\nDELETE FROM harbor_user WHERE user_id = <userid>;\n")),(0,a.kt)("p",null,"Exit psql"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\\q\n")),(0,a.kt)("p",null,"Try to login once again and observe that you are asked to confirm your username."),(0,a.kt)("h2",{id:"pod-multi-attach-error"},"Pod multi-attach error"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem")),(0,a.kt)("p",null,"Kubernetes cannot schedule the ",(0,a.kt)("inlineCode",{parentName:"p"},"harbor-harbor-registry")," Pod."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cause")),(0,a.kt)("p",null,"Multi-Attach error occurs for persistent volumes that support only one writer at a time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"Delete an existing harbor registry replicaset. Note that this operation makes registry temporarely unavailable."))}p.isMDXComponent=!0}}]);