

const Test = () => {
    return (
        <div className='bg-red-500 relative'>
            <h2>This iS from Test</h2>
            <Banner></Banner>
            <button>Test</button>
            <img className='absolute top-1/2 left-1/2' src={bannerImg} alt="" />
        </div>
    );
};

export default Test;