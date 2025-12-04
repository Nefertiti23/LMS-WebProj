import React from "react";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Courses = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        All Courses
      </Typography>
      {courses.map((course) => (
        <Box
          key={course.course_id}
          mb={2}
          p={2}
          border="1px solid #ccc"
          borderRadius={2}
        >
          <Typography variant="h6">{course.title}</Typography>
          <Typography>{course.description}</Typography>
          <Button
            variant="contained"
            component={Link}
            to={`/course/${course.course_id}`}
            sx={{ mt: 1 }}
          >
            View Course
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Courses;
