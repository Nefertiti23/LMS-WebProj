import lessonData from '../lessonData.json';
import { useState, useEffect } from 'react';

function Module ({module}) {
    return(
        <div className='flex flex-col gap-2 my-6'>
            <div className='text-xl font-medium'>{module.module_id}. {module.module_title}</div>
            <div className='text-[18px] text-justify my-3'>
                {module.module_content}
            </div>
            <iframe 
                className='w-full h-[500px] my-3'
                src={module.video_url.replace('watch?v=', 'embed/')} 
                title={module.module_title}
                allowFullScreen
            />
            <button className='bg-(--secondary) text-white px-2 py-1 rounded w-max hover:bg-(--darkpinkAccent)'>
                Mark as done
            </button>
        </div>
    )
}

export default function ViewLesson ({courseid, coursename}) {
    var lessons = lessonData.lessons;
    const [error, setError] = useState('');
    var currentLesson = lessons.find(l => l.course_id === courseid);

    useEffect(() => {
        
        if (!currentLesson) {
            setError('Lesson not found for this course');
        }
    }, [courseid, lessons]);

    return (
        <div className="screen">
            <h3 className='font-semibold text-3xl'>{coursename}</h3>
            <div className="px-10 py-6 border border-slate-200 m-auto rounded-lg shadow-md 
            flex flex-col gap-0.5 bg-white w-[70vw]">
                <p>{error}</p>
                {currentLesson.modules.map(m => {
                    return (
                        <Module key={m.module_id} module={m} />
                    )
                })}
            </div>
        </div>
    )
}