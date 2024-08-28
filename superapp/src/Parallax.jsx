import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Parallaxt() {
    return (
        <>
            <div>
                <Parallax pages={4} className='h-86vh'>
                    {/* First Layer */}
                    <ParallaxLayer
                        offset={0}
                        speed={1}
                        factor={1}
                        style={{
                            background: 'linear-gradient(to top, rgba(245, 209, 66, 0), rgba(245, 209, 66, 1))',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <h2 className="text-2xl text-black font-semibold">Welcome to the Journey of Me Starting Full Stack Web Development</h2>
                        <h2 className='animate-bounce mt-4'>⇣ Scroll ⇣</h2>
                    </ParallaxLayer>

                    {/* Second Layer */}
                    <ParallaxLayer
                        offset={1}
                        speed={1}
                        factor={2}
                        style={{
                            display: 'flex',
                            background: 'linear-gradient(to bottom, rgba(245, 47, 172, 0), rgba(255, 156, 225, 1), rgba(245, 47, 172, 0))',
                            
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}>
                        <img src="/skillcon/html.svg" alt="" />
                        <h2 className="text-2xl text-black">Yup Hello World Everyone Starts from Here</h2>
                        <h2>And also the Most viewed Line </h2>
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
                            background: 'linear-gradient(to top, rgba(167, 235, 187, 0), rgba(167, 235, 187, 1))'
                        }}>
                        <h2 className="text-2xl text-black font-semibold">I Started Learning Python as my first programming Language</h2>
                        <img src="skillcon/python.svg" alt="" />
                    </ParallaxLayer>

                    {/*Sticky Layers*/}
                    <ParallaxLayer
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        sticky={{ start: 1.3, end: 1.7 }}>
                        <h1 className='font-semibold animate-bounce'>⇣Keep on Scrolling ⇣</h1>
                    </ParallaxLayer>

                </Parallax>
            </div>
        </>
    );
}
