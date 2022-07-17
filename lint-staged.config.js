module.exports = {
	"src/**/*.{js,jsx}": [
		"eslint --fix",
		"prettier --write",
		"vitest"
	],
	"**/*.{json,md}": [
		"prettier --write"
	],
	"src/styles/**/*.{scss,css}": [
		"prettier --write"
	]
};