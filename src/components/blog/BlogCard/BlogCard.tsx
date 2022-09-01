import { Blog } from "../../../types/Blog";
import { Link } from "react-router-dom";
import "./BlogCard.scss";

type Props = {
    topic: Blog,
    filtering: (param: string) => void,
    clearing: () => void,
    setAll: (bol: boolean) => void,
    setWeb: (bol: boolean) => void,
    setNews: (bol: boolean) => void,
    allFilter: string,
}

export const BlogCard: React.FC<Props> = ({
    topic,
    filtering,
    allFilter,
    setNews,
    setAll,
    setWeb,
    clearing
}) => {
    return (
        <div className="card">
            <Link to={topic.link} className="card__image">
                <img
                    className="card__image-item"
                    src={topic.photo}
                    alt={topic.title}
                />
            </Link>
            <span className="card__date">{topic.date}</span>
            <Link to={topic.link} className="card__title">{topic.title}</Link>
            <p className="card__txt">{topic.text}</p>
            <div className="card__links">
                <button
                    className="card__links-btn"
                    onClick={() => {
                        filtering(allFilter);
                        clearing();
                        setAll(true);
                    }}
                >
                    All
                </button>
                <button
                    className="card__links-btn"
                    onClick={() => {
                        filtering(topic.chapter);
                        clearing();
                        topic.chapter === "News" ? setNews(true) : setWeb(true);
                    }}
                >
                    {topic.chapter}
                </button>
            </div>
        </div>
    )
}