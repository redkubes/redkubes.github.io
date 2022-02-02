"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[9229],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8022:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={slug:"console/teams",title:"Teams"},s=void 0,m={unversionedId:"ui-teams",id:"ui-teams",title:"Teams",description:"Console: new team",source:"@site/docs/ui-teams.md",sourceDirName:".",slug:"/console/teams",permalink:"/docs/console/teams",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ui-teams.md",tags:[],version:"current",frontMatter:{slug:"console/teams",title:"Teams"},sidebar:"mainSidebar",previous:{title:"Policies",permalink:"/docs/console/policies"},next:{title:"Services",permalink:"/docs/console/platform-services"}},c=[{value:"Creating Teams",id:"creating-teams",children:[],level:2}],p={toc:c};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Console: new team",src:a(2127).Z,width:"2642",height:"1642"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Teams are tenants on the platform to support Development/DevOps teams, projects or even DTAP"),(0,o.kt)("li",{parentName:"ul"},"A team will get access to Otomi Console, providing access to all the shared tools"),(0,o.kt)("li",{parentName:"ul"},"Teams can choose to receive alerts in Microsoft Teams, Slack or email and each team will get access to a project in Harbor and a space in Vault to manage secrets"),(0,o.kt)("li",{parentName:"ul"},"Teams can be allowed self-service features like configure ingress, configure a notification receiver for alerts, change the OIDC group mapping and download the KubeConfig.")),(0,o.kt)("h2",{id:"creating-teams"},"Creating Teams"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login with a user who is a member of the otomi-admin or team-admin role"),(0,o.kt)("li",{parentName:"ul"},"Provide a name for the team (lowercase). The teamname can not be changed afterwards! Creating a team will result in the creation of namespace ",(0,o.kt)("inlineCode",{parentName:"li"},"team-$NAME")),(0,o.kt)("li",{parentName:"ul"},"Provide a OIDC group name/id granting for granting access to team. Only members of the group will get access to the team"),(0,o.kt)("li",{parentName:"ul"},"In order to receive alerts, please choose an alerting endpoint:")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When a field is left empty it will default to the global admin value for that field, if that exists."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Slack"),(0,o.kt)("td",{parentName:"tr",align:null},"Needs a slack webhook url that will give alerts for warnings and criticals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Teams"),(0,o.kt)("td",{parentName:"tr",align:null},"Needs two alerting endpoints, for both warnings as well as criticals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email"),(0,o.kt)("td",{parentName:"tr",align:null},"You may provide a list of email addresses for both 'Non Critical' and 'Critical'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"If none selected"),(0,o.kt)("td",{parentName:"tr",align:null},"Global (admin) alerting endpoint configuration will be used")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Resource Quotas")),(0,o.kt)("p",null,'When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described ',(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"here"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is no validation as there is no schema published. Add/change resource quota at your own risk."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure Azure Monitor (on Azure only)")),(0,o.kt)("p",null,"Azure Monitor is the platform service that provides a single source for monitoring Azure resources."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"No Azure monitoring"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure monitoring with global settings"),(0,o.kt)("td",{parentName:"tr",align:null},"Takes on the global settings")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure monitoring with custom settings"),(0,o.kt)("td",{parentName:"tr",align:null},"Overrides any global settings")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Team self service flags")),(0,o.kt)("p",null,"A uses with the ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi-admin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"team-admin")," role can create teams and grant the team permissions to modify certain configuration parameters."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ingress"),(0,o.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure exposure for ",(0,o.kt)("a",{parentName:"td",href:"services"},"services"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Team / Alerts"),(0,o.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure Alerts for the team.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Team / OIDC"),(0,o.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure OIDC for the team.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Team / resourceQuota"),(0,o.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to configure Resource Quota for the team.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Team / downloadKubeConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"Select to grant the team the permission to download the KubeConfig file")))))}u.isMDXComponent=!0},2127:function(e,t,a){t.Z=a.p+"assets/images/teams-70e2b4c9cb68dc8d967b965980254433.png"}}]);