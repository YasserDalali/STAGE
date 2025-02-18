import Navbar from '../landing/Navbar'
import Hero from '../landing/Hero'
import Features from '../landing/Features'
import LogoMarquee from '../landing/LogoMarquee'
import Reviews from '../landing/Reviews'
import Section from '../landing/Section'
import Footer from '../landing/Footer'
import TaskTableSearch from '../main/tableView/TaskTableSearch'

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