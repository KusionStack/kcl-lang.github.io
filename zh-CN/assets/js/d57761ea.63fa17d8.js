"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),g=i,p=m["".concat(l,".").concat(g)]||m[g]||d[g]||o;return a?n.createElement(p,r(r({ref:t},u),{},{components:a})):n.createElement(p,r({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4749:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:1},r="Introduction",s={unversionedId:"user_docs/getting-started/intro",id:"version-0.4.4/user_docs/getting-started/intro",title:"Introduction",description:"What is KCL?",source:"@site/versioned_docs/version-0.4.4/user_docs/getting-started/intro.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/intro",permalink:"/zh-CN/docs/user_docs/getting-started/intro",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/versioned_docs/version-0.4.4/user_docs/getting-started/intro.md",tags:[],version:"0.4.4",lastUpdatedBy:"Peefy",lastUpdatedAt:1670845842,formattedLastUpdatedAt:"2022/12/12",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Get Started",permalink:"/zh-CN/docs/user_docs/getting-started/"},next:{title:"Installation",permalink:"/zh-CN/docs/user_docs/getting-started/install"}},l={},c=[{value:"What is KCL?",id:"what-is-kcl",level:2},{value:"What is Configuration?",id:"what-is-configuration",level:2},{value:"Why Develop KCL?",id:"why-develop-kcl",level:2},{value:"Why Use KCL?",id:"why-use-kcl",level:2},{value:"What is KCL for?",id:"what-is-kcl-for",level:2},{value:"How to Choose?",id:"how-to-choose",level:2},{value:"vs. YAML/JSON",id:"vs-yamljson",level:3},{value:"vs. Jsonnet/GCL",id:"vs-jsonnetgcl",level:3},{value:"vs. HCL",id:"vs-hcl",level:3},{value:"vs. CUE",id:"vs-cue",level:3},{value:"vs. Kustomize",id:"vs-kustomize",level:3},{value:"vs. Helm",id:"vs-helm",level:3},{value:"vs. CDK",id:"vs-cdk",level:3},{value:"vs. OPA/Rego",id:"vs-oparego",level:3},{value:"Next step",id:"next-step",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"what-is-kcl"},"What is KCL?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM"},"Kusion Configuration Language (KCL)")," is an open source constraint-based record and functional language. KCL improves the writing of a large number of complex configurations through mature programming language technology and practice, and is committed to building better modularity, scalability and stability around configuration, simpler logic writing, fast automation and good ecological extensionality."),(0,i.kt)("h2",{id:"what-is-configuration"},"What is Configuration?"),(0,i.kt)("p",null,"When we deploy software systems, we do not think they are fixed. Evolving business requirements, infrastructure requirements, and other factors mean that systems are constantly changing. When we need to change the system behavior quickly, and the change process needs expensive and lengthy reconstruction and redeployment process, business code change is often not enough. Configuration can provide us with a low overhead way to change system functions. For example, we often write JSON or YAML files as shown below for our system configuration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JSON configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "server": {\n        "addr": "127.0.0.1",\n        "listen": 4545\n    },\n    "database": {\n        "enabled": true,\n        "ports": [\n            8000,\n            8001,\n            8002\n        ],\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"YAML configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  addr: 127.0.0.1\n  listen: 4545\ndatabase:\n  enabled: true\n  ports:\n  - 8000\n  - 8001\n  - 8002\n")),(0,i.kt)("p",null,"We can choose to store the static configuration in JSON and YAML files as needed. In addition, the configuration can also be stored in a high-level language that allows more flexible configuration, which can be coded, rendered, and statically configured. KCL is such a configuration language. We can write KCL code to generate JSON/YAML and other configurations."),(0,i.kt)("h2",{id:"why-develop-kcl"},"Why Develop KCL?"),(0,i.kt)("p",null,"In addition to the general configuration, the features of the cloud-native configuration include a large quantity and wide coverage. For example, Kubernetes provides a declarative Application Programming Interface (API) mechanism and the openness allows users to make full use of its resource management capabilities; however, this also implies error-prone behaviors."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes configuration lacks user-side validation methods and cannot check the validity of the data."),(0,i.kt)("li",{parentName:"ul"},"Kubernetes exposes more than 500 models, more than 2,000 fields, and allows users to customize the model without considering the configuration reuse of multiple sites, multiple environments, and multiple deployment topologies. Fragmentation configuration brings many difficulties to the collaborative writing and automatic management of large-scale configuration.")),(0,i.kt)("p",null,"The cloud-native communities have made considerable attempts to advance their configuration technologies, which can be divided into three categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Low-level data format based tools for templating, patching, and validation, which use external tools to enhance the reuse and validation."),(0,i.kt)("li",{parentName:"ul"},"Domain-Specific Languages (DSLs) and Configuration Languages (CLs) to enhance language abilities."),(0,i.kt)("li",{parentName:"ul"},"General Purpose Language (GPL)-based solutions, using GPLs' Cloud-Development Kit (CDK) or framework to define the configuration.")),(0,i.kt)("p",null,"Previous efforts do not meet all these needs. Some tools verify configuration based on the Kubernetes API. Although it supports checking missing attributes, the validation is generally weak and limited to Open Application Programming Interface (OpenAPI).\nSome tools support custom validation rules, but the rule descriptions are cumbersome. In terms of configuration languages, focus on reducing boilerplates, and only a few focus on type checking, data validation, testing, etc."),(0,i.kt)("p",null,"Helm used parameterized template techniques to solve the problem of dynamic configuration. As the scale increases, parameterized templates tend to become complex and difficult to maintain; parameter substitution sites must be identified manually. However, it is tedious and error-prone, parameters will gradually erode the template, and any value in the template may gradually evolve into parameters. Compared with using the Kubernetes API directly, the readability of such a template combined with many parameters is often worse. Kustomize uses code patching to realize the reuse of the multi-environment configuration code. "),(0,i.kt)("h2",{id:"why-use-kcl"},"Why Use KCL?"),(0,i.kt)("p",null,"KCL is a modern high-level domain language, which is a compiled, static and strongly typed language. It provides developers with the ability to write configuration (config), modeling abstraction (schema), business logic (lambda), and environmental policies (rule) as the core elements through recording and functional language design."),(0,i.kt)("p",null,"KCL tries to provide runtime-independent programmability and does not natively provide system functions such as threads and IO, but supports functions for cloud-native operation scenarios, and tries to provide stable, secure, low-noise, low-side effect, easy-to-automate and easy-to-govern programming support for solving domain problems."),(0,i.kt)("p",null,"Unlike client runtime written in GPL, KCL programs usually run and generate low-level data and are integrated into the client-side runtime access tools, which can provide a left-shifted stability guarantee by testing and validation of KCL code separately before pushing to runtime. KCL code can also be compiled into a wasm module, which could be integrated into the server runtime after full testing."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:a(2440).Z,width:"597",height:"576"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Easy-to-use"),": Originated from high-level languages \u200b\u200bsuch as Python and Golang, incorporating functional language features with low side effects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Well-designed"),": Independent Spec-driven syntax, semantics, runtime and system modules design."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quick modeling"),": ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour#schema"},"Schema"),"-centric configuration types and modular abstraction."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rich capabilities"),": Configuration with type, logic and policy based on ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/codelab/simple"},"Config"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#schema"},"Schema"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#function"},"Lambda"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#rule"},"Rule"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stability"),": Configuration stability built on ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#type-system"},"static type system"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#validation"},"constraints"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour#rule"},"rules"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scalability"),": High scalability through ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#-operators-1"},"automatic merge mechanism")," of isolated config blocks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fast automation"),": Gradient automation scheme of ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/lang/tour/#kcl-cli-variable-override"},"CRUD APIs"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/xlang-api/overview"},"multilingual SDKs"),", ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/reference/plugin/overview"},"language plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High performance"),": High compile time and runtime performance using Rust & C and ",(0,i.kt)("a",{parentName:"li",href:"https://llvm.org/"},"LLVM"),", and support compilation to native code and ",(0,i.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WASM"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"API affinity"),": Native support API ecological specifications such as ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/tools/cli/openapi/"},"OpenAPI"),", Kubernetes CRD, Kubernetes YAML spec."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Development friendly"),": Friendly development experiences with rich ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/tools/cli/kcl/overview"},"language tools")," (Format, Lint, Test, Vet, Doc, etc.) and ",(0,i.kt)("a",{parentName:"li",href:"https://kcl-lang.github.io/docs/tools/Ide/"},"IDE plugins"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Safety & maintainable"),": Domain-oriented, no system-level functions such as native threads and IO, low noise and security risk, easy maintenance and governance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Production-ready"),": Widely used in production practice of platform engineering and automation at Ant Group.")),(0,i.kt)("p",null,"For more language design and capabilities, see ",(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.github.io/docs/reference/lang/tour"},"KCL Documents"),". Although KCL is not a general language, it has corresponding application scenarios. Developers can write ",(0,i.kt)("strong",{parentName:"p"},"config"),", ",(0,i.kt)("strong",{parentName:"p"},"schema"),", ",(0,i.kt)("strong",{parentName:"p"},"function")," and ",(0,i.kt)("strong",{parentName:"p"},"rule")," through KCL, where config is used to define data, schema is used to describe the model definition of data, rule is used to validate data, and schema and rule can also be combined to use models and constraints that fully describe data, In addition, we can also use the lambda pure function in KCL to organize data code, encapsulate common code, and call it directly when needed."),(0,i.kt)("h2",{id:"what-is-kcl-for"},"What is KCL for?"),(0,i.kt)("p",null,"You can use KCL to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generate low-level static configuration data like JSON, YAML, etc."),(0,i.kt)("li",{parentName:"ul"},"Reduce boilerplate in configuration data with the schema modeling."),(0,i.kt)("li",{parentName:"ul"},"Define schemas with rule constraints for configuration data and validate them automatically."),(0,i.kt)("li",{parentName:"ul"},"Organize, simplify, unify and manage large configurations without side effects."),(0,i.kt)("li",{parentName:"ul"},"Manage large configurations scalably with isolated configuration blocks."),(0,i.kt)("li",{parentName:"ul"},"Used as a platform engineering language to deliver modern app with ",(0,i.kt)("a",{parentName:"li",href:"https://kusionstack.io/"},"KusionStack"),".")),(0,i.kt)("p",null,"Through KCL compiler, language tools, IDE, and multilingual APIs, you can use KCL in the following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Configuration & Automation"),": Abstract and manage configurations of different scales including small-scale configuration (application, network, micro service, database, monitoring, CI/CD pipeline and etc.), large-scale cloud native kubernetes configuration and automation. In addition, through ",(0,i.kt)("a",{parentName:"li",href:"/docs/tools/cli/openapi/"},"KCL OpenAPI tools")," and KCL's package management capabilities, we can fully abstract and reuse existing models."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security & Compliance"),": Utilize the ability of KCL dynamic parameters to define, update, share, and execute policies using code. Manage policies by leveraging KCL code based automation rather than relying on manual processes, which allow teams to move faster and reduce the likelihood of errors due to human error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Intent Description"),": KCL can be used to describe tools, scripts and workflows, and it accesses a customized engine to consume and execute intentions.")),(0,i.kt)("h2",{id:"how-to-choose"},"How to Choose?"),(0,i.kt)("p",null,"The simple answer:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"YAML/JSON/Kustomize/Helm are recommended if you need to write structured key-value pairs, or use Kubernetes' native tools."),(0,i.kt)("li",{parentName:"ul"},"HCL is recommended if you want to use programming language convenience to remove boilerplate with good human readability, or if you are already a Terraform user."),(0,i.kt)("li",{parentName:"ul"},"CUE is recommended if you want to use type system to improve stability and maintain scalable configurations."),(0,i.kt)("li",{parentName:"ul"},"KCL is recommended if you want types and modeling like a modern language, scalable configurations, in-house pure functions and rules, and production-ready performance and automation.")),(0,i.kt)("h3",{id:"vs-yamljson"},"vs. YAML/JSON"),(0,i.kt)("p",null,"YAML/JSON configurations are suitable for small-scale configuration scenarios. For large-scale cloud native configuration scenarios that need frequent modifications, they are more suitable for KCL. The main difference involved is the difference between configuration data abstraction and deployment:"),(0,i.kt)("p",null,"The advantages of using KCL for configuration are: for static data, the advantage of abstracting one layer means that the overall system has deployment flexibility. Different configuration environments, tenants, and runtime may have different requirements for static data, and even different organizations may have different specifications and product requirements. KCL can be used to expose the most needed and frequently modified configurations to users."),(0,i.kt)("h3",{id:"vs-jsonnetgcl"},"vs. Jsonnet/GCL"),(0,i.kt)("p",null,"GCL is a declarative configuration programming language implemented in Python provides the necessary language capabilities to support template abstraction. However, the compiler itself is written in Python, and the language itself is interpreted and executed. For large template instances (such as kubernetes model), the performance is poor."),(0,i.kt)("p",null,"Jsonnet is a data template language implemented in C++, suitable for application and tool developers, can generate configuration data and organize, simplify and manage large configurations without side effects."),(0,i.kt)("p",null,"Jsonnet and GCL are great at reducing boilerplate. They can both uses code to generate configuration, just like engineers only need to write advanced GPL code, rather than manually writing error-prone and difficult-to-understand server binary code. Jsonnet reduces some of the complexities of GCL, but largely falls into the same category. The both have many runtime errors, insufficient type check and constraint capacity."),(0,i.kt)("h3",{id:"vs-hcl"},"vs. HCL"),(0,i.kt)("p",null,"HCL is a Go implementation structured configuration language. The native syntax of HCL is inspired by libucl and nginx configurations. It is used to create a structured configuration language that is friendly to humans and machines, mainly for devops tools, server configurations, and resource configurations as a ",(0,i.kt)("a",{parentName:"p",href:"https://www.terraform.io/language"},"Terraform language"),"."),(0,i.kt)("p",null,"HCL has some striking similarities with GCL. It does introduce a poor man\u2019s version of inheritance: file overlays. Fields may be defined in multiple files that get overwritten in a certain order of the file names. Although not nearly as complex as GCL, it does have some of the same issues. The mode is fixed and the capability is limited."),(0,i.kt)("p",null,"The user interface of HCL is not directly perceived through the Terraform provider Schema definition. In addition, the user interface is cumbersome when writing complex object and required/optional field definitions. The dynamic parameters are constrained by the condition field of the variable. The constraints of the resource itself need to be defined by provider schema or combined with Sentinel/Rego and other policy languages. The integrity of the language itself cannot be self closed, and its implementation methods are not unified."),(0,i.kt)("h3",{id:"vs-cue"},"vs. CUE"),(0,i.kt)("p",null,"CUE can be used as modeling through struct, no inheritance and other features, can achieve high abstraction when there is no conflict between model definitions. Because CUE performs all constraint checks at runtime, there may be performance bottlenecks in large-scale modeling scenarios. CUE combines types and values into one concept. It simplifies the writing of constraints through various syntax. For example, generic types and enumerations are not required. Summing types and null value merging are the same thing. CUE supports configuration merging but it is completely idempotent. It may not meet the requirements of complex multi-tenant and multi- environment configuration scenarios. For complex loop and constraint scenarios, it is complex to write, and it is cumbersome to write scenarios that require accurate configuration modifications."),(0,i.kt)("p",null,"For KCL, modeling is conducted through KCL schema, and high model abstraction can be achieved through language level engineering and some object-oriented features (such as single inheritance). KCL is a statically compiled language with low overhead for large-scale modeling scenarios. KCL provides a richer check declarative constraint syntax, which makes it easier to write. For some configuration field combination constraints, it is simpler to write (compared with CUE, KCL provides more if guard combination constraints, all/any/map/filter and other collection constraint writing methods, which makes it easier to write)."),(0,i.kt)("h3",{id:"vs-kustomize"},"vs. Kustomize"),(0,i.kt)("p",null,"The core capability of Kustomize is its file level overlay capability. However, there is a problem of multiple overlay chains, because finding the statement of a specific attribute value does not guarantee that it is the final value, because another specific value that appears elsewhere can override it. For complex scenarios, retrieval of the inheritance chain of Kustomize files is often not as convenient as retrieval of the inheritance chain of KCL code, The specified configuration file overwrite order needs to be carefully considered. In addition, Kustomize cannot solve the problems of YAML configuration writing, constraint verification, model abstraction and development, and is more suitable for simple configuration scenarios."),(0,i.kt)("p",null,"In KCL, the configuration merge operation can be fine-grained to each configuration attribute in the code, and the merge strategy can be flexibly set, not limited to the overall resource, and the dependency between configurations can be statically analyzed through the import statement of KCL."),(0,i.kt)("h3",{id:"vs-helm"},"vs. Helm"),(0,i.kt)("p",null,"The concept of Helm originates from the package management mechanism of the operating system. It is a package management tool based on templated YAML files and supports the execution and management of resources in the package."),(0,i.kt)("p",null,"KCL naturally provides a superset of Helm capabilities, so that you can use KCL directly as an alternative. For users who have adopted Helm, the stack compilation results in KCL can be packaged and used in Helm format."),(0,i.kt)("h3",{id:"vs-cdk"},"vs. CDK"),(0,i.kt)("p",null,"Writing in CDK's high-level language can be well integrated into the application project, which is actually part of the client runtime. For KCL, external configurations and policies written by KCL are decoupled from the client runtime."),(0,i.kt)("p",null,"The general language is usually overkill, that is, it goes far beyond the problems that need to be solved. There are various security problems in the general language, such as the ability boundary problem (starting local threads, accessing IO, network, code infinitive looping and other security risks). For example, in the music field, there are special notes to express music, which is convenient for learning and communication, It can not be expressed clearly in general language."),(0,i.kt)("p",null,"In addition, because of its various styles of the general language, which has the cost of unified maintenance, management and automation. The general language is usually used to write the client runtime, which is a continuation of the server runtime. It is not suitable for writing configurations that are independent of the runtime, and it is compiled into binary and started from the process finally. Besides, the stability and scalability are not easy to control. However, the configuration language often be used to write data, which is combined with simple logic, and it describes the expected final result, which is then consumed by the compiler or engine."),(0,i.kt)("h3",{id:"vs-oparego"},"vs. OPA/Rego"),(0,i.kt)("p",null,"Although not designed as a data definition language, Rego, the language used for Open Policy Agent (OPA), also solves the issue of being able to add constraints from multiple sources."),(0,i.kt)("p",null,"Rego has its roots in logic programming. It is based on Datalog, a restricted form of Prolog, whereas KCL is based on static type structure. Typed-feature structures were designed to deal with the shortcomings of Prolog for applications in encoding human languages. Using a Datalog variant for what is essentially a constraint validation task is somewhat curious. Datalog makes an excellent query language. But for constraint enforcement, it is a bit cumbersome as one effectively first needs to query values to which to apply the constraints."),(0,i.kt)("p",null,"Besides, KCL\u2019s approach is more amenable to finding normalized and simplified representations of constraints, which makes it more suitable for creating OpenAPI for generated from OpenAPI."),(0,i.kt)("h2",{id:"next-step"},"Next step"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Install KCL"))))}d.isMDXComponent=!0},2440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kcl-79d6584aff8f7dcf814ba187f3d276ef.png"}}]);