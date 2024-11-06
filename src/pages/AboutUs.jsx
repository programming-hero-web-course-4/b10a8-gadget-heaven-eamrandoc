
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Gadget Heaven</title>                
            </Helmet>
            <div className='bg-bgPrimary'>
                <Banner title={'About US'} subtitle={'We are here to help you with all your technology needs. We aim to provide all the requirements of our customers and help them satisfy their needs, wants, and desires.'}></Banner>
            </div>


            <div className="min-h-screen bg-gray-100 py-8 px-4">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                    <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Welcome to our website! We are passionate about providing the best gadgets and technology products for our customers.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                        Our mission is to offer the latest in tech innovations, from smartphones and laptops to home automation and wearables.
                        We aim to deliver high-quality products that meet the diverse needs of tech enthusiasts everywhere.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                        Our team is dedicated to helping you find the perfect gadgets that enhance your life. Thank you for visiting our site,
                        and we hope you enjoy exploring all the amazing products we have to offer!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;

