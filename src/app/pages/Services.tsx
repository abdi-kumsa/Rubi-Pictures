import { useState } from "react";
import { Link } from "react-router";
import { Compass, Calendar, Video, Scissors, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Compass,
    title: "Research and Development",
    shortDesc: "Prospecting and outreach capabilities across Africa.",
    fullDesc:
      "With extensive experience and networks across multiple sectors in nearly 50 African countries, our prospecting and outreach capabilities provide you with an unparalleled advantage.",
    detail: "",
  },
  {
    icon: Calendar,
    title: "Pre-Production",
    shortDesc: "Meticulous planning for smooth execution.",
    fullDesc:
      "We meticulously plan every aspect of production to ensure smooth execution. This includes production planning, logistics coordination, filming schedules, equipment checks and verification, permit acquisition, travel and regulatory compliance, risk assessments, contributor consent forms, location scouting, and crew coordination.",
    detail: "",
  },
  {
    icon: Video,
    title: "Production",
    shortDesc: "Highly skilled crews across diverse environments.",
    fullDesc:
      "We have a strong network of highly skilled documentary cinematographers (including underwater specialists), licensed drone and FPV operators, producers, production coordinators, transcribers, directors, and local stringers across Africa.",
    detail:
      "Our experienced teams are equipped to capture compelling stories in diverse and challenging environments across Africa.",
  },
  {
    icon: Scissors,
    title: "Post-Production",
    shortDesc: "Strong narrative structure, logic, and flow.",
    fullDesc:
      "Our founder's expertise and over 12 years of experience as a documentary commissioning editor give your story a strong narrative structure, logic, and flow. Combined with our highly skilled documentary video editors, we ensure exceptional quality from the start.",
    detail:
      "We make your first cut look like a fine cut.",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Services | Rubi Pictures</title>
        <meta name="description" content="Explore our services including Research and Development, Pre-Production, Production, and Post-Production." />
        <meta property="og:title" content="Services | Rubi Pictures" />
        <meta property="og:description" content="Explore our services including Research and Development, Pre-Production, Production, and Post-Production." />
      </Helmet>
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
            With over a decade of experience developing human-interest, impact-driven, and developmental documentary stories across Africa, we offer:
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
              {services[activeService].detail && (
                <p className="text-white/70 mb-8 text-sm leading-relaxed">
                  {services[activeService].detail}
                </p>
              )}
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
