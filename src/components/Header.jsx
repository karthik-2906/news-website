import './Header.css'
import Search from './Search';
import { ThemeSwitcher } from './ThemeSwitcher';

export default function Header() {
    return (
        <div className="header">
            <h2 className='header-title'>NewsHub</h2>
            <Search />
            <ThemeSwitcher />
        </div>
    )
}