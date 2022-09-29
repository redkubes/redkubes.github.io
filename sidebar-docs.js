module.exports = {
  mainSidebar: {
    "Installation": [
      "installation/get-started",
      "installation/prerequisites",
      "installation/optional",
      "installation/chart",
      "installation/activation",
    ],
   "For Ops": [
      {
        "Otomi Console": [
          "for-ops/console/overview",
          "for-ops/console/apps",
          "for-ops/console/shortcuts",
          "for-ops/console/clusters",
          "for-ops/console/policies",
          "for-ops/console/teams",
          "for-ops/console/services",
          "for-ops/console/jobs",
          {
            "Settings": [
              "for-ops/console/settings/cluster",
              "for-ops/console/settings/otomi",
              "for-ops/console/settings/key-management",
              "for-ops/console/settings/alerts",
              "for-ops/console/settings/co-monitoring",
              "for-ops/console/settings/azure",
              "for-ops/console/settings/dns",
              "for-ops/console/settings/ingress",
              "for-ops/console/settings/oidc",
              "for-ops/console/settings/smtp",
              "for-ops/console/settings/backup",
            ],
          },
        ],
      },
      {
        "How to": [
          "for-ops/how-to/ingress-classes",
          "for-ops/how-to/switch-to-dns",
        ],
      },
      {
        "Otomi CLI": [
          "for-ops/cli/overview",
          "for-ops/cli/working-with",
          "installation/cli",
          {
            "CLI Commands": [
              "for-ops/cli/apply",
              "for-ops/cli/bash",
              "for-ops/cli/bootstrap",
              "for-ops/cli/check-policies",
              "for-ops/cli/commit",
              "for-ops/cli/decrypt",
              "for-ops/cli/destroy",
              "for-ops/cli/diff",
              "for-ops/cli/encrypt",
              "for-ops/cli/lint",
              "for-ops/cli/pull",
              "for-ops/cli/rotate-keys",
              "for-ops/cli/status",
              "for-ops/cli/sync",
              "for-ops/cli/template",
              "for-ops/cli/test",
              "for-ops/cli/validate-templates",
              "for-ops/cli/validate-values",
              "for-ops/cli/values",
              "for-ops/cli/x",
            ],
          },
        ],
      },
      {
        "SRE": [
          "for-ops/sre/overview",
          "for-ops/sre/daily",
          "for-ops/sre/upgrades",
          "for-ops/sre/troubleshooting",
        ],
      },
      {
        "Known Issues": [
          "for-ops/known-issues/overview",
          "for-ops/known-issues/cli",
          "for-ops/known-issues/harbor",
          "for-ops/known-issues/istio",
          "for-ops/known-issues/loki",
        ],
      },
    ],
    "For Devs": [
      {
        "Otomi Console": [
          "for-devs/console/apps",
          "for-devs/console/shortcuts",
          "for-devs/console/services",
          "for-devs/console/jobs",
          "for-devs/console/secrets",
          "for-devs/console/settings",
        ],
        "Get started": [
          "for-devs/get-started/intro",
          "for-devs/get-started/part-1",
          "for-devs/get-started/part-2",
          "for-devs/get-started/part-3",
          "for-devs/get-started/part-4",
          "for-devs/get-started/part-5",
          "for-devs/get-started/part-6",
          "for-devs/get-started/part-7",
          "for-devs/get-started/part-8",
          "for-devs/get-started/part-9",
          "for-devs/get-started/part-10",
          "for-devs/get-started/part-11",
          "for-devs/get-started/part-12",

        ],
      },
    ],
    "For CISOs": [
      "for-ciso/overview",
    ],
    "Otomi Apps": [
      "apps/alertmanager",
      "apps/argocd",
      "apps/certmanager",
      "apps/drone",
      "apps/external-dns",
      "apps/gatekeeper",
      "apps/gitea",
      "apps/grafana",
      "apps/harbor",
      "apps/ingress-nginx",
      "apps/istio",
      "apps/jaeger",
      "apps/keycloak",
      "apps/knative",
      "apps/kubeapps",
      "apps/kubeclarity",
      "apps/loki",
      "apps/prometheus",
      "apps/vault",
      "apps/velero",
    ],
  },
};
