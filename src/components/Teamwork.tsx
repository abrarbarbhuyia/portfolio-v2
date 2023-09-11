// teamwork.tsx
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
    <div className="m-8">
      <Paper elevation={3} className="p-4">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: "150px" }}>
                  <span role="img" aria-label="Team">
                    👥 Team
                  </span>
                </TableCell>
                <TableCell style={{ minWidth: "150px" }}>
                  <span role="img" aria-label="Project">
                    🚀 Project
                  </span>
                </TableCell>
                <TableCell style={{ minWidth: "150px" }}>
                  <span role="img" aria-label="Experience">
                    📝 Experience
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>University Group Project</TableCell>
                <TableCell>Creating a table booking app</TableCell>
                <TableCell>
                  As part of an assignment, we were tasked with making a
                  full-stack table booking application. This involved creating
                  the application from scratch and required intensive
                  requirements gathering, and generation of user stores and use
                  cases to help us understand the problem. After this we
                  implemented an Agile methodology to help us manage the project
                  and ensure we were on track to meet the deadline. We used a
                  variety of tools to help us manage the project, including
                  Trello, GitHub, and Discord. As a result we had a successful
                  project that we presented to the class, it was also fully
                  functional and met all the requirements.
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell>Fixing a bug in a live environment</TableCell>
                <TableCell>Professional Experience</TableCell>
                <TableCell>
                  During my internship at Optus, I was tasked to work with the team to fix a critical production environment bug. I demonstrated leadership skills by taking the initiative  to lead the team on fixing the issue. I broke down the task by delegating debugging efforts to each team member. I also took the lead on communicating with the client to ensure they were kept up to date with the progress of the fix. As a result of my efforts, the bug was fixed and the multiple teams that were affected by the issue were able to complete their projects.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Teamwork;
