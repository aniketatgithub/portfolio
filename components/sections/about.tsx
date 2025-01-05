"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cloud } from "lucide-react";

export function AboutSection() {
  const skills = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Full-Stack Development",
      items: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs", "SQL"],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning",
      items: ["TensorFlow", "Python", "Deep Learning"],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud &amp; DevOps",
      items: ["AWS / Azure", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Currently pursuing MS in Software Engineering at San José State University, 
            with a strong foundation in Computer Science from GITAM University. 
            Passionate about building scalable applications and exploring machine learning solutions.
          </p>

          {/* 3 Columns Grid Layout */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex items-center gap-2">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
