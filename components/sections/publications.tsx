"use client";

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: "A Review on Machine Learning Tools and Techniques",
    journal: "International Journal for Research in Applied Science and; Engineering Technology (IJRASET)",
    date: "Jun 6, 2022",
    description: "This paper highlights key machine learning tools for modeling, visualization, and problem-solving, used by leaders like Netflix and Amazon.",
    link: "https://www.ijraset.com/best-journal/a-review-on-machine-learning-tools-and-techniques"
  },
  {
    title: "Automatic Pulmonary Nodule Detection in CT Scans",
    journal: "International Research Journal of Engineering and Technology (IRJET)",
    date: "Apr 4, 2022",
    description: "Developed a CNN model using image processing and deep learning to detect lung cancer nodules with over 95% accuracy, overcoming challenges like data diversity and imbalance",
    link: "https://www.irjet.net/archives/V9/i4/IRJET-V9I4426.pdf"
  }
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Publications
        </motion.h2>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{pub.journal} · {pub.date}</p>
              <p className="text-muted-foreground mb-4">{pub.description}</p>
              <Button 
                variant="outline" 
                size="sm"
                className="group-hover:bg-primary group-hover:text-primary-foreground"
                onClick={() => window.open(pub.link, '_blank')}
              >
                View Publication
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}