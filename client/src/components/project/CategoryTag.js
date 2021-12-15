import './CategoryTag.css';

const CategoryTag = ({ category }) => {
    const words = category.split(' ');

    return (
        <div className="CategoryTag">
            <div className="CategoryTag-icon">Icon</div>
            <div className="CategoryTag-text-container">
                {words.map((word, i) => <p className="CategoryTag-text" key={i}>{word}</p>)}
            </div>
            <div className="CategoryTag-triangle" />
        </div>
    )
}

export default CategoryTag;
