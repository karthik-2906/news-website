import { FaArrowRight } from "react-icons/fa6";
import placeholderImg from '../assets/images/newshub-placeholder.png';
import './NewsCard.css'

export default function NewsCard({ article }) {
    const dateStr = article.pubDate;
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).replace(',', '');

    return (
        <div className={"news-card"}>
            <img className='news-card__img' src={article.image_url ? article.image_url : placeholderImg} />
            <div className="news-card__details">
                <div className="news-card__type-container">
                    {article.category.map(category => (
                        <p key={category} className="news-card__desc">{category}</p>
                    ))}
                </div>
                <p className="news-card__date">{formattedDate}</p>
            </div>
            <h2 className='news-card__title'>{article.title}</h2>
            <a href={article.link} target="_blank" className='news-card__btn'>
                Read More
                <FaArrowRight className="news-card__btn-arrow" />
            </a>
        </div>
    )
}