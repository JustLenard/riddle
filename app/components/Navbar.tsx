'use client'

import Image from 'next/image'
import logo from '../../public/logo.png'
import logoWhite from '../../public/logo_white.png'

import Link from 'next/link'
import { useTheme } from '../context/theme-context'
import ProjectButton from './ProjectButton'

const Navbar = () => {
	const { theme } = useTheme()
	return (
		<nav className=" p-4 border border-b-black/5 shadow mb-20">
			<div className="flex justify-between max-w-[1600px] m-auto">
				<Link href={'/'}>
					<Image
						src={theme === 'dark' ? logo : logoWhite}
						width={50}
						height={50}
						alt="logo"
					/>
				</Link>
				<ProjectButton>Early Access</ProjectButton>
			</div>
		</nav>
	)
}

export default Navbar
