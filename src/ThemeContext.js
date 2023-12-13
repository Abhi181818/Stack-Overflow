import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isNightTheme, setIsNightTheme] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=afe8699d26e89acfd2702c91649dc12b`)
                .then((response) => {
                    const { weather } = response.data;
                    const isBadWeather = weather.some((condition) => condition.main === 'Rain' || condition.main === 'Snow' || condition.main === 'Storm');
                    // setIsNightTheme(isBadWeather || new Date().getHours() >= 18 || new Date().getHours() < 6);
                    if (isBadWeather) {
                        setIsNightTheme(true);
                    }

                })
                .catch((error) => console.error(error));
        });
        if (new Date().getHours() >= 18 || new Date().getHours() < 6) {
            setIsNightTheme(true);
        }
    }, []);

    const contextValue = {
        isNightTheme,
    };

    return (
        <>
            <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
        </>
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
