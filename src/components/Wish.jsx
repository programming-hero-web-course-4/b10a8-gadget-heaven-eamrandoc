import { RxCross2 } from "react-icons/rx";
import { removeWishlist } from "../utility/wishlist";
import { addCart } from "../utility/utility";

const Wish = ({ product, handleDelete,updateWishlist }) => {
    const { product_image, product_title, description, product_id } = product || {}
    const handleAddToCart = (id) => {
        removeWishlist(id);
        addCart(product)
        updateWishlist(id)
    }
    return (
        <div className="p-8 mb-6 bg-white rounded-2xl">
            <div className="flex gap-10">
                <figure>
                    <img
                        className="rounded-xl w-36 h-32"
                        src={product_image}
                        alt="" />
                </figure>
                <div className="flex-1 space-y-5">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">{product_title}</h2>
                        <p><button
                            onClick={() => handleDelete(product_id)} className="p-2 rounded-full border border-red-800"><RxCross2 className="text-red-600"></RxCross2></button></p>
                    </div>
                    <p>{description}</p>
                    <p><button className="btn bg-bgPrimary text-white rounded-3xl" onClick={()=>handleAddToCart(product_id)}>Add to Cart</button></p>

                </div>
            </div>
           


        </div>
    );
};

export default Wish;