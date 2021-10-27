// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PASS YOUR NEXT JAVASCRIPT INTERVIEW',
  tagline: 'The biggest archive of Javascript questions and answers online.',
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
          editUrl:
            'https://github.com/elugens/hello-javascript/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/elugens/hello-javascript/edit/main/website/blog/',
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
          src: 'img/hello-javascript-logo-dark-plain.svg',
          srcDark: 'img/hello-javascript-logo-dark-plain.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Q&A',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/elugens/hello-javascript',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/javascript',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/hellojavascript',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HelloJavaScript.info . Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // LIVE CODE BLOCKS IMPLEMENTATION
  themes: ['@docusaurus/theme-live-codeblock'],
};

module.exports = config;
