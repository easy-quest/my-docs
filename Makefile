gp:
	git add .
	direnv allow
	git commit -am "${texxt}"
	git push

start:
	yarn run start

build:
	yarn run build
	
install:
	yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest;direnv allow

test:
	export GIT_USER=easy-quest;echo ${GIT_USER}
	export USE_SSH=true;echo ${USE_SSH}

deploy: test
	GIT_USER=easy-quest
	USE_SSH=true
	node_modules/.bin/docusaurus deploy

clear:
	rm -Rf ./build
