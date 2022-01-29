import './article.css';

export default function Article(props) {
    const {articleTitle, articleGoal, articleLF, articleFeatures, articleProcess, articleLink, articleTags} = props;

    return (
        <>
            <h2 className="articleTitle">{articleTitle}</h2>
            <div className="articleGoal">{articleGoal}</div>
            <div className="articleLF">{articleLF}</div>
            <div className="articleFeatures">{articleFeatures}</div>
            <div className="articleProcess">{articleProcess}</div>
            <div className="articleLink">{articleLink}</div>
            <div className="articleTags">{articleTags}</div>
        </>
    )
}