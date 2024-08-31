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
                        imageSrc="/githublogo.png" // Replace with your image path
                        imageAlt="Left-Over Chef"
                        heading="GOOGLE DEVFEST PROJECT: LEFTOVER CHEF"
                        text={
                            <>
                                <p>
                                    Secured third place at Google Dev Fest, LeftOver Chef was conceived and developed within a week to address sustainability challenges. Focused on reducing food waste, our solution provided a platform where students could input leftovers, receiving generated recipes to minimise ingredient wastage.
                                </p>
                                <br/>
                                <p>
                                    Initially utilising a RESTful API to fetch a variety of recipes, we stored this data in a JSON file for efficient filtering. Recognising the need for an additional dynamic database containing current user ingredients, measurements, and accurate pricing, we implemented a solution using SQLite3 in Python. This helped us store an accurate up to date pricing for food that could be later used for money saved and cheapest option features.
                                </p>
                                <br/>
                                <p>
                                    For user-friendly access, the front end was hosted on AWS, featuring a JavaScript-based website with Bootstrap integration. This interface enhanced usability and accessibility. Within one week, we successfully delivered a website, contributing to sustainable practices and culinary creativity.
                                </p>
                            </>
                        }
                        reverse={false}
                    />
                    <Panel
                        imageSrc="/githublogo.png" // Replace with your image path
                        imageAlt="Project Image 2"
                        heading="Grad Gig: Full stack web application"
                        text={
                            <>
                                <p>
                                    I successfully developed and deployed a full-stack job board application utilising the latest Next.js framework, incorporating server components, and integrating a MongoDB database. This project serves as a comprehensive demonstration of my full-stack development capabilities, from front-end design to back-end implementation and database management. The application includes key features such as user authentication, company creation, job posting with image uploads to S3, and CRUD operations for job listings.
                                </p>
                                <br/>
                                <p>
                                    For authentication, I integrated WorkOS, enabling seamless and secure user login and management. The project was built with a focus on providing a seamless user experience and leveraging modern web technologies. I covered all essential aspects from the homepage setup to handling job data within the MongoDB database. This project showcases my ability to build robust, scalable web applications, with the entire application deployed on Vercel.
                                </p>
                            </>
                        }
                        reverse={true}
                    />
                    <Panel
                        imageSrc="/githublogo.png" // Replace with your image path
                        imageAlt="Project Image 3"
                        heading="Sustain-A-Meal"
                        text={
                            <>
                            <p>
                                I developed and deployed Sustain A Meal as part of a group software development project aimed at combating food waste and promoting sustainability among students. The application leverages AI through OpenAI integration to generate recipes based on available ingredients, serving size, and allergies, helping students minimise food waste. The project included a gamification element where users earned points for reducing waste, fostering competition among students and accommodation teams.
                            </p>
                                <br/>
                                <p>
                                    Authentication was securely managed with Clerk, and we employed a robust CI/CD pipeline with Docker Compose and NGINX for deployment. Version control was handled using Git, with collaboration facilitated through a Github organisation and automated processes using GitHub Actions. This project showcases my ability to work effectively in a team, utilising modern development practices and tools to deliver a meaningful, sustainable solution
                                </p>

                            </>


                        }
                        reverse={false}
                    />
                </div>
            </main>
        </div>
    );
}
