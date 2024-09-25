/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#53ACFF',
				'primary-dark': '#2A87DC',
				'light-white': '#D7D7D766',
				'dark-gray': '#D9D9D94D',
				'dark-orange': '#A96322',
				'dark-red': '#A92222',
			},
			fontFamily: {
				vazir: 'vazir',
			},
		},
	},
	plugins: [],
};
