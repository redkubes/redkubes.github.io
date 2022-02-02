"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[7494],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),p=r,h=c["".concat(d,".").concat(p)]||c[p]||m[p]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={slug:"console/jobs",title:"Jobs"},d=void 0,s={unversionedId:"ui-jobs",id:"ui-jobs",title:"Jobs",description:"Console: new job",source:"@site/docs/ui-jobs.md",sourceDirName:".",slug:"/console/jobs",permalink:"/docs/console/jobs",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ui-jobs.md",tags:[],version:"current",frontMatter:{slug:"console/jobs",title:"Jobs"},sidebar:"mainSidebar",previous:{title:"Services",permalink:"/docs/console/services"},next:{title:"Secrets",permalink:"/docs/console/secrets"}},u=[{value:"Type",id:"type",children:[],level:2},{value:"Name",id:"name",children:[],level:2},{value:"Enabled",id:"enabled",children:[],level:2},{value:"RunPolicy",id:"runpolicy",children:[],level:2},{value:"Script",id:"script",children:[],level:2},{value:"TTL After Finished",id:"ttl-after-finished",children:[],level:2},{value:"Init Container",id:"init-container",children:[{value:"Container Image",id:"container-image",children:[],level:3},{value:"Container resources",id:"container-resources",children:[{value:"Requests",id:"requests",children:[],level:5},{value:"Limits",id:"limits",children:[],level:5}],level:3},{value:"Environment variables",id:"environment-variables",children:[],level:3},{value:"Secrets",id:"secrets",children:[],level:3},{value:"Secret mounts",id:"secret-mounts",children:[],level:3},{value:"Files",id:"files",children:[],level:3},{value:"Command",id:"command",children:[],level:3},{value:"Command Arguments",id:"command-arguments",children:[],level:3}],level:2},{value:"Pod annotations",id:"pod-annotations",children:[],level:2},{value:"Container image",id:"container-image-1",children:[],level:2},{value:"Container resources",id:"container-resources-1",children:[{value:"Requests",id:"requests-1",children:[],level:3},{value:"Limits",id:"limits-1",children:[],level:3},{value:"Environment variables",id:"environment-variables-1",children:[],level:3},{value:"Secrets",id:"secrets-1",children:[],level:3},{value:"Secret mounts",id:"secret-mounts-1",children:[],level:3},{value:"Files",id:"files-1",children:[],level:3},{value:"Command",id:"command-1",children:[],level:3},{value:"Command Arguments",id:"command-arguments-1",children:[],level:3}],level:2}],m={toc:u};function c(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Console: new job",src:n(1890).Z,width:"2668",height:"1652"})),(0,l.kt)("p",null,"This page describes how to create a job, and how to edit a job. Both creating and editing a job use the same form. A Job creates one or more Pods and will continue to retry execution of the Pods until a specified number of them successfully terminate. Otomi also supports creating CronJobs. CronJobs are useful for creating periodic and recurring tasks, like running backups or sending emails. CronJobs can also schedule individual tasks for a specific time, such as scheduling a Job for when your cluster is likely to be idle."),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("p",null,"The type of the job. 2 job types are supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Job"),(0,l.kt)("td",{parentName:"tr",align:null},"A Jon creates a Kubernetes Job")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cron Job"),(0,l.kt)("td",{parentName:"tr",align:null},"A CronJob creates Jobs on a repeating schedule")))),(0,l.kt)("h2",{id:"name"},"Name"),(0,l.kt)("p",null,"Name of the Job."),(0,l.kt)("h2",{id:"enabled"},"Enabled"),(0,l.kt)("p",null,"Select to enable the Job. If not enabled, the Job will nopt be executed."),(0,l.kt)("h2",{id:"runpolicy"},"RunPolicy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Always"),(0,l.kt)("td",{parentName:"tr",align:null},"The job controller will always be re-deployed after a successful deployment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OnSpecChange"),(0,l.kt)("td",{parentName:"tr",align:null},"The job controller will only be re-deployed if one changes this specification.")))),(0,l.kt)("h2",{id:"script"},"Script"),(0,l.kt)("p",null,"The script to be executed. May specify a non-empty string containing an executable script."),(0,l.kt)("h2",{id:"ttl-after-finished"},"TTL After Finished"),(0,l.kt)("p",null,"Time To Live after the job is finished in seconds. Will be removed afterwards."),(0,l.kt)("h2",{id:"init-container"},"Init Container"),(0,l.kt)("p",null,"Can be used to specify an init container, allowing to do preparations like checking for conditions."),(0,l.kt)("h3",{id:"container-image"},"Container Image"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repository"),(0,l.kt)("td",{parentName:"tr",align:null},"The full repository url of the image (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"otomi/console"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag"),(0,l.kt)("td",{parentName:"tr",align:null},"The image tag (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected pullpolicy (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"IfNotPresent")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Always"),")")))),(0,l.kt)("h3",{id:"container-resources"},"Container resources"),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"the kubernetes documentation")," for in depth information on how to determine the values your workload needs."),(0,l.kt)("h5",{id:"requests"},"Requests"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"The guaranteed amount of CPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null},"the guaranteed amount of RAM")))),(0,l.kt)("h5",{id:"limits"},"Limits"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null},"the maximum amount of RAM")))),(0,l.kt)("p",null,"NOTE: Limits are not guaranteed. If you need guaranteed resources, set higher ",(0,l.kt)("a",{parentName:"p",href:"#requests"},"requests"),"."),(0,l.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,l.kt)("p",null,"Provide all the needed environment variables that are needed for your container to run."),(0,l.kt)("h3",{id:"secrets"},"Secrets"),(0,l.kt)("p",null,"Secrets that have been created with the console can be referenced here by name. All props from the secret will be injected as env var."),(0,l.kt)("h3",{id:"secret-mounts"},"Secret mounts"),(0,l.kt)("p",null,"Secrets that have been created with the console can be mounted on a path. All props from the secret will be added as file on the path."),(0,l.kt)("h3",{id:"files"},"Files"),(0,l.kt)("p",null,"Files registered here as path > content pairs will be mounted in the container."),(0,l.kt)("h3",{id:"command"},"Command"),(0,l.kt)("p",null,"Override the entrypoint/command of the container."),(0,l.kt)("h3",{id:"command-arguments"},"Command Arguments"),(0,l.kt)("p",null,"Override the arguments given to the entrypoint/command of the container."),(0,l.kt)("h2",{id:"pod-annotations"},"Pod annotations"),(0,l.kt)("p",null,"Kubernetes annotations with arbitrary metadata."),(0,l.kt)("h2",{id:"container-image-1"},"Container image"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repository"),(0,l.kt)("td",{parentName:"tr",align:null},"The full repository url of the image (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"otomi/console"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag"),(0,l.kt)("td",{parentName:"tr",align:null},"The image tag (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PullPolicy"),(0,l.kt)("td",{parentName:"tr",align:null},"The selected pullpolicy (i.e. ",(0,l.kt)("inlineCode",{parentName:"td"},"IfNotPresent")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Always"),")")))),(0,l.kt)("h2",{id:"container-resources-1"},"Container resources"),(0,l.kt)("p",null,"Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"the kubernetes documentation")," for in depth information on how to determine the values your workload needs."),(0,l.kt)("h3",{id:"requests-1"},"Requests"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"The guaranteed amount of CPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null},"the guaranteed amount of RAM")))),(0,l.kt)("h3",{id:"limits-1"},"Limits"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"memory"),(0,l.kt)("td",{parentName:"tr",align:null},"the maximum amount of RAM")))),(0,l.kt)("p",null,"NOTE: Limits are not guaranteed. If you need guaranteed resources, set higher requests."),(0,l.kt)("h3",{id:"environment-variables-1"},"Environment variables"),(0,l.kt)("p",null,"Provide all the needed environment variables that are needed for your container to run."),(0,l.kt)("h3",{id:"secrets-1"},"Secrets"),(0,l.kt)("p",null,"Secrets that have been created with the console can be referenced here by name. All props from the secret will be injected as env var."),(0,l.kt)("h3",{id:"secret-mounts-1"},"Secret mounts"),(0,l.kt)("p",null,"Secrets that have been created with the console can be mounted on a path. All props from the secret will be added as file on the path."),(0,l.kt)("h3",{id:"files-1"},"Files"),(0,l.kt)("p",null,"Files registered here as path > content pairs will be mounted in the container."),(0,l.kt)("h3",{id:"command-1"},"Command"),(0,l.kt)("p",null,"Override the entrypoint/command of the container."),(0,l.kt)("h3",{id:"command-arguments-1"},"Command Arguments"),(0,l.kt)("p",null,"Override the arguments given to the entrypoint/command of the container."))}c.isMDXComponent=!0},1890:function(e,t,n){t.Z=n.p+"assets/images/team-jobs-5ba88dbf0b8bbc6db3193d805a8678ed.png"}}]);