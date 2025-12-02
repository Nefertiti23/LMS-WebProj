import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const AssignmentSubmission = () => {
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box mt={2} p={2} border="1px solid #ccc" borderRadius={2}>
      <Typography variant="h6">Assignment Submission</Typography>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (file) setSubmitted(true);
        }}
        sx={{ ml: 2 }}
      >
        Submit
      </Button>
      {submitted && (
        <Typography color="green" mt={1}>
          Submitted successfully!
        </Typography>
      )}
    </Box>
  );
};

export default AssignmentSubmission;
