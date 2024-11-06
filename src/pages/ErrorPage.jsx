import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
          <Helmet>
                <title>ErrorPage | Gadget Heaven</title>                
            </Helmet>
           <div className="flex flex-col justify-center items-center min-h-screen text-center bg-gray-100">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="mt-6 px-6 py-2 text-white bg-bgPrimary hover:bg-bgPrimary rounded-lg">
        Go back
      </Link>
    </div>
        </div>
    );
};

export default ErrorPage;