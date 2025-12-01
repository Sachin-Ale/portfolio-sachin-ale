import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import mvThumb from "@/assets/thumbnail/music-video.jpg";
import lyrThumb from "@/assets/thumbnail/lyrics-video.png";
import t1Thumb from "@/assets/thumbnail/tiktok01.png";
import t2Thumb from "@/assets/thumbnail/tiktok02.png";
const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("videos");

  const videoWorks = [
    { title: "Rap Music Video", description: "visuals effects done by me", thumbnail: mvThumb, link: "https://youtu.be/8nDlhjFnlRo?si=rtqhhCt_vpaoWLMs" },
    { title: "Lyrics Video", description: "Motion graphics showcase and Typography", thumbnail: lyrThumb, link: "https://youtu.be/UoX2_Wvgs-k?si=0yVui0QlWbs_kjFI" },
    { title: "TikTok Edit Music Video", description: "Creative Editing With Grunge Editing Style", thumbnail: t1Thumb, link: "https://www.tiktok.com/@sachin.mov/video/7564765832732036368?is_from_webapp=1&sender_device=pc&web_id=7542354390075360776"},
    { title: "Corporate Video", description: "Professional presentation", thumbnail: t2Thumb, link: "https://www.tiktok.com/@sachin.mov/video/7568111251004362001?is_from_webapp=1&sender_device=pc&web_id=7542354390075360776" },
  ];

  const websiteWorks = [
    { title: "E-commerce Platform", description: "Full-stack web app" },
    { title: "Portfolio Website", description: "Minimalist design" },
    { title: "Landing Page", description: "High conversion design" },
  ];

  const graphicsWorks = [
    { title: "Brand Identity", description: "Logo & guidelines" },
    { title: "Social Media Kit", description: "Instagram templates" },
    { title: "Poster Design", description: "Event promotion" },
    { title: "Packaging Design", description: "Product mockups" },
  ];

  return (
    <section id="works" ref={ref} className="py-20 md:py-32 bg-background relative">
      <div className="grunge-texture absolute inset-0 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-primary"
        >
          My <span className="text-accent">Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          A collection of projects showcasing creativity and expertise
        </motion.p>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card border border-border">
            <TabsTrigger value="videos" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Video Work
            </TabsTrigger>
            <TabsTrigger value="websites" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Websites
            </TabsTrigger>
            <TabsTrigger value="graphics" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Graphics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {videoWorks.map((work, index) => (
                <div
                  key={index}
                  className="group relative bg-card border-2 border-border hover:border-accent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,57,0.2)]"
                >
                  {/* Video Thumbnail Placeholder */}
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden" // Use this for the container
                  >
                    {/* The Image */}
                    <img
                      src={work.thumbnail}
                      alt={`${work.title} Thumbnail`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white/80 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </a>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-primary group-hover:text-accent transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{work.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="websites">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {websiteWorks.map((work, index) => (
                <div
                  key={index}
                  className="group relative bg-card border-2 border-border hover:border-accent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,57,0.2)]"
                >
                  <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                    <span className="text-6xl">🌐</span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-primary group-hover:text-accent transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{work.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="graphics">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {graphicsWorks.map((work, index) => (
                <div
                  key={index}
                  className="group relative bg-card border-2 border-border hover:border-accent rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,57,0.2)]"
                >
                  <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                    <span className="text-5xl">🎨</span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1 text-primary group-hover:text-accent transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-muted-foreground text-xs">{work.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-12 italic"
        >
        </motion.p>
      </div>
    </section>
  );
};

export default Works;
