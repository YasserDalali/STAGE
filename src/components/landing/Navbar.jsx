import { useState } from "react"
import { Ticket, Menu, X } from "lucide-react"

// Navigation component for the landing page
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Ticket className="h-8 w-8" />
                        <span className="ml-2 text-xl font-bold">TicketFlow</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-300 hover:text-white">
                            Pricing
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Features
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Enterprise
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Support
                        </a>
                        <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200">
                            Download
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