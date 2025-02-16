
// Feature card component for reusability
function FeatureCard({img, title, description, color }) { // Renamed 'icon' to 'Icon' for clarity
    return (
        <div className={`${color}  border border-slate-200 shadow-md p-8 rounded-xl`}>
            <div className="flex items-center justify-center mb-6">
                <img src={img} className="w-[29rem] " alt="" />
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
        <div className="mx-20 px-4 sm:px-6 lg:px-8 py-24">
            <h2 className="font-sora font-semibold text-xl md:text-5xl mb-10">Get things done faster</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
}

export default Features;