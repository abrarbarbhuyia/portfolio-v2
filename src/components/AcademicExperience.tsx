import React from "react";
import { Paper, Box, Link } from "@mui/material";

const AcademicExperience = () => {
  return (
    <div className="m-8">
      {/* Academic Experience 1 */}
      <Box display="flex" height="365px" className="mb-6">
        {/* Text Section */}
        <Paper elevation={3} className="p-5" style={{ backgroundColor: "#2564eb", flex: 2 }}>
          <p className="text-lg font-bold text-white md:text-xl">
            University of Technology Sydney
          </p>
          <div className="text-sm font-semibold text-slate-300 md:mt-0.5 md:text-base">
            Bachelor of Software Engineering (Honours) Diploma in Professional Engineering Practice
          </div>
          <div className="text-sm text-slate-300 md:mt-0.5 md:text-base">
            2020 - 2024 (Expected)
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold text-white">
              Achievements and awards:
            </p>
            <p className="text-slate-200">
              I am a highly motivated student that aims to learn as much
              possible while achieving the best results. Throughout my four
              years of study, I have been able to exceed academically
              consistently. Examples of my achievement can be seen below:
            </p>
            <ul className="mt-2 list-disc space-y-2 text-sm font-bold text-slate-200 md:pl-6 md:text-base">
              <li className="ml-4">
                Received the Dean's List award in 2022 and 2023
              </li>
              <li className="ml-4">
                Achieved a distinction Weighted Average Mark (WAM) throughout my degree
              </li>
            </ul>
          </div>
        </Paper>

        {/* Image Section with padding and rounded corners */}
        <div
          style={{
            flex: 1,
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/327273038_876860666888203_1192518971027569268_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ezdxxdtVdacAX_mI1JS&_nc_ht=scontent.fsyd3-1.fna&oh=00_AfDMB4wVUYLB8AW_AF8n5UZgbsaIkN2CnNJMzs2Yfeq8MA&oe=6521C330"
            alt="Project Screenshot"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </Box>

      {/* Academic Experience 2 */}
      <Box display="flex" height="470px" className="mb-6">
        {/* Text Section */}
        <Paper elevation={3} className="p-5" style={{ flex: 2 }}>
          <div>
            <p className="text-lg font-bold text-gray-900 md:text-xl">
              Pacman Remake
            </p>
            <div className="text-sm font-semibold text-gray-500 md:mt-0.5 md:text-base">
              Role Assumed: Software Engineer
            </div>
            <p className="mb-2 mt-2">
              In my Introduction to Games Development subject, I undertook the
              task of recreating Pac-man with my own twist. As a developer using
              Unity, I had full control over the game&apos;s design and
              implementation:
            </p>
            <ul className="list-disc space-y-2 text-sm text-slate-800 md:pl-6 md:text-base">
              <li>
                From scratch, created all the relevant resources, including
                sprites, animations, and artwork.
              </li>
              <li>
                Implemented C# scripts to handle various game events, such as
                collisions, movement, and the point scoring system.
              </li>
              <li>
                Developed the game incrementally, allowing for testing and
                debugging throughout the development process.
              </li>
            </ul>
            <p className="text-lg font-bold text-gray-900">
              Technologies Used:
            </p>
            <ul className="mt-2 list-disc space-y-2 text-sm text-gray-900 md:pl-6 md:text-base">
              <li className="ml-4">Unity</li>
              <li className="ml-4">C#</li>
            </ul>

            <div className="mt-4">
              <p className="text-lg font-bold text-gray-900">GitHub Link:</p>
              <Link
                href="https://github.com/abrarbarbhuyia/pacman"
                target="_blank"
                rel="noopener"
                className="text-blue-500"
              >
                https://github.com/abrarbarbhuyia/pacman
              </Link>
            </div>
          </div>
        </Paper>

        {/* Image Section with padding and rounded corners */}
        <div
          style={{
            flex: 1,
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/pacman.png"
            alt="Project Screenshot"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </Box>

      {/* Academic Experience 3 */}
      <Box display="flex" height="465ox" className="mb-6">
        {/* Text Section */}
        <Paper elevation={3} className="p-5" style={{ flex: 2 }}>
          <div>
            <p className="text-lg font-bold text-gray-900 md:text-xl">
              AI Proctor Tool
            </p>
            <div className="text-sm font-semibold text-gray-500 md:mt-0.5 md:text-base">
              Role Assumed: Software Engineer
            </div>
            <p>
              I worked in a team where I contributed to an innovative AI
              Proctoring platform, which was designed to detect and flag
              students that performed academic misconduct during exam sessions.
              As a Software Engineer, I:
              <ul className="list-disc space-y-2 text-sm text-slate-800 md:pl-6 md:text-base">
                <li>
                  Developed a terms and conditions form using the React
                  framework. This allowed students to have a clear understanding
                  of exam rules and the privacy policy.
                </li>
                <li>
                  Created live exam sessions in the database, which allowed
                  teachers to interact with students during the exam, to provide
                  warnings of misconduct.
                </li>
              </ul>
            </p>
            <p className="text-lg font-bold text-gray-900">
              Technologies Used:
            </p>
            <ul className="mt-2 list-disc space-y-2 text-sm text-gray-900 md:pl-6 md:text-base">
              <li className="ml-4">TensorFlow</li>
              <li className="ml-4">Python</li>
              <li className="ml-4">Machine Learning</li>
            </ul>
            <div className="mt-4">
              <p className="text-lg font-bold text-gray-900">GitHub Link:</p>
              <Link
                href="https://github.com/ProgKorn/41127-Software-Design-Studio"
                target="_blank"
                rel="noopener"
                className="text-blue-500"
              >
                https://github.com/ProgKorn/41127-Software-Design-Studio
              </Link>
            </div>
          </div>
        </Paper>

        {/* Image Section with padding and rounded corners */}
        <div
          style={{
            flex: 1,
            padding: "16px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/tensorflow.png"
            alt="Project Screenshot"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      </Box>
    </div>
  );
};

export default AcademicExperience;
