---
slug: backups
title: Platform - Backups
sidebar_label: Backups
---

:::info
To enable this feature, first make sure [Velero](../../apps/velero.md) is activated.
:::

All known Builds on the platform are listed here. Builds can be sorted based on:

| Property      | Description                                            |
| ------------- | ------------------------------------------------------ |
| Name          | The name of the backup                                 |
| Schedule      | When the backup is scheduled to run                    |
| Team          | The name of the Team responsible for the backup        |

Follow the instructions [here](../../for-devs/console/backups.md) to create a backup.

Know that teams can only schedule backups of PVCs, but they can not restore backups. Backup schedules and backups are created in the velero namespace and teams don't have access to this namespace.