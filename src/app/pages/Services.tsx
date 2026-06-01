import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

export function Services() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Services | Rubi Pictures</title>
        <meta name="description" content="Explore our services including Documentary Production, Commercial Films, News Coverage, and Post Production." />
        <meta property="og:title" content="Services | Rubi Pictures" />
        <meta property="og:description" content="Explore our services including Documentary Production, Commercial Films, News Coverage, and Post Production." />
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
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Bringing Stories to Life
          </h1>
          
          <div className="text-lg text-[#1a1a1a] leading-relaxed max-w-4xl space-y-6">
            <p>
              With over a decade of experience developing human-interest, impact-driven, and developmental documentary stories across Africa, we offer:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-[#FF6B35] font-bold text-xl">•</span>
                <div>
                  <strong>Research and Development</strong> – With extensive experience and networks across multiple sectors in nearly 50 African countries, our prospecting and outreach capabilities provide you with an unparalleled advantage.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FF6B35] font-bold text-xl">•</span>
                <div>
                  <strong>Pre-Production</strong> – We meticulously plan every aspect of production to ensure smooth execution. This includes production planning, logistics coordination, filming schedules, equipment checks and verification, permit acquisition, travel and regulatory compliance, risk assessments, contributor consent forms, location scouting, and crew coordination.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FF6B35] font-bold text-xl">•</span>
                <div>
                  <strong>Production</strong> – We have a strong network of highly skilled documentary cinematographers (including underwater specialists), licensed drone and FPV operators, producers, production coordinators, transcribers, directors, and local stringers across Africa. Our experienced teams are equipped to capture compelling stories in diverse and challenging environments across Africa.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-[#FF6B35] font-bold text-xl">•</span>
                <div>
                  <strong>Post-Production</strong> – Our founder's expertise and over 12 years of experience as a documentary commissioning editor give your story a strong narrative structure, logic, and flow. Combined with our highly skilled documentary video editors, we ensure exceptional quality from the start. We make your first cut look like a fine cut.
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
