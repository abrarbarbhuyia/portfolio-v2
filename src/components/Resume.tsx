import React from "react";
import { IconButton, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";

const Resume = () => {
  const handleDownloadResume = () => {
    const resumePath = "/download/Resume.pdf";
    
    const anchor = document.createElement("a");
    anchor.href = resumePath;
    anchor.download = "Resume.pdf";
    anchor.click();
  };

  return (
    <div className="mt-4 self-center text-center mb-20" id="resume">
      <IconButton
        onClick={handleDownloadResume}
        color="primary"
        aria-label="Download Resume"
      >
        <GetAppIcon fontSize="large" />
      </IconButton>
      <Typography variant="body2" className="text-white mt-1">
        Download Resume (PDF)
      </Typography>
    </div>
  );
};

export default Resume;
