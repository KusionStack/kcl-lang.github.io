"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||l[k]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="KusionStack",s={unversionedId:"user_docs/guides/working-with-kusion/index",id:"user_docs/guides/working-with-kusion/index",title:"KusionStack",description:"KusionStack \u662f\u5f00\u6e90\u7684\u4e91\u539f\u751f\u53ef\u7f16\u7a0b\u6280\u672f\u6808\uff01",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-kusion/index.md",sourceDirName:"user_docs/guides/working-with-kusion",slug:"/user_docs/guides/working-with-kusion/",permalink:"/zh-CN/docs/next/user_docs/guides/working-with-kusion/",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/user_docs/guides/working-with-kusion/index.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1672039022,formattedLastUpdatedAt:"2022/12/26",frontMatter:{},sidebar:"user_docs",previous:{title:"ArgoCD",permalink:"/zh-CN/docs/next/user_docs/guides/argocd"},next:{title:"\u5e38\u89c1\u95ee\u7b54",permalink:"/zh-CN/docs/next/user_docs/support/"}},c={},u=[],p={toc:u};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusionstack"},"KusionStack"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KusionStack \u662f\u5f00\u6e90\u7684\u4e91\u539f\u751f\u53ef\u7f16\u7a0b\u6280\u672f\u6808\uff01")),(0,o.kt)("p",null,"KusionStack \u662f\u4e00\u4e2a\u53ef\u7f16\u7a0b\u3001\u9ad8\u7075\u6d3b\u6027\u7684\u5e94\u7528\u4ea4\u4ed8\u53ca\u8fd0\u7ef4\u6280\u672f\u6808\uff0c\u7075\u611f\u6e90\u4e8e\u878d\u5408\uff08Fusion\uff09\u4e00\u8bcd\uff0c\u65e8\u5728\u5e2e\u52a9\u4f01\u4e1a\u6784\u5efa\u7684\u5e94\u7528\u8fd0\u7ef4\u914d\u7f6e\u7ba1\u7406\u5e73\u9762\u53ca DevOps \u751f\u6001\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u878d\u5408",(0,o.kt)("strong",{parentName:"li"},"\u4e13\u6709\u4e91"),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u6df7\u5408\u4e91"),"\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u591a\u4e91"),"\u6df7\u5408\u573a\u666f"),(0,o.kt)("li",{parentName:"ol"},"\u878d\u5408\u4ee5",(0,o.kt)("strong",{parentName:"li"},"\u4e91\u539f\u751f\u6280\u672f"),"\u4e3a\u4e3b\uff0c\u540c\u65f6\u91c7\u7528",(0,o.kt)("strong",{parentName:"li"},"\u591a\u79cd\u5e73\u53f0\u6280\u672f"),"\u7684\u6df7\u5408\u5e73\u53f0\u6280\u672f\u9009\u578b"),(0,o.kt)("li",{parentName:"ol"},"\u878d\u5408",(0,o.kt)("strong",{parentName:"li"},"\u591a\u9879\u76ee"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u56e2\u961f"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u89d2\u8272"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u79df\u6237"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"\u591a\u73af\u5883"),"\u7684\u4f01\u4e1a\u7ea7\u8bc9\u6c42")),(0,o.kt)("p",null,"\u57fa\u4e8e Platform as Code \uff08\u5e73\u53f0\u670d\u52a1\u5373\u4ee3\u7801\uff09\u7406\u5ff5\uff0c\u7814\u53d1\u8005\u53ef\u4ee5\u5feb\u901f\u6536\u655b\u56f4\u7ed5",(0,o.kt)("strong",{parentName:"p"},"\u5e94\u7528\u8fd0\u7ef4\u751f\u547d\u5468\u671f"),"\u7684\u5168\u91cf\u914d\u7f6e\u5b9a\u4e49\uff0c\u9762\u5411",(0,o.kt)("strong",{parentName:"p"},"\u6df7\u5408\u6280\u672f\u4f53\u7cfb\u53ca\u4e91\u73af\u5883"),"\uff0c\u5b8c\u6210\u4ece\u5e94\u7528\u8fd0\u7ef4\u7814\u53d1\u5230\u4e0a\u7ebf\u7684",(0,o.kt)("strong",{parentName:"p"},"\u7aef\u5230\u7aef\u5de5\u4f5c\u6d41\u7a0b"),"\uff0c\u771f\u6b63\u505a\u5230",(0,o.kt)("strong",{parentName:"p"},"\u4e00\u5904\u7f16\u5199\uff0c\u968f\u5904\u4ea4\u4ed8"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(3007).Z,width:"2852",height:"962"})),(0,o.kt)("p",null,"KusionStack \u6e90\u4e8e\u8682\u8681\u96c6\u56e2\u5185\u90e8\u7684\u89c4\u6a21\u5316\u5de5\u7a0b\u5316\u8fd0\u7ef4\u5b9e\u8df5\uff0c\u5df2\u5e7f\u6cdb\u5e94\u7528\u5728\u8682\u8681\u591a\u4e91\u5e94\u7528\u4ea4\u4ed8\u8fd0\u7ef4\uff0c\u8ba1\u7b97\u53ca\u6570\u636e\u57fa\u7840\u8bbe\u65bd\u4ea4\u4ed8\uff0c\u5efa\u7ad9\u8fd0\u7ef4\uff0c\u6570\u636e\u5e93\u8fd0\u7ef4\u7b49\u591a\u4e2a\u4e1a\u52a1\u9886\u57df\uff0c\u52a9\u529b\u8682\u8681\u5b8c\u6210\u4ece\u4f20\u7edf\u8fd0\u7ef4\u7ba1\u7406\u6a21\u5f0f\u5230\u53ef\u7f16\u7a0b DevOps \u8fd0\u7ef4\u6a21\u5f0f\u7684\u8f6c\u578b\u3002"),(0,o.kt)("p",null,"\u66f4\u591a\u6587\u6863\u8bf7\u53c2\u8003: ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"https://kusionstack.io/")))}l.isMDXComponent=!0},3007:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusion-stack-1-204845c7b75b56c2e39acf57b2554c33.png"}}]);