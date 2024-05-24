"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[2248],{4687:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=t(5893),o=t(1151);const s={slug:"gcp",title:"Google Cloud Platform",sidebar_label:"Google Cloud Platform"},i="Install Otomi on GKE with a GCP DNS zone",l={id:"get-started/installation/gcp",title:"Google Cloud Platform",description:"Prerequisites",source:"@site/docs/get-started/installation/gcp.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/gcp",permalink:"/docs/get-started/installation/gcp",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/gcp.md",tags:[],version:"current",frontMatter:{slug:"gcp",title:"Google Cloud Platform",sidebar_label:"Google Cloud Platform"},sidebar:"mainSidebar",previous:{title:"Digital Ocean",permalink:"/docs/get-started/installation/digitalocean"},next:{title:"Linode",permalink:"/docs/get-started/installation/linode"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a GKE cluster",id:"create-a-gke-cluster",level:2},{value:"Configure DNS",id:"configure-dns",level:2},{value:"Create Cloud DNS Zone",id:"create-cloud-dns-zone",level:3},{value:"Static Credentials",id:"static-credentials",level:3},{value:"Create GSA for use with static credentials",id:"create-gsa-for-use-with-static-credentials",level:4},{value:"Create credentials",id:"create-credentials",level:4},{value:"Create the values.yaml file",id:"create-the-valuesyaml-file",level:2},{value:"Install Otomi using helm",id:"install-otomi-using-helm",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"install-otomi-on-gke-with-a-gcp-dns-zone",children:"Install Otomi on GKE with a GCP DNS zone"}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"GCloud SDK"})}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Note: If you login via ",(0,a.jsx)(n.a,{href:"https://cloud.google.com/shell",children:"Google Cloud Shell"}),", you don't need to install the prerequisites"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"GCloud CLI Cheat Sheet"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Initialize and authentication\ngcloud init\ngcloud auth login\ngcloud config set project PROJECT_ID\n\n# Enable google services api\ngcloud services enable compute.googleapis.com\ngcloud services enable container.googleapis.com\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"create-a-gke-cluster",children:"Create a GKE cluster"}),"\n",(0,a.jsx)(n.p,{children:"Set up environment variables:"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Change the Machine Type to match a type supported in your region."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Set Cluster name\nCLUSTER_NAME=otomi\n# Set region\nCOMPUTE_REGION=europe-west4\n# Set machine type\nMACHINE_TYPE=e2-standard-8\n"})}),"\n",(0,a.jsx)(n.p,{children:"Create the cluster:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gcloud container clusters create $CLUSTER_NAME \\\n    --enable-autoscaling \\\n    --enable-network-policy \\\n    --num-nodes 1 \\\n    --min-nodes 1 \\\n    --max-nodes 2 \\\n    --machine-type $MACHINE_TYPE \\\n    --logging NONE \\\n    --monitoring NONE \\\n    --region $COMPUTE_REGION\n"})}),"\n",(0,a.jsx)(n.p,{children:"Update the Kubernetes config file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"gcloud container clusters get-credentials $CLUSTER_NAME --region $COMPUTE_REGION\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configure-dns",children:"Configure DNS"}),"\n",(0,a.jsx)(n.h3,{id:"create-cloud-dns-zone",children:"Create Cloud DNS Zone"}),"\n",(0,a.jsxs)(n.p,{children:["Create a DNS zone which will contain the managed DNS records. If using your own domain that was registered with a third-party domain registrar, you should point your domain's name servers to the values under the ",(0,a.jsx)(n.code,{children:"nameServers"})," key. Please consult your registrar's documentation on how to do that.  This tutorial will use example domain of  ",(0,a.jsx)(n.code,{children:"example.com"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'gcloud dns managed-zones create "example-com" --dns-name "example.com." \\\n  --description "Automatically managed zone by kubernetes.io/external-dns"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Make a note of the nameservers that were assigned to your new zone."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'gcloud dns record-sets list \\\n    --zone "example-com" --name "example.com." --type NS\n'})}),"\n",(0,a.jsx)(n.h3,{id:"static-credentials",children:"Static Credentials"}),"\n",(0,a.jsx)(n.p,{children:"In this scenario, a new GSA (Google Service Account) is created that has access to the CloudDNS zone.  The credentials for this GSA are saved and installed as a Kubernetes secret that will be used by ExternalDNS."}),"\n",(0,a.jsx)(n.p,{children:"This allows only containers that have access to the secret, such as ExternalDNS to update records on the Cloud DNS Zone."}),"\n",(0,a.jsx)(n.h4,{id:"create-gsa-for-use-with-static-credentials",children:"Create GSA for use with static credentials"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'DNS_SA_NAME="external-dns-sa"\nDNS_SA_EMAIL="$DNS_SA_NAME@${GKE_PROJECT_ID}.iam.gserviceaccount.com"\n\n# create GSA used to access the Cloud DNS zone\ngcloud iam service-accounts create $DNS_SA_NAME --display-name $DNS_SA_NAME\n\n# assign google service account to dns.admin role in cloud-dns project\ngcloud projects add-iam-policy-binding $DNS_PROJECT_ID \\\n  --member serviceAccount:$DNS_SA_EMAIL --role "roles/dns.admin"\n'})}),"\n",(0,a.jsx)(n.h4,{id:"create-credentials",children:"Create credentials"}),"\n",(0,a.jsx)(n.p,{children:"Generate static credentials from the ExternalDNS GSA."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# download static credentials\ngcloud iam service-accounts keys create /local/path/to/credentials.json \\\n  --iam-account $DNS_SA_EMAIL\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Get the contents of the ",(0,a.jsx)(n.code,{children:"credentials.son"}),". Note that you don't need to create a Kubernetes secret. The credentials will be directly provided to the Otomi installer and Otomi will create the secret."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cat /local/path/to/credentials.json\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "type": "service_account",\n    "project_id": "xxx",\n    "private_key_id": "xxx",\n    "private_key": xxx,\n    "client_email": "external-dns-sa@otomi.iam.gserviceaccount.com",\n    "client_id": "000000000000",\n    "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n    "token_uri": "https://oauth2.googleapis.com/token",\n    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx.iam.gserviceaccount.com"\n}\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"create-the-valuesyaml-file",children:"Create the values.yaml file"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'tee values.yaml<<EOF\ncluster:\n  name: otomi\n  provider: google\n  domainSuffix: gcp.example.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters: \n    - example.com\n  provider:\n    google:\n      serviceAccountKey: |\n        {\n            "type": "service_account",\n            "project_id": "xxx",\n            "private_key_id": "xxx",\n            "private_key": xxx,\n            "client_email": "external-dns-sa@otomi.iam.gserviceaccount.com",\n            "client_id": "000000000000",\n            "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n            "token_uri": "https://oauth2.googleapis.com/token",\n            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/xxxx.iam.gserviceaccount.com"\n        }\n      project: $DNS_PROJECT_ID\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@example.com\nEOF\n'})}),"\n",(0,a.jsxs)(n.p,{children:["And adjust the ",(0,a.jsx)(n.code,{children:"domainSuffix"}),", ",(0,a.jsx)(n.code,{children:"domainFilters"})," and ",(0,a.jsx)(n.code,{children:"email"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"install-otomi-using-helm",children:"Install Otomi using helm"}),"\n",(0,a.jsx)(n.p,{children:"Install Otomi using Helm:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\nhelm install -f values.yaml otomi otomi/otomi\n"})}),"\n",(0,a.jsx)(n.p,{children:"Monitor the logs of the installer job:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"kubectl logs jobs/otomi -n default -f\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When the installer is finished, copy the ",(0,a.jsx)(n.code,{children:"url"})," and ",(0,a.jsx)(n.code,{children:"admin-password"})," from the console output."]}),"\n",(0,a.jsxs)(n.p,{children:["Follow the activation steps ",(0,a.jsx)(n.a,{href:"https://otomi.io/docs/get-started/activation",children:"here."})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Like to learn how to use Otomi? Go through the ",(0,a.jsx)(n.a,{href:"/docs/get-started/labs/overview",children:"Get Started labs"})]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var a=t(7294);const o={},s=a.createContext(o);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);