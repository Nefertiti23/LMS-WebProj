// src/components/LessonViewer.jsx
import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const LessonViewer = ({ course }) => {
  if (!course) {
    return <Typography>Select a course to view lessons.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {course.title}
      </Typography>

      <List>
        {course.modules.map((mod, index) => (
          <ListItem key={index} sx={{ borderBottom: "1px solid #eee" }}>
            <ListItemText
              primary={mod.title} // ✅ FIXED
              secondary={`Video: ${mod.video}`} // just text, SAFE
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LessonViewer;
