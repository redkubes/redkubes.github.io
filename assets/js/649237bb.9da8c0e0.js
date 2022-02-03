"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8463],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9488:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"console/team-settings",title:"Team Settings"},s=void 0,u={unversionedId:"ui-team-settings",id:"ui-team-settings",title:"Team Settings",description:"Team settings",source:"@site/docs/ui-team-settings.md",sourceDirName:".",slug:"/console/team-settings",permalink:"/docs/console/team-settings",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ui-team-settings.md",tags:[],version:"current",frontMatter:{slug:"console/team-settings",title:"Team Settings"},sidebar:"mainSidebar",previous:{title:"Secrets",permalink:"/docs/console/secrets"},next:{title:"Drone",permalink:"/docs/apps/drone"}},c=[{value:"Configure OIDC group mapping",id:"configure-oidc-group-mapping",children:[],level:2},{value:"Configure alert settings",id:"configure-alert-settings",children:[],level:2},{value:"Configure Resource Quotas",id:"configure-resource-quotas",children:[],level:2},{value:"Configure Azure Monitor (Azure only)",id:"configure-azure-monitor-azure-only",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Team settings",src:n(2359).Z,width:"2664",height:"1430"})),(0,o.kt)("p",null,"Based on the configured self-service flags, team members can change the settings of their team."),(0,o.kt)("h2",{id:"configure-oidc-group-mapping"},"Configure OIDC group mapping"),(0,o.kt)("p",null,"Change the OIDC group-mapping to allow access to the team based on group membership."),(0,o.kt)("h2",{id:"configure-alert-settings"},"Configure alert settings"),(0,o.kt)("p",null,"Change the alert settings and preferred notification receivers."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Slack"),(0,o.kt)("td",{parentName:"tr",align:null},"Needs a slack webhook url that will give alerts for warnings and criticals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Teams"),(0,o.kt)("td",{parentName:"tr",align:null},"Needs two alerting endpoints, for both warnings as well as criticals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email"),(0,o.kt)("td",{parentName:"tr",align:null},"You may provide a list of email addresses for both 'Non Critical' and 'Critical'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"If none selected"),(0,o.kt)("td",{parentName:"tr",align:null},"Global (admin) alerting endpoint configuration will be used")))),(0,o.kt)("h2",{id:"configure-resource-quotas"},"Configure Resource Quotas"),(0,o.kt)("p",null,'When required, add resource quota for the team. The resource quota should adhere to the "spec.hard" format as described ',(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"here"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"There is no validation as there is no schema published. Add/change resource quota at your own risk."))),(0,o.kt)("h2",{id:"configure-azure-monitor-azure-only"},"Configure Azure Monitor (Azure only)"),(0,o.kt)("p",null,"Azure Monitor is the platform service that provides a single source for monitoring Azure resources."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"No Azure monitoring"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure monitoring with global settings"),(0,o.kt)("td",{parentName:"tr",align:null},"Takes on the global settings")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure monitoring with custom settings"),(0,o.kt)("td",{parentName:"tr",align:null},"Overrides any global settings")))))}d.isMDXComponent=!0},2359:function(e,t,n){t.Z=n.p+"assets/images/team-apps-2769ce2dbb317e0ae73814642b4dbd75.png"}}]);