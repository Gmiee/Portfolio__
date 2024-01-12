"use client"
import React from 'react';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else if (theme === 'light') {
            setTheme('dark');
        }
        // You can add more cases if needed
    };

    return (

        <>

            {/* <div className='flex justify-end'>
    <button onClick={toggleTheme}>
        {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />  }
      </button>
    </div> */}

            <div className='flex'>
                <button className='dark:text-white' onClick={() => setTheme('light')}><MdOutlineLightMode /></button>
                <button className='dark:text-white' onClick={() => setTheme('dark')}><MdOutlineDarkMode /></button>
            </div>
        </>
    )
}

export default ThemeSwitcher