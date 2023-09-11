import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Paper, Button, Box, Link } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
  image?: string; // New image property for each academic experience
}

const AcademicExperience = () => {
  const [activeStep, setActiveStep] = useState(0);

  const academicExperiences: AcademicExperience[] = [
    {
      type: "University Info",
      university: "University of Technology Sydney",
      degree:
        "Bachelor of Software Engineering (Honours) Diploma in Professional Engineering Practice",
      year: "2020 - Present",
      achievements: ["Dean's List, 2022", "Dean's List, 2023"],
      involvement: [
        "UTS Peer Tutoring",
        "UTS Programming Society",
        "3rd Place in UTS AI Hackathon, 2023)",
      ],
      image: "/images/utslogo.png", // UTS logo image path
    },
    {
      type: "Project",
      title: "PacStudent",
      description:
        "I designed and developed a Pac-Man clone using the Unity game engine. All the relevant resources such as sprites, animations, and artwork were created by me. The game features C# scripts that handle a variety of events, such as collisions, movement, and the point scoring system. The game was implemented in increments, allowing me to test and debug the game as it was developed.",
      technologies: ["Unity", "C#"],
      githubLink: "https://github.com/abrarbarbhuyia/pacman",
      image: "/images/pacman.png", // Pac-Man image path
    },
    {
      type: "Project",
      title: "AI Proctor Tool",
      description:
        "I worked in a team where I contributed to an AI Proctoring platform. The platform was designed to detect and flag students that performed academic misconduct during exam sessions. The project was full-stack and was developed using the MERN stack. I was responsible for implementing the live exam sessions, including the backend and frontend of how students enter the exam environment.",
      technologies: ["TensorFlow", "Python", "Machine Learning"],
      githubLink: "https://github.com/ProgKorn/41127-Software-Design-Studio",
      image: "/images/tensorflow.png", // TensorFlow logo image path
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
    image: "/images/utslogo.png", // Default image path
  };

  return (
    <div className="m-8">
      <Box display="flex" height="365px">
        {/* Text Section */}
        <Paper elevation={3} className="p-5" style={{ flex: 2 }}>
          {activeExperience.type === "University Info" ? (
            <>
              <p className="text-lg font-bold text-gray-900 md:text-xl">
                {activeExperience.university}
              </p>
              <div className="text-sm font-semibold text-gray-500 md:mt-0.5 md:text-base">
                {activeExperience.degree}
              </div>
              <div className="text-sm text-gray-500 md:mt-0.5 md:text-base">
                {activeExperience.year}
              </div>
              {activeExperience.achievements &&
                activeExperience.achievements.length > 0 && (
                  <div className="mt-4">
                    <p className="text-lg font-bold text-gray-900">
                      Achievements:
                    </p>
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
                    <p className="text-lg font-bold text-gray-900">
                      Involvement:
                    </p>
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
              <p className="text-lg font-bold text-gray-900 md:text-xl">
                {activeExperience.title}
              </p>
              <p>{activeExperience.description}</p>
              <p className="text-lg font-bold text-gray-900">
                Technologies Used:
              </p>
              <ul className="mt-2 list-disc space-y-2 text-sm text-gray-900 md:pl-6 md:text-base">
                {activeExperience.technologies?.map((technology, index) => (
                  <li key={index} className="ml-4">
                    {technology}
                  </li>
                ))}
              </ul>
              {activeExperience.githubLink && (
                <div className="mt-4">
                  <p className="text-lg font-bold text-gray-900">
                    GitHub Link:
                  </p>
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

        {/* Image Section with padding and rounded corners */}
        <div style={{ flex: 1, padding: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={activeExperience.image || "/images/utslogo.png"} // Use the image specified in the active experience, or default to UTS logo
            alt="Project Screenshot"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
      </Box>
      <div className="custom-carousel-buttons">
        <Button
          color="primary"
          disabled={activeStep === 0}
          onClick={goToPrevStep}
          startIcon={<FaArrowLeft />}
        >
          Previous
        </Button>
        <Button
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
  );
};

export default AcademicExperience;
