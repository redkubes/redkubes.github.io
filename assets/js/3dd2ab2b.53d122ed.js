"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2259],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),k=a,s=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return n?r.createElement(s,i(i({ref:e},m),{},{components:n})):r.createElement(s,i({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1275:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"cli/lint",title:"otomi lint",sidebar_label:"otomi lint"},p=void 0,d={unversionedId:"cli-lint",id:"cli-lint",title:"otomi lint",description:"otomi lint [options]",source:"@site/docs/cli-lint.md",sourceDirName:".",slug:"/cli/lint",permalink:"/docs/cli/lint",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/cli-lint.md",tags:[],version:"current",frontMatter:{slug:"cli/lint",title:"otomi lint",sidebar_label:"otomi lint"},sidebar:"mainSidebar",previous:{title:"otomi encrypt",permalink:"/docs/cli/encrypt"},next:{title:"otomi pull",permalink:"/docs/cli/pull"}},m=[{value:"Description",id:"description",children:[],level:2},{value:"Options",id:"options",children:[],level:2}],u={toc:m};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"otomi lint [options]")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Uses helmfile lint to lint the target manifests"),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-l"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"--label")),(0,l.kt)("td",{parentName:"tr",align:null},"Helmfile option to select charts by label (format: ",(0,l.kt)("inlineCode",{parentName:"td"},"<label>=<value>"),"), e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},"-l name=prometheus-operator")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"--label group=jobs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[array]")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"--file")),(0,l.kt)("td",{parentName:"tr",align:null},"Helmfile option to select helmfiles by filename, e.g. '-f helmfile.d/helmfile-15.ingress-core.yaml'"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[array]")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--log-level")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fatal, error, warn, info, verbose, debug, trace")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"warn"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"--skip-cleanup")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[boolean]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-v"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"count"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--ni"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"--non-interactive")),(0,l.kt)("td",{parentName:"tr",align:null},"Same as setting env.CI"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[boolean]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-h"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"--help")),(0,l.kt)("td",{parentName:"tr",align:null},"Show help"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);