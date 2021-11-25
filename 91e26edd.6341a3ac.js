(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(188)),o={slug:"tutorials/",title:"Tutorial Overview",sidebar_label:"Overview"},l={unversionedId:"tutorial-overview",id:"tutorial-overview",isDocsHomePage:!1,title:"Tutorial Overview",description:"When Otomi is installed with minimal values (using the quickstarts), you can not use all the tutorials unless you add the auto generated CA to all worker nodes. To prevent adding the CA to all worker nodes, install Otomi with hasExternalDNS=true.",source:"@site/docs/tutorial-overview.md",slug:"/tutorials/",permalink:"/docs/tutorials/",editUrl:"https://github.com/redkubes/redkubes.github.io/tree/master/docs/tutorial-overview.md",version:"current",sidebar_label:"Overview",sidebar:"mainSidebar",previous:{title:"otomi x",permalink:"/docs/cli/x"},next:{title:"Installing Otomi with external DNS",permalink:"/docs/tutorials/full-install-for-tutorial"}},c=[],s={toc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Important!")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When Otomi is installed with minimal values (using the quickstarts), you can not use all the tutorials unless you add the auto generated CA to all worker nodes. To prevent adding the CA to all worker nodes, install Otomi with ",Object(i.b)("inlineCode",{parentName:"p"},"hasExternalDNS=true"),"."))),Object(i.b)("p",null,"This section contains tutorials to learn using Otomi and all the integrated apps."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"full-install-for-tutorial"}),"Install Otomi with external DNS")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"create-keycloak-users"}),"Creating and managing users when using Keycloak as IDP")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"build-tag-push"}),"Build, tag and push an image to Harbor")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"create-k8s-service"}),"Create a Kubernetes service")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"create-knative-service"}),"Create a Knative service")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"expose-service"}),"Publicly expose an existing service using Otomi Console")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"create-secret-vault"}),"Create a secret in Hashicorp Vault")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"add-secret"}),"Add a secret created in vault to Kubernetes")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"use-secret"}),"Use secrets in Kubernetes")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"create-ksvc-otomi"}),"Creating Knative services using Otomi Console"))),Object(i.b)("p",null,"To be able to do the tutorials, please make sure you have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A running Kubernetes cluster"),Object(i.b)("li",{parentName:"ul"},"Docker installed on your machine"),Object(i.b)("li",{parentName:"ul"},"A Git client installed on your machine"),Object(i.b)("li",{parentName:"ul"},"Visual Studio Code (or any other text editor) installed on you machine (in the tutorials we'll use VSC)"),Object(i.b)("li",{parentName:"ul"},"Created a Team in Otomi. In the tutorials we'll use a team called ",Object(i.b)("inlineCode",{parentName:"li"},"demo")),Object(i.b)("li",{parentName:"ul"},"Signed in to Otomi as a user who is a member of the ",Object(i.b)("inlineCode",{parentName:"li"},"team-demo")," group")),Object(i.b)("p",null,"If you haven't already, first install Otomi."))}u.isMDXComponent=!0},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),p=r,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return a?n.a.createElement(d,l(l({ref:t},s),{},{components:a})):n.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);