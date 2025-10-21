import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Fluvial-Geomorphology', // Site title displayed in the browser tab
  tagline: 'Fluvial-Geomorphology', // Short description shown in meta tags
  favicon: 'icon.png', // Path to site favicon

  future: {
    v4: true, // Enables compatibility with upcoming Docusaurus v4 features
  },

  url: 'https://riverscapes.github.io', // The base URL of your site (no trailing slash)
  baseUrl: '/Fluvial-Geomorphology/', // The sub-path where your site is served (used in GitHub Pages)

  onBrokenLinks: 'throw', // Throw an error on broken links
  onBrokenMarkdownLinks: 'warn', // Warn instead of throwing for broken markdown links

  i18n: {
    defaultLocale: 'en', // Default language
    locales: ['en'], // Supported languages
  },

  themes: ['@riverscapes/docusaurus-theme'], // Shared custom theme used across sites

  presets: [
    [
      'classic', // Docusaurus classic preset for docs/blog
      {
        gtag: {
          trackingID: 'G-XXXXXXXXX',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts', // Path to sidebar config
          routeBasePath: '/', // Serve docs at site root
          editUrl: 'https://github.com/Riverscapes/Fluvial-Geomorphology/tree/main/docs/',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'images/logo.png', // Social sharing image

    algolia: {
      // The application ID provided by Algolia
      appId: '4TGS8ZPIMY',

      // Public API key: it is safe to commit it
      apiKey: 'd084a7919fe7b5940d7125f14221eaca',

      indexName: 'riverscapes.github.io/Fluvial-Geomorphology',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/",
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,

      //... other Algolia params
    },

    navbar: {
      title: 'Fluvial Geomorphology', // Navbar title
      logo: {
        alt: 'FLUVIAL Logo',
        src: 'images/logo.png',
      },
      items: [
        // { to: '/menu', label: 'MENU HERE', position: 'left' },
        {
          href: 'https://github.com/Riverscapes/Fluvial-Geomorphology', // External GitHub link
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          // Note that this NEEDS to match what's in the default template or we get another column
          title: 'User Resources',
          items: [
            {
              label: 'Search the Data Exchange',
              href: 'https://data.riverscapes.net/',
            },
            {
              label: 'Developers & Code Repository',
              href: 'https://github.com/Riverscapes/Fluvial-Geomorphology',
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github, // Code block theme for light mode
      darkTheme: prismThemes.dracula, // Code block theme for dark mode
    },
  } satisfies Preset.ThemeConfig,
}

export default config
