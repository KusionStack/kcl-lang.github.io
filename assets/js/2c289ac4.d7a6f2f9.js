"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6777],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(c,".").concat(u)]||m[u]||s[u]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7885:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="Overview",i={unversionedId:"tools/cli/kcl/overview",id:"tools/cli/kcl/overview",title:"Overview",description:"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and testing of KCL.",source:"@site/docs/tools/cli/kcl/overview.md",sourceDirName:"tools/cli/kcl",slug:"/tools/cli/kcl/overview",permalink:"/docs/tools/cli/kcl/overview",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/tools/cli/kcl/overview.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1668769960,formattedLastUpdatedAt:"11/18/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"KCL Language Tools",permalink:"/docs/tools/cli/kcl/"},next:{title:"Format",permalink:"/docs/tools/cli/kcl/fmt"}},c={},p=[],d={toc:p};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and testing of KCL."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Main Toolset"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kcl")),(0,a.kt)("td",{parentName:"tr",align:null},"Provide support for KCL in coding, compiling and testing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl build"),(0,a.kt)("td",{parentName:"tr",align:null},"Build KCL code(not yet)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl test"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide unit test(not yet) and integration test")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl fmt"),(0,a.kt)("td",{parentName:"tr",align:null},"Formoat KCL code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl list"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse the KCL code and lists the option parameter/schema attributes information. \uff08kcl list-options and kcl list-attributes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Automation Toolset"),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-lint"),(0,a.kt)("td",{parentName:"tr",align:null},"Check code style for KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-doc"),(0,a.kt)("td",{parentName:"tr",align:null},"Parses the KCL code and generate documents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-fmt"),(0,a.kt)("td",{parentName:"tr",align:null},"Same as ",(0,a.kt)("inlineCode",{parentName:"td"},"kcl fmt"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IDE Plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"IntelliJ IDEA KCL plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on IntelliJ IDEA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"VS Code KCL plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on VS Code")))))}s.isMDXComponent=!0}}]);