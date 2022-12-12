"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Data Integration",sidebar_position:4},i=void 0,s={unversionedId:"user_docs/guides/data-integration",id:"version-0.4.4/user_docs/guides/data-integration",title:"Data Integration",description:"In KCL, we can not only compile and output the configuration code written by KCL into YAML format data, but also directly embed JSON/YAML and other data into the KCL language. For example, for the following KCL code (main.k):",source:"@site/versioned_docs/version-0.4.4/user_docs/guides/data-integration.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/data-integration",permalink:"/zh-CN/docs/user_docs/guides/data-integration",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/versioned_docs/version-0.4.4/user_docs/guides/data-integration.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1670845842,formattedLastUpdatedAt:"2022/12/12",sidebarPosition:4,frontMatter:{title:"Data Integration",sidebar_position:4},sidebar:"user_docs",previous:{title:"Schema Definition",permalink:"/zh-CN/docs/user_docs/guides/schema-definition"},next:{title:"Automation",permalink:"/zh-CN/docs/user_docs/guides/automation"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In KCL, we can not only compile and output the configuration code written by KCL into YAML format data, but also directly embed JSON/YAML and other data into the KCL language. For example, for the following KCL code (main.k):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import yaml\n\nschema Server:\n    ports: [int]\n\nserver: Server = yaml.decode("""\\\nports:\n- 80\n- 8080\n""")\n')),(0,o.kt)("p",null,"In the above code, we use the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," module of KCL and its ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml.decode")," function directly integrates YAML data, and uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Server")," schema to directly verify the integrated YAML data. We can obtain the configuration output through the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"$ kcl main.k\nserver:\n  ports:\n  - 80\n  - 8080\n")),(0,o.kt)("p",null,"In addition, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml.encode")," to serialize YAML data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kcl"},"import yaml\n\nserver = yaml.encode({\n    ports = [80, 8080]\n})\n")),(0,o.kt)("p",null,"The output of the execution command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"$ kcl main.k\nserver: |\n  ports:\n  - 80\n  - 8080\n")),(0,o.kt)("p",null,"Similarly, for JSON data, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"json.encode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"json.decode")," function performs data integration in the same way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kcl"},"import json\n\nserver_json_encode = json.encode({\n    ports = [80, 8080]\n})\nserver_json_decode = json.decode('{\"ports\": [80, 8080]}')\n")),(0,o.kt)("p",null,"The output of the execution command is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"$ kcl main.k\nserver_json_encode: '{\"ports\": [80, 8080]}'\nserver_json_decode:\n  ports:\n  - 80\n  - 8080\n")))}p.isMDXComponent=!0}}]);