import NewsCard from "./NewsCard";
import './NewsGrid.css';

export default function NewsGrid({ articles }) {
    if (!articles.length) return null;

    const [featured, ...rest] = articles;
    const firstFour = rest.slice(0, 4);
    const remaining = rest.slice(4);

    return (
        <div className="news-grid">
            <div className="top-stories">
                <NewsCard article={featured} variant="featured" />
                <div className="four-card-grid">
                    {firstFour.map(article => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            </div>
            <div className="more-news">
                {remaining.map(article => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
        </div>
    );
}