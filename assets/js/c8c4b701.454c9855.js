"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2658],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2924:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"apps/alertmanager",title:"Working with Alertmanager",sidebar_label:"Alertmanager"},s=void 0,c={unversionedId:"app-alertmanager",id:"app-alertmanager",title:"Working with Alertmanager",description:"Alertmanager is configured by Otomi to use the global values found under settings' home and home-alerts.",source:"@site/docs/app-alertmanager.md",sourceDirName:".",slug:"/apps/alertmanager",permalink:"/docs/apps/alertmanager",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/app-alertmanager.md",tags:[],version:"current",frontMatter:{slug:"apps/alertmanager",title:"Working with Alertmanager",sidebar_label:"Alertmanager"},sidebar:"mainSidebar",previous:{title:"Team Settings",permalink:"/docs/console/team-settings"},next:{title:"CertManager",permalink:"/docs/apps/certmanager"}},u={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Alertmanager is configured by Otomi to use the global values found under settings' ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/settings#alerts"},"home")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/settings#home-alerts"},"home-alerts"),"."),(0,o.kt)("p",null,"A team may decide to override some or all of them, in order to have alerts sent to their own endpoints. Self-service rights to alerting must be enabled for that team (enabled by default for all teams)."))}f.isMDXComponent=!0}}]);