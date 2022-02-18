
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docs/en/blog',
    component: ComponentCreator('/my-docs/en/blog','db7'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/archive',
    component: ComponentCreator('/my-docs/en/blog/archive','680'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/first-blog-post',
    component: ComponentCreator('/my-docs/en/blog/first-blog-post','9bf'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/long-blog-post',
    component: ComponentCreator('/my-docs/en/blog/long-blog-post','f3e'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/mdx-blog-post',
    component: ComponentCreator('/my-docs/en/blog/mdx-blog-post','e73'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/tags',
    component: ComponentCreator('/my-docs/en/blog/tags','9f7'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/tags/docusaurus',
    component: ComponentCreator('/my-docs/en/blog/tags/docusaurus','a1d'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/tags/facebook',
    component: ComponentCreator('/my-docs/en/blog/tags/facebook','57d'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/tags/hello',
    component: ComponentCreator('/my-docs/en/blog/tags/hello','d51'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/tags/hola',
    component: ComponentCreator('/my-docs/en/blog/tags/hola','d04'),
    exact: true
  },
  {
    path: '/my-docs/en/blog/welcome',
    component: ComponentCreator('/my-docs/en/blog/welcome','740'),
    exact: true
  },
  {
    path: '/my-docs/en/markdown-page',
    component: ComponentCreator('/my-docs/en/markdown-page','4db'),
    exact: true
  },
  {
    path: '/my-docs/en/docs',
    component: ComponentCreator('/my-docs/en/docs','39b'),
    routes: [
      {
        path: '/my-docs/en/docs/asdf/',
        component: ComponentCreator('/my-docs/en/docs/asdf/','cf9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_001',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_001','209'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_002',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_002','ee6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_003',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_003','988'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_004',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_004','e1b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_005',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_005','6f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_006',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_006','62b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_007',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_007','b04'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_008',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_008','b3b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_009',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_009','732'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_010',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_010','4e4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/Bash/bash_scripts_011',
        component: ComponentCreator('/my-docs/en/docs/Bash/bash_scripts_011','2b3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/DotFiles/First',
        component: ComponentCreator('/my-docs/en/docs/DotFiles/First','f21'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/intro',
        component: ComponentCreator('/my-docs/en/docs/intro','0ae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/M_ENV/dot_env_files',
        component: ComponentCreator('/my-docs/en/docs/M_ENV/dot_env_files','0b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tor-project/tor_projects',
        component: ComponentCreator('/my-docs/en/docs/tor-project/tor_projects','ef9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/my-docs/en/docs/tutorial-basics/congratulations','ca3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/my-docs/en/docs/tutorial-basics/create-a-blog-post','7c9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/my-docs/en/docs/tutorial-basics/create-a-document','aa5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/my-docs/en/docs/tutorial-basics/create-a-page','ae2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/my-docs/en/docs/tutorial-basics/deploy-your-site','c2d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/my-docs/en/docs/tutorial-basics/markdown-features','4fd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/my-docs/en/docs/tutorial-extras/manage-docs-versions','268'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/my-docs/en/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/my-docs/en/docs/tutorial-extras/translate-your-site','801'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/my-docs/en/',
    component: ComponentCreator('/my-docs/en/','9b0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
