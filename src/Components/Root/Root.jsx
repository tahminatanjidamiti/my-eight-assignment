
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';




const Root = () => {
    
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-490px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;