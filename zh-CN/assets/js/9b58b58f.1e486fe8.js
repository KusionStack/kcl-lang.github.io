"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(n),c=l,h=k["".concat(p,".").concat(c)]||k[c]||u[c]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const i={slug:"2022-kcl-0.4.4-release-blog",title:"KCL v0.4.4 \u53d1\u5e03\u65e5\u5fd7",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","KusionStack","Kusion"]},r=void 0,o={permalink:"/zh-CN/blog/2022-kcl-0.4.4-release-blog",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/blog/2022-12-06-kcl-0.4.4-release-blog/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-12-06-kcl-0.4.4-release-blog/index.md",title:"KCL v0.4.4 \u53d1\u5e03\u65e5\u5fd7",description:"KCL \u56e2\u961f\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 0.4.4 \u7248\u672c\u73b0\u5728\u5df2\u7ecf\u53ef\u7528\uff01\u672c\u6b21\u53d1\u5e03\u4e3b\u8981\u4e3a KCL \u8bed\u8a00\u589e\u52a0\u4e86\u81ea\u5b9a\u4e49 YAML Manifests \u8f93\u51fa\u7684\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\u5e76\u8c03\u7528\u7cfb\u7edf\u51fd\u6570\u6765\u81ea\u5b9a\u4e49 YAML \u8f93\u51fa\u7684\u6837\u5f0f\u800c\u65e0\u9700\u7406\u89e3\u590d\u6742\u7684 schema settings \u8bed\u4e49\uff1b\u6b64\u5916\u672c\u6b21\u53d1\u5e03\u63d0\u4f9b\u4e86\u6700\u65b0\u7684 KCL Python SDK \u53ef\u7528\u4e8e Python \u7528\u6237\u5bf9 KCL \u76f4\u63a5\u96c6\u6210\uff1b\u540c\u65f6\u6211\u4eec\u5927\u5927\u964d\u4f4e\u4e86 KCL \u5b89\u88c5\u5305\u7684\u4f53\u79ef\uff0c\u5e73\u5747\u5b89\u88c5\u5305\u4f53\u79ef\u964d\u4f4e\u4e3a\u4e4b\u524d\u7248\u672c\u7684\u4e94\u5206\u4e4b\u4e00\uff0c\u5e76\u5305\u542b\u591a\u9879\u7f16\u8bd1\u5668\u62a5\u9519\u4fe1\u606f\u4f18\u5316\u548c bug \u4fee\u590d\u3002\u60a8\u53ef\u4ee5\u5728 KCL \u53d1\u5e03\u9875\u9762 \u83b7\u5f97\u66f4\u591a\u8be6\u7ec6\u53d1\u5e03\u4fe1\u606f\u548c KCL \u4e8c\u8fdb\u5236\u4e0b\u8f7d\u94fe\u63a5\u3002",date:"2022-12-06T00:00:00.000Z",formattedDate:"2022\u5e7412\u67086\u65e5",tags:[{label:"Release Blog",permalink:"/zh-CN/blog/tags/release-blog"},{label:"KCL",permalink:"/zh-CN/blog/tags/kcl"},{label:"KusionStack",permalink:"/zh-CN/blog/tags/kusion-stack"},{label:"Kusion",permalink:"/zh-CN/blog/tags/kusion"}],readingTime:8.845,truncated:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2022-kcl-0.4.4-release-blog",title:"KCL v0.4.4 \u53d1\u5e03\u65e5\u5fd7",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","KusionStack","Kusion"]},nextItem:{title:"SETTA 2022 \u4f1a\u8bae KCL \u4ecb\u7ecd\u5185\u5bb9",permalink:"/zh-CN/blog/2022-kcl-setta-meeting"}},p={authorsImageUrls:[void 0]},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u65b0\u589e\u7279\u6027",id:"\u65b0\u589e\u7279\u6027",level:2},{value:"\u81ea\u5b9a\u4e49 YAML \u683c\u5f0f\u8f93\u51fa",id:"\u81ea\u5b9a\u4e49-yaml-\u683c\u5f0f\u8f93\u51fa",level:3},{value:"Python SDK",id:"python-sdk",level:3},{value:"\u547d\u4ee4\u884c\u5de5\u5177",id:"\u547d\u4ee4\u884c\u5de5\u5177",level:4},{value:"API",id:"api",level:4},{value:"\u5b89\u88c5\u4f53\u79ef\u4f18\u5316",id:"\u5b89\u88c5\u4f53\u79ef\u4f18\u5316",level:2},{value:"\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u4fee\u590d",level:2},{value:"\u51fd\u6570\u8c03\u7528\u9519\u8bef\u4fe1\u606f\u4f18\u5316",id:"\u51fd\u6570\u8c03\u7528\u9519\u8bef\u4fe1\u606f\u4f18\u5316",level:3},{value:"\u63d2\u503c\u4e09\u5f15\u53f7\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u9519\u8bef\u4fee\u590d",id:"\u63d2\u503c\u4e09\u5f15\u53f7\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u9519\u8bef\u4fee\u590d",level:3},{value:"\u5176\u4ed6\u9519\u8bef\u4fee\u590d",id:"\u5176\u4ed6\u9519\u8bef\u4fee\u590d",level:3},{value:"\u6587\u6863",id:"\u6587\u6863",level:2},{value:"\u793e\u533a\u52a8\u6001",id:"\u793e\u533a\u52a8\u6001",level:2},{value:"\u4e0b\u4e00\u6b65\u8ba1\u5212",id:"\u4e0b\u4e00\u6b65\u8ba1\u5212",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"KCL \u56e2\u961f\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 0.4.4 \u7248\u672c\u73b0\u5728\u5df2\u7ecf\u53ef\u7528\uff01\u672c\u6b21\u53d1\u5e03\u4e3b\u8981\u4e3a KCL \u8bed\u8a00\u589e\u52a0\u4e86\u81ea\u5b9a\u4e49 YAML Manifests \u8f93\u51fa\u7684\u80fd\u529b\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u4ee3\u7801\u5e76\u8c03\u7528\u7cfb\u7edf\u51fd\u6570\u6765\u81ea\u5b9a\u4e49 YAML \u8f93\u51fa\u7684\u6837\u5f0f\u800c\u65e0\u9700\u7406\u89e3\u590d\u6742\u7684 schema settings \u8bed\u4e49\uff1b\u6b64\u5916\u672c\u6b21\u53d1\u5e03\u63d0\u4f9b\u4e86\u6700\u65b0\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kclvm-py"},"KCL Python SDK")," \u53ef\u7528\u4e8e Python \u7528\u6237\u5bf9 KCL \u76f4\u63a5\u96c6\u6210\uff1b\u540c\u65f6\u6211\u4eec\u5927\u5927\u964d\u4f4e\u4e86 KCL \u5b89\u88c5\u5305\u7684\u4f53\u79ef\uff0c\u5e73\u5747\u5b89\u88c5\u5305\u4f53\u79ef\u964d\u4f4e\u4e3a\u4e4b\u524d\u7248\u672c\u7684\u4e94\u5206\u4e4b\u4e00\uff0c\u5e76\u5305\u542b\u591a\u9879\u7f16\u8bd1\u5668\u62a5\u9519\u4fe1\u606f\u4f18\u5316\u548c bug \u4fee\u590d\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/releases/tag/v0.4.4-alpha.2"},"KCL \u53d1\u5e03\u9875\u9762")," \u83b7\u5f97\u66f4\u591a\u8be6\u7ec6\u53d1\u5e03\u4fe1\u606f\u548c KCL \u4e8c\u8fdb\u5236\u4e0b\u8f7d\u94fe\u63a5\u3002"),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"KCL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\uff0c\u671f\u671b\u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u548c\u7b56\u7565\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u5feb\u7684\u81ea\u52a8\u5316\u96c6\u6210\u548c\u826f\u597d\u7684\u751f\u6001\u5ef6\u5c55\u6027\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u5c06\u5411\u8bfb\u8005\u4ecb\u7ecd KCL \u793e\u533a\u7684\u8fd1\u671f\u52a8\u6001\u3002"),(0,l.kt)("h2",{id:"\u65b0\u589e\u7279\u6027"},"\u65b0\u589e\u7279\u6027"),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49-yaml-\u683c\u5f0f\u8f93\u51fa"},"\u81ea\u5b9a\u4e49 YAML \u683c\u5f0f\u8f93\u51fa"),(0,l.kt)("p",null,"\u5728\u8fc7\u53bb\u7684 KCL \u7248\u672c\u4e2d\uff0cYAML \u8f93\u51fa\u7684\u6837\u5f0f\u662f\u5728 KCL \u7f16\u8bd1\u5668\u4e2d\u662f\u786c\u7f16\u7801\u7684\uff0c\u7528\u6237\u53ef\u4ee5\u4e3a schema \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"__settings__")," \u5143\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4e0d\u540c\u7684\u503c\u6765\u51b3\u5b9a YAML \u8f93\u51fa\u6837\u5f0f\uff0c\u8fd9\u5e26\u6765\u4e86\u8f83\u9ad8\u7684\u590d\u6742\u5ea6\u548c\u8bb0\u5fc6\u6210\u672c\uff0c\u56e0\u6b64\u5728 0.4.4 \u7248\u672c\u4e2d\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7cfb\u7edf\u5e93\u51fd\u6570\u7528\u4e8e\u5f00\u53d1\u4eba\u5458\u66f4\u7b80\u5355\u5730\u81ea\u5b9a\u4e49 YAML \u8f93\u51fa\u6837\u5f0f\uff0c\u8fd9\u4e2a\u51fd\u6570\u7684\u7b7e\u540d\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'manifests.yaml_stream(values: [any], opts: {str:} = {\n    sort_keys = False\n    ignore_private = True\n    ignore_none = False\n    sep = "---"\n})\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u7684\u529f\u80fd\u662f\u5c06 KCL \u5bf9\u8c61\u5217\u8868\u5e8f\u5217\u5316\u4e3a\u5e26 ",(0,l.kt)("inlineCode",{parentName:"p"},"---")," \u5206\u9694\u7b26\u7684\u6837\u5f0f YAML \u8f93\u51fa\uff0c\u5b83\u5177\u6709\u4e24\u4e2a\u53c2\u6570:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"values")," - \u4e00\u4e2a KCL \u5bf9\u8c61\u5217\u8868"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"opts")," - YAML \u5e8f\u5217\u5316\u9009\u9879",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sort_keys"),"\uff1a\u662f\u5426\u6309\u5c5e\u6027\u540d\u79f0\u7684\u5b57\u5178\u5e8f\u5bf9\u5e8f\u5217\u5316\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\uff08\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"False"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ignore_private"),"\uff1a\u662f\u5426\u5ffd\u7565\u540d\u79f0\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"_")," \u5f00\u5934\u7684\u5c5e\u6027\u5e8f\u5217\u5316\u8f93\u51fa\uff08\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"True"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ignore_none"),"\uff1a\u662f\u5426\u5ffd\u7565\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"None")," \u7684\u5c5e\u6027\uff08\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"False"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sep"),"\uff1a\u5728\u591a\u4e2a YAML \u6587\u6863\u4e4b\u95f4\u9009\u62e9\u600e\u6837\u7684\u5206\u9694\u7b26\uff08\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},'"---"'),"\uff09\u3002")))),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import manifests\n\nschema Deployment:\n    apiVersion: str = "v1"\n    kind: str = "Deployment"\n    metadata: {str:} = {\n        name = "deploy"\n    }\n    spec: {str:} = {\n        replica = 2\n    }\n\nschema Service:\n    apiVersion: str = "v1"\n    kind: str = "Service"\n    metadata: {str:} = {\n         name = "svc"\n    }\n    spec: {str:} = {}    \n        \ndeployments = [Deployment {}, Deployment {}]\nservices = [Service {}, Service {}]\n\nmanifests.yaml_stream(deployments + services)\n')),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u5bfc\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"manifests")," \u6a21\u5757\u5e76\u5b9a\u4e49 2 \u4e2a Deployment \u4ee5\u53ca 2 \u4e2a Service \u8d44\u6e90\uff0c\u5f53\u6211\u4eec\u60f3\u4ee5 YAML stream \u5e76\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"---")," \u4f5c\u4e3a\u5206\u9694\u7b26\u7684\u683c\u5f0f\u4f9d\u6b21\u8f93\u51fa\u8fd9 4 \u4e2a\u8d44\u6e90\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83\u4eec\u5408\u5e76\u4e3a\u4e00\u4e2a KCL \u5217\u8868\u5e76\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"manifests.yaml_stream")," \u51fd\u6570\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," \u5f62\u53c2\u8fdb\u884c\u4f20\u5165 (\u5982\u65e0\u7279\u6b8a\u9700\u6c42\uff0copts \u53c2\u6570\u4e00\u822c\u4f7f\u7528\u9ed8\u8ba4\u503c\u5373\u53ef)\uff0c\u6700\u7ec8\u5f97\u5230 YAML \u8f93\u51fa\u4e3a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1aschema \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"__settings__")," \u5143\u5c5e\u6027\u8bbe\u7f6e YAML \u8f93\u51fa\u6837\u5f0f\u7684\u7279\u6027\u4ecd\u7136\u53ef\u4ee5\u5728 v0.4.4 \u7248\u672c\u4e2d\u4f7f\u7528\uff0c\u5927\u7ea6\u540e\u7eed\u4e24\u4e2a\u5c0f\u7248\u672c\u53d1\u5e03\u540e\u5728 KCL v0.4.6 \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u4f1a\u79fb\u9664\u8fd9\u4e2a\u7279\u6027")),(0,l.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/issues/94"},"https://github.com/KusionStack/KCLVM/issues/94")),(0,l.kt)("h3",{id:"python-sdk"},"Python SDK"),(0,l.kt)("p",null,"\u9664\u4e86\u5df2\u6709\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kclvm-go"},"KCL Go SDK"),", \u672c\u6b21\u53d1\u5e03\u8fd8\u65b0\u589e\u4e86 KCL Python SDK\uff0c\u4f7f\u7528 Python SDK \u8981\u6c42\u60a8\u672c\u5730\u5177\u5907\u9ad8\u4e8e 3.7.3 \u7684 Python \u7248\u672c\u548c pip \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\u5e76\u83b7\u5f97\u5e2e\u52a9\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"$ python3 -m pip install kclvm && python3 -m kclvm --help\n")),(0,l.kt)("h4",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("p",null,"\u7f16\u5199\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"main.k")," \u7684 KCL \u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'name = "kcl"\nage = 1\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person {}\nx1 = Person {\n    age = 101\n}\n')),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5e76\u83b7\u5f97\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"$ python3 -m kclvm hello.k\nname: kcl\nage: 1\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,l.kt)("h4",{id:"api"},"API"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7 Python \u4ee3\u7801\u5b9e\u73b0\u5bf9 KCL \u6587\u4ef6\u7684\u6267\u884c"),(0,l.kt)("p",null,"\u7f16\u5199\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"main.py")," \u7684 python \u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import kclvm.program.exec as kclvm_exec\nimport kclvm.vm.planner as planner\n\nprint(planner.plan(kclvm_exec.Run(["hello.k"]).filter_by_path_selector()))\n')),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5e76\u83b7\u5f97\u8f93\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"$ python3 main.py\nname: kcl\nage: 1\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u548c API \u53ef\u4ee5\u83b7\u5f97\u540c\u6837\u7684\u8f93\u51fa\u3002"),(0,l.kt)("p",null,"\u76ee\u524d KCL Python SDK \u8fd8\u5904\u4e8e\u65e9\u671f\u9884\u89c8\u7248\u672c\uff0c\u540e\u7eed KCL \u56e2\u961f\u4f1a\u6301\u7eed\u66f4\u65b0\u5e76\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\uff0c\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kclvm-py"},"https://github.com/KusionStack/kclvm-py")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f53\u79ef\u4f18\u5316"},"\u5b89\u88c5\u4f53\u79ef\u4f18\u5316"),(0,l.kt)("p",null,"\u5728\u65b0\u7684 KCL \u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06 KCL \u5185\u7f6e\u7684 Python3 \u5265\u79bb\uff0c\u4f7f\u5f97 KCL \u4e8c\u8fdb\u5236\u538b\u7f29\u5305\u7684\u4f53\u79ef\u4ece\u5e73\u5747 200M \u964d\u4f4e\u4e3a 35M\uff0c\u7528\u6237\u53ef\u4ee5\u66f4\u5feb\u5730\u4e0b\u8f7d\u5e76\u4f7f\u7528 KCL\uff0c\u5e76\u4e14 Python Plugin \u6210\u4e3a\u4e00\u4e2a\u53ef\u9009\u9879\uff0c\u5982\u679c\u60a8\u60f3\u542f\u7528 KCL Python \u63d2\u4ef6\uff0c\u4e00\u4e2a\u989d\u5916\u8981\u6c42\u662f\u9700\u8981\u60a8\u672c\u5730\u5177\u5907\u9ad8\u4e8e 3.7.3 \u7248\u672c\u7684 Python \u4ee5\u53ca pip \u5305\u7ba1\u7406\u5de5\u5177\uff0c\u66f4\u591a\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl-plugin"},"https://github.com/KusionStack/kcl-plugin")),(0,l.kt)("h2",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,l.kt)("h3",{id:"\u51fd\u6570\u8c03\u7528\u9519\u8bef\u4fe1\u606f\u4f18\u5316"},"\u51fd\u6570\u8c03\u7528\u9519\u8bef\u4fe1\u606f\u4f18\u5316"),(0,l.kt)("p",null,"\u5728 0.4.4 \u7248\u672c\u4e2d\uff0cKCL \u4f18\u5316\u4e86\u5f53\u51fd\u6570\u53c2\u6570\u4e2a\u6570\u4e0d\u5339\u914d\u65f6\u7684\u9519\u8bef\u4fe1\u606f\u8f93\u51fa\uff0c\u652f\u6301\u663e\u793a\u51fd\u6570\u540d\u79f0\u4ee5\u53ca\u53c2\u6570\u4e0d\u5339\u914d\u4e2a\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'schema Foo[x: int]:\n    bar?: int = x\n\nf = lambda x {\n    x + 1\n}\n\nfoo = Foo(1,2,3)  # Error: "Foo" takes 1 positional argument but 3 were given\nf(1,2)  # Error: "f" takes 1 positional argument but 2 were given\n')),(0,l.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/issues/299"},"https://github.com/KusionStack/KCLVM/issues/299")),(0,l.kt)("h3",{id:"\u63d2\u503c\u4e09\u5f15\u53f7\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u9519\u8bef\u4fee\u590d"},"\u63d2\u503c\u4e09\u5f15\u53f7\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u9519\u8bef\u4fee\u590d"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684 KCL \u7248\u672c\u4e2d\uff0c\u5bf9\u5982\u4e0b\u4ee3\u7801\u8fdb\u884c\u683c\u5f0f\u5316\u4f1a\u9519\u8bef\u5c06\u643a\u5e26\u5b57\u7b26\u4e32\u63d2\u503c\u7684\u4e09\u5f15\u53f7\u683c\u5f0f\u5316\u4e3a\u5355\u5f15\u53f7\u5b57\u7b26\u4e32\u5e76\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\uff0c\u5728 0.4.4 \u7248\u672c\u4e2d\u6211\u4eec\u8fdb\u884c\u4e86\u4fee\u590d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# Before KCL v0.4.4, variable "bar" will be formatted as:\n#\n# foo = 1\n# bar = "\n# ${foo}\n# "\nfoo = 1\nbar = """\n${foo}\n"""\n')),(0,l.kt)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/issues/294"},"https://github.com/KusionStack/KCLVM/issues/294")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u9519\u8bef\u4fee\u590d"},"\u5176\u4ed6\u9519\u8bef\u4fee\u590d"),(0,l.kt)("p",null,"\u66f4\u591a\u9519\u8bef\u4fee\u590d\u8be6\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/milestone/2?closed=1"},"https://github.com/KusionStack/KCLVM/milestone/2?closed=1")),(0,l.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/"},"KCL \u7f51\u7ad9")," \u521d\u6b65\u5efa\u7acb\uff0c\u5e76\u5b8c\u5584 Kubernetes \u573a\u666f",(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/docs/user_docs/guides/working-with-k8s/"},"\u76f8\u5173\u6587\u6863"),"."),(0,l.kt)("p",null,"\u66f4\u591a\u7f51\u7ad9\u4fe1\u606f\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/"},"https://kcl-lang.github.io/")),(0,l.kt)("h2",{id:"\u793e\u533a\u52a8\u6001"},"\u793e\u533a\u52a8\u6001"),(0,l.kt)("p",null,"KCL \u793e\u533a\u65b0\u589e\u4e09\u540d\u5916\u90e8\u8d21\u732e\u8005 @my-vegetable-has-exploded, @possible-fqz, @orangebees, \u611f\u8c22\u4ed6\u4eec\u70ed\u60c5\u5e76\u79ef\u6781\u5730\u53c2\u4e0e\u8d21\u732e"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u8ba1\u5212"},"\u4e0b\u4e00\u6b65\u8ba1\u5212"),(0,l.kt)("p",null,"\u9884\u8ba1 2023 \u5e74 1 \u6708\u5e95\uff0c\u6211\u4eec\u5c06\u53d1\u5e03 KCL v0.4.5 \u7248\u672c\uff0c\u9884\u671f\u91cd\u70b9\u6f14\u8fdb\u5305\u62ec"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u7528\u6237\u754c\u9762\u6301\u7eed\u4f18\u5316\uff0c\u4f53\u9a8c\u6301\u7eed\u63d0\u5347\u548c\u7528\u6237\u75db\u70b9\u89e3\u51b3"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a\u573a\u666f\u548c\u751f\u6001\u5982 Kubernetes \u548c CI/CD Pipeline \u573a\u666f KCL \u652f\u6301\u548c\u6587\u6863\u66f4\u65b0"),(0,l.kt)("li",{parentName:"ul"},"KCL Windows \u7248\u672c\u652f\u6301"),(0,l.kt)("li",{parentName:"ul"},"KCL \u5305\u7ba1\u7406\u5de5\u5177 kpm \u53d1\u5e03"),(0,l.kt)("li",{parentName:"ul"},"KCL \u65b0\u7248 playground \u652f\u6301")),(0,l.kt)("p",null,"\u66f4\u591a\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/milestone/3"},"KCL v0.4.5 Milestone")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54"},"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54"),(0,l.kt)("p",null,"\u5e38\u89c1\u95ee\u9898\u53ca\u89e3\u7b54\u8be6\u89c1\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/docs/user_docs/support/"},"https://kcl-lang.github.io/docs/user_docs/support/")),(0,l.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/"},"KCL \u7f51\u7ad9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion \u7f51\u7ad9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"KCL \u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion \u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig \u4ed3\u5e93"))),(0,l.kt)("p",null,"\u6b22\u8fce\u52a0\u5165\u6211\u4eec\u7684\u793e\u533a\u8fdb\u884c\u4ea4\u6d41 \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community"},"https://github.com/KusionStack/community")))}u.isMDXComponent=!0}}]);