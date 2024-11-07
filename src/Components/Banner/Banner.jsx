import BannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero-content text-center mb-[600px]">
                <div className="w-8/12 mx-auto pt-20 relative">
                    <h1 className="mb-5 text-black text-3xl font-bold">Upgrade Your Tech Accessorize with Gadget Zone Accessories</h1>
                    <p className="mb-5 text-xl font-medium text-[#131313B3]">
                        Discover the latest gadgets that will elevate your experience. From smart devices to the most innovative accessories, we have everything you need!
                    </p>
                    <button className="btn border px-2 py-3 md:px-4 rounded-3xl">Shop Now</button>
                </div>
            </div>
            <div className="rounded-3xl w-11/12 md:w-10/12 lg:w-8/12 mx-auto border-2 absolute bg-[#FFFFFF4D] p-5 top-[700px] md:top-[460px] lg:top-[400px] left-4 md:left-16 lg:left-56">
            
                <div
                    className="hero h-[562px] rounded-3xl"
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