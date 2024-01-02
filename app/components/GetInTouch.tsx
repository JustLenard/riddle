import ProjectButton from './ProjectButton'

const GetInTouch = () => {
	return (
		<section className="flex flex-col justify-center gap-4 items-center">
			<h3 className="sm:text-4xl text-2xl font-bold text-center ">{'Interested?'}</h3>
			<h3 className="sm:text-4xl text-2xl font-bold text-center">
				{"Let's get in touch 🤝"}
			</h3>
			<ProjectButton>Talk to our team</ProjectButton>
		</section>
	)
}

export default GetInTouch
