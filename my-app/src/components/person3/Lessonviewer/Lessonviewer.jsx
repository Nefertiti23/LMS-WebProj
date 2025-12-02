// src/components/LessonViewer.jsx
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import './Lessonviewer.css'

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
              primary={mod.title}
              secondary={`Video: ${mod.video}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LessonViewer;
