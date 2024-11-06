
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



    );
};

export default Banner;