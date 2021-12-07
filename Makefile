start:
	yarn run start

build:
	yarn run build
	
install:
	yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest

deploy:
	GIT_USER=easy-quest
	USE_SSH=true
	yarn deploy