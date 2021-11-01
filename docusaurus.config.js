// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

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
          editUrl: 'https://github.com/elugens/hello-javascript/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/elugens/hello-javascript/edit/main/',
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
                href: 'https://github.com/elugens/hello-javascript',
              },
            ],
          },
        ],
        logo: {
          alt: 'HelloJavaScript Logo',
          src: 'img/hello-javascript-logo-dark-plain.svg',
          href: '/',
        },
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
