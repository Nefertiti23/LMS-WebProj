import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import './Assignmentsubmission.css'

const AssignmentSubmission = () => {
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="assignment-container">
      <h3>Assignment Submission</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="border w-35 rounded-xl p-1 hover:bg-slate-200" />
      <button
        onClick={() => {
          if (file) setSubmitted(true);
        }}
      >
        Submit
      </button>
      {submitted && (
        <div className="message">
          Submitted successfully!
        </div>
      )}
    </div>
  );
};

export default AssignmentSubmission;
