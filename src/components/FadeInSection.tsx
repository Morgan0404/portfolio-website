// components/FadeInSection.tsx

import React, { useRef, useEffect } from 'react';

interface FadeInSectionProps {
    children: React.ReactNode;
    className?: string;
}

function FadeInSection({ children, className }: FadeInSectionProps) {
    const domRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <div className={`fade-in-section ${className || ''}`} ref={domRef}>
            {children}
        </div>
    );
}

export default FadeInSection;
