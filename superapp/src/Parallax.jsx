import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Parallaxt() {
    return (
        <div className="h-screen overflow-hidden">
            <Parallax pages={4} className="w-full h-full" easing="cubic-bezier(0.5, 0, 0.5, 1)">
                {/* First Layer */}
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={1}
                    style={{
                        background: 'linear-gradient(135deg, rgba(245, 209, 66, 1) 0%, rgba(245, 209, 66, 0) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '2xl',
                        fontWeight: 'semibold',
                    }}>
                    <h2 className="animate-fade-in">Welcome to the Journey of Me Starting Full Stack Web Development</h2>
                    <h2 className="animate-bounce mt-4">⇣ Scroll ⇣</h2>
                </ParallaxLayer>

                {/* Second Layer */}
                <ParallaxLayer
                    offset={1}
                    speed={1}
                    factor={2}
                    style={{
                        display: 'flex',
                        background: 'linear-gradient(135deg, rgba(167, 235, 187, 1) 0%, rgba(167, 235, 187, 0) 100%)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        fontSize: '2xl',
                        fontWeight: 'semibold',
                    }}>
                    <img src="/skillcon/html.svg" alt="" className="w-24 h-24 animate-fade-in" />
                    <h2 className="animate-fade-in">Yup Hello World Everyone Starts from Here</h2>
                    <h2 className="animate-fade-in">And also the Most viewed Line </h2>
                </ParallaxLayer>

                {/* Third Layer */}
                <ParallaxLayer
                    offset={2}
                    speed={1}
                    factor={1}
                    sticky={{ start: 2.5, end: 4 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'center',
                        background: 'linear-gradient(135deg, rgba(245, 47, 172, 1) 0%, rgba(245, 47, 172, 0) 100%)',
                        fontSize: '2xl',
                        fontWeight: 'semibold',
                    }}>
                    <h2 className="animate-fade-in">I Started Learning Python as my first programming Language</h2>
                    <img src="skillcon/python.svg" alt="" className="w-24 h-24 animate-fade-in" />
                </ParallaxLayer>

                {/*Sticky Layers*/}
                <ParallaxLayer
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '4xl',
                        fontWeight: 'semibold',
                    }}
                    sticky={{ start: 1.3, end: 1.7 }}>
                    <h1 className="animate-bounce">⇣Keep on Scrolling ⇣</h1>
                </ParallaxLayer>

            </Parallax>
        </div>
    );
}



