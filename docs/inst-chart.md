---
slug: installation/chart/
title: Install the Chart
---

# Use Helm 3 to install Otomi.

## Prerequisites

- A Kubernetes cluster version 1.18+
- [Helm 3.0+](https://helm.sh/docs/intro/install/)
- A `values.yaml` file that contains the chart configuration. See [configuration](#configuring) below for more details.
- A git client on your PATH (used for pushing the values to the git repository destined to hold otomi values).

## Install via Helm repository

You can install Otomi from the `otomi` helm repository.

### Adding the otomi helm repository

```bash
helm repo add Otomi https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

### Installing the Chart

With this command you install the Otomi chart with the name `my-otomi-release` and with the values that you prepared in your `values.yaml` file.

```bash
helm install -f /path/to/values.yaml `my-otomi-release` otomi/otomi
```

You can install a specific version of the Otomi chart. Visit [this page](https://github.com/redkubes/otomi-core/releases) for the list of all release versions.

```bash
helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi --version 0.1.4-rc6
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

## Uninstalling the Chart

```bash
helm uninstall my-otomi-release
```

## Configuration

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml), or run these configuration commands:

```bash
helm show values otomi-repo/otomi
```

## Required values 

|Parameter|Description|Default|
|-|-|-|
| `alerts` |  |  |
| `cluster.name` |  |  |
| `cluster.provider` |  |  |
| `customer` |  |  |
| `oidc` | Holds many parts used in different locations. Please see keycloak, grafana, istio and oauth-proxy as those are all consuming (parts of) these settings. |  |
| `otomi.adminPassword` |  | bladdfsibla |
| `teamConfig` |  |  |
| `services` |  |  |

## All values 

|Parameter|Description|Default|
|-|-|-|
| `alerts.drone` |  | slack |
| `alerts.email.critical` | One or more email addresses (comma separated) for critical events. |  |
| `alerts.email.nonCritical` | One or more email addresses (comma separated) for non-critical events. |  |
| `alerts.groupInterval` | How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) | 5m |
| `alerts.msteams.highPrio` | The low prio web hook. |  |
| `alerts.msteams.lowPrio` | The high prio web hook. |  |
| `alerts.receivers` | Notification receivers. |  |
| `alerts.receivers` |  |  |
| `alerts.repeatInterval` | How long to wait before sending a notification again if it has already been sent successfully for an alert. (Usually ~3h or more). | 3h |
| `alerts.slack.channel` | The Slack channel for non-critical notifications. | dev-mon-otomi |
| `alerts.slack.channelCrit` | The Slack channel for critical notifications. | dev-mon-otomi |
| `alerts.slack.url` | A Slack webhook URL. |  |
| `apps` | The list of otomi apps that are shown in the console. |  |
| `azure` | Azure specific configuration. |  |
| `azure.storageType.fast` |  |  |
| `azure.storageType.standard` |  |  |
| `azure.appgw.isManaged` | Is this appgw installed as AKS addon? | true |
| `azure.monitor.appInsightsApiKey` | An Azure AppInsights client secret. |  |
| `azure.monitor.appInsightsAppId` | An Azure client id. |  |
| `azure.monitor.azureLogAnalyticsSameAs` |  | true |
| `azure.monitor.clientId` | An Azure client id. |  |
| `azure.monitor.clientSecret` | An Azure client secret. |  |
| `azure.monitor.logAnalyticsClientId` | An Azure client secret. |  |
| `azure.monitor.logAnalyticsClientSecret` | An Azure client secret. |  |
| `azure.monitor.logAnalyticsTenantId` | An Azure tenant id. |  |
| `azure.monitor.logAnalyticsDefaultWorkspace` | An Azure LogAnalytics workspace. |  |
| `azure.monitor.subscriptionId` | An Azure subscription id. |  |
| `azure.monitor.tenantId` | An Azure tenant id. |  |
| `cloud.skipStorageClasses` | List of storage classes to exclude from deployment, to avoid k8s errors due to patching not allowed. This is a rather hacky way to circumvent the patching problem, going against idempotency, but we need it. Without it we can't add new storageclasses to a cluster upgrading otomi. |  |
| `cloud.skipStorageClasses` |  |  |
| `charts.cert-manager._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.cert-manager.email` |  |  |
| `charts.cert-manager.stage` | The Let’s Encrypt environment that is used for issuing certificates.
The 'production' environment issues trusted certificates but has narrow rate limits, whereas the 'staging' environment issues untrusted certificates but provides broader rate limits.
Read more about rate limits: https://letsencrypt.org/docs/rate-limits/.
 | staging |
| `charts.cluster-overprovisioner._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.cluster-overprovisioner.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.cluster-overprovisioner.enabled` |  |  |
| `charts.cluster-overprovisioner.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.demo-tlspass.enabled` |  |  |
| `charts.demo-tlspass.tlsCert` |  |  |
| `charts.demo-tlspass.tlsKey` |  |  |
| `charts.drone._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.drone.adminIsMachine` |  |  |
| `charts.drone.adminUser` |  |  |
| `charts.drone.adminToken` |  |  |
| `charts.drone.debug` |  |  |
| `charts.drone.enabled` |  |  |
| `charts.drone.githubAdmins.org` |  |  |
| `charts.drone.githubAdmins.team` |  |  |
| `charts.drone.githubAdmins.token` |  |  |
| `charts.drone.orgsFilter` |  |  |
| `charts.drone.owner` |  |  |
| `charts.drone.repo` | A lowercase name that starts with a letter and may contain dashes. |  |
| `charts.drone.repoFilter` |  |  |
| `charts.drone.resources.runner` | Compute resources for containers. |  |
| `charts.drone.resources.runner.limits` | Requested resources (best effort). |  |
| `charts.drone.resources.runner.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.drone.resources.runner.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.drone.resources.runner.requests` | Requested resources (guaranteed). |  |
| `charts.drone.resources.runner.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.drone.resources.runner.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.drone.resources.server` | Compute resources for containers. |  |
| `charts.drone.resources.server.limits` | Requested resources (best effort). |  |
| `charts.drone.resources.server.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.drone.resources.server.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.drone.resources.server.requests` | Requested resources (guaranteed). |  |
| `charts.drone.resources.server.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.drone.resources.server.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.drone.sharedSecret` | A secret used by drone-admit-members plugin. |  |
| `charts.drone.sourceControl.bitbucketCloud.clientID` |  |  |
| `charts.drone.sourceControl.bitbucketCloud.clientSecretValue` |  |  |
| `charts.drone.sourceControl.bitbucketServer.consumerKey` |  | consumerKey |
| `charts.drone.sourceControl.bitbucketServer.passwordKey` |  | password |
| `charts.drone.sourceControl.bitbucketServer.privateKey` |  | privateKey |
| `charts.drone.sourceControl.bitbucketServer.server` |  |  |
| `charts.drone.sourceControl.bitbucketServer.username` |  |  |
| `charts.drone.sourceControl.gitea.clientID` |  |  |
| `charts.drone.sourceControl.gitea.clientSecretValue` |  |  |
| `charts.drone.sourceControl.gitea.server` |  |  |
| `charts.drone.sourceControl.github.clientID` |  |  |
| `charts.drone.sourceControl.github.clientSecretValue` |  |  |
| `charts.drone.sourceControl.github.server` |  | https://github.com |
| `charts.drone.sourceControl.gitlab.clientID` |  |  |
| `charts.drone.sourceControl.gitlab.clientSecretValue` |  |  |
| `charts.drone.sourceControl.gitlab.server` |  |  |
| `charts.drone.sourceControl.gogs.server` |  |  |
| `charts.drone.sourceControl.password` |  |  |
| `charts.drone.sourceControl.provider` |  | github |
| `charts.drone.sourceControl.secret` |  |  |
| `charts.drone.sourceControl.username` |  |  |
| `charts.drone.trace` |  |  |
| `charts.external-dns._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.external-dns.domainFilters` |  |  |
| `charts.external-dns.domainFilters` |  |  |
| `charts.external-dns.zoneIdFilters` |  |  |
| `charts.gatekeeper-operator._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.gatekeeper-operator.enabled` |  |  |
| `charts.gatekeeper-operator.excludedNamespaces` |  |  |
| `charts.gatekeeper-operator.excludedNamespaces` |  |  |
| `charts.gatekeeper-operator.emitAuditEvents` |  |  |
| `charts.gatekeeper-operator.emitAdmissionEvents` |  |  |
| `charts.gatekeeper-operator.auditFromCache` |  |  |
| `charts.gatekeeper-operator.disableValidatingWebhook` |  |  |
| `charts.gatekeeper-operator.logLevel` |  |  |
| `charts.gatekeeper-operator.constraintViolationsLimit` |  |  |
| `charts.gatekeeper-operator.auditInterval` |  |  |
| `charts.gatekeeper-operator.replicas` |  |  |
| `charts.gatekeeper-operator.dataSync` |  |  |
| `charts.gatekeeper-operator.dataSync` |  |  |
| `charts.gitea.enabled` |  |  |
| `charts.gitea.adminPassword` |  |  |
| `charts.gitea.postgresqlPassword` | Once set and deployed it cannot be changed with manual intervention. |  |
| `charts.harbor._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.harbor.adminPassword` |  |  |
| `charts.harbor.core.secret` |  |  |
| `charts.harbor.core.xsrfKey` |  |  |
| `charts.harbor.enabled` |  |  |
| `charts.harbor.jobservice.secret` |  |  |
| `charts.harbor.persistence.imageChartStorage` | For reference go to https://github.com/distribution/distribution/blob/main/docs/configuration.md#storage |  |
| `charts.harbor.persistence.imageChartStorage` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.accesskey` | An AWS access key ID. |  |
| `charts.harbor.persistence.imageChartStorage.aws.secretkey` | An AWS secret key. |  |
| `charts.harbor.persistence.imageChartStorage.aws.region` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.regionendpoint` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.bucket` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.encrypt` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.keyid` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.secure` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.v4auth` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.chunksize` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.multipartcopychunksize` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.multipartcopymaxconcurrency` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.multipartcopythresholdsize` |  |  |
| `charts.harbor.persistence.imageChartStorage.aws.rootdirectory` |  |  |
| `charts.harbor.persistence.imageChartStorage.azure.accountname` |  |  |
| `charts.harbor.persistence.imageChartStorage.azure.accountkey` |  |  |
| `charts.harbor.persistence.imageChartStorage.azure.container` |  |  |
| `charts.harbor.persistence.imageChartStorage.azure.realm` |  |  |
| `charts.harbor.persistence.imageChartStorage.gcs.bucket` |  |  |
| `charts.harbor.persistence.imageChartStorage.gcs.encodedkey` |  |  |
| `charts.harbor.persistence.imageChartStorage.gcs.rootdirectory` |  |  |
| `charts.harbor.persistence.imageChartStorage.type` |  |  |
| `charts.harbor.registry.secret` |  |  |
| `charts.harbor.registry.credentials.htpasswd` |  |  |
| `charts.harbor.registry.credentials.username` |  |  |
| `charts.harbor.registry.credentials.password` |  |  |
| `charts.harbor.resources.adapter` | Compute resources for containers. |  |
| `charts.harbor.resources.adapter.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.adapter.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.adapter.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.adapter.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.adapter.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.adapter.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.chartmuseum` | Compute resources for containers. |  |
| `charts.harbor.resources.chartmuseum.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.chartmuseum.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.chartmuseum.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.chartmuseum.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.chartmuseum.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.chartmuseum.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.clair` | Compute resources for containers. |  |
| `charts.harbor.resources.clair.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.clair.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.clair.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.clair.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.clair.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.clair.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.controller` | Compute resources for containers. |  |
| `charts.harbor.resources.controller.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.controller.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.controller.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.controller.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.controller.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.controller.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.core` | Compute resources for containers. |  |
| `charts.harbor.resources.core.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.core.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.core.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.core.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.core.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.core.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.database` | Compute resources for containers. |  |
| `charts.harbor.resources.database.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.database.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.database.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.database.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.database.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.database.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.jobservice` | Compute resources for containers. |  |
| `charts.harbor.resources.jobservice.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.jobservice.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.jobservice.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.jobservice.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.jobservice.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.jobservice.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.portal` | Compute resources for containers. |  |
| `charts.harbor.resources.portal.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.portal.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.portal.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.portal.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.portal.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.portal.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.redis` | Compute resources for containers. |  |
| `charts.harbor.resources.redis.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.redis.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.redis.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.redis.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.redis.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.redis.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.registry` | Compute resources for containers. |  |
| `charts.harbor.resources.registry.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.registry.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.registry.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.registry.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.registry.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.registry.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.registry-controller` | Compute resources for containers. |  |
| `charts.harbor.resources.registry-controller.limits` | Requested resources (best effort). |  |
| `charts.harbor.resources.registry-controller.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.registry-controller.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.resources.registry-controller.requests` | Requested resources (guaranteed). |  |
| `charts.harbor.resources.registry-controller.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.harbor.resources.registry-controller.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.harbor.secretKey` |  |  |
| `charts.hello.enabled` | Hello world demo chart. When you turn this off you may also have to remove the ingress service. |  |
| `charts.httpbin.enabled` | The famous httpbin application. |  |
| `charts.ingress-azure` | A chart for Azure Application Gateway. |  |
| `charts.ingress-azure._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.ingress-azure.enabled` |  |  |
| `charts.ingress-azure.appgw` | Application Gateway. |  |
| `charts.ingress-azure.appgw.name` | A name of the Application Gateway. |  |
| `charts.ingress-azure.appgw.resourceGroup` | A name of the Azure Resource Group in which Application Gateway was created. |  |
| `charts.ingress-azure.appgw.subnetName` | A subnet of the application gateway. |  |
| `charts.ingress-azure.appgw.subnetPrefix` | A subnet in CIDR notation. |  |
| `charts.ingress-azure.appgw.subscriptionId` | The Azure Subscription ID in which Application Gateway resides. |  |
| `charts.ingress-azure.appgw.usePrivateIP` | Whether a private ip range or not. |  |
| `charts.ingress-azure.armAuth` | A service Principal secret. |  |
| `charts.ingress-azure.armAuth.secretJSON` | A service Principal secret JSON key (base64 encoded). |  |
| `charts.istio._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.istio.addonComponents.grafana.enabled` |  |  |
| `charts.istio.addonComponents.kiali.enabled` |  |  |
| `charts.istio.addonComponents.prometheus.enabled` |  |  |
| `charts.istio.addonComponents.tracing.enabled` |  |  |
| `charts.istio.autoscaling.egressgateway` | Min and max number of replicas. |  |
| `charts.istio.autoscaling.egressgateway.maxReplicas` |  |  |
| `charts.istio.autoscaling.egressgateway.minReplicas` |  |  |
| `charts.istio.autoscaling.gateway-local` | Min and max number of replicas. |  |
| `charts.istio.autoscaling.gateway-local.maxReplicas` |  |  |
| `charts.istio.autoscaling.gateway-local.minReplicas` |  |  |
| `charts.istio.autoscaling.ingressgateway` | Min and max number of replicas. |  |
| `charts.istio.autoscaling.ingressgateway.maxReplicas` |  |  |
| `charts.istio.autoscaling.ingressgateway.minReplicas` |  |  |
| `charts.istio.autoscaling.ingressgateway-auth` | Min and max number of replicas. |  |
| `charts.istio.autoscaling.ingressgateway-auth.maxReplicas` |  |  |
| `charts.istio.autoscaling.ingressgateway-auth.minReplicas` |  |  |
| `charts.istio.autoscaling.pilot` | Min and max number of replicas. |  |
| `charts.istio.autoscaling.pilot.maxReplicas` |  |  |
| `charts.istio.autoscaling.pilot.minReplicas` |  |  |
| `charts.istio.egressGateway.enabled` |  |  |
| `charts.istio.global.logging.level` |  |  |
| `charts.istio.global.mtls.enabled` |  |  |
| `charts.istio.global.proxy.resources` | Compute resources for containers. |  |
| `charts.istio.global.proxy.resources.limits` | Requested resources (best effort). |  |
| `charts.istio.global.proxy.resources.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.global.proxy.resources.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.global.proxy.resources.requests` | Requested resources (guaranteed). |  |
| `charts.istio.global.proxy.resources.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.global.proxy.resources.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.global.sds.enabled` |  |  |
| `charts.istio.meshConfig.defaultConfig` |  |  |
| `charts.istio.resources.egressgateway` | Compute resources for containers. |  |
| `charts.istio.resources.egressgateway.limits` | Requested resources (best effort). |  |
| `charts.istio.resources.egressgateway.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.egressgateway.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.egressgateway.requests` | Requested resources (guaranteed). |  |
| `charts.istio.resources.egressgateway.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.egressgateway.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.gateway-local` | Compute resources for containers. |  |
| `charts.istio.resources.gateway-local.limits` | Requested resources (best effort). |  |
| `charts.istio.resources.gateway-local.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.gateway-local.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.gateway-local.requests` | Requested resources (guaranteed). |  |
| `charts.istio.resources.gateway-local.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.gateway-local.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.ingressgateway` | Compute resources for containers. |  |
| `charts.istio.resources.ingressgateway.limits` | Requested resources (best effort). |  |
| `charts.istio.resources.ingressgateway.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.ingressgateway.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.ingressgateway.requests` | Requested resources (guaranteed). |  |
| `charts.istio.resources.ingressgateway.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.ingressgateway.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.ingressgateway-auth` | Compute resources for containers. |  |
| `charts.istio.resources.ingressgateway-auth.limits` | Requested resources (best effort). |  |
| `charts.istio.resources.ingressgateway-auth.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.ingressgateway-auth.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.ingressgateway-auth.requests` | Requested resources (guaranteed). |  |
| `charts.istio.resources.ingressgateway-auth.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.ingressgateway-auth.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.pilot` | Compute resources for containers. |  |
| `charts.istio.resources.pilot.limits` | Requested resources (best effort). |  |
| `charts.istio.resources.pilot.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.pilot.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.istio.resources.pilot.requests` | Requested resources (guaranteed). |  |
| `charts.istio.resources.pilot.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.istio.resources.pilot.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.keycloak._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.keycloak.enabled` |  | true |
| `charts.keycloak.idp.alias` |  |  |
| `charts.keycloak.idp.clientID` |  |  |
| `charts.keycloak.idp.clientSecret` |  |  |
| `charts.keycloak.postgresqlPassword` | Once set and deployed it cannot be changed with manual intervention. |  |
| `charts.keycloak.resources.keycloak` | Compute resources for containers. |  |
| `charts.keycloak.resources.keycloak.limits` | Requested resources (best effort). |  |
| `charts.keycloak.resources.keycloak.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.keycloak.resources.keycloak.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.keycloak.resources.keycloak.requests` | Requested resources (guaranteed). |  |
| `charts.keycloak.resources.keycloak.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.keycloak.resources.keycloak.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.keycloak.resources.postgresql` | Compute resources for containers. |  |
| `charts.keycloak.resources.postgresql.limits` | Requested resources (best effort). |  |
| `charts.keycloak.resources.postgresql.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.keycloak.resources.postgresql.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.keycloak.resources.postgresql.requests` | Requested resources (guaranteed). |  |
| `charts.keycloak.resources.postgresql.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.keycloak.resources.postgresql.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.keycloak.theme` |  |  |
| `charts.kubeapps.enabled` |  | true |
| `charts.kubeapps.postgresqlPassword` | Once set and deployed it cannot be changed with manual intervention. |  |
| `charts.kubernetes-external-secrets.logLevel` |  | info |
| `charts.kube-descheduler.enabled` |  | true |
| `charts.kube-descheduler.schedule` |  | */30 * * * * |
| `charts.loki._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.loki.adminPassword` |  |  |
| `charts.loki.persistence.size` |  | 20Gi |
| `charts.loki.retention.duration` |  | 24h |
| `charts.loki.retention.period` | Should be a multiple of 24h. See https://grafana.com/docs/loki/latest/operations/storage/boltdb-shipper/. | 24h |
| `charts.loki.aws` |  |  |
| `charts.loki.azure` | Missing from docs but available with this schema. |  |
| `charts.loki.azure.account_key` |  |  |
| `charts.loki.azure.account_name` |  |  |
| `charts.loki.azure.container_name` |  |  |
| `charts.loki.bigtable` |  |  |
| `charts.loki.cassandra` |  |  |
| `charts.loki.gcs` |  |  |
| `charts.loki.swift` |  |  |
| `charts.loki.local` |  |  |
| `charts.loki.storageType` |  |  |
| `charts.loki.v11StartDate` | Set this to a date just after deployment in case of an upgrade. (Otomi started at v9 with filesystem.) |  |
| `charts.nginx-ingress._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.nginx-ingress.autoscaling.enabled` |  | true |
| `charts.nginx-ingress.autoscaling.maxReplicas` |  | 10 |
| `charts.nginx-ingress.autoscaling.minReplicas` |  | 2 |
| `charts.nginx-ingress.loadBalancerIP` |  |  |
| `charts.nginx-ingress.loadBalancerRG` |  |  |
| `charts.nginx-ingress.maxBodySize` |  | 1024m |
| `charts.nginx-ingress.maxBodySizeBytes` | Needed for modsecurity. Should correspond to maxBodySize, but expressed in bytes. | 1073741824 |
| `charts.nginx-ingress.modsecurity` | Enables MOD Security functionality. |  |
| `charts.nginx-ingress.modsecurity.block` | Makes nginx block requests that are marked as violating the modsec rules. | true |
| `charts.nginx-ingress.modsecurity.enabled` |  |  |
| `charts.nginx-ingress.modsecurity.owasp` | Turns on the default OWASP rule set for modsec. See | true |
| `charts.nginx-ingress.resources` | Compute resources for containers. |  |
| `charts.nginx-ingress.resources.limits` | Requested resources (best effort). |  |
| `charts.nginx-ingress.resources.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.nginx-ingress.resources.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.nginx-ingress.resources.requests` | Requested resources (guaranteed). |  |
| `charts.nginx-ingress.resources.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.nginx-ingress.resources.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.nginx-ingress.private` | Private loadbalancer configuration. |  |
| `charts.nginx-ingress.private.enabled` | Enable to start an extra loadbalancer for private network traffic. |  |
| `charts.nginx-ingress.private.autoscaling.enabled` |  | true |
| `charts.nginx-ingress.private.autoscaling.maxReplicas` |  | 10 |
| `charts.nginx-ingress.private.autoscaling.minReplicas` |  | 2 |
| `charts.nginx-ingress.private.loadBalancerIP` |  |  |
| `charts.nginx-ingress.private.loadBalancerRG` |  |  |
| `charts.nginx-ingress.private.resources` | Compute resources for containers. |  |
| `charts.nginx-ingress.private.resources.limits` | Requested resources (best effort). |  |
| `charts.nginx-ingress.private.resources.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.nginx-ingress.private.resources.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.nginx-ingress.private.resources.requests` | Requested resources (guaranteed). |  |
| `charts.nginx-ingress.private.resources.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.nginx-ingress.private.resources.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.nginx-ingress.private.service.annotations` | A set of annotations. |  |
| `charts.nginx-ingress.private.service.annotations.patternProperties.^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` |  |  |
| `charts.nginx-ingress.service.annotations` | A set of annotations. |  |
| `charts.nginx-ingress.service.annotations.patternProperties.^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` |  |  |
| `charts.oauth2-proxy._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.oauth2-proxy.config.cookieSecret` | Cookie secret must be 128 bit base64 encoded string. |  |
| `charts.oauth2-proxy-redis` |  |  |
| `charts.oauth2-proxy-redis._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.oauth2-proxy-redis.architecture` |  | standalone |
| `charts.oauth2-proxy-redis.password` |  |  |
| `charts.oauth2-proxy-redis.resources.master` | Compute resources for containers. |  |
| `charts.oauth2-proxy-redis.resources.master.limits` | Requested resources (best effort). |  |
| `charts.oauth2-proxy-redis.resources.master.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.oauth2-proxy-redis.resources.master.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.oauth2-proxy-redis.resources.master.requests` | Requested resources (guaranteed). |  |
| `charts.oauth2-proxy-redis.resources.master.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.oauth2-proxy-redis.resources.master.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.oauth2-proxy-redis.resources.sentinel` | Compute resources for containers. |  |
| `charts.oauth2-proxy-redis.resources.sentinel.limits` | Requested resources (best effort). |  |
| `charts.oauth2-proxy-redis.resources.sentinel.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.oauth2-proxy-redis.resources.sentinel.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.oauth2-proxy-redis.resources.sentinel.requests` | Requested resources (guaranteed). |  |
| `charts.oauth2-proxy-redis.resources.sentinel.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.oauth2-proxy-redis.resources.sentinel.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.oauth2-proxy-redis.resources.slave` | Compute resources for containers. |  |
| `charts.oauth2-proxy-redis.resources.slave.limits` | Requested resources (best effort). |  |
| `charts.oauth2-proxy-redis.resources.slave.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.oauth2-proxy-redis.resources.slave.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.oauth2-proxy-redis.resources.slave.requests` | Requested resources (guaranteed). |  |
| `charts.oauth2-proxy-redis.resources.slave.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.oauth2-proxy-redis.resources.slave.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.oauth2-proxy-redis.sizes.master` | Disk size. Valid units are E|P|T|G|Ti|Gi. |  |
| `charts.oauth2-proxy-redis.sizes.sentinel` | Disk size. Valid units are E|P|T|G|Ti|Gi. |  |
| `charts.oauth2-proxy-redis.sizes.slave` | Disk size. Valid units are E|P|T|G|Ti|Gi. |  |
| `charts.otomi-api._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.otomi-api.git.branch` |  |  |
| `charts.otomi-api.git.email` |  |  |
| `charts.otomi-api.git.localPath` |  |  |
| `charts.otomi-api.git.password` |  |  |
| `charts.otomi-api.git.repoUrl` | Path to a remote git repo without protocol. Will use https to access. |  |
| `charts.otomi-api.git.user` |  |  |
| `charts.otomi-api.image.pullPolicy` |  | IfNotPresent |
| `charts.otomi-api.image.tag` |  |  |
| `charts.otomi-api.resources.api` | Compute resources for containers. |  |
| `charts.otomi-api.resources.api.limits` | Requested resources (best effort). |  |
| `charts.otomi-api.resources.api.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.otomi-api.resources.api.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.otomi-api.resources.api.requests` | Requested resources (guaranteed). |  |
| `charts.otomi-api.resources.api.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.otomi-api.resources.api.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.otomi-api.resources.tools` | Compute resources for containers. |  |
| `charts.otomi-api.resources.tools.limits` | Requested resources (best effort). |  |
| `charts.otomi-api.resources.tools.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.otomi-api.resources.tools.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.otomi-api.resources.tools.requests` | Requested resources (guaranteed). |  |
| `charts.otomi-api.resources.tools.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.otomi-api.resources.tools.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.otomi-api.tools.image.pullPolicy` |  | IfNotPresent |
| `charts.otomi-api.tools.image.tag` |  |  |
| `charts.otomi-console` |  |  |
| `charts.otomi-console._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.otomi-console.image.pullPolicy` |  | IfNotPresent |
| `charts.otomi-console.image.tag` |  |  |
| `charts.prometheus-operator._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.prometheus-operator.grafana.adminPassword` |  |  |
| `charts.prometheus-operator.prometheus.storageSize` |  |  |
| `charts.prometheus-operator.resources.grafana` | Compute resources for containers. |  |
| `charts.prometheus-operator.resources.grafana.limits` | Requested resources (best effort). |  |
| `charts.prometheus-operator.resources.grafana.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.prometheus-operator.resources.grafana.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.prometheus-operator.resources.grafana.requests` | Requested resources (guaranteed). |  |
| `charts.prometheus-operator.resources.grafana.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.prometheus-operator.resources.grafana.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.redis-shared` |  |  |
| `charts.redis-shared._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.redis-shared.architecture` |  | standalone |
| `charts.redis-shared.password` |  |  |
| `charts.redis-shared.resources.master` | Compute resources for containers. |  |
| `charts.redis-shared.resources.master.limits` | Requested resources (best effort). |  |
| `charts.redis-shared.resources.master.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.redis-shared.resources.master.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.redis-shared.resources.master.requests` | Requested resources (guaranteed). |  |
| `charts.redis-shared.resources.master.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.redis-shared.resources.master.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.redis-shared.resources.sentinel` | Compute resources for containers. |  |
| `charts.redis-shared.resources.sentinel.limits` | Requested resources (best effort). |  |
| `charts.redis-shared.resources.sentinel.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.redis-shared.resources.sentinel.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.redis-shared.resources.sentinel.requests` | Requested resources (guaranteed). |  |
| `charts.redis-shared.resources.sentinel.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.redis-shared.resources.sentinel.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.redis-shared.resources.slave` | Compute resources for containers. |  |
| `charts.redis-shared.resources.slave.limits` | Requested resources (best effort). |  |
| `charts.redis-shared.resources.slave.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.redis-shared.resources.slave.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.redis-shared.resources.slave.requests` | Requested resources (guaranteed). |  |
| `charts.redis-shared.resources.slave.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `charts.redis-shared.resources.slave.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `charts.redis-shared.sizes.master` | Disk size. Valid units are E|P|T|G|Ti|Gi. |  |
| `charts.redis-shared.sizes.sentinel` | Disk size. Valid units are E|P|T|G|Ti|Gi. |  |
| `charts.redis-shared.sizes.slave` | Disk size. Valid units are E|P|T|G|Ti|Gi. |  |
| `charts.redis-shared.enabled` |  |  |
| `charts.sitespeed._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.sitespeed.enabled` |  |  |
| `charts.sitespeed.pvc.graphite` |  |  |
| `charts.sitespeed.pvc.results` |  |  |
| `charts.sitespeed.retention` |  |  |
| `charts.sitespeed.schedule` |  |  |
| `charts.vault.enabled` |  | true |
| `charts.vault.logLevel` |  | info |
| `charts.vault.seal` | Use a KMS to encrypt and decrypt the master key |  |
| `charts.vault.seal.gcpckms.project` |  |  |
| `charts.vault.seal.gcpckms.region` |  |  |
| `charts.vault.seal.gcpckms.key_ring` |  |  |
| `charts.vault.seal.gcpckms.kmsAccount` |  |  |
| `charts.vault.seal.awskms.region` |  |  |
| `charts.vault.seal.awskms.access_key` |  |  |
| `charts.vault.seal.awskms.secret_key` |  |  |
| `charts.vault.seal.awskms.endpoint` |  |  |
| `charts.vault.seal.azurekeyvault.vault_name` |  |  |
| `charts.vault.seal.azurekeyvault.tenant_id` |  |  |
| `charts.vault.seal.azurekeyvault.client_id` |  |  |
| `charts.vault.seal.azurekeyvault.client_secret` |  |  |
| `charts.vault.storage` | Storage configuration. See https://www.vaultproject.io/docs/configuration/storage. |  |
| `charts.weave-scope._rawValues` | May define value overrides for a chart. WARNING: these values currently have no schema and can't be validated as such, and may break deployment. You are on your own here. |  |
| `charts.weave-scope.enabled` |  |  |
| `cluster.apiName` | Only used for API/UI to show in app. |  |
| `cluster.apiServer` | Used by kubectl for local deployment to target cluster. |  |
| `cluster.domainSuffix` | Domain suffix for the cluster. Also added to list of dns zones in the Otomi Console. |  |
| `cluster.entrypoint` | A Kubernetes API public IP address (onprem only). |  |
| `cluster.k8sVersion` | The cluster k8s version. Otomi supports 2 minor versions backwards compatibility from the suggested default. |  |
| `cluster.name` |  |  |
| `cluster.provider` |  |  |
| `cluster.region` | Dependent on provider. |  |
| `cluster.vpcID` | AWS only. If provided will override autodiscovery from metadata. |  |
| `customer.name` |  |  |
| `dns.zones` | Extra dns zones that the cluster can administer (see dns). Team services can use this to publish their URLs on. |  |
| `dns.zones` |  |  |
| `dns.provider` | The DNS provider managing the domains. |  |
| `dns.provider.aws.region` |  |  |
| `dns.provider.azure.cloud` | Azure Cloud |  |
| `dns.provider.azure.resourceGroup` | Azure resource group |  |
| `dns.provider.azure.hostedZoneName` |  |  |
| `dns.provider.azure.tenantId` | Azure tenant ID |  |
| `dns.provider.azure.subscriptionId` | Azure subscription ID |  |
| `dns.provider.azure.aadClientId` | Azure Application Client ID |  |
| `dns.provider.azure.aadClientSecret` | Azure Application Client Secret |  |
| `dns.provider.azure.useManagedIdentityExtension` | If you use Azure MSI, this should be set to true |  |
| `dns.provider.google.serviceAccountKey` | A service account key in json format for managing a DNS zone. |  |
| `dns.provider.google.project` |  |  |
| `home.drone` |  | slack |
| `home.email.critical` | One or more email addresses (comma separated) for critical events. |  |
| `home.email.nonCritical` | One or more email addresses (comma separated) for non-critical events. |  |
| `home.groupInterval` | How long to wait before sending a notification about new alerts that are added to a group of alerts for which an initial notification has already been sent. (Usually ~5m or more.) | 5m |
| `home.msteams.highPrio` | The low prio web hook. |  |
| `home.msteams.lowPrio` | The high prio web hook. |  |
| `home.receivers` | Notification receivers. |  |
| `home.receivers` |  |  |
| `home.repeatInterval` | How long to wait before sending a notification again if it has already been sent successfully for an alert. (Usually ~3h or more). | 3h |
| `home.slack.channel` | The Slack channel for non-critical notifications. | dev-mon-otomi |
| `home.slack.channelCrit` | The Slack channel for critical notifications. | dev-mon-otomi |
| `home.slack.url` | A Slack webhook URL. |  |
| `k8s.namespaces` |  |  |
| `k8s.namespaces.disableIstioInjection` |  |  |
| `k8s.namespaces.disablePolicyChecks` |  |  |
| `k8s.namespaces.name` |  |  |
| `kms.sops.provider` |  |  |
| `kms.sops.aws.keys` | Comma separated list of one or two ARNs to keys as defined in AWS KMS. One if used for both enc+dec. Two if one for enc, other for dec. |  |
| `kms.sops.aws.region` |  |  |
| `kms.sops.provider` |  |  |
| `kms.sops.azure.keys` | Comma separated list of one or two paths to keys as defined in Azure Keyvault. One if used for both enc+dec. Two if one for enc, other for dec. |  |
| `kms.sops.azure.tenantId` | An Azure tenant id. |  |
| `kms.sops.provider` |  |  |
| `kms.sops.google.keys` | Comma separated list of one or two paths to keys as defined in GCP KMS. One if used for both enc+dec. Two if one for enc, other for dec. |  |
| `kms.sops.google.accountJson` |  |  |
| `kms.sops.google.project` |  |  |
| `kms.sops.provider` |  |  |
| `kms.sops.vault.keys` | Comma separated list of one or two paths to keys as defined in Vault. One if used for both enc+dec. Two if one for enc, other for dec. |  |
| `kms.sops.vault.token` |  |  |
| `letsencryptCA` |  |  |
| `letsencryptRootCA` |  |  |
| `oidc` | Holds many parts used in different locations. Please see keycloak, grafana, istio and oauth-proxy as those are all consuming (parts of) these settings. |  |
| `oidc.adminGroupID` |  |  |
| `oidc.apiUrl` | Only used for grafana when Keycloak is disabled. (Not recommended because that disables authorization.) |  |
| `oidc.authUrl` | Only used for grafana when Keycloak is disabled. (Not recommended because that disables authorization.) |  |
| `oidc.clientID` |  |  |
| `oidc.clientSecret` |  |  |
| `oidc.issuer` |  |  |
| `oidc.scope` | Default values are used by keycloak. May be overridden in case keycloak is disabled. | openid email profile |
| `oidc.teamAdminGroupID` |  |  |
| `oidc.tenantID` |  |  |
| `oidc.tokenUrl` |  |  |
| `oidc.usernameClaimMapper` | Claim name used by Keycloak to identify incoming users from identity provider | ${CLAIM.email} |
| `oidc.subClaimMapper` | Select OIDC claim to be passed by Keycloak as a unique user identifier. Best to not change this from the default. | sub |
| `otomi.additionalClusters` |  |  |
| `otomi.additionalClusters.apiName` | Only used for API/UI to show in app. |  |
| `otomi.additionalClusters.apiServer` | Used by kubectl for local deployment to target cluster. |  |
| `otomi.additionalClusters.domainSuffix` | Domain suffix for the cluster. Also added to list of dns zones in the Otomi Console. |  |
| `otomi.additionalClusters.entrypoint` | A Kubernetes API public IP address (onprem only). |  |
| `otomi.additionalClusters.k8sVersion` | The cluster k8s version. Otomi supports 2 minor versions backwards compatibility from the suggested default. |  |
| `otomi.additionalClusters.name` |  |  |
| `otomi.additionalClusters.provider` |  |  |
| `otomi.additionalClusters.region` | Dependent on provider. |  |
| `otomi.additionalClusters.vpcID` | AWS only. If provided will override autodiscovery from metadata. |  |
| `otomi.adminPassword` |  | bladsdfsibla |
| `otomi.globalPullSecret` | Will be connected to each "default" service account in all otomi app namespaces. Handy for authenticating with DockerHub to avoid rate limiting. Also useful when pulling all otomi images from a private repo. (One would need to override all the images in the config first.) |  |
| `otomi.globalPullSecret.username` |  |  |
| `otomi.globalPullSecret.password` |  |  |
| `otomi.globalPullSecret.email` |  | not@us.ed |
| `otomi.globalPullSecret.server` |  | docker.io |
| `otomi.hasCloudLB` | Set this to true when an external LB exists or needs to be started (AWS ALB, Azure AppGW, Google Apigee). This will then be configured through ingress controllers. Expects existing LBs to terminate https. Currently this is only working correctly for Azure, and not for AWS and Google. AWS is close to completion. |  |
| `otomi.isHomeMonitored` | Whether this cluster is home monitored (like when under a Premium SLA). Sends criticals home. |  |
| `otomi.isManaged` | Whether masters are managed and not under control. Set this to false when onprem. | true |
| `otomi.isMultitenant` | Whether to separate team metrics and logs. Disabling this lets everybody be admin and see everything. | true |
| `otomi.mode` | The otomi-core edition. Either community edition (ce) or enterprise edition (ee). | ee |
| `otomi.pullSecret` | The pullsecret to deploy the Otomi API and Console. Requires an Otomi license. |  |
| `otomi.version` | Best pin this to a valid release version found in the repo. | latest |
| `policies` | List of policy objects used by Open Policy Agent tools (Conftest, Gatekeeper) to run policy based validation against both in-cluster Kubernetes contexts and plain Yaml resources
 |  |
| `policies.banned-image-tags.tags` |  |  |
| `policies.banned-image-tags.tags` |  |  |
| `policies.banned-image-tags.enabled` |  |  |
| `policies.container-limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `policies.container-limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `policies.container-limits.enabled` |  |  |
| `policies.psp-allowed-repos.repos` |  |  |
| `policies.psp-allowed-repos.repos` |  |  |
| `policies.psp-allowed-repos.enabled` |  |  |
| `policies.psp-host-filesystem.allowedHostPaths` |  |  |
| `policies.psp-host-filesystem.allowedHostPaths` |  |  |
| `policies.psp-host-filesystem.allowedHostPaths.pathPrefix` |  |  |
| `policies.psp-host-filesystem.allowedHostPaths.readOnly` |  |  |
| `policies.psp-host-filesystem.enabled` |  |  |
| `policies.psp-allowed-users.runAsUser` |  |  |
| `policies.psp-allowed-users.runAsUser.rule` |  |  |
| `policies.psp-allowed-users.runAsUser.ranges` |  |  |
| `policies.psp-allowed-users.runAsUser.ranges` |  |  |
| `policies.psp-allowed-users.runAsUser.ranges.min` |  |  |
| `policies.psp-allowed-users.runAsUser.ranges.max` |  |  |
| `policies.psp-allowed-users.runAsGroup` |  |  |
| `policies.psp-allowed-users.runAsGroup.rule` |  |  |
| `policies.psp-allowed-users.runAsGroup.ranges` |  |  |
| `policies.psp-allowed-users.runAsGroup.ranges` |  |  |
| `policies.psp-allowed-users.runAsGroup.ranges.min` |  |  |
| `policies.psp-allowed-users.runAsGroup.ranges.max` |  |  |
| `policies.psp-allowed-users.supplementalGroups` |  |  |
| `policies.psp-allowed-users.supplementalGroups.rule` |  |  |
| `policies.psp-allowed-users.supplementalGroups.ranges` |  |  |
| `policies.psp-allowed-users.supplementalGroups.ranges` |  |  |
| `policies.psp-allowed-users.supplementalGroups.ranges.min` |  |  |
| `policies.psp-allowed-users.supplementalGroups.ranges.max` |  |  |
| `policies.psp-allowed-users.fsGroup` |  |  |
| `policies.psp-allowed-users.fsGroup.rule` |  |  |
| `policies.psp-allowed-users.fsGroup.ranges` |  |  |
| `policies.psp-allowed-users.fsGroup.ranges` |  |  |
| `policies.psp-allowed-users.fsGroup.ranges.min` |  |  |
| `policies.psp-allowed-users.fsGroup.ranges.max` |  |  |
| `policies.psp-allowed-users.enabled` |  |  |
| `policies.psp-host-security.enabled` |  |  |
| `policies.psp-host-networking-ports.enabled` |  |  |
| `policies.psp-privileged.enabled` |  |  |
| `policies.psp-capabilities.enabled` |  |  |
| `policies.psp-capabilities.allowedCapabilities` |  |  |
| `policies.psp-capabilities.allowedCapabilities` |  |  |
| `policies.psp-capabilities.requiredDropCapabilities` |  |  |
| `policies.psp-capabilities.requiredDropCapabilities` |  |  |
| `policies.psp-forbidden-sysctls.enabled` |  |  |
| `policies.psp-forbidden-sysctls.forbiddenSysctls` |  |  |
| `policies.psp-forbidden-sysctls.forbiddenSysctls` |  |  |
| `policies.psp-apparmor.enabled` |  |  |
| `policies.psp-apparmor.allowedProfiles` |  |  |
| `policies.psp-apparmor.allowedProfiles` |  |  |
| `policies.psp-seccomp.enabled` |  |  |
| `policies.psp-seccomp.allowedProfiles` |  |  |
| `policies.psp-seccomp.allowedProfiles` |  |  |
| `policies.psp-selinux.enabled` |  |  |
| `policies.psp-selinux.seLinuxContext` |  |  |
| `policies.psp-selinux.allowedSELinuxOptions` |  |  |
| `policies.psp-selinux.allowedSELinuxOptions` |  |  |
| `policies.psp-selinux.allowedSELinuxOptions` |  |  |
| `policies.psp-selinux.allowedSELinuxOptions.level` |  |  |
| `policies.psp-selinux.allowedSELinuxOptions.role` |  |  |
| `policies.psp-selinux.allowedSELinuxOptions.type` |  |  |
| `policies.psp-selinux.allowedSELinuxOptions.user` |  |  |
| `services` |  |  |
| `services` |  |  |
| `services.authz` | Identifies a workload to authorize. |  |
| `services.authz.forwardOriginalToken` | If true istio will forward the bearer token instead of removing it from the headers. |  |
| `services.authz.workload.patternProperties.^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` |  |  |
| `services.domain` | A custom service domain name (max 64 bytes). |  |
| `services.forwardPath` | Whether to forward the path into the service, or 'terminate' it. |  |
| `services.hide` | Used by otomi console to determine wether to render it on screen or not. Only used by core services. |  |
| `services.host` | Reference to another core service name. Used by otomi console to show a variation of a core service with a different path (i.e. Loki). Only used by core services. |  |
| `services.id` | Unique identifier created by and used in API. Optional. |  |
| `services.auth` | When true the service will get it's own domain by prefixing the app name to the cluster domain. Mostly used by core apps. |  |
| `services.isShared` | When true the service will get it's own domain by prefixing the app name to the cluster domain. Mostly used by core apps. |  |
| `services.ksvc` | Details for a knative service that will be deployed and operated. |  |
| `services.ksvc` |  |  |
| `services.ksvc` |  |  |
| `services.ksvc.annotations` | A set of annotations. |  |
| `services.ksvc.annotations.patternProperties.^((([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9]){1,253}\/)?([a-z0-9A-Z]+[a-z0-9A-Z-_.]+[a-z0-9A-Z]){1,63}$` |  |  |
| `services.ksvc.podSecurityContext` | Security context for the pod. |  |
| `services.ksvc.podSecurityContext.runAsNonRoot` |  | true |
| `services.ksvc.podSecurityContext.runAsUser` |  | 1001 |
| `services.ksvc.podSecurityContext.runAsGroup` |  | 1001 |
| `services.ksvc` |  |  |
| `services.ksvc.image.pullPolicy` |  | IfNotPresent |
| `services.ksvc.image.repository` | A container image repository. |  |
| `services.ksvc.image.tag` |  | latest |
| `services.ksvc.securityContext` | Security context for the container. |  |
| `services.ksvc.securityContext.runAsNonRoot` |  | true |
| `services.ksvc.securityContext.runAsUser` |  | 1001 |
| `services.ksvc.securityContext.runAsGroup` |  | 1001 |
| `services.ksvc.resources` | Compute resources for containers. |  |
| `services.ksvc.resources.limits` | Requested resources (best effort). |  |
| `services.ksvc.resources.limits.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `services.ksvc.resources.limits.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `services.ksvc.resources.requests` | Requested resources (guaranteed). |  |
| `services.ksvc.resources.requests.cpu` | Amount of cores, or slice of cpu in millis. |  |
| `services.ksvc.resources.requests.memory` | Amount of memory. Valid units are E|P|T|G|M|K|Ei|Pi|Ti|Gi|Mi|Ki. |  |
| `services.ksvc.env.patternProperties.[a-zA-Z_]{1,}[a-zA-Z0-9_]*` |  |  |
| `services.ksvc.files` | Dictionary of absolute path > content pairs. |  |
| `services.ksvc.files.patternProperties.^[/].*` |  |  |
| `services.ksvc.secrets` | List of secret names that will have their props injected as env vars into the container. |  |
| `services.ksvc.secrets` |  |  |
| `services.ksvc.secretMounts` | Dictionary of absolute folder path > secret name. Will mount the contents of the secret in the container at the specified folder path. |  |
| `services.ksvc.secretMounts.patternProperties.^[/].*$` |  |  |
| `services.ksvc.command` |  |  |
| `services.ksvc.command` |  |  |
| `services.ksvc.args` |  |  |
| `services.ksvc.args` |  |  |
| `services.ksvc.autoCD` | NOT IN USE YET! Deploys new images based on a tagging strategy. |  |
| `services.ksvc.autoCD.semver` | Use this filter if your images tags follow semantic versioning rules (MAJOR.MINOR.PATCH). E.g.: PATCH only: "~1.1", MINOR and PATCH only "~1", ALL "*". |  |
| `services.ksvc.autoCD.tagMatcher` |  | semver |
| `services.ksvc.autoCD.glob` | Use this filter if you want to make simple non-standard patterns. E.g.: "master-v1.*.*". |  |
| `services.ksvc.autoCD.tagMatcher` |  | glob |
| `services.ksvc.containerPort` | Container port the knative pod will connect with. Leaving this empty will let knative infer the port from the container, which usually works, but might be problematic when the container does not specifically expose a port. (As is the case with nginx derived images!) |  |
| `services.ksvc.scaleToZero` | Scales to zero after 60 seconds and needs approximately 8 seconds to start back up. |  |
| `services.ksvc` | Choose this when the ks.vc is already deployed |  |
| `services.ksvc.predeployed` | Has this service been predeployed? Otherwise otomi will start it with the configuration given. | true |
| `services.logo` | Used by otomi-console as an override mechanism to display another logo. |  |
| `services.logo.name` |  |  |
| `services.name` | Short name. Will be used for generation of knative service name, as well as service URL. |  |
| `services.namespace` | A kubernetes namespace. Only used by core services, so should be disallowed for non-admins. |  |
| `services.ownHost` | When true the service will get it's own domain by prefixing the app name to the team domain. Mostly set to true. This will probably be removed soon. | true |
| `services.path` | Used by otomi-console to render a path for the app. Only used by core services. |  |
| `services.paths` |  |  |
| `services.paths` | Path mapping to only route certain paths to the service. This allows micro services to operate on the same domain and port.
When left empty all paths will go to this service.
 |  |
| `services.port` | Points to the backing k8s service (only used when 'svc' is set). |  |
| `services.svc` | When given a backing k8s service is expected to be deployed with this name, which will be exposed through this team service. |  |
| `services.tlsPass` | Will pass the request to the backing service without TLS termination. |  |
| `services.type` | Will determine the ingress routing. | public |
| `smtp.auth_identity` |  |  |
| `smtp.auth_password` |  |  |
| `smtp.auth_secret` |  |  |
| `smtp.auth_username` |  |  |
| `smtp.from` | The "from" address. Defaults to alerts@$clusterDomain. |  |
| `smtp.hello` |  |  |
| `smtp.smarthost` | The smtp host:port combination. |  |
| `sops` | DON'T EDIT THIS YOURSELF! This is a SOPS governed property. Exists here only to avoid warnings in console. |  |