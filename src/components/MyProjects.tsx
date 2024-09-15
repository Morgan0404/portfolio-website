import React from "react";
import Navbar from "@/components/Navbar";
import Panel from "@/components/Panel"; // Adjust the path as needed

export default function MyProjects() {
    return (
        <div>
            <Navbar />

            <main className="fade-in flex min-h-screen flex-col items-center justify-between px-4 md:px-24 pt-10 md:pt-20">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl md:text-4xl font-bold text-center mt-8">My Top 5 Projects</h1>

                    {/* Project 1 */}
                    <div className="text-left mt-6 p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 w-full max-w-4xl">
                        <Panel
                            imageSrc="/mri.png" // Replace with your image path
                            imageAlt="Project Image 2"
                            heading="1. Brain Tumour Detection Using Machine Learning | Dissertation Piece"
                            text={
                                <>
                                    <p>
                                        I am currently working on my dissertation, which focuses on brain tumor detection using machine learning. This project involves applying advanced machine learning techniques to analyse medical imaging data, with the goal of improving the accuracy and efficiency of tumor detection. My research aims to contribute to the ongoing advancements in medical diagnostics by leveraging the power of AI to assist healthcare professionals in making more informed decisions.
                                    </p>
                                </>
                            }
                            reverse={true}
                        />
                    </div>

                    {/* Project 2 */}
                    <div className="text-left mt-6 p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 w-full max-w-4xl">
                        <Panel
                            imageSrc="/E10A4721.JPG" // Replace with your image path
                            imageAlt="Left-Over Chef"
                            heading="2. Leftover Chef | Google Devfest Hackathon Submission"
                            text={
                                <>
                                    <p>
                                        Secured third place at Google Dev Fest, LeftOver Chef was conceived and developed within a week to address sustainability challenges. Focused on reducing food waste, our solution provided a platform where students could input leftovers, receiving generated recipes to minimise ingredient wastage.
                                    </p>
                                    <br/>
                                    <p>
                                        We used a RESTful API to fetch recipes, stored data in a JSON file for filtering, and later implemented SQLite3 in Python for managing ingredients and pricing, enabling features like money-saving options.
                                    </p>
                                    <br/>
                                    <p>
                                        The front end, hosted on AWS, was built with JavaScript and Bootstrap for usability. This project highlights our contribution to sustainability through culinary creativity.
                                    </p>
                                </>
                            }
                            reverse={false}
                        />
                    </div>

                    {/* Project 3 */}
                    <div className="text-left mt-6 p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 w-full max-w-4xl">
                        <Panel
                            imageSrc="/grad.png" // Replace with your image path
                            imageAlt="Grad Gig"
                            heading="3. Grad Gig | Full Stack Web Application"
                            text={
                                <>
                                    <p>
                                        I developed a full-stack job board application using the Next.js framework with server components and a MongoDB database. It includes features like user authentication, job posting with image uploads to S3, and CRUD operations.
                                    </p>
                                    <br/>
                                    <p>
                                        I integrated WorkOS for authentication and deployed the entire application on Vercel, demonstrating my skills in building scalable web applications.
                                    </p>
                                </>
                            }
                            reverse={true}
                        />
                    </div>

                    {/* Project 4 */}
                    <div className="text-left mt-6 p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 w-full max-w-4xl">
                        <Panel
                            imageSrc="/sustain.png" // Replace with your image path
                            imageAlt="Sustain-A-Meal"
                            heading="4. Sustain-A-Meal | Full Stack Group Project"
                            text={
                                <>
                                    <p>
                                        Sustain A Meal is a group project aimed at promoting sustainability among students. It uses AI to generate recipes based on available ingredients and includes a gamification system for reducing food waste.
                                    </p>
                                    <br/>
                                    <p>
                                        The app includes secure authentication with Clerk, and the deployment process was managed using a CI/CD pipeline with Docker Compose and NGINX. This project showcases my ability to collaborate effectively and implement modern development practices.
                                    </p>
                                </>
                            }
                            reverse={false}
                        />
                    </div>

                    {/* Project 5 */}
                    <div className="text-left mt-6 p-4 md:p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 w-full max-w-4xl">
                        <Panel
                            imageSrc="/githublogo.png" // Replace with your image path
                            imageAlt="Web-Dev Card Game"
                            heading="5. Web-Dev Card Game | LAMP Stack"
                            text={
                                <>
                                    <p>
                                        I developed a web-based card matching game using the LAMP stack (Linux, Apache, MySQL, PHP) hosted on an Azure server. The game included a dynamic leaderboard and session-based user tracking for a competitive experience.
                                    </p>
                                </>
                            }
                            reverse={true}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
