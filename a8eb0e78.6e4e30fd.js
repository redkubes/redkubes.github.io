(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{150:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var n=o(3),r=o(7),a=(o(0),o(188)),i={slug:"vision",title:"Vision"},s={unversionedId:"about-vision",id:"about-vision",isDocsHomePage:!1,title:"Vision",description:"Kubernetes becoming the new foundation",source:"@site/about/about-vision.md",slug:"/vision",permalink:"/about/vision",editUrl:"https://github.com/redkubes/redkubes.github.io/edit/master/about/about-vision.md",version:"current",lastUpdatedBy:"Maurice Faber",lastUpdatedAt:1639095936,sidebar:"about",previous:{title:"About Otomi",permalink:"/about/"},next:{title:"Our development journey",permalink:"/about/journey"}},l=[{value:"Kubernetes becoming the new foundation",id:"kubernetes-becoming-the-new-foundation",children:[]},{value:"What to expect from a container platform",id:"what-to-expect-from-a-container-platform",children:[]},{value:"Our key principles",id:"our-key-principles",children:[{value:"1. Honour open source projects",id:"1-honour-open-source-projects",children:[]},{value:"2. Serve developers",id:"2-serve-developers",children:[]}]}],c={toc:l};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"kubernetes-becoming-the-new-foundation"},"Kubernetes becoming the new foundation"),Object(a.b)("p",null,"The container space is slowly evolving from the wild west it used to be, into a landscape of governance, security reliability and thus trust. After many years of working with Kubernetes it is not hard to imagine it is becoming the foundation for (cloud native) software. That movement already started years ago. We can see that this new DIY architecture paradigm breeds a plethora of containerized solutions and suites offered. And that has become the new reality: too many (possibly good) things to choose from. But this also presents a new opportunity to us: to be able to quickly deploy and test solutions to see if they meets our needs."),Object(a.b)("h2",{id:"what-to-expect-from-a-container-platform"},"What to expect from a container platform"),Object(a.b)("p",null,"First we have to look at containerization and its microservice way of working, as it has brought focus on the following areas:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Observability"),": State of the (parts of the) system now and over time. Metrics and logs, preferably correlated. Hopefully AI to help us monitor and make sense of it."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Stateful storage"),": Where to keep your crown jewels, and how to automate backups and failover."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Application Configuration Management"),": Kubernetes configuration and package management like Helm, Kustomize and others exist. We need to abstract configuration away from the solution for easier retrofitting and repeatability. Should be idempotently deployable as code (gitops)."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Policy enforcement"),": Are the pieces and the players operating within governable constraints?"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Security"),": What are the new security concerns when containerizing workloads?"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Continuous Deployment"),": New platforms demand a new way of continuously deploying. And so does kubernetes. Think Helm charts, Knative services, GitOps push/pull."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Single Sign On"),": One Identity Provider could be used by a group of applications to authenticate its users and know their roles and permissions."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Networking/service configuration"),": Ingress flowing into the cluster's network. SSL termination. Routing logic and rules. Service governance.")),Object(a.b)("p",null,"When checking out a platform it makes sense to evaluate the solutions offered to the above problem spaces. Anything not handled out of the box can lead to a lot of hidden cost. And the solutions should be straightforward to use and not lock you in too much. Hot swapping solutions should be made easy."),Object(a.b)("h2",{id:"our-key-principles"},"Our key principles"),Object(a.b)("h3",{id:"1-honour-open-source-projects"},"1. Honour open source projects"),Object(a.b)("p",null,"Don't reinvent the wheel."),Object(a.b)("p",null,"Coming from developers working with the 12-factor app methodology, Otomi was designed to be open and flexible, embracing open source projects and inevitable change. The best way to do that is to avoid technical debt and contribute effort where it makes most sense: in these projects we've come to love and use. Many companies try to wrap open source building blocks into their own abstraction/experience, offering a unified interface to all these wonderful functionalities. This looks great, but this custom wiring/glueing creates huge technical debt. They are on their own when it comes to patching/updating these parts."),Object(a.b)("p",null,"Embracing this new era of turnkey (point) solutions we decided instead to use those apps as is, and make them aware of the bigger context they serve in: a company of teams and users that have roles and permissions to work with them. Otomi ultimately is an integration platform that strives to make these open source apps work together."),Object(a.b)("h3",{id:"2-serve-developers"},"2. Serve developers"),Object(a.b)("p",null,"Dealing with this multitude of applications and configuration it is of utmost importance to ease the developers workflow. They have to adopt this way of working, and so we aim for the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"No local installs: we eat our own dogfood and build tooling images to run our code in containers, so it behaves the same locally as in the cloud."),Object(a.b)("li",{parentName:"ul"},"Automate everything: input/output validation, testing, deployment, issue management. Limit errors and let developers focus on features."),Object(a.b)("li",{parentName:"ul"},"Less integration points: Easily add core apps or wire them together, abstracting configuration away to a single repository."),Object(a.b)("li",{parentName:"ul"},"Coding support: deliver jsonschema for validation in your favorite editor (vscode out of the box)."),Object(a.b)("li",{parentName:"ul"},"API oriented: easily create openapi clients for tasks to do CRUD operations on the apps, giving autocompletion while developing."),Object(a.b)("li",{parentName:"ul"},"Sane configuration defaults: wherever possible, provide configuration for the most common use case(s).")),Object(a.b)("p",null,"Please continue to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"journey"}),"our development journey")," to read about !"))}u.isMDXComponent=!0},188:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return o?r.a.createElement(m,s(s({ref:t},c),{},{components:o})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);