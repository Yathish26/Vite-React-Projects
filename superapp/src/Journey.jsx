import React, { useState, useEffect } from 'react';

export default function Journey() {
    const [scrollTop, setScrollTop] = useState(0);
    const [opacity, setOpacity] = useState(1);
    const [fontSize, setFontSize] = useState(30);

    // Projects List
    const python = ['Instagram Profile Downloader', 'HQ Video Downloader', 'Media to JSON Converter (Vice Verca)', 'PDF to Text Converter', 'Face Detection and Grouping'];
    const flask = ['Twitter Social Clone'];
    const django = ['Dynamic News Feed Application', 'Blog Platform with User-Generated Content Management', 'Social Networking Platform with Real-time Updates'];
    const javascript = ['Color Scheme Switcher', 'Dark/Light Mode Theme Toggle', 'Calculator Application', 'E-commerce Cart System', 'Instagram Inspired Like/Unlike Button', 'AJAX Request and Response Handling', 'YouTube Subscription/Unsubscription Button'];
    const css = ['Airbnb Clone', 'Many Flex Box Properties', 'Instagram Clone'];
    const reactjs = ['Basic ReactJS Projects like : Weather App, To-Do List, etc. (all included in Axios)', 'Hire Arrive - Similar Service like Justdial', 'Axios - The Super App (The application you are currently viewing)'];
    const rest = ["Building API's for Apps using Serializers and Models"];
    const nodejs = ['Designing and implementing a scalable backend API using Node.js and Express.js', 'Integrating with a React frontend to create a seamless user experience'];

    useEffect(() => {
        const handleScroll = () => {
            const newScrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollPercent = (newScrollTop / (documentHeight - windowHeight)) * 100;

            setScrollTop(newScrollTop);
            setOpacity(scrollPercent > 5 ? 0 : 1);
            setFontSize(30 + (scrollPercent * 0.1));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative flex flex-col h-fit bg-gradient-to-tl from-purple-700 to-yellow-600 overflow-hidden text-white">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1
                    className="font-semibold fixed text-center text-wrap mb-40"
                    style={{
                        opacity: opacity,
                        transform: `translateY(${scrollTop * -0.1}px)`,
                        transition: 'opacity 0.8s ease, transform 0.2s ease',
                        fontSize: `${fontSize}px`,
                        textShadow: '0px 9px 20px rgba(0, 0, 0, 0.7)',
                    }}
                >
                    Welcome to the Journey of me Starting Full Stack Web Developer
                </h1>
                <h1 className="animate-bounce pt-40 text-xl">⇣ Scroll ⇣</h1>
            </div>
            <SkillSet logo={'python'} name={'Python'} list={python} listhead={'Python Projects'} description={'My First Programming Language'} />
            <Arrow />
            <SkillSet logo={'flask'} name={'Flask'} list={flask} listhead={'Flask Projects'} description={'A Web Framework'} />
            <Arrow />
            <SkillSet logo={'django'} name={'Django'} list={django} listhead={'Django Projects'} description={'A Modern Dynamic Web Framework'} />
            <Arrow />

            {/* JavaScript */}
            <div className="flex items-end justify-center space-x-4 mt-12">
                <img src="/skillcon/javascript.svg" alt="JavaScript" className="w-24 h-24" />
                <div className="flex flex-col">
                    <div className="text-4xl font-bold">JavaScript</div>
                    <div className="text-lg">My Second Programming Language</div>
                </div>
            </div>
            <div className="flex flex-col mt-8 items-center">
                <ul className="list-none space-y-4 text-center">
                    <li className="text-2xl font-semibold">✦ Vanilla JavaScript Projects ✦</li>
                    {javascript.map((project, index) => (
                        <li
                            className="text-lg transition-transform transform-gpu hover:scale-105"
                            key={index}
                        >
                            {project}
                        </li>
                    ))}
                </ul>
            </div>

            <Arrow />
            <SkillSet logo={'css'} name={'CSS'} list={css} listhead={'Exploring CSS'} description={'Yep, CSS is Very Deep'} />
            <Arrow />
            <SkillSet logo={'react'} name={'React JS'} list={reactjs} listhead={'React Projects'} description={'A JavaScript Library'} />
            <Arrow />
            <SkillSet logo={'djangorest'} name={'Django REST'} list={rest} listhead={"REST API's"} description={"Python Framework for Building Web APIs"} />
            <Arrow />

            {/* React + Django REST */}
            <div className="flex flex-col items-center justify-center space-y-4 mt-12">
                <div className="flex items-center space-x-4">
                    <img className="w-28 h-28" src="/skillcon/react.svg" alt="React" />
                    <img className="w-16 h-16" src="/icons/plus.svg" alt="Plus" />
                    <img className="w-28 h-28" src="/skillcon/django.svg" alt="Django" />
                    <img className="w-16 h-16" src="/icons/plus.svg" alt="Plus" />
                    <img className="w-28 h-28" src="/skillcon/djangorest.svg" alt="Django REST" />
                </div>
                <div className="text-4xl font-bold">Full Stack Integration</div>
                <div className="text-xl font-semibold">✦ Django REST for the Backend and React for the Frontend ✦</div>
                <li className="text-lg list-inside">Project Hire Arrive</li>
            </div>

            <Arrow />
            <SkillSet logo={'postgresql'} name={'PostgreSQL'} description={'Database Query Language'} />
            <Arrow />
            <SkillSet logo={'nodejs'} name={'Node JS'} list={nodejs} listhead={'Minimal Node Projects'} description={'JavaScript Runtime Environment'} />
            <Arrow />
            <SkillSet logo={'mongodb'} name={'MongoDB'} description={'NoSQL Database'} />
            <Arrow />
            <SkillSet logo={'git'} name={'Git'} description={'Version Control System'} />
            <Arrow />
            <SkillSet logo={'bootstrap'} name={'Bootstrap'} description={'CSS Framework'} />
            <Arrow />
            <SkillSet logo={'tailwind'} name={'Tailwind'} description={'CSS Framework'} />
        </div>
    );
}

const Arrow = () => {
    return (
        <div className="flex items-center justify-center my-8 animate-pulse">
            <img className="w-12 h-12" src="/icons/movedown.svg" alt="Arrow Down" />
        </div>
    );
}

const SkillSet = ({ logo, name, list = [], listhead, description }) => {
    return (
        <div className="py-12">
            <div className="flex items-center justify-center gap-6">
                <img src={`/skillcon/${logo}.svg`} alt={name} className="w-28 h-28" />
                <div className="flex flex-col">
                    <div className="text-4xl font-bold">{name}</div>
                    <div className="text-lg">{description}</div>
                </div>
            </div>

            {list.length > 0 && (
                <div className="flex flex-col mt-8 items-center">
                    <ul className="list-none space-y-4 text-center">
                        {listhead && <li className="text-2xl font-semibold">{`✦ ${listhead} ✦`}</li>}
                        {list.map((project, index) => (
                            <li
                                className="text-lg transition-transform transform-gpu hover:scale-105"
                                key={index}
                            >
                                {project}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

