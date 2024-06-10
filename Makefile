install:
	npm i

publish:
	npm publish --dry-run

test:
	npm test

install-deps:
	npx simple-git-hooks

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
