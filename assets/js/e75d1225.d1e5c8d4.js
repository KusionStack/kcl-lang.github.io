"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const i={slug:"2022-kcl-0.4.4-release-blog",title:"KCL v0.4.4 Release Blog - Customize manifest output, Python SDK, size and error optimization",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","KusionStack","Kusion"]},r=void 0,l={permalink:"/blog/2022-kcl-0.4.4-release-blog",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/blog/2022-12-06-kcl-0.4.4-release-blog/index.md",source:"@site/blog/2022-12-06-kcl-0.4.4-release-blog/index.md",title:"KCL v0.4.4 Release Blog - Customize manifest output, Python SDK, size and error optimization",description:"The KCL team is pleased to announce that v0.4.4 is now available! This release mainly adds the ability to customize YAML manifests output for KCL. Users can customize the style of YAML output by writing code and calling system functions without understanding the complex schema settings semantics. In addition, this release provides the latest KCL Python SDK, which can be used for Python users to directly integrate KCL. At the same time, we have greatly reduced the size of the KCL installation package. The average installation package size has been reduced to one-fifth of that of the previous version. It also includes a number of compiler error message optimization and bug fix. You can visit the KCL release page to get more detailed release information and KCL binary download link.",date:"2022-12-06T00:00:00.000Z",formattedDate:"December 6, 2022",tags:[{label:"Release Blog",permalink:"/blog/tags/release-blog"},{label:"KCL",permalink:"/blog/tags/kcl"},{label:"KusionStack",permalink:"/blog/tags/kusion-stack"},{label:"Kusion",permalink:"/blog/tags/kusion"}],readingTime:6.145,truncated:!1,authors:[{name:"KCL Team",title:"KCL Team"}],frontMatter:{slug:"2022-kcl-0.4.4-release-blog",title:"KCL v0.4.4 Release Blog - Customize manifest output, Python SDK, size and error optimization",authors:{name:"KCL Team",title:"KCL Team"},tags:["Release Blog","KCL","KusionStack","Kusion"]},nextItem:{title:"KusionStack Open Day",permalink:"/blog/2022-open-day"}},s={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",level:2},{value:"Features",id:"features",level:2},{value:"Customize YAML Manifest Output",id:"customize-yaml-manifest-output",level:3},{value:"Python SDK",id:"python-sdk",level:3},{value:"Command Line Tool",id:"command-line-tool",level:4},{value:"API",id:"api",level:4},{value:"Installation Size Optimization",id:"installation-size-optimization",level:2},{value:"Bugfix",id:"bugfix",level:2},{value:"Function Call Error Information Optimization",id:"function-call-error-information-optimization",level:3},{value:"Formatting Error of Interpolated Three Quote String",id:"formatting-error-of-interpolated-three-quote-string",level:3},{value:"Other Issues",id:"other-issues",level:3},{value:"Documents",id:"documents",level:2},{value:"Community",id:"community",level:2},{value:"Next",id:"next",level:2},{value:"FAQ",id:"faq",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The KCL team is pleased to announce that v0.4.4 is now available! This release mainly adds the ability to customize YAML manifests output for KCL. Users can customize the style of YAML output by writing code and calling system functions without understanding the complex schema settings semantics. In addition, this release provides the latest ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kclvm-py"},"KCL Python SDK"),", which can be used for Python users to directly integrate KCL. At the same time, we have greatly reduced the size of the KCL installation package. The average installation package size has been reduced to one-fifth of that of the previous version. It also includes a number of compiler error message optimization and bug fix. You can visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/releases/tag/v0.4.4-alpha.2"},"KCL release page")," to get more detailed release information and KCL binary download link."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"KCL is an open-source constraint-based record and functional language. KCL improves the writing of a large number of complex configurations through mature programming language technology and practice, and is committed to building better modularity, scalability and stability around configuration, simpler logic writing, fast automation and good ecological extensionality."),(0,o.kt)("p",null,"This blog will introduce the recent developments of KCL community to readers."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h3",{id:"customize-yaml-manifest-output"},"Customize YAML Manifest Output"),(0,o.kt)("p",null,"In previous KCL versions, the style of YAML output is hard coded in the KCL compiler, and users can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"__settings__")," meta attribute with different values to determine the YAML output style, which brings high complexity. Therefore, in version 0.4.4, we provide a system module function for developers to easily customize the YAML output style. The signature of this function is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'manifests.yaml_stream(values: [any], opts: {str:} = {\n    sort_keys = False\n    ignore_private = True\n    ignore_none = False\n    sep = "---"\n})\n')),(0,o.kt)("p",null,"This function is used to serialize the KCL object list into YAML output with the ",(0,o.kt)("inlineCode",{parentName:"p"},"---")," separator. It has two parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values")," - A list of KCL objects"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"opts")," - The YAML serialization options",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sort_keys"),": Whether to sort the serialized results in the dictionary order of attribute names (the default is ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignore_private"),": Whether to ignore the attribute output whose name starts with the character ",(0,o.kt)("inlineCode",{parentName:"li"},"_")," (the default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ignore_none"),": Whether to ignore the attribute with the value of' None '(the default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sep"),": Set the separator between multiple YAML documents (the default value is ",(0,o.kt)("inlineCode",{parentName:"li"},'"---"'),").")))),(0,o.kt)("p",null,"Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import manifests\n\nschema Deployment:\n    apiVersion: str = "v1"\n    kind: str = "Deployment"\n    metadata: {str:} = {\n        name = "deploy"\n    }\n    spec: {str:} = {\n        replica = 2\n    }\n\nschema Service:\n    apiVersion: str = "v1"\n    kind: str = "Service"\n    metadata: {str:} = {\n         name = "svc"\n    }\n    spec: {str:} = {}    \n        \ndeployments = [Deployment {}, Deployment {}]\nservices = [Service {}, Service {}]\n\nmanifests.yaml_stream(deployments + services)\n')),(0,o.kt)("p",null,"First, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," keyword to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests")," module and define two deployment resources and two service resources. When we want to output these four resources in YAML stream format with ",(0,o.kt)("inlineCode",{parentName:"p"},"---")," as the separator, we can put them into a KCL list and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifests.yaml_stream")," function pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," parameter (if there is no special requirement, the ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," parameter can generally use the default value). Finally, the YAML output is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Deployment\nmetadata:\n  name: deploy\nspec:\n  replica: 2\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: svc\n")),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/issues/94"},"https://github.com/KusionStack/KCLVM/issues/94"),"."),(0,o.kt)("h3",{id:"python-sdk"},"Python SDK"),(0,o.kt)("p",null,"In addition to the existing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kclvm-go"},"KCL Go SDK"),", this release also adds the KCL Python SDK. Using the Python SDK requires that you have a local Python version higher than 3.7.3 and a local pip package management tool. You can use the following command to install and obtain helpful information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"$ python3 -m pip install kclvm && python3 -m kclvm --help\n")),(0,o.kt)("h4",{id:"command-line-tool"},"Command Line Tool"),(0,o.kt)("p",null,"Prepare a KCL file named ",(0,o.kt)("inlineCode",{parentName:"p"},"main.k")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'name = "kcl"\nage = 1\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person {}\nx1 = Person {\n    age = 101\n}\n')),(0,o.kt)("p",null,"Execute the following command and get the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"$ python3 -m kclvm hello.k\nname: kcl\nage: 1\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,o.kt)("h4",{id:"api"},"API"),(0,o.kt)("p",null,"In addition, we can also execute KCL files through Python code."),(0,o.kt)("p",null,"Prepare a KCL file named ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import kclvm.program.exec as kclvm_exec\nimport kclvm.vm.planner as planner\n\nprint(planner.plan(kclvm_exec.Run(["hello.k"]).filter_by_path_selector()))\n')),(0,o.kt)("p",null,"Execute the following command and get the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"$ python3 main.py\nname: kcl\nage: 1\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,o.kt)("p",null,"You can see that the same output can be obtained through command line tools and APIs."),(0,o.kt)("p",null,"At present, the KCL Python SDK is still in the early preview version. The KCL team will continue to update and provide more functions in the future. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kclvm-py"},"https://github.com/KusionStack/kclvm-py")),(0,o.kt)("h2",{id:"installation-size-optimization"},"Installation Size Optimization"),(0,o.kt)("p",null,"In the new KCL version, we split the built-in Python 3 of KCL, reducing the average size of the KCL binary compression package from 200M to 35M. Users can download and use KCL faster, and the Python plugin becomes an option. If you want to enable the KCL Python plugin, an additional requirement is that you have Python and pip package management tools that are higher than 3.7.3. For more details, please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kcl-plugin"},"https://github.com/KusionStack/kcl-plugin")),(0,o.kt)("h2",{id:"bugfix"},"Bugfix"),(0,o.kt)("h3",{id:"function-call-error-information-optimization"},"Function Call Error Information Optimization"),(0,o.kt)("p",null,"In version 0.4.4, KCL optimizes the output of error messages when the number of function arguments does not match, and supports the display of function names and the number of argument mismatches"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'schema Foo[x: int]:\n    bar?: int = x\n\nf = lambda x {\n    x + 1\n}\n\nfoo = Foo(1,2,3)  # Error: "Foo" takes 1 positional argument but 3 were given\nf(1,2)  # Error: "f" takes 1 positional argument but 2 were given\n')),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/issues/299"},"https://github.com/KusionStack/KCLVM/issues/299")),(0,o.kt)("h3",{id:"formatting-error-of-interpolated-three-quote-string"},"Formatting Error of Interpolated Three Quote String"),(0,o.kt)("p",null,"In previous KCL versions, formatting the following code would incorrectly convert the three quotation marks with string interpolation into single quotation marks and cause compilation errors. In version 0.4.4, we fixed the issue."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Before KCL v0.4.4, variable "bar" will be formatted as:\n#\n# foo = 1\n# bar = "\n# ${foo}\n# "\nfoo = 1\nbar = """\n${foo}\n"""\n')),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/issues/294"},"https://github.com/KusionStack/KCLVM/issues/294")),(0,o.kt)("h3",{id:"other-issues"},"Other Issues"),(0,o.kt)("p",null,"For more issues, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/milestone/2?closed=1"},"https://github.com/KusionStack/KCLVM/milestone/2?closed=1")),(0,o.kt)("h2",{id:"documents"},"Documents"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/"},"KCL website")," preliminary establishment and improvement of Kubernetes scenarios ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/docs/user_docs/guides/working-with-k8s/"},"related documents"),"."),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/"},"https://kcl-lang.github.io/")),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"Three external contributors @my-vegetable-has-exploded, @possible-fqz, @orangebees have participated in the KCL community, thank them for their enthusiasm and active participation in contributing."),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("p",null,"It is estimated that by the end of January 2023, we will release KCL v0.4.5, and the key evolution is expected to include"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Continuous optimization of the KCL user interface, improvement of experience and user pain points."),(0,o.kt)("li",{parentName:"ul"},"More scenarios and ecology integration, such as Kubernetes and CI/CD Pipeline scenarios."),(0,o.kt)("li",{parentName:"ul"},"KCL Windows version support."),(0,o.kt)("li",{parentName:"ul"},"KCL package management tool ",(0,o.kt)("inlineCode",{parentName:"li"},"kpm")," release."),(0,o.kt)("li",{parentName:"ul"},"The new version of KCL playground.")),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/milestone/3"},"KCL v0.4.5 Milestone"),"."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/docs/user_docs/support/"},"https://kcl-lang.github.io/docs/user_docs/support/"),"."),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/"},"KCL Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"Kusion Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"KCL Repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion Repo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig Repo"))),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community"},"community")," for ways to join us. \ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"))}m.isMDXComponent=!0}}]);