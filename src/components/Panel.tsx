import React from "react";
import Image from "next/image";

export default function Panel({ imageSrc, imageAlt, text, reverse }) {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 mb-8`}>
            <div className="w-full md:w-1/2 flex justify-center">
                <Image src={imageSrc} alt={imageAlt} width={400} height={300} className="rounded-lg shadow-md" />
            </div>
            <div className="w-full md:w-1/2">
                <p className="text-lg leading-relaxed">{text}</p>
            </div>
        </div>
    );
}
