/**
 * Создание боковой панели позволяет вам:
 - Создать заказанную группу документов
 - Визуализацию боковой панели для каждого документа этой группы
 - Укажите следующую / предыдущую навигацию

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
