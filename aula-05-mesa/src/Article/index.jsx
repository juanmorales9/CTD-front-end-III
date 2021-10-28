import './style.css';

const Article = ({ buttonType, buttonText, video }) => {
    return (
        <>
            <iframe width="900" height="506" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button className="bannerButton" type={buttonType}>{buttonText}</button>
        </>
    );
};

export default Article;