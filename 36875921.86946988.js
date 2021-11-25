(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(188)),i={slug:"cli/working-with",title:"Working with Otomi CLI",sidebar_label:"Working with Otomi CLI"},l={unversionedId:"cli-working-with",id:"cli-working-with",isDocsHomePage:!1,title:"Working with Otomi CLI",description:"When you would like to:",source:"@site/docs/cli-working-with.md",slug:"/cli/working-with",permalink:"/docs/cli/working-with",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/cli-working-with.md",version:"current",sidebar_label:"Working with Otomi CLI",sidebar:"mainSidebar",previous:{title:"Installing and using Otomi CLI",permalink:"/docs/cli/"},next:{title:"otomi apply",permalink:"/docs/cli/apply"}},c=[{value:"Bootstrap a values repo",id:"bootstrap-a-values-repo",children:[{value:"1. Bootstrap a new (empty) values repo to deploy otomi with the CLI",id:"1-bootstrap-a-new-empty-values-repo-to-deploy-otomi-with-the-cli",children:[]},{value:"2. Bootstrap the values from a values repo deployed by chart",id:"2-bootstrap-the-values-from-a-values-repo-deployed-by-chart",children:[]}]},{value:"Bootstrap the repo locally before doing cluster operations",id:"bootstrap-the-repo-locally-before-doing-cluster-operations",children:[]},{value:"Validate changes (optional)",id:"validate-changes-optional",children:[]},{value:"Deploy changes",id:"deploy-changes",children:[]},{value:"Commit changes",id:"commit-changes",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"When you would like to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new values repo locally and operate on a cluster"),Object(r.b)("li",{parentName:"ul"},"Clone a cluster: copy a values repo, make modifications and deploy to new k8s context"),Object(r.b)("li",{parentName:"ul"},"Edit values not yet under management by the console, such as chart settings"),Object(r.b)("li",{parentName:"ul"},"Do local development")),Object(r.b)("p",null,"Then you will have to create/edit a local values repo and perform operations with the CLI. If you haven't yet, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/cli/"}),"install the Otomi CLI")," first, and then follow the steps below."),Object(r.b)("p",null,"At any time you may ask for an overview of the available commands and their options, so please don't hesitate to run ",Object(r.b)("inlineCode",{parentName:"p"},"otomi help"),". In order for any command to show more output use ",Object(r.b)("inlineCode",{parentName:"p"},"-v")," (or ",Object(r.b)("inlineCode",{parentName:"p"},"-vvv")," to get even more output)."),Object(r.b)("h2",{id:"bootstrap-a-values-repo"},"Bootstrap a values repo"),Object(r.b)("p",null,"Pick the scenario you are interested in:"),Object(r.b)("h3",{id:"1-bootstrap-a-new-empty-values-repo-to-deploy-otomi-with-the-cli"},"1. Bootstrap a new (empty) values repo to deploy otomi with the CLI"),Object(r.b)("p",null,"Running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"export ENV_DIR=$PWD/otomi-values\notomi bootstrap\n")),Object(r.b)("p",null,"Will create a folder named ",Object(r.b)("inlineCode",{parentName:"p"},"otomi-values")," in your cwd which contains all the files necessary to start editing. The minimal values that need to be provided are found in ",Object(r.b)("inlineCode",{parentName:"p"},"env/cluster.yaml"),", but more may be configured to your liking. Any cluster operations afterwards expect a correct ",Object(r.b)("inlineCode",{parentName:"p"},"cluster.k8sContext"),", so be sure to set it."),Object(r.b)("p",null,"Running ",Object(r.b)("inlineCode",{parentName:"p"},"otomi validate-values")," immediately afterwards will show you errors for the missing minimal values. So go ahead and fill them in. If you are using VSCode yaml hinting is active and can be invoked with CTRL-SPACE. Keep running ",Object(r.b)("inlineCode",{parentName:"p"},"validate-values")," until your input is correct."),Object(r.b)("p",null,"Now you can continue with doing ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"#cluster-operations"}),"cluster operations"),"."),Object(r.b)("h3",{id:"2-bootstrap-the-values-from-a-values-repo-deployed-by-chart"},"2. Bootstrap the values from a values repo deployed by chart"),Object(r.b)("p",null,"Clone the ",Object(r.b)("inlineCode",{parentName:"p"},"otomi/values")," repository from ",Object(r.b)("inlineCode",{parentName:"p"},"gitea.<your.domain>/otomi/values")," to work with the values locally."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://gitea.<your.domain>/otomi/values.git otomi-values\ncd otomi-values\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Are you using SOPS?")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Then, for automatic en-/encryption, provide the credentials:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Create and edit the secrets file in the ",Object(r.b)("inlineCode",{parentName:"li"},"otomi-values")," folder: ",Object(r.b)("inlineCode",{parentName:"li"},"cp .secrets.sample .secrets"))),Object(r.b)("p",{parentName:"div"},"Optionally, in order for VSCode to provide on the fly en-/encryption:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Install the SOPS extention for VSCode (as is automatically suggested from the config provided)"),Object(r.b)("li",{parentName:"ul"},"Source the secrets: ",Object(r.b)("inlineCode",{parentName:"li"},"source .secrets")," before opening the values project, so the plugin has access.")))),Object(r.b)("p",null,"Now continue with the next step."),Object(r.b)("h2",{id:"bootstrap-the-repo-locally-before-doing-cluster-operations"},"Bootstrap the repo locally before doing cluster operations"),Object(r.b)("p",null,"A local repo always needs to be bootstrapped at least once to have all it's working files in place. However, whenever the ",Object(r.b)("inlineCode",{parentName:"p"},"otomi.version")," value has changed, it's corresponding artifacts need to be pulled and unpacked again. It can never hurt to run the bootstrap procedure as it is fast and idempotent:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"otomi bootstrap\n")),Object(r.b)("p",null,"This will make sure that the correct files are unpacked from the versioned otomi container, and other necessary files are generated."),Object(r.b)("h2",{id:"validate-changes-optional"},"Validate changes (optional)"),Object(r.b)("p",null,"Validate the configuration after making changes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(r.b)("p",null,"When successful, the output will show: ",Object(r.b)("inlineCode",{parentName:"p"},"Values validation SUCCESSFUL")),Object(r.b)("h2",{id:"deploy-changes"},"Deploy changes"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Diff output is logged in stderr!")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Helmfile decided to output diff information to stderr to circumvent template output pollution. Don't be worried to see such output prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"error:"),"."))),Object(r.b)("p",null,"Note: To see the diff in manifest output created by the changed values, run ",Object(r.b)("inlineCode",{parentName:"p"},"otomi diff")," first."),Object(r.b)("p",null,"Now deploy changes with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply\n")),Object(r.b)("p",null,"Note: Creating a team can take around 5 to 10 minutes to complete."),Object(r.b)("h2",{id:"commit-changes"},"Commit changes"),Object(r.b)("p",null,"Now commit your changes to the (otomi/values) GIT repository on the cluster to store the new desired state configuration."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"otomi commit\n")),Object(r.b)("p",null,"When bringing your own git repo you will be asked to push the values as a last step yourself. (The myriad of git auth mechanisms out there we simply can't afford to support ;)"))}p.isMDXComponent=!0},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=o,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return a?n.a.createElement(m,l(l({ref:t},s),{},{components:a})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);