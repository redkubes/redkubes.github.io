(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{178:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),i=(o(0),o(189)),r={slug:"journey",title:"Our development journey",sidebar_label:"Journey"},s={unversionedId:"about-journey",id:"about-journey",isDocsHomePage:!1,title:"Our development journey",description:"Kubernetes offers a cli to send manifests over the wire for clusters to accept or reject. From a developers perspective, it offers nothing to build or help structuring these manifests. So what do you use to manage your manifests?",source:"@site/about/about-journey.md",slug:"/journey",permalink:"/about/journey",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-journey.md",version:"current",lastUpdatedBy:"srodenhuis",lastUpdatedAt:1636891426,sidebar_label:"Journey",sidebar:"about",previous:{title:"Vision",permalink:"/about/vision"},next:{title:"Otomi Architecture",permalink:"/about/architecture"}},l=[{value:"Helm",id:"helm",children:[]},{value:"Helmfile",id:"helmfile",children:[]},{value:"Layered yaml configuration",id:"layered-yaml-configuration",children:[]},{value:"Values repo",id:"values-repo",children:[]},{value:"GitOps with Drone",id:"gitops-with-drone",children:[]},{value:"Single Sign On with Keycloak",id:"single-sign-on-with-keycloak",children:[]},{value:"Running tasks",id:"running-tasks",children:[]},{value:"Test and validate everything",id:"test-and-validate-everything",children:[]},{value:"Smooth sailing",id:"smooth-sailing",children:[]}],c={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Kubernetes offers a cli to send manifests over the wire for clusters to accept or reject. From a developers perspective, it offers nothing to build or help structuring these manifests. So what do you use to manage your manifests?"),Object(i.b)("h3",{id:"helm"},"Helm"),Object(i.b)("p",null,"After having worked with helm charts for a long time this seemed like a natural fit for a k8s package manager. We also saw that we wanted to consolidate the charts into our own repo, offering control, predictability and enabling offline installs."),Object(i.b)("h3",{id:"helmfile"},"Helmfile"),Object(i.b)("p",null,"However, we quickly realized we needed a solution to provide variations of the chart values. When you have multiple clusters for different purposes, differences in environment (i.e. dev vs prod) become a differentiating factor. After reviewing the solutions at the time (jsonnet, helmfile) we decided to stay with Go templating and go for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/roboll/helmfile"}),"Helmfile"),". This offered us all the flexibility to achieve what we want: describing stateful configuration while abstracting away the input. Looking back we are glad to have made this choice, and still believe nothing else comes this close to meet our needs. (Only recently was a small helper tool added to k8s core: kustomize. This is however just a small utility, and it does not offer templating.)"),Object(i.b)("p",null,"After having worked with Helmfile however, we discovered that it offered no real best practices when it comes to coding and management, and might be too flexible to come up with a decent architecture. Some setups in the wild had some degree of sanity, but none offered the developers experience we really wanted. After many evolutions organizing our helmfile architecture we settled on something that we are still very happy with. It uses Helmfile's alphabetic ordering and reminds of a Unix runlevel."),Object(i.b)("h3",{id:"layered-yaml-configuration"},"Layered yaml configuration"),Object(i.b)("p",null,"When modeling configuration for different clusters you come to understand what is shared, and what is unique per cluster. Knowing that helmfile is designed to merge layered yaml files, we settled for a file structure that resembles this understanding. From generic to specific, this made the configuration as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"}),"DRY")," as we could, limiting human error."),Object(i.b)("h3",{id:"values-repo"},"Values repo"),Object(i.b)("p",null,"In the beginning we used our monorepo as is, and kept all the configuration in there as well. But why not make the monorepo stateless itself? And extract the fast moving values to an external storage solution? That offered us the possibility to package up the entire monorepo in a container, and version it. This not only resulted in a clean simple setup in the monorepo with only Go templating, but now we have an external repo with yaml configuration that is extremely suitable for GitOps."),Object(i.b)("p",null,"From a developers perspective, having made this seperation of concerns made a lot of sense. Only values exist in the repo, so auditing the trail of changes becomes easy. Just look at the commit diff. The core is now essentially a product (albeit one of many parts with lots of glue) that can evolve over time."),Object(i.b)("h3",{id:"gitops-with-drone"},"GitOps with Drone"),Object(i.b)("p",null,"After having automated the delivery of our monorepo as a docker image, we could finally automate GitOps deployment. However, after having worked with Weave Flux extensively, we came to see that most of these GitOps solutions are an overkill to what we need, and do not support our DRY way of working. Most of the GitOps solutions out there make you use custom resources to tell you what to sync and what not, making you build and maintain a lot of glue to do what should be very easy. We just want to apply changing values using versioned artifacts. We don't want to keep code in sync, just configuration."),Object(i.b)("p",null,"So we decided to keep it simple (stupid) and use good old Drone, which is triggered by git webhook to just do what we, as developers do: deploy the changed motherload to the cluster that is interested in receiving those changes. We did not have to deviate from the developers workflow, and could even model it the same way, using the same tooling."),Object(i.b)("p",null,"One thing that we don't like about it: it is webhook based (push), and does not retry when the hook is not working. We will soon have a solution that allows for periodic syncing."),Object(i.b)("h3",{id:"single-sign-on-with-keycloak"},"Single Sign On with Keycloak"),Object(i.b)("p",null,"We were using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oauth2-proxy/oauth2-proxy"}),"oauth2-proxy")," from the beginning, and were able to use it for SSO just fine, for a while. We had enabled a lot of OIDC aware applications when we started seeing the beauty of normalizing an OIDC JWT's payload. This would allow applications to just consume the provided JWT without having to run a client to talk to the IdP. That is how we chose to put ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.keycloak.org"}),"Keycloak")," in between oauth2-proxy and external IdPs, because it is very good at that. It has lots of knobs and settings to talk to exotic IdPs and translate incoming properties and claims."),Object(i.b)("h3",{id:"running-tasks"},"Running tasks"),Object(i.b)("p",null,"Since we are effectively configuring open source applications, we needed a way to run ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-tasks/"}),"tasks")," at the right moments in the deployment lifecycle. Example: Keycloak needs to be told how applications can reach it, before any of the crucial ones actually do. Istio won't forward a request when it is told to authenticate but can't reach Keycloak."),Object(i.b)("p",null,"To be able to easily generate openapi typescript clients for tasks to talk to the applications, we have also created a small repo named ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redkubes/otomi-clients/"}),"otomi-clients"),". We were already using typescript for our NodeJS API and Console UI, so this was an easy choice for us."),Object(i.b)("h3",{id:"test-and-validate-everything"},"Test and validate everything"),Object(i.b)("p",null,"After unknowingly delivering breaking changes too many times, we went all the way and decided to validate all input and output as best as we can."),Object(i.b)("h4",{id:"input-checks"},Object(i.b)("strong",{parentName:"h4"},"Input checks")),Object(i.b)("p",null,"We introduced a jsonschema validation routine that can be used statically by your editor (in VSCode this works out of the box), but is also used pre-commit to avoid broken configuration."),Object(i.b)("h4",{id:"output-checks"},Object(i.b)("strong",{parentName:"h4"},"Output checks")),Object(i.b)("p",null,"After having settled for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.openpolicyagent.org"}),"OPA")," as our policy management solution, we came up with an elaborate approach to have Universal OPA Policies (akin to Universal Javascript). We crafted a mix of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.conftest.dev"}),"Conftest")," and custom CRD/CR extraction routines to check if all the manifests are adhering to k8s best practices and the OPA policies we settled for. This allows not only for static validation, but also for OPA gatekeeper to uphold these same policies on the cluster."),Object(i.b)("h2",{id:"smooth-sailing"},"Smooth sailing"),Object(i.b)("p",null,"Having built a very flexible and easily approachable development platform for kubernetes solutions, we can truly say we are now smooth sailing. We just keep building out the functionality in the core, and expose more and more configuration for values to manipulate."),Object(i.b)("p",null,"Of course there are sometimes unforeseen waves rocking our boat, and we try to be ready for when they come. We invite you to look at our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"roadmap"}),"roadmap")," to see potential problems we have identified so far, but also the opportunities waiting to land."))}u.isMDXComponent=!0},189:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return b}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),p=n,b=d["".concat(r,".").concat(p)]||d[p]||h[p]||i;return o?a.a.createElement(b,s(s({ref:t},c),{},{components:o})):a.a.createElement(b,s({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"}}]);