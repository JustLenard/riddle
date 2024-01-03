import Image from 'next/image'
import { SectionData } from '../utils/types'
import ProjectButton from './ProjectButton'

const Section: React.FC<SectionData> = ({ buttonText, content, heading, imgSrc }) => {
	return (
		<div className="group my-10 ">
			<div className="flex justify-center items-center group-odd:flex-row-reverse">
				<div className="sm:max-w-[50%] ">
					<div className="flex flex-col gap-5 items-center sm:items-start sm:max-w-[60%] mx-auto ">
						<h2 className="heading-text text-center sm:text-start">{heading}</h2>
						<span className="block secondary-text text-center sm:text-start">
							{content}
						</span>
						<ProjectButton>{buttonText}</ProjectButton>
					</div>
				</div>
				<div className="flex-1 max-w-[50%] hidden sm:block">
					<Image src={imgSrc} alt="person doing finances" width={800} height={800} />
				</div>
			</div>
		</div>
	)
}

export default Section
