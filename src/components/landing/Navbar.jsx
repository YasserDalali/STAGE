import { useState } from "react"
import { Ticket, Menu, X } from "lucide-react"

// Navigation component for the landing page
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-20 backdrop-blur-md bg-white/70 ">
            <div className="mx-20">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Ticket className="h-8 w-8" />
                        <span className="ml-2 text-xl font-bold">TicketFlow</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-500 hover:text-black transition-all">
                            Pricing
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black transition-all">
                            Features
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black transition-all">
                            Enterprise
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black transition-all">
                            Support
                        </a>
                        <button className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-all flex items-center gap-3">
                        <svg width="15px" height="15px" viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#ffff"/></svg> <span>Download
                            </span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">
                            Pricing
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">
                            Features
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">
                            Enterprise
                        </a>
                        <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">
                            Support
                        </a>
                        <button className="w-full text-center bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200">
                            Download
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar 