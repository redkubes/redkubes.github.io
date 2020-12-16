(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(123)),c={slug:"console/configuring-services",title:"Configuring services"},o={unversionedId:"cons-configuring-services",id:"cons-configuring-services",isDocsHomePage:!1,title:"Configuring services",description:"This page is for documenting how to create a service, and how to edit a service. Both creating and editing a service use the same form.",source:"@site/docs/cons-configuring-services.md",slug:"/console/configuring-services",permalink:"/docs/console/configuring-services",editUrl:"https://github.com/redkubes/redkubes/tree/master/docs/cons-configuring-services.md",version:"current",sidebar:"mainSidebar",previous:{title:"Configuring teams",permalink:"/docs/console/configuring-teams"},next:{title:"Settings",permalink:"/docs/console/settings"}},l=[{value:"Name",id:"name",children:[]},{value:"Cluster ID",id:"cluster-id",children:[]},{value:"Type",id:"type",children:[{value:"1. Knative Service",id:"1-knative-service",children:[]},{value:"1.1 Scale to zero",id:"11-scale-to-zero",children:[]},{value:"1.2 Container image",id:"12-container-image",children:[]},{value:"1.3 Environment variables",id:"13-environment-variables",children:[]},{value:"1.4 Pod resources",id:"14-pod-resources",children:[]},{value:"1.4.1 Requests",id:"141-requests",children:[]},{value:"1.4.2 Limits",id:"142-limits",children:[]},{value:"1.5 Pod annotations",id:"15-pod-annotations",children:[]},{value:"2. Existing Knative Service",id:"2-existing-knative-service",children:[]},{value:"3. Existing Kubernetes Service",id:"3-existing-kubernetes-service",children:[]}]},{value:"Exposure",id:"exposure",children:[{value:"Public URL",id:"public-url",children:[]}]},{value:"AutoCD",id:"autocd",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This page is for documenting how to create a service, and how to edit a service. Both creating and editing a service use the same form."),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,"Name of the service. Will be used to generate hostname if ",Object(i.b)("inlineCode",{parentName:"p"},"Use suggested domain")," is chosen (see below)"),Object(i.b)("h2",{id:"cluster-id"},"Cluster ID"),Object(i.b)("p",null,"Cluster to deploy service on."),Object(i.b)("h2",{id:"type"},"Type"),Object(i.b)("p",null,"What type of service to deploy/expose. Three options exist:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#1-knative-service"}),"1. Knative Service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#2-existing-knative-service"}),"2. Existing Knative service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#3-existing-kubernetes-service"}),"3. Existing Kubernetes Service"))),Object(i.b)("h3",{id:"1-knative-service"},"1. Knative Service"),Object(i.b)("p",null,"Deploy a new knative service."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Setting"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Container image repository"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The full repository url of the image (i.e. ",Object(i.b)("inlineCode",{parentName:"td"},"otomi/console"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Container image tag"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The image tag (i.e. ",Object(i.b)("inlineCode",{parentName:"td"},"latest"),")")))),Object(i.b)("h3",{id:"11-scale-to-zero"},"1.1 Scale to zero"),Object(i.b)("p",null,"Will bring down service if not accessed for 60 seconds. Will also disable probes that check to see if the service is up."),Object(i.b)("h3",{id:"12-container-image"},"1.2 Container image"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"repository: The image repository of the container to deploy."),Object(i.b)("li",{parentName:"ul"},"tag: The image tag of the container to deploy. We recommend semver version tags for a sane deployment strategy. For more on that see section ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#autocd"}),"AutoCD")," below.")),Object(i.b)("h3",{id:"13-environment-variables"},"1.3 Environment variables"),Object(i.b)("p",null,"Provide all the needed environment variables that are needed for your container to run."),Object(i.b)("h3",{id:"14-pod-resources"},"1.4 Pod resources"),Object(i.b)("p",null,"Please refer to the kubernetes documentation for in depth information on how to determine the values your workload needs."),Object(i.b)("h3",{id:"141-requests"},"1.4.1 Requests"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"cpu: the guaranteed amount of CPU"),Object(i.b)("li",{parentName:"ul"},"memory: the guaranteed amount of RAM")),Object(i.b)("h3",{id:"142-limits"},"1.4.2 Limits"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"cpu: the maximum amount of CPU"),Object(i.b)("li",{parentName:"ul"},"memory: the maximum amount of RAM")),Object(i.b)("p",null,"NOTE: Limits are not guaranteed. If you need guaranteed resources, set higher ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#141-requests"}),"requests"),"."),Object(i.b)("h3",{id:"15-pod-annotations"},"1.5 Pod annotations"),Object(i.b)("p",null,"Kubernetes annotations with arbitrary metadata."),Object(i.b)("h3",{id:"2-existing-knative-service"},"2. Existing Knative Service"),Object(i.b)("p",null,"Expects a readily deployed knative service by the name given. This option will do an internal rewrite of the public url to the existing knative url."),Object(i.b)("h3",{id:"3-existing-kubernetes-service"},"3. Existing Kubernetes Service"),Object(i.b)("p",null,"Expects a readily deployed Kubernetes service by the name given."),Object(i.b)("h2",{id:"exposure"},"Exposure"),Object(i.b)("p",null,"Controls wether internet exposure should be enabled or not. Two options exist:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Private")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Public URL"))),Object(i.b)("p",null,"A private service has no internet exposure, and is only accessible in the cluster."),Object(i.b)("h3",{id:"public-url"},"Public URL"),Object(i.b)("p",null,"A public URL will have a hostname that consists of ",Object(i.b)("inlineCode",{parentName:"p"},"$HOST_NAME.$DNS_ZONE"),". Options are described below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Setting"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Use suggested domain"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The suggested domain is the team domain for which a wildcard certificate already exists")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Host"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Choose a hostname that will be the prefix of the domain")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DNS Zone"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Choose a dns zone that will be the suffix of the domain")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Authenticate with Single Sign On"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Forwards any unauthenticated traffic to the Keycloak login page, which might forward to an external IDP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Already has a certificate"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Don't generate certificates for this service")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"> Certificate ARN"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[AWS only]"," Provide the certificate arn")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"> Select existing secret name"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"[non AWS]"," Provide a TLS secret name previously created under ",Object(i.b)("inlineCode",{parentName:"td"},"Secrets"),". Override to select name of secret not known here.")))),Object(i.b)("h2",{id:"autocd"},"AutoCD"),Object(i.b)("p",null,"Wether or not to allow automatic deployment of image tags that match the chosen strategy's matcher."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Setting"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Off"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No automatic continuous deployment")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Semver versioning"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Semver version pattern. Use this filter if your images tags follow semantic versioning rules (MAJOR.MINOR.PATCH). E.g.: PATCH only: "~1.1", MINOR and PATCH only "~1", ALL "',"*",'"')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Glob pattern matching"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'Glob string pattern. Use this filter if you want to make simple non-standard patterns. E.g.: "master-v1.',Object(i.b)("em",{parentName:"td"},"."),'"')))))}s.isMDXComponent=!0}}]);