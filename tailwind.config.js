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
				'light-red': '#E14B4B',
				'light-orange': '#FF9F63',
				cerulina: '#32DACC',
				'cherry-red': '#DA3232',
			},
			fontFamily: {
				vazir: ['vazir', 'Roboto'],
			},
			boxShadow: {
				inside: 'inset 0px 0px 26px -3px rgba(83, 172, 255, 0.3)',
			},
		},
	},
	plugins: [],
};
