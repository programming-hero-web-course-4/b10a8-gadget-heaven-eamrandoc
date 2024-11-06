import { useEffect, useState } from "react";

import Banner from "../components/Banner";
// import { NavLink, } from "react-router-dom";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { Helmet } from "react-helmet";
// Outlet


const Dashboard = () => {
    const [isActive, setIsActive] = useState(true)
    const handleIsActiveStatus = (status) => {
        // setIsActive(!isActive)      
        if (status === 'cart') {
            setIsActive(true)
        }
        else {
            setIsActive(false)
        }
    }


    
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>                
            </Helmet>
            <div className="">
                <div className="bg-bgPrimary pb-16">
                    <Banner title={'Dashboard'}
                        subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                    ></Banner>
                    {/* <div role="tablist" className="flex justify-center gap-4">
                        <NavLink to="/dashboard/cart" role="tab"
                            className={({ isActive }) =>
                                `tab btn text-xl rounded-3xl px-6 py-2  hover:bg-bgPrimary hover:text-white ${isActive
                                    ? 'bg-white text-bgPrimary'
                                    : 'bg-bgPrimary text-white'
                                }`}> Cart </NavLink>
                        <NavLink to="/dashboard/wishlist" role="tab"
                            className={({ isActive }) =>
                                `tab btn text-xl rounded-3xl px-6 py-2 ${isActive
                                    ? 'bg-white text-bgPrimary'
                                    : 'bg-bgPrimary text-white'
                                }`}> WishList</NavLink>
                    </div> */}
                    <div className='flex justify-center gap-6'>
                        <button onClick={() => handleIsActiveStatus("cart")} className={`${isActive ? "btn btn-warning" : "btn"}`}>Cart</button>
                        <button onClick={() => handleIsActiveStatus("wishlist")} className={`${isActive ? "btn" : "btn btn-warning"}`}>Wishlist </button>
                    </div>
                </div>
            </div>
            {/* <Outlet></Outlet> */}




{
                        isActive ? <Cart></Cart> : <Wishlist></Wishlist>

                    }
        </div>


    );
};

export default Dashboard;