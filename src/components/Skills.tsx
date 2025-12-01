import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// 1. IMPORT ALL YOUR LOGOS HERE (Adjust paths)
import photoshopLogo from "@/assets/photo-shop.jpg";
import afterEffectsLogo from "@/assets/after-effects.jpg";
import premiereProLogo from "@/assets/premier-pro.png";
import illustratorLogo from "@/assets/adobe-illustrator.png";
import figmaLogo from "@/assets/figma.png";
import reactLogo from "@/assets/react.png";
import javascriptLogo from "@/assets/javascript.png";
import htmlCssLogo from "@/assets/html.jpg";
import tailwindCssLogo from "@/assets/tailwind.png";


const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 2. MAP LOGOS TO SKILLS DATA
  const skills = [
    { name: "After Effects", category: "Video & Motion", icon: afterEffectsLogo },
    { name: "Premiere Pro", category: "Video & Motion", icon: premiereProLogo },
    { name: "Photoshop", category: "Design", icon: photoshopLogo },
    { name: "Illustrator", category: "Design", icon: illustratorLogo },
    { name: "Figma", category: "UI/UX", icon: figmaLogo },
    { name: "React", category: "Development", icon: reactLogo },
    { name: "JavaScript", category: "Development", icon: javascriptLogo },
    { name: "HTML/CSS", category: "Development", icon: htmlCssLogo },
    { name: "TailwindCSS", category: "Development", icon: tailwindCssLogo },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 bg-card/30 relative overflow-hidden">
      <div className="grunge-texture absolute inset-0 opacity-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-primary"
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          A diverse toolkit to bring creative visions to life
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-card border-2 border-border hover:border-accent rounded-lg p-6 text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(230,57,57,0.2)]"
            >
              
              {/* 🛑 LOGO IMAGE REPLACEMENT HERE 🛑 */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center p-1 bg-muted group-hover:bg-accent/10 transition-colors duration-300">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} Logo`} 
                  className="w-full h-full object-contain" 
                />
              </div>
              {/* 🛑 END OF REPLACEMENT 🛑 */}

              <h3 className="font-bold text-lg mb-1 text-primary group-hover:text-accent transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground">{skill.category}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Note for user */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-muted-foreground text-sm mt-12 italic"
        >
        </motion.p>
      </div>
    </section>
  );
};

export default Skills;