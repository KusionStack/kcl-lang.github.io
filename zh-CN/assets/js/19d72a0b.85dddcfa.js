"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Variables",linkTitle:"Variable",type:"docs",weight:2,description:"Variable"},l=void 0,o={unversionedId:"reference/lang/spec/variables",id:"reference/lang/spec/variables",title:"Variables",description:"Variable",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/spec/variables.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/variables",permalink:"/zh-CN/docs/next/reference/lang/spec/variables",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/reference/lang/spec/variables.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1673332987,formattedLastUpdatedAt:"2023/1/10",frontMatter:{title:"Variables",linkTitle:"Variable",type:"docs",weight:2,description:"Variable"},sidebar:"reference",previous:{title:"Statements",permalink:"/zh-CN/docs/next/reference/lang/spec/statements"},next:{title:"\u9519\u8bef\u4e0e\u8b66\u544a",permalink:"/zh-CN/docs/next/reference/lang/error/"}},s={},p=[{value:"Immutability",id:"immutability",level:2},{value:"Variable Exporting",id:"variable-exporting",level:2},{value:"Uniqueness of Exported Variable Identifier",id:"uniqueness-of-exported-variable-identifier",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In KCL, variables can be defined using assign statements. For example, the following statement defines a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"spam")," to a string ",(0,r.kt)("inlineCode",{parentName:"p"},'"ham"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'spam = "ham"\n')),(0,r.kt)("p",null,"There are two types of variables, which are global variables and list comprehension local variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A global variable is defined not within any context."),(0,r.kt)("li",{parentName:"ul"},"A comprehension local variable is defined inside a comprehension.")),(0,r.kt)("p",null,"A variable can be used after definition, until the end of the current scope."),(0,r.kt)("p",null,"For a global variable, the scope is the module it is defined in. Note that a module can consists of multiple source files."),(0,r.kt)("p",null,"For a list comprehension local variable, the scope is the list comprehension it is defined in."),(0,r.kt)("p",null,"More information on modules, list comprehensions and scopes will be discussed in later chapters."),(0,r.kt)("h2",{id:"immutability"},"Immutability"),(0,r.kt)("p",null,"Global variables are immutable. In other words, once defined such a variable cannot be redefined (or, i.e., modified)."),(0,r.kt)("p",null,"The following code is illegal, and KCL will report an error during evaluation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'spam = "ham"\nspam = "eggs" # Error: The immutability rule is violated!\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A variable starts with the ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," character is mutable.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'_spam\ncond = True\nif cond:\n    _spam = "ham"\nelse:\n    _spam = "eggs"\n')),(0,r.kt)("h2",{id:"variable-exporting"},"Variable Exporting"),(0,r.kt)("p",null,"As shown in the preview chapter, KCL is able to export evaluation results to the standard output according to a target data format."),(0,r.kt)("p",null,"The rules are the followings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Living global variables at the end of an evaluation will be dumped out."),(0,r.kt)("li",{parentName:"ul"},"If the name of a variable starts with the ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," character, it will not be dumped out.")),(0,r.kt)("h2",{id:"uniqueness-of-exported-variable-identifier"},"Uniqueness of Exported Variable Identifier"),(0,r.kt)("p",null,"Each exported variable identifier must be unique in its package, so that an exported variable could be located uniquely by package location path and variable identifier, such as 'a.b.c:var', in which 'a.b.c' locates a package."),(0,r.kt)("p",null,"Two variable identifiers are different if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"they are spelled differently"),(0,r.kt)("li",{parentName:"ul"},"they are defined in different packages and are not compiled in a single execution")),(0,r.kt)("p",null,"Identifying an exported variable should be supported by the kcl compiler, which needs to provide corresponding identifying features through the command line and api form."))}u.isMDXComponent=!0}}]);