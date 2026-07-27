"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ width }}
      className="fixed top-16 md:top-[4.5rem] left-0 h-1 bg-brand-green z-[45] rounded-r-full origin-left"
    />
  );
}
