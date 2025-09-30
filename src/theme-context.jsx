import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

const isDarkModeEnabled = () => {
    const storedPreference = localStorage.getItem("NewsHubTheme");
    if (storedPreference) {
        return storedPreference === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(isDarkModeEnabled);

    const toggleTheme = () => {
        setIsDark(prevState => !prevState);
    }

    const theme = isDark ? "dark" : "light";

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("NewsHubTheme", theme);
    }, [isDark])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}