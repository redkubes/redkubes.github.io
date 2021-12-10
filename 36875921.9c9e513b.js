(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),i=(a(0),a(188)),r={slug:"cli/working-with",title:"Working with Otomi CLI",sidebar_label:"Working with Otomi CLI"},l={unversionedId:"cli-working-with",id:"cli-working-with",isDocsHomePage:!1,title:"Working with Otomi CLI",description:"When you would like to:",source:"@site/docs/cli-working-with.md",slug:"/cli/working-with",permalink:"/docs/cli/working-with",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/cli-working-with.md",version:"current",sidebar_label:"Working with Otomi CLI",sidebar:"mainSidebar",previous:{title:"Installing and using Otomi CLI",permalink:"/docs/cli/"},next:{title:"otomi apply",permalink:"/docs/cli/apply"}},c=[{value:"Bootstrap a values repo",id:"bootstrap-a-values-repo",children:[{value:"1. Bootstrap a new (empty) values repo to deploy otomi with the CLI",id:"1-bootstrap-a-new-empty-values-repo-to-deploy-otomi-with-the-cli",children:[]},{value:"2. Bootstrap the values from a values repo deployed by chart",id:"2-bootstrap-the-values-from-a-values-repo-deployed-by-chart",children:[]}]},{value:"Bootstrap the repo locally before doing cluster operations",id:"bootstrap-the-repo-locally-before-doing-cluster-operations",children:[]},{value:"Validate changes (optional)",id:"validate-changes-optional",children:[]},{value:"Deploy changes",id:"deploy-changes",children:[]},{value:"Commit changes",id:"commit-changes",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you would like to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new values repo locally and operate on a cluster"),Object(i.b)("li",{parentName:"ul"},"Clone a cluster: copy a values repo, make modifications and deploy to new k8s context"),Object(i.b)("li",{parentName:"ul"},"Edit values not yet under management by the console, such as chart settings"),Object(i.b)("li",{parentName:"ul"},"Do local development")),Object(i.b)("p",null,"Then you will have to create/edit a local values repo and perform operations with the CLI. If you haven't yet, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/cli/"}),"install the Otomi CLI")," first, and then follow the steps below."),Object(i.b)("p",null,"At any time you may ask for an overview of the available commands and their options, so please don't hesitate to run ",Object(i.b)("inlineCode",{parentName:"p"},"otomi help"),". In order for any command to show more output use ",Object(i.b)("inlineCode",{parentName:"p"},"-v")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"-vvv")," to get even more output)."),Object(i.b)("h2",{id:"bootstrap-a-values-repo"},"Bootstrap a values repo"),Object(i.b)("p",null,"Pick the scenario you are interested in:"),Object(i.b)("h3",{id:"1-bootstrap-a-new-empty-values-repo-to-deploy-otomi-with-the-cli"},"1. Bootstrap a new (empty) values repo to deploy otomi with the CLI"),Object(i.b)("p",null,"Running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"export ENV_DIR=$PWD/otomi-values\notomi bootstrap\n")),Object(i.b)("p",null,"Will create a folder named ",Object(i.b)("inlineCode",{parentName:"p"},"otomi-values")," in your cwd which contains all the files necessary to start editing. The minimal values that need to be provided are found in ",Object(i.b)("inlineCode",{parentName:"p"},"env/cluster.yaml"),", but more may be configured to your liking. Any cluster operations afterwards expect a correct ",Object(i.b)("inlineCode",{parentName:"p"},"cluster.k8sContext"),", so be sure to set it."),Object(i.b)("p",null,"Running ",Object(i.b)("inlineCode",{parentName:"p"},"otomi validate-values")," immediately afterwards will show you errors for the missing minimal values. So go ahead and fill them in. If you are using VSCode yaml hinting is active and can be invoked with CTRL-SPACE. Keep running ",Object(i.b)("inlineCode",{parentName:"p"},"validate-values")," until your input is correct."),Object(i.b)("p",null,"Now you can continue with doing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#cluster-operations"}),"cluster operations"),"."),Object(i.b)("h3",{id:"2-bootstrap-the-values-from-a-values-repo-deployed-by-chart"},"2. Bootstrap the values from a values repo deployed by chart"),Object(i.b)("p",null,"Clone the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi/values")," repository from ",Object(i.b)("inlineCode",{parentName:"p"},"gitea.<your.domain>/otomi/values")," to work with the values locally."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://gitea.<your.domain>/otomi/values.git otomi-values\ncd otomi-values\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Are you using SOPS?")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Then, for automatic en-/encryption, provide the credentials:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Create and edit the secrets file in the ",Object(i.b)("inlineCode",{parentName:"li"},"otomi-values")," folder: ",Object(i.b)("inlineCode",{parentName:"li"},"cp .secrets.sample .secrets"))),Object(i.b)("p",{parentName:"div"},"Optionally, in order for VSCode to provide on the fly en-/encryption:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Install the SOPS extention for VSCode (as is automatically suggested from the config provided)"),Object(i.b)("li",{parentName:"ul"},"Source the secrets: ",Object(i.b)("inlineCode",{parentName:"li"},"source .secrets")," before opening the values project, so the plugin has access.")))),Object(i.b)("p",null,"Now continue with the next step."),Object(i.b)("h2",{id:"bootstrap-the-repo-locally-before-doing-cluster-operations"},"Bootstrap the repo locally before doing cluster operations"),Object(i.b)("p",null,"A local repo always needs to be bootstrapped at least once to have all it's working files in place. However, whenever the ",Object(i.b)("inlineCode",{parentName:"p"},"otomi.version")," value has changed, it's corresponding artifacts need to be pulled and unpacked again. It can never hurt to run the bootstrap procedure as it is fast and idempotent:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi bootstrap\n")),Object(i.b)("p",null,"This will make sure that the correct files are unpacked from the versioned otomi container, and other necessary files are generated."),Object(i.b)("h2",{id:"validate-changes-optional"},"Validate changes (optional)"),Object(i.b)("p",null,"Validate the configuration after making changes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi validate-values\n")),Object(i.b)("p",null,"When successful, the output will show: ",Object(i.b)("inlineCode",{parentName:"p"},"Values validation SUCCESSFUL")),Object(i.b)("h2",{id:"deploy-changes"},"Deploy changes"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Diff output is logged in stderr!")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Helmfile decided to output diff information to stderr to circumvent template output pollution. Don't be worried to see such output prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"error:"),"."))),Object(i.b)("p",null,"Note: To see the diff in manifest output created by the changed values, run ",Object(i.b)("inlineCode",{parentName:"p"},"otomi diff")," first."),Object(i.b)("p",null,"Now deploy changes with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi apply\n")),Object(i.b)("p",null,"Note: Creating a team can take around 5 to 10 minutes to complete."),Object(i.b)("h2",{id:"commit-changes"},"Commit changes"),Object(i.b)("p",null,"Now commit your changes to the (otomi/values) GIT repository on the cluster to store the new desired state configuration."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"otomi commit\n")),Object(i.b)("p",null,"When bringing your own git repo you will be asked to push the values as a last step yourself. (The myriad of git auth mechanisms out there we simply can't afford to support ;)"),Object(i.b)("p",null,"Lastly, after seeing the new values in your remote git repo, one thing remains: restarting the otomi-api container. Why? The otomi-api container needs to re-inflate itself with the new values, and otomi does not (yet) detect such changes. (The drone runner does, however, and will immediately apply the changes in the values to the cluster.)"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If the container does not get restarted and changes are deployed via the Otomi console, the api will run into a merge conflict and any user input will be lost."))),Object(i.b)("p",null,"To restart the otomi-api containers:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl -n otomi delete po -l app.kubernetes.io/name=otomi-api\n")))}p.isMDXComponent=!0},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return a?o.a.createElement(m,l(l({ref:t},s),{},{components:a})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);