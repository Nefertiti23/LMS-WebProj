import { courses } from "../../person2/courses";
import { LinAlgebra } from "./LinAlgebra";
import { useState, useEffect } from "react";

export default function LessonInterface () {
    const lesson1 = LinAlgebra["l101_1_1"];
    const lesson2 = LinAlgebra["l101_1_2"];

    return (
    <div className="screen">
        <h3 className='font-semibold text-3xl'>Linear Algebra</h3>
        <div className="px-10 py-6 border border-slate-200 m-auto rounded-lg shadow-md 
        flex flex-col gap-0.5 bg-white w-[70vw]">
            <div className="lessoncontent w-full m-2">
                <div className="headin mb-4">
                    <h2 className="text-2xl font-medium">{lesson1.title}</h2>
                    <p className="text-md text-gray-500 my-1 font-medium">ID: {lesson1.lesson_id}</p>
                </div>
                <div className="content">
                    <p className="text-md text-black text-justify">{lesson1.transcript}</p>
                </div>
                <button className="donebtn bg-(--secondary) text-white 
                px-4 py-1.5 my-3 rounded-xl hover:bg-(--darkpinkAccent)">
                    Mark as done
                    </button>
            </div>
            <div className="bg-gray-300 h-0.5"></div>
            <div className="lessoncontent w-full my-4">
                <div className="headin mb-4">
                    <h2 className="text-2xl font-medium">{lesson2.title}</h2>
                    <p className="text-md text-gray-500 my-1 font-medium">ID: {lesson2.lesson_id}</p>
                </div>
                <div className="content">
                    <p className="text-md text-black text-justify">{lesson2.transcript}</p>
                </div>
                <button className="donebtn bg-(--secondary) text-white 
                px-4 py-1.5 my-3 rounded-xl hover:bg-(--darkpinkAccent)">
                    Mark as done
                    </button>
            </div>
      </div>
    </div>
    );
}