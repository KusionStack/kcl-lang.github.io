"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="CRD to KCL",s={unversionedId:"tools/cli/openapi/crd-to-kcl",id:"tools/cli/openapi/crd-to-kcl",title:"CRD to KCL",description:"Command",source:"@site/docs/tools/cli/openapi/crd-to-kcl.md",sourceDirName:"tools/cli/openapi",slug:"/tools/cli/openapi/crd-to-kcl",permalink:"/docs/tools/cli/openapi/crd-to-kcl",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/tools/cli/openapi/crd-to-kcl.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1670637401,formattedLastUpdatedAt:"12/10/2022",frontMatter:{},sidebar:"tools",previous:{title:"Quick Start",permalink:"/docs/tools/cli/openapi/quick-start"},next:{title:"OpenAPI to KCL",permalink:"/docs/tools/cli/openapi/openapi-to-kcl"}},l={},p=[{value:"Example",id:"example",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crd-to-kcl"},"CRD to KCL"),(0,a.kt)("p",null,"Command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model --crd -f ${your_CRD.yaml} -t ${the_kcl_files_output_dir} --skip-validation\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"test_crontab_CRD.yaml:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Deprecated in v1.16 in favor of apiextensions.k8s.io/v1\napiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\nmetadata:\n  # name must match the spec fields below, and be in the form: <plural>.<group>\n  name: crontabs.stable.example.com\nspec:\n  # group name to use for REST API: /apis/<group>/<version>\n  group: stable.example.com\n  # list of versions supported by this CustomResourceDefinition\n  versions:\n    - name: v1\n      # Each version can be enabled/disabled by Served flag.\n      served: true\n      # One and only one version must be marked as the storage version.\n      storage: true\n  # either Namespaced or Cluster\n  scope: Namespaced\n  names:\n    # plural name to be used in the URL: /apis/<group>/<version>/<plural>\n    plural: crontabs\n    # singular name to be used as an alias on the CLI and for display\n    singular: crontab\n    # kind is normally the CamelCased singular type. Your resource manifests use this.\n    kind: CronTab\n    # shortNames allow shorter string to match your resource on the CLI\n    shortNames:\n      - ct\n  preserveUnknownFields: false\n  validation:\n    openAPIV3Schema:\n      type: object\n      properties:\n        spec:\n          type: object\n          properties:\n            cronSpec:\n              type: string\n            image:\n              type: string\n            replicas:\n              type: integer\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi generate model -f test_crontab_CRD.yaml -t ~/ --skip-validation --crd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Output ~/models/stable_example_com_v1_cron_tab.k")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'"""\nThis file was generated by the KCL auto-gen tool. DO NOT EDIT.\nEditing this file might prove futile when you re-run the KCL auto-gen generate command.\n"""\nimport kusion_kubernetes.apimachinery.apis\n\n\nschema CronTab:\n    """stable example com v1 cron tab\n\n    Attributes\n    ----------\n    __settings__ : {str:str}, default is {"output_type": "STANDALONE"}, optional\n         existence of this attribute indicates that the model will be treated standalone by KCLVM.\n    apiVersion : str, default is "stable.example.com/v1", required\n         APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources\n    kind : str, default is "CronTab", required\n         Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds\n    metadata : apis.ObjectMeta, default is Undefined, optional\n        metadata\n    spec : StableExampleComV1CronTabSpec, default is Undefined, optional\n        spec\n    """\n\n\n    apiVersion: "stable.example.com/v1" = "stable.example.com/v1"\n\n    kind: "CronTab" = "CronTab"\n\n    metadata?: apis.ObjectMeta\n\n    spec?: StableExampleComV1CronTabSpec\n\n\nschema StableExampleComV1CronTabSpec:\n    """stable example com v1 cron tab spec\n\n    Attributes\n    ----------\n    cronSpec : str, default is Undefined, optional\n        cron spec\n    image : str, default is Undefined, optional\n        image\n    replicas : int, default is Undefined, optional\n        replicas\n    """\n\n\n    cronSpec?: str\n\n    image?: str\n\n    replicas?: int\n\n')))}u.isMDXComponent=!0}}]);