import { useEffect, useState } from "react";
import { getAddCart, removeCart } from "../utility/utility";
import Invoice from "./Invoice";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Cart = () => {
const [products, setProducts] = useState([])
const [isModal, setIsModal] = useState(false)
const navigate = useNavigate()
useEffect(() => {
    const getCart = getAddCart()
    setProducts(getCart)
}, [])

const handleSort = sortBy => {
        if (sortBy == 'sortByPrice') {
          const sorted = [...products].sort((a, b) => b.price - a.price)
          setProducts(sorted)
        } 
      }
const totalCost = products.reduce((acc, product) => acc + product.price, 0);
const handleDelete = (id) => {
    removeCart(id)
    const deletedProducts = getAddCart();
    setProducts(deletedProducts);
  };
  const handlePurchase = () => {
    if (totalCost > 0) {
      setIsModal(true); 
    }
  };
  const handleCloseModal = () => {
    setIsModal(false); 
    setProducts([]);
    localStorage.setItem('cart', JSON.stringify([]))
    navigate("/");
  };

    return (
        <div>
           
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        Cart
                    </h1>
                </div>
                <div className='space-x-4'>
                    <span className="font-bold">Total Cost: Span:{totalCost}</span>
                    <button onClick={() => handleSort('sortByPrice')} className='btn bg-bgPrimary'>
                        Sort By Price
                    </button>
                    <button
                        onClick={() => handlePurchase()} className='btn bg-bgPrimary' disabled={totalCost === 0}>
                       Purchase
                    </button>
                </div>
            </div>


            <div className="p-8 rounded-2xl gap-10 bg-gray-100">
                {
                    
                    products?.map(product => <Invoice
                        key={product.product_id}
                        product={product}
                        handleDelete={handleDelete}
                    ></Invoice>)
    
                }
                
            </div>
            {isModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
          <div className="flex flex-col justify-center items-center">
          <p><FaCheckCircle className="text-5xl text-green-800" /></p>
            <h2 className="text-2xl font-bold">Payment Succesfully!</h2>
            <p>Thanks For Purchasing.</p>
            <p>Total: <span>{totalCost}</span></p>
          </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={handleCloseModal}
                className="btn bg-bgPrimary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
    );
};



export default Cart;




