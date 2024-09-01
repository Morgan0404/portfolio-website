import React from "react";
import Navbar from "@/components/Navbar";
import Panel from "@/components/Panel"; // Adjust the path as needed

export default function MyProjects() {
    return (
        <div>
            <Navbar />

            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold text-center mt-8">My Top 5 Projects</h1>
                    <div className="text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <Panel
                            imageSrc="/githublogo.png" // Replace with your image path
                            imageAlt="Project Image 2"
                            heading="1. Brain Tumour Detection Using machine learning | Dissertation Piece
"
                            text={
                                <>
                                    <p>
                                        I am currently working on my dissertation, which focuses on brain tumor detection using machine learning. This project involves applying advanced machine learning techniques to analyse medical imaging data, with the goal of improving the accuracy and efficiency of tumor detection. My research aims to contribute to the ongoing advancements in medical diagnostics by leveraging the power of AI to assist healthcare professionals in making more informed decisions. This work not only deepens my understanding of machine learning but also allows me to contribute to a field that has significant real-world impact.                                    </p>

                                </>
                            }
                            reverse={true}
                        />
                    </div>


                    <div className="text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">

                    <Panel
                        imageSrc="/githublogo.png" // Replace with your image path
                        imageAlt="Left-Over Chef"
                        heading="2. Leftover Chef | Google devfest hackathon submission"
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
                    </div>

                    <div className="text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <Panel
                        imageSrc="/githublogo.png" // Replace with your image path
                        imageAlt="Project Image 2"
                        heading="3. Grad Gig | Full stack web application"
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
                    </div>
                    <div className="text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <Panel
                        imageSrc="/githublogo.png" // Replace with your image path
                        imageAlt="Project Image 3"
                        heading="4. Sustain-A-Meal | Full stack Group software Development Project"
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
                    <div className="text-left mt-6 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <Panel
                            imageSrc="/githublogo.png" // Replace with your image path
                            imageAlt="Project Image 2"
                            heading="5. Web-Dev Card Game | Linuz, Apache, PHP, HTML/CSS, Java
"
                            text={
                                <>
                                    <p>
                                        I developed a web-based card matching game utilizing the LAMP stack (Linux, Apache, MySQL, PHP), hosted on an Apache server on Azure. The game featured a dynamic leaderboard, where user scores were logged and tracked using sessions and cookies, allowing for a personalized and competitive gaming experience. The project involved both front-end and back-end development, requiring a strong understanding of web technologies, session management, and server deployment. This project was part of my web development coursework, showcasing my ability to build and deploy robust server-side applications.                                    </p>

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
