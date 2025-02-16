function Section() {
    return (
        <section className="relative flex justify-between mx-20 my-32">
            {/* Main Grid Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="w-1/3 relative">
                {/* Circular Grid Background */}
                <div className="absolute -z-10 w-[500px] h-[500px] -left-20 -top-20">
                    <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
                        <div className="absolute inset-0 rounded-full bg-gradient-radial from-white via-white/80 to-transparent"></div>
                    </div>
                </div>

                <h2 className="text-6xl font-semibold">Make managing requests less painful</h2>
                <ul className="mt-10 list-disc pl-5 text-xl">
                    <li className="mt-4">Manage your day-to-day work tasks</li>
                    <li className="mt-4">Prioritize tasks depending on urgency</li>
                    <li className="mt-4">Assign tasks to others seamlessly</li>
                    <li className="mt-4">Get notified on the go!</li>
                </ul>
            </div>

            <div>
                <img
                    className="rounded-3xl w-[50rem] shadow-xl"
                    src="https://www.qodo.ai/wp-content/uploads/2024/11/qodomerge.gif"
                    alt="Task Management Demo"
                />
            </div>
        </section>
    )
}

export default Section

