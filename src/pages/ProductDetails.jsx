import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addCart } from "../utility/utility";
import Banner from "../components/Banner";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { addWishlist } from "../utility/wishlist";
import { Helmet } from "react-helmet";

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
    const handleAddToWishlist = product => {
        addWishlist(product)
    }
    return (
        <div>
            <Helmet>
                <title>Product Details | Gadget Heaven</title>
            </Helmet>

            <div className="lg:h-[900px]">
                <div className="bg-bgPrimary pb-44">
                    <Banner title={'Product Details'}
                        subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                    ></Banner>
                    <div className="relative">
                        <div className="absolute h-96 p-4 bg-gray-50 bg-opacity-10 rounded-3xl top-20 left-1/2 transform -translate-x-1/2 max-w-5xl">
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src={product_image}
                                        alt="Album" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product_title}</h2>
                                    <h3> Price: $ {price}</h3>
                                    <p className="bg-green-200 w-32 py-2 text-green-700 rounded-3xl px-7">{availability ? "In Stock" : "out of Stock"}</p>
                                    <p>{description}</p>
                                    <p> <span className="font-bold">Specification:</span>
                                        {
                                            specification?.map((spec, i) => <li className="list-decimal" key={i}>{spec}</li>)
                                        }
                                    </p>
                                    <p className="font-bold">Other: {other_field}</p>
                                    <p className="font-bold">Category: {category}</p>
                                    <p className="font-bold">Rating: {rating}</p>

                                    <div className="card-actions">
                                        <button onClick={() => handleAddToCart(product)} className="btn bg-white text-bgPrimary rounded-3xl px-7 hover:bg-bgPrimary hover:text-white">Add To Cart <span> <BsCart className="text-black text-2xl"></BsCart></span></button>
                                        <button onClick={() => handleAddToWishlist(product)} className="btn bg-white text-bgPrimary rounded-3xl px-7 hover:bg-bgPrimary hover:text-white "><CiHeart className="text-black text-2xl"></CiHeart></button>
                                    </div>
                                </div>
                            </div>








                        </div>
                    </div>
                </div>
            </div>

        </div>









    );
};

export default ProductDetails;

