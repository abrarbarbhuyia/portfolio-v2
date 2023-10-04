import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AcademicExperienceTitle = () => {
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
      className="mt-12 text-center md:text-left"
      variants={titleVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      id="academic-experience"
    >
      <h2 className="mb-2 text-3xl font-bold text-yellow-300 md:text-5xl">
        Academic Experience
      </h2>
      <div className="md:mb-6 md:border-b-2 md:border-white"></div>
      <p className="text-xl font-bold text-white md:text-2xl">
        My Academic Experiences and Projects
      </p>
      <p className="mt-4 text-white">
        Through my Academic Experience and Projects, I&apos;ve had the chance to
        learn and apply my skills to realistic projects. By building projects
        from scratch, I know how to prioritise the needs of stakeholders and how
        to deliver a completed product in a timely manner. These skills allow me
        to be a valuable asset in any company, as I can apply my technical
        skills while having a business understanding of the project I am working
        on. The value I provide to a company is my ability to learn and adapt to
        new technologies and environments, and my ability to communicate with
        stakeholders and other team members.
      </p>
    </motion.div>
  );
};

export default AcademicExperienceTitle;
