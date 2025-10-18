import NewsCard from "./NewsCard";
import Skeleton from "./Skeleton";
import './NewsGrid.css';

export default function NewsGrid({ articles, loading, initialLoad }) {
    if (initialLoad && loading) return (
        <div className="news-grid">
            <Skeleton />
        </div>
    );
    
    if (!articles.length) return null;

    return (
        <div className="news-grid">
            {articles.map(article => (
                <NewsCard key={article.link || article.title} article={article} />
            ))}

            {loading && (
                <Skeleton />
            )}
        </div>
    );
}