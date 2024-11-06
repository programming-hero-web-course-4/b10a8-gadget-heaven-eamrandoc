import { RxCross2 } from "react-icons/rx";

const Invoice = ({ product, handleDelete }) => {
    const { product_image, product_title, price, description,product_id } = product || {}
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
                        onClick={()=>handleDelete(product_id)} className="p-2 rounded-full border border-red-800"><RxCross2 className="text-red-600"></RxCross2></button></p>
                    </div>
                    <p>{description}</p>
                    <p className="font-bold">$ {price}</p>

                </div>
            </div>


        </div>
    );
};

export default Invoice;