import React from "react";
import Navbar from "@/components/Navbar";
import Panel from "@/components/Panel"; // Adjust the path as needed

export default function MyProjects() {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold text-center mt-8">My Projects</h1>

                    <Panel
                        //imageSrc="/path-to-image1.jpg" // Replace with your image path
                        imageAlt="Project Image 1"
                        text="This is the description for project 1. The image is on the left."
                        reverse={false}
                    />
                    <Panel
                        //imageSrc="/path-to-image2.jpg" // Replace with your image path
                        imageAlt="Project Image 2"
                        text="This is the description for project 2. The image is on the right."
                        reverse={true}
                    />
                    <Panel
                        //imageSrc="/path-to-image3.jpg" // Replace with your image path
                        imageAlt="Project Image 3"
                        text="This is the description for project 3. The image is on the left."
                        reverse={false}
                    />
                </div>
            </main>
        </div>
    );
}
