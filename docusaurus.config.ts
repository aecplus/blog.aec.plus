import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AEC+ Blog',
  tagline: 'Intelligence for Built Environment',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.aec.plus',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aecplus', // Usually your GitHub org/user name.
  projectName: 'blog.aec.plus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false /*{
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        }*/,
        blog: {
          routeBasePath: '/',
          blogTitle: '',
          blogDescription: 'A blog about architecture, engineering, and construction technlogy',
          showReadingTime: true,
          postsPerPage: 5,
          feedOptions: {
            type: 'all', ///['rss', 'atom'],
            xslt: true,
            copyright: `Copyright © ${new Date().getFullYear()} AEC Plus`,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Blog',
      logo: {
        alt: 'AEC Plus Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://aec.plus',
          label: 'AEC+',
          position: 'right',
        },
        ///{to: '/blog', label: 'Blog', position: 'left'},
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
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
              label: 'X',
              href: 'https://x.com/aecplus',
            },
          ],
        },*/
        {
          title: 'Quicklinks',
          items: [
            {
              label: 'AEC Plus',
              href: 'https://aec.plus',
            },
          ],
        },
      ],
      copyright: `Copyright © 2018-${new Date().getFullYear()} AEC+`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
