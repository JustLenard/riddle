import Link from 'next/link'

const Footer = () => {
	return (
		<footer>
			<div className="flex justify-around">
				<div className="font-bold">© 2023 Magic Riddle Technology AB.</div>
				<Link
					className="link link-primary"
					href={
						'https://www.freeprivacypolicy.com/live/59cde2aa-c9d1-472b-a19a-5ec12c8efa5d'
					}
				>
					Privacy Policy
				</Link>
				<Link
					className="link link-primary"
					href={
						'https://docs.google.com/document/d/1lNkF5JPSzaKOxQj-n-Oi7dm7uHO_YeKtOY_FVXyPpdY/edit?usp=sharing'
					}
				>
					End User Agreement
				</Link>
				<div className="font-bold">🏠 Stockholm, Sweden</div>
			</div>
			<div className="flex justify-center items-center gap-6 flex-col my-6">
				<div>Want to get in touch? </div>
				<div>hello@getriddle.com</div>
			</div>
		</footer>
	)
}

export default Footer
