import Image from 'next/image'
import image from '../public/image1.png'
import AppHeader from './components/Header'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { sectionData } from './utils/data'
import Founders from './components/Founders'
import GetInTouch from './components/GetInTouch'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="max-w-[1600px] min-h-[100vh] mx-auto p-4">
				<AppHeader />
				{sectionData.map((data, i) => (
					<Section {...data} key={i} />
				))}
				<Founders />
				<GetInTouch />
				<JoinUs />
				<Footer />
			</div>
		</>
	)
}

export default Home
