"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,f=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"\u81ea\u52a8\u5316",sidebar_position:6},o=void 0,l={unversionedId:"user_docs/guides/automation",id:"user_docs/guides/automation",title:"\u81ea\u52a8\u5316",description:"KCL provides many automation related capabilities, mainly including tools and multilingual APIs. Via packageidentifier : keyidentifier mode, KCL supports the indexing of any configured key value, thus completing the addition, deletion, modification and query of any key value. For example, the following figure shows that we can directly execute the following command to modify the image. The code diff before and after modification is also shown in the figure.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/automation.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/automation",permalink:"/zh-CN/docs/user_docs/guides/automation",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/user_docs/guides/automation.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1670511359,formattedLastUpdatedAt:"2022/12/8",sidebarPosition:6,frontMatter:{title:"\u81ea\u52a8\u5316",sidebar_position:6},sidebar:"user_docs",previous:{title:"\u6570\u636e\u96c6\u6210",permalink:"/zh-CN/docs/user_docs/guides/data-integration"},next:{title:"Kubernetes",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/"}},d={},s=[{value:"Examples",id:"examples",level:2},{value:"Override Update Sample",id:"override-update-sample",level:3},{value:"Override Delete Sample",id:"override-delete-sample",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KCL provides many automation related capabilities, mainly including tools and multilingual APIs. Via ",(0,i.kt)("inlineCode",{parentName:"p"},"package_identifier : key_identifier")," mode, KCL supports the indexing of any configured key value, thus completing the addition, deletion, modification and query of any key value. For example, the following figure shows that we can directly execute the following command to modify the image. The code diff before and after modification is also shown in the figure."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(2787).Z,width:"1828",height:"502"})),(0,i.kt)("p",null,"In addition, the automation capability of KCL can be realized and integrated into CI/CD."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(5912).Z,width:"890",height:"247"})),(0,i.kt)("p",null,"KCL allows us to directly modify the values in the configuration model through the KCL CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"-O|--overrides")," parameter. The parameter contains three parts e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"attribute")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"override_value"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl main.k -O override_spec\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"override_spec")," represents a unified representation of the configuration model fields and values that need to be modified")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'override_spec: [[pkgpath] ":"] identifier ("=" value | "-")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkgpath"),": Indicates the path of the package whose identifier needs to be modified, usually in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"a.b.c"),". For the main package, ",(0,i.kt)("inlineCode",{parentName:"li"},"pkgpath")," is expressed as ",(0,i.kt)("inlineCode",{parentName:"li"},"__main__"),", which can be omitted. If omitted, it means the main package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identifier"),": Indicates the identifier that needs to modify the configuration, usually in the form of ",(0,i.kt)("inlineCode",{parentName:"li"},"a.b.c"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value"),": Indicates the value of the configuration that needs to be modified, which can be any legal KCL expression, such as number/string literal value, list/dict/schema expression, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"="),": means to modify the value of identifier.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When the identifier exists, modify the value of the existing identifier to value."),(0,i.kt)("li",{parentName:"ul"},"When identifier does not exist, add the identifier attribute and set its value to value."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-"),": means to delete the identifier attribute.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When the identifier exists, delete it directly."),(0,i.kt)("li",{parentName:"ul"},"When the identifier does not exist, no modification is made to the configuration.")))),(0,i.kt)("p",null,"Note: When ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," appears multiple times, modify/delete all ",(0,i.kt)("inlineCode",{parentName:"p"},"identifier")," values"),(0,i.kt)("p",null,"Besides, we provide ",(0,i.kt)("inlineCode",{parentName:"p"},"OverrideFile")," API to achieve the same capabilities. For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/xlang-api/"},"KCL APIs"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"override-update-sample"},"Override Update Sample"),(0,i.kt)("p",null,"KCL code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Alice"\n    age = 18\n}\n')),(0,i.kt)("p",null,"The command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10\n')),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Bob\n  age: 10\n")),(0,i.kt)("p",null,"Besides, when we use KCL CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," argument, the KCL file will be modified to the following content at the same time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kcl main.k -O :person.name=\\"Bob\\" -O :person.age=10 -d\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n\nperson = Person {\n    name = "Bob"\n    age = 10\n}\n')),(0,i.kt)("p",null,"Another more complicated example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Person:\n    name: str\n    age: int\n    ids?: [int]\n\nperson = Person {\n    name = "Alice"\n    age = 10\n}\n')),(0,i.kt)("p",null,"The command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl main.k -O :person.ids=\\[1,2\\]\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"person:\n  name: Alice\n  age: 10\n  ids:\n  - 1\n  - 2\n")),(0,i.kt)("h3",{id:"override-delete-sample"},"Override Delete Sample"),(0,i.kt)("p",null,"KCL code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'schema Config:\n    x?: int = 1\n    y?: str = "s"\n    \nconfig = Config {\n    x = 2\n}\n')),(0,i.kt)("p",null,"The command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl main.k -O config.x-\n")),(0,i.kt)("p",null,"The output is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  x: 1\n  y: s\n")))}u.isMDXComponent=!0},2787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/14-kcl-image-update-da47dd269560008f15f287c5a4adb005.png"},5912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/15-kcl-automation-8c88e4bbdd38b5040457f647986a89c3.png"}}]);