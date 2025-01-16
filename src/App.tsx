import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TwoColumnSection from './components/TwoColumnSection'

function App() {
    const analyticsSection = {
        image: 'https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/laptop.jpg?raw=true',
        caption: 'Data Analytics Dashboard',
        heading: 'Manage Data Analytics',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttonText: 'Get Started',
    }
    return (
        <>
            <Header />
            <HeroSection />
            <TwoColumnSection
                caption={analyticsSection.caption}
                textOrder="right"
                heading={analyticsSection.heading}
                image={analyticsSection.image}
                buttonText={analyticsSection.buttonText}
                description={analyticsSection.description}
                className={'bg-white text-black md:text-start text-center py-10'}
            />
        </>
    )
}

export default App
