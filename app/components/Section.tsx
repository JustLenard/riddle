import Image from 'next/image'
import { SectionData } from '../utils/types'
import ProjectButton from './ProjectButton'

const Section: React.FC<SectionData> = ({ buttonText, content, heading, imgSrc }) => {
	return (
		<div className="group my-10 ">
			<div className="flex justify-center items-center group-odd:flex-row-reverse">
				<div className="max-w-[50%] ">
					<div className="flex flex-col gap-5 items-start max-w-[60%]  mx-auto">
						<h2 className="text-4xl font-bold">{heading}</h2>
						<span className="block secondaryText">{content}</span>
						<ProjectButton>{buttonText}</ProjectButton>
					</div>
				</div>
				<div className="flex-1 max-w-[50%]">
					<Image src={imgSrc} alt="person doing finances" width={800} height={800} />
				</div>
			</div>
		</div>
	)
}

export default Section
