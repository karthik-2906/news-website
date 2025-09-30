import './CategoryNav.css'
import Tab from './Tab'

export default function CategoryNav({ categories, activeTab, setActiveTab }) {
    return (
        <div className="category-nav">
            <div className="category-nav-container">
                {categories.map((category) => (
                    <Tab
                        key={category}
                        title={category}
                        isActive={activeTab === category}
                        onClick={() => setActiveTab(category)}
                    />
                ))}
            </div>
        </div>
    )
}