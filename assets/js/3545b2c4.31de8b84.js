"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},l="Installation",i={unversionedId:"user_docs/getting-started/install",id:"version-0.4.3/user_docs/getting-started/install",title:"Installation",description:"1. Install KCL",source:"@site/versioned_docs/version-0.4.3/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/docs/user_docs/getting-started/install",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/versioned_docs/version-0.4.3/user_docs/getting-started/install.md",tags:[],version:"0.4.3",lastUpdatedBy:"Peefy",lastUpdatedAt:1670645312,formattedLastUpdatedAt:"12/10/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Introduction",permalink:"/docs/user_docs/getting-started/intro"},next:{title:"Quick Start",permalink:"/docs/user_docs/getting-started/kcl-quick-start"}},s={},c=[{value:"1. Install KCL",id:"1-install-kcl",level:2},{value:"From the Binary Releases",id:"from-the-binary-releases",level:3},{value:"From Python3",id:"from-python3",level:3},{value:"From Docker",id:"from-docker",level:3},{value:"2. Install the KCL VS Code Extension",id:"2-install-the-kcl-vs-code-extension",level:2},{value:"Next step",id:"next-step",level:2}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"1-install-kcl"},"1. Install KCL"),(0,a.kt)("h3",{id:"from-the-binary-releases"},"From the Binary Releases"),(0,a.kt)("p",null,"Each release of KCL includes various OSes and architectures. These binary versions can be manually downloaded and installed from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/releases/"},"Github")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"{install-location}/kclvm/bin")," to the environment PATH."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"export PATH=$PATH:{install-location}/kclvm/bin\n")),(0,a.kt)("h3",{id:"from-python3"},"From Python3"),(0,a.kt)("p",null,"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," (",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," requires 3.7.3+)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"python3 -m pip install kclvm && alias kcl='python3 -m kclvm'\n")),(0,a.kt)("h3",{id:"from-docker"},"From Docker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"docker run --rm -p 8080:8080 -it kusionstack/kclvm\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},"docker pull kusionstack/kclvm\n")),(0,a.kt)("h2",{id:"2-install-the-kcl-vs-code-extension"},"2. Install the KCL VS Code Extension"),(0,a.kt)("p",null,"To improve the KCL development on VS Code, there are VS Code\nextensions for both VS Code Web IDE and VS Code."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://vscode.dev"},"VS Code Web IDE")," can be reached through the browser, and you can search and install the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-web-extension"},"KCL for vscode.dev")," in the VS Code Extension tab. And here's the syntax highlighting view you'll get:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(359).Z,width:"1604",height:"1210"})),(0,a.kt)("p",null,"The KCL extension for the local VS Code IDE provides more rich language support for the KCL language such as highlighting, auto-completion, quick info hover and code navigation, etc. Although the extension is not a must-required part of KCL, it is recommended to install it to improve coding efficiency."),(0,a.kt)("h2",{id:"next-step"},"Next step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/kcl-quick-start"},"KCL Quick Start"))))}p.isMDXComponent=!0},359:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ide-vscode-4a5d4d1920667701ecb25a8a25b9cbb1.png"}}]);