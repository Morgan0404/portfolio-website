"use client"; // Ensure this is a client component

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Timeline from '../components/Timeline'; // Adjust the path as needed
import ContactDetails from "@/components/ContactDetails";


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
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-center mt-8">My Project Timeline</h1>
                    <Timeline />
                </div>
            </main>


        </>
    );
}
