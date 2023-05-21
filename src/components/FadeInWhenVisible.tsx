import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  variants?: Variants;
}

// Credit to https://stackoverflow.com/questions/63817826/react-js-framer-motion-animate-only-on-initial-page-load

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  },
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
