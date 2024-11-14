
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList, removeCartFromLS, removeWishFromLS } from '../../utilities/localStorage';



export const ObjectContext = createContext({});

const Root = () => {
    const location = useLocation();
    useEffect(() => {
        const pathSelect = {
            '/dashboard': 'DashBoard',
            '/statistics': 'Statistics',
            '/popularity': 'Popularity'
        }
        const pageTitle = pathSelect[location.pathname] || 'Home';
        document.title = `Gadget Zone | ${pageTitle}`;
    }, [location]);

    const product = useLoaderData();

    useEffect(() => {
        if (product.length > 0) {
            const storedCart = getStoredCartList();
            const savedCart = [];
            for (const product_id of storedCart) {
                const cart = product.find(p => p.product_id === product_id);
                if (cart) {
                    savedCart.push(cart);
                }
            }
            setSelectedProducts(savedCart);
        }
    }, [product])

    useEffect(() => {
        if (product.length > 0) {
            const storedWish = getStoredWishList();
            const savedWish = [];
            for (const product_id of storedWish) {
                const wish = product.find(p => p.product_id === product_id);
                if (wish) {
                    savedWish.push(wish);
                }
            }
            setSelectedWishList(savedWish);
        }
    }, [product])


    const [sort, setSort] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedWishList, setSelectedWishList] = useState([]);
    const [isAddCart, setIsAddCart] = useState([]);
    const [isAddWishlist, setIsAddWishlist] = useState([]);
    const [price, setPrice] = useState(0);
    const [wishPrice, setWishPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePurchase = () => {
        setFinalPrice(price)
        setIsModalOpen(true);
        setPrice(0);
        setSelectedProducts([]);
        setIsAddCart([]);
    }

    const handleIncreasePrice = (pr) => {
        setPrice(pr + price);

    }

    const handleDeletePrice = (product_id) => {
        const product = selectedProducts.find((p) => p.product_id == product_id);
        setPrice(price - product.price);
    }

    const handleDelete = (product_id) => {
        handleDeletePrice(product_id);
        const remainingProduct = selectedProducts.filter((p) => p.product_id !== product_id);
        setSelectedProducts(remainingProduct);
        setIsAddCart(isAddCart.filter(id => id !== product_id));
        removeCartFromLS(product_id);
        toast.warning("Product removed");
    }

    const handleSelectedProducts = (product) => {
        const isExist = selectedProducts.find((p) => p.product_id == product.product_id);
        const newTotalPrice = price + product.price;
        if (isExist) {
            toast.error("Product already added to your cart!");
        }

        else if (newTotalPrice > 1000) {
            toast.error("This item exceeds the $1000 limit and cannot be added to the cart!");
        }
        else {
            addToStoredCartList(product.product_id);
            toast.success("Added to your Cart!");
            const newProducts = [...selectedProducts, product];
            setSelectedProducts(newProducts);
            handleIncreasePrice(product.price);
            setIsAddCart([...isAddCart, product.product_id]);
            handleWishlistDelete(product.product_id);

        }
    }

    const handleWishlistProducts = (product) => {
        const isExist = selectedWishList.find((p) => p.product_id == product.product_id);
        if (isExist) {
            toast.error("Product already added to your wishlist!");
        }

        else {
            addToStoredWishList(product.product_id);
            toast.success("Added to your WishList!");
            const newProducts = [...selectedWishList, product];
            setSelectedWishList(newProducts);
            setIsAddWishlist([...isAddWishlist, product.product_id]);
            handleIncreaseWishPrice(product.price);

        }
    }

    const handleIncreaseWishPrice = (pr) => {
        setWishPrice(pr + wishPrice);

    }

    const handleWishlistDelete = (product_id) => {
        const product = selectedWishList.find((p) => p.product_id == product_id);
        setWishPrice(wishPrice - product.price);
        const remainingProduct = selectedWishList.filter((p) => p.product_id !== product_id);
        setSelectedWishList(remainingProduct);
        setIsAddWishlist(isAddWishlist.filter(id => id !== product_id));
        removeWishFromLS(product_id);
        toast.info("Product removed from wishlist");
    }

    const handleSort = sortType => {
        setSort(sortType);
        if (sortType === 'Price') {
            const sortedCartList = [...selectedProducts].sort((a, b) => b.price - a.price);
            setSelectedProducts(sortedCartList);
        }

    }



    const sendData = {
        product,
        price,
        handleIncreasePrice,
        handleDelete,
        handleSelectedProducts,
        selectedProducts,
        handlePurchase,
        setIsModalOpen,
        finalPrice,
        isModalOpen,
        setFinalPrice,
        isAddCart,
        isAddWishlist,
        handleWishlistProducts,
        selectedWishList,
        handleWishlistDelete,
        wishPrice,
        handleSort

    }



    return (
        <div className='max-w-7xl mx-auto'>
            <ObjectContext.Provider value={sendData} >
                <Navbar></Navbar>
                <div className='min-h-[calc(100vh-484px)]'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </ObjectContext.Provider>
        </div>
    );
};

export default Root;