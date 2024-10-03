// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Node 9X',
  tagline: 'Trusted Node Operator',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://node9x.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Node 9X', // Usually your GitHub org/user name.
  projectName: 'chaos-mesh.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-T31S4LR9LL',
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://service.node9x.com',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://explorer.node9x.com',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: './src/styles/custom.css',
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: '/img/chaos-mesh-social-preview.png',
    algolia: {
      appId: '3BY0S3HQX6',
      apiKey: '99bb3af44d57f0e8f6d7e019d7e2c2d7',
      indexName: 'chaos-mesh',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Node 9X',
      logo: {
        alt: 'Node 9X',
        src: 'img/logos/logo-mini.svg',
        srcDark: 'img/logos/logo-mini-white.svg',
      },
      items: [
        { to: 'docs', label: 'Documentation' },
        {
          to: 'blog',
          label: 'Explorer',
        },
        {
          href: 'https://t.me/DogWalter',
          label: 'Community Group',
        },
        {
          href: 'https://t.me/Oxchicharito',
          className: 'header-telegram-link',
          'aria-label': 'Telegram',
          position: 'right',
        },
        {
          href: 'https://github.com/0xChicharito',
          className: 'header-github-link',
          'aria-label': 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `
        <p style="font-weight: 500;">Copyright © From Node 9X With Love 💖 ${new Date().getFullYear()} </p>
      `,
       },
    prism: {
      theme: prismThemes.github,
      darkTheme: {
        plain: prismThemes.vsDark.plain,
        styles: [
          ...prismThemes.vsDark.styles,
          {
            types: ['function', 'keyword'],
            style: {
              color: '#f25c7c',
            },
          },
        ],
      },
      additionalLanguages: ['bash'],
    },
  },
  plugins: [
    './docusaurus-tailwind-v3',
    ['@gracefullight/docusaurus-plugin-microsoft-clarity', { projectId: 'lggqck9srz' }],
  ],
}

export default config
