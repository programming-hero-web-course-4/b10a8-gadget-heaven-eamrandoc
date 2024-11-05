import { useEffect, useState } from "react";
import { getAddCart } from "../utility/utility";
import Product from "../components/Product";

const Dashboard = () => {
    const [products, setProducts] =useState([])
    useEffect(()=>{
        const getCart = getAddCart()
        setProducts(getCart)
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    products?.map(product => <Product
                        key={product.product_id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Dashboard;