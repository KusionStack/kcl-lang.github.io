"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},i=void 0,l={unversionedId:"reference/model/crypto",id:"version-0.4.3/reference/model/crypto",title:"crypto",description:"crypto system module",source:"@site/versioned_docs/version-0.4.3/reference/model/crypto.md",sourceDirName:"reference/model",slug:"/reference/model/crypto",permalink:"/zh-CN/docs/0.4.3/reference/model/crypto",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/versioned_docs/version-0.4.3/reference/model/crypto.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1670845842,formattedLastUpdatedAt:"2022/12/12",frontMatter:{title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto system module",weight:100},sidebar:"reference",previous:{title:"base64",permalink:"/zh-CN/docs/0.4.3/reference/model/base64"},next:{title:"datetime",permalink:"/zh-CN/docs/0.4.3/reference/model/datetime"}},c={},p=[{value:"md5",id:"md5",level:2},{value:"sha1",id:"sha1",level:2},{value:"sha224",id:"sha224",level:2},{value:"sha256",id:"sha256",level:2},{value:"sha384",id:"sha384",level:2},{value:"sha512",id:"sha512",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"md5"},"md5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'md5(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encrypt the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"MD5")," and the codec registered for encoding."),(0,o.kt)("h2",{id:"sha1"},"sha1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'sha1(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encrypt the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA1")," and the codec registered for encoding."),(0,o.kt)("h2",{id:"sha224"},"sha224"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'sha224(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encrypt the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA224")," and the codec registered for encoding."),(0,o.kt)("h2",{id:"sha256"},"sha256"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'sha256(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encrypt the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA256")," and the codec registered for encoding."),(0,o.kt)("h2",{id:"sha384"},"sha384"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'sha384(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encrypt the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA384")," and the codec registered for encoding."),(0,o.kt)("h2",{id:"sha512"},"sha512"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'sha512(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encrypt the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"SHA512")," and the codec registered for encoding."))}d.isMDXComponent=!0}}]);