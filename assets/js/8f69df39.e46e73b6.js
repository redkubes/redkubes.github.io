"use strict";(self.webpackChunkredkubes_github_io=self.webpackChunkredkubes_github_io||[]).push([[8589],{7556:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(5893),i=s(1151);const r={slug:"aws",title:"AWS",sidebar_label:"AWS"},a="Install Otomi on EKS with DNS using Route53",l={id:"get-started/installation/aws",title:"AWS",description:"Prerequisites",source:"@site/docs/get-started/installation/aws.md",sourceDirName:"get-started/installation",slug:"/get-started/installation/aws",permalink:"/docs/get-started/installation/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/redkubes/redkubes.github.io/tree/main/docs/get-started/installation/aws.md",tags:[],version:"current",frontMatter:{slug:"aws",title:"AWS",sidebar_label:"AWS"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/get-started/installation/overview"},next:{title:"Azure",permalink:"/docs/get-started/installation/azure"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Additional resources",id:"additional-resources",level:2},{value:"Create an EKS cluster",id:"create-an-eks-cluster",level:2},{value:"Add a CNI",id:"add-a-cni",level:2},{value:"Configure Route53",id:"configure-route53",level:2},{value:"Create the values.yaml file",id:"create-the-valuesyaml-file",level:2},{value:"Install Otomi on EKS",id:"install-otomi-on-eks",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"install-otomi-on-eks-with-dns-using-route53",children:"Install Otomi on EKS with DNS using Route53"}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://aws.amazon.com/cli/",children:"AWS CLI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://cloud.google.com/sdk/docs/install",children:"Terraform"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"Helm"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you use VSCode, hover over variables to see the description/type in .tf and .tfvars files with the ",(0,t.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform",children:"Terraform extension"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/aws-build",children:"How to setup aws cli and terraform"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="AWS CLI Cheat Sheet"',children:"# Obtain account\naws sts get-caller-identity\n# Obtain username and userarn\naws iam get-user\n# Obtain rolearn\naws iam list-roles\n# Obtain groups\naws iam list-groups\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-an-eks-cluster",children:"Create an EKS cluster"}),"\n",(0,t.jsx)(n.p,{children:"Clone the Otomi Terraform repository:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/redkubes/quickstart.git\ncd eks\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy ",(0,t.jsx)(n.code,{children:"example.tfvars"})," file to ",(0,t.jsx)(n.code,{children:"terraform.tfvars"})," file and fill in missing configuration parameters"]}),"\n",(0,t.jsx)(n.li,{children:"Open a terminal and run the following:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"terraform init\n# install the EKS cluster\nterraform apply\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the credentials of the cluster:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Update your kubeconfig\n# Default: aws eks update-kubeconfig --name otomi\naws eks update-kubeconfig --name <cluster_name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"add-a-cni",children:"Add a CNI"}),"\n",(0,t.jsxs)(n.p,{children:["To use the network policies feature in Otomi, make sure to install the ",(0,t.jsx)(n.a,{href:"https://www.tigera.io/project-calico/",children:"Calico"})," CNI or any other CNI that supports Kubernetes network polices."]}),"\n",(0,t.jsx)(n.p,{children:"Install Tigera Operator:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add projectcalico https://docs.tigera.io/calico/charts\nhelm repo update\nkubectl create namespace tigera-operator\nhelm install calico projectcalico/tigera-operator --version v3.26.3 --namespace tigera-operator\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or install Calico minimal:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/v3.26.3/manifests/calico.yaml\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-route53",children:"Configure Route53"}),"\n",(0,t.jsx)(n.p,{children:"Follow these steps to use AWS Route53."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Register a domain and retrieve the Hosted zone ID"}),"\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.code,{children:"dns-policy.json"})," file for the policy and add the Zone ID:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "route53:GetChange",\n            "Resource": "arn:aws:route53:::change/*"\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "route53:ChangeResourceRecordSets",\n                "route53:ListResourceRecordSets"\n            ],\n            "Resource": [\n                "arn:aws:route53:::hostedzone/<your-zone-id>"\n            ]\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "route53:ListHostedZonesByName",\n                "route53:ListHostedZones"\n            ],\n            "Resource": [\n                "*"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create the policy:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'aws iam create-policy --policy-name "otomi-dns" --policy-document file://dns-policy.json\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"export the policy ARN:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export POLICY_ARN=$(aws iam list-policies --query 'Policies[?PolicyName==`<policy-name>`].Arn' --output text)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Create a user:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"USER=user-name\naws iam create-user --user-name $USER\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Attach the user to the policy:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aws iam attach-user-policy --user-name $USER --policy-arn $POLICY_ARN\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsxs)(n.li,{children:["Create the ",(0,t.jsx)(n.code,{children:"access-key"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ACCESS_KEY=$(aws iam create-access-key --user-name $USER)\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsxs)(n.li,{children:["Get the ",(0,t.jsx)(n.code,{children:"secret-access-id"})," and ",(0,t.jsx)(n.code,{children:"secret-access-key"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ACCESS_KEY_ID=$(echo $ACCESS_KEY | jq -r '.AccessKey.AccessKeyId')\nACCESS_KEY_SECRET=$(echo $ACCESS_KEY | jq -r '.AccessKey.SecretAccessKey')\n"})}),"\n",(0,t.jsx)(n.h2,{id:"create-the-valuesyaml-file",children:"Create the values.yaml file"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Get the API server endpoint. You can find the API server endpoint in the Details section of the cluster in the AWS console."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the DNS configuration created in the previous step, the API server endpoint, the ",(0,t.jsx)(n.code,{children:"domainSuffix"}),", ",(0,t.jsx)(n.code,{children:"domainFilters"}),", ",(0,t.jsx)(n.code,{children:"region"})," and ",(0,t.jsx)(n.code,{children:"email"})," to the ",(0,t.jsx)(n.code,{children:"values.yaml"})," that we'll use to install Otomi:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tee values.yaml<<EOF\ncluster:\n  name: otomi\n  provider: aws\n  region: your-region\n  apiName: api-server-endpoint\n  domainSuffix: your-domain.com\notomi:\n  hasExternalDNS: true\ndns:\n  domainFilters: \n    - your-domain.com\n  provider:\n    aws:\n      credentials:\n        secretKey: $ACCESS_KEY_ID\n        accessKey: $ACCESS_KEY_SECRET\n      region: your-region\napps:\n  cert-manager:\n    issuer: letsencrypt\n    stage: production\n    email: admin@your-domain.com\nEOF\n"})}),"\n",(0,t.jsx)(n.h2,{id:"install-otomi-on-eks",children:"Install Otomi on EKS"}),"\n",(0,t.jsx)(n.p,{children:"Install Otomi using Helm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"helm repo add otomi https://otomi.io/otomi-core\nhelm repo update\nhelm install -f values.yaml otomi otomi/otomi\n"})}),"\n",(0,t.jsx)(n.p,{children:"Monitor the logs of the installer job:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl logs jobs/otomi -n default -f\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the installer is finished, copy the ",(0,t.jsx)(n.code,{children:"url"})," and ",(0,t.jsx)(n.code,{children:"admin-password"})," from the console output."]}),"\n",(0,t.jsxs)(n.p,{children:["Follow the activation steps ",(0,t.jsx)(n.a,{href:"https://otomi.io/docs/get-started/activation",children:"here."})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Like to learn how to use Otomi? Go through the ",(0,t.jsx)(n.a,{href:"/docs/get-started/labs/overview",children:"Get Started labs"})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);