"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5151],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},832:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={title:"ArgoCD",sidebar_position:9},i=void 0,s={unversionedId:"user_docs/guides/argocd",id:"user_docs/guides/argocd",title:"ArgoCD",description:"Prerequisite",source:"@site/docs/user_docs/guides/argocd.md",sourceDirName:"user_docs/guides",slug:"/user_docs/guides/argocd",permalink:"/docs/next/user_docs/guides/argocd",editUrl:"https://github.com/KusionStack/kcl-lang.io/blob/main/docs/user_docs/guides/argocd.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1672580541,formattedLastUpdatedAt:"1/1/2023",sidebarPosition:9,frontMatter:{title:"ArgoCD",sidebar_position:9},sidebar:"user_docs",previous:{title:"Differences between KCL and Kustomize",permalink:"/docs/next/user_docs/guides/working-with-k8s/vs_kustomize"},next:{title:"KusionStack",permalink:"/docs/next/user_docs/guides/working-with-kusion/"}},l={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Config ArgoCD Plugin with KCL",id:"config-argocd-plugin-with-kcl",level:2},{value:"Update ArgoCD Deployment",id:"update-argocd-deployment",level:2},{value:"Create KCL Project",id:"create-kcl-project",level:2},{value:"Configure Drift Detection",id:"configure-drift-detection",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Install ArgoCD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,o.kt)("h2",{id:"config-argocd-plugin-with-kcl"},"Config ArgoCD Plugin with KCL"),(0,o.kt)("p",null,"ArgoCD has already had some common built-in plugins, including helm, jsonnet, and kustomize. For KCL, as a brand-new configuration language, if you want to integrate ArgoCD to complete drift detection, you need to follow its plugin mechanism and configure KCL as a third-party plugin. The specific operations are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write the patch YAML configuration file and update configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF > patch-argocd-cm.yaml\ndata:\n  configManagementPlugins: |\n    - name: kusion\n      generate:\n        command: ["sh", "-c"]\n        args: ["kcl -Y kcl.yaml ci-test/settings.yaml"]\n      lockRepo: true\nEOF\nkubectl -n argocd patch cm/argocd-cm -p "$(cat patch-argocd-cm.yaml)"\n')),(0,o.kt)("h2",{id:"update-argocd-deployment"},"Update ArgoCD Deployment"),(0,o.kt)("p",null,"After completing the first step, ArgoCD will recognize the KCL plugin, but the KCL plugin has not been loaded into the ArgoCD image. To implement configuration drift detection, we have to tune the Deployment of argocd-repo-server."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/examples/blob/main/kusion/argo-cd/patch-argocd-repo-server.yaml"},"patch")," file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://raw.githubusercontent.com/KusionStack/examples/main/kusion/argo-cd/patch-argocd-repo-server.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Update configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat patch-argocd-repo-server.yaml)"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Update complete")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,o.kt)("h2",{id:"create-kcl-project"},"Create KCL Project"),(0,o.kt)("p",null,"At this point, the preparation work has been completed, and now the verification process is started. Here we use example projects from the open-source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")," library."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable local port forwarding")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Login to ArgoCD")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"argocd login localhost:8080\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create ArgoCD Application")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app create guestbook-test \\\n--repo https://github.com/KusionStack/konfig.git \\\n--path appops/guestbook-frontend/prod \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kusion\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using a private repository, you need to configure the private repository access with private key credentials before executing the create command."),(0,o.kt)("p",{parentName:"div"},"Please refer ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#ssh-private-key-credential"},"Private Repositories")," for more details."))),(0,o.kt)("p",null,"After successfully creating, you can see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"application 'guestbook-test' created\n")),(0,o.kt)("p",null,"Through the ArgoCD UI, you can see that the created applications have not been synchronized yet.\nHere, you can manually synchronize or set automatic synchronization."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(2474).Z,width:"1330",height:"380"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Set synchronization policy (only ",(0,o.kt)("inlineCode",{parentName:"li"},"unsynced")," resources):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"argocd app set guestbook-test --sync-option ApplyOutOfSyncOnly=true\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on synchronization strategies, see ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"Sync Options")))),(0,o.kt)("p",null,"Sync succeeded:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(4622).Z,width:"2654",height:"362"})),(0,o.kt)("h2",{id:"configure-drift-detection"},"Configure Drift Detection"),(0,o.kt)("p",null,"At this point, the ArgoCD monitoring KCL project has been completed, implement configuration drift detection and achieve result consistency.\nLet's modify the mirror version of ",(0,o.kt)("inlineCode",{parentName:"p"},"guestbook-test")," to implement configuration changes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},' appConfiguration: frontend.Server {\n-    image = "gcr.io/google-samples/gb-frontend:v4"\n+    image = "gcr.io/google-samples/gb-frontend:v5"\n     schedulingStrategy.resource = res_tpl.tiny\n }\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Compile Again")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kusion compile -w appops/guestbook-frontend/prod\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Git commit and push")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "mannual drifted config for appops/guestbook-frontend/prod"\ngit push origin main\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Drift configuration auto-convergence")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(649).Z,width:"2654",height:"414"})))}d.isMDXComponent=!0},2474:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/out-of-sync-37f958b3a8b314e916ea330492dee2f0.jpg"},649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reconcile-drifted-config-40ba407f682c028fa3ebd7cd403881a7.jpg"},4622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/synced-9247a7d5a6437d211b07ae03344a8ac3.jpg"}}]);