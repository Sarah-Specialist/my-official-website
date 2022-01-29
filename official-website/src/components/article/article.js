import './article.css';

export default function Article(props) {
    const {articleImg, articleTitle, articleDiv} = props;

    return (
        <>
            <span className="articleImage">{articleImg}</span>
            <span className="description">
                <h3 className="articleTitle">{articleTitle}</h3>
                <div className="articleDiv">{articleDiv}</div>
            </span>
        </>
    )
}