// components/Panel.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface PanelProps {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    text: React.ReactNode;
    reverse: boolean;
}

function Panel({ imageSrc, imageAlt, heading, text, reverse }: PanelProps) {
    const [imageLoading, setImageLoading] = useState<boolean>(true);

    return (
        <div
            className={`flex flex-col md:flex-row ${
                reverse ? 'md:flex-row-reverse' : ''
            } items-center`}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                {imageLoading && (
                    <FontAwesomeIcon
                        icon={faSpinner}
                        className="text-gray-400 animate-spin h-8 w-8"
                    />
                )}
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={300}
                    onLoad={() => setImageLoading(false)}
                    onLoadingComplete={() => setImageLoading(false)}
                />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:px-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">{heading}</h2>
                <div className="text-gray-700 dark:text-gray-300">{text}</div>
            </div>
        </div>
    );
}

export default Panel;
