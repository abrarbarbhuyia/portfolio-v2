import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <nav className="sticky top-0 h-screen text-white p-4">
      <List>
        <ListItem button component="a" href="#home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="#aboutme">
          <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button component="a" href="#skills">
          <ListItemText primary="Professional Capabilities" />
        </ListItem>
        <ListItem button component="a" href="#career">
          <ListItemText primary="Professional Experience" />
        </ListItem>
        <ListItem button component="a" href="#academic-experience">
          <ListItemText primary="Academic Experience" />
        </ListItem>
        <ListItem button component="a" href="#leadership">
          <ListItemText primary="Leadership" />
        </ListItem>
        <ListItem button component="a" href="#teamwork">
          <ListItemText primary="Teamwork and Service" />
        </ListItem>
        <ListItem button component="a" href="#resume">
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </nav>
  );
};

export default Sidebar;
