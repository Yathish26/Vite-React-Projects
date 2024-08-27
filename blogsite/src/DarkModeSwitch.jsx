import React, { useState, useEffect } from 'react';
import './DarkModeSwitch.css';

export default function DarkModeSwitch() {
    const [isDarkMode, setIsDarkMode] = useState(false);


    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');

            const blog = document.querySelector('.blogcontainer')
            if(blog){
                document.body.classList.add('blogcontainer-dark')
                document.body.classList.remove('blogcontainer-light')
            }

        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <label className="ui-switch">
            <input 
                type="checkbox" 
                checked={isDarkMode} 
                onChange={()=>setIsDarkMode(!isDarkMode)} 
            />
            <div className="slider">
                <div className="circle" />
            </div>
        </label>
    );
}
