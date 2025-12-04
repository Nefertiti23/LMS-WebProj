import React, { useState } from "react";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

import './Quizinterface.css'

const Quizinterface = ({ module }) => {
  const questions = [
    {
      question: `What is ${module?.title}?`,
      options: ["ab+c", "m", "q", "x+y"],
      answer: "m"
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
    <div className="quiz-container">
      <div className="quiz-title">
        Quiz for {module?.title}
      </div>

      <div className="quiz-question">{questions[0].question}</div>

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
        <p className={`result-message ${isCorrect ? "correct" : "wrong"}`}>
          {isCorrect ? "Correct!" : "Wrong answer!"}
        </p>
      )}
    </div>
  );
};

export default Quizinterface;