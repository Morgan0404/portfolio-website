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
                        heading="PROJECT 2 TITLE"
                        text="This is the description for project 2. The image is on the right."
                        reverse={true}
                    />
                    <Panel
                        imageSrc="/githublogo.png" // Replace with your image path
                        imageAlt="Project Image 3"
                        heading="PROJECT 3 TITLE"
                        text="This is the description for project 3. The image is on the left."
                        reverse={false}
                    />
                </div>
            </main>
        </div>
    );
}
