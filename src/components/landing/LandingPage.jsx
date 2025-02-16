import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import LogoMarquee from './LogoMarquee'
import Reviews from './Reviews'
import Section from './Section'

// Main landing page component that combines all sections
function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-slate-800">
            <Navbar />
            <Hero />
            <div className="mx-20">
            <LogoMarquee></LogoMarquee>
            </div>


            <Features />
            <Section></Section>
            <div className="mx-20">
            <Reviews></Reviews>
            </div>

        </div>
    )
}

export default LandingPage 