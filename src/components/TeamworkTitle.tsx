import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamworkTitle = () => {
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
      className="text-center md:text-left mt-12"
      variants={titleVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      id="teamwork"
    >
      <h2 className="mb-2 text-3xl font-bold text-yellow-300 md:text-5xl">
        Teamwork and service
      </h2>
      <div className="md:mb-6 md:border-b-2 md:border-white"></div>
      <p className="text-xl font-bold text-white md:text-2xl">
        Moments I worked with a team
      </p>
      <p className="text-white mt-4">
        Through my professional and educational experience, I have been placed in teamwork focused situations multiple times. In these situations I am able to take a complex task and delegate it individuals, and I am able to implement methodology we learnt in university to help with the process of building a project. I work with organisational tools to help keep the team organised as well. Overall, I believe being skilled in teamwork is a valuable asset to teams in the professional environment.
      </p>
    </motion.div>
  );
};

export default TeamworkTitle;
