
const Product = ({product}) => {
    const {product_image,product_title, price}=product
    return (
        <div>
            <img src={product_image} alt="" />
            <h4>{product_title}</h4>
            <p>{price}</p>
            <button>View Details</button>
            
        </div>
    );
};

export default Product;



// {
//     "product_id": 1,
//     "product_title": "Dell XPS 13",
//     "product_image": "https://example.com/images/dell_xps_13.jpg",
//     "category": "Laptops",
//     "price": 999.99,
//     "description": "High-performance laptop with a stunning 13-inch display.",
//     "specification": [
//         "Intel i7 Processor",
//         "16GB RAM",
//         "512GB SSD",
//         "13.3-inch FHD Display"
//     ],
//     "availability": true,
//     "rating": 4.8,
//     "other_field": "Ultraportable design"
// }