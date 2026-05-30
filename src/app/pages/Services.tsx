import { useState } from "react";
import { Link } from "react-router";
import { Film, Video, Radio, Scissors, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Film,
    title: "Documentary Production",
    shortDesc: "Long-form storytelling and authentic narratives.",
    fullDesc:
      "We believe every story deserves to be told with authenticity and depth. Our documentary production services cover the entire journey—from concept to final delivery. We craft content that informs, inspires, and makes an impact.",
    detail:
      "Our focus is on telling authentic stories that resonate and create lasting impact on audiences worldwide.",
  },
  {
    icon: Video,
    title: "Commercial Films",
    shortDesc: "Creative storytelling that drives results.",
    fullDesc:
      "High-impact commercial content for brands and organizations. We combine creative storytelling with strategic messaging to create films that engage audiences and deliver measurable results.",
    detail:
      "We craft compelling brand stories that connect with audiences and drive meaningful engagement.",
  },
  {
    icon: Radio,
    title: "News Coverage",
    shortDesc: "Timely, accurate, and reliable reporting.",
    fullDesc:
      "On-the-ground news production and coverage across Africa. Our experienced teams deliver timely, accurate reporting for international broadcasters, ensuring your stories reach global audiences.",
    detail:
      "Fast-paced, high-quality news coverage that meets the demands of international media outlets.",
  },
  {
    icon: Scissors,
    title: "Post Production",
    shortDesc: "World-class editing and finishing services.",
    fullDesc:
      "Professional editing, color grading, sound design, and finishing services that meet international broadcast standards. We bring technical excellence to every frame.",
    detail:
      "Our post-production expertise ensures your content meets the highest technical and creative standards.",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-wider text-[#B93B8F] mb-3">
            WHAT WE DO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Bringing Stories to Life
          </h1>
          <p className="text-black/60 mb-16 max-w-xl">
            From powerful documentaries to global news coverage, we craft content
            that informs, inspires, and makes an impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Services List */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border-l-4 border-[#FF6B35] rounded-lg shadow-lg p-6 md:p-8"
          >
            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveService(index)}
                    className={`w-full flex items-start gap-4 p-4 rounded-lg transition-all text-left group ${
                      activeService === index
                        ? "bg-gradient-to-r from-[#B93B8F]/10 to-[#FF6B35]/10"
                        : "hover:bg-black/5"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        activeService === index
                          ? "bg-gradient-to-r from-[#B93B8F] to-[#FF6B35]"
                          : "bg-black/5"
                      }`}
                    >
                      <Icon
                        size={24}
                        className={
                          activeService === index ? "text-white" : "text-black"
                        }
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-black/60">
                        {service.shortDesc}
                      </p>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`flex-shrink-0 transition-colors ${
                        activeService === index
                          ? "text-[#FF6B35]"
                          : "text-black/30 group-hover:text-black/50"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Featured Service Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-black/90 to-black/80 rounded-lg overflow-hidden shadow-xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#B93B8F]/20 to-[#FF6B35]/20"></div>
            <div className="relative p-8 h-full flex flex-col">
              <p className="text-xs font-bold tracking-wider text-[#FF6B35] mb-4">
                {services[activeService].title.toUpperCase()}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Real Stories.
                <br />
                Real Impact.
              </h2>
              <p className="text-white/80 mb-4 leading-relaxed">
                {services[activeService].fullDesc}
              </p>
              <p className="text-white/70 mb-8 text-sm leading-relaxed">
                {services[activeService].detail}
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-black/80 transition-colors mt-auto self-start"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeService === index
                  ? "bg-[#FF6B35] w-8"
                  : "bg-black/20 hover:bg-black/30"
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
