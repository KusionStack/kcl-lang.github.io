"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},l="Quick Start",i={unversionedId:"tools/cli/openapi/quick-start",id:"tools/cli/openapi/quick-start",title:"Quick Start",description:"1. Install KCLOpenAPI tool",source:"@site/docs/tools/cli/openapi/quick-start.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/quick-start",permalink:"/docs/tools/cli/openapi/quick-start",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/tools/cli/openapi/quick-start.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1669214123,formattedLastUpdatedAt:"11/23/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"OpenAPI Tools",permalink:"/docs/tools/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/docs/tools/cli/openapi/crd-to-kcl"}},p={},c=[{value:"1. Install KCLOpenAPI tool",id:"1-install-kclopenapi-tool",level:2},{value:"2. Generate KCL Files",id:"2-generate-kcl-files",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick Start"),(0,o.kt)("h2",{id:"1-install-kclopenapi-tool"},"1. Install KCLOpenAPI tool"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. Download binary\n# https://github.com/KusionStack/kcl-openapi/releases\n\n# 2. Add PATH\nexport PATH="<Your directory to store KCL OpenAPI binary>:$PATH"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Verify the installation results through execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kcl-openapi - h"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  kcl-openapi [OPTIONS] <generate | validate>\n\nSwagger tries to support you as best as possible when building APIs.\n\nIt aims to represent the contract of your API with a language agnostic description of your application in json or yaml.\n\n\nApplication Options:\n  -q, --quiet                  silence logs\n      --log-output=LOG-FILE    redirect logs to file\n\nHelp Options:\n  -h, --help                   Show this help message\n\nAvailable commands:\n  generate  generate kcl code\n  validate  validate the swagger document\n")),(0,o.kt)("h2",{id:"2-generate-kcl-files"},"2. Generate KCL Files"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tools/cli/openapi/openapi-to-kcl"},"OpenAPI to KCL")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tools/cli/openapi/crd-to-kcl"},"CRD to KCL"))))}u.isMDXComponent=!0}}]);