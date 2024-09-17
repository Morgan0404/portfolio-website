// components/FadeInSection.js

import React, { useRef, useEffect } from 'react';

function FadeInSection(props) {
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    // When the element is visible, add the 'is-visible' class
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing after it's visible
                    }
                });
            },
            {
                threshold: 0.1, // Adjust this value as needed
            }
        );

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        // Cleanup function
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <div className={`fade-in-section ${props.className || ''}`} ref={domRef}>
            {props.children}
        </div>
    );
}

export default FadeInSection;
