import Marquee from "react-fast-marquee";


function LogoMarquee() {
    const logos = [
      { name: 'Company1', initials: 'AB' },
      { name: 'Company2', initials: 'CD' },
      { name: 'Company3', initials: 'EF' },
      { name: 'Company7', initials: 'MN' },
      { name: 'Company8', initials: 'OP' },
    ]
  
    return (
      <div className="relative w-full overflow-hidden bg-white py-10 my-10">
        {/* Gradient masks for vignette effect */}
        <div className="absolute left-0 top-0 z-10 h-full w-[200px] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-[200px] bg-gradient-to-l from-white to-transparent" />
        
        {/* Marquee content */}
        <Marquee pauseOnHover speed={10}>
        <div className="animate-marquee flex items-center">
          {/* First set of logos */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center"
            >
              <span className="text-4xl font-bold text-gray-500">{logo.name}</span>
            </div>
          ))}
        </div></Marquee>
        
      </div>
    )
  }
  
  export default LogoMarquee
  