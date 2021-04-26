/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CodeDocs 编程文档',
  tagline: 'CodeDocs 编程文档 -- 这是一些技术人的编程文档',
  url: 'http://docs.yaoyuan.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chuyaoyuan', // Usually your GitHub org/user name.
  projectName: 'code-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn','en'],
  },
  themeConfig: {
    navbar: {
      title: 'CodeDocs 编程文档',
      logo: {
        alt: 'CodeDocs 编程文档',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro-docs',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/chuyaoyuan/code-docs',
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
              label: 'CodeDocs',
              to: '/docs/intro-docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
        {
          title: 'Development team ',
          items: [
            {
              label: 'chuyaoyuan',
              href: 'https://github.com/chuyaoyuan/code-docs',
            },
            {
              label: 'zhangbohou',
              href: 'https://github.com/chuyaoyuan/code-docs',
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
              href: 'https://github.com/chuyaoyuan/code-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
