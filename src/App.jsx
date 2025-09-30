import { ThemeProvider } from './theme-context';
import { fetchData } from './fetch-data';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import BannerText from './components/BannerText';
import NewsGrid from './components/NewsGrid';

export const App = () => {
    const categories = ["All", "Business", "Technology", "Sports", "Health"];
    const [activeTab, setActiveTab] = useState("All");

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const loadArticles = async () => {
            const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
            setArticles(data);
            console.log(data)
        };

        loadArticles();
    }, []);

    return (
        <ThemeProvider>
            <div className='App'>
                <Header />
                <CategoryNav
                    categories={categories}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <BannerText />
                <NewsGrid articles={articles} />
            </div>
        </ThemeProvider>
    )
}
