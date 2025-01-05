"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const extracurricular = [
  {
    title: "Web Developer",
    organization: "Indian Students Organization (ISO-SJSU)",
    date: "Aug 2023 - May 2024 | 10 months",
    location: "San Jose, California (On-site)",
    description: [
      "Helped create the ISO-SJSU website to enhance communication and event visibility."
    ]
  },
  {
    title: "Resident Advisor",
    organization: "San Jose State University",
    date: "Aug 2024 - Present | 6 months",
    location: "San Jose, California",
    description: [
      "Served as a mentor and support resource for students, promoting a safe and inclusive living environment.",
     
    ]
  },
  {
    title: "Orientation Leader",
    organization: "San Jose State University",
    date: "Dec 2023 - May 2024",
    location: "San Jose, California",
    description: [
      "Guided new students during orientation, providing key information on academic.",
          ]
  }
];

const certifications = [
  {
    title: "Machine Learning Algorithms: Supervised Learning Tip to Tail",
    issuer: "Alberta Machine Intelligence Institute (Amii)",
    date: "November 2021",
    skills: "Machine Learning",
    link: "https://www.coursera.org/account/accomplishments/verify/JBPYEYQ3A6UH"
  },
  {
    title: "Google Android Developer Workshop",
    issuer: "APSSDC",
    date: "March 2021",
    skills: "Android Development",
    link: "https://drive.google.com/file/d/1Cn8KNl-DnZj4oTTu75rO3PYatB2g9TKB/view"
  },
  {
    title: "Software Development Processes and Methodologies",
    issuer: "University of Minnesota",
    date: "January 2021",
    link: "https://www.coursera.org/account/accomplishments/verify/L6YY9VNHTL92"
  }
];

const education = [
  {
    degree: "Master of Science (MS), Computer Software Engineering",
    university: "San José State University",
    period: "Aug 2023 - May 2025"
  },
  {
    degree: "Bachelor of Technology (BTech), Computer Science",
    university: "GITAM Deemed University",
    period: "2018 - 2022"
  }
];

export function CoCurricularSection() {
  return (
    <section id="co-curricular" className="py-20 bg-gradient-to-b from-background via-slate-900 to-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"
        >
          Co-Curricular and Achievements
        </motion.h2>

        {/* SVG Divider */}
        <div className="relative mb-12">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent rounded-lg" />
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Extracurricular Activities</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {extracurricular.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-6 rounded-lg border bg-card hover:shadow-xl transition-shadow hover:scale-105"
              >
                <h4 className="text-xl font-bold text-gradient mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.organization}</p>
                <p className="text-sm text-muted-foreground">{item.date}</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground">{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative p-6 rounded-lg border bg-card hover:shadow-xl transition-shadow hover:scale-105"
              >
                <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => window.open(cert.link, "_blank")}
                >
                  Show Credentials
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Education</h3>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.university}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-6 border-l-2 border-primary/30 hover:bg-slate-800 p-4 rounded-md transition-transform hover:scale-105"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground">{edu.university}</p>
                <p className="text-muted-foreground">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
