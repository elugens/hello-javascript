// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Pass Your Next Front-end Phone Interview',
  tagline: 'A Complete Archive of JavaScript Interview Questions and Answers',
  url: 'https://www.hellojavascript.info',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'elugens', // Usually your GitHub org/user name.
  projectName: 'hello-javascript', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/elugens/hello-javascript/edit/main/',
        },
        blog: {
          blogTitle: 'Hello, JavaScript!',
          blogDescription: 'HelloJavaScript Blog Posts',
          postsPerPage: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/elugens/hello-javascript/edit/main/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Hello JavaScript.`,
          },
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // annoucementBar is set to close false by default
      announcementBar: {
        id: 'support_us',
        content:
          '<a target="_blank" rel="noopener noreferrer" href="https://buymeacoffee.com/hellojs"><strong>Buy Me a Coffee!</strong></a>',
        backgroundColor: '#fbbf24',
        textColor: '#000000',
        isCloseable: true,
      },
      // hideable sidebar true | false
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
      navbar: {
        // title: 'My Site',
        hideOnScroll: false,
        style: 'dark',
        logo: {
          alt: 'HelloJavaScript.info Logo',
          src: 'img/hellojs-dark-logo-pro.svg',
          srcDark: 'img/hellojs-dark-logo-pro.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Get Started',
            className: 'get__started',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://patreon.com/hellojavascript',
            label: 'Patreon',
            position: 'right',
          },
          {
            href: 'https://github.com/elugens/hello-javascript',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'JavaScript Basics',
                to: '/docs/general-javascript-questions/javascript-basics/basic-javascript-questions-answers',
              },
              {
                label: 'JavaScript Fundamentals',
                to: '/docs/general-javascript-questions/javascript-fundamentals/code-structure',
              },
              {
                label: 'The "Script" Tag',
                to: '/docs/general-javascript-questions/javascript-fundamentals/the-script-tag',
              },
              {
                label: 'Coding Style',
                to: '/docs/general-javascript-questions/code-quality/coding-style',
              },
            ],
          },
          {
            title: 'Dev Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/javascript',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/EKxqAtPprC',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/elugens/hello-javascript',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://fb.me/hellojavascriptinfo',
              },
              {
                label: 'Facebook Discussion',
                href: 'https://www.facebook.com/groups/hellojavascript',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hellojavascript',
              },
            ],
          },
          {
            title: 'More Resources',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Tech Interview Handbook',
                href: 'https://techinterviewhandbook.org/',
              },
              {
                label: 'Site Map',
                href: 'https://www.hellojavascript.info/sitemap.xml',
              },
            ],
          },
        ],
        logo: {
          alt: 'HelloJavaScript Logo',
          src: 'img/hello-javascript-logo-dark-plain.svg',
          href: '/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} HelloJavaScript.info . Built with Docusaurus. Developed by Elugens`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // LIVE CODE BLOCKS IMPLEMENTATION
  themes: ['@docusaurus/theme-live-codeblock'],

  // plugins config
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/icon.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(27, 27, 27)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/icon.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/icon.svg',
            color: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/icon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#fbbf24',
          },
        ],
      },
    ],
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        // ... Your options.
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: 'en',
        searchResultLimits: 20,

        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};

module.exports = config;
