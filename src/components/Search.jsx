import { IoSearchOutline } from "react-icons/io5";
import './Search.css';

export default function Search() {
    return (
        <div className="search-container">
            <IoSearchOutline className="search-icon" />
            <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
            />
        </div>
    );
}
