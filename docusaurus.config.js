/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'CodeDocs 编程文档',
  tagline: 'CodeDocs 编程文档 -- 这里是一些技术人的编程文档',
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
    algolia: {
      apiKey: '204335ce5ba2700fd04046b290498627',
      indexName: 'code-docs',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: see doc section below
      appId: 'D8PEAPGLZ3',
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
    },
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
          title: '文档',
          items: [
            {
              label: 'CodeDocs',
              to: '/docs/intro-docs',
            },
          ],
        },
        {
          title: '第三方链接',
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
          title: '开发团队',
          items: [
            {
              label: 'chuyaoyuan',
              href: 'https://github.com/chuyaoyuan/',
            },
            {
              label: 'zhangbohou',
              href: 'https://github.com/BohouZhang',
            },
          ],
        },
        {
          title: '更多',
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
      copyright: `Copyright © ${new Date().getFullYear()} Code Docs, Inc. 一些技术人的编程文档网站.`,
    },
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
