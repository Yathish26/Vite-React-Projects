import React from 'react';
import subslider from '../Editable Tool/subslider';
import { Link } from 'react-router-dom';

export default function Subcatslider({ head, title }) {
    const titlesArray = Array.isArray(title) ? title : [];

    return (
        <div className='my-8 mx-6'>
            <h1 className='text-3xl my-2 font-spartan font-semibold'>{head}</h1>
            <div className='flex gap-6 mo:overflow-y-auto mo:scrollbar-hide mo:flex-nowrap overflow-y-auto'>
                {titlesArray.length > 0 ? (
                    titlesArray.map((item, index) => {
                        let categoryData;
                        for (const category in subslider) {
                            if (subslider[category][item]) {
                                categoryData = subslider[category][item];
                                break;
                            }
                        }

                        return (
                            <div
                                key={index}
                                className='rounded-md flex-shrink-0 bg-gray-100 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'
                            >
                                <Link to={categoryData.location}>
                                {categoryData ? (
                                    <img
                                        className='w-[200px] h-[150px] rounded-t-md object-cover'
                                        src={categoryData.image}
                                        alt={categoryData.alt}
                                    />
                                ) : (
                                    <img
                                        className='w-fit h-fit rounded-t-md object-cover'
                                        src="https://placehold.co/200x150"
                                        alt="Placeholder"
                                    />
                                )}
                                <p className='text-center font-spartan text-lg font-medium text-gray-700 mt-2'>
                                    {item}
                                </p>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <p>No services available</p>
                )}
            </div>
        </div>
    );
}
