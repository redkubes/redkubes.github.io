"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={slug:"lab-10",title:"View container logs",sidebar_label:"Lab 10"},i=void 0,l={unversionedId:"for-devs/get-started/lab-10",id:"for-devs/get-started/lab-10",title:"View container logs",description:"When your application is deployed, you would of course like to be able to see container logs for debugging purposes. Grafana Loki is used in Otomi for log aggregation. When Grafana Loki is enabled, you'll see the Loki app in your apps.",source:"@site/docs/for-devs/get-started/lab-10.md",sourceDirName:"for-devs/get-started",slug:"/for-devs/get-started/lab-10",permalink:"/docs/for-devs/get-started/lab-10",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-devs/get-started/lab-10.md",tags:[],version:"current",frontMatter:{slug:"lab-10",title:"View container logs",sidebar_label:"Lab 10"},sidebar:"mainSidebar",previous:{title:"lab 9",permalink:"/docs/for-devs/get-started/lab-9"},next:{title:"Lab 11",permalink:"/docs/for-devs/get-started/lab-11"}},s={},u=[{value:"View container logs",id:"view-container-logs",level:2},{value:"Creating shortcuts",id:"creating-shortcuts",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When your application is deployed, you would of course like to be able to see container logs for debugging purposes. Grafana Loki is used in Otomi for log aggregation. When Grafana Loki is enabled, you'll see the Loki app in your apps."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Only when Otomi is configured in multi-tenant mode, container logs of teams are split up between teams. This means you can only see the logs of your own team. If multi-tenancy is not enabled, you can see the logs of all containers running on the cluster. If you don't want other teams to see your logs, ask the administrator to enable the Otomi multi-tenancy feature.")),(0,o.kt)("h2",{id:"view-container-logs"},"View container logs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the Loki app in your team apps")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:n(2661).Z,width:"2182",height:"1098"})),(0,o.kt)("p",null,"In Grafana, you are directed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Explore")," section. Otomi already added a query for you, showing the logs of all containers running in your team namespace"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:n(7511).Z,width:"2214",height:"1012"})),(0,o.kt)("p",null,"Adjust the query to your own needs. Loki uses LogQL as a query language. Learn more about LOgQL ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/logql/"},"here")),(0,o.kt)("h2",{id:"creating-shortcuts"},"Creating shortcuts"),(0,o.kt)("p",null,"When you created a custom query that you would like to use more often, or would like to share with the team, you can create a shortcut in Otomi."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the absolute path of your query"),(0,o.kt)("li",{parentName:"ul"},"In the apps section, click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," icon of the Loki app")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:n(429).Z,width:"2548",height:"1080"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Shortcuts")," tab")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:n(7133).Z,width:"2196",height:"1060"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"edit")),(0,o.kt)("li",{parentName:"ul"},"Fill in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Title"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Description")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"Path")," for the shortcut")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubecfg",src:n(5305).Z,width:"2196",height:"1170"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"submit")," and then click ",(0,o.kt)("inlineCode",{parentName:"li"},"Deploy Changes"))),(0,o.kt)("p",null,"Now click on the Shortcuts item in the left menu. Your shortcut is now available for everyone in the team to use."))}p.isMDXComponent=!0},7511:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/grafana-loki-169cb7cb261f0a2d7aefec41d4fe266c.png"},429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loki-settings-9e25a45aa5afedaafd1ffa2e316a0f3c.png"},7133:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loki-shortcuts-0cdbcfc22d8707c4f7ccd8428171a614.png"},2661:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loki-teams-8fb9823d37ff591af4d8c0e79fa512e4.png"},5305:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-loki-shortcut-54b9edd773afe666dd7d00c0416a2a63.png"}}]);