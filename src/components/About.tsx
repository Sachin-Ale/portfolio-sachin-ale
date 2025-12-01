import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profile from "@/assets/photooo.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-background relative">
      <div className="grunge-texture absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-primary"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square bg-card rounded-lg overflow-hidden border-4 border-accent/30 shadow-2xl">
              {/* Placeholder for portrait - user will replace */}
              <img 
  src={profile} 
  alt="Professional Portrait" 
  className="w-full h-full object-cover"
/>
              {/* Grunge frame effect */}
              <div className="absolute inset-0 border-8 border-background/50 pointer-events-none" />
              <div className="grunge-texture absolute inset-0 opacity-10" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Creative Professional & Digital Artist
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a multi-disciplinary creative professional with a passion for bringing ideas to life through design, motion, and technology. With years of experience in graphics design, video editing, and web development, I create compelling visual experiences that engage and inspire.
              </p>
              <p>
                My journey spans from crafting stunning graphics and dynamic video content to building responsive websites and intuitive user interfaces. I believe in the power of storytelling through visual media and strive to deliver work that not only looks great but also serves a purpose.
              </p>
              <p>
                Whether it's designing brand identities, editing cinematic videos, or developing modern web applications, I approach every project with creativity, precision, and dedication to excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded text-accent font-semibold">
                5+ Years Experience
              </div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded text-accent font-semibold">
                100+ Projects
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
