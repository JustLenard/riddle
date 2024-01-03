import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeSwitch from './components/Theme-switch'
import ThemeContextProvider from './context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Riddle',
	description: 'Fast and simple financial operations built for the future of Commerce.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-white dark:bg-gray-800 dark:text-white text-black`}
			>
				<ThemeContextProvider>
					{children}
					<ThemeSwitch />
				</ThemeContextProvider>
			</body>
		</html>
	)
}
