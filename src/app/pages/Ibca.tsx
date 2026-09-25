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
          content="iBCA For Creators — an 8-week build-as-you-learn programme helping African creators turn knowledge into content, audiences and income-generating businesses."
        />
        <meta property="og:title" content="iBCA For Creators | Rubi Pictures" />
        <meta
          property="og:description"
          content="iBCA For Creators — an 8-week build-as-you-learn programme helping African creators turn knowledge into content, audiences and income-generating businesses."
        />
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
              iBCA For Creators
            </h1>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#B93B8F] to-[#FF6B35] text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              Join iBCA Community
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}iBCA For Creators.webp`}
              alt="iBCA For Creators"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14 md:mb-20"
        >
          <p className="text-xs font-bold tracking-wider text-[#B93B8F] mb-3">
            OUR VISION
          </p>
          <p className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed max-w-4xl">
            To train 1 million African creators in the next 7 years, equipping them to build sustainable creator businesses and own what they create.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-xs font-bold tracking-wider text-[#B93B8F] mb-3">
            MISSION
          </p>
          <div className="space-y-6 text-lg text-[#1a1a1a] leading-relaxed max-w-4xl mb-12">
            <p>
              As an established African storytelling and production company, Rubi Pictures is expanding its work in the creator economy through iBCA For Creators.
            </p>
            <p>
              The rise of social platforms has created new opportunities for young Kenyans and Africans to build audiences around what they know, do, and care about. But access to a platform does not automatically translate into a sustainable business. Many emerging creators still lack practical mentorship, production and storytelling skills, business and monetisation knowledge, and the systems needed to move beyond chasing brand deals and build something they own.
            </p>
            <p>
              That is why we created iBCA For Creators.
            </p>
            <p>
              iBCA is an 8-week build-as-you-learn programme that helps emerging creators turn their knowledge, skills, experiences and ideas into content, audiences and income-generating businesses.
            </p>
            <p>
              Through hands-on mentorship, creators learn storytelling, content production, social media, AI workflows, audience development, monetisation and digital products, with a strong emphasis on building ownership rather than simply creating content for platforms.
            </p>
            <p>
              The programme works with young people and women from different backgrounds, helping them build creator businesses around their skills and lived experience.
            </p>
            <p className="font-bold text-black">
              iBCA For Creators: We build creator entrepreneurs.
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
