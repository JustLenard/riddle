import ProjectButton from './ProjectButton'

const GetInTouch = () => {
	return (
		<section className="flex flex-col justify-center gap-4 items-center">
			<h3 className="heading-text text-center ">{'Interested?'}</h3>
			<h3 className="heading-text text-center">{"Let's get in touch 🤝"}</h3>
			<ProjectButton link="https://calendly.com/kyle-rowley-riddle/30min?month=2024-01">
				Talk to our team
			</ProjectButton>
		</section>
	)
}

export default GetInTouch
