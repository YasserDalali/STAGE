function Section() {
    return (
        <section className="relative flex flex-col lg:flex-row justify-between mx-4 md:mx-20 my-16 md:my-32">
            {/* Main Grid Background */}
            <div className="absolute inset-0 -z-10 opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="w-full lg:w-1/3 relative mb-10 lg:mb-0 opacity-0 animate-[slideInLeft_1s_ease-out_0.5s_forwards]">
                {/* Circular Grid Background */}
                <div className="absolute -z-10 w-[500px] h-[500px] -left-20 -top-20 hidden lg:block">
                    <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
                        <div className="absolute inset-0 rounded-full bg-gradient-radial from-white via-white/80 to-transparent"></div>
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                    Make managing requests less painful
                </h2>
                <ul className="mt-10 space-y-6">
                    {[
                        'Manage your day-to-day work tasks',
                        'Prioritize tasks depending on urgency',
                        'Assign tasks to others seamlessly',
                        'Get notified on the go!'
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center space-x-4 opacity-0 animate-[slideInLeft_0.5s_ease-out_forwards]"
                            style={{ animationDelay: `${(index + 2) * 0.2}s` }}
                        >
                            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                            <span className="text-lg md:text-xl text-gray-600">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-end w-full lg:w-2/3 opacity-0 animate-[slideInRight_1s_ease-out_1.2s_forwards]">
                <img
                    className="rounded-3xl w-full max-w-[50rem] shadow-xl hover:scale-[1.02] transition-transform duration-500"
                    src="https://www.qodo.ai/wp-content/uploads/2024/11/qodomerge.gif"
                    alt="Task Management Demo"
                />
            </div>
        </section>
    )
}

export default Section

