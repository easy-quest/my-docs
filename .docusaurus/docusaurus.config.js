export default {
  "title": "Документация",
  "titleDelimiter": "🦖",
  "tagline": "Hacking are cool",
  "url": "https://easy-quest.github.io",
  "baseUrl": "/my-docs/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "easy-quest",
  "projectName": "my-docs",
  "plugins": [
    [
      "@docusaurus/plugin-pwa",
      {
        "debug": true,
        "offlineModeActivationStrategies": [
          "appInstalled",
          "standalone",
          "queryString"
        ],
        "pwaHead": [
          {
            "tagName": "link",
            "rel": "icon",
            "href": "/img/docusaurus.png"
          },
          {
            "tagName": "link",
            "rel": "manifest",
            "href": "/manifest.json"
          },
          {
            "tagName": "meta",
            "name": "theme-color",
            "content": "rgb(37, 194, 160)"
          },
          {
            "tagName": "meta",
            "name": "apple-mobile-web-app-capable",
            "content": "yes"
          },
          {
            "tagName": "meta",
            "name": "apple-mobile-web-app-status-bar-style",
            "content": "#000"
          },
          {
            "tagName": "link",
            "rel": "apple-touch-icon",
            "href": "/img/docusaurus.png"
          },
          {
            "tagName": "link",
            "rel": "mask-icon",
            "href": "/img/docusaurus.svg",
            "color": "rgb(37, 194, 160)"
          },
          {
            "tagName": "meta",
            "name": "msapplication-TileImage",
            "content": "/img/docusaurus.png"
          },
          {
            "tagName": "meta",
            "name": "msapplication-TileColor",
            "content": "#000"
          }
        ]
      }
    ]
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/sss/my-docs/sidebars.js",
          "editUrl": "https://github.com/easy-quest/my-docs/edit/main/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/easy-quest/my-docs/edit/main/website/blog/"
        },
        "theme": {
          "customCss": "/home/sss/my-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "My Site",
      "logo": {
        "alt": "Quest Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Tutorial"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/easy-quest/my-docs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "#"
            },
            {
              "label": "Discord",
              "href": "#"
            },
            {
              "label": "Twitter",
              "href": "#"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/easy-quest/my-docs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 My Project, Inc. EasyQuest."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "noIndex": false
};