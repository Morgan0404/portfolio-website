"use client"; // Ensure this is a client component

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Timeline from '../components/Timeline'; // Adjust the path as needed

export default function Home() {
    return (
        <>
            {/* Navbar spans across the top */}
            <Navbar />

            {/* Main content starts below the Navbar */}
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
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
                            <img
                                src="/githublogo.png"
                                alt="Visit My GitHub"
                                className="h-6 w-auto" // Adjust height as needed
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/morgan-james-09092b295/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-md flex items-center justify-center"
                        >
                            <img
                                src="/linkedin.png"
                                alt="Visit My LinkedIn"
                                className="h-6 w-auto" // Adjust height as needed
                            />
                        </a>
                    </div>
                    <div className="text-left mt-6">
                        <h1 className="text-2xl mb-3 text-gray-500 dark:text-gray-400">Welcome to my Portfolio</h1>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                        <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                    </div>
                </div>
            </main>
        </>
    );
}
