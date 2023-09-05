module.exports = {
  mainSidebar: {
    "Getting Started": [
      "get-started/prerequisites",
      "get-started/installation",
      "get-started/activation",
      "for-devs/get-started/overview",
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
          "for-ops/console/projects",
          "for-ops/console/builds",
          "for-ops/console/secrets",
          "for-ops/console/workloads",
          "for-ops/console/services",
          "for-ops/console/backups",
          "for-ops/console/shell",
          {
            Settings: [
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
        "How To": [
          "for-ops/how-to/ingress-classes",
          "for-ops/how-to/use-team-admin",
          "for-ops/how-to/core-only",
          "for-ops/how-to/install-with-dns-aws",
        ],
      },
      {
        "Otomi CLI": [
          "for-ops/cli/installation",
          "for-ops/cli/deploying",
          "for-ops/cli/known-issues",
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
        SRE: [
          "for-ops/sre/overview",
          "for-ops/sre/daily",
          "for-ops/sre/upgrades",
          "for-ops/sre/troubleshooting",
        ],
      },
    ],
    "For Devs": [
      {
        "Otomi Console": [
          "for-devs/console/apps",
          "for-devs/console/shortcuts",
          "for-devs/console/projects",
          "for-devs/console/builds",
          "for-devs/console/workloads",
          "for-devs/console/services",
          "for-devs/console/secrets",
          "for-devs/console/shell",
          "for-devs/console/deploy-changes",
          "for-devs/console/settings",
        ],
        "Get Started With Otomi": [
          "for-devs/get-started/overview",
          "for-devs/get-started/lab-1",
          "for-devs/get-started/lab-2",
          "for-devs/get-started/lab-3",
          "for-devs/get-started/lab-4",
          "for-devs/get-started/lab-5",
          "for-devs/get-started/lab-6",
          "for-devs/get-started/lab-7",
          "for-devs/get-started/lab-8",
          "for-devs/get-started/lab-10",
          "for-devs/get-started/lab-11",
          "for-devs/get-started/lab-12",
          "for-devs/get-started/lab-13",
          "for-devs/get-started/lab-24",
          "for-devs/get-started/lab-15",
          "for-devs/get-started/lab-17",
          "for-devs/get-started/lab-18",
          "for-devs/get-started/lab-19",
          "for-devs/get-started/lab-20",
          "for-devs/get-started/lab-21",
          "for-devs/get-started/lab-22",
          "for-devs/get-started/lab-23",
          "for-devs/get-started/lab-25",
        ],
      },
    ],
    // "For CISOs": ["for-ciso/overview"],
    "Otomi Applications": [
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
      "apps/minio",
      "apps/prometheus",
      "apps/thanos",
      "apps/trivy",
      "apps/tekton",
      "apps/vault",
      "apps/velero",
    ],
    "Tutorials": [
      "tutorials/overview",
      "tutorials/tutorial-1",
    ],
  },
};
