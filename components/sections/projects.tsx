"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Hotel Booking Full-Stack Web App",
    description: "Developed 'Theatre.com,' a hotel booking platform using the MERN stack with GCP load balancers for improved scalability and reliability.",
    link: "https://github.com/aniketatgithub/theatreBooking",
    tech: ["React", "Node.js", "MongoDB", "GCP"]
  },
  {
    title: "World Weather Application with tkinter GUI",
    description: "A Python GUI application that uses the WeatherAPI to display current weather and a 3-day forecast with IP-based location detection.",
    link: "https://github.com/aniketatgithub/WeatherApp-Tkinter-",
    tech: ["Python", "tkinter", "WeatherAPI"]
  },
  {
    title: "Vaccinate India App",
    description: "Designed an Android application to simplify the process of locating nearby vaccination centers using location-based services.",
    link: "https://github.com/aniketatgithub/Vaccinate-India-App",
    tech: ["Android", "Java", "Google Maps API", "Location Services"]
  },
  {
    title: "Newsify App",
    description: "An Android app that displays news in a summarized format using LLM API and Glide for seamless image loading.",
    link: "https://github.com/aniketatgithub/Newsify-AndroidApp",
    tech: ["Android", "Glide", "LLM API"]
  },
  {
    title: "Meme Sharing App",
    description: "A fun app to view and share memes from platforms like Twitter, Reddit, and Facebook all in one place.",
    link: "https://github.com/aniketatgithub/Meme-Share-app",
    tech: ["Android", "Glide", "Firebase"]
  },
  {
    title: "DSA Practice Repository",
    description: "A repository of Data Structures and Algorithms practice problems and solutions covering various fundamental concepts.",
    link: "https://github.com/aniketatgithub/Data-Structure-and-Algorithms",
    tech: ["Python", "C++", "Algorithms", "Data Structures"]
  }
];

export function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore((prev) => !prev);

  // Show only 2 projects initially
  const displayedProjects = showMore ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-lg border bg-card hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                className="text-sm text-primary underline hover:no-underline"
              >
                View Project on GitHub
                <Github className="ml-1 inline-block h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Show More/Show Less Text */}
        <div className="flex justify-end mt-8">
          <span
            onClick={handleShowMore}
            className="text-sm text-primary cursor-pointer underline hover:text-primary/70"
          >
            {showMore ? "Show Less" : "Show More"}
          </span>
        </div>
      </div>
    </section>
  );
}
