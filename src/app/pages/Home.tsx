import { Play } from "lucide-react";

const partners = [
  { name: "Al Jazeera", logo: "/Partners/Aljezeera.png" },
  { name: "IFRC", logo: "/Partners/IFRC.png" },
  { name: "CGTN", logo: "/Partners/CGTN.png" },
  { name: "DW", logo: "/Partners/DW.png" },
  { name: "Corps Africa", logo: "/Partners/CorpsAfrica.png" },
  { name: "Afristart&SGR", logo: "/Partners/AfriStart&SGR.jpg" },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-[#1a1a1a] flex items-center justify-center">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/Hero Section Video.mp4" type="video/mp4" />
        </video>

        {/* Hero Text Overlay */}
        <div className="absolute bottom-24 md:bottom-20 left-0 right-0 px-6">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              We Tell Africa's Stories to the World
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Award-winning film and media production based in Nairobi, Kenya
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-12 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-white animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Partner Logos Marquee */}
      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-center text-sm font-bold text-black mb-8 tracking-wider">
            TRUSTED BY
          </p>

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 px-8 py-4 border border-black/10 rounded-lg min-w-[180px] h-24 flex items-center justify-center bg-white"
                >
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain transition-all" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 px-8 py-4 border border-black/10 rounded-lg min-w-[180px] h-24 flex items-center justify-center bg-white"
                >
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
