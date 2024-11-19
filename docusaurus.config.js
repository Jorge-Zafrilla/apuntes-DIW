// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Diseño de Interfaces Web',
  tagline: '2º DAW',
  favicon: 'img/logobatoi.png',

  // Set the production url of your site here
  url: 'https://Jorge-Zafrilla.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/apuntes-DIW/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Jorge-Zafrilla', // Usually your GitHub org/user name.
  projectName: 'apuntes-DIW', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logobatoi.png',
      navbar: {
        title: 'Diseño de Interfaces Web',
        logo: {
          alt: 'Logo Batoi',
          src: 'img/logobatoi.png',
          srcDark: 'img/logobatoidark.png', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'apuntesSidebar',
            position: 'left',
            label: 'Apuntes',
          },
          //Blog en el navegador
          //{to: '/blog', label: 'Anuncios', position: 'left'},

          //Para poder cambiar de idioma
          //{
            //type: 'localeDropdown', 
            //position:'right',
          //},
          
          {
            href: 'https://github.com/Jorge-Zafrilla',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Apuntes',
            items: [
              {
                label: 'Apuntes del curso',
                to: '/docs/category/apuntes-diw',
              },
            ],
          },
          {
            title: 'Contacto',
            items: [
              {
                html: '<span>Email: <strong>j.zafrillamunoz@edu.gva.es</strong></span>',
              },
            ],
          },
          {
            title: 'Aules',
            items: [
              {
                label: 'Aules del módulo',
                href: 'https://aules.edu.gva.es/fp/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Diseño de Interfaces Web - Jorge Zafrilla Muñoz.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
