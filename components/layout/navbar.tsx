"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react"; // Removed Moon and Sun icons
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 8]);

  const handleSmoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.nav
      style={{ opacity, backdropFilter: `blur(${blur}px)` }}
      className={cn(
        "fixed top-0 w-full z-50 transition-colors",
        "bg-background/80 border-b border-border"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.span className="text-xl font-bold" whileHover={{ scale: 1.05 }}>
            Aniket
          </motion.span>

          <div className="hidden md:flex items-center gap-6">
            {["About", "Experience", "Publications", "Projects", "Co-Curricular", "Contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => handleSmoothScroll(item.toLowerCase())}
                className="text-sm hover:text-primary transition-colors cursor-pointer bg-transparent border-none"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
