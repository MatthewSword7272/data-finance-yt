import {ReactTyped} from 'react-typed'
import Button from './Button'

export default function HeroSection() {
    const heroStrings = {
        caption: 'Growing with data analytics',
        heading: 'Grow with data',
        subHeading: 'Fast, flexible financing for ',
        typed: ['BTB', 'BTC', 'SASS'],
        description: 'Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms',
        buttonText: 'Get Started',
    }
    return (
        <div className={'text-center container mx-auto h-screen w-full flex flex-col justify-center space-y-6'}>
            <p className={'text-emerald-600 uppercase p-2 font-bold md:text-3xl text-xl'}>{heroStrings.caption}</p>
            <h1 className={'md:text-7xl sm:text-6xl text-4xl font-bold'}>{heroStrings.heading}</h1>
            <div className={'flex justify-center items-center space-x-3 md:text-5xl sm:text-4xl text-xl font-bold'}>
                <p>{heroStrings.subHeading}</p>
                <ReactTyped strings={heroStrings.typed} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className={' sm:text-2xl text-xl font-bold text-gray-500'}>{heroStrings.description}</p>
            <div>
                <Button className={'bg-emerald-600 font-medium w-52 py-3 px-6 rounded-md text-black'}>
                    {heroStrings.buttonText}
                </Button>
            </div>
        </div>
    )
}
