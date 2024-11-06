import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
    const { category } = useParams()
    console.log(category)
    const data = useLoaderData()
    const [products, setProducts] = useState(data)
    
    useEffect(() => {
       if(category){
        if (category === 'All-Products') {
            setProducts(data)          
        }
        else{
            const allProducts = [...data].filter(product => product.category === category) 
            setProducts(allProducts) 
        }

       }
       else{
        setProducts(data.slice(0,8))        
       }
       
    }, [data, category]) 
    // complete
    return (
        <div className="bg-white rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    products.length > 0 ? products.map(product => <Product
                        key={product.product_id}
                        product={product}
                    ></Product>) : <h2 className="text-2xl mt-4">Cooming Soon</h2>
                }
            </div>
            <div className="flex justify-between my-8">
                {/* <button onClick={() => setProducts(data)} className="btn rounded-3xl px-10 text-bgPrimary hover:bg-bgPrimary hover:text-white">View All</button>
                <button onClick={() => setProducts(data.slice(0, 8))} className="btn rounded-3xl px-10 text-bgPrimary hover:bg-bgPrimary hover:text-white">Hide</button> */}
            </div>

        </div>
    );
};

export default Products;


// (<NavLink
//     key={category.category}
//     role="tab" className="tab">{category.category}</NavLink>)