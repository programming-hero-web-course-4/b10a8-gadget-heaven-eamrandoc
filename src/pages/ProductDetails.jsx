import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart } from "../utility/utility";

const ProductDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const item = data.find(item => item.product_id === parseInt(id))
        setProduct(item)
    }, [data, id])

    const { product_title, product_image, category, price, description, specification, availability, rating, other_field } = product

    const handleAddToCart = product => {
        addCart(product)
    }
    return (
        <div className="flex items-center justify-center">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <h3> Price: $ {price}</h3>
                    <p>{availability ? "In Stock" : "out of Stock"}</p>
                    <p>{description}</p>
                    <p> <span className="font-bold">Specification:</span>
                        {
                            specification?.map((spec,i)=><li className="list-decimal" key={i}>{spec}</li>)
                        }
                    </p>
                    <p>Other: {other_field}</p>
                    <p>Category: {category}</p>
                    <p>Rating: {rating}</p>

                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

