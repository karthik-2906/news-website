import { ThemeProvider } from './theme-context';
import { fetchData } from './fetch-data';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import BannerText from './components/BannerText';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';
import { API_KEY } from './assets/apiKey';

export const App = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    const categories = [
        "top",
        "business",
        "crime",
        "domestic",
        "education",
        "entertainment",
        "environment",
        "food",
        "health",
        "lifestyle",
        "politics",
        "science",
        "sports",
        "technology",
        "tourism",
        "world",
        "other"
    ];
    const [activeTab, setActiveTab] = useState("top");
    const [searchTerm, setSearchTerm] = useState("");

    const [loading, setLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);
    const [articles, setArticles] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    const loadArticles = async (isNewLoad = false) => {
        setLoading(true);
        if (isNewLoad) {
            setArticles([]);
            setNextPage(null);
            setInitialLoad(true);
        }

        const params = new URLSearchParams({
            apikey: API_KEY,
            language: "en",
            category: activeTab
        });

        if (selectedCountry?.countryApiCode && selectedCountry.countryApiCode !== "all") {
            params.append("country", selectedCountry.countryApiCode);
        }

        if (nextPage && !isNewLoad) {
            params.append("page", nextPage);
        }

        if (searchTerm.trim() !== "") {
            params.append("q", searchTerm.trim());
        }

        const url = `https://newsdata.io/api/1/news?${params.toString()}`;
        const data = await fetchData(url);

        if (!data?.results) {
            setLoading(false);
            return;
        }

        setArticles(prev => {
            const newUnique = data.results.filter(
                (article, index, self) =>
                    index === self.findIndex(a => a.title === article.title)
            );

            const seenTitles = new Set(prev.map(a => a.title));
            const finalUnique = newUnique.filter(article => !seenTitles.has(article.title));

            return isNewLoad ? finalUnique : [...prev, ...finalUnique];
        });

        setNextPage(data.nextPage);
        setLoading(false);
        setInitialLoad(false);

        console.log("Fetched URL:", url);
        console.log("Fetched Data:", data.results);
    };

    useEffect(() => {
        loadArticles(true);
    }, [selectedCountry, activeTab, searchTerm]);

    return (
        <ThemeProvider>
            <div className='App'>
                <Header
                    selectedCountry={selectedCountry}
                    onCountryChange={handleCountryChange}
                    onSearchEnter={setSearchTerm}
                />
                <CategoryNav
                    categories={categories}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <BannerText />
                <NewsGrid articles={articles} loading={loading} initialLoad={initialLoad} />
                {articles.length > 0 ? (
                    <button
                        className='load-more-btn font-semibold'
                        onClick={() => loadArticles()}
                    >
                        LOAD MORE
                    </button>
                ) : (
                    <p className="error-msg">
                        ❌ No results found. Try adjusting your search term or filters. You may have also run out of free credits for the day
                    </p>
                )}
                <Footer />
            </div>
        </ThemeProvider>
    )
}
