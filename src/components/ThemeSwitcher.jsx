import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../theme-context";
import './ThemeSwitcher.css'

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={() => toggleTheme()}
            className="theme-switcher-btn"
        >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
        </button>
    )
}
