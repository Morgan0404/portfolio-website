"use client"; // Ensure this is a client component

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Timeline from '../components/Timeline';
import Image from "next/image"; // Adjust the path as needed

export default function Home() {
    return (
        <>
            {/* Navbar spans across the top */}
            <Navbar />

            {/* Main content starts below the Navbar */}
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20 ">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-4xl md:text-5xl text-center">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-green-400 animate-moving-gradient bg-[length:200%]">
                            Excited to Grow,
                        </span>
                        <span className="block">Eager to Make a Difference</span>
                    </h1>
                    <div className="flex gap-4 justify-center">
                        <a
                            href="https://github.com/Morgan0404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-md flex items-center justify-center"
                        >
                            <Image
                                src="/githublogo.png"
                                alt="Visit My GitHub"
                                width="80"
                                height = "7"
                                className="h-7 w-20" // Adjust height as needed
                            />
                        </a>
                        <a href={"/MorganJamesCV.pdf"} download="Morgan_James_CV.pdf" >
                            <button
                                type="button"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary-500 bg-white px-5 py-2.5 text-center text-sm font-bold text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-7 w-4"
                                >
                                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                                </svg>
                                My CV
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/morgan-james-09092b295/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-md flex items-center justify-center"
                        >
                            <Image
                                src="/linkedin.png"
                                alt="Visit My LinkedIn"
                                width="80"
                                height="5"
                            />
                        </a>


                    </div>
                    <div className="text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <h1 className="text-2xl mb-3 font-bold text-gray-900 dark:text-gray-100">Welcome to my Portfolio</h1>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            Hello! My name is Morgan James, I am currently a third-year Computer Science student at the University of Exeter, a Russell Group university known for its strong emphasis on research and academic excellence. My passion lies in software development, where I enjoy the challenge of building full-stack applications that solve real-world problems.
                        </p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            This website serves as a platform to showcase the skills and knowledge I have gained throughout my studies and personal projects. It highlights my ability to design, develop, and deploy applications from end to end. Whether it is frontend development, backend engineering, or everything in between, I am constantly exploring new technologies and refining my expertise.
                        </p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            The creation of this website is not just a portfolio — it is a demonstration of my commitment to the field and a step towards my professional future. I am using it to present my work to potential employers, particularly for internships that will allow me to grow further as a developer. Through these opportunities, I aim to contribute my skills while continuing to learn from industry professionals.
                        </p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">
                            Thank you for visiting my site, and I hope it gives you a clear picture of my capabilities and enthusiasm for software development!
                        </p>
                    </div>

                </div>
            </main>
        </>
    );
}
