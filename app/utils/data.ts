import { SectionData } from './types'
import image1 from '../../public/image1.png'
import image2 from '../../public/image2.png'
import image3 from '../../public/image3.png'

export const sectionData: SectionData[] = [
	{
		heading: `Easy Financial Reconciliation 🧙`,
		content: `Automate Order to Cash and three-way matching to close your books faster and get
        valuable time back each week.`,
		buttonText: `Sign me Up!`,
		imgSrc: image1,
	},
	{
		heading: `Faster Payments ⚡️`,
		content: `Pay & Get paid - faster and on your own terms. Take control of your business, and your cashflow.`,
		buttonText: `Join the waitlist`,
		imgSrc: image2,
	},
	{
		heading: `Insights & Audit trails 🔬`,
		content: `Drive more revenue across your business with comprehensive insights from your payment and commerce stacks.`,
		buttonText: `Get Started`,
		imgSrc: image3,
	},
]
