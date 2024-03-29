"use client"
import { ThemeProvider } from 'next-themes';
import { useState , useEffect } from 'react';
import React from 'react';

export default function Provider ({children}){
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return <>{children}</>
      }

    return <ThemeProvider attribute='class'> {children} </ThemeProvider>
}