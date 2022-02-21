---
created: 2021-08-29T16:39:41 (UTC +03:00)
source: https://habr.com/ru/company/ruvds/blog/326594/
author: Ivan Yastrebov
---

Bash-скрипты, часть 5 
===
сигналы, фоновые задачи, управление сценариями 
---

---

В прошлый раз мы говорили о работе с потоками ввода, вывода и ошибок в bash-скриптах, о дескрипторах файлов и о перенаправлении потоков. Сейчас вы знаете уже достаточно много для того, чтобы писать что-то своё. На данном этапе освоения bash у вас вполне могут возникнуть вопросы о том, как управлять работающими скриптами, как автоматизировать их запуск.  

[![](https://habr.com/img/image-loader.svg)](https://ruvds.com/ru-rub/#order)

До сих пор мы вводили имена скриптов в командную строку и нажимали Enter, что приводило к немедленному запуску программ, но это — не единственный способ вызова сценариев. Сегодня мы поговорим о том как скрипт может работать с сигналами Linux, о различных подходах к запуску скриптов и к управлению ими во время работы.

## Сигналы Linux

В Linux существует более трёх десятков сигналов, которые генерирует система или приложения. Вот список наиболее часто используемых, которые наверняка пригодятся при разработке сценариев командной строки.

**Код сигнала**  

**Название**  

**Описание**  

1  

SIGHUP  

Закрытие терминала  

2  

SIGINT  

Сигнал остановки процесса пользователем с терминала (CTRL + C)  

3  

SIGQUIT  

Сигнал остановки процесса пользователем с терминала (CTRL + \\) с дампом памяти  

9  

SIGKILL  

Безусловное завершение процесса  

15  

SIGTERM  

Сигнал запроса завершения процесса  

17  

SIGSTOP  

Принудительная приостановка выполнения процесса, но не завершение его работы  

18  

SIGTSTP  

Приостановка процесса с терминала (CTRL + Z), но не завершение работы  

19  

SIGCONT  

Продолжение выполнения ранее остановленного процесса  

Если оболочка bash получает сигнал `SIGHUP` когда вы закрываете терминал, она завершает работу. Перед выходом она отправляет сигнал `SIGHUP` всем запущенным в ней процессам, включая выполняющиеся скрипты.

Сигнал `SIGINT` приводит к временной остановке работы. Ядро Linux перестаёт выделять оболочке процессорное время. Когда это происходит, оболочка уведомляет процессы, отправляя им сигнал `SIGINT` .

Bash-скрипты не контролируют эти сигналы, но они могут распознавать их и выполнять некие команды для подготовки скрипта к последствиям, вызываемым сигналами.

## Отправка сигналов скриптам

Оболочка bash позволяет вам отправлять скриптам сигналы, пользуясь комбинациями клавиш на клавиатуре. Это оказывается очень кстати если нужно временно остановить выполняющийся скрипт или завершить его работу.

### Завершение работы процесса

Комбинация клавиш `CTRL + C` генерирует сигнал `SIGINT` и отправляет его всем процессам, выполняющимся в оболочке, что приводит к завершению их работы.

Выполним в оболочке такую команду:

```
$ sleep 100
```

После этого завершим её работу комбинацией клавиш `CTRL + C` .

![](https://habr.com/img/image-loader.svg)

_Завершение работы процесса с клавиатуры_

### Временная остановка процесса

Комбинация клавиш `CTRL + Z` позволяет сгенерировать сигнал `SIGTSTP` , который приостанавливает работу процесса, но не завершает его выполнение. Такой процесс остаётся в памяти, его работу можно возобновить. Выполним в оболочке команду:

```
$ sleep 100
```

И временно остановим её комбинацией клавиш `CTRL + Z` .

![](https://habr.com/img/image-loader.svg)

_Приостановка процесса_

Число в квадратных скобках — это номер задания, который оболочка назначает процессу. Оболочка рассматривает процессы, выполняющиеся в ней, как задания с уникальными номерами. Первому процессу назначается номер 1, второму — 2, и так далее.

Если вы приостановите задание, привязанное к оболочке, и попытаетесь выйти из неё, bash выдаст предупреждение.

Просмотреть приостановленные задания можно такой командой:

```
ps –l
```

![](https://habr.com/img/image-loader.svg)

_Список заданий_

В колонке `S` , выводящей состояние процесса, для приостановленных процессов выводится `T` . Это указывает на то, что команда либо приостановлена, либо находится в состоянии трассировки.

Если нужно завершить работу приостановленного процесса, можно воспользоваться командой `kill` . Подробности о ней можно почитать [здесь](https://likegeeks.com/main-linux-commands-easy-guide/).

Выглядит её вызов так:

```
kill processID
```

  

## Перехват сигналов

Для того, чтобы включить в скрипте отслеживание сигналов Linux, используется команда `trap` . Если скрипт получает сигнал, указанный при вызове этой команды, он обрабатывает его самостоятельно, при этом оболочка такой сигнал обрабатывать не будет.

Команда `trap` позволяет скрипту реагировать на сигналы, в противном случае их обработка выполняется оболочкой без его участия.

Рассмотрим пример, в котором показано, как при вызове команды `trap` задаётся код, который надо выполнить, и список сигналов, разделённых пробелами, которые мы хотим перехватить. В данном случае это всего один сигнал:

```
#!/bin/bash
trap "echo ' Trapped Ctrl-C'" SIGINT
echo This is a test script
count=1
while [ $count -le 10 ]
do
echo "Loop #$count"
sleep 1
count=$(( $count + 1 ))
done
```

Команда `trap` , использованная в этом примере, выводит текстовое сообщение всякий раз, когда она обнаруживает сигнал `SIGINT` , который можно сгенерировать, нажав `Ctrl + C` на клавиатуре.

![](https://habr.com/img/image-loader.svg)

_Перехват сигналов_

Каждый раз, когда вы нажимаете клавиши `CTRL + C` , скрипт выполняет команду `echo` , указанную при вызове `trace` вместо того, чтобы позволить оболочке завершит его работу.

## Перехват сигнала выхода из скрипта

Перехватить сигнал выхода из скрипта можно, использовав при вызове команды `trap` имя сигнала `EXIT` :

```
#!/bin/bash
trap "echo Goodbye..." EXIT
count=1
while [ $count -le 5 ]
do
echo "Loop #$count"
sleep 1
count=$(( $count + 1 ))
done
```

![](https://habr.com/img/image-loader.svg)

_Перехват сигнала выхода из скрипта_

При выходе из скрипта, будь то нормальное завершение его работы или завершение, вызванное сигналом `SIGINT` , сработает перехват и оболочка исполнит команду `echo` .

## Модификация перехваченных сигналов и отмена перехвата

Для модификации перехваченных скриптом сигналов можно выполнить команду `trap` с новыми параметрами:

```
#!/bin/bash
trap "echo 'Ctrl-C is trapped.'" SIGINT
count=1
while [ $count -le 5 ]
do
echo "Loop #$count"
sleep 1
count=$(( $count + 1 ))
done
trap "echo ' I modified the trap!'" SIGINT
count=1
while [ $count -le 5 ]
do
echo "Second Loop #$count"
sleep 1
count=$(( $count + 1 ))
done
```

![](https://habr.com/img/image-loader.svg)

_Модификация перехвата сигналов_

После модификации сигналы будут обрабатываться по-новому.

Перехват сигналов можно и отменить, для этого достаточно выполнить команду `trap` , передав ей двойное тире и имя сигнала:

```
#!/bin/bash
trap "echo 'Ctrl-C is trapped.'" SIGINT
count=1
while [ $count -le 5 ]
do
echo "Loop #$count"
sleep 1
count=$(( $count + 1 ))
done
trap -- SIGINT
echo "I just removed the trap"
count=1
while [ $count -le 5 ]
do
echo "Second Loop #$count"
sleep 1
count=$(( $count + 1 ))
done
```

Если скрипт получит сигнал до отмены перехвата, он обработает его так, как задано в действующей команде `trap` . Запустим скрипт:

```
$ ./myscript
```

И нажмём `CTRL + C` на клавиатуре.

![](https://habr.com/img/image-loader.svg)

_Сигнал, перехваченный до отмены перехвата_

Первое нажатие `CTRL + C` пришлось на момент исполнения скрипта, когда перехват сигнала был в силе, поэтому скрипт исполнил назначенную сигналу команду `echo` . После того, как исполнение дошло до команды отмены перехвата, команда `CTRL + C` сработала обычным образом, завершив работу скрипта.

## Выполнение сценариев командной строки в фоновом режиме

Иногда bash-скриптам требуется немало времени для выполнения некоей задачи. При этом вам может понадобиться возможность нормально работать в командной строке, не дожидаясь завершения скрипта. Реализовать это не так уж и сложно.

Если вы видели список процессов, выводимый командой `ps` , вы могли заметить процессы, которые выполняются в фоне и не привязаны к терминалу.  
Напишем такой скрипт:

```
#!/bin/bash
count=1
while [ $count -le 10 ]
do
sleep 1
count=$(( $count + 1 ))
done
```

Запустим его, указав после имени символ амперсанда ( `&` ):

```
$ ./myscipt &
```

Это приведёт к тому, что он будет запущен как фоновый процесс.

![](https://habr.com/img/image-loader.svg)

_Запуск скрипта в фоновом режиме_

Скрипт будет запущен в фоновом процессе, в терминал выведется его идентификатор, а когда его выполнение завершится, вы увидите сообщение об этом.

Обратите внимание на то, что хотя скрипт выполняется в фоне, он продолжает использовать терминал для вывода сообщений в `STDOUT` и `STDERR` , то есть, выводимый им текст или сообщения об ошибках можно будет увидеть в терминале.

![](https://habr.com/img/image-loader.svg)

_Список процессов_

При таком подходе, если выйти из терминала, скрипт, выполняющийся в фоне, так же завершит работу.

Что если нужно, чтобы скрипт продолжал работать и после закрытия терминала?

## Выполнение скриптов, не завершающих работу при закрытии терминала

Скрипты можно выполнять в фоновых процессах даже после выхода из терминальной сессии. Для этого можно воспользоваться командой `nohup` . Эта команда позволяет запустить программу, блокируя сигналы `SIGHUP` , отправляемые процессу. В результате процесс будет исполняться даже при выходе из терминала, в котором он был запущен.

Применим эту методику при запуске нашего скрипта:

```
nohup ./myscript &
```

Вот что будет выведено в терминал.

![](https://habr.com/img/image-loader.svg)

_Команда nohup_

Команда `nohup` отвязывает процесс от терминала. Это означает, что процесс потеряет ссылки на `STDOUT` и `STDERR` . Для того, чтобы не потерять данные, выводимые скриптом, `nohup` автоматически перенаправляет сообщения, поступающие в `STDOUT` и в `STDERR` , в файл `nohup.out` .

Обратите внимание на то, что при запуске нескольких скриптов из одной и той же директории то, что они выводят, попадёт в один файл `nohup.out` .

## Просмотр заданий

Команда `jobs` позволяет просматривать текущие задания, которые выполняются в оболочке. Напишем такой скрипт:

```
#!/bin/bash
count=1
while [ $count -le 10 ]
do
echo "Loop #$count"
sleep 10
count=$(( $count + 1 ))
done
```

Запустим его:

```
$ ./myscript
```

И временно остановим комбинацией клавиш `CTRL + Z` .

![](https://habr.com/img/image-loader.svg)

_Запуск и приостановка скрипта_

Запустим тот же скрипт в фоновом режиме, при этом перенаправим вывод скрипта в файл так, чтобы он ничего не выводил на экране:

```
$ ./myscript > outfile &
```

Выполнив теперь команду `jobs` , мы увидим сведения как о приостановленном скрипте, так и о том, который работает в фоне.

![](https://habr.com/img/image-loader.svg)

_Получение сведений о скриптах_

Ключ `-l` при вызове команды `jobs` указывает на то, что нам нужны сведения об `ID` процессов.

## Перезапуск приостановленных заданий

Для того, чтобы перезапустить скрипт в фоновом режиме, можно воспользоваться командой `bg` .

Запустим скрипт:

```
$ ./myscript
```

Нажмём `CTRL + Z` , что временно остановит его выполнение. Выполним следующую команду:

```
$ bg
```

![](https://habr.com/img/image-loader.svg)

_Команда bg_

Теперь скрипт выполняется в фоновом режиме.

Если у вас имеется несколько приостановленных заданий, для перезапуска конкретного задания команде `bg` можно передать его номер.

Для перезапуска задания в обычном режиме воспользуйтесь командой `fg` :

```
$ fg 1
```

  

## Планирование запуска скриптов

Linux предоставляет пару способов запуска bash-скриптов в заданное время. Это команда `at` и планировщик заданий `cron` .

Вызов команды at выглядит так:

```
at [-f filename] time
```

Эта команда распознаёт множество форматов указания времени.

*   Стандартный, с указанием часов и минут, например — 10:15.
*   С использованием индикаторов AM/PM, до или после полудня, например — 10:15PM.
*   С использованием специальных имён, таких, как `now`, `noon`, `midnight`.

В дополнение к возможности указания времени запуска задания, команде `at` можно передать и дату, используя один из поддерживаемых ей форматов.

*   Стандартный формат указания даты, при котором дата записывается по шаблонам `MMDDYY`, `MM/DD/YY`, или `DD. MM. YY`.
*   Текстовое представление даты, например,  `Jul 4` или `Dec 25`, при этом год можно указать, а можно обойтись и без него.
*   Запись вида `now + 25 minutes`.
*   Запись вида `10:15PM tomorrow`.
*   Запись вида `10:15 + 7 days`.

Не будем углубляться в эту тему, рассмотрим простой вариант использования команды:

```
$ at -f ./myscript now
```

![](https://habr.com/img/image-loader.svg)

_Планирование заданий с использованием команды at_

Ключ `-M` при вызове `at` используется для отправки того, что выведет скрипт, по электронной почте, если система соответствующим образом настроена. Если отправка электронного письма невозможна, этот ключ просто подавит вывод.

Для того чтобы посмотреть список заданий, ожидающих выполнения, можно воспользоваться командой `atq` :

```
$ atq
```

![](https://habr.com/img/image-loader.svg)

_Список заданий, ожидающих выполнения_

## Удаление заданий, ожидающих выполнения

Удалить задание, ожидающее выполнения, позволяет команда `atrm` . При её вызове указывают номер задания:

```
$ atrm 18
```

![](https://habr.com/img/image-loader.svg)

_Удаление задания_

## Запуск скриптов по расписанию

Планирование однократного запуска скриптов с использованием команды `at` способно облегчить жизнь во многих ситуациях. Но как быть, если нужно, чтобы скрипт выполнялся в одно и то же время ежедневно, или раз в неделю, или раз в месяц?

В Linux имеется утилита `crontab` , позволяющая планировать запуск скриптов, которые нужно выполнять регулярно.

`Crontab` выполняется в фоне и, основываясь на данных в так называемых cron-таблицах, запускает задания по расписанию.

Для того, чтобы просмотреть существующую таблицу заданий `cron` , воспользуйтесь такой командой:

```
$ crontab –l
```

При планировании запуска скрипта по расписанию `crontab` принимает данные о том, когда нужно выполнить задание, в таком формате:

```
минута, час, день месяца, месяц, день недели.
```

Например, если надо, чтобы некий скрипт с именем `command` выполнялся ежедневно в 10:30, этому будет соответствовать такая запись в таблице заданий:

```
30 10 * * * command
```

Здесь универсальный символ « `*` », использованный для полей, задающих день месяца, месяц и день недели, указывает на то, что `cron` должен выполнять команду каждый день каждого месяца в 10:30.

Если, например, надо, чтобы скрипт запускался в `4:30PM` каждый понедельник, понадобится создать в таблице заданий такую запись:

```
30 16 * * 1 command
```

Нумерация дней недели начинается с 0, 0 означает воскресенье, 6 — субботу. Вот ещё один пример. Здесь команда будет выполняться в 12 часов дня в первый день каждого месяца.

```
00 12 1 * * command
```

Нумерация месяцев начинается с 1.  
Для того чтобы добавить запись в таблицу, нужно вызвать `crontab` с ключом `-e` :

```
crontab –e
```

Затем можно вводить команды формирования расписания:

```
30 10 * * * /home/likegeeks/Desktop/myscript
```

Благодаря этой команде скрипт будет вызываться ежедневно в 10:30. Если вы столкнётесь с ошибкой «Resource temporarily unavailable», выполните нижеприведённую команду с правами root-пользователя:

```
$ rm -f /var/run/crond.pid
```

Организовать периодический запуск скриптов с использованием `cron` можно ещё проще, воспользовавшись несколькими специальными директориями:

```
/etc/cron.hourly
/etc/cron.daily
/etc/cron.weekly
/etc/cron.monthly
```

Если поместить файл скрипта в одну из них, это приведёт, соответственно, к его ежечасному, ежедневному, еженедельному или ежемесячному запуску.

## Запуск скриптов при входе в систему и при запуске оболочки

Автоматизировать запуск скриптов можно, опираясь на различные события, такие, как вход пользователя в систему или запуск оболочки. [Тут](https://likegeeks.com/linux-environment-variables/) можно почитать о файлах, которые обрабатываются в подобных ситуациях. Например, это следующие файлы:

```
$HOME/.bash_profile
$HOME/.bash_login
$HOME/.profile
```

Для того, чтобы запускать скрипт при входе в систему, поместите его вызов в файл `.bash_profile` .

А как насчёт запуска скриптов при открытии терминала? Организовать это поможет файл `.bashrc` .

## Итоги

Сегодня мы разобрали вопросы, касающиеся управления жизненным циклом сценариев, поговорили о том, как запускать скрипты в фоне, как планировать их выполнение по расписанию. В следующий раз читайте о функциях в bash-скриптах и о разработке библиотек.

Уважаемые читатели! А вы пользуетесь средствами планирования запуска сценариев командной строки по расписанию? Если да — расскажите пожалуйста о них.

 `###### tags: [bash, script] by EasyQuest`