import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
    const [scrollTop, setScrollTop] = useState(0);
    // const [gradient, setGradient] = useState('linear-gradient(45deg, red, black)');

    // Refs for each section
    const titleRef = useRef(null);
    const arrowRef = useRef(null);
    const skillRefs = useRef([]);
    skillRefs.current = [];

    //Skillrefs
    const pyref = useRef(null);
    const flaskref = useRef(null);
    const djangoref = useRef(null);
    const jsref = useRef(null);
    const cssref = useRef(null);
    const reactref = useRef(null);
    const restref = useRef(null);
    const noderef = useRef(null);
    const tailwindref = useRef(null);

    const python = ['Instagram Profile Downloader', 'HQ Video Downloader', 'Media to JSON Converter', 'PDF to Text Converter', 'Face Detection and Grouping'];
    const flask = ['Twitter Social Clone'];
    const django = ['Dynamic News Feed Application', 'Blog Platform', 'Social Networking Platform'];
    const javascript = ['Color Scheme Switcher', 'Dark/Light Mode Toggle', 'Calculator App', 'E-commerce Cart System', 'Like/Unlike Button', 'AJAX Handling'];
    const css = ['Airbnb Clone', 'Many Flexbox Projects', 'Instagram Clone'];
    const reactjs = ['Weather App', 'To-Do List', 'Hire Arrive', 'Axios - Super App'];
    const rest = ["Building API's using Django REST Framework"];
    const nodejs = ['Backend API with Node.js and Express', 'Integration with React'];
    const tailwind = ['(This Project is Done with Talwind CSS)'];

    const addToRefs = (el) => {
        if (el && !skillRefs.current.includes(el)) {
            skillRefs.current.push(el);
        }
    };

    useEffect(() => {
        // GSAP Animations
        gsap.fromTo(titleRef.current, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' });
        gsap.fromTo(arrowRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, delay: 1.5, ease: 'bounce.out', repeat: -1 });
        gsap.fromTo('.head', { y: -150 }, { y: 0, duration: 1.2, ease: 'power2.out' });
        gsap.to(pyref.current, {
            y: -600,
            x: -900,
            duration: 1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: pyref.current,
                start: 'top 80%',
                end: 'bottom top',
                scrub: 1,
                pin: true,
                pinSpacing: false,
                toggleActions: 'restart pause reset',
                markers: true,
            },
        });
        gsap.to(flaskref.current, {
            y: -600,
            x: 900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: flaskref.current,
                start: 'top 80%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });
        gsap.to(djangoref.current, {
            y: 0,
            x: -900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: djangoref.current,
                start: 'top 30%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });
        gsap.to(jsref.current, {
            y: 0,
            x: 900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: jsref.current,
                start: 'top 30%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });
        gsap.to(cssref.current, {
            y: 0,
            x: -900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: cssref.current,
                start: 'top 30%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });
        gsap.to(reactref.current, {
            y: 0,
            x: 900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: reactref.current,
                start: 'top 30%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });
        gsap.to(restref.current, {
            y: 0,
            x: -900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: restref.current,
                start: 'top 30%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });
        gsap.to(noderef.current, {
            y: 0,
            x: 900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: noderef.current,
                start: 'top 30%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });
        gsap.to(tailwindref.current, {
            y: 0,
            x: -900,
            duration: 1,
            ease: 'power1.inOut',  // Smoother ease for gliding effect
            scrollTrigger: {
                trigger: tailwindref.current,
                start: 'top 30%',  // Adjust the scroll position for smoother trigger
                end: 'bottom top',
                scrub: 1,  // Use a scrub value to smooth the scrolling animation
                pin: true,  // Pin the element during the animation
                pinSpacing: false,  // Keep spacing to avoid layout shifts
                toggleActions: 'restart pause reset',
                markers: true,  // Useful for debugging, can be removed later
            },
        });


        // Animate skill sets
        skillRefs.current.forEach((el, index) => {
            gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 + index * 0.3, ease: 'power2.out', delay: index * 0.2 });
        });

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);

    return (
        <div style={{
            background: 'linear-gradient(45deg, red, black)',
            transition: 'background 0.5s ease-in-out',
        }} className="relative flex flex-col h-fit overflow-hidden text-white">
            <div className="h-screen flex flex-col justify-center items-center  text-center px-4 md:px-10">
                <h1
                    ref={titleRef}
                    className="font-semibold mb-40 head "
                    style={{
                        textShadow: '0px 9px 20px rgba(0, 0, 0, 0.7)',
                        fontSize: '30px',
                    }}
                >
                    Welcome to the Journey of me Starting Full Stack Web Developer
                </h1>
                <h1 ref={arrowRef} className="animate-bounce pt-40 text-lg md:text-xl">⇣ Scroll ⇣</h1>
            </div>

            {/* Skill Sets */}
            <SkillSet ref={pyref} logo={'python'} name={'Python'} list={python} listhead={'Python Projects'} description={'My First Programming Language'} />
            <Arrow />
            <SkillSet ref={flaskref} logo={'flask'} name={'Flask'} list={flask} listhead={'Flask Projects'} description={'A Web Framework'} />
            <Arrow />
            <SkillSet ref={djangoref} logo={'django'} name={'Django'} list={django} listhead={'Django Projects'} description={'A Modern Dynamic Web Framework'} />
            <Arrow />

            {/* JavaScript Section */}
            <div ref={jsref}>
                <div className="flex flex-col items-center justify-center space-y-4 mt-12 transition-opacity duration-500 ease-in-out hover:opacity-90">
                    <img src="/skillcon/javascript.svg" alt="JavaScript" className="w-20 h-20 md:w-24 md:h-24 transition-transform transform-gpu hover:scale-110" />
                    <div className="flex flex-col text-center">
                        <div className="text-2xl md:text-4xl font-bold">JavaScript</div>
                        <div className="text-sm md:text-lg">My Second Programming Language</div>
                    </div>
                </div>
                <div className="flex flex-col mt-8 items-center px-4">
                    <ul className="list-none space-y-2 md:space-y-4 text-center">
                        <li className="text-xl md:text-2xl font-semibold">✦ Vanilla JavaScript Projects ✦</li>
                        {javascript.map((project, index) => (
                            <li className="text-base md:text-lg transform-gpu hover:scale-110 transition-all duration-300 ease-out" key={index}>
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Other Skill Sets */}
            <Arrow />
            <SkillSet ref={cssref} logo={'css'} name={'CSS'} list={css} listhead={'Exploring CSS'} description={'Yep, CSS is Very Deep'} />
            <Arrow />
            <SkillSet ref={reactref} logo={'react'} name={'React JS'} list={reactjs} listhead={'React Projects'} description={'A JavaScript Library'} />
            <Arrow />
            <SkillSet ref={restref} logo={'djangorest'} name={'Django REST'} list={rest} listhead={"REST API's"} description={"Python Framework for Building Web APIs"} />
            <Arrow />
            <SkillSet ref={noderef} logo={'nodejs'} name={'Node JS'} list={nodejs} listhead={'Minimal Node Projects'} description={'JavaScript Runtime Environment'} />
            <Arrow />
            <SkillSet ref={tailwindref} logo={'tailwind'} name={'Tailwind'} list={tailwind} listhead={'My Current Favourite'} description={'CSS Framework'} />
        </div>
    );
}

const Arrow = () => {
    return (
        <div className="flex items-center justify-center my-8 animate-pulse">
            <img className="w-8 h-8 md:w-12 md:h-12 transition-transform transform-gpu hover:scale-125" src="/icons/movedown.svg" alt="Arrow Down" />
        </div>
    );
}

const SkillSet = React.forwardRef(({ logo, name, list = [], listhead, description }, ref) => {
    return (
        <div ref={ref} className="flex flex-col items-center justify-center space-y-4 mt-12 transition-opacity duration-500 ease-in-out hover:opacity-90">
            <img src={`/skillcon/${logo}.svg`} alt={name} className="w-20 h-20 md:w-24 md:h-24 transition-transform transform-gpu hover:scale-110" />
            <div className="flex flex-col text-center">
                <div className="text-2xl md:text-4xl font-bold">{name}</div>
                <div className="text-sm md:text-lg">{description}</div>
            </div>
            {list.length > 0 && (
                <div className="flex flex-col mt-8 items-center px-4">
                    <ul className="list-none space-y-2 md:space-y-4 text-center">
                        <li className="text-xl md:text-2xl font-semibold">✦ {listhead} ✦</li>
                        {list.map((project, index) => (
                            <li className="text-base md:text-lg transform-gpu hover:scale-110 transition-all duration-300 ease-out" key={index}>
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
