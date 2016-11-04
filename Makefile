FIXLANG = LC_ALL=C

help:
	@echo Make what?
	@echo
	@echo "'prepare' prepares the dev environment."
	@echo "'dev' starts the app in development mode."
	@echo

prepare:
	@cd app; meteor npm install

dev: prepare
	@cd app; $(FIXLANG) meteor

build: prepare
	@cd app; ./node_modules/.bin/meteor-build-client ../docs -p ""
	@touch docs/.nojekyll
	@echo "This directory hosts the statically built demo." > docs/readme.md

clean:
	@rm -rf app/node_modules app/meteor/.local
