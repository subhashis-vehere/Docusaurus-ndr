// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vehere NDR Product Guide',
  tagline: 'Detect. Investigate. Understand. Respond.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.vehere.com',
  baseUrl: '/',

  organizationName: 'vehere',
  projectName: 'ndr-product-guide',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'VEHERE',
        logo: {
          alt: 'Vehere Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Overview', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/reference/release-notes',
            label: "What's New",
            position: 'left',
          },
          {
            href: 'https://vehere.com',
            label: 'vehere.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Product Overview', to: '/docs/overview/what-is-ndr'},
              {label: 'Threat Detection', to: '/docs/threat-detection/signature-detection'},
              {label: 'Integrations', to: '/docs/integrations/siem'},
              {label: 'Architecture & Deployment', to: '/docs/architecture-deployment/high-availability'},
            ],
          },
          {
            title: 'Reference',
            items: [
              {label: 'Release Notes', to: '/docs/reference/release-notes'},
            ],
          },
          {
            title: 'Vehere',
            items: [
              {label: 'vehere.com', href: 'https://vehere.com'},
            ],
          },
        ],
        copyright: `Vehere NDR Product Guide · Documentation Version 1.8.3`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: undefined,
    }),
};

export default config;
