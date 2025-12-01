import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WorkWithMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="py-20 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Grunge texture */}
      <div className="grunge-texture absolute inset-0 opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary"
          >
            Work With Me On Your{" "}
            <span className="text-accent">Next Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Let's build something amazing together. From concept to completion, I'll help bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-8 text-xl shadow-[0_0_40px_rgba(230,57,57,0.3)] hover:shadow-[0_0_60px_rgba(230,57,57,0.4)] transition-all duration-300 hover:scale-105 group"
            >
              Contact Me
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithMe;
