import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";

const Skills = () => {
  return (
    <div className="m-8">
      <Typography  className="mb-6 font-bold text-xl">
        Technical Skills
      </Typography>
      <Grid container spacing={3}>
        {/* Containerization */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="p-4 h-full">
            <Typography className="mb-2 font-bold text-lg">
              🐳 Containerization
            </Typography>
            <Typography >
              Docker: Experience with creating and managing containers.
              <br />Kubernetes: Familiarity with container orchestration.
            </Typography>
          </Paper>
        </Grid>

        {/* Programming Languages */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="p-4 h-full ">
            <Typography className="mb-2 font-bold text-lg">
              💻 Programming Languages
            </Typography>
            <Typography >
              Python, Java, JavaScript, Typescript, C++, C#, HTML/CSS, YAML
            </Typography>
          </Paper>
        </Grid>

        {/* Technologies */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="p-4 h-full">
            <Typography className="mb-2 font-bold text-lg">
              🛠️ Technologies/Tools
            </Typography>
            <Typography >
              Node.js, Next.js, React.js, SQL, Git, APIs, MongoDB, Grafana, ArgoCD, GraphQL, Ansible, Jira, Trello, Confluence
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={6}>
        <Typography  className="mb-6 font-bold text-xl">
          Transferable Skills
        </Typography>
        <Paper elevation={3} className="p-4">
          <Typography className="mb-2 font-bold text-lg">
            🚀 Leadership
          </Typography>
          <Typography >
            Developed leadership skills by leading the migration of an enterprise Gitlab instance to ArgoCD. In a team of three engineers, I was responsible for the planning, execution, and documentation of the migration.
          </Typography>
          <Typography className="mt-4 mb-2 font-bold text-lg">
            🗣️ Communication
          </Typography>
          <Typography >
            Took ownership of critical production issues that blocked multiple high-priority projects. I communicated with stakeholders and engineers to provide estimates and updates on the status of the issues.
          </Typography>
          <Typography className="mt-4 mb-2 font-bold text-lg">
            🧩 Problem Solving
          </Typography>
          <Typography >
            Fixed issues around the repoint of a production API URL by researching the issue, trial and error, and utilizing documentation. I also implemented a long-term solution to prevent the issue from reoccurring.
          </Typography>
          <Typography className="mt-4 mb-2 font-bold text-lg">
            ⏳ Time Management
          </Typography>
          <Typography >
            Enhanced time-management skills by using Jira ticket estimation to plan and prioritize tasks. I also used Trello to manage my personal tasks and projects.
          </Typography>
          <Typography className="mt-4 mb-2 font-bold text-lg">
            🧠 Critical Thinking
          </Typography>
          <Typography >
            Subverted the views of senior engineers by providing a different perspective on the issue, where I used new technologies to solve a long standing problem that was originally dealt with manaully.
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default Skills;
