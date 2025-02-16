// Feature card component for reusability
function FeatureCard({ img, title, description, color, index }) {
    return (
        <div
            className={`${color} border border-slate-200 shadow-md p-8 rounded-xl opacity-0 animate-[scaleIn_0.5s_ease-out_forwards]`}
            style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
        >
            <div className="flex items-center justify-center mb-6 overflow-hidden hover:scale-110 hover:shadow-2xl transition-transform duration-500">
                <img
                    src={img}
                    className="w-full max-w-[29rem] "
                    alt={title}
                />
            </div>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-100">{description}</p>
        </div>
    );
}

// Features section component for the landing page
function Features() {
    const features = [
        {
            img: "https://team.atlassian.com/Images/ConnectJira/Goals/GoalsFeature1.svg",
            title: "Smart Routing",
            description: "Automatically route tickets to the right team members based on skills and workload.",
            color: "bg-gradient-to-br from-green-500 to-blue-500 text-white"
        },
        {
            img: "https://team.atlassian.com/Images/ConnectJira/Goals/GoalsFeature2.svg",
            title: "Team Collaboration",
            description: "Work together seamlessly with integrated chat, notes, and task management.",
            color: "bg-gradient-to-br from-yellow-500 to-red-500 text-white"
        },
        {
            img: "https://team.atlassian.com/Images/ConnectJira/Goals/GoalsFeature3.svg",
            title: "Enterprise Security",
            description: "Keep your data secure with end-to-end encryption and role-based access control.",
            color: "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
        }
    ];

    return (
        <div className="mx-4 md:mx-20 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="font-sora font-semibold text-3xl md:text-5xl mb-10 opacity-0 animate-[slideInLeft_1s_ease-out_forwards]">
                Get things done faster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Features;