"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[1899],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5610:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"console/services",title:"Services"},s=void 0,c={unversionedId:"ui-services",id:"ui-services",title:"Services",description:"Console: new service",source:"@site/docs/ui-services.md",sourceDirName:".",slug:"/console/services",permalink:"/docs/console/services",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/ui-services.md",tags:[],version:"current",frontMatter:{slug:"console/services",title:"Services"},sidebar:"mainSidebar",previous:{title:"Apps",permalink:"/docs/console/team-apps"},next:{title:"Jobs",permalink:"/docs/console/jobs"}},d=[{value:"Create a Service",id:"create-a-service",children:[],level:2},{value:"Configuring the Service Type",id:"configuring-the-service-type",children:[{value:"Existing Kubernetes Service",id:"existing-kubernetes-service",children:[],level:3},{value:"Existing Knative Service",id:"existing-knative-service",children:[],level:3},{value:"New Knative service",id:"new-knative-service",children:[{value:"Pod annotations",id:"pod-annotations",children:[],level:4},{value:"Container image",id:"container-image",children:[],level:4},{value:"Container resources",id:"container-resources",children:[{value:"Requests",id:"requests",children:[],level:5},{value:"Limits",id:"limits",children:[],level:5}],level:4},{value:"Environment variables",id:"environment-variables",children:[],level:4},{value:"Secrets",id:"secrets",children:[],level:4},{value:"Secret mounts",id:"secret-mounts",children:[],level:4},{value:"Files",id:"files",children:[],level:4},{value:"Command",id:"command",children:[],level:4},{value:"Command Arguments",id:"command-arguments",children:[],level:4},{value:"Container Port",id:"container-port",children:[],level:4},{value:"Scale to zero",id:"scale-to-zero",children:[],level:4}],level:3}],level:2},{value:"Configuring exposure (ingress)",id:"configuring-exposure-ingress",children:[{value:"Cluster",id:"cluster",children:[],level:3},{value:"Private (comming soon)",id:"private-comming-soon",children:[],level:3},{value:"Public",id:"public",children:[],level:3}],level:2},{value:"Configure network policies",id:"configure-network-policies",children:[],level:2}],p={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Console: new service",src:n(4484).Z,width:"2664",height:"1868"})),(0,i.kt)("p",null,"A service in Otomi Container Platform is a feature for easy deployment of (serverless) container workloads and exposing these and pre-deployed services with a public URL. Otomi will automatically create and configure all ingress resources needed, including Istio Virtual Services and Gateways, certificates, DNS records and Oauth2 proxy for Single Sign On."),(0,i.kt)("h2",{id:"create-a-service"},"Create a Service"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter a name for the service. The name will be used to generate hostname if ",(0,i.kt)("inlineCode",{parentName:"li"},"Use suggested domain")," is chosen (see below). When configuring ingress for an existing (pre-deployed) service, make sure the name provided here matches the name of the Knative or Kubernetes service (default)."),(0,i.kt)("li",{parentName:"ol"},"Enter the port number of the service.")),(0,i.kt)("p",null,"After providing a name and a port number, you can now configure ingress for the existing Kubernetes service and optionally select a different service type."),(0,i.kt)("p",null,"If the defaults (cluster/private) apply, you can now click 'Submit'."),(0,i.kt)("h2",{id:"configuring-the-service-type"},"Configuring the Service Type"),(0,i.kt)("p",null,"The Service type is the type of service to deploy/expose. Three options are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#existing-kubernetes-service"},"1. Existing Kubernetes Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#existing-knative-service"},"2. Existing Knative service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#new-knative-service"},"3. New Knative Service"))),(0,i.kt)("h3",{id:"existing-kubernetes-service"},"Existing Kubernetes Service"),(0,i.kt)("p",null,"When selecting this option, Otomi expects a pre-deployed Kubernetes service by the ",(0,i.kt)("a",{parentName:"p",href:"#name"},"name")," and ",(0,i.kt)("a",{parentName:"p",href:"#port"},"port")," given."),(0,i.kt)("h3",{id:"existing-knative-service"},"Existing Knative Service"),(0,i.kt)("p",null,"When selecting this option, Otomi expects a pre-deployed Knative service by the ",(0,i.kt)("a",{parentName:"p",href:"#name"},"name")," and ",(0,i.kt)("a",{parentName:"p",href:"#port"},"port")," given. This option will do an internal rewrite of the public url to the existing knative url."),(0,i.kt)("h3",{id:"new-knative-service"},"New Knative service"),(0,i.kt)("p",null,"Select this option to deploy a new knative service using Otomi. In this case, Otomi will generate a knative service manifest and deploy it for you."),(0,i.kt)("h4",{id:"pod-annotations"},"Pod annotations"),(0,i.kt)("p",null,"Kubernetes annotations with arbitrary metadata."),(0,i.kt)("h4",{id:"container-image"},"Container image"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Repository"),(0,i.kt)("td",{parentName:"tr",align:null},"The full repository url of the image (i.e. ",(0,i.kt)("inlineCode",{parentName:"td"},"otomi/console"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tag"),(0,i.kt)("td",{parentName:"tr",align:null},"The image tag (i.e. ",(0,i.kt)("inlineCode",{parentName:"td"},"latest"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PullPolicy"),(0,i.kt)("td",{parentName:"tr",align:null},"The selected pullpolicy (i.e. ",(0,i.kt)("inlineCode",{parentName:"td"},"IfNotPresent")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"Always"),")")))),(0,i.kt)("h4",{id:"container-resources"},"Container resources"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"the kubernetes documentation")," for in depth information on how to determine the values your workload needs."),(0,i.kt)("h5",{id:"requests"},"Requests"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cpu"),(0,i.kt)("td",{parentName:"tr",align:null},"The guaranteed amount of CPU")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"memory"),(0,i.kt)("td",{parentName:"tr",align:null},"the guaranteed amount of RAM")))),(0,i.kt)("h5",{id:"limits"},"Limits"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cpu"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum amount of CPU")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"memory"),(0,i.kt)("td",{parentName:"tr",align:null},"the maximum amount of RAM")))),(0,i.kt)("p",null,"NOTE: Limits are not guaranteed. If you need guaranteed resources, set higher ",(0,i.kt)("a",{parentName:"p",href:"#requests"},"requests"),"."),(0,i.kt)("h4",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"Provide all the needed environment variables that are needed for your container to run."),(0,i.kt)("h4",{id:"secrets"},"Secrets"),(0,i.kt)("p",null,"Secrets that have been created with the console can be referenced here by name. All props from the secret will be injected as env var."),(0,i.kt)("h4",{id:"secret-mounts"},"Secret mounts"),(0,i.kt)("p",null,"Secrets that have been created with the console can be mounted on a path. All props from the secret will be added as file on the path."),(0,i.kt)("h4",{id:"files"},"Files"),(0,i.kt)("p",null,"Files registered here as path > content pairs will be mounted in the container."),(0,i.kt)("h4",{id:"command"},"Command"),(0,i.kt)("p",null,"Override the entrypoint/command of the container."),(0,i.kt)("h4",{id:"command-arguments"},"Command Arguments"),(0,i.kt)("p",null,"Override the arguments given to the entrypoint/command of the container."),(0,i.kt)("h4",{id:"container-port"},"Container Port"),(0,i.kt)("p",null,"Container port the knative pod will connect with. Leaving this empty will let knative infer the port from the container, which usually works, but might be problematic when the container does not specifically expose a port (As is the case with nginx derived images!). Default is set to 80."),(0,i.kt)("h4",{id:"scale-to-zero"},"Scale to zero"),(0,i.kt)("p",null,"Will bring down service if not accessed for 60 seconds. Will also disable probes that check to see if the service is up."),(0,i.kt)("h2",{id:"configuring-exposure-ingress"},"Configuring exposure (ingress)"),(0,i.kt)("p",null,"Exposure controls wether internet exposure should be enabled or not. Three options exist:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Cluster"),": has no internet exposure, and is only accessible in the cluster"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Private"),": only accessible via the cluster's private network loadbalancer (comming soon)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Public"),": publicly accessible via the cluster's public network loadbalancer")),(0,i.kt)("h3",{id:"cluster"},"Cluster"),(0,i.kt)("p",null,"If backend is a Knative service, this will expose a Knative service on a local Istio gateway, so other services can access it at their ",(0,i.kt)("inlineCode",{parentName:"p"},"$svc.$namespace")," host name."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Coming soon: the ability to choose endpoints to connect to, so network policies are automatically generated."))),(0,i.kt)("h3",{id:"private-comming-soon"},"Private (comming soon)"),(0,i.kt)("p",null,"Will only accept traffic coming from the private-network loadbalancer."),(0,i.kt)("p",null,"A private URL will have a hostname that consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOST_NAME.$DNS_ZONE"),". Options are described below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TLS passthrough"),(0,i.kt)("td",{parentName:"tr",align:null},"Pass through the request as is to the backing service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Use suggested domain"),(0,i.kt)("td",{parentName:"tr",align:null},"The suggested domain is the team domain for which a wildcard certificate already exists. Has the team name in it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Host"),(0,i.kt)("td",{parentName:"tr",align:null},"Choose a hostname that will be the prefix of the domain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Forward path"),(0,i.kt)("td",{parentName:"tr",align:null},'Do not "terminate" the path but instead pass it to the receiving service.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS Zone"),(0,i.kt)("td",{parentName:"tr",align:null},"Choose a dns zone that will be the suffix of the domain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authenticate with Single Sign On"),(0,i.kt)("td",{parentName:"tr",align:null},"Forwards any unauthenticated traffic to the Keycloak login page, which might forward to an external IDP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Already has a certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't generate certificates for this service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"> Certificate ARN"),(0,i.kt)("td",{parentName:"tr",align:null},"[AWS only]"," Provide the certificate arn.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"> Select existing secret name"),(0,i.kt)("td",{parentName:"tr",align:null},"[non AWS]"," Provide a TLS secret name previously created under ",(0,i.kt)("inlineCode",{parentName:"td"},"Secrets"),". Override to select name of secret not known here.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The private exposure option is currently not working, but is comming soon."))),(0,i.kt)("h3",{id:"public"},"Public"),(0,i.kt)("p",null,"Use Public exposure to expose a service with a public URL and certificate."),(0,i.kt)("p",null,"A public URL will have a hostname that consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOST_NAME.$DNS_ZONE"),". Options are described below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Setting"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TLS passthrough"),(0,i.kt)("td",{parentName:"tr",align:null},"Pass through the request as is to the backing service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Use suggested domain"),(0,i.kt)("td",{parentName:"tr",align:null},"The suggested domain is the team domain for which a wildcard certificate already exists. Has the team name in it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Host"),(0,i.kt)("td",{parentName:"tr",align:null},"Choose a hostname that will be the prefix of the domain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Forward path"),(0,i.kt)("td",{parentName:"tr",align:null},'Do not "terminate" the path but instead pass it to the receiving service.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS Zone"),(0,i.kt)("td",{parentName:"tr",align:null},"Choose a dns zone that will be the suffix of the domain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authenticate with Single Sign On"),(0,i.kt)("td",{parentName:"tr",align:null},"Forwards any unauthenticated traffic to the Keycloak login page, which might forward to an external IDP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Already has a certificate"),(0,i.kt)("td",{parentName:"tr",align:null},"Don't generate certificates for this service.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"> Certificate ARN"),(0,i.kt)("td",{parentName:"tr",align:null},"[AWS only]"," Provide the certificate arn.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"> Select existing secret name"),(0,i.kt)("td",{parentName:"tr",align:null},"[non AWS]"," Provide a TLS secret name previously created under ",(0,i.kt)("inlineCode",{parentName:"td"},"Secrets"),". Override to select name of secret not known here.")))),(0,i.kt)("h2",{id:"configure-network-policies"},"Configure network policies"),(0,i.kt)("p",null,"Traffic to the service (from other services within the team and from services in other teams) is by default denied. To allow other services to access the service, select ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow traffic from selected team services")," and specify the Team and Service name of the services that is allowed to access the service. It is also possible to allow traffic from all Team Services. In this case select ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow traffic from all team services"),"."))}m.isMDXComponent=!0},4484:function(e,t,n){t.Z=n.p+"assets/images/team-services-5e048ab902ce888d1135e31f84edf280.png"}}]);