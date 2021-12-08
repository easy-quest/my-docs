
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docs/blog',
    component: ComponentCreator('/my-docs/blog','c5b'),
    exact: true
  },
  {
    path: '/my-docs/blog/archive',
    component: ComponentCreator('/my-docs/blog/archive','9f8'),
    exact: true
  },
  {
    path: '/my-docs/blog/first-blog-post',
    component: ComponentCreator('/my-docs/blog/first-blog-post','937'),
    exact: true
  },
  {
    path: '/my-docs/blog/long-blog-post',
    component: ComponentCreator('/my-docs/blog/long-blog-post','e0c'),
    exact: true
  },
  {
    path: '/my-docs/blog/mdx-blog-post',
    component: ComponentCreator('/my-docs/blog/mdx-blog-post','9b8'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags',
    component: ComponentCreator('/my-docs/blog/tags','9de'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/docusaurus',
    component: ComponentCreator('/my-docs/blog/tags/docusaurus','9fe'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/facebook',
    component: ComponentCreator('/my-docs/blog/tags/facebook','2fd'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/hello',
    component: ComponentCreator('/my-docs/blog/tags/hello','315'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/hola',
    component: ComponentCreator('/my-docs/blog/tags/hola','0f5'),
    exact: true
  },
  {
    path: '/my-docs/blog/welcome',
    component: ComponentCreator('/my-docs/blog/welcome','639'),
    exact: true
  },
  {
    path: '/my-docs/markdown-page',
    component: ComponentCreator('/my-docs/markdown-page','41d'),
    exact: true
  },
  {
    path: '/my-docs/docs',
    component: ComponentCreator('/my-docs/docs','8a7'),
    routes: [
      {
        path: '/my-docs/docs/Bash/bash_scripts_001',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_001','2bd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_002',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_002','286'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_003',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_003','f39'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_004',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_004','e61'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_005',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_005','7b0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_006',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_006','820'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_007',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_007','65d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_008',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_008','75c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_009',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_009','151'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_010',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_010','971'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Bash/bash_scripts_011',
        component: ComponentCreator('/my-docs/docs/Bash/bash_scripts_011','bf1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/DotFiles/First',
        component: ComponentCreator('/my-docs/docs/DotFiles/First','15c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/intro',
        component: ComponentCreator('/my-docs/docs/intro','e8d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Кастомизация/Внешний вид',
        component: ComponentCreator('/my-docs/docs/Obsidian/Кастомизация/Внешний вид','2a7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Кастомизация/Пользовательские сочетания клавиш',
        component: ComponentCreator('/my-docs/docs/Obsidian/Кастомизация/Пользовательские сочетания клавиш','ab6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Коммерческая лицензия',
        component: ComponentCreator('/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Коммерческая лицензия','538'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Лицензия Catalyst',
        component: ComponentCreator('/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Лицензия Catalyst','cae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Политика возврата средств',
        component: ComponentCreator('/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Политика возврата средств','233'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Obsidian Publish',
        component: ComponentCreator('/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Obsidian Publish','698'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Obsidian Sync',
        component: ComponentCreator('/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Obsidian Sync','8d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Obsidian Unlimited',
        component: ComponentCreator('/my-docs/docs/Obsidian/Лицензии и дополнительные сервисы/Obsidian Unlimited','dc5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Области/Расположение областей',
        component: ComponentCreator('/my-docs/docs/Obsidian/Области/Расположение областей','d8b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Области/Связанная область',
        component: ComponentCreator('/my-docs/docs/Obsidian/Области/Связанная область','b84'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Быстрый переход',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Быстрый переход','167'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Восстановление файлов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Восстановление файлов','2d4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Граф',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Граф','1c0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Диктофон',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Диктофон','7ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Ежедневные заметки',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Ежедневные заметки','87d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Избранное',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Избранное','7e8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Импорт Markdown-файлов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Импорт Markdown-файлов','0e1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Исходящие ссылки',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Исходящие ссылки','8fa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Компоновщик заметок',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Компоновщик заметок','a74'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Обратные ссылки',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Обратные ссылки','3bd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Открыть в приложении по умолчанию',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Открыть в приложении по умолчанию','53e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Палитра команд',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Палитра команд','ece'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Панель тегов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Панель тегов','948'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Поиск',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Поиск','c0a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Предпросмотр страницы',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Предпросмотр страницы','702'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Пространства',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Пространства','753'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Публикация',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Публикация','600'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Слайды',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Слайды','0c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Случайная заметка',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Случайная заметка','2ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Список плагинов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Список плагинов','281'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Структура',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Структура','297'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Счетчик слов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Счетчик слов','e5b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Файловый менеджер',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Файловый менеджер','ce8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Шаблоны',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Шаблоны','f1e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Плагины/Zettelkasten',
        component: ComponentCreator('/my-docs/docs/Obsidian/Плагины/Zettelkasten','c89'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Вклад в развитие Obsidian',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Вклад в развитие Obsidian','956'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Заголовок YAML',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Заголовок YAML','474'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Использование Obsidian URI',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Использование Obsidian URI','7d4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Как Obsidian хранит данные',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Как Obsidian хранит данные','a17'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Очистка HTML',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Очистка HTML','a45'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Перетаскивание объектов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Перетаскивание объектов','adf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Поддерживаемые форматы файлов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Поддерживаемые форматы файлов','d54'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Пользовательский CSS',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Пользовательский CSS','464'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Ранние сборки',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Ранние сборки','30f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Сторонние плагины',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Сторонние плагины','c5d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Продвинутое использование/Удаление файлов',
        component: ComponentCreator('/my-docs/docs/Obsidian/Продвинутое использование/Удаление файлов','0d7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Базовое ведение заметок',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Базовое ведение заметок','8c1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Встраивание вложений в заметки',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Встраивание вложений в заметки','056'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Добавление пользовательских CSS',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Добавление пользовательских CSS','990'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Добавление псевдонимов к заметке',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Добавление псевдонимов к заметке','3f8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Изменение настроек',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Изменение настроек','c0e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Импорт данных',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Импорт данных','7ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Обновление Obsidian',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Обновление Obsidian','a14'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Переименование заметок',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Переименование заметок','d2a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Работа с несколькими заметками',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Работа с несколькими заметками','cac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Работа с несколькими курсорами',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Работа с несколькими курсорами','078'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Работа с несколькими хранилищами',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Работа с несколькими хранилищами','e92'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Работа с обратными ссылками',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Работа с обратными ссылками','595'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Работа с тегами',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Работа с тегами','399'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Режимы просмотра и редактирования',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Режимы просмотра и редактирования','841'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Сбор данных',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Сбор данных','59f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Сворачивание заголовков и списков',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Сворачивание заголовков и списков','453'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Создание внутренних ссылок',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Создание внутренних ссылок','fbb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Создание заметок',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Создание заметок','29f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Создание ссылок на блоки',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Создание ссылок на блоки','22c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Сочетания клавиш',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Сочетания клавиш','e96'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Управление вложениями',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Управление вложениями','dda'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Obsidian/Руководства/Форматирование заметок',
        component: ComponentCreator('/my-docs/docs/Obsidian/Руководства/Форматирование заметок','49d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/congratulations','af7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/create-a-blog-post','e4b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/create-a-document','64b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/create-a-page','af6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/deploy-your-site','cf8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/markdown-features','d85'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/my-docs/docs/tutorial-extras/manage-docs-versions','611'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/my-docs/docs/tutorial-extras/translate-your-site','fa3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/my-docs/',
    component: ComponentCreator('/my-docs/','ab2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
