"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code, Database, Cloud, Smartphone } from "lucide-react";

const experience = [
  {
    company: "Viasat Global",
    position: "Software Engineer Intern",
    period: "June 2024 - Present",
    description: [
      "Designed a JSON configuration tool using PySide6 and MVC architecture, improving JSON navigation and validation by 40%.",
      "Automated unit tests using CI/CD pipelines with Docker and GitHub Actions, achieving 95% test coverage and reducing deployment times by 25%."
    ],
    icon: <Code className="h-6 w-6" />
  },
  {
    company: "Cheeni Labs",
    position: "Software Development Engineer (Full Stack)",
    period: "June 2022 - July 2023",
    description: [
      "Optimized full-stack applications with React and TypeScript, enhancing PWA performance by 30% and ensuring responsive UI/UX.",
      "Designed scalable backend solutions using Node.js and Microservices, reducing deployment time by 40% and enabling seamless scaling."
    ],
    icon: <Code className="h-6 w-6" />
  },
  {
    company: "Wipro",
    position: "Data Science Intern",
    period: "February 2022 - April 2022",
    description: [
      "Led SQL data exploration, data cleaning, Tableau visualization, and Python web scraping to extract insights from diverse datasets.",
      "Achieved a 20% improvement in data accuracy and reduced data processing time by 30%."
    ],
    icon: <Database className="h-6 w-6" />
  },
  {
    company: "Technocolabs Software",
    position: "Data Science Intern",
    period: "November 2021 - December 2021",
    description: [
      "Developed deep reinforcement learning models using TensorFlow, improving predictive accuracy by 15%.",
      "Optimized algorithmic trading strategies, achieving a 20% revenue increase and a 12% cost reduction."
    ],
    icon: <Database className="h-6 w-6" />
  },
  {
    company: "Cargill",
    position: "Android Developer Intern",
    period: "July 2021 - November 2021",
    description: [
      "Optimized API for weather data retrieval in the 'Digital Saathi' app, achieving 35% faster response times.",
      "Implemented MVVM architecture and Room Database, enhancing app responsiveness and delivering 10 new high-impact features."
    ],
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    company: "I&T Labs",
    position: "Internet of Things Intern",
    period: "June 2021 - July 2021",
    description: [
      "Designed a heart rate monitor using NodeMCU (ESP8266), demonstrating robust data processing and wireless health monitoring.",
      "Created a NodeMCU-based plant watering system, achieving 25% reduced manual work and 40% higher user engagement, deployed in 50 units."
    ],
    icon: <Cloud className="h-6 w-6" />
  },
  {
    company: "Unschool (Recommended by IIIT Hyderabad)",
    position: "Full Stack Developer Intern",
    period: "August 2020 - September 2020",
    description: [
      "Developed a responsive website using Bootstrap, Flexbox, CSS, and JavaScript, improving page load times by 25%.",
      "Created a portfolio website for an actor.",
      "Link: https://saranshrway-e0e42.web.app/"
    ],
    icon: <Code className="h-6 w-6" />
  }
];
export function ExperienceSection() {
  const [showMore, setShowMore] = useState(false);

  const displayedExperiences = showMore ? experience : experience.slice(0, 2);

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-background via-slate-900 to-background"
    >
      <div className="container mx-auto px-6 md:px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-full"
        >
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              Experience
            </h2>
          </div>

          <motion.div layout className="space-y-10">
            <AnimatePresence>
              {displayedExperiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-6 rounded-lg border-l-4 ${
                    index % 2 === 0 ? "bg-card/10" : "bg-card/20"
                  } border-primary hover:shadow-lg transition-transform transform hover:scale-105`}
                >
                  <div className="absolute left-4 top-4">{exp.icon}</div>
                  <h3 className="text-2xl font-semibold pl-12">{exp.position}</h3>
                  <p className="text-primary mb-2 pl-12">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4 pl-12">{exp.period}</p>
                  <ul className="list-disc list-inside space-y-2 pl-12">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More/Show Less Text */}
          <div className="flex justify-center mt-10">
            <span
              onClick={() => setShowMore((prev) => !prev)}
              className="text-sm text-primary cursor-pointer underline hover:text-primary/70"
            >
              {showMore ? "Show Less" : "View All Experiences"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}