import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import bannerImg from '../assets/banner.jpg'
import { Helmet } from "react-helmet";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Home | Gadget Heaven</title>                
            </Helmet>
            <div className="lg:h-[900px]">
                <div className="bg-bgPrimary pb-44">
                    <Banner title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
                        subtitle={' Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                    ></Banner>
                    <div className="relative">
                        <div className="flex justify-center">
                            <Link to='/dashboard'><button className="btn bg-white text-bgPrimary rounded-3xl px-7 hover:bg-bgPrimary hover:text-white">Shop Now</button></Link>
                        </div>
                        <div className="absolute h-96 p-4 bg-gray-50 bg-opacity-10 rounded-3xl top-20 left-1/2 transform -translate-x-1/2 max-w-5xl">
                            <img className="rounded-3xl" src={bannerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-center my-10">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-20">
                <div>
                    <Categories categories={categories}></Categories>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Home;