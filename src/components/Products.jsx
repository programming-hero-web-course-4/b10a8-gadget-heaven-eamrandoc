import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const products = useLoaderData()
    // console.log(products)
    return (
        <div>
            <div>Explore Cutting Edge Gadget</div>
            <div className="flex">
                <div className="w-44">
                    <ul>
                    <li>All Products</li>
                    <li>Laptops</li>
                    <li>Phones</li>
                    <li>Accesories</li>
                    <li>MacBook</li>
                    <li>iPhone</li>
                    </ul>
                </div>
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {
                            products.map(product=> <Product 
                                key={product.product_id}
                                product={product}
                                ></Product>)
                        }
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Products;