import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Projects</h1>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} video={item.video} img={item.img} link={item.link} desc={item.desc} title={item.title} technology={item.technology}
                    />

                ))}
            </div>
        </div>
    );
};

export default ProductList;