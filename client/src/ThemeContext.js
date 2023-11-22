import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isNightTheme, setIsNightTheme] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const currentHour = new Date().getHours();
            const isNight = currentHour >= 18 || currentHour < 6;
            setIsNightTheme(isNight);
        };

        checkTime();

        const intervalId = setInterval(() => {
            checkTime();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const contextValue = {
        isNightTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { ThemeProvider, useTheme };
