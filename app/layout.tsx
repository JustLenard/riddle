import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeSwitch from './components/Theme-switch'
import ThemeContextProvider from './context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Riddle',
	description: 'Fast and simple financial operations built for the future of Commerce.',
	icons: {
		icon: [
			{
				rel: 'icon',
				type: 'image/png',
				url: '/logo.png',
				media: '(prefers-color-scheme: white)',
			},
			{
				rel: 'icon',
				type: 'image/png',
				url: '/logo_white.png',
				media: '(prefers-color-scheme: dark)',
			},

			// {
			// 	media: 'prefers-color-scheme: light',
			// 	url: '/logo.png',
			// 	href: '/logo.png',
			// },
			// {
			// 	media: 'prefers-color-scheme: dark',
			// 	url: '/logo_white.png',
			// 	href: '/logo_white.png',
			// },
		],
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeContextProvider>
					{children}
					<ThemeSwitch />
				</ThemeContextProvider>
			</body>
		</html>
	)
}
