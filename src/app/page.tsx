'use client';

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    // States to track loading of images
    const [githubLoading, setGithubLoading] = useState(true);
    const [linkedinLoading, setLinkedinLoading] = useState(true);

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="fade-in mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white text-center">
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-moving-gradient bg-[length:200%]">
        Excited to Grow,
    </span>
                        <span className="block">Eager to Make a Difference</span>
                    </h1>

                    <div className="fade-in flex gap-4 justify-center">
                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/Morgan0404"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fade-in bg-white  rounded-md flex items-center justify-center"
                            style={{ width: '100px', height: '41px' }}  // Fixed size matching image
                        >
                            {githubLoading && (
                                <FontAwesomeIcon icon={faSpinner} className="text-gray-400 animate-spin h-4 w-4" />
                            )}
                            <Image
                                src="/githublogo.png"
                                alt="Visit My GitHub"
                                width="80"
                                height="7"
                                className={`h-7 w-20 ${githubLoading ? 'hidden' : ''}`}  // Hide image until loaded
                                onLoadingComplete={() => setGithubLoading(false)}  // Ensure spinner stops after image load
                                priority={true}  // Prioritize this image for faster loading
                            />
                        </a>

                        {/* CV Button */}
                        <a href={"/MorganJamesCVnewfinal.pdf"} download="MorganJamesCVnewfinal.pdf">
                            <button

                                style={{ width: '110px', height: '42px' }}

                                type="button"
                                className="fade-in w-30 h-19.5 inline-flex items-center gap-1.5 rounded-lg border border-primary-500 bg-white px-4 py-2.5 text-center text-sm font-bold text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
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

                        {/* LinkedIn Icon */}
                        <a
                            href="https://www.linkedin.com/in/morgan-james-09092b295/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fade-in bg-white p-2 rounded-md flex items-center justify-center"
                            style={{ width: '100px', height: '41px' }}  // Fixed size matching image
                        >
                            {linkedinLoading && (
                                <FontAwesomeIcon icon={faSpinner} className="text-gray-400 animate-spin h-4 w-4" />
                            )}
                            <Image
                                src="/linkedin.png"
                                alt="Visit My LinkedIn"
                                width="80"
                                height="5"
                                className={`h-5 w-15 ${linkedinLoading ? 'hidden' : ''}`}  // Hide image until loaded
                                onLoadingComplete={() => setLinkedinLoading(false)}  // Ensure spinner stops after image load
                                priority={true}  // Prioritize this image for faster loading
                            />
                        </a>
                    </div>

                    <div className="fade-in text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <h1 className="fade-in text-2xl sm:text-2xl mb-3 font-bold text-gray-900 dark:text-gray-100">Welcome to my Portfolio</h1>
                        <p className="fade-in mb-3 text-gray-500 dark:text-gray-400">
                            Hello! My name is Morgan James, I am currently a third-year Computer Science student at the University of Exeter, a Russell Group university known for its strong emphasis on research and academic excellence. My passion lies in software development, where I enjoy the challenge of building full-stack applications that solve real-world problems.
                        </p>
                        <p className="fade-in mb-3 text-gray-500 dark:text-gray-400">
                            This website serves as a platform to showcase the skills and knowledge I have gained throughout my studies and personal projects. It highlights my ability to design, develop, and deploy applications from end to end. Whether it is frontend development, backend engineering, or everything in between, I am constantly exploring new technologies and refining my expertise.
                        </p>
                        <p className="fade-in mb-3 text-gray-500 dark:text-gray-400">
                            The creation of this website is not just a portfolio — it is a demonstration of my commitment to the field and a step towards my professional future. I am using it to present my work to potential employers, particularly for internships that will allow me to grow further as a developer. Through these opportunities, I aim to contribute my skills while continuing to learn from industry professionals.
                        </p>
                        <p className="fade-in mb-3 text-gray-500 dark:text-gray-400">
                            Thank you for visiting my site, and I hope it gives you a clear picture of my capabilities and enthusiasm for software development!
                        </p>
                        <div className="flex justify-center mt-6">
                            <Link href="/projects">
                                <button
                                    type="button"
                                    className="fade-in text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Check out my work
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
