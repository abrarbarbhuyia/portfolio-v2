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

const Leadership = () => {
  return (
    <div className="m-8">
      <Typography variant="h4" className="mb-6 text-xl font-bold">
        Leadership
      </Typography>
      <Paper elevation={3} className="p-4">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: "150px" }}>
                  <span role="img" aria-label="Field">
                    🌱 Field
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
                <TableCell>Professional Software Engineering</TableCell>
                <TableCell>Fixing a critical bug</TableCell>
                <TableCell>
                  At my first internship, during a quiet week, where a lot of
                  more senior engineers were on leave, I was tasked with working
                  with the team to solve a critical production issue. In this
                  situation, I did not have the guidance of the team members who
                  were more senior to me since it was just interns working on
                  the task. I instantly took ownership of the issue and acted as
                  the person who communicates updates and relevant information
                  to stakeholders. By taking ownership of the issue, I was able
                  to coordinate with the team and have the timeline of the issue
                  being fixed estimated. As a result, there was little downtime
                  and the issue was fixed in a timely manner.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Professional Software Engineering</TableCell>
                <TableCell>Creating new automation</TableCell>
                <TableCell>
                  At my internship at Optus, I was tasked with automating a
                  piece of work that saved an hour of engineer time every day.
                  This was a task that has been in the backlog for over a year,
                  and it was a complex and large task so no one decided to take
                  it. I decided to include this work in a sprint of ours and
                  lead the team in achieveing this by dividing the work into
                  smaller chunks. This allowed for the task to be seperated into
                  individual deliverables and set times for these features to be
                  delivered. The result of this was a successful automation,
                  saving many nearly 5 hours of work a week.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Leadership;
