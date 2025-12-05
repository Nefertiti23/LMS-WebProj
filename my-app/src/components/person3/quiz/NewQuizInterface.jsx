import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizData } from "./quizData"; // make sure quizData keys match courseId

export default function Quizinterface() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const questions = quizData[courseId]?.[lessonId] || [];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`quiz_score_${courseId}_${lessonId}`);
    if (saved) {
      setScore(Number(saved));
      setFinished(true);
    }
  }, [courseId, lessonId]);

  const handleNext = () => {
    if (selected === null) return;

    if (selected === questions[current].answer) setScore(prev => prev + 1);

    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
      setSelected(null);
    } else {
      setFinished(true);
      const finalScore = score + (selected === questions[current].answer ? 1 : 0);
      localStorage.setItem(`quiz_score_${courseId}_${lessonId}`, finalScore);
    }
  };

  if (finished) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-xl mb-6">
          Score: <span className="font-bold">{score}</span> / {questions.length}
        </p>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg"
          onClick={() => navigate(-1)}
        >
          Back to Course
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-200 rounded-lg"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold">Quiz for Course {courseId} - Lesson {Number(lessonId) + 1}</h2>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${((current + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">
          Q{current + 1}. {questions[current].question}
        </h3>

        <div className="space-y-3">
          {questions[current].options.map((opt, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`p-3 border rounded-lg cursor-pointer 
                ${selected === index ? "bg-blue-100 border-blue-600" : "bg-white"}`}
            >
              {opt}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className={`mt-5 px-5 py-2 rounded-lg text-white ${selected === null ? "bg-gray-400" : "bg-blue-600"}`}
          disabled={selected === null}
        >
          {current + 1 === questions.length ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}
