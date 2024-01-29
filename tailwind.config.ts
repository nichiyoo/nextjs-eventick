import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			colors: {
				eventick: {
					'50': '#f3f5ff',
					'100': '#e9ecfe',
					'200': '#d7ddfd',
					'300': '#b6bdfc',
					'400': '#8d93f8',
					'500': '#5e5ff4',
					'600': '#473dea',
					'700': '#392bd6',
					'800': '#2e23b4',
					'900': '#281f93',
					'950': '#120f57',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
