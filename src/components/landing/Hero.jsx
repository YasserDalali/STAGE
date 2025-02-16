import { AppWindow, AppWindowMacIcon, WindArrowDown } from "lucide-react"
import Button from "../global/Button"

// Hero section component for the landing page
function Hero() {
    return (
        <div className="relative overflow-hidden bg-black ">
            <div className="absolute m-10 rounded-lg inset-0 bg-gradient-to-br from-blue-600 via-violet-700 to-black-700 opacity-50" />
            <div className="relative md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center flex items-center">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-9xl font-bold mb-6 text-center">Requests Made Easy</h1>
                        <p className="lg-text-xl text-gray-300 mb-8 text-center">
                            The intelligent ticket management system that helps teams collaborate and resolve issues faster.
                        </p>
                        
                        <div className="flex justify-center">
                            <Button icon={<WindArrowDown />} content={`Download for Windows`} />
                        </div>
                        
                    </div>
                </div>
                <div className="mt-12">
                    <img
                        src="/public/assets/software.png"
                        alt="TicketFlow Dashboard"
                        className="rounded-lg shadow-2xl border border-gray-800"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero 