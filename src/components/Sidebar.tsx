import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <nav className="sticky top-0 h-screen text-white p-4">
      <List>
        <ListItem button component="a" href="#home">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="#career">
          <ListItemText primary="Career" />
        </ListItem>
        <ListItem button component="a" href="#academic-experience">
          <ListItemText primary="Academic Experience" />
        </ListItem>
        <ListItem button component="a" href="#leadership">
          <ListItemText primary="Leadership" />
        </ListItem>
        <ListItem button component="a" href="#teamwork">
          <ListItemText primary="Teamwork" />
        </ListItem>
        <ListItem button component="a" href="#skills">
          <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component="a" href="#resume">
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </nav>
  );
};

export default Sidebar;
