---
slug: deployment
title: Deployment
---

## 1. Bootstrapping

Otomi works with versioned tooling that is compatible with the target cluster, so it needs to be told which cloud and cluster to operate on. The `$CLOUD` and `$CLUSTER` environment variables are used to specify the cloud and cluster you wish to target. As you learned in the [configuration](configuration) section, the main cluster configuration is stored in `env/clusters.yaml`, and env variables in `env/clouds/$CLOUD/$CLUSTER/.env`.

In the demo values all the clusters are disabled, except `google/demo` (which is the `id` of the cluster). In order to target it set the variables:

```bash
export CLOUD=google CLUSTER=demo
```

This will load the cluster's env file and export the variable `$K8S_CONTEXT` which represents a context in your `$KUBECONFIG` file. Make sure it is correctly set in `env/clouds/$CLOUD/$CLUSTER/.env`. In case you used our `bin/create-gke-cluster.sh` script to start a GKE cluster it will be correct and have the following:

```bash
export K8S_CONTEXT="otomi-gke-demo"
```

We can now bootstrap the versioned artifacts for our target cluster:

```bash
otomi bootstrap
```

## 2. Deploying with the cli

### Charted vs uncharted resources

The output manifests generated by otomi are deployed in two ways:

- Uncharted: some base manifests are applied directly with `kubectl apply`
- Charted: manfests that are packaged up in helm charts.

Ideally, we would like to deploy as helm chart as it has [many benefits](https://www.google.nl/search?q=benefits+of+helm+chart) such as rollback. But in some cases we can't or we don't wish to. The reasons for that are the following:

1. Some resources we don't want governed by charts (as charts might get accidentally removed, erasing everything that was deployed with it).
2. Some existing resources have to be patched (like pull secrets in service accounts), which helmfile won't do as it will not modify existing resources not annotated to be under control by a chart.
3. Some resources need to exist before the charts are deployed (such as CRDs).

The manifests that are currently not charted are:

- `k8s/base` (unparameterized, mostly rbac roles)
- `values/cloud` (applies cloud specific "normalization" patterns, such as for storageclasses)
- `values/k8s` (team resources, such as namespaces, service accounts, pull secrets)

### Working with uncharted resources

Currently we don't have any subcommand that only works on uncharted resources, but we have the following commands that target the entire bundle.

- `otomi test`: does a dry run, showing all manifests that will be deployed, and will also show any errors in the output manifests.
- `otomi deploy`: deploys all the manifests (uncharted first, then charted)

So after doing `otomi test`, if all looks ok, go ahead and do the initial deployment of all resources:

```bash
otomi deploy
```

This command executes two stages (please see `bin/deploy.sh`). The first stage will deploy all uncharted resources with `kubectl apply`, and the second stage will deploy all the charted resources with `helmfile apply`.

Whenever you add a team, or change or add to these uncharted resources, you have to run `otomi deploy` to apply them. When you let Drone do the syncing for you, it will invoke that command to synchronize the cluster.

### Working with charted resources

During development iterations you will probably not touch uncharted resources often, but instead you will add features in charts.

Otomi has these subcommands that only target charted resources:

```bash
otomi (diff|apply|sync|template)
```

You can always target a single chart like this:

```bash
otomi (diff|apply|sync|template) -l name=prometheus-operator
```

(For a list of all supported flags to use those subcommands, we defer to the [helmfile documentation](https://github.com/roboll/helmfile), as those are deferred to the helmfile cli.)

Let's do a diff of all the charts that are enabled:

```bash
otomi diff
```

### Need to know quirks

Whenever you modify resources without using helm, its internal bookkeeping (the versioned secrets in the namespaces) will not change, and any subsequent `otomi apply` commands will not modify anything. If you notice this, and want to overwrite with the output manifests, you can use `otomi sync`, which will skip doing a diff, and instead apply all charted manifests as a new version.

## 3. GitOps syncing (optional)

After initial deployment, to enable Continuous Deployment of this repo from within Drone (running in the cluster), for each cluster:

1. Login to Drone and activate the values repo to sync with: https://drone.demo.gke.yourdoma.in/
2. Choose the drone pipeline file to use: `.env/clouds/(azure|google|aws|onprem)/$CLUSTER/.drone.yml` and press save.
3. (Optional) Configure the encryption related secrets as referred to in the [configuration](configuration) section:
   - Google KMS: Set `GCLOUD_SERVICE_KEY` with the contents of the service account json file.
   - Aws KMS: Set `AWS_SECRET_ACCESS_KEY` and `AWS_ACCESS_KEY_ID` to an account that has access.
   - Azure: provide `AZURE_TENANT_ID`, `AZURE_CLIENT_ID`, `AZURE_CLIENT_SECRET` and `AZURE_ENVIRONMENT`.

Sync is now live, and every git change in the values repo is applied by each cluster's Drone.

## 4. Committing values

When you are not using Otomi Enterprise Edition, or are doing development, you will operate on values directly and have to commit them manually:

```bash
otomi commit
```

This will detect any version changes and generate new Drone pipelines, and then commit all files with a standardized message "Manual commit". (We believe all values repo configuration changes are equally meaningful and don't need explicit commit messages.) Directly doing a `git commit` is discouraged with a git hook saying so, but whenever you did not touch any versions in `env/clusters.yaml` you may bypass with `git commit -m "Manual commit" --no-verify` to save development time.

This will then trigger the pipeline of any [configured Drone](https://drone.demo.gke.yourdoma.in/) (if you followed the previous step).