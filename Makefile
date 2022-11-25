setup: brain-games brain-even

install:
	npm ci

brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	node bin/brain-games.js
	node bin/brain-even.js
