import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'

// Main landing page component that combines all sections
function LandingPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <Hero />
            <Features />
        </div>
    )
}

export default LandingPage 