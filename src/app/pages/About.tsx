import { Link } from "react-router";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

export function About() {

  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us | Rubi Pictures</title>
        <meta name="description" content="Learn more about Rubi Pictures — Africa's Premier Production House telling authentic African stories with world-class production quality." />
        <meta property="og:title" content="About Us | Rubi Pictures" />
        <meta property="og:description" content="Learn more about Rubi Pictures — Africa's Premier Production House telling authentic African stories with world-class production quality." />
      </Helmet>
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12">
            Africa's Premier Production House
          </h1>

          <div className="space-y-6 text-lg text-[#1a1a1a] leading-relaxed mb-12">
            <p>
              Rubi Pictures is a Nairobi-based film production company dedicated to telling authentic African stories with world-class production quality. We have built a proven track record working with some of the world's most respected international broadcasters and organizations, including Al Jazeera, CGTN Beijing, CGTN France, CGTN Africa, DW, the International Federation of the Red Cross (IFRC), and CorpsAfrica.
            </p>
            <p>
              We specialize in human-interest documentaries, impact-driven development storytelling, promotional brand films, and full-cycle post-production services.
            </p>
            <p>
              From research and scripting through to final delivery, we manage every stage of production with creative excellence.
            </p>
            <p>
              What sets us apart is deep local knowledge across 50 African countries in Africa, combined with the editorial standards demanded by the world's most discerning broadcasters and brands.
            </p>
            <p>
              If you're looking for a production partner who brings both heart and professionalism to every frame, you've found them.
            </p>
          </div>
        </motion.div>

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
