import React from 'react';

const Timeline = () => {
    return (
        <div className="text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">

        <ol className=" relative border-l-4 border-blue-600 dark:border-blue-700">

            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-10 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    September 2021 - September 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Software Development instructor (Code ninjas)
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    While studying in college, I worked at Code Ninjas, where I developed over 20 curriculum modules, including 10 comprehensive lesson plans focused on software development practices like data structures, algorithms, and design patterns. I guided students through coding projects, helping them apply essential principles such as debugging, version control, and iterative development. Additionally, I led both on-site and virtual workshops on game development and software design, providing interactive environments that reinforced practical coding skills.
                </p>
            </li>

            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-10 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    September 2022 - Graduating May 2025
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Enrollment at Exeter University (BSc Computer Science )
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    I am currently pursuing my degree in Computer Science at the University of Exeter, where I am developing practical skills in the specification, design, and implementation of computer systems. My education is deeply rooted in both theoretical foundations and cutting-edge research, particularly in areas like machine learning, artificial intelligence, and nature-inspired computation.

                    The program is designed to reflect the entire Computer Science development cycle—from theory and design to development, testing, and application—ensuring a comprehensive and relevant learning experience.                </p>
            </li>

            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    April 2023 - Present
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Excode - Python workshop leader (Exeter University)
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    While studying at university, I instructed over 30 students in Python, leading workshops that covered everything from basic syntax to advanced topics like object-oriented programming and algorithm design. I also developed and implemented curriculum materials, focusing on essential software development practices, including data structures and algorithm design, ensuring students gained a strong foundation in these key areas.
                </p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    January 2024 - Present
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Google Student Developer Club - member
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    As a member of the Google Developer Student Clubs (GDSC), I have had the opportunity to immerse myself in a vibrant community of aspiring developers and tech enthusiasts. Since joining, I have actively participated in various talks, workshops, and hackathons, all of which have significantly contributed to my growth as a developer. The experience has not only enhanced my technical skills but also fostered strong teamwork abilities, as I collaborated with peers on real-world projects and challenges. Being part of GDSC has been instrumental in my journey, providing me with the resources and support to continually evolve in the ever-changing field of software development.
                </p>
                <a
                    href="/projects"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                    Learn more
                    <svg
                        className="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </li>


        </ol>
        </div>
    );
};

export default Timeline;
