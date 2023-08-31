import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Paper, Typography, Button, Box, Link } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

interface AcademicExperience {
  type: string;
  university?: string;
  degree?: string;
  year?: string;
  achievements?: string[];
  involvement?: string[];
  title?: string;
  description?: string;
  technologies?: string[];
  githubLink?: string;
}

const AcademicExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [activeStep, setActiveStep] = useState(0);

  const academicExperiences: AcademicExperience[] = [
    {
      type: "University Info",
      university: "University of Technology Sydney",
      degree:
        "Bachelor of Software Engineering (Honours) Diploma in Professional Engineering Practice",
      year: "2020 - Present",
      achievements: ["Dean's List, 2022", "Dean's List, 2023"],
      involvement: ["UTS Peer Tutoring", "UTS Programming Society"],
    },
    {
      type: "Project",
      title: "PacStudent",
      description:
        "A classic pacman clone, with handmade sprites and animation",
      technologies: ["Unity", "C#"],
      githubLink: "https://github.com/abrarbarbhuyia/pacman",
    },
    {
      type: "Project",
      title: "AI Proctor Tool",
      description:
        "An AI-based proctoring tool for online exams, with face tracking and event detection.",
      technologies: ["TensorFlow", "Python", "MongoDB", "Machine Learning"],
      githubLink: "https://github.com/ProgKorn/41127-Software-Design-Studio",
    },
  ];

  const goToPrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const goToNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const activeExperience: AcademicExperience = academicExperiences[
    activeStep
  ] || {
    type: "",
    university: "",
    degree: "",
    year: "",
    achievements: [],
    involvement: [],
    title: "",
    description: "",
    technologies: [],
    githubLink: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      <div ref={ref} className="m-8">
        <Box height="350px">
          <Paper elevation={3} className="p-5" style={{ height: "100%" }}>
            {activeExperience.type === "University Info" ? (
              <>
                <Typography
                  variant="h6"
                  className="text-lg font-bold text-gray-900 md:text-xl"
                >
                  {activeExperience.university}
                </Typography>
                <div className="text-sm font-semibold text-gray-500 md:mt-0.5 md:text-base">
                  {activeExperience.degree}
                </div>
                <div className="text-sm text-gray-500 md:mt-0.5 md:text-base">
                  {activeExperience.year}
                </div>
                {activeExperience.achievements &&
                  activeExperience.achievements.length > 0 && (
                    <div className="mt-4">
                      <Typography
                        variant="subtitle2"
                        className="text-lg font-bold text-gray-900"
                      >
                        Achievements:
                      </Typography>
                      <ul className="mt-2 list-disc space-y-2 text-sm text-gray-900 md:pl-6 md:text-base">
                        {activeExperience.achievements.map(
                          (achievement, index) => (
                            <li key={index} className="ml-4">
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                {activeExperience.involvement &&
                  activeExperience.involvement.length > 0 && (
                    <div className="mt-4">
                      <Typography
                        variant="subtitle2"
                        className="text-lg font-bold text-gray-900"
                      >
                        Involvement:
                      </Typography>
                      <ul className="mt-2 list-disc space-y-2 text-sm text-gray-900 md:pl-6 md:text-base">
                        {activeExperience.involvement.map(
                          (involvement, index) => (
                            <li key={index} className="ml-4">
                              {involvement}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </>
            ) : (
              <div>
                <Typography
                  variant="h6"
                  className="text-lg font-bold text-gray-900 md:text-xl"
                >
                  {activeExperience.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {activeExperience.description}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="text-lg font-bold text-gray-900"
                >
                  Technologies Used:
                </Typography>
                <ul className="mt-2 list-disc space-y-2 text-sm text-gray-900 md:pl-6 md:text-base">
                  {activeExperience.technologies?.map((technology, index) => (
                    <li key={index} className="ml-4">
                      {technology}
                    </li>
                  ))}
                </ul>
                {activeExperience.githubLink && (
                  <div className="mt-4">
                    <Typography
                      variant="subtitle2"
                      className="text-lg font-bold text-gray-900"
                    >
                      GitHub Link:
                    </Typography>
                    <Link
                      href={activeExperience.githubLink}
                      target="_blank"
                      rel="noopener"
                      className="text-blue-500"
                    >
                      {activeExperience.githubLink}
                    </Link>
                  </div>
                )}
              </div>
            )}
          </Paper>
        </Box>
        <div className="custom-carousel-buttons">
          <Button
            variant="contained"
            color="primary"
            disabled={activeStep === 0}
            onClick={goToPrevStep}
            startIcon={<FaArrowLeft />}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={activeStep === academicExperiences.length - 1}
            onClick={goToNextStep}
            endIcon={<FaArrowRight />}
          >
            Next
          </Button>
        </div>
        <style jsx>{`
          .custom-carousel-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
          }
        `}</style>
      </div>
    </motion.div>
  );
};

export default AcademicExperience;