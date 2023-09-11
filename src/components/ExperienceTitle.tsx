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
      <p className="text-white mt-4">
        I’ve had a plethora of experience in Software Engineering, where I’ve gained technical skills around Full-Stack Development and DevOps Engineering. I bring a variety of skills around to a company’s technical team. My problem-solving skills are evident in my experience, with resolving critical issues and implementing new automation to improve current systems. I have leadership and communication skills that allow me to streamline a workflow to success, and my time-management skills allow me to be able to handle complex or large projects. Overall, my skills and dedication to keep learning new approaches to things allows me to be a valuable asset in any company.
      </p>
    </motion.div>
  );
};

export default ExperienceTitle;
