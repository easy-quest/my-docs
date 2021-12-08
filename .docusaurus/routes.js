
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
    component: ComponentCreator('/my-docs/docs','4da'),
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
