import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../../person2/courses";
import VideoPlayer from "./VideoPlayer";
import "../../../index.css";

export default function LearningViewer({ a_user }) {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.course_id === Number(courseId));

  const [currentLesson, setCurrentLesson] = useState(0);
  const [progress, setProgress] = useState(() => {
    const saved = JSON.parse(localStorage.getItem(`progress_${courseId}`)) || 0;
    return saved;
  });

  useEffect(() => {
    localStorage.setItem(`progress_${courseId}`, progress);
  }, [progress, courseId]);

  if (!course) return <p className="text-red-600">Course not found.</p>;

  const lessons = course.modules;

  const completeLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
      setProgress(((currentLesson + 1) / lessons.length) * 100);
    } else {
      setProgress(100);
    }
  };

  return (
    <div className="screen">
      <button
        onClick={() => navigate("/enrollment")}
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg mb-4"
      >
        ← Back to Enrolled Courses
      </button>

      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">Progress: {Math.round(progress)}%</p>

      <div className="flex gap-6">
        {/* LEFT SIDEBAR */}
        <div className="w-1/4 border-r pr-4">
          {lessons.map((lesson, index) => (
            <button
              key={index}
              onClick={() => setCurrentLesson(index)}
              className={`w-full text-left px-3 py-2 rounded-lg mb-2 border 
                ${index === currentLesson ? "bg-blue-200 font-semibold" : "bg-white"}`}
            >
              {index + 1}. {lesson.title}
            </button>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="w-3/4">
          <h2 className="text-xl font-semibold mb-2">
            Lesson {currentLesson + 1}: {lessons[currentLesson].title}
          </h2>

          <VideoPlayer youtubeId={lessons[currentLesson].youtubeId} />

          <div className="mt-4 flex gap-3">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={completeLesson}
            >
              Mark Lesson Complete
            </button>

            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              onClick={() =>
                navigate(`/course/${course.course_id}/quiz/${currentLesson}`)
              }
            >
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
