import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";

const partners = [
  "All",
  "Al Jazeera",
  "IFRC",
  "CGTN",
  "DW",
  "CorpsAfrica",
  "Afristar&SGR",
];

const projects = [
  {
    title: "Conservation from Above: A pilot in Kenya",
    client: "Al Jazeera",
    link: "https://www.aljazeera.com/amp/video/africa-direct/2023/1/10/conservation-from-above-a-pilot-in-kenya",
    thumbnailImage: null,
    thumbnailFallbackColor: "#F59E0B",
  },
  {
    title: "CGTN Documentary 1",
    client: "CGTN",
    link: "https://www.youtube.com/watch?v=MMjFwGe32Us",
    thumbnailImage: "https://img.youtube.com/vi/MMjFwGe32Us/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48", 
  },
  {
    title: "CGTN Documentary 2",
    client: "CGTN",
    link: "https://www.youtube.com/watch?app=desktop&v=zaxoZaDZE7g&t=33s",
    thumbnailImage: "https://img.youtube.com/vi/zaxoZaDZE7g/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "CGTN Documentary 3",
    client: "CGTN",
    link: "https://www.youtube.com/watch?v=Q8pWMHda10c",
    thumbnailImage: "https://img.youtube.com/vi/Q8pWMHda10c/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "CGTN Documentary 4",
    client: "CGTN",
    link: "https://www.youtube.com/watch?v=d3-RsG3Nopc",
    thumbnailImage: "https://img.youtube.com/vi/d3-RsG3Nopc/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "CGTN Documentary 5",
    client: "CGTN",
    link: "https://www.youtube.com/watch?v=mHlq0FbbwWk&t=1s",
    thumbnailImage: "https://img.youtube.com/vi/mHlq0FbbwWk/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "CGTN Documentary 6",
    client: "CGTN",
    link: "https://youtu.be/5dZIBsk3Apk?si=lAlZ-uW19HUHBdhB",
    thumbnailImage: "https://img.youtube.com/vi/5dZIBsk3Apk/hqdefault.jpg",
    thumbnailFallbackColor: "#E11D48",
  },
  {
    title: "CGTN Documentary 7",
    client: "CGTN",
    link: "https://www.youtube.com/watch?v=Mb_mdXILSSU",
    thumbnailImage: "https://img.youtube.com/vi/Mb_mdXILSSU/hqdefault.jpg",
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
    title: "DW Feature 1",
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
    title: "DW Feature 2",
    client: "DW",
    link: "https://www.youtube.com/watch?v=fpwuN0o89DY",
    thumbnailImage: "https://img.youtube.com/vi/fpwuN0o89DY/hqdefault.jpg",
    thumbnailFallbackColor: "#2563EB",
  },
  {
    title: "DW Feature 3",
    client: "DW",
    link: "https://www.youtube.com/watch?v=66zk96-Sry4",
    thumbnailImage: "https://img.youtube.com/vi/66zk96-Sry4/hqdefault.jpg",
    thumbnailFallbackColor: "#2563EB",
  },
  {
    title: "Corps Africa Initiative 1",
    client: "CorpsAfrica",
    link: "https://www.youtube.com/watch?v=dDzXJ9w_MMI",
    thumbnailImage: "https://img.youtube.com/vi/dDzXJ9w_MMI/hqdefault.jpg",
    thumbnailFallbackColor: "#10B981",
  },
  {
    title: "Corps Africa Initiative 2",
    client: "CorpsAfrica",
    link: "https://www.youtube.com/watch?v=tbKFtFvfoJc",
    thumbnailImage: "https://img.youtube.com/vi/tbKFtFvfoJc/hqdefault.jpg",
    thumbnailFallbackColor: "#10B981",
  },
  {
    title: "Afristart&SGR Profile",
    client: "Afristar&SGR",
    link: "https://www.youtube.com/watch?app=desktop&v=mHL7z7s86QQ",
    thumbnailImage: "https://img.youtube.com/vi/mHL7z7s86QQ/hqdefault.jpg",
    thumbnailFallbackColor: "#8B5CF6",
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
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">Our Work</h1>

        {/* Filter Tabs */}
        <div className="flex gap-4 md:gap-6 mb-16 border-b border-[#e0e0e0] overflow-x-auto pb-2">
          {partners.map((partner) => (
            <button
              key={partner}
              onClick={() => setActiveFilter(partner)}
              className={`pb-3 px-2 text-sm font-medium whitespace-nowrap transition-colors relative ${
                activeFilter === partner
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
                  <img src={project.thumbnailImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-white/50 font-bold tracking-wider text-sm">VIDEO</span>
                )}
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
