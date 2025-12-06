import lessonData from '../lessonData.json';
import { useState, useEffect } from 'react';
import AssignmentSubmission from "../../person3/Assignmentsubmission/Assignmentsubmission";
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function LinearWithValueLabel({ completedModules, totalModules }) {
  const progress = (completedModules / totalModules) * 100;

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}

function Module ({module, isCompleted, onModuleComplete}) {
    const [done, setDone] = useState(isCompleted || false);

    const markAsDone = () => {
        const newState = !done;
        setDone(newState);
        onModuleComplete(module.module_id, newState);
    }

    return(
        <div id={module.module_id} className={`flex flex-col gap-2 my-3 p-4 rounded transition-all ${
            done ? 'text-gray-400' : 'text-black'
        }`}>
            <div className='text-xl font-medium'>{module.module_id}. {module.module_title}</div>
            <div className='text-[18px] text-justify my-3'>
                {module.module_content.map((content, idx) => (
                    <p key={idx}>{content}</p>
                ))}
            </div>
            <iframe 
                className='w-full h-[500px] my-3'
                src={module.video_url.replace('watch?v=', 'embed/')} 
                title={module.module_title}
                allowFullScreen
            />
            <button onClick={markAsDone}
            className='bg-(--secondary) text-white px-2 py-1 rounded w-max hover:bg-(--darkpinkAccent)'>
                {done ? 'Reset' : 'Mark as done'}
            </button>
        </div>
    )
}

function Tasks ({assignment}) {
    return (
        <div>
            <div className='text-2xl font-semibold mb-3'>Assignment</div>
            {assignment.tasks.map(t => {
                return (
                    <div key={t.task_id} className='my-3'>
                        <div className='font-medium text-md'>{t.task_id}. {t.question}</div>
                        <div className='text-md text-justify text-gray-600 indent-2'>
                            {t.description}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function ViewLessonContent () {
    const location = useLocation();
    const navigate = useNavigate();
    const { courseid, coursename } = location.state || { courseid: 101, coursename: "Linear Algebra" };
    
    var lessons = lessonData.lessons;
    const [error, setError] = useState('');
    const [completedModules, setCompletedModules] = useState({});
    var currentLesson = lessons.find(l => l.course_id === courseid);

    useEffect(() => {
        if (!currentLesson) {
            setError('Lesson not found for this course');
        }
    }, [courseid, lessons]);

    const handleModuleComplete = (moduleId, isCompleted) => {
        setCompletedModules(prev => ({
            ...prev,
            [moduleId]: isCompleted
        }));
    };

    const completedCount = Object.values(completedModules).filter(Boolean).length;
    const totalModules = currentLesson.modules.length || 0;

    const handleTakeQuiz = () => {
        navigate('/quizinterface', { state: { courseid, coursename } });
    };

    return (
        <div className="screen">
            <h3 className='font-semibold text-3xl mb-3'>{coursename}</h3>
            <div className="px-10 py-6 border border-slate-200 m-auto rounded-lg shadow-md 
            flex flex-col gap-3 bg-white w-[70vw]">
                <p>Progress</p>
                <LinearWithValueLabel completedModules={completedCount} totalModules={totalModules} />
                <p>{error}</p>
                {currentLesson?.modules.map(m => {
                    return (
                        <Module 
                            id={m.module_id} 
                            key={m.module_id} 
                            module={m}
                            isCompleted={completedModules[m.module_id]}
                            onModuleComplete={handleModuleComplete}
                        />
                    )
                })}
                <Tasks assignment={currentLesson?.assignment} />
                <AssignmentSubmission />
                <button 
                    onClick={handleTakeQuiz}
                    className='bg-(--primary) hover:bg-(--primary-200) text-white px-2 py-1 rounded'>
                    Take quiz
                </button>
            </div>
        </div>
    )
}

export default ViewLessonContent;