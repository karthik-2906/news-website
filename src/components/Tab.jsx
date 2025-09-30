import './Tab.css'

export default function Tab({ title, isActive, onClick }) {
    return (
        <button
            className={`tab-btn ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}