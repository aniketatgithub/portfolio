"use client";

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: "San José State University",
    degree: "Master of Science (MS), Computer Software Engineering",
    period: "Aug 2023 - May 2025",
    location: "San Jose, California"
  },
  {
    school: "GITAM Deemed University",
    degree: "Bachelor of Technology (BTech), Computer Science",
    period: "2018 - 2022",
    location: "India"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-6 border-l-2 border-primary/20"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-muted-foreground mt-1">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.period} • {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}