"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2704],{6255:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=n(5893),r=n(1151);const t={slug:"troubleshooting",title:"SRE Troubleshooting Checklist",sidebar_label:"Troubleshooting"},o=void 0,c={id:"for-ops/sre/troubleshooting",title:"SRE Troubleshooting Checklist",description:"Pods not starting",source:"@site/docs/for-ops/sre/troubleshooting.md",sourceDirName:"for-ops/sre",slug:"/for-ops/sre/troubleshooting",permalink:"/docs/for-ops/sre/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/sre/troubleshooting.md",tags:[],version:"current",frontMatter:{slug:"troubleshooting",title:"SRE Troubleshooting Checklist",sidebar_label:"Troubleshooting"},sidebar:"mainSidebar",previous:{title:"Upgrades",permalink:"/docs/for-ops/sre/upgrades"},next:{title:"Dashboard",permalink:"/docs/for-devs/console/dashboard"}},l={},d=[{value:"Pods not starting",id:"pods-not-starting",level:2},{value:"Advanced",id:"advanced",level:3},{value:"Pods not running",id:"pods-not-running",level:2},{value:"Advanced",id:"advanced-1",level:3},{value:"Network services not working",id:"network-services-not-working",level:2},{value:"Advanced",id:"advanced-2",level:3},{value:"Istio issues",id:"istio-issues",level:2},{value:"Advanced",id:"advanced-3",level:3},{value:"DNS issues",id:"dns-issues",level:2},{value:"Certificate issues",id:"certificate-issues",level:2},{value:"Storage issues",id:"storage-issues",level:2},{value:"The otomi-pipeline pipeline failure",id:"the-otomi-pipeline-pipeline-failure",level:3},{value:"Advanced",id:"advanced-4",level:3},{value:"Contact support (Enterprise subscription required)",id:"contact-support-enterprise-subscription-required",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"pods-not-starting",children:"Pods not starting"}),"\n",(0,s.jsx)(i.p,{children:"Pods that are unable to start do not show any log output, the issue is related to k8s. Look for a pod with status Pending. Most of the time this is related to resources and container component issues."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Describe the pod, look closely at listed events"}),"\n",(0,s.jsx)(i.li,{children:"Is the image pullable? Is there a pull secret configured?"}),"\n",(0,s.jsx)(i.li,{children:"Can volumes, configmaps and secrets be mounted?"}),"\n",(0,s.jsx)(i.li,{children:"Check resource requests: is the requested resource available?"}),"\n",(0,s.jsx)(i.li,{children:"Are commands and arguments correct? (make sure to use /bin/sh -c as command to use ENV)"}),"\n",(0,s.jsx)(i.li,{children:"Does the cluster have enough resources available?"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"advanced",children:"Advanced"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check affinity and node selector rules"}),"\n",(0,s.jsx)(i.li,{children:"Is the image tag valid and compatible with the host CPU? (exec format error)"}),"\n",(0,s.jsx)(i.li,{children:"Check namespace quotas for pod, cm or secret limits etc."}),"\n",(0,s.jsx)(i.li,{children:"Check service account and permissions"}),"\n",(0,s.jsx)(i.li,{children:"Is the pod a job, deployment, daemonset or statefulset?"}),"\n",(0,s.jsx)(i.li,{children:"Is there a limitrange configured in the namespace?"}),"\n",(0,s.jsx)(i.li,{children:"Is the template spec in the pod matching the running container?"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"pods-not-running",children:"Pods not running"}),"\n",(0,s.jsxs)(i.p,{children:["Pods that are running but restart for whatever reason indicate that a container itself is having issues. Look for pod status ",(0,s.jsx)(i.code,{children:"Crashloop, OOMkilled"})," or ",(0,s.jsx)(i.code,{children:"incomplete ready status (2/3)"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check if dns resolving works"}),"\n",(0,s.jsx)(i.li,{children:"Are the required services available to the pod?"}),"\n",(0,s.jsx)(i.li,{children:"Check restart count and inspect logs and previous logs"}),"\n",(0,s.jsx)(i.li,{children:"Check if istio injection is required and working"}),"\n",(0,s.jsx)(i.li,{children:"Is a lifecycle spec configured?"}),"\n",(0,s.jsx)(i.li,{children:"Does the container depend on sidecar containers?"}),"\n",(0,s.jsx)(i.li,{children:"Check for available resources requests"}),"\n",(0,s.jsx)(i.li,{children:"Check readiness and liveness probes"}),"\n",(0,s.jsx)(i.li,{children:"Does the pod have enough CPU resources to do it's job?"}),"\n",(0,s.jsx)(i.li,{children:"Inspect the restart counter for the pod, a high value (32+) indicates an unstable pod"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"advanced-1",children:"Advanced"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check pod's service account permissions"}),"\n",(0,s.jsx)(i.li,{children:"Attach shell and inspect container status"}),"\n",(0,s.jsx)(i.li,{children:"Rootless containers need special care combined with volumes"}),"\n",(0,s.jsx)(i.li,{children:"Check securitycontext and pod security policy"}),"\n",(0,s.jsx)(i.li,{children:"Check volume permissions"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"network-services-not-working",children:"Network services not working"}),"\n",(0,s.jsx)(i.p,{children:"Pods are working but a user can't connect to the service. Most HTTP-based services use an Ingress object, non HTTP services require a service port to be defined."}),"\n",(0,s.jsx)(i.p,{children:"Network policies or Istio policies can deny pods from communicating, note that DNS resolving is required for normal operation."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check if network policies are too strict by removing suspect one(s) (if so report an issue to have it/them refactored, if not put back)"}),"\n",(0,s.jsxs)(i.li,{children:["Use ",(0,s.jsx)(i.code,{children:"kubectl port-forward"})," to debug pod service on lowest level"]}),"\n",(0,s.jsx)(i.li,{children:"Check if kube-dns / coredns pods are working in kube-system namespace"}),"\n",(0,s.jsx)(i.li,{children:"Check invalid DNS names, too long (64+) or invalid characters"}),"\n",(0,s.jsx)(i.li,{children:"Attach a shell and perform basic nslookup or ping commands (ping doesn't work between internal services in k8s)"}),"\n",(0,s.jsx)(i.li,{children:"Confirm that services do not mix http and https in frontend and backend"}),"\n",(0,s.jsx)(i.li,{children:"Service names matter, prefix accordingly with http- or https- for istio to recognize"}),"\n",(0,s.jsx)(i.li,{children:"Validate ingress, istio gateway, virtual service and services"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"advanced-2",children:"Advanced"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"heck for network policies"}),"\n",(0,s.jsx)(i.li,{children:"Validate istio pods are working"}),"\n",(0,s.jsx)(i.li,{children:"Check if istio injection is configured and working"}),"\n",(0,s.jsx)(i.li,{children:"Validate istio-operator working"}),"\n",(0,s.jsxs)(i.li,{children:["Run ",(0,s.jsx)(i.code,{children:"istioctl analyze"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"istio-issues",children:"Istio issues"}),"\n",(0,s.jsx)(i.p,{children:"Istio sidecars manipulate the container's network to reroute traffic. A namespace can have an Istio sidecar policy indicated by a label, the same is valid for a deployment or pod. Make sure you see Istio sidecars running when applicable (indicated by the 3/3 Ready status)."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check if istio-operator is working"}),"\n",(0,s.jsx)(i.li,{children:"Check logs for istiod pods"}),"\n",(0,s.jsx)(i.li,{children:"Are services correctly named? (istio treats http- prefix and https- prefix differently)"}),"\n",(0,s.jsx)(i.li,{children:"Check logs for istio sidecar proxy"}),"\n",(0,s.jsx)(i.li,{children:"Check if mtls is enabled and working"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"advanced-3",children:"Advanced"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Is the correct service account configured?"}),"\n",(0,s.jsx)(i.li,{children:"Is Istio mTLS enabled and configured correctly?"}),"\n",(0,s.jsxs)(i.li,{children:["Turn on logging for a context of an istio sidecar: ",(0,s.jsx)(i.code,{children:"ksh exec -it $container_id -c istio-proxy -- sh -c 'curl -k -X POST localhost:15000/logging?jwt=debug'"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"dns-issues",children:"DNS issues"}),"\n",(0,s.jsx)(i.p,{children:"The external-dns service is registering DNS names to makes sure that the service names are publicly available."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Make sure external-dns logs indicate All records are already up to date"}),"\n",(0,s.jsx)(i.li,{children:"Are the credentials configured correctly?"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"certificate-issues",children:"Certificate issues"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Check cert-manager working"}),"\n",(0,s.jsxs)(i.li,{children:["Run ",(0,s.jsx)(i.code,{children:"kubectl describe orders.acme.cert-manager.io -A"})]}),"\n",(0,s.jsxs)(i.li,{children:["Run ",(0,s.jsx)(i.code,{children:"kubectl describe challenges.acme.cert-manager.io -A"})]}),"\n",(0,s.jsxs)(i.li,{children:["Run ",(0,s.jsx)(i.code,{children:"kubectl describe certificates.cert-manager.io -A"})]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"storage-issues",children:"Storage issues"}),"\n",(0,s.jsxs)(i.p,{children:["Check available storage classes ",(0,s.jsx)(i.code,{children:"std"})," and ",(0,s.jsx)(i.code,{children:"fast"})," exist"]}),"\n",(0,s.jsx)(i.h3,{id:"the-otomi-pipeline-pipeline-failure",children:"The otomi-pipeline pipeline failure"}),"\n",(0,s.jsxs)(i.p,{children:["In the otomi-pipeline execution failure, read carefully last few lines from the ",(0,s.jsx)(i.code,{children:"PipelineRun`` output. Errors containing: "}),'unable to build kubernetes objects from release manifest: Get "',(0,s.jsx)(i.a,{href:"https://10.32.0.1:443/openapi/v2?timeout=32s",children:"https://10.32.0.1:443/openapi/v2?timeout=32s"}),'": net/http: request canceled',(0,s.jsx)(i.code,{children:"string, indicates that the kube-api was not available. Admin can restart the pipeline by triggering webhook from Gitea app. Go to otomi/values repository -> click "}),"Settings",(0,s.jsx)(i.code,{children:"-> select "}),"Webhooks",(0,s.jsx)(i.code,{children:"tab -> click the "}),"Test Delivery` button."]}),"\n",(0,s.jsx)(i.h3,{id:"advanced-4",children:"Advanced"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Describe pv and pvc, check if pv's are ",(0,s.jsx)(i.code,{children:"rwo"})," or ",(0,s.jsx)(i.code,{children:"rwx"})," and look for conflicts"]}),"\n",(0,s.jsxs)(i.li,{children:["Check if container expects or ",(0,s.jsx)(i.code,{children:"rwx"})," pv"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"contact-support-enterprise-subscription-required",children:"Contact support (Enterprise subscription required)"}),"\n",(0,s.jsx)(i.p,{children:"In case (after troubleshooting) the customer discovers one of the Otomi functions is not working as expected, an issue can be reported. When reporting an issue the following information needs to be provided:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Is the function not working in only a single case, or in all cases?"}),"\n",(0,s.jsx)(i.li,{children:"Which function is not working?"}),"\n",(0,s.jsx)(i.li,{children:"Which remediation activities have been performed?"}),"\n",(0,s.jsx)(i.li,{children:"kubeLog output of the container(s) supporting this function"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In case the issue is caused by a bug in one of the Otomi features, then Red Kubes will provide a fix within at least 24 hours."})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>o});var s=n(7294);const r={},t=s.createContext(r);function o(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);