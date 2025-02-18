import { useState, useEffect } from "react"
import { Ticket, Menu, X } from "lucide-react"

// Navigation component for the landing page
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`sticky top-0 z-20 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-lg' : 'bg-transparent'
            }`}>
            <div className="mx-4 md:mx-20">
                <div className="flex justify-between h-16 items-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                    <div className="cursor-pointer flex items-center group">
                        <Ticket className=" h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
                        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                            TicketFlow
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Pricing', 'Features', 'Enterprise', 'Support'].map((item, index) => (
                            <a
                                key={item}
                                href="#"
                                className="text-gray-500 hover:text-black transition-all opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-all flex items-center gap-3 opacity-0 animate-[fadeIn_0.5s_ease-out_0.6s_forwards] hover:scale-105">
                            <svg width="15px" height="15px" viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#ffff" />
                            </svg>
                            <span>Download</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-500 hover:text-black transition-colors p-2"
                        >
                            {isMenuOpen ?
                                <X className="h-6 w-6 animate-[scaleIn_0.2s_ease-out]" /> :
                                <Menu className="h-6 w-6 animate-[scaleIn_0.2s_ease-out]" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0 ' : 'hidden opacity-0 -translate-y-10 pointer-events-none'
                }`}>
                <div className="px-4 pt-2 pb-3 space-y-1 backdrop-blur-md bg-white/70 shadow-lg">
                    {['Pricing', 'Features', 'Enterprise', 'Support'].map((item, index) => (
                        <a
                            key={item}
                            href="#"
                            className="block px-3 py-2 text-gray-500 hover:text-black transition-colors"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item}
                        </a>
                    ))}
                    <button className="w-full text-center bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        <svg width="15px" height="15px" viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                            <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#ffff" />
                        </svg>
                        <span>Download</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 