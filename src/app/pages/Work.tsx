import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Helmet } from 'react-helmet-async';

const base = import.meta.env.BASE_URL;

const partners = [
  "All",
  "Al Jazeera",
  "CGTN Beijing",
  "CGTN France",
  "CGTN Africa",
  "DW",
  "CorpsAfrica",
  "Afristar&SGR",
  "IN-HOUSE",
];

const projects = [
  {
    title: "Conservation from Above: A pilot in Kenya",
    client: "Al Jazeera",
    link: "https://www.youtube.com/watch?v=XXY0obVjjvI",
    thumbnailImage: "https://img.youtube.com/vi/XXY0obVjjvI/hqdefault.jpg",
    thumbnailFallbackColor: "#F59E0B",
  },
  {
    title: "Rewriting libraries: Challenging the past in Kenya",
    client: "Al Jazeera",
    link: "https://www.youtube.com/watch?v=9w5-q-A24Gk&t=20s",
    thumbnailImage: "https://img.youtube.com/vi/9w5-q-A24Gk/hqdefault.jpg",
    thumbnailFallbackColor: "#F59E0B",
  },
  {
    title: "The Call of the Silk Road: Tanzania, doctors without borders",
    client: "CGTN Beijing",
    link: "https://www.youtube.com/watch?v=MMjFwGe32Us",
    thumbnailImage: "https://img.youtube.com/vi/MMjFwGe32Us/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Chine-Afrique 2035 : Aerospace",
    client: "CGTN France",
    link: "https://francais.cgtn.com/news/2025-05-28/1927553936387416066/index.html",
    thumbnailImage: `${base}Partners/VIDEO 1.jpg`,
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Chine-Afrique 2035 : Digital Economy",
    client: "CGTN France",
    link: "https://francais.cgtn.com/news/2025-05-29/1927925126534545409/index.html",
    thumbnailImage: `${base}Partners/VIDEO 2.jpg`,
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Chine-Afrique 2035 : AI, Information & Technology",
    client: "CGTN France",
    link: "https://francais.cgtn.com/news/2025-05-31/1928682565943107585/index.html",
    thumbnailImage: `${base}Partners/VIDEO 3.jpg`,
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Chine-Afrique 2035 : Green Development",
    client: "CGTN France",
    link: "https://francais.cgtn.com/news/2025-06-01/1929088551157702657/index.html",
    thumbnailImage: `${base}Partners/VIDEO 4.jpg`,
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Faces of Africa - Even The Gangsters Pt.1",
    client: "CGTN Africa",
    link: "https://www.youtube.com/watch?v=Q8pWMHda10c&t=1389s",
    thumbnailImage: "https://img.youtube.com/vi/Q8pWMHda10c/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Faces of Africa - Even The Gangsters Pt.2",
    client: "CGTN Africa",
    link: "https://www.youtube.com/watch?v=d3-RsG3Nopc&t=9s",
    thumbnailImage: "https://img.youtube.com/vi/d3-RsG3Nopc/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Faces of Africa - Food For Africa Pt.1",
    client: "CGTN Africa",
    link: "https://www.youtube.com/watch?v=5dZIBsk3Apk&t=7s",
    thumbnailImage: "https://img.youtube.com/vi/5dZIBsk3Apk/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "Faces of Africa - Food for Africa Pt.2",
    client: "CGTN Africa",
    link: "https://www.youtube.com/watch?v=mHlq0FbbwWk",
    thumbnailImage: "https://img.youtube.com/vi/mHlq0FbbwWk/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "The Kenyan Ocean Bottle School",
    client: "DW",
    link: "https://www.dw.com/en/the-kenyan-ocean-bottle-school/video-47185214",
    thumbnailImage: null,
    thumbnailFallbackColor: "#2563EB",
  },
  {
    title: "Kibera's king of condoms",
    client: "DW",
    link: "https://www.youtube.com/watch?v=xkMYyAGoyYc",
    thumbnailImage: "https://img.youtube.com/vi/xkMYyAGoyYc/hqdefault.jpg",
    thumbnailFallbackColor: "#2563EB",
  },
  {
    title: "Training Girls to Swim in Zanzibar",
    client: "DW",
    link: "https://www.dw.com/en/training-girls-to-swim-in-zanzibar/video-51610852",
    thumbnailImage: null,
    thumbnailFallbackColor: "#2563EB",
  },
  {
    title: "Playing football in Zanzibar - Tanzania | Meet Zanzibar&#39;s female strikers",
    client: "DW",
    link: "https://www.youtube.com/watch?v=fpwuN0o89DY",
    thumbnailImage: "https://img.youtube.com/vi/fpwuN0o89DY/hqdefault.jpg",
    thumbnailFallbackColor: "#2563EB",
  },
  {
    title: "From a cartel to an NGO: Securing clean water for Kibera slum",
    client: "DW",
    link: "https://www.youtube.com/watch?v=66zk96-Sry4",
    thumbnailImage: "https://img.youtube.com/vi/66zk96-Sry4/hqdefault.jpg",
    thumbnailFallbackColor: "#2563EB",
  },
  {
    title: "CorpsAfrica Impact-driven development documentary",
    client: "CorpsAfrica",
    link: "https://www.youtube.com/watch?v=dDzXJ9w_MMI",
    thumbnailImage: "https://img.youtube.com/vi/dDzXJ9w_MMI/hqdefault.jpg",
    thumbnailFallbackColor: "#10B981",
  },
  {
    title: "CorpsAfrica Kenya's First Cohort",
    client: "CorpsAfrica",
    link: "https://www.youtube.com/watch?v=tbKFtFvfoJc",
    thumbnailImage: "https://img.youtube.com/vi/tbKFtFvfoJc/hqdefault.jpg",
    thumbnailFallbackColor: "#10B981",
  },
  {
    title: "Afristar/SGR 4th Anniversary",
    client: "Afristar&SGR",
    link: "https://www.youtube.com/watch?app=desktop&v=mHL7z7s86QQ",
    thumbnailImage: "https://img.youtube.com/vi/mHL7z7s86QQ/hqdefault.jpg",
    thumbnailFallbackColor: "#8B5CF6",
  },
  {
    title: "The Silk Thread",
    client: "IN-HOUSE",
    link: "https://www.youtube.com/watch?v=d11p7CuFlPg",
    thumbnailImage: "https://img.youtube.com/vi/d11p7CuFlPg/hqdefault.jpg",
    thumbnailFallbackColor: "#64748B",
  }
];

export function Work() {
  const [searchParams] = useSearchParams();
  const partnerParam = searchParams.get("partner");
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (partnerParam) {
      setActiveFilter(partnerParam);
    }
  }, [partnerParam]);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.client === activeFilter);

  return (
    <div className="bg-white">
      <Helmet>
        <title>Our Work | Rubi Pictures</title>
        <meta name="description" content="Browse our portfolio of award-winning film and media productions across Africa." />
        <meta property="og:title" content="Our Work | Rubi Pictures" />
        <meta property="og:description" content="Browse our portfolio of award-winning film and media productions across Africa." />
      </Helmet>
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">Our Work</h1>

        {/* Filter Tabs */}
        <div className="flex gap-4 md:gap-6 mb-16 border-b border-[#e0e0e0] overflow-x-auto pb-2">
          {partners.map((partner) => (
            <button
              key={partner}
              onClick={() => setActiveFilter(partner)}
              className={`pb-3 px-2 text-sm font-medium whitespace-nowrap transition-colors relative ${activeFilter === partner
                ? "text-black"
                : "text-black/50 hover:text-black/75"
                }`}
            >
              {partner}
              {activeFilter === partner && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#FF6B35]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`${project.title}-${index}`}
              className="group cursor-pointer block"
            >
              <div
                className="w-full aspect-video rounded-lg mb-4 transition-shadow hover:shadow-xl overflow-hidden relative bg-black/5 flex items-center justify-center"
                style={{ backgroundColor: project.thumbnailFallbackColor }}
              >
                {project.thumbnailImage ? (
                  <img src={project.thumbnailImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <span className="text-white/50 font-bold tracking-wider text-sm">VIDEO</span>
                )}
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-black mb-1 group-hover:text-black/70 transition-colors line-clamp-1">
                {project.title}
              </h3>
              <p className="text-sm text-black/50">{project.client}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
