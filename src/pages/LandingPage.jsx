import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import LogoMarquee from '../components/landing/LogoMarquee'
import Reviews from '../components/landing/Reviews'
import Section from '../components/landing/Section'
import Footer from '../components/landing/Footer'

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


            <div className='mt-5'>
                <Footer></Footer>
            </div>

        </div>
    )
}

export default LandingPage 