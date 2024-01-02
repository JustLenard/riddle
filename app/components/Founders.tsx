import Image from 'next/image'
import anifin from '../../public/anifin.png'
import clurna from '../../public/clurna.png'
import spotify from '../../public/spotify.png'
import Link from 'next/link'

const Founders = () => {
	return (
		<section className="flex flex-col justify-center gap-10 items-center my-20">
			<h3 className="sm:text-4xl text-2xl font-bold text-center">
				Backed by the founders and builders of:
			</h3>
			<div className="flex gap-10 flex-col sm:flex-row">
				<Link target="_blank" href={'https://www.klarna.com/us/'}>
					<Image src={clurna} width={136} height={46} alt="clurna" />
				</Link>
				<Link target="_blank" href={'https://anyfin.com/en_SE'}>
					<Image src={anifin} width={136} height={46} alt="anifin" />
				</Link>
				<Link target="_blank" href={'https://open.spotify.com'}>
					<Image src={spotify} width={136} height={46} alt="spotify" />
				</Link>
			</div>
		</section>
	)
}

export default Founders
