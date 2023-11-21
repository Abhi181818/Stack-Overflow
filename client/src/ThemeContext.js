import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isNightTheme, setIsNightTheme] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const currentHour = new Date().getHours();
            const isNight = currentHour >= 16 || currentHour < 6;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    const apiKey = 'afe8699d26e89acfd2702c91649dc12b';
                    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

                    fetch(apiUrl)
                        .then(response => response.json())
                        .then(data => {
                            const weatherCondition = data.weather[0].main;

                            const isBadWeather = ['Thunderstorm', 'Rain', 'Snow'].includes(weatherCondition);

                            setIsNightTheme(isNight || isBadWeather);

                        })
                        .catch(error => {
                            alert('Error getting weather data:', error);
                            setIsNightTheme(isNight);
                        });
                });
            } else {
                setIsNightTheme(isNight);
                alert('Geolocation not supported by browser.');
            }

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
