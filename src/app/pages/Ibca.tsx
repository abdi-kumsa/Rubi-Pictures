import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const SKOOL_URL = "https://www.skool.com/ibca-indie-creator-academy-6275";

export function Ibca() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>iBCA For Creators | Rubi Pictures</title>
        <meta
          name="description"
          content="iBCA For Creators — an 8-week build-as-you-learn program helping African creators turn knowledge into content, audiences and income-generating businesses."
        />
        <meta property="og:title" content="iBCA For Creators | Rubi Pictures" />
        <meta
          property="og:description"
          content="iBCA For Creators — an 8-week build-as-you-learn program helping African creators turn knowledge into content, audiences and income-generating businesses."
        />
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#B93B8F] mb-4">
                CREATOR ECONOMY
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.05]">
                iBCA For Creators
              </h1>
            </div>

            <p className="text-lg text-black/60 leading-relaxed max-w-md">
              An 8-week build-as-you-learn program for emerging Kenyan and African creators.
            </p>

            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit px-8 py-3.5 bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Join iBCA Community
            </a>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative overflow-hidden rounded-2xl text-white p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[280px]"
            style={{
              background: "linear-gradient(135deg, #41C6DB 0%, #2589D0 48%, #0753BD 100%)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_100%,rgba(255,255,255,0.14),transparent_55%)]" />
            <div className="pointer-events-none absolute left-0 top-8 bottom-8 w-1 rounded-full bg-white/50" />

            <div className="relative pl-5">
              <p className="text-xs font-bold tracking-[0.2em] text-white/85 mb-5">
                OUR VISION
              </p>
              <p className="text-2xl md:text-3xl font-bold leading-snug mb-6">
                Train{" "}
                <span className="text-white underline decoration-white/40 decoration-2 underline-offset-4">
                  1 million
                </span>{" "}
                African creators in 7 years.
              </p>
              <p className="text-base md:text-lg text-white/85 leading-relaxed">
                Equipping them to build sustainable creator businesses and own what they create.
              </p>
            </div>
          </motion.aside>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-[#B93B8F] mb-3">
            MISSION
          </p>
          <div className="space-y-6 text-lg text-[#1a1a1a] leading-relaxed max-w-4xl mb-12">
            <p>
              As an established African storytelling and production company, Rubi Pictures is expanding into the creator economy through iBCA For Creators.
            </p>
            <p>
              Social platforms have opened new opportunities for young Kenyans and Africans to build audiences around what they know and care about. But a platform alone doesn't guarantee a sustainable business. Many emerging creators lack mentorship, creative storytelling and production skills, monetisation knowledge, and the systems to move beyond chasing brand deals and build something they own.
            </p>
            <p>
              That's why we created iBCA For Creators, an 8-week build-as-you-learn program that helps emerging creators turn their knowledge, skills and ideas into content, audiences and sustainable income-generating businesses.
            </p>
            <p>
              Through hands-on mentorship, creators learn storytelling, content production, social media, AI video production & workflows, audience growth, monetisation and digital products, with a focus on ownership rather than just creating for platforms. We train young people and women from diverse backgrounds, helping them build businesses around their skills and lived experience.
            </p>
          </div>

          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            Join iBCA Community
          </a>
        </motion.section>
      </div>
    </div>
  );
}
