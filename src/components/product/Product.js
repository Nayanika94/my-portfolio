import "./Product.css";
import Video from "../video/Video";

const Product = ({ img, link, desc, title, technology, video }) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                {video && <Video video={video} />}
                {img && <img src={img} alt="" className="p-img" />}

            </a>
            {video && <a href={video} target="_blank" rel="noreferrer" className="p-title">{title}</a>}
            {img && <a href={link} target="_blank" rel="noreferrer" className="p-title">{title}</a>}
            <div>{desc}</div>
            <div className="p-title">Technologies:</div>
            <div>{technology}</div>
        </div>
    );
};

export default Product;