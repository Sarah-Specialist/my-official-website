import './article.css';

export default function Article(props) {
    const {articleTitle, articleParagraph} = props;

    return (
        <>
            <span className="articleImage">image</span>
            <span className="description">
                <h3 className="articleTitle">{articleTitle}</h3>
                <p className="articleParagraph">{articleParagraph}</p>
            </span>
        </>
    )
}