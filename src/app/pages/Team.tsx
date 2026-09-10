import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    name: "Rahab Wambui",
    role: "Creative producer and Commissioning Editor",
    image: "Team/Rahab.webp",
    paragraphs: [
      "With nearly 13 years of hands-on production experience, Rahab Wambui has established herself as one of Africa's foremost documentary producers. As Commissioning Editor and Series Producer at China Global Television Network (CGTN Africa) for close to a decade, she led multi-country productions across Eastern, Southern, Northern and Central Africa with strict delivery timelines, overseeing everything from concept development to post-production delivery. At the end of her tenure, she'd led teams to produce 167 30-minute documentaries across Africa.",
      "Her work has reached global audiences through CGTN, Al Jazeera, DW and development organizations like the IFRC, CorpsAfrica and Wildlife Works. In 2025, she directed episodes for CGTN France's Chine-Afrique 2035 redéfinir le futur series, spanning six African countries and delivering the contracted 135 minutes of documentary masters, each 15 minutes long, as well as behind-the-scenes photos of the teams across the six countries. Her portfolio spans human-interest stories, environmental and development impact documentaries.",
      "Rahab doesn't just produce content; she builds narratives that move people, shift perceptions and open doors. She also brings a wealth of experience working with teams remotely and on the ground. When you work with Rubi Pictures, you work directly with that level of expertise.",
    ],
  },
  {
    name: "Saverio Opiyo",
    role: "Cinematographer",
    image: "Team/saverio.webp",
    paragraphs: [
      "Saverio handles all our filming alongside other contracted cinematographers. As a documentary cinematographer, he develops observational storytelling through the camera, which captures rare moments that elevate the documentaries that we produce.",
      "He creates captivating visuals that translate the director's vision. Before joining Rubi Pictures, he worked on documentaries for CGTN, Nat Geo and BBC.",
    ],
  },
  {
    name: "Omamo Gikho",
    role: "Video Editor",
    image: "Team/omamo.webp",
    paragraphs: [
      "Omamo handles all our documentary and social media video editing, colour grading, motion graphics, audio mixing and VFX. During multiple projects, he works with and supervises two of our go-to freelance assistant editors. He has robust experience with Adobe Creative Cloud Suite.",
      "He's a highly skilled video editor with a creative approach to every story. He has edited human-interest, current affairs, environmental and development documentaries.",
      "He handles the transfer of the metadata, masters and project files in the international clean version and broadcast/publishing version.",
      "Before joining Rubi Pictures, he worked on documentaries for CGTN and BBC.",
    ],
  },
  {
    name: "Rosalia Wayua",
    role: "Transcriber/ Translator/ Assistant Producer",
    image: "Team/rosalia.webp",
    paragraphs: [
      "Rosalia handles our audio-to-transcript translation, transcription, subtitling and media production.",
      "Her extensive skills are transcription-creating accurate and detailed transcripts for various media formats; subtitling-creating timecoded .srt files for clear and synchronized video subtitles; translation from Kiswahili to English with cultural and contextual accuracy. Editing the transcripts and proofreading, ensuring the files are clear and have grammatical accuracy without losing the intended meaning by the interviewees. She takes care of our production workflows, including planning, scheduling and coordination.",
    ],
  },
  {
    name: "David Kuria",
    role: "Sound and Drone Operator",
    image: "Team/david.webp",
    paragraphs: [
      "David has 15 years of experience and handles all our field production sound, ingesting and transfer, as well as the drone work.",
    ],
  },
];

export function Team() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Team | Rubi Pictures</title>
        <meta
          name="description"
          content="Meet the Rubi Pictures team — producers, cinematographers, editors and production specialists telling authentic African stories."
        />
        <meta property="og:title" content="Our Team | Rubi Pictures" />
        <meta
          property="og:description"
          content="Meet the Rubi Pictures team — producers, cinematographers, editors and production specialists telling authentic African stories."
        />
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs font-bold tracking-wider text-[#B93B8F] mb-3">
            OUR PEOPLE
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            The Team
          </h1>
          <p className="text-black/60 max-w-xl text-lg">
            The producer, cinematographer, video editor and professionals behind every Rubi Pictures story.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.4) }}
              className="flex flex-col md:flex-row gap-8 md:gap-12 items-start"
            >
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-40 h-52 md:w-52 md:h-64 rounded-2xl p-[3px] bg-gradient-to-br from-[#B93B8F] to-[#FF6B35]">
                  <img
                    src={`${import.meta.env.BASE_URL}${member.image}`}
                    alt={member.name}
                    className="w-full h-full rounded-[13px] object-cover bg-[#F5F5F5]"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                  {member.name}
                </h2>
                <p className="text-sm font-medium tracking-wide text-[#B93B8F] mb-6">
                  {member.role}
                </p>
                <div className="space-y-4 text-lg text-[#1a1a1a] leading-relaxed">
                  {member.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
