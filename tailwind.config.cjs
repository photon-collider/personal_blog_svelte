/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {

		fontSize: {
			'size-0': 'var(--font-size-step-0)',
			'size-1': 'var(--font-size-step-1)',
			'size-2': 'var(--font-size-step-2)',
			'size-3': 'var(--font-size-step-3)',
			'size-4': 'var(--font-size-step-4)',


		},
		spacing: {
			'0': '0px',
			'1': 'var(--spacing-1)',
			'2': 'var(--spacing-2)',
			'3': 'var(--spacing-3)',
			'4': 'var(--spacing-4)',
			'5': 'var(--spacing-5)',
			'6': 'var(--spacing-6)',
			'7': 'var(--spacing-7)',
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: "var(--primary-color)",
				link: "var(--primary-link-color)",
				darkest: "var(--darkest-color)",
				dark: "var(--dark-color)",
				medium: "var(--medium-color)",
				light: "var(--light-color)",
				lightest: "var(--lightest-color)",
				white: "var(--white-color)",
			}
		}
	},
	plugins: [require('@tailwindcss/typography'),
	],
	darkMode: 'class',
};
