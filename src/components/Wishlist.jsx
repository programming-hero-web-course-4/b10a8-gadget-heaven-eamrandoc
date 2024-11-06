import { useEffect, useState } from "react";
import { getWishlist, removeWishlist } from "../utility/wishlist";
import Wish from "./Wish";


const Wishlist = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const wishlist = getWishlist()
        setProducts(wishlist)
    }, [])
 
    const handleDelete = (id) => {
        removeWishlist(id)
        const deletedProducts = getWishlist();
        setProducts(deletedProducts);
      };
      const updateWishlist = (productId) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.product_id !== productId)
        );
      };
    return (
        <div>
            <h1 className='text-2xl font-bold'>
                        Wishlist
                    </h1>
            <div className="p-8 rounded-2xl gap-10 bg-gray-100">
                {
                    products?.map(product => <Wish
                        key={product.product_id}
                        product={product}
                        handleDelete={handleDelete}
                        updateWishlist={updateWishlist}
                    ></Wish>)
                }
            </div>
        </div>
    );
};

export default Wishlist;