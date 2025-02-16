import { Ticket, Users, Shield } from "lucide-react"

// Feature card component for reusability
function FeatureCard({ icon: Icon, title, description, iconColor }) {
    return (
        <div className="bg-gray-900 p-8 rounded-xl">
            <div className="h-48 flex items-center justify-center mb-6">
                <Icon className={`h-24 w-24 ${iconColor}`} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    )
}

// Features section component for the landing page
function Features() {
    const features = [
        {
            icon: Ticket,
            title: "Smart Routing",
            description: "Automatically route tickets to the right team members based on skills and workload.",
            iconColor: "text-purple-500"
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description: "Work together seamlessly with integrated chat, notes, and task management.",
            iconColor: "text-blue-500"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Keep your data secure with end-to-end encryption and role-based access control.",
            iconColor: "text-green-500"
        }
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    )
}

export default Features 