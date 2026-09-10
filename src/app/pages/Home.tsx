import { Helmet } from 'react-helmet-async';

const base = import.meta.env.BASE_URL;
const partners = [
  { name: "Al Jazeera", logo: `${base}Partners/Aljezeera.png` },
  { name: "CGTN", logo: `${base}Partners/CGTN.png` },
  { name: "DW", logo: `${base}Partners/DW.png` },
  { name: "CorpsAfrica", logo: `${base}Partners/CorpsAfrica.png` },
  { name: "Afristar&SGR", logo: `${base}Partners/AfriStart&SGR.jfif` },
];

export function Home() {
  return (
    <div>
      <Helmet>
        <title>Rubi Pictures | Award-Winning African Film Production Company</title>
        <meta name="description" content="We Tell Africa's Stories to the World. Award-winning film production based in Nairobi, Kenya." />
        <meta property="og:title" content="Rubi Pictures | Award-Winning African Media Production" />
        <meta property="og:description" content="We Tell Africa's Stories to the World. Award-winning film production based in Nairobi, Kenya." />
        <meta property="og:url" content="https://abdi-kumsa.github.io/Rubi-Pictures/" />
        <meta name="twitter:title" content="Rubi Pictures | Award-Winning African Media Production" />
        <meta name="twitter:description" content="We Tell Africa's Stories to the World. Award-winning film production based in Nairobi, Kenya." />
      </Helmet>
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
          <source src={`${base}Hero Section Video.mp4`} type="video/mp4" />
        </video>

        {/* Hero Text Overlay */}
        <div className="absolute bottom-24 md:bottom-20 left-0 right-0 px-6">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              We Tell Africa's Stories to the World
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Award-winning film production company based in Nairobi, Kenya
            </p>
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
            <div className="flex animate-marquee w-max">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 md:mx-8 px-4 md:px-8 py-4 border border-black/10 rounded-lg min-w-[140px] md:min-w-[180px] h-20 md:h-24 flex items-center justify-center bg-white"
                >
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain transition-all" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 md:mx-8 px-4 md:px-8 py-4 border border-black/10 rounded-lg min-w-[140px] md:min-w-[180px] h-20 md:h-24 flex items-center justify-center bg-white"
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
          animation: marquee 7.5s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
