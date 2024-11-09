import BannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className="hero-content text-center mb-[350px] pb-[250px] bg-[#9538E2]">
                <div className="w-8/12 mx-auto pb-10 relative">
                    <h1 className="mb-5 text-white text-3xl font-bold">Upgrade Your Tech Accessorize with Gadget Zone Accessories</h1>
                    <p className="mb-5 text-xl font-medium text-white">
                        Discover the latest gadgets that will elevate your experience. From smart devices to the most innovative accessories, we have everything you need!
                    </p>
                    <button className="btn font-bold border px-2 py-3 md:px-4 rounded-3xl text-[#9538E2]">Shop Now</button>
                </div>
            </div>
            <div className="rounded-3xl w-11/12 md:w-10/12 lg:w-8/12 mx-auto border-2 border-white absolute bg-[#FFFFFF4D] p-5 top-[700px] md:top-[460px] lg:top-[400px] left-4 md:left-16 lg:left-56">
            
                <div
                    className="hero h-[500px] rounded-3xl"
                    style={{
                        backgroundImage: `url(${BannerImg})`,
                        backgroundColor: '#FFFFFF4D',
                    }}>
                </div>
            </div>
        </div>
    );
};

export default Banner;