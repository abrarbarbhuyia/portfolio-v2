import React from "react";
import { Grid, Paper, Box } from "@mui/material";

const Skills = () => {
  return (
    <div className="m-8">
      <p  className="mb-6 font-bold text-xl">
        Technical Skills
      </p>
      <Grid container spacing={3}>
        {/* Containerization */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="p-4 h-full">
            <p className="mb-2 font-bold text-lg">
              🐳 Containerization
            </p>
            <p >
              Docker: Experience with creating and managing containers.
              <br />Kubernetes: Familiarity with container orchestration.
            </p>
          </Paper>
        </Grid>

        {/* Programming Languages */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="p-4 h-full ">
            <p className="mb-2 font-bold text-lg">
              💻 Programming Languages
            </p>
            <p >
              Python, Java, JavaScript, Typescript, C++, C#, HTML/CSS, YAML
            </p>
          </Paper>
        </Grid>

        {/* Technologies */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="p-4 h-full">
            <p className="mb-2 font-bold text-lg">
              🛠️ Technologies/Tools
            </p>
            <p >
              Node.js, Next.js, React.js, SQL, Git, APIs, MongoDB, Grafana, ArgoCD, GraphQL, Ansible, Jira, Trello, Confluence
            </p>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={6}>
        <p  className="mb-6 font-bold text-xl">
          Transferable Skills
        </p>
        <Paper elevation={3} className="p-4">
          <p className="mb-2 font-bold text-lg">
            🚀 Leadership
          </p>
          <p >
            Developed leadership skills by leading the migration of an enterprise Gitlab instance to ArgoCD. In a team of three engineers, I was responsible for the planning, execution, and documentation of the migration.
          </p>
          <p className="mt-4 mb-2 font-bold text-lg">
            🗣️ Communication
          </p>
          <p >
            Took ownership of critical production issues that blocked multiple high-priority projects. I communicated with stakeholders and engineers to provide estimates and updates on the status of the issues.
          </p>
          <p className="mt-4 mb-2 font-bold text-lg">
            🧩 Problem Solving
          </p>
          <p >
            Fixed issues around the repoint of a production API URL by researching the issue, trial and error, and utilizing documentation. I also implemented a long-term solution to prevent the issue from reoccurring.
          </p>
          <p className="mt-4 mb-2 font-bold text-lg">
            ⏳ Time Management
          </p>
          <p >
            Enhanced time-management skills by using Jira ticket estimation to plan and prioritize tasks. I also used Trello to manage my personal tasks and projects.
          </p>
          <p className="mt-4 mb-2 font-bold text-lg">
            🧠 Critical Thinking
          </p>
          <p >
            Subverted the views of senior engineers by providing a different perspective on the issue, where I used new technologies to solve a long standing problem that was originally dealt with manaully.
          </p>
        </Paper>
      </Box>
    </div>
  );
};

export default Skills;
