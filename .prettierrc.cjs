/** @type {import("prettier").Config} */
const config = {
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	trailingComma: 'all',
	semi: true,
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@(?!assets)[^/]+/(.*)$',
		'^@/(.*)$',
		'^[./]',
		'^@assets/(.*)$',
	],
};

module.exports = config;
