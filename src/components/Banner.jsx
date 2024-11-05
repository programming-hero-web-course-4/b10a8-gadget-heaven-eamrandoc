
const Banner = ({ title, subtitle}) => {
    return (

        <div className="rounded-b-3xl">
            <div className="hero-content text-center">
                <div className="max-w-4xl space-y-6 text-white">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{subtitle}</p>
                    
                </div>
            </div>
        </div>




        // <div className="min-h-screen">
        //     <div className="relative">
        //         <div className=" bg-base-200 h-96">
        //             <div className="hero-content text-center">
        //                 <div className="">
        //                     <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        //                     <p className="py-6">
        //                     Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        //                     </p>
        //                     <button className="btn btn-primary">Shop Now</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="absolute p-6 rounded-3xl bg-red-800 top-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-3/4 max-w-lg">
        //             <img className="rounded-3xl" src={bannerImg} alt="" />
        //         </div>
        //     </div>

        // </div>
    );
};

export default Banner;