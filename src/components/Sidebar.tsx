import React from "react";
import { List, ListItem, ListItemText, Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box>
      <nav className="sticky top-0 h-screen p-4 text-white">
        <List>
          <ListItem component="a" href="#home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component="a" href="#career">
            <ListItemText primary="Career" />
          </ListItem>
          <ListItem component="a" href="#academic-experience">
            <ListItemText primary="Academic Experience" />
          </ListItem>
          <ListItem component="a" href="#leadership">
            <ListItemText primary="Leadership" />
          </ListItem>
          <ListItem component="a" href="#teamwork">
            <ListItemText primary="Teamwork" />
          </ListItem>
          <ListItem component="a" href="#skills">
            <ListItemText primary="Skills" />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
