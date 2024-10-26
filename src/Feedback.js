import React, { useState, useEffect } from "react";
import './feedback.css'; // We'll add some CSS for the transition

const Paragraphs = () => {
    const paragraphs = [
        "This is the first paragraph.",
        "This is the second paragraph.",
        "This is the third paragraph.",
        "This is the fourth paragraph.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true); // To control the fade effect

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => {
                    if (prevIndex < paragraphs.length - 1) {
                        return prevIndex + 1;
                    } else {
                        return prevIndex;
                    }
                });
                setFade(true); // Fade-in the new paragraph
            }, 500); // Time for fade-out (same as CSS transition duration)
        }, 2500); // Show each paragraph for 2 seconds + 500ms transition

        return () => clearInterval(interval);
    }, [paragraphs.length]);

    return (
        <div>
            <p className={fade ? "fade-in" : "fade-out"}>{paragraphs[currentIndex]}</p>
        </div>
    );
};

export default Paragraphs;