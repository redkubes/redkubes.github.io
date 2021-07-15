(self.webpackChunkotomi_docs=self.webpackChunkotomi_docs||[]).push([[631],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},995:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],l={slug:"ee/teams",title:"Teams"},s={unversionedId:"ee-configuring-teams",id:"ee-configuring-teams",isDocsHomePage:!1,title:"Teams",description:"This page describes how to create a team, and how to edit a team. Both creating and editing a team use the same form.",source:"@site/docs/ee-configuring-teams.md",sourceDirName:".",slug:"/ee/teams",permalink:"/docs/ee/teams",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/ee-configuring-teams.md",version:"current",frontMatter:{slug:"ee/teams",title:"Teams"},sidebar:"mainSidebar",previous:{title:"Clusters",permalink:"/docs/ee/clusters"},next:{title:"Services",permalink:"/docs/ee/services"}},u=[{value:"Name",id:"name",children:[]},{value:"OIDC",id:"oidc",children:[]},{value:"Alerting Endpoint",id:"alerting-endpoint",children:[]},{value:"Resource Quota",id:"resource-quota",children:[]},{value:"Azure Monitor (Only on Azure)",id:"azure-monitor-only-on-azure",children:[]},{value:"Team Self Service Flags",id:"team-self-service-flags",children:[{value:"Service",id:"service",children:[]},{value:"Team",id:"team",children:[]}]}],c={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes how to create a team, and how to edit a team. Both creating and editing a team use the same form."),(0,o.kt)("p",null,"Screenshot (admin role):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Console: new team",src:r(1816).Z})),(0,o.kt)("h2",{id:"name"},"Name"),(0,o.kt)("p",null,"A name for the team (lowercase). Can not be changed afterwards! Will result in the creation of namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"team-$NAME"),"."),(0,o.kt)("h2",{id:"oidc"},"OIDC"),(0,o.kt)("p",null,"An OIDC group name/id granting access to this team."),(0,o.kt)("h2",{id:"alerting-endpoint"},"Alerting Endpoint"),(0,o.kt)("p",null,"In order to receive alerts, please choose an alerting endpoint."),(0,o.kt)("p",null,"NOTE: When a field is left empty it will default to the global admin value for that field, if that exists."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Slack"),(0,o.kt)("td",{parentName:"tr",align:null},"Needs a slack webhook url that will give alerts for warnings and criticals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microsoft Teams"),(0,o.kt)("td",{parentName:"tr",align:null},"Needs two alerting endpoints, for both warnings as well as criticals")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Email"),(0,o.kt)("td",{parentName:"tr",align:null},"You may provide a list of email addresses for both 'Non Critical' and 'Critical'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"Global (admin) alerting endpoint configuration will be used")))),(0,o.kt)("h2",{id:"resource-quota"},"Resource Quota"),(0,o.kt)("p",null,'List of kubernetes resource quota. Should adhere to the "spec.hard" format as described ',(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"here"),". Not validated as there is no schema published. Change at your own risk."),(0,o.kt)("h2",{id:"azure-monitor-only-on-azure"},"Azure Monitor (Only on Azure)"),(0,o.kt)("p",null,"Azure Monitor is the platform service that provides a single source for monitoring Azure resources."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"No Azure monitoring"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure monitoring with global settings"),(0,o.kt)("td",{parentName:"tr",align:null},"Takes on the global settings")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Azure monitoring with custom settings"),(0,o.kt)("td",{parentName:"tr",align:null},"Overrides any global settings")))),(0,o.kt)("h2",{id:"team-self-service-flags"},"Team Self Service Flags"),(0,o.kt)("p",null,"A uses with the ",(0,o.kt)("inlineCode",{parentName:"p"},"otomi-admin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"team-admin")," role can create teams and grant the team permissions to modify certain configuration parameters."),(0,o.kt)("h3",{id:"service"},"Service"),(0,o.kt)("p",null,"Select Ingress to grant the team the permission to configure exposure for ",(0,o.kt)("a",{parentName:"p",href:"services"},"services"),"."),(0,o.kt)("h3",{id:"team"},"Team"),(0,o.kt)("h4",{id:"alerts"},"Alerts"),(0,o.kt)("p",null,"Select to grant the team the permission to configure ",(0,o.kt)("a",{parentName:"p",href:"#alerting-endpoint"},"Alerts")," for the team."),(0,o.kt)("h4",{id:"oidc-1"},"OIDC"),(0,o.kt)("p",null,"Select to grant the team the permission to configure ",(0,o.kt)("a",{parentName:"p",href:"#oidc"},"OIDC")," for the team."),(0,o.kt)("h4",{id:"resourcequota"},"resourceQuota"),(0,o.kt)("p",null,"Select to grant the team the permission to configure ",(0,o.kt)("a",{parentName:"p",href:"#resource-quota"},"Resource Quota")," for the team."))}m.isMDXComponent=!0},1816:function(e,t,r){"use strict";t.Z=r.p+"assets/images/console-new-team-9a18f1119017f02a383d5159e0f23ef5.png"}}]);