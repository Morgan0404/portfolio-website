import React from "react";
import Navbar from "@/components/Navbar";
import CoursePanel from "@/components/CoursePannel"; // Adjust the path as needed

export default function UniAbout() {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold text-center mt-8">My University Courses</h1>

                    <CoursePanel
                        heading="First Year"
                        courses={[
                            { title: "Introduction to Programming", details: ["Basic syntax", "Control structures", "Functions and modules"] },
                            { title: "Data Structures and Algorithms", details: ["Arrays and Lists", "Trees and Graphs", "Sorting algorithms"] },
                            { title: "Discrete Maths For Computer Science", details: ["Discrete mathematics", "Linear algebra", "Probability"] },
                            { title: "Computational Maths", details: ["Discrete mathematics", "Linear algebra", "Probability"] },
                            { title: "Object Orientated Programming", details: ["CPU architecture", "Memory hierarchy", "Assembly language"] },
                            { title: "Web Development", details: ["HTML/CSS", "JavaScript basics", "Responsive design"] },
                            { title: "Social and Professional Issues of the Information Age", details: ["HTML/CSS", "JavaScript basics", "Responsive design"] }

                        ]}
                    />

                    <CoursePanel
                        heading="Second Year"
                        courses={[
                            { title: "Software Development", details: ["Agile methodologies", "Version control with Git", "Software testing"] },
                            { title: "Computer Languages and representation", details: ["SQL basics", "Normalization", "Database design"] },
                            { title: "Database Theory and Design", details: ["Process management", "Memory management", "File systems"] },
                            { title: "Artificial Intelligence", details: ["Process management", "Memory management", "File systems"] },
                            { title: "Network and Computer Security", details: ["TCP/IP protocols", "Network security", "Encryption techniques"] },
                            { title: "Mobile and ubiquitous computing", details: ["JavaScript frameworks", "APIs", "Front-end optimization"] },
                            { title: "Group Software development project", details: ["JavaScript frameworks", "APIs", "Front-end optimization"] },
                            { title: "Computer Science Research and Applications", details: ["JavaScript frameworks", "APIs", "Front-end optimization"] }


                        ]}
                    />

                    <CoursePanel
                        heading="Third Year"
                        courses={[
                            { title: "Individual Literature Review and Project (Final Year Project)", details: ["Search algorithms", "Logic and reasoning", "AI ethics"] },
                            { title: "Machine Learning And AI", details: ["Supervised learning", "Unsupervised learning", "Neural networks"] },
                            { title: "Learning From Data", details: ["AWS services", "Serverless architecture", "Containerization with Docker"] },
                            { title: "Enterprise Computing", details: ["Concurrency", "Distributed databases", "Fault tolerance"] },
                            { title: "Nature Inspired Computation", details: ["Concurrency", "Distributed databases", "Fault tolerance"] },
                            { title: "Algorithms that changed the world", details: ["Research", "Project development", "Thesis writing"] }
                        ]}
                    />
                </div>
            </main>
        </div>
    );
}
