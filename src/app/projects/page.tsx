import Projects from "@/components/ContactDetails";
import MyProjects from "@/components/MyProjects";
import Timeline from "@/components/Timeline";
import React from "react";

export default function ProjectDisplay() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Contact Me</h1>
            <MyProjects />
            {/* Main content starts below the Navbar */}
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
                <div className="flex flex-col items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-center mt-8">My Projects - A timeline</h1>
                        <Timeline />
                    </div>
                </div>

            </main>
        </div>
    );
}

