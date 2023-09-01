import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExperienceTitle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="text-center md:text-left"
      variants={titleVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      id="career"
    >
      <h2 className="mb-2 text-3xl font-bold text-yellow-300 md:text-5xl">
        My Career
      </h2>
      <div className="md:mb-6 md:border-b-2 md:border-white"></div>
      <p className="text-xl font-bold text-white md:text-2xl">
        Professional experience and projects in the Industry
      </p>
    </motion.div>
  );
};

export default ExperienceTitle;
