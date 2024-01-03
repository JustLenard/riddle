import Link from 'next/link'
import ProjectButton from './ProjectButton'

const AppHeader = () => {
	return (
		<section className="flex flex-col justify-center items-center gap-8 sm:max-w-[50%] m-auto">
			<h1 className="sm:text-5xl text-3xl font-bold text-center">
				Joyful financial operations built for commerce 🪄
			</h1>
			<span className="secondary-text text-center">
				Say goodbye to fragmented systems, clunky interfaces and countless spreadsheets.
			</span>
			<span className="secondary-text text-center">
				Connect your payment and commerce stack, automate{' '}
				<span className="line-through">boring</span> financial admin and pay & get paid on
				your own terms— in one, unified system.
			</span>
			<ProjectButton>Get Started</ProjectButton>
		</section>
	)
}

export default AppHeader
