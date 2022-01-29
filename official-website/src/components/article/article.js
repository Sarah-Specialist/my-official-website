import './article.css';

export default function Article(props) {
    const {src, alt, articleTitle, articleGoal, articleLF, articleFeatures, articleProcess, articleLink} = props;

    return (
        <div className="article">
            <div className="articleImg"><img src={src} alt={alt} /></div>
            <h2 className="articleTitle">{articleTitle}</h2>
            <div className="articleGoal">{articleGoal}</div>
            <div className="articleLF">{articleLF}</div>
            <div className="articleFeatures">{articleFeatures}</div>
            <div className="articleProcess">{articleProcess}</div>
            <div className="articleLink">{articleLink}</div>
        </div>
    )
}