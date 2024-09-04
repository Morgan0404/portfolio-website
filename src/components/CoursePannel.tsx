'use client'; // Add this line at the top

import React, { useState } from "react";

type Course = {
    title: string;
    details: string[];
};

type PanelProps = {
    heading: string;
    courses: Course[];
};

export default function CoursePanel({ heading, courses }: PanelProps) {
    // Initialize openCourses with all courses set to false (untoggled by default)
    const [openCourses, setOpenCourses] = useState<boolean[]>(courses.map(() => false));

    const toggleCourse = (index: number) => {
        setOpenCourses(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="w-full max-w-4xl p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h2 className="text-2xl text-blue-600 mb-4">{heading}</h2>
            {courses.map((course, index) => (
                <div key={index} className="mb-6">
                    <button
                        className="text-xl font-semibold text-gray-900 dark:text-white w-full text-left flex items-center justify-between focus:outline-none"
                        onClick={() => toggleCourse(index)}
                    >
                        <span>{course.title}</span>
                        <span className="ml-2">
                            {openCourses[index] ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                                </svg>
                            )}
                        </span>
                    </button>
                    {openCourses[index] && (
                        <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 mt-2">
                            {course.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
