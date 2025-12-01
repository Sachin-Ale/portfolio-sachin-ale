import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-background relative">
      <div className="grunge-texture absolute inset-0 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-primary"
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          Have a project in mind? Let's discuss how we can work together
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
              <Input
                placeholder="Your name"
                className="bg-card border-border focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                className="bg-card border-border focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-card border-border focus:border-accent resize-none"
              />
            </div>
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-red-glow"
            >
              Send Message
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the form or contact details below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">sachinale098@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+977 9829101766</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Pokhara, Nepal</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Response time: Usually within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
