import { useState } from 'react';
import './Header.css'
import Search from './Search';
import { ThemeSwitcher } from './ThemeSwitcher';
import { FiGlobe } from "react-icons/fi";
import usaFlag from '../assets/images/usa-flag.svg';
import indiaFlag from '../assets/images/india-flag.svg';
import kuwaitFlag from '../assets/images/kuwait-flag.svg';

const COUNTRY_OPTIONS = [
    { country: "All", img: null, countryApiCode: "all" },
    { country: "India", img: indiaFlag, countryApiCode: "in" },
    { country: "USA", img: usaFlag, countryApiCode: "us" },
    { country: "Kuwait", img: kuwaitFlag, countryApiCode: "kw" }
];

export default function Header({ selectedCountry, onCountryChange, onSearchEnter }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelectCountry = (country) => {
        onCountryChange(country.countryApiCode === "all" ? null : country);
        setShowDropdown(false);
    };

    return (
        <div className="header">
            <h2 className="header-title">NewsHub</h2>
            <Search onSearchEnter={onSearchEnter} />
            <div className="header-right-container">
                <ThemeSwitcher />
                <div className="country-toggle-container">
                    <button
                        className="country-toggle-btn"
                        onClick={() => setShowDropdown(prev => !prev)}
                    >
                        {selectedCountry ? (
                            <img
                                src={selectedCountry.img}
                                alt={selectedCountry.country}
                                className="country-flag-icon"
                            />
                        ) : (
                            <FiGlobe size={16} />
                        )}
                    </button>

                    {showDropdown && (
                        <div className="country-dropdown">
                            {COUNTRY_OPTIONS.map(country => (
                                <div
                                    className="country-dropdown-item"
                                    key={country.countryApiCode}
                                    onClick={() => handleSelectCountry(country)}
                                >
                                    <span>{country.country}</span>
                                    {country.img && <img src={country.img} />}
                                    {!country.img && country.countryApiCode === "all" && (
                                        <FiGlobe size={16} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}