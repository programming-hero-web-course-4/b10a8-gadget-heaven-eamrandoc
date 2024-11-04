import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Banner></Banner>
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