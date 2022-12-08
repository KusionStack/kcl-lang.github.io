"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6013],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={title:"Schema Definition",sidebar_position:3},o=void 0,s={unversionedId:"user_docs/guides/schema-definition",id:"user_docs/guides/schema-definition",title:"Schema Definition",description:"The core scenario of KCL is write configurations and constraints. and a core feature of KCL is modeling. The keyword schema in KCL can be used to define structures and constraints, such as attribute types, default values, range check, and various other constraints. In addition, structures defined with KCL schema can be used in turn to verify implementation, validate input (JSON, YAML and other structured data) or generate code (multilingual structures, OpenAPI, and so on).",source:"@site/docs/user_docs/guides/schema-definition.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/schema-definition",permalink:"/docs/user_docs/guides/schema-definition",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/user_docs/guides/schema-definition.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1670511359,formattedLastUpdatedAt:"12/8/2022",sidebarPosition:3,frontMatter:{title:"Schema Definition",sidebar_position:3},sidebar:"user_docs",previous:{title:"Validation",permalink:"/docs/user_docs/guides/validation"},next:{title:"Data Integration",permalink:"/docs/user_docs/guides/data-integration"}},l={},c=[{value:"Define Structures and Constraints",id:"define-structures-and-constraints",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The core scenario of KCL is write configurations and constraints. and a core feature of KCL is ",(0,i.kt)("strong",{parentName:"p"},"modeling"),". The keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," in KCL can be used to define structures and constraints, such as attribute types, default values, range check, and various other constraints. In addition, structures defined with KCL schema can be used in turn to verify implementation, validate input (JSON, YAML and other structured data) or generate code (multilingual structures, OpenAPI, and so on)."),(0,i.kt)("h2",{id:"define-structures-and-constraints"},"Define Structures and Constraints"),(0,i.kt)("p",null,"For example, we have the KCL file (main.k) defined below. In it, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," keyword to define three models ",(0,i.kt)("inlineCode",{parentName:"p"},"App"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Volume"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," model has four attributes ",(0,i.kt)("inlineCode",{parentName:"p"},"domainType"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"containerPort"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"volumes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"services"),", where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"domainType"),' is a string literal union type, similar to an "enumeration", which means that the value of ',(0,i.kt)("inlineCode",{parentName:"li"},"domainType")," can only take one of ",(0,i.kt)("inlineCode",{parentName:"li"},'"Standard"'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"Customized"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Global"'),"."),(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"containerPort")," is an integer (",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"). In addition, we use the ",(0,i.kt)("inlineCode",{parentName:"li"},"check")," keyword to define its value range from 1 to 65535."),(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"services")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"Service")," schema list type, and we use ",(0,i.kt)("inlineCode",{parentName:"li"},"?")," to mark it as an optional attribute."),(0,i.kt)("li",{parentName:"ul"},"The type of ",(0,i.kt)("inlineCode",{parentName:"li"},"volumes")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Volume")," schema list type, and we use ",(0,i.kt)("inlineCode",{parentName:"li"},"?")," to mark it as an optional attribute.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    services?: [Service]  # `?` specifies a optional attribute\n    volumes?: [Volume]  # `?` specifies a optional attribute\n\n    check:\n        1 <= containerPort <= 65535  # `containerPort` must be in range [1, 65535]\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP" # When `type` is "ClusterIP", `clusterIP` must be `"None"`\n\nschema Volume:\n    container: str = "*"  # The default value of `container` is "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]  # `mountPath` must not be one of the list `["/", "/boot", "/home", "dev", "/etc", "/root"]`\n\napp: App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"We can get the YAML output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," instance by using the following command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")),(0,i.kt)("p",null,"In addition, we can put the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," model into a separate ",(0,i.kt)("inlineCode",{parentName:"p"},"app_module.k"),", then we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," keyword in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," for modular management, such as the following file structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 app_module.k\n\u2514\u2500\u2500 main.k\n")),(0,i.kt)("p",null,"The content of ",(0,i.kt)("inlineCode",{parentName:"p"},"app_module.k")," is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema App:\n    domainType: "Standard" | "Customized" | "Global"\n    containerPort: int\n    volumes: [Volume]\n    services: [Service]\n\n    check:\n        1 <= containerPort <= 65535\n\nschema Service:\n    clusterIP: str\n    $type: str\n\n    check:\n        clusterIP == "None" if $type == "ClusterIP"\n\nschema Volume:\n    container: str = "*"  # The default value of `container` is "*"\n    mountPath: str\n\n    check:\n        mountPath not in ["/", "/boot", "/home", "dev", "/etc", "/root"]\n')),(0,i.kt)("p",null,"The content of ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import .app_module  # A relative path import\n\napp: app_module.App {\n    domainType = "Standard"\n    containerPort = 80\n    volumes = [\n        {\n            mountPath = "/tmp"\n        }\n    ]\n    services = [\n        {\n            clusterIP = "None"\n            $type = "ClusterIP"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"We can still get the YAML output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," instance by using the following command line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"$ kcl main.k\napp:\n  domainType: Standard\n  containerPort: 80\n  volumes:\n  - container: '*'\n    mountPath: /tmp\n  services:\n  - clusterIP: None\n    type: ClusterIP\n")))}u.isMDXComponent=!0}}]);