"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2020],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),k=l,h=m["".concat(s,".").concat(k)]||m[k]||c[k]||r;return a?o.createElement(h,n(n({ref:t},p),{},{components:a})):o.createElement(h,n({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,n=new Array(r);n[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var u=2;u<r;u++)n[u]=a[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=a(7462),l=(a(7294),a(3905));const r={slug:"backups",title:"Create/Restore backups",sidebar_label:"Backups"},n=void 0,i={unversionedId:"for-ops/how-to/backups",id:"for-ops/how-to/backups",title:"Create/Restore backups",description:"When Velero is activated on the platform level, platform admins can create backups of Persistent Volumes (PVs) in Team namespaces using Otomi Console. When creating backups using Otomi Console, a Velero schedule resource is created that will create the backup at a specified time, defined by a Cron expression.",source:"@site/docs/for-ops/how-to/backups.md",sourceDirName:"for-ops/how-to",slug:"/for-ops/how-to/backups",permalink:"/docs/for-ops/how-to/backups",draft:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/for-ops/how-to/backups.md",tags:[],version:"current",frontMatter:{slug:"backups",title:"Create/Restore backups",sidebar_label:"Backups"},sidebar:"mainSidebar",previous:{title:"Use Core only",permalink:"/docs/for-ops/how-to/core-only"},next:{title:"Installation",permalink:"/docs/for-ops/cli/installation"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a backup schedule using Otomi",id:"create-a-backup-schedule-using-otomi",level:2},{value:"Check if the schedule is created",id:"check-if-the-schedule-is-created",level:2},{value:"Check if the backup is created",id:"check-if-the-backup-is-created",level:2},{value:"Restore the backup",id:"restore-the-backup",level:2},{value:"Manually create backups",id:"manually-create-backups",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When Velero is activated on the platform level, platform admins can create backups of Persistent Volumes (PVs) in Team namespaces using Otomi Console. When creating backups using Otomi Console, a Velero ",(0,l.kt)("inlineCode",{parentName:"p"},"schedule")," resource is created that will create the backup at a specified time, defined by a Cron expression."),(0,l.kt)("p",null,"In this how-to, we'll create a backup of a PV using Otomi and then restore it using the velero CLI integrated into the Otomi Shell."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"To perform this how-to, first make sure Velero is enabled. Velero requires object storage to be be configured. By default Velero uses the local Minio provided by Otomi. In this how-to we'll use Minio."),(0,l.kt)("p",null,"When Otomi installs Velero, the Velero plug-in for Azure, AWS and Google are configured by default. Velero also has support for backing up and restoring Kubernetes volumes using ",(0,l.kt)("a",{parentName:"p",href:"https://velero.io/docs/v1.3.2/restic/#limitations"},"Restic"),". Note that Restic is not enabled by default."),(0,l.kt)("p",null,"For this how-to we'll use the PV of a Team's private Prometheus instance, so make sure Prometheus is also enabled. "),(0,l.kt)("h2",{id:"create-a-backup-schedule-using-otomi"},"Create a backup schedule using Otomi"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Select the Team name in the top bar to set the context to the namespace that contains the PV to backup. In this how-to we'll use the team ",(0,l.kt)("inlineCode",{parentName:"li"},"demo"),"."),(0,l.kt)("li",{parentName:"ol"},"In Otomi Console, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Backup")," in the left menu under ",(0,l.kt)("inlineCode",{parentName:"li"},"Platform")," and click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,l.kt)("li",{parentName:"ol"},"Enter a name for the backup. In this how-to we'll use the name ",(0,l.kt)("inlineCode",{parentName:"li"},"prom"),"."),(0,l.kt)("li",{parentName:"ol"},"Add the schedule of the backup. The schedule is a cron-type expression to schedule the backup. Defaults to once a day at 00:00. Create your cron-type expression ",(0,l.kt)("a",{parentName:"li",href:"https://crontab.guru/"},"here"),"."),(0,l.kt)("li",{parentName:"ol"},"Using snapshots only applies to Persistent Volumes in Azure, GCE, and AWS."),(0,l.kt)("li",{parentName:"ol"},"In this how-to, we'll create a backup of the private Prometheus PV in the ",(0,l.kt)("inlineCode",{parentName:"li"},"demo")," team by using a ",(0,l.kt)("inlineCode",{parentName:"li"},"labelSelector"))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If the labelSelector is not used, the backup schedule will backup all PVs of the team.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In Otomi Console, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Shell")," in the bottom of the left menu."),(0,l.kt)("li",{parentName:"ul"},"Run the following cmd in the shell:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get statefulset prometheus-demo-po-prometheus -n team-demo --show-labels\n\\NAME                            READY   AGE   LABELS\nprometheus-demo-po-prometheus   1/1     77m   app.kubernetes.io/instance=prometheus-demo,app.kubernetes.io/managed-by=Helm,app.kubernetes.io/part-of=demo-po,app.kubernetes.io/version=46.4.1,app=demo-po-prometheus,chart=kube-prometheus-stack-46.4.1,heritage=Helm,operator.prometheus.io/mode=server,operator.prometheus.io/name=demo-po-prometheus,operator.prometheus.io/shard=0,prometheus=team-demo,release=prometheus-demo\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Item")," and fill in the following:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: prometheus\nvalue: team-demo\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Use the default TTL (expiration of the backup). Defaults to 7 days."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("inlineCode",{parentName:"li"},"Submit"))),(0,l.kt)("h2",{id:"check-if-the-schedule-is-created"},"Check if the schedule is created"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In Otomi Console, click on ",(0,l.kt)("inlineCode",{parentName:"li"},"Shell")," in the bottom of the left menu"),(0,l.kt)("li",{parentName:"ol"},"Run the following cmd in the shell:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"velero get schedules\nNAME                    STATUS    CREATED                         SCHEDULE     BACKUP TTL   LAST BACKUP   SELECTOR   PAUSED\nteam-demo-backup-prom   Enabled   2023-09-24 11:50:59 +0000 UTC   55 * * * *   168h0m0s     n/a           <none>     false\n")),(0,l.kt)("h2",{id:"check-if-the-backup-is-created"},"Check if the backup is created"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Run the following cmd in the shell:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"velero get backups\nNAME                                   STATUS      ERRORS   WARNINGS   CREATED                         EXPIRES   STORAGE LOCATION   SELECTOR\nteam-demo-backup-prom-20230924115514   Completed   0        0          2023-09-24 11:55:14 +0000 UTC   6d        otomi              prometheus=team-demo\n")),(0,l.kt)("p",null,"You can see the status of the backup is ",(0,l.kt)("inlineCode",{parentName:"p"},"Completed"),". The backup is now stored in the local Minio."),(0,l.kt)("h2",{id:"restore-the-backup"},"Restore the backup"),(0,l.kt)("p",null,"Now the backup is created, we can restore the backup."),(0,l.kt)("p",null,"Follow this procedure to restore a backup:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Scale down the ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"statefulset")," that uses the PV")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete the PVC. You can find the name of the PVC in the deployment ",(0,l.kt)("inlineCode",{parentName:"p"},"spec.template.spec.volumes"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following cmd in the shell:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'velero restore create --from-backup team-demo-backup-prom-20230924115514\nRestore request "team-demo-backup-prom-20230924115514-20230924133133" submitted successfully.\nRun `velero restore describe team-demo-backup-prom-20230924115514-20230924133133` or `velero restore logs team-demo-backup-prom-20230924115514-20230924133133` for more details.\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Scale up the ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," of the ",(0,l.kt)("inlineCode",{parentName:"li"},"deployment")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"statefulset")," to use the restored PV")),(0,l.kt)("h2",{id:"manually-create-backups"},"Manually create backups"),(0,l.kt)("p",null,"Otomi only provides a self-service option for administrators to schedule backups of persistent volumes within team namespaces. The shell in Otomi includes the Velero CLI, so if you're confortable with Velero you can also create you're own custom backups. Check the docs on ",(0,l.kt)("a",{parentName:"p",href:"https://velero.io/"},"https://velero.io/")," for more information."),(0,l.kt)("p",null,"This is an example of creating a custom backup:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a full backup (to backup all resources, including PVs)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"velero backup create my-custom-backup-01 --include-namespaces team-demo\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a backup of specific resources:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"velero backup create my-custom-backup-02 --include-namespaces team-demo --include-resources secret,deployment\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Verify the backup:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"velero describe backup my-custom-backup-01 --details\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Restore a backup:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"velero restore create --from-backup my-custom-backup-01\n")))}c.isMDXComponent=!0}}]);