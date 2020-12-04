(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(124)),i={slug:"troubleshooting/harbor",title:"Troubleshooting: Harbor",sidebar_label:"Harbor"},c={unversionedId:"ts-harbor",id:"ts-harbor",isDocsHomePage:!1,title:"Troubleshooting: Harbor",description:"When working with Harbor you can expect to run into the following issues:",source:"@site/docs/ts-harbor.md",slug:"/troubleshooting/harbor",permalink:"/docs/troubleshooting/harbor",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ts-harbor.md",version:"current",sidebar_label:"Harbor",sidebar:"mainSidebar",previous:{title:"Troubleshooting: Otomi CLI",permalink:"/docs/troubleshooting/cli"},next:{title:"LM Overview",permalink:"/docs/lifecycle-management"}},b=[{value:"OIDC: conflicting user",id:"oidc-conflicting-user",children:[]}],s={rightToc:b};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When working with Harbor you can expect to run into the following issues:"),Object(a.b)("h2",{id:"oidc-conflicting-user"},"OIDC: conflicting user"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Problem:")),Object(a.b)("p",null,"Error while logging in to harbor with OIDC: ",Object(a.b)("inlineCode",{parentName:"p"},"Conflict, the user with same username or email has been onboarded."),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cause:")),Object(a.b)("p",null,"By redeploing keycloak the same user gets a new ",Object(a.b)("inlineCode",{parentName:"p"},"sub")," claim in ",Object(a.b)("inlineCode",{parentName:"p"},"openid")," scope. Harbor uses ",Object(a.b)("inlineCode",{parentName:"p"},"sub")," and ",Object(a.b)("inlineCode",{parentName:"p"},"iss")," claims in order to match them to a user from its database (see: ",Object(a.b)("inlineCode",{parentName:"p"},"subiss")," column at ",Object(a.b)("inlineCode",{parentName:"p"},"oidc_user")," table in ",Object(a.b)("inlineCode",{parentName:"p"},"registry")," database). If the same user identifies with a new sub then harbor tries to create a new entry in the ",Object(a.b)("inlineCode",{parentName:"p"},"harbor_user")," database table and it fails on the username column uniqueness constraint."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Solution:")),Object(a.b)("p",null,"Please check up on this link when this problem occurs, because a fix might already be released: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/goharbor/harbor/issues/13674"}),"goharbor/harbor#13674"),". If so, please create a PR to fix this in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-core"}),"otomi-core")," repo, or create an issue there. Otherwise continue:"),Object(a.b)("p",null,"Connect to the database service"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"kh exec harbor-harbor-database-0 -it -- psql -U postgres\n")),Object(a.b)("p",null,"Select the ",Object(a.b)("inlineCode",{parentName:"p"},"registry")," database"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"\\c registry\n")),Object(a.b)("p",null,"Find out the ",Object(a.b)("inlineCode",{parentName:"p"},"<user_id>")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"SELECT user_id FROM harbor_user WHERE username = '<user name>';\n")),Object(a.b)("p",null,"Remove the user from the database"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql"}),"DELETE FROM oidc_user WHERE user_id = <userid>;\nDELETE FROM harbor_user WHERE user_id = <userid>;\n")),Object(a.b)("p",null,"Exit psql"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"\\q\n")),Object(a.b)("p",null,"Try to login once again and observe that you are asked to confirm your username."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," otomi-core creates a harbor project for each team. Each harbor project is owned by the harbor admin user. Users get access to projects by group membership provided via the groups claim in the openid scope. It may happen that a user owns another project or it is assigned directly to a project. We do not support this and do not provide troubleshooting guide for that case."))}l.isMDXComponent=!0}}]);