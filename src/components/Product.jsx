import { Link } from "react-router-dom";

const Product = ({ product }) => {
    // console.log('aaa',product)
    const { product_image, product_title, price,product_id } = product || {}
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <div className="card-actions">
                       <Link to={`/product/${product_id}`}> <button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;


// to={`/coffee/${id}`}