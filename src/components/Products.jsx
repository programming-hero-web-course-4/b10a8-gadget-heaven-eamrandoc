import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
    const { category } = useParams()
    const data = useLoaderData()
    const [products, setProducts] = useState(data)
    const allProducts = category ? products.filter(product => product.category === category) : data
    useEffect(() => {
        if (category === 'All-Products') {
            // const filterCategory = [...data].filter(product => product.category === category)
            setProducts(data.slice(0, 8))
        } else {
            setProducts(allProducts)
        }
    }, [data, allProducts, category])
    // const products = useLoaderData()
    return (
        <div className="bg-white rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    products?.map(product => <Product
                        key={product.product_id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="flex justify-between my-8">
                <button onClick={() => setProducts(data)} className="btn rounded-3xl px-10 text-bgPrimary hover:bg-bgPrimary hover:text-white">View All</button>
                <button onClick={() => setProducts(data.slice(0, 8))} className="btn rounded-3xl px-10 text-bgPrimary hover:bg-bgPrimary hover:text-white">Hide</button>
            </div>

        </div>
    );
};

export default Products;


// (<NavLink
//     key={category.category}
//     role="tab" className="tab">{category.category}</NavLink>)