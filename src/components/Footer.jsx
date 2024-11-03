import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center justify-center bg-base-200 text-base-content border-base-300 border-b px-10 py-4">
                <div>
                    <h1 className="text-3xl font-bold">Gadget Heaven</h1>
                    <p>
                        Leading The Way in cutting-edge technology and innovation
                    </p>
                </div>
            </footer>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Product Support</Link>
                    <Link className="link link-hover">Order Tracking</Link>
                    <Link className="link link-hover">Shipping & Delivery</Link>
                    <Link className="link link-hover">Returns</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Careers</Link>
                    <Link className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of Service</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
            <footer className="footer footer-center justify-center bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </footer>
        </div>
    );
};

export default Footer;