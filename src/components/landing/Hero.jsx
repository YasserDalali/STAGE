import { Link } from "react-router-dom"
import Button from "../global/Button"
import imgSoft from "./software.png"
// Hero section component for the landing page
function Hero() {
    return (
        <div className="relative overflow-hidden bg-white text-white min-h-[90vh] flex items-center">
            <div className="absolute rounded-3xl mx-[5%] inset-0 bg-gradient-to-br from-primary to-secondary opacity-100 animate-[fadeIn_2s_ease-in_forwards]" />

            <div className="relative w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
                    <div className="text-center">
                        <div className="lg:max-w-3xl mx-auto space-y-8 opacity-0 animate-[slideInDown_1s_ease-out_0.5s_forwards]">
                            <h1 className="text-5xl max-w-xs  md:text-7xl md:max-w-md mx-auto lg:text-9xl  lg:max-w-3xl font-bold text-center">
                                Requests Made Easy
                            </h1>
                            <p className="text-base max-w-sm md:text-xl md:max-w-md text-gray-100 lg:max-w-2xl mx-auto">
                                The intelligent ticket management system that helps teams collaborate and resolve issues faster.
                            </p>

                            <div className=" flex justify-center opacity-0 flex-col animate-[slideInUp_1s_ease-out_1s_forwards]">
                                <Button
                                    icon={
                                        <svg width="20px" height="20px" viewBox="-0.5 0 257 257" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                            <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z" fill="#000" />
                                        </svg>
                                    }
                                    content="Download for Windows"
                                />

                                <div>Enterprise member? <Link to={"/table"} className="underline hover:font-semibold cursor-pointer transition-all">Login here
                                    </Link></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 opacity-0 animate-[scaleIn_1s_ease-out_1.5s_forwards]">
                        <img
                            src={imgSoft}
                            alt="TicketFlow Dashboard"
                            className="rounded-3xl shadow-2xl w-[90rem] hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero 