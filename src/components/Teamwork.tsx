import React from "react";
import {
  Typography,
  Paper,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const Teamwork = () => {
  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="mb-4 border-b-2 border-yellow-300 pb-2 text-2xl font-extrabold text-gray-900">
          Teamwork
        </h1>
        <p className="text-black">
          I am a highly motivated team member, and I aim to have effective
          communication to develop my collaboration skills when working in
          different teams. By continually developing my communication and
          collaboration skills, I can work effectively in teams.
        </p>
        <p className="text-black">
          Some examples of teamwork I have exercised are:
        </p>

        <ul className="ml-0 list-disc space-y-2">
          <h4 className="border-b-2 pb-2 text-xl font-semibold text-purple-600">
            UTS AI Hackathon 2023 🤖
          </h4>
          <img
            src="https://www.uts.edu.au/sites/default/files/styles/full_width_xlarge_2x/public/2023-04/FEIT-banner-Tech-Fest-v2-4000px.jpg?itok=zzlMyoYa"
            alt="Teamwork Image"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <p className="text-black">
            As a team member when attempting the UTS AI Hackathon, I always made
            sure to share my ideas through effective communcation. By recording
            meeting minutes, the team was able to have multiple different
            approaches to the same probelm, which lead to our success.
          </p>
          <p className="text-black">Our success can be seen below:</p>
          <div className="rounded bg-gradient-to-b from-purple-200 to-purple-100 p-2">
            <p className="font-semibold text-purple-600">
              Key Achievements{" "}
              <span role="img" aria-label="star">
                🏆
              </span>
            </p>
          </div>
          <div className="ml-4">
            <li className="text-black">
              Achieved third place and won a prize of $450 that was shared
              across the team.
            </li>
            <li className="text-black">
              Collaborated with the team to use KNIME to create an accurate
              machine learning model that was able to predict equipment failure,
              saving equipment costs.
            </li>
            <li className="text-black">
              Collaborated effectively with the team using Canva to develop a
              presentation that was able to impress the judges.
            </li>
          </div>
          {/* Insert the image after the <h4> */}
        </ul>
      </div>
    </div>
  );
};

export default Teamwork;
