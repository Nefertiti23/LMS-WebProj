import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { quizData } from "../../person4/Quiz2/QuizData";
import './Quizinterface.css'

const Quizinterface = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { courseid, coursename } = location.state || { courseid: 101, coursename: "Course" };
  
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const courseQuizzes = quizData[courseid];
  const currentModule = courseQuizzes[currentModuleIndex];
  const currentQuestion = currentModule[currentQuestionIndex];

  const handleSubmit = () => {
    if (selectedOption === "") return;
    
    const isAnswerCorrect = parseInt(selectedOption) === currentQuestion.answer;
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      setScore(score + 1);
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentModule.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setSubmitted(false);
    } else if (currentModuleIndex < Object.keys(courseQuizzes).length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption("");
      setSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const getTotalQuestions = () => {
    return Object.values(courseQuizzes).reduce((total, module) => total + module.length, 0);
  };

  const handleGoBack = () => {
    navigate('/viewlesson', { state: { courseid, coursename } });
  };

  if (quizCompleted) {
    const totalQuestions = getTotalQuestions();
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="quiz-container">
        <div className="quiz-title">Quiz Completed!</div>
        
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
            Final Score
          </Typography>
          <Typography variant="h2" sx={{ color: percentage >= 70 ? 'green' : 'orange', fontWeight: 'bold', mb: 2 }}>
            {score}/{totalQuestions}
          </Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            {percentage}%
          </Typography>
          
          {percentage >= 70 ? (
            <Typography variant="h6" sx={{ color: 'green', mb: 3 }}>
              Great job! You passed!
            </Typography>
          ) : (
            <Typography variant="h6" sx={{ color: 'orange', mb: 3 }}>
              Keep practicing! You can retake the quiz.
            </Typography>
          )}
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleGoBack}
          sx={{ width: '100%', py: 1.5 }}
        >
          Back to Lesson
        </Button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-title">
        {coursename} - Module {currentModuleIndex + 1} - Question {currentQuestionIndex + 1}
      </div>

      <div className="quiz-question">{currentQuestion.question}</div>

      <RadioGroup
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {currentQuestion.options.map((opt, i) => (
          <FormControlLabel 
            key={i} 
            value={i.toString()} 
            control={<Radio />} 
            label={opt} 
          />
        ))}
      </RadioGroup>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={submitted}
        className="submit-btn"
      >
        Submit
      </Button>

      {submitted && (
        <>
          <p className={`result-message ${isCorrect ? "correct" : "wrong"}`}>
            {isCorrect ? "Correct!" : "Wrong answer!"}
          </p>
          <Button
            variant="contained"
            color="success"
            onClick={handleNext}
            className="next-btn"
          >
            Next Question
          </Button>
        </>
      )}

      <div className="progress">
        Score: {score}/{getTotalQuestions()}
      </div>
    </div>
  );
};

export default Quizinterface;