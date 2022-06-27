module.exports = {
  mainSidebar: {
    "Installing Otomi": [
      "inst-overview",
      "inst-prerequisites",
      "inst-optional",
      "inst-chart",
      "activation",
      "inst-switch-to-dns",
    ],
    "Otomi Console": [
      "ui-overview",
      {
        Platform: [
          "ui-apps",
          "ui-shortcuts",
          "ui-clusters",
          "ui-policies",
          "ui-teams",
          "ui-all-services",
          "ui-all-jobs",
          "ui-settings",
        ],
      },
      "ui-deploy-changes",
      {
        Team: [
          "ui-team-apps",
          "ui-team-shortcuts",
          "ui-team-services",
          "ui-team-jobs",
          "ui-team-secrets",
          "ui-team-settings",
        ],
      },
    ],
    "Otomi Apps": [
      "app-argocd",
      "app-alertmanager",
      "app-certmanager",
      "app-drone",
      "app-external-dns",
      "app-gitea",
      "app-grafana",
      "app-harbor",
      "app-keycloak",
      "app-knative",
      "app-kubeapps",
      "app-loki",
      "app-vault",
      "app-gatekeeper",
      "app-ingress-nginx",
      "app-prometheus",
    ],
    "Otomi CLI": [
      "cli-overview",
      "cli-working-with",
      "inst-cli",
      {
        "CLI Commands": [
          "cli-apply",
          "cli-bash",
          "cli-bootstrap",
          "cli-check-policies",
          "cli-commit",
          "cli-decrypt",
          "cli-destroy",
          "cli-diff",
          "cli-encrypt",
          "cli-lint",
          "cli-pull",
          "cli-rotate-keys",
          "cli-status",
          "cli-sync",
          "cli-template",
          "cli-test",
          "cli-validate-templates",
          "cli-validate-values",
          "cli-values",
          "cli-x",
        ],
      },
    ],
    // Tutorials: [
    //   "tutorial-overview",
    //   "tutorial-1-basic-install",
    //   "tutorial-3-push-harbor",
    //   "tutorial-4-create-svc",
    //   "tutorial-5-create-ksvc",
    //   "tutorial-6-expose-svc",
    //   "tutorial-7-create-secret",
    //   "tutorial-8-add-secret",
    //   "tutorial-9-use-secret",
    //   "tutorial-10-create-ksvc-otomi",
    // ],
    SRE: [
      "sre-overview",
      "sre-daily",
      "sre-troubleshooting",
      {
        "Known Issues": [
          "ki-overview",
          "ki-cli",
          "ki-harbor",
          "ki-istio",
          "ki-loki",
        ],
      },
      "lm-upgrades",
    ],
    // Reference: [
    //   'ref-app-suite',
    //   {
    //     type: 'link',
    //     label: 'Values Schema',
    //     href: '/schema-viewer',
    //   },
    // ],
    // FAQ: ['faq'],
  },
};
