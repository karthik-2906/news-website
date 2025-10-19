import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import './Search.css';

export default function Search({ onSearchEnter }) {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onSearchEnter(inputValue);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="search-btn" onClick={() => onSearchEnter(inputValue)} >
                <IoSearchOutline size={16} />
            </button>
        </div>
    );
}
