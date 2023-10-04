import React from "react";
import { Grid, Paper, Box } from "@mui/material";

const Skills = () => {
  return (
    <div className="">
      <div className="mb-6 text-xl font-bold">Transferable Skills</div>
      <Grid container spacing={3} className="justify-center">
        {/* Leadership */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="h-full p-4">
            <div className="mb-2 rounded bg-gradient-to-t from-green-100 to-green-200 p-2  font-bold">
              🚀 Leadership
            </div>
            <p>
              Showcased effective leadership skills by leading the migration of
              enterprise software. As a Software Engineering intern in a
              leadership position at Optus, I always made sure that progress on
              assigned work was updated every day. This allowed for planning,
              testing and execution of the migration to be done with zero
              disruptions to the experience of customers.
            </p>
          </Paper>
        </Grid>

        {/* Communication */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="h-full p-4">
            <div className="mb-2 rounded bg-gradient-to-t from-yellow-100 to-yellow-200 p-2  font-bold">
              🗣️ Communication
            </div>
            <p>
              Demonstrated effective communcation as an intern by ensuring that
              key stakeholders were notified of the progress of high-impact
              bugs. Through this competency, I was able to ensure that the
              status of the platform was always known to the customers,
              preventing confusion.
            </p>
          </Paper>
        </Grid>

        {/* Problem Solving */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="h-full p-4">
            <div className="mb-2 rounded bg-gradient-to-t from-blue-100 to-blue-200 p-2  font-bold">
              🧩 Problem Solving
            </div>
            <p>
              Showed strong problem solving skills as a Software Engineering
              intern by implementing long-term and effective solutions to
              issues. As an intern, I solved an ongoing issue of an API URL
              being unreachable through trial and error. After I implemented a
              long-term solutions, it prevented the issue from reoccuring,
              saving time and resources.
            </p>
          </Paper>
        </Grid>

        {/* Time Management */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="h-full p-4">
            <div className="mb-2 rounded bg-gradient-to-t from-purple-100 to-purple-200 p-2  font-bold">
              ⏳ Time Management
            </div>
            <p>
              Enhanced time-management skills by constantly using
              ticket-management software (Trello, Jira) estimation to plan and
              prioritise tasks. As an Software Engineer, I also use Trello to
              manage my personal tasks and projects. This allows me to
              effectively manage my time and ensure that I am always on track to
              meet deadlines, especially with assignments and group projects.
            </p>
          </Paper>
        </Grid>

        {/* Critical Thinking */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="h-full p-4">
            <div className="mb-2 rounded bg-gradient-to-t from-pink-100 to-pink-200 p-2  font-bold">
              🧠 Critical Thinking
            </div>
            <p>
              Displayed effective critical thinking skills by frequently subverting
              the views of senior members of the team and providing different
              perspectives on issues. As an intern, I was able to use new
              technologies to solve a long-standing problem that was originally
              dealt with manually. This allowed for the issue to be solved in a
              more efficient manner, saving valuable disk-space on a sensitive environment.
            </p>
          </Paper>
        </Grid>
      </Grid>

      <Box mt={6} className="mb-8">
        <div className="mb-6 text-xl font-bold">Technical Skills</div>
        <Grid container spacing={3} justifyContent="center">
          {/* Containerization */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="h-full p-4">
              <p className="mb-2 font-bold ">🐳 Containerization</p>
              <p>
                Docker: Experience with creating and managing containers.
                <br />
                Kubernetes: Familiarity with container orchestration.
              </p>
            </Paper>
          </Grid>

          {/* Programming Languages */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="h-full p-4">
              <p className="mb-2 font-bold ">💻 Programming Languages</p>
              <p>
                Python, Java, JavaScript, TypeScript, C++, C#, HTML/CSS, YAML
              </p>
            </Paper>
          </Grid>

          {/* Technologies/Tools */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="h-full p-4">
              <p className="mb-2 font-bold ">🛠️ Technologies/Tools</p>
              <p>
                Node.js, Next.js, React.js, SQL, Git, APIs, MongoDB, Grafana,
                ArgoCD, GraphQL, Ansible, Jira, Trello, Confluence
              </p>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Skills;
