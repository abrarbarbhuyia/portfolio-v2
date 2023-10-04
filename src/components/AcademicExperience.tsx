import React from "react";
import { Paper, Box, Link } from "@mui/material";

const AcademicExperience = () => {
  return (
    <div className="m-8">
      {/* Academic Experience 1 */}
      <Box display="flex" height="365px" className="mb-6">
        {/* Text Section */}
        <Paper elevation={3} className="bg-blue-600 p-5" style={{ flex: 2 }}>
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
                Received the Dean&apos;s List award in 2022 and 2023
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
          {/* Rest of your content */}
        </Paper>

        {/* Image Section with padding and rounded corners */}
        {/* Rest of your content */}
      </Box>

      {/* Academic Experience 3 */}
      <Box display="flex" height="465px" className="mb-6">
        {/* Text Section */}
        <Paper elevation={3} className="p-5" style={{ flex: 2 }}>
          {/* Rest of your content */}
        </Paper>

        {/* Image Section with padding and rounded corners */}
        {/* Rest of your content */}
      </Box>
    </div>
  );
};

export default AcademicExperience;
