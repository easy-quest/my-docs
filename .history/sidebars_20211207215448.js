/**
 * Создание боковой панели позволяет вам:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 Боковые панели могут быть созданы из файловой системы или явно определены здесь.ь.

 Создайте столько боковых панелей, сколько вы хотите.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // По умолчанию Docusaurus генерирует боковую панель из структуры папки Docs
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // Но вы можете создать боковую панель вручную
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
