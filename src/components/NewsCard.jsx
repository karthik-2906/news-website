import './NewsCard.css'

export default function NewsCard({ article, variant = "default" }) {
    return (
        <div className={variant === "featured" ? "featured-card" : "news-card"}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <span>{article.category}</span>
        </div>
    )
}