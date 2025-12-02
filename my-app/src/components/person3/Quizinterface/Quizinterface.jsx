import React, { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

const Quizinterface = ({ module }) => {
  const questions = [
    {
      question: `What is ${module?.title}?`,
      question: `What is ${module?.title}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      answer: "Option A"
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsCorrect(selectedOption === questions[0].answer);
    setSubmitted(true);
  };

  return (
    <Box className="quiz-container">
      <Typography variant="h5" className="quiz-title">
        Quiz for {module?.title}
      </Typography>

      <Typography className="quiz-question">{questions[0].question}</Typography>

      <RadioGroup
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {questions[0].options.map((opt, i) => (
          <FormControlLabel key={i} value={opt} control={<Radio />} label={opt} />
        ))}
      </RadioGroup>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className="submit-btn"
      >
        Submit
      </Button>

      {submitted && (
        <Typography className={`result_message ${isCorrect ? "correct" : "wrong"}`}>
          {isCorrect ? "Correct!" : "Wrong answer!"}
        </Typography>
      )}
    </Box>
  );
};

export default Quizinterface;