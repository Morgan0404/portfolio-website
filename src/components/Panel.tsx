import React from "react";

type PanelProps = {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    text: string | JSX.Element;
    reverse: boolean;
};

export default function Panel({ imageSrc, imageAlt, heading, text, reverse }: PanelProps) {
    return (
        <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center gap-4`}>
            <div className="w-1/2">
                <img src={imageSrc} alt={imageAlt} className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-1/2">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">{heading}</h2>
                {typeof text === "string" ? (
                    <p className="text-sm text-gray-700">{text}</p>
                ) : (
                    <div className="text-sm text-gray-700">{text}</div>
                )}
            </div>
        </div>
    );
}
