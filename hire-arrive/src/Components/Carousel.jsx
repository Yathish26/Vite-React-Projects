import React from 'react'
import { Link } from 'react-router-dom'

export default function Carousel({ title, description, image, bgcolor, link }) {
    return (
        <>
            <Link to={link}>
                <div style={{ backgroundColor: bgcolor }} className='w-52 h-64 rounded-3xl flex-shrink-0 cursor-pointer relative overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out'>
                    <div className="p-3 pt-10">
                        <h1 className="text-white text-4xl drop-shadow-lg font-anton">{title}</h1>
                        <h1 className="text-white font-bebas drop-shadow-lg mt-4 font-[300] text-2xl">{description}</h1>
                    </div>
                    <div className="absolute bottom-0 right-5">
                        <img className="w-40 h-fit transition-transform duration-300 ease-in-out hover:scale-110" src={`/tran/${image}.png`} alt="Image" />
                    </div>
                </div>
            </Link>

        </>
    )
}
