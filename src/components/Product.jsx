import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { product_image, product_title, price, product_id } = product || {}
    return (
        <div>
            <div className="card card-compact shadow-xl">
                <figure>
                    <img
                        className="rounded-xl h-56"
                        src={product_image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                        <Link to={`/product/${product_id}`}> <button className="btn rounded-3xl text-bgPrimary hover:bg-bgPrimary hover:text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

