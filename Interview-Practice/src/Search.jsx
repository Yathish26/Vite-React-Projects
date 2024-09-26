import React, { useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(false);

    const items = [
        { title: 'React Wallpaper', description: 'This is so wild we are making it on the segway' },
        { title: 'Lemonade', description: 'We are selling the Lemonade outside of the Building' },
        { title: 'Sine is Villian', description: 'Sine is the biggest villain on Maths or maybe not' }
    ];

    const handleSearch = () => {
        setFilter(true); 
    };

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className='w-[300px] h-[300px] border bg-gray-300 mx-auto'>
                <h1>Search Toolkit</h1>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border border-black'
                    type="text"
                    placeholder="Search..."
                />
                <button onClick={handleSearch} className='border bg-white'>Search</button>

                {filter ? (
                    filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <div key={index}>
                                <h1 className='text-xl font-semibold'>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )
                ) : (
                    items.map((item, index) => (
                        <div key={index}>
                            <h1 className='text-xl font-semibold'>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}
