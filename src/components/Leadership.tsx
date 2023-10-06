// leadership.tsx
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
import Image from "next/image";

const Leadership = () => {
  return (
    <div className="mx-auto mt-8 max-w-4xl rounded-lg bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <h1 className="mb-4 border-b-2 border-yellow-300 pb-2 text-2xl font-extrabold text-gray-900">
          My value as a Leader
        </h1>

        <p className="text-black">
          I am dedicated to be a strong leader, I&apos;m always uplifting the
          people around me and help strive towards significant goals. I aim to
          develop my competency and leadership qualities through my career, by
          taking ownership and responsibility in leading teams and projects.
        </p>
        <p className="text-black">
          Some examples of the leadership I have done can be seen below:
        </p>

        <ul className="ml-0 list-disc space-y-2">
          <h4 className="border-b-2 pb-2 text-xl font-semibold text-pink-600">
            Restaurant booking app 🍴
          </h4>
          <p className="text-black">
            As a leader for a group assignment in Software Engineering Studio
            1A, I was always making sure that the team communicated effectively
            throughout the creation of a table booking app. This allowed us to
            meet deadlines throughout the semester, and finally allowed us to
            deliver a demonstration that was above and beyond the expectations
            of the tutor.
          </p>
          <p className="text-black">
            Evidence for our achievement can be seen below:
          </p>
          <div className="rounded bg-gradient-to-b from-pink-200 to-pink-100 p-2">
            <p className="font-semibold text-pink-600">
              Key Achievements{" "}
              <span role="img" aria-label="star">
                🏆
              </span>
            </p>
          </div>
          <div className="ml-4">
            <li className="text-black">
              Achieved a high distinction mark for the group assignment for
              outstanding achievement.
            </li>
            <li className="text-black">
              Completed extra functionality that was not required for the
              assignment, such as the ability to change items on the menu.
            </li>
            <li className="text-black">
              Took ownership of leading the team and creating shared documents,
              a Trello board and instructed on the usage of a GitHub repository
              to ensure that the team was on track.
            </li>
          </div>
        </ul>

        <ul className="ml-0 list-disc space-y-2">
          <h4 className="border-b-2 pb-2 text-xl font-semibold text-blue-600">
            UTS Programming Society 💻
          </h4>
          <p className="text-black">
            As a general committee member in the UTS Programming Society, I
            constantly strived to run workshops to lead others in learning new
            skills. This allowed the society to grow as more people were able to
            have their interest in programming sparked.
          </p>
          <p className="text-black">
            Some examples of the achievements I made can be seen below:
          </p>
          <div className="rounded bg-gradient-to-b from-blue-200 to-blue-100 p-2">
            <p className="font-semibold text-blue-600">
              Key Achievements{" "}
              <span role="img" aria-label="star">
                🏆
              </span>
            </p>
          </div>
          <div className="ml-4">
            <li className="text-black">
              Ran a solo workshop on Linux that inspired others to
              learn about the interesting world of Linux-based software and
              technology.
            </li>
            <li className="text-black">
              Organised a pizza party event during the semester StuVac break to
              allow a way for members to socialise and network with each other.
            </li>
            <li className="text-black">
              Coordinated with sponsors to create society-themed stickers so
              that members can show their support for the society.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Leadership;
