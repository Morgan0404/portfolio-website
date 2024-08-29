import DownloadCVButton from "./DownloadCVButton";
import navbar from "@/components/Navbar";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
function ContactDetails() {

    return (
        <div className="container my-12 mx-auto px-2 md:px-4">
            <Navbar />

            <section className="mb-32">

                <div className="flex justify-center">
                    <div className="text-center md:max-w-xl lg:max-w-3xl">
                        <h2 className="mb-12 px-6 text-3xl font-bold">
                            Contact Me
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap">

                    <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                                Name
                            </label>
                            <input type="text" className="px-2 py-2 border w-full outline-none rounded-md"
                                   id="exampleInput90" placeholder="Name"/>
                        </div>

                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                                Email
                            </label>
                            <input type="email" className="px-2 py-2 border w-full outline-none rounded-md"
                                   id="exampleInput90"
                                   placeholder="Enter your email address"/>
                        </div>

                        <div className="mb-3 w-full">
                            <label className="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                                Message
                            </label>
                            <textarea className="px-2 py-2 border rounded-[5px] w-full outline-none" name=""
                                      id=""></textarea>
                        </div>

                        <button type="button"
                                className="mb-6 inline-block w-full rounded bg-blue-600 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">
                            Send
                        </button>

                    </form>

                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                        <div className="flex flex-wrap">
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">
                                            Contact me
                                        </p>
                                        <p className="text-neutral-500 ">
                                            morganjames092@gmail.com
                                        </p>
                                        <p className="text-neutral-500 ">
                                            07710466903
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="flex items-start">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold ">
                                            Sales questions
                                        </p>
                                        <p className="text-neutral-500 ">
                                            sales@example.com
                                        </p>
                                        <p className="text-neutral-500 ">

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="align-start flex">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold ">Press</p>
                                        <p className="text-neutral-500 ">
                                            press@example.com
                                        </p>
                                        <p className="text-neutral-500 ">

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                                <div className="align-start flex">
                                    <div className="shrink-0">
                                        <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-6 grow">
                                        <p className="mb-2 font-bold">
                                            Bug report
                                        </p>
                                        <p className="text-neutral-500 ">
                                            bugs@example.com
                                        </p>
                                        <p className="text-neutral-500">

                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="flex gap-7 justify-center mt-7">
                            <a
                                href="https://github.com/Morgan0404"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded-md flex items-center justify-center"
                            >
                                <Image
                                    src="/githublogo.png"
                                    alt="Visit My GitHub"
                                    width="80"
                                    height = "7"
                                    className="h-7 w-20" // Adjust height as needed
                                />
                            </a>
                            <a href={"/MorganJamesCV.pdf"} download="Morgan_James_CV.pdf" >
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary-500 bg-white px-5 py-2.5 text-center text-sm font-bold text-black shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-7 w-4"
                                    >
                                        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                                    </svg>
                                    My CV
                                </button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/morgan-james-09092b295/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white p-2 rounded-md flex items-center justify-center"
                            >
                                <Image
                                    src="/linkedin.png"
                                    alt="Visit My LinkedIn"
                                    width="80"
                                    height="5"
                                />
                            </a>


                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}


export default ContactDetails;
