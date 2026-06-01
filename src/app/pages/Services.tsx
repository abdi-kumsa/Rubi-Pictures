import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet-async';

const services = [
  {
    title: "Research and Development",
    fullDesc:
      "With extensive experience and networks across multiple sectors in nearly 50 African countries, our prospecting and outreach capabilities provide you with an unparalleled advantage.",
  },
  {
    title: "Pre-Production",
    fullDesc:
      "We meticulously plan every aspect of production to ensure smooth execution. This includes production planning, logistics coordination, filming schedules, equipment checks and verification, permit acquisition, travel and regulatory compliance, risk assessments, contributor consent forms, location scouting, and crew coordination.",
  },
  {
    title: "Production",
    fullDesc:
      "We have a strong network of highly skilled documentary cinematographers (including underwater specialists), licensed drone and FPV operators, producers, production coordinators, transcribers, directors, and local stringers across Africa. Our experienced teams are equipped to capture compelling stories in diverse and challenging environments across Africa.",
  },
  {
    title: "Post-Production",
    fullDesc:
      "Our founder's expertise and over 12 years of experience as a documentary commissioning editor give your story a strong narrative structure, logic, and flow. Combined with our highly skilled documentary video editors, we ensure exceptional quality from the start. We make your first cut look like a fine cut.",
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Services | Rubi Pictures</title>
        <meta name="description" content="Explore our services including Research and Development, Pre-Production, Production, and Post-Production." />
        <meta property="og:title" content="Services | Rubi Pictures" />
        <meta property="og:description" content="Explore our services including Research and Development, Pre-Production, Production, and Post-Production." />
      </Helmet>
      
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Left: Dark Card with Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#3a272b] to-[#251e1f] rounded-xl p-8 md:p-12 h-full flex items-center shadow-2xl"
          >
            <h2 className="text-xl md:text-2xl font-medium text-white leading-relaxed">
              With over a decade of experience developing human-interest, impact-driven, and developmental documentary stories across Africa, we offer:
            </h2>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-2"
          >
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={service.title} 
                  className="border-b border-gray-200 last:border-0 pb-2"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-[#B93B8F] transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-[#B93B8F] ml-4 flex-shrink-0">
                      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-black/70 leading-relaxed pb-4 text-base md:text-lg">
                          {service.fullDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
