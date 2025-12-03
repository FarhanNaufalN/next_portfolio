"use client";

import React, { useEffect, useState } from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core"; 


type AppTheme = 'light' | 'dark';

export const ThemeToggle: React.FC = () => {

  const { theme, setTheme } = useTheme(); 
  
  const [mounted, setMounted] = useState(false);

  const [currentTheme, setCurrentTheme] = useState<AppTheme>('light'); 

 
  useEffect(() => {
    setMounted(true);
    
    const storedTheme = localStorage.getItem('data-theme');
    
    let initialTheme: AppTheme = 'light'; 

    if (storedTheme) {
    
      initialTheme = storedTheme as AppTheme; 

    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
   
      initialTheme = 'dark';
    }

    
    setTheme(initialTheme); 
    document.documentElement.setAttribute('data-theme', initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setCurrentTheme(initialTheme);
  }, [setTheme]); 


 
  useEffect(() => {
   
    const themeFromDOM = document.documentElement.getAttribute("data-theme") as AppTheme || "light";
    setCurrentTheme(themeFromDOM);
  }, [theme]);


 
  const icon = currentTheme === 'dark' ? 'light' : 'dark';
  const nextTheme: AppTheme = currentTheme === 'light' ? 'dark' : 'light';

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => {
      
        setTheme(nextTheme);
        
       
        try {
        
          localStorage.setItem('data-theme', nextTheme);
          
          document.documentElement.setAttribute('data-theme', nextTheme);
          if (nextTheme === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
          
          setCurrentTheme(nextTheme);
        } catch (e) {
        
        }
      }}
      aria-label={`Switch to ${nextTheme} mode`}
      size="l"
    />
  );
};