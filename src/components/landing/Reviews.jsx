import { Heart, Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials1 = [
  {
    text: "This ticket system has transformed how our IT department handles internal requests. The automation is incredible!",
    author: "Sarah Chen",
    role: "IT Director, TechCorp"
  },
  {
    text: "We've seen a 60% reduction in response time since implementing this system. It's been a game-changer for our support team.",
    author: "Michael Rodriguez",
    role: "Support Manager, CloudScale"
  },
  {
    text: "The interface is intuitive and the automated routing has helped us manage tickets much more efficiently.",
    author: "Emily Watson",
    role: "Team Lead, InnoSys"
  },
  {
    text: "Best investment we've made for our internal support system. Our employees love how fast issues get resolved now.",
    author: "James Wilson",
    role: "Operations Director, FutureNet"
  }
];

const testimonials2 = [
  {
    text: "The analytics dashboard gives us incredible insights into our support performance. Highly recommended!",
    author: "Lisa Park",
    role: "Analytics Manager, DataFlow"
  },
  {
    text: "Setup was a breeze and the learning curve for our team was minimal. Excellent support system!",
    author: "David Thompson",
    role: "IT Manager, SecureNet"
  },
  {
    text: "The collaboration features have made it so much easier for our teams to work together on complex issues.",
    author: "Amanda Foster",
    role: "Support Lead, CollabTech"
  },
  {
    text: "We've been able to scale our support team efficiently thanks to the smart routing and automation features.",
    author: "Robert Chang",
    role: "CTO, GrowthCo"
  }
];

const TestimonialCard = ({ text, author, role }) => (
  <div className="w-[400px] mx-4 p-6 bg-white rounded-xl border border-gray-300">
    <p className="text-gray-800 mb-4">{text}</p>
    <div className="flex justify-between">

        <div>
            <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-sm text-gray-600">{role}</p> 
        </div>

        <div className="flex items-end">
            {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-500 text-sm">⭐</span>
            ))}
        </div>
     
    </div>
  </div>
);

function Reviews() {
  return (
    <div className="py-20 bg-gradient-to-r from-primary to-secondary shadow-md rounded-3xl overflow-hidden ">
      <div className="text-center mb-12 text-white">
        <h2 className="font-bold mb-4 text-6xl"> Loved by teams everywhere </h2>
        <p className="text-gray-200">See what our customers have to say about our platform</p>
      </div>

      <div className="space-y-8">
        {/* First marquee - Left to Right */}
        <Marquee
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={200}
          speed={20}
        >
          {testimonials1.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>

        {/* Second marquee - Right to Left */}
        <Marquee
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={200}
          speed={20}
          direction="right"
        >
          {testimonials2.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Reviews;
