---
slug: installation/chart/
title: Install with Chart
---

# Use Helm 3 to install Otomi.

## Prerequisites 

* A Kubernetes cluster version 1.18+
* [Helm 3.0+](https://helm.sh/docs/intro/install/) 
* Git
* values.yaml that contains all configuration about kubernetes cluster and cloud provider resources like DNS or KMS. See  [configuration](#configuring) below for more details. 


## Installing via Helm repository 

You can install otomi using otomi helm repository. You don't need to download the otomi source code using this method. 
### Adding otomi helm repository 

```bash 
helm repo add otomi-repo https://otomi.io/otomi-core
helm repo update
```

See [helm repo](https://helm.sh/docs/helm/helm_repo/) for command documentation.

### Installing the Chart
With this command you install the otomi chart with the name my-otomi-release and with the values that you prepared in your values.yaml file. (my-otomi-release is a custom name that you choose.)

```bash 
helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi
```

You can install specific version of the otomi chart. Visit [this page](https://github.com/redkubes/otomi-core/releases) for the list of all versions.  
```bash 
helm install -f /path/to/values.yaml my-otomi-release otomi-repo/otomi --version 0.1.4-rc6
```

See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation.

## Installing via the chart source code 
As an alternative method, you can clone the otomi-core source code from the [Github](https://github.com/redkubes/otomi-core) and install otomi using the chart source code. 

### Downloading the chart source 

```bash 
git clone https://github.com/redkubes/otomi-core.git
cd otomi-core 
```

### Installing otomi from the chart source 
With this command you install the otomi chart with the name my-otomi-release and with the values that you prepared in your values.yaml file. (my-otomi-release is a custom name that you choose.)

```bash 
helm install -f /path/to/values.yaml my-otomi-release chart/otomi 
``` 

## Uninstalling the Chart

```bash 
helm uninstall my-otomi-release
```
## Configuration

See [Customizing the Chart Before Installing](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing). To see all configurable options with detailed comments, visit the chart's [values.yaml](https://github.com/redkubes/otomi-core/blob/master/chart/otomi/values.yaml), or run these configuration commands:

```bash 
helm show values otomi-repo/otomi
```

### Required values

The following table lists the configurable parameters of Otomi chart and all required, optional and default values

| Parameter | Description               | Default |
| --------- | ------------------------- | ------- |
| `image`   | The otomi-core image name |         |

### Optional values

| Parameter | Description               | Default |
| --------- | ------------------------- | ------- |
| `image`   | The otomi-core image name |         |
