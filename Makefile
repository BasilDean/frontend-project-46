publish:
	npm publish --dry-run

test:
	node --experimental-vm-modules node_modules/jest/bin/jest.js
