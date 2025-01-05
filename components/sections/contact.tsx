"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/aniketatgithub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aniket-tikariha/" // Update with your LinkedIn profile
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => window.open(link.href, '_blank')}
              >
                {link.icon}
                {link.label}
              </Button>
            ))}
          </div>

          <Button
            size="lg"
            className="gap-2"
            onClick={() => window.location.href = 'mailto:your.email@example.com'}
          >
            <Mail className="h-5 w-5" />
            Send Email
          </Button>
        </motion.div>
      </div>
    </section>
  );
}