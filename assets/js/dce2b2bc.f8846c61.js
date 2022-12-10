"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"Variables",linkTitle:"Variable",type:"docs",weight:2,description:"Variable"},l=void 0,o={unversionedId:"reference/lang/spec/variables",id:"version-0.4.3/reference/lang/spec/variables",title:"Variables",description:"Variable",source:"@site/versioned_docs/version-0.4.3/reference/lang/spec/variables.md",sourceDirName:"reference/lang/spec",slug:"/reference/lang/spec/variables",permalink:"/docs/reference/lang/spec/variables",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/versioned_docs/version-0.4.3/reference/lang/spec/variables.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1670645312,formattedLastUpdatedAt:"12/10/2022",frontMatter:{title:"Variables",linkTitle:"Variable",type:"docs",weight:2,description:"Variable"},sidebar:"reference",previous:{title:"Statements",permalink:"/docs/reference/lang/spec/statements"},next:{title:"Errors and Warnings",permalink:"/docs/reference/lang/error/"}},s={},p=[{value:"Immutability",id:"immutability",level:2},{value:"Variable Exporting",id:"variable-exporting",level:2},{value:"Uniqueness of Exported Variable Identifier",id:"uniqueness-of-exported-variable-identifier",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In KCL, variables can be defined using assign statements. For example, the following statement defines a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"spam")," to a string ",(0,r.kt)("inlineCode",{parentName:"p"},'"ham"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'spam = "ham"\n')),(0,r.kt)("p",null,"There are two types of variables, which are global variables and list comprehension local variables."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A global variable is defined not within any context."),(0,r.kt)("li",{parentName:"ul"},"A comprehension local variable is defined inside a comprehension.")),(0,r.kt)("p",null,"A variable can be used after definition, until the end of the current scope."),(0,r.kt)("p",null,"For a global variable, the scope is the module it is defined in. Note that a module can consists of multiple source files."),(0,r.kt)("p",null,"For a list comprehension local variable, the scope is the list comprehension it is defined in."),(0,r.kt)("p",null,"More information on modules, list comprehensions and scopes will be discussed in later chapters."),(0,r.kt)("h2",{id:"immutability"},"Immutability"),(0,r.kt)("p",null,"Global variables are immutable. In other words, once defined such a variable cannot be redefined (or, i.e., modified)."),(0,r.kt)("p",null,"The following code is illegal, and KCL will report an error during evaluation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'spam = "ham"\nspam = "eggs" # Error: The immutability rule is violated!\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A variable starts with the ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," character is mutable.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'_spam\ncond = True\nif cond:\n    _spam = "ham"\nelse:\n    _spam = "eggs"\n')),(0,r.kt)("h2",{id:"variable-exporting"},"Variable Exporting"),(0,r.kt)("p",null,"As shown in the preview chapter, KCL is able to export evaluation results to the standard output according to a target data format."),(0,r.kt)("p",null,"The rules are the followings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Living global variables at the end of an evaluation will be dumped out."),(0,r.kt)("li",{parentName:"ul"},"If the name of a variable starts with the ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," character, it will not be dumped out.")),(0,r.kt)("h2",{id:"uniqueness-of-exported-variable-identifier"},"Uniqueness of Exported Variable Identifier"),(0,r.kt)("p",null,"Each exported variable identifier must be unique in its package, so that an exported variable could be located uniquely by package location path and variable identifier, such as 'a.b.c:var', in which 'a.b.c' locates a package."),(0,r.kt)("p",null,"Two variable identifiers are different if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"they are spelled differently"),(0,r.kt)("li",{parentName:"ul"},"they are defined in different packages and are not compiled in a single execution")),(0,r.kt)("p",null,"Identifying an exported variable should be supported by the kcl compiler, which needs to provide corresponding identifying features through the command line and api form."))}u.isMDXComponent=!0}}]);