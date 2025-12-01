import { motion } from "framer-motion";
import { Youtube, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["Home", "About", "Skills", "Works", "Contact"];
  
  const socials = [
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sachin_911__/" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/@sachin.mov?is_from_webapp=1&sender_device=pc" },
  ];

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="grunge-texture absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">SACHIN</span>
              <span className="text-accent">.</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Creative professional specializing in design, motion, and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Connect</h4>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-accent border border-border hover:border-accent flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Follow me for updates and new content
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sachin — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
