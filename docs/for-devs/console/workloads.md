---
slug: workloads
title: Team Workloads
sidebar_label: Workloads
---

<!-- ![Console: new service](img/team-services.png) -->

A Workload in Otomi is a self-service feature for:

- Deploying Kubernetes workloads
  * A regular Kubernetes deployment with HPA
  * A Knative service
- Automatically create the ArgoCD resources to deploy the workload in a GitOps way
- Manage the custom values of the workloads in Git

:::info
The first phase of the workloads feature only supports deploying workloads using a provided Helm chart. In the second phase, you can also use Otomi chart templates to deploy different workload types.
:::

## Create a Workload

1. Enter a name for the workload
2. Enter the URL to the Git repo containing the Helm Chart or a Helm repository
3. Optionally (only when using a Git repo) add the relative directory path within the Git repository. Absolute paths cause errors.
4. Optionally (only when using a Chart registry) add the name of the Helm chart
5. Enter the revision. In case of using a Git repo, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of using a Chart repository, this is a semver tag for the Chart's version
6. Click `Submit`

After submitting the new workload specs, the values editor will be shown. Here you can edit the chart values.

1. Click on `Edit`
2. Add your values (or leave empty to use chart default values)
3. Click `Submit`

Now click on `Deploy Changes`

After a few minutes, Otomi will have created all the needed ArgoCD resources to deploy your workload. In the workloads list, click on the `Application` link of your workload to see the status of your workload.

The values of a workload can be changed at any time. Changes will automatically be deployed.
