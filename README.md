# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

[my-docs](https://easy-quest.github.io/my-docs/)

## Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```bash
GIT_USER=easy-quest USE_SSH=true yarn deploy
```

Если вы используете страницы GitHub для хостинга, эта команда является удобным способом создания веб-сайта и отправка на ветку `gh-pages`.

This is template configured for ephemeral development environments on [Gitpod](https://www.gitpod.io/).

## prebuild

[![prebuild](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#prebuild/https://github.com/easy-quest/my-docs)

## Get Started With Your Own Project

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/easy-quest/my-docs)
