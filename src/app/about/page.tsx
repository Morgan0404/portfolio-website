import ContactDetails from "@/components/ContactDetails";
import Navbar from "@/components/Navbar";
import React from "react";
import Timeline from "@/components/Timeline";

export default function ContactPage() {
    return (
        <>
            {/* Navbar spans across the top */}
            <Navbar />

            {/* Main content starts below the Navbar */}
            <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-20">
                <div className="flex flex-col items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-center mt-8">My Project Timeline</h1>
                        <Timeline />
                    </div>
                </div>

            </main>


        </>
    );
}
