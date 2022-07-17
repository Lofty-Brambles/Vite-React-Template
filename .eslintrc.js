module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"init-declarations": ["error", "always"],
		"no-console": "warn",
		"no-plusplus": "off",
		"padded-blocks": "off",
		quotes: ["error", "double", { allowTemplateLiterals: true }],
		semi: ["error", "always"],
	},
};