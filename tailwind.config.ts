import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        title: ['var(--font-righteous)'],
        sans: ['var(--font-inter)'],
      },
      colors:{
        'primary': {
					50: '#f0faff',
					100: '#e0f5fe',
					200: '#b9edfe',
					300: '#7ce0fd',
					400: '#36d1fa',
					500: '#0cbceb',
					600: '#00a3d7',
					700: '#0179a3',
					800: '#066686',
					900: '#0b546f',
					950: '#07364a',
				}
      }
    },
  },
  plugins: [],
}
export default config
