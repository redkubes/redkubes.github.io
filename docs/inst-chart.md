---
slug: installation/chart/
title: Install with Chart
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

### Required values

The following table lists the configurable parameters of Otomi chart and all required, optional and default values:

| Parameter          | Description               | Default       |
| ------------------ | ------------------------- | ------------- |
| `image.repository` | The otomi-core image name | `otomi/core`  |
| `image.tag`        | The otomi-core image tag  | `latest`      |
| `image.pullPolicy` | The image pull policy     | `IfNotExists` |
