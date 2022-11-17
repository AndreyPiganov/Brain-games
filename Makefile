setup: install brain-games publish

install:
	npm ci

brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
