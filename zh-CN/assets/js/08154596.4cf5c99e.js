"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||l[m]||i;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const i={},s="From Kubernetes",a={unversionedId:"user_docs/guides/working-with-k8s/from_kubernetes",id:"user_docs/guides/working-with-k8s/from_kubernetes",title:"From Kubernetes",description:"1. Kubernetes OpenAPI Spec",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/from_kubernetes.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/from_kubernetes",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/from_kubernetes",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/user_docs/guides/working-with-k8s/from_kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1669214123,formattedLastUpdatedAt:"2022/11/23",frontMatter:{},sidebar:"user_docs",previous:{title:"Kubernetes",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/"},next:{title:"KCL - \u8ba9 Kubernetes \u8d44\u6e90\u6e05\u5355\u7ba1\u7406\u66f4\u7b80\u5355",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/generate_k8s_manifests"}},p={},d=[{value:"1. Kubernetes OpenAPI Spec",id:"1-kubernetes-openapi-spec",level:2},{value:"2. KCL OpenAPI Support",id:"2-kcl-openapi-support",level:2},{value:"3. Migrate From Kubernetes To KCL",id:"3-migrate-from-kubernetes-to-kcl",level:2},{value:"3.1 Write Config Based On The Models",id:"31-write-config-based-on-the-models",level:3},{value:"3.2 Build Your Custom Frontend Models",id:"32-build-your-custom-frontend-models",level:3},{value:"3.2.1 Convert Kubernetes Deployment Into KCL Schema",id:"321-convert-kubernetes-deployment-into-kcl-schema",level:4},{value:"3.2.2 Design Custom Frontend Models",id:"322-design-custom-frontend-models",level:4},{value:"3.2.3 Migrate The Configuration Data",id:"323-migrate-the-configuration-data",level:4},{value:"4. Migrate From Kubernetes CRD",id:"4-migrate-from-kubernetes-crd",level:2}],u={toc:d};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"from-kubernetes"},"From Kubernetes"),(0,r.kt)("h2",{id:"1-kubernetes-openapi-spec"},"1. Kubernetes OpenAPI Spec"),(0,r.kt)("p",null,"Starting from Kubernetes 1.4, the alpha support for the OpenAPI specification (known as Swagger 2.0 before it was donated to the OpenAPI Initiative) was introduced, and the API descriptions follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md"},"OpenAPI Spec 2.0"),". And since Kubernetes 1.5, Kubernetes supports ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-openapi"},"directly extracting models from source code and then generating the OpenAPI spec file")," to automatically keep the specifications and documents up to date with the operation and models."),(0,r.kt)("p",null,"In addition, Kubernetes CRD uses ","[OpenAPI V3.0]"," validation](",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation"},"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation"),") to describe a custom schema (in addition to the built-in attributes apiVersion, Kind, and metadata), that APIServer uses to validate the CR during the resource creation and update phases."),(0,r.kt)("h2",{id:"2-kcl-openapi-support"},"2. KCL OpenAPI Support"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-openapi")," tool supports extracting and generating KCL schemas from Kubernetes OpenAPI/CRD. the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/spec"},"KCL OpenAPI Spec")," defines the mapping between the OpenAPI specification and the KCL language features. For a quick start with the tool, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/cli/openapi/"},"KCL OpenAPI tool")),(0,r.kt)("h2",{id:"3-migrate-from-kubernetes-to-kcl"},"3. Migrate From Kubernetes To KCL"),(0,r.kt)("p",null,"The entirely OpenAPI definition of the Kubernetes built-in model is stored in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/api/openapi-spec/swagger.json"},"Kubernetes OpenAPI-Spec File"),". Taking this file as input, the KCL OpenAPI tool can generate all model schemas of the corresponding version. In the following sections, we will introduce how to migrate from Kubernetes to KCL with a deployment release scenario as an example. Assume that your project is using ","[Kubernetes Deployment]"," (",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"),") to define Deployment configuration, Migrating to KCL requires only the following steps:"),(0,r.kt)("h3",{id:"31-write-config-based-on-the-models"},"3.1 Write Config Based On The Models"),(0,r.kt)("p",null,"We provide an out-of-the-box ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion_models")," package for you to quickly start. It contains a well-designed frontend model called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},(0,r.kt)("inlineCode",{parentName:"a"},"Server schema")),". You can declare their configurations by initializing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Server schema"),". For the description and usage of the schema and its attributes, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/model/kusion_models/kube/frontend/doc_server"},"Server schema documentation"),"."),(0,r.kt)("h3",{id:"32-build-your-custom-frontend-models"},"3.2 Build Your Custom Frontend Models"),(0,r.kt)("p",null,"The existing KCL Models may not meet your specific business requirements, then you can also design your custom frontend model package. In Konfig's ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion_kubernetes")," directory, there's a copy of the generated Kubernetes 1.22 models and you can design your custom models based on it. And you can also develop your custom scripts to migrate your configuration data as what ",(0,r.kt)("inlineCode",{parentName:"p"},"kube2kcl")," tool does. "),(0,r.kt)("h4",{id:"321-convert-kubernetes-deployment-into-kcl-schema"},"3.2.1 Convert Kubernetes Deployment Into KCL Schema"),(0,r.kt)("p",null,"We already have a copy of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/deployment.k"},"generated Kubernetes 1.22 models")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"base/pkg/kusion_kubernetes")," directory in the Konfig repository. You can skip this step and use the existing models, or you can generate other versions of that if needed."),(0,r.kt)("p",null,"Now let's generate a v1.23 version of Kubernetes models. From ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.23/api/openapi-spec/swagger.json"},"Kubernetes v1.23 OpenAPI Spec"),", we can find the definition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/v1.Deployment")," model, and here is a partial excerpt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "definitions": {\n        "io.k8s.api.apps.v1.Deployment": {\n            "description": "Deployment enables declarative updates for Pods and ReplicaSets.",\n            "properties": {\n                "apiVersion": {\n                    "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",\n                    "type": "string"\n                },\n                "kind": {\n                    "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",\n                    "type": "string"\n                },\n                "metadata": {\n                    "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta",\n                    "description": "Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata"\n                },\n                "spec": {\n                    "$ref": "#/definitions/io.k8s.api.apps.v1.DeploymentSpec",\n                    "description": "Specification of the desired behavior of the Deployment."\n                },\n                "status": {\n                    "$ref": "#/definitions/io.k8s.api.apps.v1.DeploymentStatus",\n                    "description": "Most recently observed status of the Deployment."\n                }\n            },\n            "type": "object",\n            "x-kubernetes-group-version-kind": [\n                {\n                    "group": "apps",\n                    "kind": "Deployment",\n                    "version": "v1"\n                }\n            ]\n        }\n    },\n    "info": {\n        "title": "Kubernetes",\n        "version": "unversioned"\n    },\n    "paths": {},\n    "swagger": "2.0"\n}\n')),(0,r.kt)("p",null,"You can save the above spec as ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.json")," and run ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-openapi generate model -f deployment.json"),", and the KCL Schemas will be generated and output to your current workspace. Other Kubernetes models can also be saved in that spec file and can be generated similarly."),(0,r.kt)("h4",{id:"322-design-custom-frontend-models"},"3.2.2 Design Custom Frontend Models"),(0,r.kt)("p",null,"Since the Kubernetes built-in models are atomistic and kind of complex to beginners, we recommend taking the native model of Kubernetes as the backend output model and designing a batch of frontend models which could become a more abstract, friendlier and simpler interface to the user. You can refer to the design pattern in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},(0,r.kt)("inlineCode",{parentName:"a"},"Server Schema in the Konfig repo")),"."),(0,r.kt)("h4",{id:"323-migrate-the-configuration-data"},"3.2.3 Migrate The Configuration Data"),(0,r.kt)("p",null,"You can develop your custom scripts to migrate your configuration data automatically. KCL will later provide writing scaffolding and writing guidelines for this script."),(0,r.kt)("h2",{id:"4-migrate-from-kubernetes-crd"},"4. Migrate From Kubernetes CRD"),(0,r.kt)("p",null,"If you developed CRDs, you can generate the KCL version of the CRD schemas and declare CRs based on that."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generate KCL Schema from CRD"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"kcl-openapi generate model --crd --skip-validation -f <your_crd.yaml>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Define CR based on CRDs in KCL"),(0,r.kt)("p",{parentName:"li"},"  You can initialize the CRD schema to define a CR, or further, you can use the generated schema as a backend model and design a frontend interface for users to initialize. The practice is similar to what ",(0,r.kt)("inlineCode",{parentName:"p"},"KCL Models")," does on Kubernetes built-in models."))))}l.isMDXComponent=!0}}]);