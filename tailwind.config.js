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
			backgroundImage: {
				'blue-gradient':
					'linear-gradient(to right, #1e3a8a 0% 25%, #2563eb 25% 50%, #60a5fa 50% 75%, #93c5fd 75% 100%)',
				'green-gradient':
					'linear-gradient(to right, #14532d 0% 25%, #16a34a 25% 50%, #4ade80 50% 75%, #86efac 75% 100%)',
				'orange-gradient':
					'linear-gradient(to right, #7c2d12 0% 25%, #ea580c 25% 50%, #fb923c 50% 75%, #fdba74 75% 100%)',
				'red-gradient':
					'linear-gradient(to right, #7f1d1d 0% 25%, #dc2626 25% 50%, #f87171 50% 75%,#fca5a5 75% 100%)',
			},
		},
	},
	plugins: [],
};
