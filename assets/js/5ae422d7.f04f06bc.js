"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3123],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},o="KCL - Make Kubernetes Resource Management Easier",s={unversionedId:"user_docs/guides/working-with-k8s/generate_k8s_manifests",id:"user_docs/guides/working-with-k8s/generate_k8s_manifests",title:"KCL - Make Kubernetes Resource Management Easier",description:"What is KCL",source:"@site/docs/user_docs/guides/working-with-k8s/generate_k8s_manifests.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/generate_k8s_manifests",permalink:"/docs/user_docs/guides/working-with-k8s/generate_k8s_manifests",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/user_docs/guides/working-with-k8s/generate_k8s_manifests.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1669620972,formattedLastUpdatedAt:"11/28/2022",frontMatter:{},sidebar:"user_docs",previous:{title:"From Kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/from_kubernetes"},next:{title:"KusionStack",permalink:"/docs/user_docs/guides/working-with-kusion/"}},l={},p=[{value:"What is KCL",id:"what-is-kcl",level:2},{value:"Why use KCL",id:"why-use-kcl",level:2},{value:"How to use KCL to generate and manage Kubernetes resources",id:"how-to-use-kcl-to-generate-and-manage-kubernetes-resources",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Generate Kubernetes manifests",id:"generate-kubernetes-manifests",level:3},{value:"Write code to manage Kubernetes resources",id:"write-code-to-manage-kubernetes-resources",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl---make-kubernetes-resource-management-easier"},"KCL - Make Kubernetes Resource Management Easier"),(0,r.kt)("h2",{id:"what-is-kcl"},"What is KCL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM"},"KCL (Kusion Configuration Language)")," is an open source constraint-based record and functional language. KCL improves the writing of a large number of complex configurations through mature programming language technology and practice, and is committed to building better modularity, scalability and stability around configuration, simpler logic writing, fast automation and good ecological extensionality."),(0,r.kt)("p",null,"When we deploy software systems, we do not think they are fixed. Evolving business requirements, infrastructure requirements, and other factors mean that systems are constantly changing. When we need to change the system behavior quickly, and the change process needs expensive and lengthy reconstruction and redeployment process, business code change is often not enough. Configuration can provide us with a low overhead way to change system functions. For example, we often write JSON or YAML files as shown below for our system configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JSON configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "server": {\n        "addr": "127.0.0.1",\n        "listen": 4545\n    },\n    "database": {\n        "enabled": true,\n        "ports": [\n            8000,\n            8001,\n            8002\n        ],\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YAML configuration")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  addr: 127.0.0.1\n  listen: 4545\ndatabase:\n  enabled: true\n  ports:\n  - 8000\n  - 8001\n  - 8002\n")),(0,r.kt)("p",null,"We can choose to store the static configuration in JSON and YAML files as needed. In addition, the configuration can also be stored in a high-level language that allows more flexible configuration, which can be coded, rendered, and statically configured. KCL is such a configuration language. We can write KCL code to generate JSON/YAML and other configurations. In this article, we focus on the use of KCL to generate and manage Kubernetes resources, and give you a simple and quick start through some simple examples. We will expand more in the following articles."),(0,r.kt)("h2",{id:"why-use-kcl"},"Why use KCL"),(0,r.kt)("p",null,'When we manage the Kubernetes resources, we often maintain it by hand, or use Helm and Kustomize tools to maintain our YAML configurations or configuration templates, and then apply the resources to the cluster through kubectl tools. However, as a "YAML engineer", maintaining YAML configuration every day is undoubtedly trivial and boring, and prone to errors. For example as follows:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata: ... # Omit\nspec:\n  selector:\n    matchlabels:\n      cell: RZ00A\n  replicas: 2\n  template:\n    metadata: ... # Omit\n    spec:\n      tolerations:\n      - effect: NoSchedules\n        key: is-over-quota\n        operator: Equal\n        value: 'true'\n      containers:\n      - name: test-app\n          image: images.example/app:v1 # Wrong ident\n        resources:\n          limits:\n            cpu: 2 # Wrong type. The type of cpu should be str\n            memory: 4Gi\n            # Field missing: ephemeral-storage\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: is-over-quota\n                operator: In\n                values:\n                - 'true'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The structured data in YAML is untyped and lacks validation methods, so the validity of all data cannot be checked immediately."),(0,r.kt)("li",{parentName:"ul"},"YAML has poor programming ability. It is easy to write incorrect indents and has no common code organization methods such as logical judgment. It is easy to write a large number of repeated configurations and difficult to maintain."),(0,r.kt)("li",{parentName:"ul"},"The design of Kubernetes is complex, and it is difficult for users to understand all the details, such as the ",(0,r.kt)("inlineCode",{parentName:"li"},"toleration")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"affinity")," fields in the above configuration. If users do not understand the scheduling logic, it may be wrongly omitted or superfluous added.")),(0,r.kt)("p",null,"Therefore, KCL expects to solve the following problems in Kubernetes YAML resource management:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("strong",{parentName:"li"},"production level high-performance programming language")," to ",(0,r.kt)("strong",{parentName:"li"},"write code")," to improve the flexibility of configuration, such as conditional statements, loops, functions, package management and other features to improve the ability of configuration reuse."),(0,r.kt)("li",{parentName:"ul"},"Improve the ability of ",(0,r.kt)("strong",{parentName:"li"},"configuration semantic verification")," at the code level, such as optional/required fields, types, ranges, and other configuration checks."),(0,r.kt)("li",{parentName:"ul"},"Provide ",(0,r.kt)("strong",{parentName:"li"},"the ability to write, combine and abstract configuration blocks"),", such as structure definition, structure inheritance, constraint definition, etc.")),(0,r.kt)("h2",{id:"how-to-use-kcl-to-generate-and-manage-kubernetes-resources"},"How to use KCL to generate and manage Kubernetes resources"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"First, you can visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM"},"KCL project home page")," to download and install KCL according to the instructions, and then prepare a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," environment."),(0,r.kt)("h3",{id:"generate-kubernetes-manifests"},"Generate Kubernetes manifests"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u5982\u4e0b KCL \u4ee3\u7801\u5e76\u547d\u540d\u4e3a main.k \uff0cKCL \u53d7 Python \u542f\u53d1\uff0c\u57fa\u7840\u8bed\u6cd5\u5341\u5206\u63a5\u8fd1 Python, \u6bd4\u8f83\u5bb9\u6613\u5b66\u4e60\u548c\u4e0a\u624b, \u914d\u7f6e\u6a21\u5f0f\u5199\u6cd5\u5f88\u7b80\u5355\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"k [: T] = v"),", \u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," \u8868\u793a\u914d\u7f6e\u7684\u5c5e\u6027\u540d\u79f0; ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," \u8868\u793a\u914d\u7f6e\u7684\u5c5e\u6027\u503c; ",(0,r.kt)("inlineCode",{parentName:"p"},": T")," \u8868\u793a\u4e00\u4e2a\u53ef\u9009\u7684\u7c7b\u578b\u6ce8\u89e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"In the above KCL code, we declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," and other variables of a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," resource, and assign the corresponding contents respectively. In particular, we will assign ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.labels")," fields are reused in ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.selector.matchLabels")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.metadata.labels")," field. It can be seen that, compared with YAML, the data structure defined by KCL is more compact, and configuration reuse can be realized by defining local variables."),(0,r.kt)("p",null,"We can get a Kubernetes YAML file by executing the following command line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"kcl main.k\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,r.kt)("p",null,"Of course, we can use KCL together with kubectl and other tools. Let's execute the following commands and see the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"$ kcl main.k | kubectl apply -f -\n\ndeployment.apps/nginx-deployment configured\n")),(0,r.kt)("p",null,"It can be seen from the command line that it is completely consistent with the deployment experience of using YAML configuration and kubectl application directly."),(0,r.kt)("p",null,"Check the deployment status through kubectl"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"$ kubectl get deploy\n\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   3/3     3            3           15s\n")),(0,r.kt)("h3",{id:"write-code-to-manage-kubernetes-resources"},"Write code to manage Kubernetes resources"),(0,r.kt)("p",null,"When publishing Kubernetes resources, we often encounter scenarios where configuration parameters need to be dynamically specified. For example, different environments need to set different ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," field values to generate resources in different environments. For this scenario, we can dynamically receive external parameters through KCL conditional statements and ",(0,r.kt)("inlineCode",{parentName:"p"},"option")," functions. Based on the above example, we can adjust the configuration parameters according to different environments. For example, for the following code, we wrote a conditional statement and entered a dynamic parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"env"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'apiVersion = "apps/v1"\nkind = "Deployment"\nmetadata = {\n    name = "nginx"\n    labels.app = "nginx"\n}\nspec = {\n    replicas = 3\n    selector.matchLabels = metadata.labels\n    template.metadata.labels = metadata.labels\n    template.spec.containers = [\n        {\n            name = metadata.name\n            image = "${metadata.name}:1.14.2" if option("env") == "prod" else "${metadata.name}:latest"\n            ports = [{ containerPort = 80 }]\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"Use the KCL command line ",(0,r.kt)("inlineCode",{parentName:"p"},"-D")," flag to receive an external dynamic parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"kcl main.k -D env=prod\n")),(0,r.kt)("p",null,"The output is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u7247\u6bb5\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},'image = metadata.name + ":1.14.2" if option("env") == "prod" else  metadata.name + ":latest"')," \u610f\u601d\u4e3a\uff1a\u5f53\u52a8\u6001\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," \u7684\u503c\u88ab\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," \u65f6\uff0cimage \u5b57\u6bb5\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx:1.14.2"),", \u5426\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx:latest"),"\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4e3a env \u8bbe\u7f6e\u4e3a\u4e0d\u540c\u7684\u503c\u83b7\u5f97\u4e0d\u540c\u5185\u5bb9\u7684 Kubernetes \u8d44\u6e90\u3002"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},'image=metadata.name+": 1.14.2" if option ("env")=="prod" else metadata.name + ": latest"')," in the above code snippet means that when the value of the dynamic parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"prod"),", the value of the image field is ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx: 1.14.2"),"; otherwise, it is' nginx: latest'. Therefore, we can set env to different values as required to obtain Kubernetes resources with different contents."),(0,r.kt)("p",null,"KCL also supports maintaining the dynamic parameters of the option function in the configuration file, such as writing the ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_options:\n  - key: env\n    value: prod\n")),(0,r.kt)("p",null,"The same YAML output can be obtained by using the following command line to simplify the input process of KCL dynamic parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"kcl main.k -Y kcl.yaml\n")),(0,r.kt)("p",null,"The output is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")))}u.isMDXComponent=!0}}]);