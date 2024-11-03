import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
// import Products from "../components/Products";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Products></Products> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;