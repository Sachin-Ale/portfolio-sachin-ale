import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-grunge-bg.jpg";

const Hero = () => {
  const roles = [
    "Graphics Designer",
    "Video Editor",
    "Content Creator",
    "UI/UX Designer",
    "Web Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
            filter: "brightness(0.4)",
          }}
        />
        {/* Grunge Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="grunge-texture absolute inset-0" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 ]">
            Hello, I'm <span className="text-accent">Sachin</span>
          </h1>

          <div className="h-20 md:h-24 flex items-center justify-center">
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl lg:text-6xl font-light text-muted-foreground"
            >
              {roles[currentRole]}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Crafting visual experiences through design, motion, and code
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection("works")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-red-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

       
      </div>
    </section>
  );
};

export default Hero;
