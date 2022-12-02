"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="\u914d\u7f6e",s={unversionedId:"user_docs/guides/configuration/index",id:"user_docs/guides/configuration/index",title:"\u914d\u7f6e",description:"The core features of KCL are its modeling and constraint capabilities, and the basic functions of KCL revolve around the two core features. In addition, KCL follows the user-centric configuration concept to design its basic functions, which can be understood from two aspects:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/configuration/index.md",sourceDirName:"user_docs/guides/configuration",slug:"/user_docs/guides/configuration/",permalink:"/zh-CN/docs/user_docs/guides/configuration/",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/user_docs/guides/configuration/index.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1669961766,formattedLastUpdatedAt:"2022/12/2",frontMatter:{},sidebar:"user_docs",previous:{title:"\u7528\u6237\u624b\u518c",permalink:"/zh-CN/docs/user_docs/guides/"},next:{title:"\u6821\u9a8c",permalink:"/zh-CN/docs/user_docs/guides/validation/"}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"The core features of KCL are its ",(0,o.kt)("strong",{parentName:"p"},"modeling")," and ",(0,o.kt)("strong",{parentName:"p"},"constraint")," capabilities, and the basic functions of KCL revolve around the two core features. In addition, KCL follows the user-centric configuration concept to design its basic functions, which can be understood from two aspects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Domain model-centric configuration view"),": With the rich features of KCL language and ",(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/tools/cli/openapi/quick-start"},"KCL OpenAPI")," tools, we can directly integrate a wide range of well-designed models in the community into KCL (such as the K8s resource model). We can also design and implement our own KCL models or libraries according to different scenarios, forming a complete set of domain models for other configuration end users to use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"End user-centric configuration view"),": With KCL's code encapsulation, abstraction and reuse capabilities, the model architecture can be further abstracted and simplified (for example, the K8s resource model is abstracted into an application-centered server model) to ",(0,o.kt)("strong",{parentName:"li"},"minimize the")," end user configuration input**, simplify the user's configuration interface, and facilitate manual or automatic API modification.")),(0,o.kt)("p",null,"No matter what configuration view is centered on, for configuration code, there are requirements for configuration data constraints, such as type constraints, required/optional constraints on configuration attributes, range constraints, and immutability constraints. This is also one of the core issues KCL is committed to solving."),(0,o.kt)("p",null,"Thus, we can write a KCL file named ",(0,o.kt)("inlineCode",{parentName:"p"},"main.k")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    gender: "Male" | "Female"\n    name: Name\n\nschema Name:\n    first: str\n    middle?: str  # Optional, but must be non-empty when specified\n    last: str\n\n    check:\n        first != ""\n        last != ""\n        middle != "" if middle\n\nalice = Person {\n    # gendre: "Female" # Error: misspelled attribute\n    gender: "Female"\n    name.first: "Alice"\n    name.last: "White"\n}\n')),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kcl main.k\n")),(0,o.kt)("p",null,"We can get the output YAML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"alice:\n  gender: Female\n  name:\n    first: Alice\n    last: White\n")))}d.isMDXComponent=!0}}]);