import { Link } from "react-router";

export function About() {

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12">
          Africa's Premier Production House
        </h1>

        <div className="space-y-6 text-lg text-[#1a1a1a] leading-relaxed mb-24">
          <p>
            Rubi Pictures is a Nairobi-based film and media production company dedicated to telling authentic African stories with world-class production quality. We have built a proven track record working with some of the world's most respected international broadcasters and organizations — including Al Jazeera, CGTN, DW, the International Federation of the Red Cross, and CorpsAfrica.
          </p>
          <p>
            We specialize in human-interest documentaries, impact-driven development storytelling, commercial films, and full-cycle post-production services. From research and scripting through to final delivery, we manage every stage of production with precision, integrity, and creative excellence.
          </p>
          <p>
            What sets us apart is rare: deep local knowledge across Kenya and Africa, combined with the editorial standards demanded by the world's most discerning broadcasters and brands. If you're looking for a production partner who brings both heart and professionalism to every frame — you've found them.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-xs font-bold tracking-wider text-[#B93B8F] mb-3">
            LEADERSHIP
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Meet the Founder
          </h2>
          <p className="text-black/60 mb-16 max-w-xl">
            A visionary storyteller and producer dedicated to bringing authentic African stories to the world stage. Discover the multi-faceted expertise behind Rubi Pictures.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left: Founder Image Placeholder */}
            <div className="bg-gradient-to-br from-[#B93B8F]/10 to-[#FF6B35]/10 rounded-lg shadow-lg overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[500px] border border-black/5 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B93B8F] to-[#FF6B35] rounded-bl-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#B93B8F] to-[#FF6B35] rounded-tr-full opacity-20"></div>

              <img src="/CEO/Rahab.png" alt="Rahab Wambui" className="w-full h-full object-cover relative z-10" />
            </div>

            {/* Right: Featured Detail Card */}
            <div className="bg-gradient-to-br from-black/90 to-black/80 rounded-lg overflow-hidden shadow-xl relative flex flex-col justify-center min-h-0 md:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B93B8F]/20 to-[#FF6B35]/20"></div>
              <div className="relative p-8 md:p-12 h-full flex flex-col">
                <p className="text-xs font-bold tracking-wider text-[#FF6B35] mb-2">
                  CREATIVE PRODUCER | DIRECTOR
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Rahab Wambui
                </h2>

                <div className="space-y-6 text-white/80 leading-relaxed text-lg mb-8">
                  <p>
                    With nearly 13 years of hands-on production experience, Rahab Wambui has established herself as one of Africa's foremost documentary producers and directors. As Commissioning Editor and Series Producer at China Global Television Network (CGTN Africa) for close to a decade, she led multi-country productions across Eastern, Southern, Northern, and Central Africa — overseeing everything from concept development to post-production delivery.
                  </p>
                  <p>
                    Her work has reached global audiences through Al Jazeera, CGTN, DW, and leading development organizations. In 2025, she directed episodes for CGTN France's landmark Chine-Afrique 2035 series spanning nine African countries. Her portfolio spans human-interest stories, environmental and development impact documentaries, and high-stakes promotional films used as marketing tools by multinational corporations across Southeast Asia and beyond.
                  </p>
                  <p>
                    Rahab doesn't just produce content — she builds narratives that move people, shift perceptions, and open doors. When you work with Rubi Pictures, you work directly with that level of expertise.
                  </p>
                </div>

                <div className="mt-auto border-t border-white/10 pt-6">
                  <p className="text-xs font-bold tracking-wider text-white/60 mb-3">
                    AREAS OF EXPERTISE
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">Creative Direction</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">Documentary Production</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">Series Production</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">Brand Storytelling</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm">Post-Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/work"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
