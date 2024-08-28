import React, { useState, useEffect } from 'react';

export default function Journey() {
    const [fontSize, setFontSize] = useState(24);
    const [translateY, setTranslateY] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Array of texts to be displayed
    const texts = [
        "Hello World!",
        "This is where I started getting interest.",
        "Exploring Full Stack Web Development.",
        "Continuing the journey with React and Django!",
        "Thanks for scrolling through!"
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

            const newFontSize = 24 + scrollTop * 0.1;
            const newTranslateY = scrollTop * -0.1;

            setFontSize(newFontSize);
            setTranslateY(newTranslateY);

            if (scrollPercent > 20) {
                setOpacity(0);
            } else {
                setOpacity(1);
            }

            if (scrollPercent > 95) {
                // Change text index based on scroll position
                const textIndex = Math.floor((scrollPercent - 95) / 5);
                if (textIndex < texts.length) {
                    setCurrentTextIndex(textIndex);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="relative flex flex-col h-cvh bg-gradient-to-tl from-purple-600 to-yellow-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white opacity-50"></div>
                <div className='h-90vh flex flex-col justify-center items-center'>
                    <h1
                        className="font-semibold fixed"
                        style={{
                            fontSize: `${fontSize}px`,
                            transform: `translateY(${translateY}px)`,
                            opacity: opacity,
                            transition: 'font-size 0.2s ease, transform 0.2s ease, opacity 0.8s ease',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Welcome to the Journey of me Starting Full Stack Web Developer
                    </h1>
                    <h1 className='animate-bounce pt-40'>⇣ Scroll ⇣</h1>
                </div>
                <div className="flex items-center justify-center m-4 space-x-4">
                    <img src="/skillcon/python.svg" alt="Python" className="w-24 h-24" />
                    <div className="flex flex-col">
                        <div className="text-2xl font-semibold">Python</div>
                        <div>Started My Journey with Python</div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className="root-container">
                        <div className="rootsketch">
                            <div className="branch branch-left">Basic Codes</div>
                            <div className="branch branch-right">Flask App</div>
                            <div className="branch branch-left lower-branch">Django</div>
                            <div className="branch branch-right lower-branch">Twitter</div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>



            </div>

        </>
    );
}
