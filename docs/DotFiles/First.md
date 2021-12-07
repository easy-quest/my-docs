---
created: 2021-11-24T19:20:40 (UTC +03:00)
source: https://www.atlassian.com/git/tutorials/dotfiles
author: Ivan Yastrebov
---
#  Лучший способ хранения ваших точечных файлов: голый репозиторий Git
---
_Отказ от ответственности: название немного гиперболическое, есть и другие проверенные решения проблемы. Я действительно думаю, что техника, приведенная ниже, очень элегантна._

Недавно я прочитал об этой удивительной технике в [новостях о хакерах](https://news.ycombinator.com/item?id=11070797), посвященных решениям людей для хранения своих [точечных](https://en.wikipedia.org/wiki/Dot-file)файлов. Пользователь `StreakyCobra` [показал свою элегантную настройку](https://news.ycombinator.com/item?id=11071754) и ... В этом было так много смысла! Я нахожусь в процессе переключения своей собственной системы на ту же технику. Единственным предварительным условием является установка [Git](https://www.atlassian.com/git).

По его словам, приведенная ниже методика требует:

Никаких дополнительных инструментов, никаких символических ссылок, файлы отслеживаются в системе контроля версий, вы можете использовать разные ветви для разных компьютеров, вы можете легко воспроизвести свою конфигурацию при новой установке.

Метод заключается в хранении [голого репозитория Git](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/) в "_боковой_" папке (например`$HOME/.cfg`, или `$HOME/.myconfig`) с использованием специально созданного псевдонима, чтобы команды выполнялись в этом репозитории, а не в обычной `.git`локальной папке, что мешало бы работе любых других репозиториев Git.

## Начиная с нуля

Если вы раньше не отслеживали свои конфигурации в репозитории Git, вы можете легко начать использовать этот метод с следующих строк:

```bash
git init --bare $HOME/.cfg
```

```bash
alias zz='git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
```

```bash
zz config --local status.showUntrackedFiles no
```
---

```bash
echo "alias zz='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'" >> $HOME/.zshrc
```

-   В первой строке создается папка`~/.cfg`, которая является репозиторием [Git](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/), который будет отслеживать наши файлы.
-   Затем мы создаем псевдоним`config`, который будем использовать вместо обычного`git`, когда захотим взаимодействовать с нашим репозиторием конфигурации.
-   Мы устанавливаем флаг - локальный для репозитория - чтобы скрыть файлы, которые мы еще не отслеживаем явным образом. Это делается для того, чтобы при вводе `config status`и других команд позже файлы, которые вас не интересуют, не отображались как `untracked`.
-   Также вы можете добавить определение псевдонима вручную в свой `.bashrc`или использовать четвертую строку, предоставленную для удобства.

Я упаковал вышеприведенные строки в [фрагмент](https://bitbucket.org/snippets/nicolapaolucci/ergX9) на Bitbucket и связал его с коротким URL-адресом. Чтобы вы могли наладить отношения с:

```shell
curl -Lks http://bit.do/cfg-init | /bin/bash
```

После выполнения установки любой файл в `$HOME`папке может быть изменен с помощью обычных команд, `git`заменив его вашим вновь созданным `config`псевдонимом, например:

```bash
zz status
zz add .vimr
zz commit -m "Add vimrc"
zz add .bashrc
zz commit -m "Add bashrc"
zz push
```

## Установите файлы точек в новую систему (или перейдите к этой установке)

Если вы уже храните файлы конфигурации/точек в репозитории [Git](https://www.atlassian.com/git), в новой системе вы можете перейти к этой настройке, выполнив следующие действия:

-   Перед установкой убедитесь, что вы присвоили псевдоним своему `.bashrc`или`.zsh`:

```shell
alias zz='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
```

-   И что ваш исходный репозиторий игнорирует папку, в которую вы его клонируете, чтобы не создавать странных проблем с рекурсией:

```shell
echo ".cfg" >> .gitignore
```

-   Теперь клонируйте свои точечные файлы в [пустой](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/) репозиторий в папке "_точка_" вашего`$HOME`:

```shell
git clone --bare <git-repo-url> $HOME/.cfg
```

-   Определите псевдоним в текущей области оболочки:

```shell
alias zz='/usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME'
```

-   Перенесите фактический контент из открытого репозитория на свой`$HOME`:

-   Описанный выше шаг может завершиться ошибкой с сообщением типа:

```shell
error: The following untracked working tree files would be overwritten by checkout:    
	.bashrc    
	.gitignore
Please move or remove them before you can switch branches.
Aborting
```

Это связано с тем, что в вашей `$HOME`папке уже могут быть некоторые стандартные файлы конфигурации, которые будут перезаписаны Git. Решение простое: создайте резервные копии файлов, если они вам небезразличны, удалите их, если вам все равно. Я предоставляю вам возможный приблизительный ярлык, чтобы автоматически переместить все файлы-нарушители в папку резервного копирования:

```shell
mkdir -p .config-backup && \
zz checkout 2>&1 | egrep "\s+\." | awk {'print $1'} | \
xargs -I{} mv {} .config-backup/{}
```

-   Повторите проверку, если у вас возникли проблемы:

-   Установите флажок `showUntrackedFiles``no`в этом конкретном (локальном) репозитории:

```shell
zz config --local status.showUntrackedFiles no
```

-   Вы закончили, теперь вы можете вводить `config`команды для добавления и обновления файлов точек:

```shell
zz status
zz add .vimrc
config commit -m "Add vimrc"
config add .bashrc
config commit -m "Add bashrc"
config push
```

Опять же, в качестве ярлыка, чтобы не запоминать все эти шаги на любой новой машине, которую вы хотите настроить, вы можете создать простой скрипт, [сохранить его в виде фрагмента Bitbucket](https://bitbucket.org/snippets/nicolapaolucci/7/9K), как это сделал я, [создать короткий URL](http://bit.do/)\-адрес для него и назвать его так:

```shell
curl -Lks http://bit.do/cfg-install | /bin/bash
```

Для полноты картины это то, что я получил (протестировал на многих свежеиспеченных [](http://www.alpinelinux.org/)контейнерах Alpine Linux, чтобы проверить это):

```bash
git clone --bare https://bitbucket.org/durdn/cfg.git $HOME/.cfgfunction config {   /usr/bin/git --git-dir=$HOME/.cfg/ --work-tree=$HOME $@}mkdir -p .config-backupconfig checkoutif [ $? = 0 ]; then  echo "Checked out config.";  else    echo "Backing up pre-existing dot files.";    config checkout 2>&1 | egrep "\s+\." | awk {'print $1'} | xargs -I{} mv {} .config-backup/{}fi;config checkoutconfig config status.showUntrackedFiles no
```

## Завершение

Я надеюсь, что вы найдете этот метод полезным для отслеживания вашей конфигурации. Если вам интересно, [мои файлы dot живут здесь](https://bitbucket.org/durdn/cfg.git). Также, пожалуйста, оставайтесь на связи, подписавшись [на @durdn](https://www.twitter.com/durdn) или мою потрясающую команду в [@atlassiandev](https://www.twitter.com/atlassiandev).
`######tags: [git, dotfiles]`
