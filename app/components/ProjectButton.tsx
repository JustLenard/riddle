import { PropsWithChildren } from 'react'

type Props = {
	link?: string
}

const ProjectButton: React.FC<PropsWithChildren<Props>> = ({
	children,
	link = 'https://tally.so/r/3qaoO2',
}) => {
	return (
		<a
			// className="inline-flex items-center px-2 py-1 border-2 rounded-md text-sm font-bold  gap-2 focus:scale-[1.15] hover:scale-[1.2] active:scale-105 transition cursor-pointer  dark:bg-white/10 dark:text-white"
			className='btn'
			href={link}
			target="_blank"
		>
			{children}
		</a>
	)
}

export default ProjectButton
