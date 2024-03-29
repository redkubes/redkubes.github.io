---
slug: decrypt
title: otomi decrypt
sidebar_label: otomi decrypt
---

`otomi decrypt [options]`

## Description

Decrypts file(s), given as arguments, or any file matching `secrets.*.yaml` in the values repository

## Options

| Option                      | Description            | Value Type                                        | Default |
| --------------------------- | ---------------------- | ------------------------------------------------- | ------- |
| `--log-level`               |                        | `fatal, error, warn, info, verbose, debug, trace` | `warn`  |
| `-s`, `--skip-cleanup`      |                        | `[boolean]`                                       | `false` |
| `--ni`, `--non-interactive` | Same as setting env.CI | `[boolean]`                                       | `false` |
| `-v`, `--verbose`           |                        |                                                   | `count` |
| `--ni`, `--non-interactive` | Same as setting env.CI | `[boolean]`                                       | `false` |
| `-h`, `--help`              | Show help              |                                                   |         |
