module.exports = {
  mainSidebar: {
    Installation: ['inst-overview', 'inst-prerequisites', 'inst-setup', 'inst-configuration', 'inst-deployment'],
    'Otomi Console': [
      'adm-overview',
      'adm-configuring-apps',
      'adm-configuring-clusters',
      'adm-configuring-teams',
      'adm-configuring-services',
      'adm-settings',
      'adm-deploy-changes',
    ],
    Troubleshooting: ['ts-overview', 'ts-cli', { Apps: ['ts-harbor'] }],
    'Lifecycle Management': ['lm-overview', 'lm-upgrades'],
    // Reference: [
    //   'ref-app-suite',
    //   {
    //     type: 'link',
    //     label: 'Values Schema',
    //     href: '/schema-viewer',
    //   },
    // ],
    FAQ: ['faq'],
  },
}